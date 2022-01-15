const colors = { main: "#f1f1f1", bg: "#23120b", doorknob: "#fdb827" };
const size = 1200;
let  ground = 800 * 0.95;
let rc;

function setup() {
//  randomSeed(1641480658028);
  const canvas = createCanvas(1200, 800);
  rc = rough.canvas(canvas.canvas);
  background(colors.bg);
  noLoop();
	ground= ground*random(0.78,0.95)
}

function draw() {

let v_PointY =   random(5,65)+80;
	let v_PointX = 320+random(-100,220);
  drawGrounding(v_PointX,v_PointY,ground);

print("X="+" "+v_PointX)
print("Y="+" "+v_PointY)
print("v_pointlength=   "+ v_pointlength)

drawDoor(v_PointX,v_PointY,ground,v_pointlength);
drawDoor(v_PointX,v_PointY,ground,v_pointlength);
drawDoor(v_PointX,v_PointY,ground,v_pointlength);

drawDoorKnob(v_PointX,v_PointY,ground,v_pointlength)
 // drawGround();
	//  drawGround();
// d(oo)raw(al)l a bit
//save("SolleWitt")


//  drawBuildings();
}

function drawGrounding(v_pointX,v_pointY,ground){
	v_pointlength= random(2,6);
  // v_pointlength= 1*random(2,6);

	print("ground=  "+ground)
	for (i=0;i<v_pointlength;i++)
	drawGround(v_pointX,v_pointY,v_pointlength,ground)
	return v_pointlength
}

function drawGround(vanish_pointX,vanish_pointY,v_pointlength,ground) {
  const xPad = 5 +random(0,20);
  const offset = 30+random(0,20);
let height=v_pointlength*random(0.05,0.1)*(vanish_pointY-ground);
//const vanish = 320+random(-100,220);
//upper curve
 let a= [xPad,  offset]
 let b=  [vanish_pointX+random(-20,20), offset+vanish_pointY]
 let c= [size - xPad, offset]
 let d=[xPad, ground+offset ]
 let e=	[vanish_pointX+random(-20,20) , ground-random(0,10)]
 let f=	[size - xPad, ground+offset ]
 let g=[vanish_pointX+random(-15,15), ground+height]



  rc.curve(
    [
      [xPad,  offset],
      [vanish_pointX+random(-20,20), offset+vanish_pointY],
      [size - xPad, offset],
    ],
    { stroke: colors.main, strokeWidth: random(0.5,2)/v_pointlength }
  );



//lower curve
	rc.curve(
		[
			[xPad, ground+offset ],
			[vanish_pointX+random(-20,20) , ground-random(0,10)],
			[size - xPad, ground+offset ],
		],
		{ stroke: colors.main, strokeWidth: random(0.5,2)/v_pointlength }
	);

// 	rc.polygon(
// 		[
// 		[xPad,  offset],
// 		[xPad, ground+offset ],
// 			[size - xPad, ground+offset ],
// [size - xPad, offset],
// 		],
// 		{ stroke: colors.main, strokeWidth: random(0.5,2)/v_pointlength }
// 	);
let chromatic=[a,b,c,d,e,f,g,a,a,a,c,c,c,c,c,c,c,c,c,d,d,d,d,d,d,d,d,d,f,f,f,f,f,f,f,f,f]
if(random(0,1)<0.8)
{

		rc.polygon(
			[
				shuffle(chromatic)[1],
				shuffle(chromatic)[1],
				shuffle(chromatic)[1],
				shuffle(chromatic)[1],
				shuffle(chromatic)[1],
				shuffle(chromatic)[1],

			],
			{ stroke: colors.main, strokeWidth: random(0.4,0.8)/v_pointlength }
		);

}

}



function drawDoor(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.05,0.1)*(yy-ground);
let doorwidth=6*v_pointlength
const points=[
	[xx-doorwidth+random(-0,0), ground+height],
  [xx-doorwidth+random(-0,0), ground-5-random(0,2)],
	[xx+doorwidth+random(-0,0), ground-5-random(0,2)],
	[xx+doorwidth+random(-0,0), ground+height]
]
//xx, ground+height/2, height
  rc.polygon(points, {
    fill: colors.main,
    fillStyle: random(["hachure"]),
    fillWeight: random(0,4)/v_pointlength,
    hachureAngle: random(90,93),
    stroke: "transparent",
  });
}

function drawDoorKnob(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.05,0.1)*(yy-ground);
let doorwidth=5*v_pointlength
//xx, ground+height/2, height
  rc.circle(xx+random(-20,20),ground+height/2,random(0.6,1.2)*height/v_pointlength, {
    fill: colors.doorknob,
    fillStyle: "dots",
    fillWeight: random(3,6)/v_pointlength,
    stroke: colors.doorknob,
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
