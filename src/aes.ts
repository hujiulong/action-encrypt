import crypto from 'crypto';

/* eslint-disable comma-dangle */
export const DEFAULT_IV = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
]);

export function encrypt(
  text: string,
  algorithm: string,
  key: string,
  iv: any,
  encoding: string
): string {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  return Buffer.concat([cipher.update(text), cipher.final()]).toString(encoding);
}
