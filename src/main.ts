import * as core from '@actions/core';
import { encrypt, DEFAULT_IV } from './aes';

async function run(): Promise<void> {
  try {
    const algorithm = core.getInput('algorithm');
    const text = core.getInput('text');
    const key = core.getInput('key');
    const iv = core.getInput('iv') || DEFAULT_IV;
    const encoding = core.getInput('encoding');

    const output = encrypt(text, algorithm, key, iv, encoding);

    core.setOutput('ciphertext', output);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
