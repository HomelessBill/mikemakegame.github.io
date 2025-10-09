import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Image configurations
const gameImages = [
  { name: 'carnival', input: 'CarnivalGames.jpg' },
  { name: 'evolve', input: 'Evolve.jpg' },
  { name: 'jak-daxter', input: 'JakAndDaxter.jpg' },
  { name: 'lego-drive', input: 'LegoDrive.png' },
  { name: 'mafia3', input: 'Mafia3.jpg' },
  { name: 'midnight', input: 'MidnightSuns.jpg' },
  { name: 'pga23', input: 'PGA2K23.jpg' },
  { name: 'pga25', input: 'PGA2K25.jpg' },
  { name: 'topspin25', input: 'PGA2K25.jpg' },
  { name: 'new-tales', input: 'NewTalesFromTheBorderlands.png' },
  { name: 'project-ethos', input: 'ProjectETHOS.png' },
  { name: 'xcom2', input: 'XCOM2.jpg' },
  { name: 'chimera', input: 'XCOMChimeraSquad.jpg' }
];

const logoImages = [
  { name: 'logo-icon', input: 'MikeMakeGameIconDiagonal.jpg' },
  { name: 'logo-text', input: 'MikeMakeGameSingleLineRed.jpg' }
];

async function optimizeImage(inputPath, outputPath, options) {
  try {
    const { width, height, quality, maxSize } = options;

    let sharpInstance = sharp(inputPath);

    // Resize if dimensions specified
    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }

    // Apply quality settings based on format
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({ quality: quality || 80, mozjpeg: true });
    } else if (ext === '.png') {
      // Convert PNG to JPG for better compression of photos
      sharpInstance = sharpInstance.jpeg({ quality: quality || 85, mozjpeg: true });
      outputPath = outputPath.replace('.png', '.jpg');
    }

    // Save the image
    await sharpInstance.toFile(outputPath);

    // Check file size and recompress if needed
    const stats = fs.statSync(outputPath);
    const sizeKB = stats.size / 1024;

    if (maxSize && sizeKB > maxSize) {
      // Try again with lower quality
      const lowerQuality = Math.max(60, quality - 20);
      console.log(`  Recompressing ${path.basename(outputPath)} (${Math.round(sizeKB)}KB > ${maxSize}KB) with quality ${lowerQuality}`);

      sharpInstance = sharp(inputPath);
      if (width || height) {
        sharpInstance = sharpInstance.resize(width, height, {
          fit: 'cover',
          position: 'center'
        });
      }
      sharpInstance = sharpInstance.jpeg({ quality: lowerQuality, mozjpeg: true });
      await sharpInstance.toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeKB = newStats.size / 1024;
      console.log(`  Final size: ${Math.round(newSizeKB)}KB`);
    } else {
      console.log(`  Created ${path.basename(outputPath)}: ${Math.round(sizeKB)}KB`);
    }

    return outputPath;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    throw error;
  }
}

async function processImages() {
  console.log('Starting image optimization...\n');

  // Create output directories
  const dirs = ['public/credits', 'public/banners', 'public/screenshots'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Process game images
  console.log('Processing game images...');
  for (const img of gameImages) {
    const inputPath = path.join('SourceArt', img.input);

    if (!fs.existsSync(inputPath)) {
      console.log(`  Skipping ${img.input} (not found)`);
      continue;
    }

    console.log(`\nProcessing ${img.input}:`);

    // Create credit card version (600x340, <200KB)
    const ext = path.extname(img.input).toLowerCase();
    const cardOutput = path.join('public/credits', `${img.name}${ext === '.png' ? '.jpg' : ext}`);
    await optimizeImage(inputPath, cardOutput, {
      width: 600,
      height: 340,
      quality: 80,
      maxSize: 200
    });

    // Create banner version (1920x600, <500KB)
    const bannerOutput = path.join('public/banners', `${img.name}.jpg`);
    await optimizeImage(inputPath, bannerOutput, {
      width: 1920,
      height: 600,
      quality: 85,
      maxSize: 500
    });
  }

  // Process logo images
  console.log('\n\nProcessing logo images...');
  for (const img of logoImages) {
    const inputPath = path.join('SourceArt', img.input);

    if (!fs.existsSync(inputPath)) {
      console.log(`  Skipping ${img.input} (not found)`);
      continue;
    }

    console.log(`\nProcessing ${img.input}:`);

    const outputPath = path.join('public', `${img.name}.jpg`);

    // Logo icon should be smaller
    if (img.name === 'logo-icon') {
      await optimizeImage(inputPath, outputPath, {
        width: 200, // Resize to smaller dimensions
        quality: 85,
        maxSize: 50
      });
    } else {
      // Logo text
      await optimizeImage(inputPath, outputPath, {
        height: 100, // Maintain aspect ratio
        quality: 85,
        maxSize: 30
      });
    }
  }

  // Process MikeMakeGame.png for hero banner
  const heroPath = path.join('SourceArt', 'MikeMakeGame.png');
  if (fs.existsSync(heroPath)) {
    console.log('\n\nProcessing MikeMakeGame.png for hero banner...');

    const heroOutput = path.join('public/banners', 'hero-logo.jpg');
    await optimizeImage(heroPath, heroOutput, {
      width: 1920,
      height: 600,
      quality: 90,
      maxSize: 300
    });
  }

  // Create placeholder screenshots for Bricknosis
  console.log('\n\nCreating placeholder screenshots...');
  const screenshotSources = [
    { name: 'screenshot1', input: 'LegoDrive.png' },
    { name: 'screenshot2', input: 'MidnightSuns.jpg' },
    { name: 'screenshot3', input: 'XCOMChimeraSquad.jpg' },
    { name: 'screenshot4', input: 'XCOM2.jpg' },
    { name: 'screenshot5', input: 'PGA2K23.jpg' }
  ];

  for (const img of screenshotSources) {
    const inputPath = path.join('SourceArt', img.input);

    if (!fs.existsSync(inputPath)) {
      console.log(`  Skipping ${img.input} (not found)`);
      continue;
    }

    console.log(`\nProcessing ${img.input} as ${img.name}:`);
    const screenshotOutput = path.join('public/screenshots', `${img.name}.jpg`);
    await optimizeImage(inputPath, screenshotOutput, {
      width: 1280,
      height: 720,
      quality: 85,
      maxSize: 300
    });
  }

  console.log('\n✅ Image optimization complete!');
}

// Run the optimization
processImages().catch(error => {
  console.error('Failed to optimize images:', error);
  process.exit(1);
});
