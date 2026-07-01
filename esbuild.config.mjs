import { argv } from 'node:process';
import { cp, readFile, writeFile, rm } from 'node:fs/promises';

import pkg from './package.json' with { type: 'json' };
import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

const platform = argv[2] || 'chrome';

try {
   await rm(`dist/${platform}`, { recursive: true });
} catch { }

const entryPoints = ['src/content/index.ts', 'src/content/loader.ts', 'src/popup/index.tsx', 'src/options/index.ts', 'src/background/chrome.ts', 'src/xhr.ts', 'src/inject.ts'];

await esbuild.build({
   entryPoints,
   outdir: `dist/${platform}`,
   bundle: true,
   format: 'esm',
   splitting: true,
   alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
   },
   plugins: [
      sassPlugin({
         embedded: true
      }),
      {
         name: 'copy-manifest',
         setup(build) {
            build.onEnd(async () => {
               await cp('public', `dist/${platform}`, { recursive: true });
               const contents = await readFile(`./src/manifest.chrome.json`, { encoding: 'utf8' });
               const replacedContents = contents.replace(/__MSG_extVersion__/g, pkg.version);
               await writeFile(`dist/${platform}/manifest.json`, replacedContents, { encoding: 'utf8' });
               console.log(`[${Date()}] manifest copied and replaced successfully`);
            });
         },
      },
   ],
});
