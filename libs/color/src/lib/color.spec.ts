import { AnsiBgColor, AnsiColor } from './color';
describe('color', () => {
  it('should print in color', () => {
    console.log(`${AnsiColor.black}black`);
    console.log(`${AnsiColor.blue}blue`);
    console.log(`${AnsiColor.green}green`);
    console.log(`${AnsiColor.orange}orange`);
    console.log(`${AnsiColor.purple}purple`);
    console.log(`${AnsiColor.vermilion}vermilion`);
    console.log(`${AnsiColor.white}white`);

    console.log(`${AnsiColor.black}black${AnsiColor.reset}white`);
  });

  it('should print in bg color', () => {
    console.log(`${AnsiBgColor.black}black${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.blue}blue${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.green}green${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.orange}orange${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.purple}purple${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.vermilion}vermilion${AnsiBgColor.reset}`);
    console.log(`${AnsiBgColor.white}white${AnsiBgColor.reset}`);

    console.log(
      `${AnsiBgColor.orange}black${AnsiBgColor.reset} Reset the color${AnsiBgColor.reset}`
    );
  });
});
