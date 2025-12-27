const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const MAX_SIZE = 1920;
const QUALITY = 80;

async function optimizeImages() {
    try {
        const files = fs.readdirSync(publicDir);

        for (const file of files) {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                const filePath = path.join(publicDir, file);
                const tempPath = path.join(publicDir, `temp_${file}`);

                // Get metadata to check size
                const metadata = await sharp(filePath).metadata();

                if (metadata.width > MAX_SIZE || metadata.height > MAX_SIZE || metadata.size > 1000000) { // Optimize if > 1MB or large dimension
                    console.log(`Optimizing ${file} (${metadata.width}x${metadata.height}, ${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB)...`);

                    await sharp(filePath)
                        .resize({
                            width: MAX_SIZE,
                            height: MAX_SIZE,
                            fit: 'inside',
                            withoutEnlargement: true
                        })
                        .jpeg({ quality: QUALITY, mozjpeg: true })
                        .toFile(tempPath);

                    // Replace original with optimized
                    fs.unlinkSync(filePath);
                    fs.renameSync(tempPath, filePath);

                    const newSize = fs.statSync(filePath).size;
                    console.log(`  -> New size: ${(newSize / 1024).toFixed(2)} KB`);
                } else {
                    console.log(`Skipping ${file} (already optimized or small enough)`);
                }
            }
        }
        console.log("Optimization complete.");
    } catch (err) {
        console.error("Optimization failed:", err);
    }
}

optimizeImages();
