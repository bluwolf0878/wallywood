import {PosterModel} from "./Postermodel.js";

export class PosterController {
  static async getAll(req, res) {
    try {
      const posters = await PosterModel.getAll();
      res.status(200).json(posters);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const newPoster = req.body;
      const poster = await PosterModel.create(newPoster);
      res.status(201).json(poster);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


   static update = async (req, res) => {
    const { id } = req.body;
    const updatedData = req.body;
    
    
    try {
      const updatedposter = await PosterModel.update(id, updatedData);
            
      if (!updatedposter) {
          return res.status(404).json({ error: 'poster not found' });
        }
        res.status(200).json({ id: updatedposter.id, message: 'poster updated successfully',});
    } catch (error) {
      res.status(500).json({ error: 'Failed to update poster' });
    }
  };
  
  static delet = async (req, res) => {
    console.log(req.body);
    
      const { id } = req.body;
      const success = await PosterModel.delet(id);
      console.log(success);
      
  };
}