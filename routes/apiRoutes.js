const router = require("express").Router();
const db = require("../db");

router.get("/notes", (req, res) => {
  db.readNotes()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => res.status(500).json(err));
});

//This here will help create new notes
router.post("/notes", (req, res) => {
  db.writeNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//This will be used to automatically delete notes
router.delete("/notes/:id", (req, res) => {
  db.deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;