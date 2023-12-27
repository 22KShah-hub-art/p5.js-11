createCanvas()
{
    circle(30, 30, 20);
describe('A white circle with black outline in the middle of a gray canvas.');
}

function setup() {
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    //capture.hide();
  }