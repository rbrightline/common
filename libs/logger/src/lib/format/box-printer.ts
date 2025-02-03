/**
 * Parameters to create a box printer
 */
export type Boxset = Readonly<
  [
    verticleLine: Readonly<string>,
    horizontalLine: Readonly<string>,
    topLeftCorner: Readonly<string>,
    topRightCorner: Readonly<string>,
    bottomRightCorner: Readonly<string>,
    bottomLeftCorner: Readonly<string>,
    lineMultiplier: number
  ]
>;

/**
 * Create a box printer function
 * @param boxset
 * @returns
 */
export function createBoxPrinter(boxset: Boxset) {
  const [vl, hl, tl, tr, br, bl, lm] = boxset;

  return (title: string, message: string) => {
    const hLine = hl.repeat(title.length);
    let lpadding = '';
    let rpadding = '';

    if (lm > 1) {
      lpadding = ' '.repeat(title.length / 2);
      rpadding = lpadding;
      if (title.length % 2 == 1) {
        rpadding += ' ';
      }
    }

    const template = [
      [tl, hLine, tr].join(''),
      [vl, lpadding, title, rpadding, vl, message].join(''),
      [bl, hLine, br].join(''),
    ];

    template.forEach(console.log);
  };
}

export const SHARP_BOX_SET: Boxset = ['│', '─', '┌', '┐', '┘', '└', 1];
export const ROUND_BOX_SET: Boxset = ['│', '─', '╭', '╮', '╯', '╰', 1];
export const WAVY_BOX_SET: Boxset = ['│', '〰', '╭', '╮', '╯', '╰', 2];
export const DOT_BOX_SET: Boxset = ['⋮', '.', '╭', '╮', '╯', '╰', 1];

export const sharpBox = createBoxPrinter(SHARP_BOX_SET);
export const roundBox = createBoxPrinter(ROUND_BOX_SET);
export const wavyBox = createBoxPrinter(WAVY_BOX_SET);
export const dotBox = createBoxPrinter(DOT_BOX_SET);
