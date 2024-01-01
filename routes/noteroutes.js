const express=require('express');
const router=express.Router();
const {getAll,createNote,updateNote,deleteNote}= require('../controllers/notescontroller')
const notesAuthMiddleware= require ('../authentication/auth')

router.route('/').get(getAll);
router.route('/').post(notesAuthMiddleware,createNote);
router.route('/:id').patch(notesAuthMiddleware,updateNote);
router.route('/:id').delete(notesAuthMiddleware,deleteNote);

module.exports= router;