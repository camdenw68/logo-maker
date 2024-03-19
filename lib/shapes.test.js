const { createCircle, createSquare, createTriangle } = require('../lib/shapes');

describe('Shapes Module Tests', () => {
  test('Should create a circle', () => {
    const circle = createCircle('green');
    expect(circle.render()).toMatch('<circle');
  });

  test('Should create a square', () => {
    const square = createSquare('blue');
    expect(square.render()).toMatch('<rect');
  });

  test('Should create a triangle', () => {
    const triangle = createTriangle('pink');
    expect(triangle.render()).toMatch('<polygon');
  });
});
