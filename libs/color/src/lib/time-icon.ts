/**
 * Generator function that yields 🕐 emojis
 */
export function* timeIcon() {
  const inTimes = [
    '🕛',
    '🕐',
    '🕑',
    '🕒',
    '🕓',
    '🕔',
    '🕕',
    '🕖',
    '🕗',
    '🕘',
    '🕙',
    '🕚',
    '🕛',
  ];
  for (let i = 0; i < inTimes.length; i++) {
    if (inTimes.indexOf(inTimes[i]) == 0) i = 0;
    yield inTimes[i];
  }
}
