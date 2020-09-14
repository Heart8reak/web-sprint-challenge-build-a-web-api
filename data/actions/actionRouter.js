const express = require('express')
const actionModel = require('../helpers/actionModel')

const router = express.Router()

// ######################################################################
// CREATE
// ######################################################################

router.post('/', (req, res) => {
    actionModel.insert(req.body)
        .then(action => {
            res.status(201).json({ message: 'Your action was created' })
        })
        .catch(err => {
            res.status(404).json({ message: 'There was an error creating your action', err })
        })
})

// ######################################################################
// READ
// ######################################################################

router.get('/', (req, res) => {
    actionModel.get(req.id)
        .then(action => {
            res.status(200).json({ message: 'Here are your actions', action })
        })
        .catch(err => {
            res.status(404).json({ message: 'There was an error fetching your actions' })
        })
})

// ######################################################################
// UPDATE
// ######################################################################

router.put('/:id', (req, res) => {
    actionModel.update(req.params.id, req.body)
        .then(action => {
            if (action) {
                res.status(200).json({ message: 'The action was updated' })
            } else {
                res.status(404).json({ message: 'the action could not be found' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'there was an error updating your action' })
        })
})

// ######################################################################
// DELETE
// ######################################################################

router.delete('/:id', (req, res) => {
    actionModel.remove(req.params.id)
        .then(action => {
            if (action > 0) {
                res.status(200).json({ message: 'The action was deleted' })
            } else {
                res.status(404).json({ message: 'The action can not be found' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'There was an error deleting the action' })
        })
})

module.exports = router