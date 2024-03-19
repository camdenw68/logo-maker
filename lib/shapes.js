function Shapes() {
  const shape = {
      color: ""
  };

  function setColor(color) {
      shape.color = color;
  }

  return {
      setColor
  };
}

function createTriangle(color) {
  const shape = Shapes();
  shape.render = () => `<polygon points="150,18 244,182 56,182" fill="${color}" />`;
  return shape;
}

function createSquare(color) {
  const shape = Shapes();
  shape.render = () => `<rect x="90" y="40" width="120" height="120" fill="${color}" />`;
  return shape;
}

function createCircle(color) {
  const shape = Shapes();
  shape.render = () => `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  return shape;
}

module.exports = { createSquare, createTriangle, createCircle };
