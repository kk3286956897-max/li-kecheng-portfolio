import { cpSync } from 'node:fs';

cpSync('site', 'dist', { recursive: true });
