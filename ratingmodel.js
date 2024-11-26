import { supabase } from './config/supabaseConfig.js'

export class ratingmodel {
  static async getAll() {
    const { data, error } = await supabase.from('user_ratings').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  static async create(formdata) {
    const { data, error } = await supabase.from('user_ratings').insert([
        {
           num_star: formdata.num_star,
        }
    ]);
    if (error) throw new Error(error.message);
    return data;
  }

  static async update(id, updatedData) {
    
    const { data, error } = await supabase
      .from('user_ratings')
      .update(updatedData)
      .eq('id', id)
      .select()
      .single();
      
    if (error) {
      console.error('Error updating rating:', error.message);
      return null;
    }

    
    return data;
  }
  
  static async delet(id) {
    try{
      const { data, error } = await supabase
        .from('user_ratings')
        .delete()
        .eq('id', id);
        if (error) {
          throw new Error(`error deleting rating:${error}`);
        }
        return true
    }
    catch(error){
      console.error(error)
    }
  }
}
