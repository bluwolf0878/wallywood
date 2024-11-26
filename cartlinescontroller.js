import { cartlinesmodel } from "./cartlinesmodel.js";

export class cartlinescontroller {
  static async getAll(req, res) {
    try {
      const cart = await cartlinesmodel.getAll();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const newcart = req.body;
      const cart = await cartlinesmodel.create(newcart);
      res.status(201).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


   static update = async (req, res) => {
    const { id } = req.body;
    const updatedData = req.body;
    try {
      const updatedposter = await cartlinesmodel.update(id, updatedData);
            
      if (!updatedposter) {
          return res.status(404).json({ error: 'cart not found' });
        }
        res.status(200).json({ id: updatedposter.id, message: 'cart updated successfully',});
    } catch (error) {
      res.status(500).json({ error: 'Failed to update cart' });
    }
  };
  
  static delet = async (req, res) => {
    console.log(req.body);
    
      const { id } = req.body;
      const success = await cartlinesmodel.delet(id);
      console.log(success);
      
  };
}