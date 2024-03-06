// Hacer que la clase complex entienda los racionales.
import { Complex } from "./Complex";
import { Rational } from "./Rational";

export class Adapter extends Complex {
  constructor(private rational: Rational){
    super(rational.num1 / rational.num2, 0);
  }
}