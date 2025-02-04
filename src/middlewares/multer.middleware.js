import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + `-` + Math.round(Math.round() * 1e9);
    // cb(null, file.filename + `-` + uniqueSuffix);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
