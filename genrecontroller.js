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
}