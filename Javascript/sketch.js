function setup() {
  let cnv = createCanvas(700, 400);
colorMode(HSB);
  noStroke();
  cnv.id('sunset');
  resizeCanvas(windowWidth, windowHeight)
  

  let colorA = color(234, 23, 43);

  let colorB = color(46, 77, 100);

  let stripeCount = 20;

  let stripeHeight = height / stripeCount;


  for (let y = 0; y < height; y += stripeHeight) {
    let fadeAmount = y / height;

    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }
}

