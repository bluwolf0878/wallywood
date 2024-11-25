import express from 'express'

import { PosterController } from './Postercontroller.js';
import { genrescontroller } from './genrecontroller.js';

const router = express.Router();

router.get('/posters', PosterController.getAll );
router.post('/posters',PosterController.create);
router.put('/posters', PosterController.update);
router.delete('/posters', PosterController.delet);

router.get('/genres', genrescontroller.getAll );
router.post('/genres', genrescontroller.create);



export default router;