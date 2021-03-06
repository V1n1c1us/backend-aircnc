/**
 * req.query -> acessar query params (para filtros)
 * req.params -> acessar route params (para edição, delete)
 * req.body -> acessar corpo da requisição (criar e editar)
 */

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', SessionController.index);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/profile', ProfileController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;