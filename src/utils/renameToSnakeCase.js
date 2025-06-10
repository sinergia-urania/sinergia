const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "public", "cards");

fs.readdirSync(folderPath).forEach((file) => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  // samo za .webp fajlove i camelCase imena
  if (ext === ".webp" && /[A-Z]/.test(name)) {
    const snake = name.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `${snake}${ext}`);

    fs.renameSync(oldPath, newPath);
    console.log(`✅ ${file} → ${snake}${ext}`);
  }
});
