const Note = require("../models/notemodel");

const getISTTimestamp = () => {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30

    const istTime = new Date(now.getTime() + istOffset);
    return istTime.toISOString().replace(/\.000Z$/, ''); // Format without milliseconds and Z
};


const getAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createNote = async (req, res) => {
  try {
    const noteData = {
      ...req.body,
      createdAt: getISTTimestamp(),
      updatedAt: getISTTimestamp(),
    };

    const note = await Note.create(noteData);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteData = {
      title,
      content,
      updatedAt: getISTTimestamp(),
    };

    const note = await Note.findByIdAndUpdate(req.params.id, noteData, {
      new: true,
    });
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAll, createNote, updateNote, deleteNote };
