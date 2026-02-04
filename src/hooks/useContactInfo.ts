import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ContactInfo {
  id: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  whatsapp: string | null;
  google_maps_embed: string | null;
}

export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const { data, error } = await supabase
        .from("contact_info")
        .select("*")
        .maybeSingle();

      if (error) {
        console.error("Error fetching contact info:", error);
      } else {
        setContactInfo(data);
      }
      setLoading(false);
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading };
};
