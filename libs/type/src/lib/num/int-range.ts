export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> =
  | Exclude<Enumerate<T>, Enumerate<F>>
  | T;

export type Binary = IntRange<0, 1>;

export type Digit = IntRange<0, 9>;

export type Rate = IntRange<0, 5>;

export type Percent = IntRange<0, 100>;

export type HumanAge = IntRange<0, 200>;

export type Hour = IntRange<0, 23>;

export type Minute = IntRange<0, 59>;

export type Second = IntRange<0, 59>;

export type Milisecond = IntRange<0, 100>;

export type WeekDay = IntRange<0, 6>;

export type MonthDay = IntRange<0, 30>;

export type ShoeSize = IntRange<1, 30>;

export type SpeedLimit = IntRange<0, 140>;

export type BloodPresure = IntRange<40, 200>;

export type WhiteBall = IntRange<1, 70>;

export type GoldenBall = IntRange<1, 25>;

export type MegaMillion = {
  whites: [WhiteBall, WhiteBall, WhiteBall, WhiteBall, WhiteBall];
  gold: GoldenBall;
};

export type ClothingSize = IntRange<0, 60>;
