import "mocha";
import { expect } from "chai";
import { ArithmeticableCollection } from "../src/ArithmeticableCollection";
import { Complex } from "../src/Complex";
import { Rational } from "../src/Rational";
import { Adapter } from "../src/Adapter"

const myComplex = new Complex(1, 2);
const myCollection = new ArithmeticableCollection<Complex | Rational>([
  myComplex,
]);

describe("exercise 1 modificated tests", () => {
  it("arithmeticable collection must add new elements", () => {
    const myRational = new Rational(2, 4);
    myCollection.addArithmeticable(myRational);
    expect(myCollection.elements).to.be.deep.equal([myComplex, myRational]);
  });

  it("arithmeticable collection must return an element", () => {
    expect(myCollection.getArithmeticable(0)).to.be.equal(myComplex);
  });

  it("arithmeticable collection must return undefined if element not in", () => {
    expect(myCollection.getArithmeticable(10)).to.be.equal(undefined);
  });

  it("arithmeticable collection must return the number of elements inside", () => {
    expect(myCollection.getNumberOfArithmeticables()).to.be.equal(2);
  });

  it("complex must add two complex numbers", () => {
    const myNewComplex = new Complex(2, 4);
    expect(
      myCollection.getArithmeticable(0)?.add(myNewComplex)
    ).to.be.deep.equal(new Complex(3, 6));
  });

  it("complex must substract two complex numbers", () => {
    const myNewComplex = new Complex(2, 4);
    expect(
      myCollection.getArithmeticable(0)?.substract(myNewComplex)
    ).to.be.deep.equal(new Complex(-1, -2));
  });

  it("complex must multiply two complex numbers", () => {
    const myNewComplex = new Complex(2, 4);
    expect(
      myCollection.getArithmeticable(0)?.multiply(myNewComplex)
    ).to.be.deep.equal(new Complex(-6, 8));
  });

  it("complex must divide two complex numbers", () => {
    const myNewComplex = new Complex(2, 4);
    expect(
      myCollection.getArithmeticable(0)?.divide(myNewComplex)
    ).to.be.deep.equal(new Complex(0.5, 0));
  });

  it("rational must add two rational numbers", () => {
    const myNewRational = new Rational(2, 4);
    expect(
      myCollection.getArithmeticable(1)?.add(myNewRational)
    ).to.be.deep.equal(new Rational(1, 1));
  });

  it("rational must substract two rational numbers", () => {
    const myNewRational = new Rational(2, 4);
    expect(
      myCollection.getArithmeticable(1)?.substract(myNewRational)
    ).to.be.deep.equal(new Rational(0, 1));
  });

  it("rational must multiply two rational numbers", () => {
    const myNewRational = new Rational(2, 4);
    expect(
      myCollection.getArithmeticable(1)?.multiply(myNewRational)
    ).to.be.deep.equal(new Rational(1, 2));
  });

  it("rational must divide two rational numbers", () => {
    const myNewRational = new Rational(2, 4);
    expect(
      myCollection.getArithmeticable(1)?.divide(myNewRational)
    ).to.be.deep.equal(new Rational(1, 1));
  });

  it("rational must add two rational numbers", () => {
    const myNewRational = new Rational(2, 4);
    expect(
      myCollection.getArithmeticable(1)?.add(myNewRational)
    ).to.be.deep.equal(new Rational(1, 1));
  });

  it("complex must add a complex number and a rational using adapter", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      adapter.add(myComplex)
    ).to.be.deep.equal(new Complex(1.5, 2));
  });

  it("complex must substract a complex number and a rational using adapter", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      adapter.substract(myComplex)
    ).to.be.deep.equal(new Complex(-0.5, -2));
  });

  it("complex must multiply a complex number and a rational using adapter", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      adapter.multiply(myComplex)
    ).to.be.deep.equal(new Complex(0.5, 1)); 
  });

  it("complex must divide two complex numbers using adapter", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      adapter.divide(myComplex)
      ).to.be.deep.equal(new Complex(0.1, -0.2));
  });
  
  it("complex must add a complex number and a rational with adapter as argument", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.add(adapter)
    ).to.be.deep.equal(new Complex(1.5, 2));
  });

  it("complex must substract a complex number and a rational with adapter as argument", () => {
      const myNewRational = new Rational(2, 4);
      const adapter = new Adapter(myNewRational);
      expect(
        myComplex.substract(adapter)
      ).to.be.deep.equal(new Complex(0.5, 2));
  });

  it("complex must multiply a complex number and a rational with adapter as argument", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.multiply(adapter)
    ).to.be.deep.equal(new Complex(0.5, 1)); 
  });

  it("complex must divide two complex numbers with adapter as argument", () => {
    const myNewRational = new Rational(2, 4);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.divide(adapter)
    ).to.be.deep.equal(new Complex(2, 4));
  });

  it("complex must add a complex number and a rational with adapter as argument (2/2 + (1 + 2i) = 2 + 2i)", () => {
    const myNewRational = new Rational(2, 2);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.add(adapter)
    ).to.be.deep.equal(new Complex(2, 2));
  });

  it("complex must substract a complex number and a rational with adapter as argument (2/2 - (1 + 2i) = 0 + 2i)", () => {
      const myNewRational = new Rational(2, 2);
      const adapter = new Adapter(myNewRational);
      expect(
        myComplex.substract(adapter)
      ).to.be.deep.equal(new Complex(0, 2));
  });

  it("complex must multiply a complex number and a rational with adapter as argument ((2/2) * (1 + 2i) = 1 + 2i )", () => {
    const myNewRational = new Rational(2, 2);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.multiply(adapter)
    ).to.be.deep.equal(new Complex(1, 2)); 
  });

  it("complex must divide two complex numbers with adapter as argument ((2/2) * (1 + 2i) = 1 + 2i )", () => {
    const myNewRational = new Rational(2, 2);
    const adapter = new Adapter(myNewRational);
    expect(
      myComplex.divide(adapter)
    ).to.be.deep.equal(new Complex(1, 2));
  });



});