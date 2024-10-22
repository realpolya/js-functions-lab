/* --------------------------------Imports--------------------------------*/

import Track from '../models/model-track.js';

/* --------------------------------Helper Functions--------------------------------*/


const renderResult = (track, res) => {
    
    if (!track) {
        res.status(404);
        throw new Error("Track not found.")
    }

    res.status(201).json(track);

}

const renderError = (res, err) => {

    if (res.statusCode === 404) {

        return res.json({ error: err.message });

    }

    return res.status(500).json({ error: err.message })

}

/* --------------------------------GET Controllers--------------------------------*/

// show all tracks
const displayTracks = async (req, res) => {

    try {

        const allTracks = await Track.find();
        res.status(200).json(allTracks);

    } catch (err) {

        res.status(500).json({ error: err.message })
        
    }
}

// show single track
const displayTrack = async (req, res) => {

    try {

        const track = await Track.findById(req.params.id);

        renderResult(track, res);

    } catch(err) {

       renderError(res, err);
       
    }
}

/* --------------------------------POST Controllers--------------------------------*/

// create track
const createTrack = async (req, res) => {

    try {

        const track = await Track.create(req.body);
        res.status(201).json(track);

    } catch (err) {

        res.status(500).json({ error: err.message })

    }
}

// delete track
const deleteTrack = async (req, res) => {

    try {

        const track = await Track.findByIdAndDelete(req.params.id);

        if (!track) {
            res.status(404);
            throw new Error("Track not found.")
        }

        const allTracks = await Track.find();

        res.status(201).json(allTracks);

    } catch (err) {

       renderError(res, err);

    }
}

const updateTrack = async (req, res) => {

    try {

        const track = await Track.findByIdAndUpdate(req.params.id, req.body);

        renderResult(track, res);

    } catch (err) {

        renderError(res, err);
    }
}

/* --------------------------------Exports--------------------------------*/

export { displayTracks, displayTrack, createTrack, deleteTrack, updateTrack }