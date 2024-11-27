import { supabase } from './config/supabaseConfig.js'

export class PosterModel {
  
    static async getAll(limit = null) {
      const query = supabase.from('posters').select('*');
      
      if (limit) {
        query.limit(limit); // Begræns antal plakater
      }
  
      const { data, error } = await query;
      if (error) throw new Error(error.message);
      return data;
    }
  

  static async create(formdata) {
    const { data, error } = await supabase.from('posters').insert([
        {
            name: formdata.name,
            slug: formdata.slug,
            description: formdata.description,
            image: formdata.image,
            width: formdata.width,
            height: formdata.height,
            price: formdata.price,
            stock: formdata.stock
        }
    ]);
    if (error) throw new Error(error.message);
    return data;
  }

  static async update(id, updatedData) {
    
    const { data, error } = await supabase
      .from('posters')
      .update(updatedData)
      .eq('id', id)
      .select()
      .single();
      
    if (error) {
      console.error('Error updating poster:', error.message);
      return null;
    }

    
    return data;
  }
  
  static async delet(id) {
    try{
      const { data, error } = await supabase
        .from('posters')
        .delete()
        .eq('id', id);
        if (error) {
          throw new Error(`error deleting poster:${error}`);
        }
        return true
    }
    catch(error){
      console.error(error)
    }
  }
}
