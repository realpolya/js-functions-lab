/* --------------------------------Imports--------------------------------*/

import { Router } from 'express'
import * as controllers from '../controllers/tracks.js'

/* --------------------------------Express & Mongoose--------------------------------*/

const router = Router();

/* --------------------------------Routes--------------------------------*/

router.get('/', controllers.displayTracks);

router.get('/:id', controllers.displayTrack);

router.post('/', controllers.createTrack);

router.delete('/:id', controllers.deleteTrack);

router.put('/:id', controllers.updateTrack);

/* --------------------------------Exports--------------------------------*/

export default router;