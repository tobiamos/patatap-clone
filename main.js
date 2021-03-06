 var keyData = {
 	a:{
 		color: 'red',
 		sound : new Howl({
 			src:['sounds/bubbles.mp3']
 		})
 	},
 	b:{
 		color: 'blue',
 		sound : new Howl({
 			src:['sounds/clay.mp3']
 		})
 	},
 	c:{
 		color: 'yellow',
 		sound : new Howl({
 			src:['sounds/confetti.mp3']
 		})
 	},
 	d:{
 		color: '#f1cb34',
 		sound : new Howl({
 			src:['sounds/corona.mp3']
 		})
 	},
 	e:{
 		color: '#fccb13',
 		sound : new Howl({
 			src:['sounds/dotted-spiral.mp3']
 		})
 	},
 	f:{
 		color: '#c3cb34',
 		sound : new Howl({
 			src:['sounds/flash-1.mp3']
 		})
 	},
 	g:{
 		color: '#bccb14',
 		sound : new Howl({
 			src:['sounds/flash-2.mp3']
 		})
 	},
 	h:{
 		color: '#c14b34',
 		sound : new Howl({
 			src:['sounds/flash-3.mp3']
 		})
 	},
 	i:{
 		color: 'pink',
 		sound : new Howl({
 			src:['sounds/glimmer.mp3']
 		})
 	},
 	j:{
 		color: '#333dab',
 		sound : new Howl({
 			src:['sounds/moon.mp3']
 		})
 	},
 	k:{
 		color: 'cyan',
 		sound : new Howl({
 			src:['sounds/pinwheel.mp3']
 		})
 	},
 	l:{
 		color: 'yellow',
 		sound : new Howl({
 			src:['sounds/piston-1.mp3']
 		})
 	},
 	m:{
 		color: 'green',
 		sound : new Howl({
 			src:['sounds/piston-2.mp3']
 		})
 	},
 	n:{
 		color: 'purple',
 		sound : new Howl({
 			src:['sounds/piston-3.mp3']
 		})
 	},
 	o:{
 		color: '#d14b34',
 		sound : new Howl({
 			src:['sounds/prism-1.mp3']
 		})
 	},
 	p:{
 		color: '#e14b34',
 		sound : new Howl({
 			src:['sounds/prism-2.mp3']
 		})
 	},
 	q:{
 		color: '#f14b34',
 		sound : new Howl({
 			src:['sounds/prism-3.mp3']
 		})
 	},
 	r:{
 		color: '#eabb10',
 		sound : new Howl({
 			src:['sounds/splits.mp3']
 		})
 	},
 	s:{
 		color: '#db34cc',
 		sound : new Howl({
 			src:['sounds/squiggle.mp3']
 		})
 	},
 	t:{
 		color: '#eabdf',
 		sound : new Howl({
 			src:['sounds/strike.mp3']
 		})
 	},
 	u:{
 		color: '#abf4fc',
 		sound : new Howl({
 			src:['sounds/suspension.mp3']
 		})
 	},
 	v:{
 		color: 'yellow',
 		sound : new Howl({
 			src:['sounds/timer.mp3']
 		})
 	},
 	w:{
 		color: 'orange',
 		sound : new Howl({
 			src:['sounds/ufo.mp3']
 		})
 	},
 	x:{
 		color: '#fcc',
 		sound : new Howl({
 			src:['sounds/veil.mp3']
 		})
 	},
 	y:{
 		color: '#dab',
 		sound : new Howl({
 			src:['sounds/wipe.mp3']
 		})
 	},
 	z:{
 		color: '#cab',
 		sound : new Howl({
 			src:['sounds/zig-zag.mp3']
 		})
 	},
 }

 var circles = [];
 function onKeyDown(event){
 	if(keyData[event.key]){
 	var maxPoint = new Point(view.size.width,view.size.height);
 	var randomPoint = Point.random();
 	var point = maxPoint * randomPoint;
 	var newCircle = new Path.Circle(point,500);
 	newCircle.fillColor = keyData[event.key].color;
 	keyData[event.key].sound.play();
 	circles.push(newCircle);

 	}
 	
 }

// var animatedCircle = new Path.Circle(new Point(300,300),100);
// animatedCircle.fillColor='red';
function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue+=1;
		circles[i].scale(0.9);
	}
	// animatedCircle.fillColor.hue+=1;
	// animatedCircle.scale(0.9);
}