import { supabase } from "./supabase";

export async function createAccount(resultData) {
  const { data, error } = await supabase.from("form_results").insert([resultData]);

  if (error) throw new Error("Error saving results");

  return data;
}
