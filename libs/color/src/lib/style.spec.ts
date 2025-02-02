import { AnsiStyle } from './style';
describe('style', () => {
  it('should style the ansi text', () => {
    console.log(`${AnsiStyle.bold}bold${AnsiStyle.reset}`);
    console.log(`${AnsiStyle.italic}italic${AnsiStyle.reset}`);
    console.log(`${AnsiStyle.reverse}reverse${AnsiStyle.reset}`);
    console.log(`${AnsiStyle.underline}underline${AnsiStyle.reset}`);
    console.log(
      `${AnsiStyle.underline}underline${AnsiStyle.reset}reset${AnsiStyle.reset}`
    );
  });
});
