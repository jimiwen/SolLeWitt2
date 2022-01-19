const colors = {
  main: "#f1f1f1",
  bg: "#23120b",
  doorknob: "#fdb827",
  sea: '#52c2eb',
  sand:'#a16d37',
  roof:'#b03737',
  door:'#5ead80',
skin:'#f5dba4',
body1:'#c5e6d5',
body2:'#234031'
};
const size = 1200;
let  ground = 800 * 0.95;
let rc;

function setup() {
//  randomSeed(1641480658028);
  const canvas = createCanvas(1200, 800);
  rc = rough.canvas(canvas.canvas);
  background(colors.bg);
  noLoop();
	ground= ground*random(0.9,0.95)
}

function draw() {

let v_PointY =   random(5,65)+80;
	let v_PointX = 320+random(-100,120);

print("X="+" "+v_PointX)
print("Y="+" "+v_PointY)

  for (horiz=0;horiz<1200;horiz+=random(150,180)){
    for (verti=800;verti>10;verti-=random(130,160)){
      drawSand(horiz+random(-100,100),verti+random(-100,100),10);
    }
  }

//drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2)


drawGrounding(v_PointX,v_PointY,ground);
print("v_pointlength=   "+ v_pointlength)


drawDoor(v_PointX,v_PointY,ground,v_pointlength);
// drawDoor(v_PointX,v_PointY,ground,v_pointlength);
// drawDoor(v_PointX,v_PointY,ground,v_pointlength);


//drawPeople(v_PointX-random(100,150),v_PointY-random(200,400),ground,v_pointlength);
//drawPeople(v_PointX+random(250,350),v_PointY-random(500,600),ground,v_pointlength);
//drawPeople(v_PointX+random(450,500),v_PointY-random(300,500),ground,v_pointlength);

//
// drawPeople(v_PointX-random(100,200),v_PointY-random(200,400),ground,v_pointlength);
// drawPeople(v_PointX+random(150,250),v_PointY-random(400,600),ground,v_pointlength);
// drawPeople(v_PointX+random(300,500),v_PointY-random(300,500),ground,v_pointlength);

 // drawGround();
	//  drawGround();
// d(oo)raw(al)l a bit
//save("cookman")


//  drawBuildings();
}

function drawSand(xx,yy){
  points=[
  	[xx+random(-500,-150), ground+height-yy],
  	[xx+random(-0,0), ground-5-random(0,12)-yy],
  	[xx+random(150,500), ground+height-yy]
  ]
  //xx, ground+height/2, height
    rc.circle(xx,ground-5-random(0,12)-yy,random(20,350),  {
      fill: colors.sea,
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

function drawGrounding(v_pointX,v_pointY,ground){
	 v_pointlength= random(4,6);
  //v_pointlength= 1

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
 // let a= [xPad,  offset]
 // let b=  [vanish_pointX+random(-20,20), offset+vanish_pointY]
 // let c= [size - xPad, offset]
 // let d=[xPad, ground+offset ]
 // let e=	[vanish_pointX+random(-20,20) , ground-random(0,10)]
 // let f=	[size - xPad, ground+offset ]
 // let g=[vanish_pointX+random(-15,15), ground+height]

const pointseas= [
  [xPad,  offset],
  [vanish_pointX+random(-20,20), offset+vanish_pointY],
  [size - xPad, offset],
[size - xPad, ground+offset-350 ],
  [vanish_pointX+random(-20,20) , ground-random(0,10)-350],
    [xPad, ground+offset-300 ],
];

// rc.polygon(pointseas, {
//   fill: colors.sea,
//   fillStyle: random(["hachure"]),
//   fillWeight: random(0,1.2)/v_pointlength,
//   hachureAngle: random(90,93),
//   stroke: "transparent",
// });

}

function drawPeople(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.09,0.104)*(yy-ground);
let doorwidth=12*v_pointlength
print(height)
const pointhouse=[
	[xx-doorwidth+random(-0,0), ground+height],
  [xx-doorwidth+random(-0,0), ground+height/2],
	[xx+doorwidth+random(-0,0), ground+height/2],
	[xx+doorwidth+random(-0,0), ground+height]
]

const pointhouse2=[
	[xx-doorwidth+random(-14,14), ground+height+random(-14,14)],
  [xx-doorwidth+random(-14,14), ground+height/2+random(-14,14)],
	[xx+doorwidth+random(-14,14), ground+height/2+random(-14,14)],
	[xx+doorwidth+random(-14,14), ground+height+random(-14,14)]
]
//xx, ground+height/2, height
  rc.polygon(pointhouse, {
    fill: random([colors.main]),
    fillStyle: random(["cross-hatch"]),
    fillWeight: random(1,2)/v_pointlength,
    hachureAngle: random(10,193),
    stroke: "transparent",
  });

  rc.polygon(pointhouse2, {
    fill: random([colors.main]),
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
  headsize=random(1.3,1.6)*doorwidth;
    rc.circle(xx,ground+height-headsize/2-10,headsize, {
      fill: colors.sand,
      fillStyle: random(["cross-hatch"]),
      fillWeight: random(3,6)/v_pointlength,
      hachureAngle: random(190,193),
      stroke: "transparent",
    });

    const hairshift= headsize;
    const hatsize=random(0.8,1.3)
    const hatshiftX=random(-25,25);
    const hatshiftY=random(-25,25);
        const pointhair=[
        	[xx-hairshift*0.8+hatshiftX, ground+height-headsize*0.9*hatsize],
          [xx-hairshift*0.8, ground+height-headsize*1.3*hatsize],
        	[xx+hairshift*0.3, ground+height-headsize*1.3*hatsize+hatshiftY],
        	[xx+hairshift*0.3, ground+height-headsize*0.9*hatsize]
        ]
        //xx, ground+height/2, height
          rc.polygon(pointhair, {
            fill: colors.main,
            fillStyle: random(["cross-hatch"]),
            fillWeight: random(1,3)/v_pointlength,
            hachureAngle: random(90,93),
            stroke: "transparent",
          });


          // rc.circle(xx-hairshift*0.9,ground+height-headsize*1.35*hatsize,headsize*0.5, {
          //   fill: random([colors.bg,colors.main]),
          //   fillStyle: random(["dots"]),
          //   fillWeight: random(0.5,1.2)/v_pointlength,
          //   hachureAngle: random(190,193),
          //   stroke: "transparent",
          // });
          // rc.circle(xx-hairshift*0.9+random(-5,5),ground+height-headsize*1.35*hatsize+random(15,40),headsize*0.5, {
          //   fill: random([colors.bg,colors.main]),
          //   fillStyle: random(["dots"]),
          //   fillWeight: random(0.5,1.2)/v_pointlength,
          //   hachureAngle: random(190,193),
          //   stroke: "transparent",
          // });
          // rc.circle(xx-hairshift*0.9+30,ground+height-headsize*1.35*hatsize,headsize*0.5, {
          //   fill: random([colors.bg,colors.main]),
          //   fillStyle: random(["dots"]),
          //   fillWeight: random(0.5,1.2)/v_pointlength,
          //   hachureAngle: random(190,193),
          //   stroke: "transparent",
          // });

const legshift= doorwidth*int(random(10,30))/60+random(10,35);
    const pointdoor=[
    	[xx-legshift-random(50,80), ground],
      [xx-legshift, ground+height/(random(1.5,3))-random(50,80)],
    	[xx-random(1,10), ground+height/(random(1.5,3))-random(50,80)],
    	[xx-random(1,10)-random(50,80), ground]
    ]
    //xx, ground+height/2, height
      rc.polygon(pointdoor, {
        fill: random([colors.main,colors.bg]),
        fillStyle: random(["hachure"]),
        fillWeight: random(3,5)/v_pointlength,
        hachureAngle: random(70,103),
        stroke: "transparent",
      });

      const legshift2= doorwidth*int(random(10,30))/60+random(10,35);
          const pointdoor2=[
          	[xx+legshift2+random(50,90), ground-random(1,40)],
            [xx+legshift2, ground+height/(random(1.5,3))-random(1,40)],
          	[xx+random(1,10), ground+height/(random(1.5,3))-random(1,40)],
          	[xx+random(1,10)+ random(50,90), ground-random(1,20)]
          ]
          //xx, ground+height/2, height
            rc.polygon(pointdoor2, {
              fill: random([colors.bg,colors.main]),
              fillStyle: random(["hachure"]),
              fillWeight: random(3,5)/v_pointlength,
              hachureAngle: random(90,113),
              stroke: "transparent",
            });



            const armshiftR= doorwidth*int(random(10,30))/60+random(10,35);
                const pointarmR=[
                	[xx-armshiftR-random(150,180), ground-random(130,160)],
                  [xx-armshiftR, ground+height],
                	[xx-random(1,10), ground+height],
                	[xx-random(1,10)-random(150,180), ground-random(130,160)]
                ]
                //xx, ground+height/2, height
                  rc.polygon(pointarmR, {
                    fill: random([colors.bg,colors.main]),
                    fillStyle: random(["cross-hatch"]),
                    fillWeight: random(3,5)/v_pointlength,
                    hachureAngle: random(70,93),
                    stroke: "transparent",
                  });


                  const armshiftL= doorwidth*int(random(10,30))/60+random(10,35);
                      const pointarmL=[
                        [xx+armshiftL, ground+height-random(50,130)],
                        [xx+armshiftL+50, ground+height],
                        [xx+armshiftL/2, ground+height],
                        [xx+armshiftL/2+random(150,180), ground+height-random(50,130)]
                      ]
                      //xx, ground+height/2, height
                        rc.polygon(pointarmL, {
                          fill: random([colors.main]),
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

function drawDoor(xx,yy,ground,v_pointlength) {
//  const d = size / 5;
  // const x = random(d + 50, width - d - 50);
  //  const y = random(d / 2, ground / 2 - d);
	// let x=300;
	// let y=300;

height=v_pointlength*random(0.05,0.1)*(yy-ground);
let doorwidth=36*v_pointlength
const pointhouse=[
	[xx-doorwidth+random(-0,0), ground+height],
  [xx-doorwidth+random(-0,0), ground],
	[xx+doorwidth+random(-0,0), ground],
	[xx+doorwidth+random(-0,0), ground+height]
]
//xx, ground+height/2, height
  rc.polygon(pointhouse, {
    fill: colors.main,
    fillStyle: random(["cross-hatch"]),
    fillWeight: random(0,2)/v_pointlength,
    hachureAngle: random(90,93),
    stroke: "transparent",
  });

  const pointroof=[
  	[xx-doorwidth+random(-3,-2), ground+height],
    [xx, ground+height-random(60,170)],
  	[xx+doorwidth+random(2,3),ground+height],
  ]
  //xx, ground+height/2, height
    rc.polygon(pointroof, {
      fill: colors.roof,
      fillStyle: random(["hachure"]),
      fillWeight: random(3,6)/v_pointlength,
      hachureAngle: random(190,193),
      stroke: "transparent",
    });
const doorshift= doorwidth*int(random(10,30))/60+random(10,35);
    const pointdoor=[
    	[xx-doorshift, ground],
      [xx-doorshift, ground+height/(random(2,3))],
    	[xx, ground+height/(random(2,3))],
    	[xx, ground]
    ]
    //xx, ground+height/2, height
      rc.polygon(pointdoor, {
        fill: colors.bg,
        fillStyle: random(["cross-hatch"]),
        fillWeight: random(3,5)/v_pointlength,
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

function drawDoorKnob(xx,yy,ground,v_pointlength) {
height=v_pointlength*random(0.5,1)*(yy-ground);
//let doorwidth=35*v_pointlength
//xx, ground+height/2, height
  rc.circle(xx+random(-20,20),ground+height/2,random(0.6,1.2)*height/v_pointlength, {
    fill: colors.doorknob,
    fillStyle: "dots",
    fillWeight: random(0.5,2)/v_pointlength,
    stroke: "transparent",
  });
}
