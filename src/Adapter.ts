import { Complex } from "./Complex";
import { Rational } from "./Rational";
/**
 * Class consisting on an adapter to operate with complex and rational numbers mixed.
 */
export class Adapter extends Complex {
  constructor(private rational: Rational){
    super(rational.num1 / rational.num2, 0);
  }
}