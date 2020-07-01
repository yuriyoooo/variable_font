let pfat;
let qfat;
let rfat;
let sfat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = createP('Specimen ');
  q = createP('Varaible');
  r = createP('VARIABLE ');
  s = createP('VARIABLE ');
 
  // noCursor();
}

function draw() {
  background(0,0,255);
  
  // p.remove();
  
  let posX = width/2;
  let posY = height/2+4*20;
  
  let fts = 80;//字号大小
  
  
//if(mouseX <= width/2 && mouseX > 0){
//  pfat = constrain(map(mouseX,0,width/2,0,1000),100,500);
//  qfat = constrain(map(mouseX*2,0,width/2,0,1000),100,500);
//  rfat = constrain(map(mouseX*3,0,width/2,0,1000),100,500);
//  sfat = constrain(map(mouseX*4,0,width/2,0,1000),100,500);   
//} else if(mouseX > width/2 && mouseX < width){
//  pfat = constrain(map(mouseY,0,height,700,900),700,1000);
//  qfat = constrain(map(mouseY*2,0,height,700,900),700,1000);
//  rfat = constrain(map(mouseY*3,0,height,700,900),700,1000);
//  sfat = constrain(map(mouseY*4,0,height,700,900),700,1000);   
//}
    

  pfat = constrain(map(mouseX,0,width,100,500),100,500);
  qfat = constrain(map(mouseX*2,0,width,100,500),100,500);
  rfat = constrain(map(mouseY,0,height,700,900),700,900);
  sfat = constrain(map(mouseY*2,0,height,700,900),700,900); 

  
  p.style('font-size' ,fts+'px');
  p.style('font-weight' ,pfat);
  p.style('align', 'center');
  p.position(posX/2,posY-10);
  
  
  q.style('font-size' ,fts+'px');
  q.style('font-weight' ,qfat);
  q.style('align', 'center');
  q.position(posX/2,posY-200);
    
  r.style('font-size' ,fts+'px');
  r.style('font-weight' ,rfat);
  r.style('align', 'center');
  r.position(posX/2,posY-400);
    
  s.style('font-size' ,fts+'px');
  s.style('font-weight' ,sfat);
  s.style('align', 'center');
  s.position(posX/2,posY-600);
  
  
}