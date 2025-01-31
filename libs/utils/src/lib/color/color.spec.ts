import {
  bgBlack,
  bgBlue,
  bgCyan,
  bgGreen,
  bgMagenta,
  bgRed,
  bgWhite,
  bgYellow,
  black,
  blue,
  bold,
  cyan,
  green,
  magenta,
  red,
  reverse,
  underline,
  white,
  yellow,
} from './color';

describe('Log color', () => {
  it('should log in colors', () => {
    console.log(black('black text'));
    console.log(red('red text'));
    console.log(green('green text'));
    console.log(yellow('yellow text'));
    console.log(blue('blue text'));
    console.log(magenta('magenta text'));
    console.log(cyan('cyan text'));
    console.log(white('white text'));
    console.log(bgBlack('bgBlack text'));
    console.log(bgRed('bgRed text'));
    console.log(bgGreen('bgGreen text'));
    console.log(bgYellow('bgYellow text'));
    console.log(bgBlue('bgBlue text'));
    console.log(bgMagenta('bgMagenta text'));
    console.log(bgCyan('bgCyan text'));
    console.log(bgWhite('bgWhite text'));

    console.log(bold('bold text'));
    console.log(underline('underline text'));
    console.log(reverse('reverse text'));
  });
});
