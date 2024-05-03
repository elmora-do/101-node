/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

export default function (sides: number[]): number[] {
  const calculate = (polygon: IPolygon): number => {
    return polygon.calculateArea();
  };

  return [
    calculate(new Triangle(sides[0], sides[1])),
    calculate(new Square(sides[0], sides[1])),
    calculate(new Rectangle(sides[0], sides[1])),
  ];
}

interface IPolygon {
  calculateArea(): number;
}

abstract class Polygon implements IPolygon {
  constructor(
    protected firstSide: number,
    protected secondSide: number
  ) {}

  calculateArea(): number {
    return -1;
  }
}

class Triangle extends Polygon {
  calculateArea(): number {
    return (this.firstSide * this.secondSide) / 2;
  }
}

class Square extends Polygon {
  calculateArea(): number {
    return this.firstSide * this.secondSide;
  }
}

class Rectangle extends Square {}
