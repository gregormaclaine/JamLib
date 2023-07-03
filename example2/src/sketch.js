const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

const grid = new JL.Grid([400, 300, 50, 50, 2], [5, 4], console.log);

function mousePressed() {
  grid.handle_click();
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  cursor();
  background(240);

  grid.show(data);

  fill('red');
  ellipse(400, 300, 5, 5);
}
