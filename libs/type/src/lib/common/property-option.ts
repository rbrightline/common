/**
 * Create a record of object properties
 * @C class type
 * @O options type
 */

export type PropertyOption<C, O> = Record<keyof C, O>;
