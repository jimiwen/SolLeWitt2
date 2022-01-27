function drawMountain(X,Y){
	 //v_pointlength= random(1,12);
  v_pointlength= 1

	print("ground=  "+ground)
	for (i=0;i<v_pointlength;i++)
	drawGround(X,Y)
	return v_pointlength
}



function drawGround(X,Y) {
  const xPad = 1 +random(0,10);
  const offset = -random(20,60);
let cliffwidth= random(100,600)
let sidestream= random(600,800)

let mountaintop= [

[X,Y+30],
[X+xPad-cliffwidth,offset+Y],
[X+xPad-cliffwidth+random(-10,10),offset+Y-random(60,140)],
[X,Y],
[X+0.7*cliffwidth+random(-10,10),Y-random(10,20)],
[X+0.7*cliffwidth,Y-random(30,80)],
[X+xPad-cliffwidth+random(-10,10),offset+Y+random(-10,10)],

[X+xPad-cliffwidth+random(-110,-10),offset+Y+random(-30,-10)],
//[X-random(20,150),sidestream+random(200,200)],
//[xPad-random(20,50)-cliffwidth*0.9,sidestream+random(600,800)],
//[800-xPad-random(20,50),random(600,1200)],
//[800-xPad,-offset+Y],
// [X+random(20,150),random(600,1200)],
// [X+random(10,40),Y],
];

let leftclif= [
[X+xPad-cliffwidth,offset+Y],
[X,Y],
[X-random(-40,60),sidestream/random(1.3,2)],
[X-random(-10,60),sidestream],
[X-random(20,150)-random(50,100),sidestream-random(150,300)],
[X-random(20,150)-random(150,200),sidestream+random(200,250)],
//[X-random(20,150),sidestream+random(200,200)],
//[xPad-random(20,50)-cliffwidth*0.9,sidestream+random(600,800)],
//[800-xPad-random(20,50),random(600,1200)],
//[800-xPad,-offset+Y],
// [X+random(20,150),random(600,1200)],
// [X+random(10,40),Y],
];

let bottomLclif= [
  [X+xPad-cliffwidth-40,offset+Y+random(12,110)],
    [X+xPad-cliffwidth-40,random(300,500)],
  //[X,Y],
//  [X-random(20,150),sidestream],
//  [X-random(20,150)-random(50,100),sidestream-random(150,300)],
  [X,random(100,400)],
  //[X-random(20,150),sidestream+random(200,200)],

  [xPad-random(20,50)-cliffwidth*0.8,random(100,400)],

];



rc.polygon(mountaintop, {
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});

rc.polygon(bottomLclif, {
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});

rc.polygon(leftclif, {
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0.1,193),
  stroke: "transparent",
});


let bottomLcloud= [
  [X+xPad-cliffwidth-40,offset+Y+random(12,110)],
[1,offset+Y-random(12,30)],
  //[X,Y],
//  [X-random(20,150),sidestream],
//  [X-random(20,150)-random(50,100),sidestream-random(150,300)],
  [X-random(10,20),random(400,600)-random(150,250)],
  [X-random(50,100),random(400,600)-random(150,150)],
  //[X-random(20,150),sidestream+random(200,200)],



];

rc.polygon(bottomLcloud, {
  fill: random([colors.sea,colors.bg]),
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0.1,193),
  stroke: "transparent",
});

let foreground =random(700,900);
let waterfallsize=random(-2,340);

let rightclif= [
[X+0.7*cliffwidth,Y-random(10,20)],
[X+random(8,55),Y],
[X+random(68,85),(Y+foreground)/random(1,4)],
[X+random(-4,25),foreground],

[X+0.7*cliffwidth,random(500,800)],
];

rc.polygon(rightclif, {
  fill: colors.bg,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});
let rockbottom = random(1000,1100);

let rightrock= [
[X+random(-14,15),foreground],
[X+0.9*cliffwidth+random(-4,25),random(500,800)],
[X+0.9*cliffwidth+random(-4,25),rockbottom],
[X+random(164,185),rockbottom+random(-160,10)],
[X+random(164,185),rockbottom+random(-160,10)],
];

rc.polygon(rightrock, {
  fill: colors.sand,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});


let rightcloud1= [
  [X+random(18,35)+0.8*cliffwidth,Y-random(30,40)],
  [X+0.3*cliffwidth,Y],
[X+0.6*cliffwidth+random(-40,-25),random(500,800)],
];

rc.polygon(rightcloud1, {
  fill: colors.sea,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});

rockbottom=rockbottom+random(30,50)
leftbridge=random(50,80)
let bridge= [
  [X-40-leftbridge,rockbottom-50],
[X-40-leftbridge,rockbottom-40],
[X+220+random(10,300),rockbottom-60],
  [X+220,rockbottom-90]
];

if (random(0,1)<0.3){
rc.polygon(bridge, {
  fill: random([colors.bg,colors.body2]),
  fillStyle: random(["cross-hatch"]),
  fillWeight: random(1,3)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});

rc.circle(X+220+random(-50,250),rockbottom-40-random(-10,80),random(180,240), {
  fill: colors.body2,
  fillStyle: random(["hachure"]),
  fillWeight: random(0,1)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});

rc.circle(X+random(-400,-100),Y+random(-200,100),random(180,240), {
  fill: colors.sea,
  fillStyle: random(["hachure"]),
  fillWeight: random(1,2)/v_pointlength,
  hachureAngle: random(0,193),
  stroke: "transparent",
});
}

}
