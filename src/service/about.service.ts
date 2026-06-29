import { supabase } from "../lib/supabase"
import type { TComment } from "../types/about"


export const loadComent = async (coment: Omit<TComment, "id">): Promise<TComment> => {

  const { data, error } = await supabase
    .from("comments")
    .insert(coment)
    .select()
    .single();

    if (error) {
      throw new Error(error.message);
    }

    return data as TComment;
}

export const getAllComents = async (): Promise<TComment[]> => {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as TComment[];
}