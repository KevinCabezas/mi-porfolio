import { supabase } from "../lib/supabase";
import type { Project, TDetailsProject } from "../types/projects";


export const getAllProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, description,icon, stack, created_at, frontpage")
    .order("created_at", { ascending: false });
  console.log(data,"data")
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as Project[];
};

export const getDetailProject = async (id: number): Promise<TDetailsProject> => {
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, icon,description_details, image, age, state, repository, link, stack_details")
    .eq("id", id)
    .single();

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return data as TDetailsProject;
}