import { supabase } from './config/supabaseConfig.js'

export class Genremodel {
  static async getAll() {
    const { data, error } = await supabase.from('genres').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  static async create(formdata) {
    const { data, error } = await supabase.from('genres').insert([
        {
            title: formdata.title,
            slug: formdata.slug,
        }
    ]);
    if (error) throw new Error(error.message);
    return data;
  }
}