import { supabase } from "../lib/supabase";
import type { Project } from "../types/projects";


export const getAllProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, description,icon, image, stack, created_at, frontpage")
    .order("created_at", { ascending: false });
  console.log(data,"data")
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as Project[];
};