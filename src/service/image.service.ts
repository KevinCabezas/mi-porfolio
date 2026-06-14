// src/services/image.service.ts

import { supabase } from "../lib/supabase";

export interface ImageItem {
  name: string;
  url: string;
}

export class ImageService {

  static async getImages(): Promise<ImageItem[]> {

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


   static async uploadImage(file: File): Promise<string> {
    // nombre único
    const fileName = `${Date.now()}-${file.name}`;

    // subir imagen
    const { error } = await supabase.storage
      .from("portfolio")
      .upload(`projects/${fileName}`, file);

    if (error) {
      throw error;
    }

    // obtener url pública
    const { data } = supabase.storage
      .from("portfolio")
      .getPublicUrl(`home/${fileName}`);

    return data.publicUrl;
  }
}