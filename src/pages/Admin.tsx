import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sun, LogOut, FolderOpen, Phone, Settings, Users, Plus, Edit, Trash2, Upload, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  location: string | null;
  capacity: string | null;
  image_url: string | null;
  is_featured: boolean | null;
  display_order: number | null;
}

interface ContactInfo {
  id: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  whatsapp: string | null;
  google_maps_embed: string | null;
}

const Admin = () => {
  const { user, userRole, isAdmin, isEditor, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [projects, setProjects] = useState<Project[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [uploading, setUploading] = useState(false);

  // Project form state
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    capacity: "",
    image_url: "",
    is_featured: false,
    display_order: 0,
  });

  // Contact form state
  const [contactForm, setContactForm] = useState({
    phone: "",
    email: "",
    address: "",
    whatsapp: "",
    google_maps_embed: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && !loading) {
      fetchData();
    }
  }, [user, loading]);

  const fetchData = async () => {
    setLoadingData(true);
    
    // Fetch projects
    const { data: projectsData, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true });

    if (projectsError) {
      console.error("Error fetching projects:", projectsError);
    } else {
      setProjects(projectsData || []);
    }

    // Fetch contact info
    const { data: contactData, error: contactError } = await supabase
      .from("contact_info")
      .select("*")
      .maybeSingle();

    if (contactError) {
      console.error("Error fetching contact info:", contactError);
    } else if (contactData) {
      setContactInfo(contactData);
      setContactForm({
        phone: contactData.phone || "",
        email: contactData.email || "",
        address: contactData.address || "",
        whatsapp: contactData.whatsapp || "",
        google_maps_embed: contactData.google_maps_embed || "",
      });
    }

    setLoadingData(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(fileName, file);

    if (uploadError) {
      toast({
        title: "Upload failed",
        description: uploadError.message,
        variant: "destructive",
      });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    setProjectForm({ ...projectForm, image_url: urlData.publicUrl });
    setUploading(false);
    toast({ title: "Image uploaded successfully" });
  };

  const handleProjectSubmit = async () => {
    if (!projectForm.title) {
      toast({
        title: "Title required",
        description: "Please enter a project title",
        variant: "destructive",
      });
      return;
    }

    if (editingProject) {
      const { error } = await supabase
        .from("projects")
        .update({
          title: projectForm.title,
          description: projectForm.description || null,
          category: projectForm.category || null,
          location: projectForm.location || null,
          capacity: projectForm.capacity || null,
          image_url: projectForm.image_url || null,
          is_featured: projectForm.is_featured,
          display_order: projectForm.display_order,
        })
        .eq("id", editingProject.id);

      if (error) {
        toast({
          title: "Update failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({ title: "Project updated successfully" });
        fetchData();
        resetProjectForm();
      }
    } else {
      const { error } = await supabase.from("projects").insert({
        title: projectForm.title,
        description: projectForm.description || null,
        category: projectForm.category || null,
        location: projectForm.location || null,
        capacity: projectForm.capacity || null,
        image_url: projectForm.image_url || null,
        is_featured: projectForm.is_featured,
        display_order: projectForm.display_order,
        created_by: user?.id,
      });

      if (error) {
        toast({
          title: "Create failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({ title: "Project created successfully" });
        fetchData();
        resetProjectForm();
      }
    }
  };

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      description: "",
      category: "",
      location: "",
      capacity: "",
      image_url: "",
      is_featured: false,
      display_order: 0,
    });
    setEditingProject(null);
    setProjectDialogOpen(false);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description || "",
      category: project.category || "",
      location: project.location || "",
      capacity: project.capacity || "",
      image_url: project.image_url || "",
      is_featured: project.is_featured || false,
      display_order: project.display_order || 0,
    });
    setProjectDialogOpen(true);
  };

  const handleDeleteProject = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      toast({
        title: "Delete failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Project deleted" });
      fetchData();
    }
  };

  const handleContactSubmit = async () => {
    if (contactInfo) {
      const { error } = await supabase
        .from("contact_info")
        .update({
          phone: contactForm.phone || null,
          email: contactForm.email || null,
          address: contactForm.address || null,
          whatsapp: contactForm.whatsapp || null,
          google_maps_embed: contactForm.google_maps_embed || null,
          updated_by: user?.id,
        })
        .eq("id", contactInfo.id);

      if (error) {
        toast({
          title: "Update failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({ title: "Contact info updated" });
        fetchData();
      }
    } else {
      const { error } = await supabase.from("contact_info").insert({
        phone: contactForm.phone || null,
        email: contactForm.email || null,
        address: contactForm.address || null,
        whatsapp: contactForm.whatsapp || null,
        google_maps_embed: contactForm.google_maps_embed || null,
        updated_by: user?.id,
      });

      if (error) {
        toast({
          title: "Create failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({ title: "Contact info saved" });
        fetchData();
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Sun className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isEditor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel. Contact an administrator to request access.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your role: <span className="font-medium">{userRole || "None"}</span>
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
              <Button asChild>
                <Link to="/">Back to Website</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Techlam Energy Admin</h1>
              <p className="text-xs text-muted-foreground">
                {user?.email} • {userRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">View Site</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects">
          <TabsList className="mb-6">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Info
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
            )}
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Manage your portfolio projects</CardDescription>
                </div>
                <Dialog open={projectDialogOpen} onOpenChange={setProjectDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => { setEditingProject(null); resetProjectForm(); setProjectDialogOpen(true); }}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                      <DialogDescription>
                        {editingProject ? "Update the project details" : "Add a new project to your portfolio"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            placeholder="e.g., Commercial Solar Installation"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Input
                            id="category"
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                            placeholder="e.g., Commercial, Residential"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          placeholder="Describe the project..."
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={projectForm.location}
                            onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                            placeholder="e.g., Nairobi, Kenya"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="capacity">Capacity</Label>
                          <Input
                            id="capacity"
                            value={projectForm.capacity}
                            onChange={(e) => setProjectForm({ ...projectForm, capacity: e.target.value })}
                            placeholder="e.g., 50 kW"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Project Image</Label>
                        <div className="flex gap-4 items-start">
                          {projectForm.image_url && (
                            <img
                              src={projectForm.image_url}
                              alt="Project preview"
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          )}
                          <div className="flex-1">
                            <label className="cursor-pointer">
                              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition-colors">
                                <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                  {uploading ? "Uploading..." : "Click to upload image"}
                                </p>
                              </div>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                                disabled={uploading}
                              />
                            </label>
                            <p className="text-xs text-muted-foreground mt-2">Or enter URL:</p>
                            <Input
                              value={projectForm.image_url}
                              onChange={(e) => setProjectForm({ ...projectForm, image_url: e.target.value })}
                              placeholder="https://..."
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="display_order">Display Order</Label>
                          <Input
                            id="display_order"
                            type="number"
                            value={projectForm.display_order}
                            onChange={(e) => setProjectForm({ ...projectForm, display_order: parseInt(e.target.value) || 0 })}
                          />
                        </div>
                        <div className="flex items-center gap-3 pt-6">
                          <Switch
                            id="is_featured"
                            checked={projectForm.is_featured}
                            onCheckedChange={(checked) => setProjectForm({ ...projectForm, is_featured: checked })}
                          />
                          <Label htmlFor="is_featured">Featured Project</Label>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <Button variant="outline" onClick={resetProjectForm}>Cancel</Button>
                        <Button onClick={handleProjectSubmit}>
                          {editingProject ? "Update Project" : "Create Project"}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {projects.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Image className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No projects yet. Click "Add Project" to get started.</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center gap-4 p-4 border border-border rounded-lg"
                      >
                        {project.image_url ? (
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                            <Image className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">{project.title}</h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {project.category} • {project.location}
                          </p>
                          {project.is_featured && (
                            <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded mt-1">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProject(project)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Project?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete "{project.title}". This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteProject(project.id)}
                                  className="bg-destructive text-destructive-foreground"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Info Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update your business contact details displayed on the website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      value={contactForm.whatsapp}
                      onChange={(e) => setContactForm({ ...contactForm, whatsapp: e.target.value })}
                      placeholder="+254700000000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="info@techlamenergy.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    value={contactForm.address}
                    onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                    placeholder="123 Solar Street, Nairobi, Kenya"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maps">Google Maps Embed URL</Label>
                  <Input
                    id="maps"
                    value={contactForm.google_maps_embed}
                    onChange={(e) => setContactForm({ ...contactForm, google_maps_embed: e.target.value })}
                    placeholder="https://www.google.com/maps/embed?..."
                  />
                </div>
                <Button onClick={handleContactSubmit} className="bg-hero-gradient hover:opacity-90">
                  Save Contact Info
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab (Admin only) */}
          {isAdmin && (
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage user roles and permissions. To add a new user, have them sign up first, then assign their role here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    User management features coming soon. For now, use the database directly to assign roles.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
