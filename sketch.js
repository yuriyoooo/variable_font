let canvas;
let pfat;
let qfat;
let rfat;
let sfat;
let Tt, Td, Pd;
let BR, BG, BB;
let TR, TG, TB;
let c;
let Rt, Gt, Bt;
let hx;
let play;
let t = 500;
let d;
let horizontal;
let vertical;
let myBoolean = false;
let colorH,colorV;
let contents ;
let item;
let p,q,w,w1,typtface;
let myImage;
let sliderM,sliderB,sliderP,sliderW;
let imgDiv,imgDiv2;
let inp;
let line,line2,line3,line4,line5,line6,line7,line8;
let video;
let rec1,rec2,rec3,rec4,rec5;
let lineMargin = 40;
let container1,container2,container3,container4,container5;
let T1,T2,T3,T41,T5,T6,T7,T8,T9;



function preload() {
  fontRegular = loadFont('AkzidenzGrotesk-Light.otf');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);//响应式页面设计
}
    
function setup() {
  
  sliderM = windowWidth/50;//滑块和侧边的距离
  sliderB = windowHeight/10;//滑块和底部的距离
  sliderP = 25;//滑块间距
  sliderW = windowWidth/6.5;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0); 
  p = createP('VISION \n A TYPEFACE \n WHICH CAN \n FOLLOW \n YOUR SIGHT');
//   p = select('#font');     
  //字体设计
  Tt = createSlider(0, 250, 100);
  Tt.position(10+sliderM, windowHeight-sliderB);
  Tt.style('width', sliderW+'px');
  Tt.style('background', '#000000');
  Td = createSlider(0, 20, 8);
  Td.position(10+sliderM, sliderP+windowHeight-sliderB);
  Td.style('width', sliderW+'px');
  Pd = createSlider(0, 370, 180);
  Pd.position(10+sliderM, sliderP*2+windowHeight-sliderB);
  Pd.style('width', sliderW +'px');
  //背景颜色设计
  BR = createSlider(0, 255, 235);
  BR.position(windowWidth/4+10+sliderM, windowHeight-sliderB);
  BR.style('width', sliderW+'px');
  BG = createSlider(0, 255, 235);
  BG.position(windowWidth/4+10+sliderM, sliderP+windowHeight-sliderB);
  BG.style('width', sliderW+'px');
  BB = createSlider(0, 255, 235);
  BB.position(windowWidth/4+10+sliderM, sliderP*2+windowHeight-sliderB);
  BB.style('width', sliderW+'px');
  //字体颜色设计
  TR = createSlider(0, 255, 0);
  TR.position(windowWidth/4*2+10+sliderM, windowHeight-sliderB);
  TR.style('width', sliderW+'px');
  TG = createSlider(0, 255, 0);
  TG.position(windowWidth/4*2+10+sliderM, sliderP+windowHeight-sliderB);
  TG.style('width', sliderW+'px');
  TB = createSlider(0, 255, 0);
  TB.position(windowWidth/4*2+10+sliderM, sliderP*2+windowHeight-sliderB);
  TB.style('width', sliderW+'px');
   
        //响应式页面  
        imgDiv = select("#imgDiv");
        imgDiv.position(windowWidth/2+110, windowHeight+80);
        imgDiv.style('width',windowWidth/1920*1.2*618+'px');
        imgDiv.style('height',windowHeight/1080*1.2*700+'px');
        line = select("#div1");
        line.style('margin-left',lineMargin+'px');
        line.style('width',windowWidth-2*lineMargin+'px');
        line.position(0,2*windowHeight-30);
        video = select("#v");
        video.position(0,2*windowHeight+10);
        video.style('width',windowWidth-80+'px');
        video.style('height',windowHeight-70+'px');
        line2 = select("#div2");
        line2.style('margin-left',lineMargin+'px');
        line2.style('width',windowWidth-2*lineMargin+'px');
        line2.position(0,3*windowHeight-30);
        imgDiv2 = select("#imgDiv2");
        imgDiv2.position(windowWidth/2-20, 3*windowHeight-20);
        imgDiv2.style('width',windowWidth/1920*1.5*621+'px');
        imgDiv2.style('height',windowHeight/1080*1.5*448+'px');
        line3 = select("#div3");
        line3.style('margin-left',lineMargin+'px');
        line3.style('width',windowWidth-2*lineMargin+'px');
        line3.position(0,3.5*windowHeight+10);
        rec1 = select("#rec1");
        rec1.style('width',windowWidth-80+'px');
        rec1.style('height',windowHeight-70+'px');
        rec1.style('stroke','#D8D8D8');
        rec1.style('border',4+'px'+'solid black');
        rec1.position(40,3.5*windowHeight+60);

        line4 = select("#div4");
        line4.style('margin-left',lineMargin+'px');
        line4.style('width',windowWidth-2*lineMargin+'px');
        line4.position(0,4.5*windowHeight+15);

        rec2 = select("#rec2");
        rec2.style('width',windowWidth-80+'px');
        rec2.style('height',windowHeight-70+'px');
        rec2.style('stroke','#D8D8D8');
        rec2.style('border',4+'px'+'solid black');
        rec2.position(40,4.5*windowHeight+60);  

        line5 = select("#div5");
        line5.style('margin-left',lineMargin+'px');
        line5.style('width',windowWidth-2*lineMargin+'px');
        line5.position(0,5.5*windowHeight+15);

        rec3 = select("#rec3");
        rec3.style('width',windowWidth-80+'px');
        rec3.style('height',windowHeight-70+'px');
        rec3.style('stroke','#D8D8D8');
        rec3.style('border',4+'px'+'solid black');
        rec3.position(40,5.5*windowHeight+60);

        line6 = select("#div6");
        line6.style('margin-left',lineMargin+'px');
        line6.style('width',windowWidth-2*lineMargin+'px');
        line6.position(0,6.5*windowHeight+15);

        rec4 = select("#rec4");
        rec4.style('width',windowWidth-80+'px');
        rec4.style('height',windowHeight-70+'px');
        rec4.style('stroke','#D8D8D8');
        rec4.style('border',4+'px'+'solid black');
        rec4.position(40,6.5*windowHeight+60);

        line7 = select("#div7");
        line7.style('margin-left',lineMargin+'px');
        line7.style('width',windowWidth-2*lineMargin+'px');
        line7.position(0,7.5*windowHeight+15);

        rec5 = select("#rec5");
        rec5.style('width',windowWidth-80+'px');
        rec5.style('height',windowHeight-70+'px');
        rec5.style('stroke','#D8D8D8');
        rec5.style('border',4+'px'+'solid black');
        rec5.position(40,7.5*windowHeight+60);

        line8 = select("#div8");
        line8.style('margin-left',lineMargin+'px');
        line8.style('width',windowWidth-2*lineMargin+'px');
        line8.position(0,8.5*windowHeight+15);
    
        
       
        q = select('#Intro');
        q.position(60,windowHeight+80);
        q.style('font-size' ,windowWidth/1920*40+'px');
        q.style('font-family' ,'context');
        q.style('text-align' ,'left');
        q.style('height', windowHeight-150 +'px');
        q.style('width', windowWidth/2-100+'px');
        q.style('letter-spacing' ,0.2+'px');
        q.style('line-height' ,windowWidth/1920*50+'px'); 
        q.style('overflow' ,'hidden'); 
    
    
    
        typtface = select('#Typeface');
        typtface.position(30,3*windowHeight+20);
        typtface.style('font-size' ,windowWidth/1920*31+'px');
        typtface.style('font-family' ,'context');
        typtface.style('height', 360 +'px');
        typtface.style('width', windowWidth/2-80+'px');
        typtface.style('letter-spacing' ,0.2+'px');
        typtface.style('line-height' ,windowWidth/1920*60+'px');
        typtface.style('text-align' ,'left');
        typtface.style('text-align' ,'top');
        typtface.style('overflow' ,'hidden'); 

      
      //响应式container
      container1 = select('#container1');
      container1.style('max-width', windowWidth-300+'px'); 
      container1.position((windowWidth-windowWidth+300)/2,3.5*windowHeight+150); 
      container2 = select('#container2');
      container2.style('max-width', windowWidth-300+'px');
      container2.position((windowWidth-windowWidth+300)/2,4.5*windowHeight+150); 
      container3 = select('#container3');
      container3.style('max-width', windowWidth-300+'px');
      container3.position((windowWidth-windowWidth+300)/2,5.5*windowHeight+150); 
      container4 = select('#container4');
      container4.style('max-width', windowWidth-300+'px');
      container4.position((windowWidth-windowWidth+280)/2,6.5*windowHeight+150); 
      container5 = select('#container5');
      container5.style('max-width', windowWidth-300+'px');
      container5.position((windowWidth-windowWidth+300)/2,7.5*windowHeight+150); 
    
    
      T1 = select('#t1');
      T1.style('height', 90+'px');
      T1.style('font-family', 'context');
      T1.style('font-size', 18+'px');
      T1.style('letter-spacing', 0.2+'px');
    T1.style('margin-left', 0+'px');
      T1.position(8,3.5*windowHeight);
      T2 = select('#t2');
      T2.style('height', 90+'px');
      T2.style('font-family', 'context');
      T2.style('font-size', 18+'px');
      T2.style('letter-spacing', 0.2+'px');
    T2.style('margin-left', 0+'px');
      T2.position(0,4.5*windowHeight);
      T3 = select('#t3');
      T3.style('height', 90+'px');
      T3.style('font-family', 'context');
      T3.style('font-size', 18+'px');
      T3.style('letter-spacing', 0.2+'px');
    T3.style('margin-left', 0+'px');
      T3.position(0,5.5*windowHeight);
      T4 = select('#t4');
      T4.style('height', 90+'px');
      T4.style('font-family', 'context');
      T4.style('font-size', 18+'px');
      T4.style('letter-spacing', 0.2+'px');
    T4.style('margin-left', 0+'px');
      T4.position(0,6.5*windowHeight);
      T5 = select('#t5');
      T5.style('height', 90+'px');
      T5.style('font-family', 'context');
      T5.style('font-size', 18+'px');
      T5.style('letter-spacing', 0.2+'px');
    T5.style('margin-left', 0+'px');
      T5.position(0,7.5*windowHeight);
    
    
      T6 = select('#school');
      T6.style('width', windowWidth/4-20+'px');
      T6.style('height', 400+'px');
      T6.style('font-family', 'context');
      T6.style('font-size', 16+'px');
      T6.style('letter-spacing', 0.18+'px');
      T6.style('line-height', 18.4+'px');
      T6.position(0,8.5*windowHeight+60);
    
    
      T7 = select('#designer');
      T7.style('width', windowWidth/4-20+'px');
      T7.style('height', 400+'px');
      T7.style('font-family', 'context');
      T7.style('font-size', 16+'px');
      T7.style('letter-spacing', 0.18+'px');
      T7.style('line-height', 18.4+'px');
      T7.position(windowWidth/4,8.5*windowHeight+60);

    
      T8 = select('#contact');
      T8.style('width', windowWidth/4-20+'px');
      T8.style('height', 400+'px');
      T8.style('font-family', 'context');
      T8.style('font-size', 16+'px');
      T8.style('letter-spacing', 0.18+'px');
      T8.style('line-height', 18.4+'px');
      T8.position(2*windowWidth/4,8.5*windowHeight+60);
    
      T9 = select('#right');
      T9.style('width', windowWidth/4-20+'px');
      T9.style('height', 400+'px');
      T9.style('font-family', 'context');
      T9.style('font-size', 16+'px');
      T9.style('letter-spacing', 0.18+'px');
      T9.style('line-height', 18.4+'px');
      T9.position(3*windowWidth/4,8.5*windowHeight+60);

    
 
}


function draw() {
    //背景颜色

    const Rb = BR.value();
    const Gb = BG.value();
    const Bb = BB.value();
    background(Rb,Gb,Bb);

    
    //播放键
    
    noStroke();
    fill(102,101,101);
    circle(windowWidth/4*3+10+sliderM, windowHeight-sliderB+5, 20);
    fill(225,225,225);
    triangle(windowWidth/4*3+7+sliderM, windowHeight-sliderB, windowWidth/4*3+7+8+sliderM, windowHeight-sliderB+5, windowWidth/4*3+7+sliderM, windowHeight-sliderB+2*5);
    play = createSlider(300, 500, -t+800);
    play.position(windowWidth/4*3+30+sliderM, windowHeight-sliderB);
    play.style('width', sliderW+'px');
    //GUI title
    if(myBoolean == false){
        colorH = 0;
        colorV = 255;
    } else if(myBoolean == true){
        colorH = 255;
        colorV = 0;
    }
    fill(colorH);
    rect(0,0,1/2*windowWidth,30);
    fill(colorV);
    textSize(13.5);
    textAlign(CENTER, CENTER);
    textFont(fontRegular);
    text('Horizontal',1/4*windowWidth,15);
    fill(colorV);
    rect(1/2*windowWidth,0,windowWidth,30);
    fill(colorH);
    textAlign(CENTER, CENTER);
    textFont(fontRegular);
    text('Vertical',3/4*windowWidth,15);
    //GUI bar
    fill(255);
    rect(10+sliderM,windowHeight-sliderB-2*sliderP,130,30,20);
    rect(windowWidth/4+10+sliderM,windowHeight-sliderB-2*sliderP,130,30,20);
    rect(windowWidth/4*2+10+sliderM,windowHeight-sliderB-2*sliderP,90,30,20);
    rect(windowWidth/4*3+sliderM,windowHeight-sliderB-2*sliderP,120,30,20);
    fill(0);
    textSize(13.5);
    textAlign(LEFT, CENTER);
    textFont(fontRegular);
    text('Typography Setting',20+sliderM,windowHeight-sliderB-2*sliderP+12);
    text('Background Colour',windowWidth/4+20+sliderM, windowHeight-sliderB-2*sliderP+12);
    text('Type Colour',windowWidth/4*2+20+sliderM, windowHeight-sliderB-2*sliderP+12);
    text('Horizontal Offset',windowWidth/4*3+10+sliderM, windowHeight-sliderB-2*sliderP+12);
    
    //字体大小   
    const fts = Tt.value();//字号大小
    const lsp = Td.value();//字间距大小
    const lgt = Pd.value();//段间距大小
    //字体颜色
    Rt = TR.value();
    Gt = TG.value();
    Bt = TB.value();
    hx = "#" + hex(Rt,2) + hex(Gt,2) + hex(Bt,2);
    //字体播放
    const P = play.value();
    //interaction
    if(mouseY<800){
    pfat = constrain(map(mouseX,width,0,300,500),300,500);
    rfat = constrain(map(mouseY,height,0,700,900),700,900);
    } 
    //中间字体
    if(myBoolean == false){    
        p.style('font-size' ,fts+'px');
        p.style('font-weight' ,pfat);
        p.style('align', 'center');
        p.style('justify-content', 'center');
        p.style('align-items', 'center');
        p.position(0,30);
        p.style('letter-spacing' ,lsp+'px');
        p.style('line-height' ,lgt+'px');
        p.style('color' , hx);
        p.style('height', windowHeight-180 +'px');
        p.style('width', windowWidth+'px');
        p.style('margin-right', 0+'px');
        p.style('margin-left', 0+'px');

    } else if(myBoolean == true){
        p.style('font-size' ,fts+'px');
        p.style('font-weight' ,rfat);
        p.style('align', 'center');
        p.style('justify-content', 'center');
        p.style('align-items', 'center');
        p.position(0,30);
        p.style('letter-spacing' ,lsp+'px');
        p.style('line-height' ,lgt+'px');
        p.style('color' , hx);
        p.style('height', windowHeight-180 +'px');
        p.style('width', windowWidth+'px');   
    }


    
}


function mouseClicked() {
//    let f = frameCount % 60;
//    let i = 0;
  d = dist(mouseX, mouseY, windowWidth/4*3+10+sliderM, windowHeight-sliderB+5);
  if (d < 10) {
//        for(let i = 100; i< 500; i += frameCount % 60){
//               pfat = i;
////               t = i; 
//             
//        }
      
      if( t > 300 ){
             for(let i= 0;i<200;i+=1){
//                 if(frameCount % 60 == f+1){
                     t = t-1;
                     pfat = t;
                     rfat = 400+t;
//                 }
//               t = t+frameCount/60;
//               pfat = t;
//               rfat = 400+t;              
             }
//           if(frameCount % 60 == f){          
//              t = t+frameCount/60;
//              pfat = t;
//              rfat = 400+t;
              
//              }
          

          }
      }
      
  horizontal = dist(mouseX, mouseY, 1/4*windowWidth, 15);  
  if (horizontal < 30) {
      myBoolean = false;
  }
  vertical = dist(mouseX, mouseY, 3/4*windowWidth, 15);  
  if (vertical < 30) {
      myBoolean = true;
  }
}


//input
function myBox(k) {
 var txt = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 var i = txt.indexOf(k);
 var next;
  if (i+1 < txt.length) {
   next = txt[i+1];
 }
  else {
  next = txt[0];
 }
  return next;
}
function keyTyped() {
  contents += myBox(key);
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) { 
       contents = contents.substring(0,contents.leangth-1);
  }
} 

