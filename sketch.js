const colors = {
  main: "#d9d2ce",
  bg: "#120b17",
  doorknob: "#fdb827",
  sea: '#52c2eb',
  sand:'#baaf91',
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
  const canvas = createCanvas(1200, 1200);
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();
  ground= ground*random(0.78,0.95)
}

function draw() {

  // let v_PointY =   random(5,65)+80;
  // 	let v_PointX = 320+random(-100,220);
  //
  // print("X="+" "+v_PointX)
  // print("Y="+" "+v_PointY)
  //print("v_pointlength=   "+ v_pointlength)
  //
  // for (horiz=0;horiz<1200;horiz+=random(150,380)){
  //   for (verti=800;verti>10;verti-=random(130,260)){
  //     drawSand(horiz+random(-100,100),verti+random(-100,100),10);
  //   }
  // }

  // drawDoorKnob(1200-v_PointX,v_PointY+100,random(10,30),2)
  //
  //
  // drawGrounding(v_PointX,v_PointY,ground);
  //
  //
  // drawDoor(v_PointX,v_PointY,ground,v_pointlength);
  // drawDoor(v_PointX,v_PointY,ground,v_pointlength);
  // drawDoor(v_PointX,v_PointY,ground,v_pointlength);
  //
  //
  // drawPeople(v_PointX+200,v_PointY,ground,v_pointlength);
  // drawPeople(v_PointX+200,v_PointY,ground,v_pointlength);
  // drawPeople(v_PointX+400,v_PointY,ground,v_pointlength);
  // drawPeople(v_PointX+400,v_PointY,ground,v_pointlength);
  drawPrison()
  drawPrison()
  drawNeck()
  drawTshirt()
  drawFace()
  drawFace()

  // drawGround();
  //  drawGround();
  // d(oo)raw(al)l a bit
  //save("self")


  //  drawBuildings();
}

function drawFace(){
  rectMode(CENTER)
  let   faceCenter=[550+random(-30,30),600+random(-30,30)];
  let   lefteye=[450+random(-20,20),494+random(-20,20)];
  let   righteye=[650+random(-20,20),500+random(-20,20)];

  let   leftnose=[520+random(-10,10),670];
  let   rightnose=[580,660+random(-10,10)];
  let lip= [550+random(-10,10),770+random(-10,10)]
  //fill(colors.doorknob)
  push()
//  translate(100,-60)
//rotate(PI/18)
  //ellipse(faceCenter[0],faceCenter[1],500,600)
  noStroke()
  rc.ellipse(faceCenter[0],faceCenter[1],500,600,{
    fill: colors.main,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });

  rc.arc(faceCenter[0],faceCenter[1],500,600,PI/4+random(-0.1,0.1),PI/2+random(-0.1,0.1),{
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(13,15),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });


  rc.arc(faceCenter[0]+30,faceCenter[1]-50,500,600,PI/2-PI+random(-0.1,0.1),PI/2+PI/4+random(-0.1,0.1),{
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(13,15),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });


  rc.arc(faceCenter[0]-10,faceCenter[1]+100,500,600,-PI/2+random(-0.1,0.1),-PI+random(-0.1,0.1),{
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(13,15),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });

fill(random([colors.bg]))


  arc(faceCenter[0]-20,faceCenter[1]-20,500,600,-PI/2+random(-0.3,0.1),0+random(-0.3,0.1),{
  });

  rc.ellipse(lefteye[0],lefteye[1],500/6,600/14,{
    fill: colors.main,
    fillStyle: random(["hachure"]),
    fillWeight: random(8,8),
    strokeWeight:'transparent',
  });
  rc.ellipse(righteye[0],righteye[1],500/6,600/13,{
    fill: colors.main,
    fillStyle: random(["hachure"]),
    fillWeight: random(8,8),
    strokeWeight:'transparent',
  });


  rc.ellipse(lefteye[0],lefteye[1],500/16,600/14,{
    fill: colors.roof,
    fillStyle: random(["hachure"]),
    fillWeight: random(1,4),
    stroke:'transparent',
  });
  rc.ellipse(righteye[0],righteye[1],500/16,600/13,{
    fill: colors.roof,
    fillStyle: random(["cross-hatch"]),
    fillWeight: random(1,4),
    stroke:'transparent',
  });

  rc.ellipse(leftnose[0],leftnose[1]-6,500/18,600/18,{
      fill: random([colors.bg,colors.doorknob,colors.roof]),
    fillStyle: random(["hachure"]),
    fillWeight: random(0.1,3),
    hachureAngle: random(0,95),
  });
  rc.ellipse(rightnose[0],rightnose[1],500/14,600/16,{
    fill: random([colors.bg,colors.doorknob,colors.roof]),
    fillStyle: random(["hachure"]),
    fillWeight: random(0.1,3),
    hachureAngle: random(0,95),
  })

rc.ellipse(lip[0]+random(-10,10),lip[1],140,20,{
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2),
  hachureAngle: random(0,5),
})
rc.ellipse(lip[0],lip[1]+10,140+random(-10,10),20,{
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2),
  hachureAngle: random(0,5),
})

fill(colors.bg)
 ellipse(lip[0]+40+random(-10,10),lip[1]-30+random(-10,10),10,10)
 ellipse(lip[0]-70+random(-10,10),lip[1]+50+random(-10,10),15,15)

  pop()
}

function drawNeck(){
  let neckpoints=[

    [380,1200],
    [720,1200],
    [720,800],
    [380,800],
  ];
  rc.polygon(neckpoints, {
    fill: colors.body2,
    fillStyle: random(['zigzag-line']),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });
}
function drawTshirt(){
  let tshirtpoints=[
    [0,1200],
    [0,1000],
    [380,900],
    [600,1100],
    [720,900],
    [1000,1200],
  ];
  rc.polygon(tshirtpoints, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });
}
function drawPrison(){
  beamvertice=[800+random(-0,0),700+random(-0,0)];
  roofpoints=[
    [0,0],
    [1200,0],
    [1200,beamvertice[1]-300],
    beamvertice,
    [0,beamvertice[1]-300]
  ];

  rc.polygon(roofpoints, {
    fill: colors.sand,
    fillStyle: random(["cross-hatch"]),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "transparent",
  });


  leftbeamfacing=[

    beamvertice,
    [beamvertice[0],beamvertice[1]+200],
    [0,beamvertice[1]],
    [0,beamvertice[1]-300],
  ];

  rc.polygon(leftbeamfacing, {
    fill: colors.sand,
    fillStyle: random(["hachure"]),
    fillWeight: random(0.4,1.2),
    hachureAngle: random(150,193),
    stroke: "transparent",
  });

  wallsurface=[
    beamvertice,
    [beamvertice[0],beamvertice[1]+200],
    [beamvertice[0]-50,beamvertice[1]+200+50],
    [beamvertice[0]-50,1200],
    [beamvertice[0],1200],
    [beamvertice[0]+200,beamvertice[1]+300],
    [beamvertice[0]+200+100,1200],
    [1200,1200],
    [1200,beamvertice[1]-300]
  ];

  walllower=[
    [beamvertice[0],1200],
    [beamvertice[0]+50,1200],

    [beamvertice[0]+230,beamvertice[1]+340],
    [beamvertice[0]+200,beamvertice[1]+300],

  ];

  walldoor=[
    [beamvertice[0]-150,1200],
    [beamvertice[0]-650,1200],
    [beamvertice[0]-650,1200-300],
    [beamvertice[0]-150,1180],
  ];

  wallside=[
    [beamvertice[0]-650,1200],
    [beamvertice[0]-650,1200-300],
    [beamvertice[0]-700,1200-250],
    [beamvertice[0]-700,1200],
  ];

  rc.polygon(wallsurface, {
    fill: colors.bg,
    fillStyle: random(["hachure"]),
    fillWeight: random(1,2),
    hachureAngle: random(0,5),
    stroke: "transparent",
  });

  rc.polygon(walllower, {
    fill: colors.bg,
    fillStyle: random(["hachure"]),
    fillWeight: random(0.5,1.2),
    hachureAngle: random(90,95),
    stroke: "transparent",
  });

  rc.polygon(walldoor, {
    fill: colors.bg,
    fillStyle: random(["hachure"]),
    fillWeight: random(1,2),
    hachureAngle: random(0,5),
    stroke: "transparent",
  });

  rc.polygon(wallside, {
    fill: colors.bg,
    fillStyle: random(["hachure"]),
    fillWeight: random(0.3,0.6),
    hachureAngle: random(120,125),
    stroke: "transparent",
  });

  beambottom=[
    [beamvertice[0],beamvertice[1]+200],
    [beamvertice[0]-50,beamvertice[1]+200+50],
    [0,beamvertice[1]+50],
    [0,beamvertice[1]],
  ];


  rc.polygon(beambottom, {
    fill: colors.sand,
    fillStyle: random(["hachure"]),
    fillWeight: random(0.5,1.2),
    hachureAngle: random(70,73),
    stroke: "transparent",
  });


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

function drawGrounding(v_pointX,v_pointY,ground){
  v_pointlength= random(2,6);
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

  rc.polygon(pointseas, {
    fill: colors.sea,
    fillStyle: random(["hachure"]),
    fillWeight: random(0,1.2)/v_pointlength,
    hachureAngle: random(90,93),
    stroke: "transparent",
  });

}

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
