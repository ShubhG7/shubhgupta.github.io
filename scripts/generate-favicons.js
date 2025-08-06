const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create the scripts directory if it doesn't exist
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// Read the SVG favicon
const svgPath = path.join(__dirname, '../public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

// Generate different favicon sizes
const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicons() {
  try {
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
    }

    // Generate ICO file (16x16 and 32x32)
    const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
    const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
    
    // For now, we'll create a simple ICO file with just the 32x32 version
    // In a real implementation, you'd use a proper ICO encoder
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), png32);
    
    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

generateFavicons(); 