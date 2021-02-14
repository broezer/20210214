const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let t1, t2 , t3;

let cols, rows;
let scl = 20;
let w = 40;
let h = 45;

let scl02 = 40;
let w02 = 1600;
let h02 = 1200;

function setup() {
   createCanvas(400, 400, WEBGL);
   
   
   c1 = color(255, 251, 200);
   c2 = color(242, 218, 255);
   c3 = color(88,12, 12);
   
   b1 = color(13,28, 33);
   b2 = color(0,21, 21);
   b3 = color(255, 28, 43);

   cols = w / scl;
   rows = h / scl;
   
   cols02 = w02 / scl02;
   rows02 = h02 / scl02;
   
   
}


function draw() {

  push();
  translate(0, 0, -880);
  
  setGradient(-width*2, height * -2 , width * 4, height * 2, b3, b2, b3, Y_AXIS);
  setGradient(-width*2,0, width * 4, height * 2, b3, c3, b2,Y_AXIS);
  pop();


 
  push();
  translate(0, height * 0.075, 150);
  rotateX(PI/1.2);
  rotateZ(PI/0.5);
  rotateY(PI/4);
  
  for (let i=0; i <4; i++){
    for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols; x++) {
        fill(b1);
        stroke(b3);
        rect(x*scl, y*scl, scl, scl);
        }
    }
    //
    translate(40, 0, 0);
    rotateY(radians(90));
  }
  translate(0, 40, -40);
  rotateX(radians(90));
  for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols; x++) {
        fill(b1);
        stroke(b3);
        rect(x*scl, y*scl, scl, scl);
        }
    }

  pop();
  
  push();
  translate(-800, -600, -120);
  rotateX(radians(-60));
  for (let y = 0; y < rows02 - 1; y++) {
        for (let x = 0; x < cols02; x++) {
        fill(b1);
        stroke(b3);
        rect(x*scl02, y*scl02, scl02, scl02);
        }
    }
  pop();
  
  save("20210214.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

