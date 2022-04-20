#!node_modules/.bin/zx

import { echo } from 'zx/experimental';

echo(chalk.green('Downloading external spces 🚀'));

const ROOT_DIR = path.resolve(__dirname, '../');

await $`wget -O ${ROOT_DIR}/spec/lolbetpy.openapi.json http://lolbetpy:8000/openapi.json`;

echo(chalk.green('Download complete.'));
