import express from 'express'

import { PosterController } from './Postercontroller.js';
import { genrescontroller } from './genrecontroller.js';
import { cartlinescontroller } from './cartlinescontroller.js';
import { ratingcontroller } from './ratingcontroller.js';

const router = express.Router();

router.get('/posters', PosterController.getAll );
router.post('/posters',PosterController.create);
router.put('/posters', PosterController.update);
router.delete('/posters', PosterController.delet);

router.get('/genres', genrescontroller.getAll );
router.post('/genres', genrescontroller.create);
router.put('/genres', genrescontroller.update);
router.delete('/genres', genrescontroller.delet);

router.get('/cartlines', cartlinescontroller.getAll );
router.post('/cartlines',cartlinescontroller.create);
router.put('/cartlines', cartlinescontroller.update);
router.delete('/cartlines', cartlinescontroller.delet);

router.get('/rating', ratingcontroller.getAll );
router.post('/rating',ratingcontroller.create);
router.put('/rating', ratingcontroller.update);
router.delete('/rating', ratingcontroller.delet);


export default router;