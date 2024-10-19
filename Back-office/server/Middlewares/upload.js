const multer = require('multer');

// Configuration de multer pour enregistrer les images dans le dossier uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Enregistre les fichiers dans le dossier uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Garde le nom original du fichier
  }
});

// Filtrage des types de fichiers acceptés (vous pouvez modifier selon vos besoins)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Accepte le fichier
  } else {
    cb(new Error('Format de fichier non pris en charge'), false); // Refuse le fichier
  }
};

// Initialisation de multer avec la configuration définie
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
