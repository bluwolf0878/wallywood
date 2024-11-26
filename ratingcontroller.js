import { cartlinesmodel } from "./cartlinesmodel.js";
import { ratingmodel } from "./ratingmodel.js";

export class ratingcontroller {
  static async getAll(req, res) {
    try {
      const rating = await ratingmodel.getAll();
      res.status(200).json(rating);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const newrating = req.body;
      const rating = await ratingmodel.create(newrating);
      res.status(201).json(rating);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


   static update = async (req, res) => {
    const { id } = req.body;
    const updatedData = req.body;
    try {
        console.log(updatedData);
      const updatedrating = await ratingmodel.update(id, updatedData);
            console.log(updatedrating);
            
      if (!updatedrating) {
          return res.status(404).json({ error: 'rating not found' });
        }
        
        res.status(200).json({ id: updatedposter.id, message: 'rating updated successfully',});
    } catch (error) {
      res.status(500).json({ error: 'Failed to update rating' });
    }
  };
  
  static delet = async (req, res) => {
    console.log(req.body);
    
      const { id } = req.body;
      const success = await ratingmodel.delet(id);
      console.log(success);
      
  };
}