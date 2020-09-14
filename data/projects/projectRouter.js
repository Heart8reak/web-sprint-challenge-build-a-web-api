const express = require('express')
const projectModel = require('../helpers/projectModel')

const router = express.Router()

// ######################################################################
// CREATE
// ######################################################################

router.post('/', (req, res) => {
    const projectData = req.body
    projectModel.insert(projectData)
        .then(() => {
            res.status(201).json({ message: 'Your project was created!', projectData })
        })
        .catch(err => {
            res.status(404).json({ Error: 'There was a problem creating yoru project', err })
        })
})

// ######################################################################
// READ
// ######################################################################

router.get('/', (req, res) => {
    projectModel.get(req.id)
        .then(project => {
            console.log(req.id)
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting the project!', err })
        })
})

// ######################################################################
// UPDATE
// ######################################################################

router.put('/', (req, res) => {
    projectModel.update(req.params.id, req.body)
        .then(project => {
            if (projectModel) {
                res.status(200).json({ message: 'the project has been updated', project })
            } else {
                res.status(404).json({ message: 'the project was not updated' })
            }

        })
        .catch(err => {
            res.status(500).json({ message: 'there was an error updating the project' })
        })
})

// ######################################################################
// DELETE
// ######################################################################

router.delete('/:id', (req, res) => {
    projectModel.remove(req.params.id)
        .then(project => {
            if (porjects > 0) {
                res.status(200).json({ message: 'the project was deleted succesfully' })
            } else {
                res.status(404).json({ message: 'the project Id was not found' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'there was an error deleting the project', err })
        })
})

module.exports = router