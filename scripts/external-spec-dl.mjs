#!node_modules/.bin/zx

import { echo } from 'zx/experimental';

echo(chalk.green('Downloading external spces 🚀'));

const ROOT_DIR = path.resolve(__dirname, '../');
const SPEC_DIR = path.resolve(__dirname, '../spec/');

await $`wget -O ${ROOT_DIR}/spec/lolbetpy.openapi.json http://lolbetpy:8000/openapi.json`;

echo(chalk.green('Download complete.'));

const { stdout } = await quiet($`ls ${SPEC_DIR} | grep openapi.json`);
const specs = stdout.trim().split('\n');

echo(chalk.blue('Generating clients based of openapi specifications'));

for (const spec of specs) {
  const clientName = spec.split('.openapi.json')[0];
  await $`yarn openapi-generator-cli generate -i ${SPEC_DIR}/${spec} -g typescript-nestjs -o ${ROOT_DIR}/src/external/${clientName}`;
}
