import { supabase } from "../lib/supabase";

export interface ImageItem {
  name: string;
  url: string;
}


  export const getImages = async ():Promise<ImageItem[]> => {

    const { data, error } = await supabase.storage
      .from("porfolio")
      .list("projects", {
        limit: 100,
        offset: 0,
      });

    if (error) {
      throw error;
    }

    const images: ImageItem[] = data.map((image) => {
      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(image.name);

      return {
        name: image.name,
        url: publicUrlData.publicUrl,
      };
    });

    return images;
  }


  export const uploadImage = async(file: File): Promise<string> => {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("portfolio")
      .upload(`projects/${fileName}`, file);

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("portfolio")
      .getPublicUrl(`home/${fileName}`);

    return data.publicUrl;
  }
