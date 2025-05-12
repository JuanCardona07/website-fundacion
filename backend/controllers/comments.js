const Comment = require("../models/Comment");

// Crear un nuevo comentario
exports.createComment = async (req, res) => {
  try {
    const { name, message } = req.body;
    const date = new Date().toLocaleString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const newComment = new Comment({
      name,
      message,
      date,
    });

    const comment = await newComment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error del servidor");
  }
};

// Obtener todos los comentarios
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error del servidor");
  }
};
