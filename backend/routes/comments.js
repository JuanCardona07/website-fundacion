const express = require("express");
const router = express.Router();
const { createComment, getComments } = require("../controllers/comments");

// Crear comentario
router.post("/", createComment);

// Obtener todos los comentarios
router.get("/", getComments);

module.exports = router;
