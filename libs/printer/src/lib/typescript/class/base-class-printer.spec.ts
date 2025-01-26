import { BaseClassPrinter as C } from './base-class-printer';

describe('BaseClassPrinter', () => {
  it('should print base class', () => {
    expect(new C({ name: 'C', type: 'class' }).print()).toEqual(
      `export class C {}`
    );
    expect(new C({ name: 'C', type: 'interface' }).print()).toEqual(
      `export interface C {}`
    );
    expect(new C({ name: 'C', type: 'dto' }).print()).toEqual(
      `export class C {}`
    );
    expect(new C({ name: 'C', type: 'entity' }).print()).toEqual(
      `export class C {}`
    );
    expect(new C({ name: 'C', type: 'type' }).print()).toEqual(
      `export type C = {}`
    );
    expect(new C({ name: 'C', type: 'enum', enum: [] }).print()).toEqual(
      `export enum C {}`
    );
    expect(
      new C({ name: 'C', type: 'constant', constant: 100 }).print()
    ).toEqual(`export const C = 100;`);
  });
});
