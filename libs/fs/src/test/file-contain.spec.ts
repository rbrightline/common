import { fileContain, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('fileContain', () => {
  const filepath = safepath('./fileContain.md');
  const content = '# fileContain test';
  beforeAll(async () => {
    await writeFile(filepath, content);
  });

  afterAll(async () => {
    await rm(filepath);
  });
  it('should return true if file contains', async () => {
    expect(await fileContain(filepath, content)).toBeTruthy();
  });

  it('should return false if file does not contain', async () => {
    expect(await fileContain(filepath, 'not contains')).toBeFalsy();
  });
});
