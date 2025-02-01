import { generateToken } from './generate-token';
describe('generateToken', () => {
  it('should generate token', () => {
    expect(generateToken()).toBeTruthy();
  });
});
