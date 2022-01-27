const colors = {
  main: "#f1f1f1",
  bg: "#02040a",
  doorknob: "#fdb827",
  sea: '#52c2eb',
  sand:'#a18360',
  roof:'#b03737',
  door:'#5ead80',
skin:'#f5dba4',
body1:'#c5e6d5',
body2:'#70cfc4'
};
const size = 1200;
let  ground = 800 * 0.95;
let rc;

function setup() {
//  randomSeed(1641480658028);
  const canvas = createCanvas(3000, 1200);
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();
	ground= ground*random(0.88,0.95)
  waterfallTip= random(300,700)
}

function draw() {

let v_PointY =   random(5,65)+80;
	let v_PointX = 280+random(-100,220);

print("X="+" "+v_PointX)
print("Y="+" "+v_PointY)
//print("v_pointlength=   "+ v_pointlength)

  // for (horiz=0;horiz<1200;horiz+=random(150,380)){
  //   for (verti=800;verti>10;verti-=random(130,260)){
  //     drawSand(horiz+random(-100,100),verti+random(-100,100),10);
  //   }
  // }
// for (let k=0;k<800;k+=random(50,300)){
//drawDoorKnob(1000-v_PointX,v_PointY+50,random(10,20),2, 1)
// drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2, 0.7)
// drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2, 0.4)
// drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2, 0.25)
// drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2, 0.1)
// drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2, 0.08)

// }
// for (let k=0;k<1000;k+=random(40,110)){
//
//   drawMountain(v_PointX,v_PointY,ground-k-300,k+1);
//
// }
drawMountainLine()

//drawMountain(random(300,500),random(150,300));
//drawMountain(random(1300,1500),random(150,300));
//drawMountain(random(2300,2500),random(150,300));

// drawBoat(v_PointX,v_PointY,ground-150,v_pointlength);
// drawBoat(v_PointX,v_PointY,ground-150,v_pointlength);
// drawBoat(v_PointX,v_PointY,ground-150,v_pointlength);
// drawBoat(v_PointX,v_PointY,ground-150,v_pointlength);

//drawDoor(v_PointX,v_PointY,ground,v_pointlength);
//drawDoor(v_PointX,v_PointY,ground,v_pointlength);


//drawPeople(v_PointX+200,v_PointY,ground,v_pointlength);
//drawPeople(v_PointX+200,v_PointY,ground,v_pointlength);
//drawPeople(v_PointX+400,v_PointY,ground,v_pointlength);
//drawPeople(v_PointX+400,v_PointY,ground,v_pointlength);


 // drawGround();
	//  drawGround();
// d(oo)raw(al)l a bit
//save("daqian")


//  drawBuildings();
}

function drawSand(xx,yy){
  points=[
  	[xx+random(-500,-150), ground+height-yy],
  	[xx+random(-0,0), ground-5-random(0,12)-yy],
  	[xx+random(150,500), ground+height-yy]
  ]
  //xx, ground+height/2, height
    rc.polygon(points, {
      fill: colors.sand,
      fillStyle: random(["dots"]),
      fillWeight: random(0.01,0.1),
      hachureAngle: random(0,93),
      stroke: "transparent",
    });

    points2=[
      [xx+random(-500,-150), ground],
      [xx+random(-0,0), ground+5+random(0,12)+yy],
      [xx+random(150,500), ground]
    ]
    //xx, ground+height/2, height
      rc.polygon(points2, {
        fill: colors.sand,
        fillStyle: random(["dots"]),
        fillWeight: random(0.01,0.1),
        hachureAngle: random(0,93),
        stroke: "transparent",
      });
}

// function drawGrounding(v_pointX,v_pointY,ground,xPad){
// 	 v_pointlength= random(2,6);
//   //v_pointlength= 1
//
// 	print("ground=  "+ground)
// 	for (i=0;i<v_pointlength;i++)
// 	drawGround(v_pointX,v_pointY,v_pointlength,ground,xPad)
// 	return v_pointlength
// }
//
// function drawGround(vanish_pointX,vanish_pointY,v_pointlength,ground,xPad) {
//   //const xPad = 5 +random(0,20);
//   const offset = 330+random(50,220);
// let height=v_pointlength*random(0.05,0.1)*(vanish_pointY-ground);
// //const vanish = 320+random(-100,220);
// //upper curve
//  // let a= [xPad,  offset]
//  // let b=  [vanish_pointX+random(-20,20), offset+vanish_pointY]
//  // let c= [size - xPad, offset]
//  // let d=[xPad, ground+offset ]
//  // let e=	[vanish_pointX+random(-20,20) , ground-random(0,10)]
//  // let f=	[size - xPad, ground+offset ]
//  // let g=[vanish_pointX+random(-15,15), ground+height]
//
// const pointseas= [
//   [xPad,  offset],
// //  [vanish_pointX+random(-20,20), offset+vanish_pointY],
// [vanish_pointX+random(-20,20), offset],
//   [size - xPad, offset],
// [size - xPad, ground+offset-300 ],
//   [vanish_pointX+random(-20,120) , ground-random(0,10)-150],
//   [size - xPad, offset],
//     [vanish_pointX+random(-120,20) , ground-random(0,10)-150],
//     [xPad, ground+offset-300 ],
// ];
//
// rc.polygon(pointseas, {
//   fill: colors.sea,
//   fillStyle: random(["hachure"]),
//   fillWeight: random(0,0.6)/v_pointlength,
//   hachureAngle: random(90,93),
//   stroke: "transparent",
// });
//
// }

function drawPeople(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.05,0.1)*(yy-ground);
let doorwidth=12*v_pointlength
const pointhouse=[
	[xx-doorwidth+random(-0,0), ground+height],
  [xx-doorwidth+random(-0,0), ground],
	[xx+doorwidth+random(-0,0), ground],
	[xx+doorwidth+random(-0,0), ground+height]
]
//xx, ground+height/2, height
  rc.polygon(pointhouse, {
    fill: random([colors.main,colors.body2]),
    fillStyle: random(["cross-hatch"]),
    fillWeight: random(1,2)/v_pointlength,
    hachureAngle: random(10,193),
    stroke: "transparent",
  });

  const pointhead=[
  	[xx-doorwidth+random(-3,-2), ground+height],
    [xx, ground+height-random(60,170)],
  	[xx+doorwidth+random(2,3),ground+height],
  ]
  //xx, ground+height/2, height
    rc.circle(xx,ground+height-30,random(1.1,1.5)*doorwidth, {
      fill: colors.skin,
      fillStyle: random(["cross-hatch"]),
      fillWeight: random(3,6)/v_pointlength,
      hachureAngle: random(190,193),
      stroke: "transparent",
    });

    const hairshift= doorwidth*int(random(10,30))/60+random(10,35);
        const pointhair=[
        	[xx-hairshift-random(1,3), ground+height-random(10,30)],
          [xx-hairshift-random(1,3), ground+height-30-random(10,30)],
        	[xx+random(20,30), ground+height-30-40-random(10,30)],
        	[xx+random(20,30), ground+height-30-random(10,30)]
        ]
        //xx, ground+height/2, height
          rc.polygon(pointhair, {
            fill: colors.bg,
            fillStyle: random(["hachure"]),
            fillWeight: random(5,8)/v_pointlength,
            hachureAngle: random(0,193),
            stroke: "transparent",
          });

const doorshift= doorwidth*int(random(10,30))/60+random(10,35);
    const pointdoor=[
    	[xx-doorshift, ground],
      [xx-doorshift, ground+height/(random(2,3))],
    	[xx-random(1,10), ground+height/(random(2,3))],
    	[xx-random(1,10), ground]
    ]
    //xx, ground+height/2, height
      rc.polygon(pointdoor, {
        fill: random([colors.body2,colors.bg]),
        fillStyle: random(["hachure"]),
        fillWeight: random(3,5)/v_pointlength,
        hachureAngle: random(90,193),
        stroke: "transparent",
      });

      const doorshift2= doorwidth*int(random(10,30))/60+random(10,35);
          const pointdoor2=[
          	[xx+doorshift2, ground],
            [xx+doorshift2, ground+height/(random(2,3))-random(1,40)],
          	[xx+random(1,10), ground+height/(random(2,3))-random(1,40)],
          	[xx+random(1,10), ground]
          ]
          //xx, ground+height/2, height
            rc.polygon(pointdoor2, {
              fill: random([colors.body2,colors.bg]),
              fillStyle: random(["hachure"]),
              fillWeight: random(3,5)/v_pointlength,
              hachureAngle: random(90,193),
              stroke: "transparent",
            });
// const chimwidth= doorwidth*int(random(2,3))/60+random(10,35);
//       const pointchimney=[
//         [xx+chimwidth, ground-150-random(80,120)],
//         [xx+chimwidth, ground+height-30],
//         [xx, ground+height-30],
//         [xx, ground-150-random(80,120)]
//       ]
//       //xx, ground+height/2, height
//         rc.polygon(pointchimney, {
//           fill: colors.bg,
//           fillStyle: random(["cross-hatch"]),
//           fillWeight: random(2,6)/v_pointlength,
//           hachureAngle: random(-190,-193),
//           stroke: "transparent",
//         });
}

function drawBoat(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.05,0.07)*(yy-ground);
let doorwidth=36*v_pointlength
const pointhouse=[
	[xx-doorwidth+random(-0,0), ground+height],
  [xx-doorwidth/random(1.5,4)+random(-0,0), ground-random(40,80)],
	[xx+doorwidth/random(1.5,4)+random(-0,0), ground-random(40,80)],
	[xx+doorwidth+random(-0,0), ground+height]
]
//xx, ground+height/2, height
  rc.polygon(pointhouse, {
    fill: colors.main,
    fillStyle: random(["hachure"]),
    fillWeight: random(1 ,2)/v_pointlength,
    hachureAngle: random(90,93),
    stroke: "transparent",
  });
let sailLheight=random(3,30);
  const pointroof=[
  	[xx-doorwidth-random(-30,-20), ground+height-sailLheight],
    [xx, ground+height-random(60,170)-sailLheight*2],
  	[xx+random(12,31),ground+height-sailLheight],
  ]
  //xx, ground+height/2, height
    rc.polygon(pointroof, {
      fill: colors.roof,
      fillStyle: random(["hachure"]),
      fillWeight: random(1,2)/v_pointlength,
      hachureAngle: random(190,193),
      stroke: "transparent",
    });

let sailRheight=random(2,30);
    const pointroof2=[
      [xx+random(-3,-2), ground+height-sailRheight],
      [xx, ground+height-random(60,170)-sailRheight],
      [xx+doorwidth+random(-20,-30),ground+height-sailRheight],
    ]
    //xx, ground+height/2, height
      rc.polygon(pointroof2, {
        fill: colors.roof,
        fillStyle: random(["hachure"]),
        fillWeight: random(1,2)/v_pointlength,
        hachureAngle: random(90,93),
        stroke: "transparent",
      });
const doorshift= doorwidth*int(random(10,30))/60+random(10,35);
    const pointdoor=[
    	[xx-doorshift/2, ground-random(50,60)],
      [xx-doorshift/2, ground+height/(random(2,3))-random(50,60)],
    	[xx, ground+height/(random(2,3))-random(50,60)],
    	[xx, ground-random(50,60)]
    ]
    //xx, ground+height/2, height
      rc.polygon(pointdoor, {
        fill: colors.bg,
        fillStyle: random(["cross-hatch"]),
        fillWeight: random(0.5,1)/v_pointlength,
        hachureAngle: random(90,93),
        stroke: "transparent",
      });
// const chimwidth= doorwidth*int(random(2,3))/60+random(10,35);
//       const pointchimney=[
//         [xx+chimwidth, ground-150-random(80,120)],
//         [xx+chimwidth, ground+height-30],
//         [xx, ground+height-30],
//         [xx, ground-150-random(80,120)]
//       ]
//       //xx, ground+height/2, height
//         rc.polygon(pointchimney, {
//           fill: colors.bg,
//           fillStyle: random(["cross-hatch"]),
//           fillWeight: random(2,6)/v_pointlength,
//           hachureAngle: random(-190,-193),
//           stroke: "transparent",
//         });
}

function drawDoorKnob(xx,yy,ground,v_pointlength,gain) {
height=v_pointlength*random(0.5,1)*(yy-ground);
//let doorwidth=35*v_pointlength
//xx, ground+height/2, height
  rc.circle(xx+random(-20,20),ground+height/2,0.5 *random(3,4)*height/(gain*v_pointlength), {
    fill: colors.sand,
    fillStyle: "dots",
    fillWeight: gain*random(0.1,0.2)/v_pointlength,
    stroke: "transparent",
  });
}
