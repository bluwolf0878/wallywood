import { supabase } from './config/supabaseConfig.js'

export class cartlinesmodel {
  static async getAll() {
    const { data, error } = await supabase.from('cartlines').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  static async create(formdata) {
    const { data, error } = await supabase.from('cartlines').insert([
        {
           quantity: formdata.quantity,
        }
    ]);
    if (error) throw new Error(error.message);
    return data;
  }

  static async update(id, updatedData) {
    
    const { data, error } = await supabase
      .from('cartlines')
      .update(updatedData)
      .eq('id', id)
      .select()
      .single();
      
    if (error) {
      console.error('Error updating cart:', error.message);
      return null;
    }

    
    return data;
  }
  
  static async delet(id) {
    try{
      const { data, error } = await supabase
        .from('cartlines')
        .delete()
        .eq('id', id);
        if (error) {
          throw new Error(`error deleting cartlines:${error}`);
        }
        return true
    }
    catch(error){
      console.error(error)
    }
  }
}
