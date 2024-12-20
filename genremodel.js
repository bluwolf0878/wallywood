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

  static async update(id, updatedData) {
    
    const { data, error } = await supabase
      .from('genres')
      .update(updatedData)
      .eq('id', id)
      .select()
      .single();
      
    if (error) {
      console.error('Error updating genre:', error.message);
      return null;
    }

    
    return data;
  }
  
  static async delet(id) {
    try{
      const { data, error } = await supabase
        .from('genres')
        .delete()
        .eq('id', id);
        if (error) {
          throw new Error(`error deleting genre:${error}`);
        }
        return true
    }
    catch(error){
      console.error(error)
    }
  }
}