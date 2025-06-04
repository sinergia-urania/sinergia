// convert-cards.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "originals");
const outputDir = path.join(__dirname, "public/cards");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach((file) => {
  if (file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    sharp(inputPath)
      .resize({ height: 300 }) // visina 300px, proporcionalna širina
      .webp({ quality: 80 })   // kvalitet 80/100
      .toFile(outputPath)
      .then(() => console.log("✅ Konvertovano:", outputName))
      .catch((err) => console.error("❌ Greška:", file, err));
  }
});
