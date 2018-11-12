const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const { validateBody, schemas } = require('../utils/utils_validators');
const NotesController = require('../controllers/notes');

const passportJWT = passport.authenticate('jwt', { session: false });
router.route('/add_note')
    .post(passportJWT, NotesController.addNote);

router.route('/get_note')
    .post(passportJWT, NotesController.getNote);

router.route('/del_note')
    .post(passportJWT, NotesController.delNote);

router.route('/update_note')
    .post(passportJWT, NotesController.updateNote);

    module.exports = router;