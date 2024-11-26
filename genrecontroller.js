import { Genremodel } from "./genremodel.js";

export class genrescontroller {
  static async getAll(req, res) {
    try {
      const genres = await Genremodel.getAll();
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const newGenre = req.body;
      const Genre = await Genremodel.create(newGenre);
      res.status(201).json(Genre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static update = async (req, res) => {
    const { id } = req.body;
    const updatedData = req.body;
    
    
    try {
      console.log(updatedData);
      
      const updatedgenre = await Genremodel.update(id, updatedData);
            
      if (!updatedgenre) {
          return res.status(404).json({ error: 'genre not found' });
        }
        res.status(200).json({ id: updatedgenre.id, message: 'genre updated successfully',});
    } catch (error) {
      res.status(500).json({ error: 'Failed to update genre' });
    }
  };
  
  static delet = async (req, res) => {
    console.log(req.body);
    
      const { id } = req.body;
      const success = await Genremodel.delet(id);
      console.log(success);
      
  };
}