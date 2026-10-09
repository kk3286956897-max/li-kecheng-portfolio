import { mkdirSync, copyFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'hero-web.mp4', 'hero-poster.jpg', 'winter-film.mp4', 'winter-cover.png']) {
  copyFileSync(file, `dist/${file}`);
}
