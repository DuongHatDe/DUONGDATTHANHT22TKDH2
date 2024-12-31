(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Banner_HTML5 Canvas_atlas_1", frames: [[737,0,198,170],[936,172,58,72],[937,131,40,34],[937,79,49,50],[937,0,54,77],[737,339,168,76],[737,172,197,165],[0,388,132,32],[0,0,735,386]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["Banner_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkUEtIAApZIIoAAIAAJZg");
	mask.setTransform(27.65,30.1);

	// Layer_3
	this.text = new cjs.Text("50%", "27px 'Glowfor'", "#F1F2F2");
	this.text.lineHeight = 47;
	this.text.parent = this;
	this.text.setTransform(13.4,27.4);

	this.text_1 = new cjs.Text("SALE", "33px 'Glowfor'", "#F1F2F2");
	this.text_1.lineHeight = 57;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-5.75);

	var maskedShapeInstanceList = [this.text,this.text_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,55.3,60.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AtNCKIAAkTIabAAIAAETg");
	mask_1.setTransform(84.575,13.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F2F2").s().p("ArQCKQg0AAgkglQglgkAAg0IAAgZQAAg0AlgkQAkglA0AAIWhAAQA0AAAkAlQAlAkAAA0IAAAZQAAA0glAkQgkAlg0AAg");
	this.shape.setTransform(84.575,13.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,169.2,27.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A1NCEIAAkHMAqbAAAIAAEHg");
	mask_2.setTransform(135.825,13.175);

	// Layer_3
	this.text_2 = new cjs.Text("OPEN YOUR WORLD", "bold 25px 'FSP DEMO - ntgrl CF xtr Bld'", "#F1F2F2");
	this.text_2.lineHeight = 35;
	this.text_2.parent = this;
	this.text_2.setTransform(0,-5.55);

	var maskedShapeInstanceList = [this.text_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,271.7,26.4), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhFAfIAAg+ICLAAIAAA+g");
	mask.setTransform(7.025,3.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51709E").s().p("AhFgNIAtgSQALAJAIAEIBLAmIgPALQhigPgagdg");
	this.shape.setTransform(7.025,3.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,14.1,6.3), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhbA3IAAhtIC3AAIAABtg");
	mask.setTransform(9.2,5.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFDBD2").s().p("AgMA3IhPgtQAMgDANgHIAYgOIAqgWIAYgMQAQgGANAAQASAAAVAMQgTAXhOBGIAAABQgCADgCAAIgBAAIgCAAg");
	this.shape.setTransform(9.2,5.545);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,18.4,11.1), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqCoIAAlPIDVAAIAAFPg");
	mask.setTransform(10.675,16.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFDBD2").s().p("ABTClQgOgHgVgcQgYgfgdg5Qgfg7guhqQgMgegMgOQA4AMBRAeQAHAFAFAHQAhAnATBfQATBcgLA0QgEADgGAAQgFAAgFgDg");
	this.shape.setTransform(10.6901,16.794);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,21.4,33.6), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmYCnIAAlNIMxAAIAAFNg");
	mask.setTransform(40.925,16.725);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EC6D0").s().p("ABMB7Qh3gahsgbQhSgYg/ghQg/gggdgjQgZgdAGgZQACgKAHgJQgFANAIASQAOAeA0AWQAOAGAMgDQANgEgBgQQAAgIgFgLIgIgTQgHgSgFgeIAWACQAAAAAAAAQABABAAAAQABgBAAAAQABAAAAAAQATgLAdgKQgBAYAyArQAcAXAqAFQAVADA5gBQA0gBA6AXQAnAPA/AiIAmAXQAYAOAPAIQAOAHANgEQAJgDAPgLQBXA6AZATQANAbgeAbIgTAAQhTAAjTgsg");
	this.shape.setTransform(40.9492,16.7371);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,81.9,33.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhJB2IAAjsICTAAIAADsg");
	mask.setTransform(7.4,11.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFDBD2").s().p("Ag2BVQgPg8gDgaQgEgwARgmQAIgRgBgOQANABASAUQAsA2AzChg");
	this.shape.setTransform(7.4279,11.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.1,0,14.700000000000001,23.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AntGpIAAtRIPbAAIAANRg");
	mask.setTransform(49.4,42.5);

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,98.8,85), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIEJQg2g2gchFQgchEAAhJIAAgBQAAhJAchEQAchFA2g2QA1g2BHgcQBDgcBJAAQBJAABEAcQBGAcA2A2QBuBuAACaQAACbhuBuQhuBuibAAQiaAAhuhug");
	mask.setTransform(76.775,76.775);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],24.7,24.7,-28.3,-28.3).s().p("AsRAAIMRsRIMSMRIsSMSg");
	this.shape.setTransform(78.6,78.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(39.3,39.3,75,75), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhfBfQgngnAAg4QAAg3AngnQAogpA3AAQA4AAAnApQAoAnAAA3QAAA4goAnQgnApg4AAQg3AAgogpg");
	mask.setTransform(29.025,28.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],9,9,-9.6,-9.6).s().p("AkhAAIEhkhIEiEhIkiEig");
	this.shape.setTransform(29.025,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(15.5,14.8,27.1,27.099999999999998), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkIEJQhuhuAAibQAAiaBuhuQBuhuCaAAQCbAABuBuQBuBuAACaQAACbhuBuQhuBuibAAQiaAAhuhug");
	mask_1.setTransform(37.475,37.475);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],0,0,0,0,0,37.5).s().p("Al2F3IAArtILtAAIAALtg");
	this.shape_1.setTransform(37.475,37.475);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0,0,75,75), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmlGVIAAspINLAAIAAMpg");
	mask_1.setTransform(42.2,40.5);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.8).p("AF3AAQAACbhuBuQhuBuibAAQiaAAhuhuQhuhuAAibQAAiaBuhuQBuhuCaAAQCbAABuBuQBuBuAACag");
	this.shape_1.setTransform(46.525,37.875);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(8.1,0,76.30000000000001,76.4), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AheBfQgognAAg4QAAg3AognQAngoA3AAQA4AAAnAoQAoAnAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	mask_3.setTransform(13.5,13.5);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],-13.1,0,13.2,0).s().p("AiGCHIAAkNIENAAIAAENg");
	this.shape_1.setTransform(13.5,13.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,27,27), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A32E2QgsiqARiMQAYjECPhxQCyiMFjAAMAlsAAAIAAN2MgvdAANQgag4gWhUg");
	mask_2.setTransform(188.74,45);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],-139.5,0,172.3,0).s().p("A66HCIAAuDMA11AAAIAAODg");
	this.shape_2.setTransform(172.325,45);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(32.9,0,311.8,90), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1jLDIAA2FMArHAAAIAAWFg");
	mask.setTransform(138.025,70.7);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.3755,0.3664);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,276,141.4), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg43AHCIAAuDMBxvAAAIAAODg");
	mask_4.setTransform(364,45);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D19CC6","#F15F73","#F15F73"],[0,1,1],-364,0.1,364,0.1).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_2.setTransform(364,45);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,728,90), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(49.4,42.5,1,1,0,0,0,49.4,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,99,85), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(7.4,11.8,1,1,0,0,0,7.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,14.8,23.7), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(41,16.7,1,1,0,0,0,41,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,81.9,33.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(10.7,16.8,1,1,0,0,0,10.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,21.4,33.6), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(9.2,5.5,1,1,0,0,0,9.2,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,18.4,11.1), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(7,3.1,1,1,0,0,0,7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,14.1,6.3), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AoaGpIAAtRIQ1AAIAANRg");
	mask_1.setTransform(53.85,42.5);

	// Layer_3
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(52.3,11.35,0.5,0.5);

	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(34,34.45,1,1,0,0,0,7,3.1);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(21.8,21.25,0.5,0.5);

	this.instance_4 = new lib.Group_1();
	this.instance_4.setTransform(94.15,44.55,1,1,0,0,0,9.2,5.5);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(80.3,35.4,0.5,0.5);

	this.instance_6 = new lib.Group_2();
	this.instance_6.setTransform(61.25,60.3,1,1,0,0,0,10.7,16.8);
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(45.9,42.1,0.5,0.5);

	this.instance_8 = new lib.Group_3();
	this.instance_8.setTransform(52.35,38.25,1,1,0,0,0,41,16.7);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.CachedBmp_3();
	this.instance_9.setTransform(10.35,18,0.5,0.5);

	this.instance_10 = new lib.Group_4();
	this.instance_10.setTransform(48.7,14.75,1,1,0,0,0,7.4,11.8);
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.CachedBmp_2();
	this.instance_11.setTransform(8.4,0,0.5,0.5);

	this.instance_12 = new lib.Group_5();
	this.instance_12.setTransform(57.4,42.5,1,1,0,0,0,49.4,42.5);
	this.instance_12.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(8,0,99,85), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AoZGpIAAtRIQzAAIAANRg");
	mask_5.setTransform(93.15,81.6);

	// Layer_3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.setTransform(93.2,81.6,1,1,0,0,0,53.9,42.5);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(133.45,101.4,1,1,0,0,0,29,29);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(78.6,78.6,1,1,0,0,0,78.6,78.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(39.3,39.1,107.7,85), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AzuHCQgcg4gahVQg1ioAHiNQAJjEB/hwQCeiNFOAAMAgyAAAIAAODg");
	mask_6.setTransform(139.6392,70.7);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.setTransform(138,70.7,1,1,0,0,0,138,70.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(3.3,25.7,272.8,90), null);


// stage content:
(lib.Banner_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sale50
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(402.55,42.05,0.2717,0.2717,0,0,0,27.6,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30.1,scaleX:0.2966,scaleY:0.2966,y:41.9},0).wait(1).to({scaleX:0.3215,scaleY:0.3215,x:402.5,y:42.05},0).wait(1).to({scaleX:0.3464,scaleY:0.3464,y:42.2},0).wait(1).to({scaleX:0.3713,scaleY:0.3713,x:402.55,y:42.35},0).wait(1).to({scaleX:0.3962,scaleY:0.3962,y:42.5},0).wait(1).to({scaleX:0.4211,scaleY:0.4211,x:402.5,y:42.65},0).wait(1).to({scaleX:0.4459,scaleY:0.4459,x:402.55,y:42.8},0).wait(1).to({scaleX:0.4708,scaleY:0.4708,y:42.95},0).wait(1).to({scaleX:0.4957,scaleY:0.4957,y:43.15},0).wait(1).to({scaleX:0.5206,scaleY:0.5206,y:43.3},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,y:43.45},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,y:43.6},0).wait(1).to({scaleX:0.5953,scaleY:0.5953,x:402.6,y:43.8},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:402.55,y:43.95},0).wait(1).to({scaleX:0.645,scaleY:0.645,y:44.1},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,x:402.6,y:44.25},0).wait(1).to({scaleX:0.6948,scaleY:0.6948,y:44.45},0).wait(1).to({scaleX:0.7197,scaleY:0.7197,x:402.55,y:44.6},0).wait(1).to({scaleX:0.7446,scaleY:0.7446,x:402.6,y:44.75},0).wait(1).to({scaleX:0.7695,scaleY:0.7695,y:44.9},0).wait(1).to({scaleX:0.7944,scaleY:0.7944,x:402.55,y:45.1},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,x:402.6,y:45.25},0).wait(1).to({scaleX:0.8441,scaleY:0.8441,y:45.4},0).wait(1).to({scaleX:0.869,scaleY:0.869,y:45.55},0).wait(1).to({scaleX:0.8939,scaleY:0.8939,y:45.75},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,y:45.9},0).wait(1).to({scaleX:0.9437,scaleY:0.9437,y:46.05},0).wait(1).to({scaleX:0.9686,scaleY:0.9686,x:402.65,y:46.2},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:402.6,y:46.4},0).wait(61));

	// Layer_9
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(164.95,90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:164.9155,y:89.2017},0).wait(1).to({x:164.881,y:87.7034},0).wait(1).to({x:164.8466,y:86.2052},0).wait(1).to({x:164.8121,y:84.7069},0).wait(1).to({x:164.7776,y:83.2086},0).wait(1).to({x:164.7431,y:81.7103},0).wait(1).to({x:164.7086,y:80.2121},0).wait(1).to({x:164.6741,y:78.7138},0).wait(1).to({x:164.6397,y:77.2155},0).wait(1).to({x:164.6052,y:75.7172},0).wait(1).to({x:164.5707,y:74.219},0).wait(1).to({x:164.5362,y:72.7207},0).wait(1).to({x:164.5017,y:71.2224},0).wait(1).to({x:164.4672,y:69.7241},0).wait(1).to({x:164.4328,y:68.2259},0).wait(1).to({x:164.3983,y:66.7276},0).wait(1).to({x:164.3638,y:65.2293},0).wait(1).to({x:164.3293,y:63.731},0).wait(1).to({x:164.2948,y:62.2328},0).wait(1).to({x:164.2603,y:60.7345},0).wait(1).to({x:164.2259,y:59.2362},0).wait(1).to({x:164.1914,y:57.7379},0).wait(1).to({x:164.1569,y:56.2397},0).wait(1).to({x:164.1224,y:54.7414},0).wait(1).to({x:164.0879,y:53.2431},0).wait(1).to({x:164.0534,y:51.7448},0).wait(1).to({x:164.019,y:50.2466},0).wait(1).to({x:163.9845,y:48.7483},0).wait(1).to({x:163.95,y:47.25},0).wait(1).to({y:47.2167},0).wait(1).to({y:47.1833},0).wait(1).to({y:47.15},0).wait(1).to({y:47.1167},0).wait(1).to({y:47.0833},0).wait(1).to({y:47.05},0).wait(1).to({y:47.0167},0).wait(1).to({y:46.9833},0).wait(1).to({y:46.95},0).wait(1).to({y:46.9167},0).wait(1).to({y:46.8833},0).wait(1).to({y:46.85},0).wait(1).to({y:46.8167},0).wait(1).to({y:46.7833},0).wait(1).to({y:46.75},0).wait(1).to({y:46.7167},0).wait(1).to({y:46.6833},0).wait(1).to({y:46.65},0).wait(1).to({y:46.6167},0).wait(1).to({y:46.5833},0).wait(1).to({y:46.55},0).wait(1).to({y:46.5167},0).wait(1).to({y:46.4833},0).wait(1).to({y:46.45},0).wait(1).to({y:46.4167},0).wait(1).to({y:46.3833},0).wait(1).to({y:46.35},0).wait(1).to({y:46.3167},0).wait(1).to({y:46.2833},0).wait(1).to({y:46.25},0).wait(1).to({y:46.2167},0).wait(1).to({y:46.1833},0).wait(1).to({y:46.15},0).wait(1).to({y:46.1167},0).wait(1).to({y:46.0833},0).wait(1).to({y:46.05},0).wait(1).to({y:46.0167},0).wait(1).to({y:45.9833},0).wait(1).to({y:45.95},0).wait(1).to({y:45.9167},0).wait(1).to({y:45.8833},0).wait(1).to({y:45.85},0).wait(1).to({y:45.8167},0).wait(1).to({y:45.7833},0).wait(1).to({y:45.75},0).wait(1).to({y:45.7167},0).wait(1).to({y:45.6833},0).wait(1).to({y:45.65},0).wait(1).to({y:45.6167},0).wait(1).to({y:45.5833},0).wait(1).to({y:45.55},0).wait(1).to({y:45.5167},0).wait(1).to({y:45.4833},0).wait(1).to({y:45.45},0).wait(1).to({y:45.4167},0).wait(1).to({y:45.3833},0).wait(1).to({y:45.35},0).wait(1).to({y:45.3167},0).wait(1).to({y:45.2833},0).wait(1).to({y:45.25},0).wait(1));

	// font2
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(229.15,59.25,1,1,0,0,0,84.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// font
	this.instance_3 = new lib.ClipGroup_2();
	this.instance_3.setTransform(229.2,16.7,1,1,0,0,0,135.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:135.7,regY:13.2,x:229.1,y:20.4},0).wait(89));

	// bong23
	this.instance_4 = new lib.ClipGroup_11();
	this.instance_4.setTransform(52.55,44.2,1,1,0,0,0,81.2,78.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:93.2,regY:81.6,x:64.55,y:47.2},0).wait(89));

	// bong_1
	this.instance_5 = new lib.ClipGroup_9();
	this.instance_5.setTransform(370,71.8,1,1,0,0,0,13.5,13.5);

	this.instance_6 = new lib.ClipGroup_2_2();
	this.instance_6.setTransform(402.6,42.25,0.5714,0.5714,0,0,0,37.5,37.5);

	this.instance_7 = new lib.ClipGroup_1_2();
	this.instance_7.setTransform(398.7,44.8,1,1,0,0,0,42.2,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regY:37.5,scaleX:0.5714,scaleY:0.5714,y:42.25,regX:37.5,x:402.6}},{t:this.instance_5}]}).to({state:[{t:this.instance_6,p:{regY:37.6,scaleX:0.8491,scaleY:0.8491,y:42.35,regX:37.5,x:402.6}},{t:this.instance_5}]},14).to({state:[{t:this.instance_6,p:{regY:37.6,scaleX:1.0738,scaleY:1.0738,y:47.6,regX:37.6,x:402.7}},{t:this.instance_5}]},15).to({state:[{t:this.instance_6,p:{regY:37.5,scaleX:1,scaleY:1,y:42.2,regX:37.5,x:403.05}},{t:this.instance_7},{t:this.instance_5}]},60).wait(1));

	// anh
	this.instance_8 = new lib.ClipGroup_12();
	this.instance_8.setTransform(862.7,45,1,1,0,0,0,138,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:139.6,x:854.85},0).wait(1).to({x:845.45},0).wait(1).to({x:836.05},0).wait(1).to({x:826.65},0).wait(1).to({x:817.25},0).wait(1).to({x:807.85},0).wait(1).to({x:798.45},0).wait(1).to({x:789.05},0).wait(1).to({x:779.65},0).wait(1).to({x:770.25},0).wait(1).to({x:760.85},0).wait(1).to({x:751.45},0).wait(1).to({x:742.05},0).wait(1).to({x:732.65},0).wait(1).to({x:723.2},0).wait(1).to({x:713.8},0).wait(1).to({x:704.4},0).wait(1).to({x:695},0).wait(1).to({x:685.6},0).wait(1).to({x:676.2},0).wait(1).to({x:666.8},0).wait(1).to({x:657.4},0).wait(1).to({x:648},0).wait(1).to({x:638.6},0).wait(1).to({x:629.2},0).wait(1).to({x:619.8},0).wait(1).to({x:610.4},0).wait(1).to({x:601},0).wait(1).to({x:591.6},0).wait(61));

	// Layer_3
	this.instance_9 = new lib.ClipGroup_1_3();
	this.instance_9.setTransform(742.8,45,1,1,0,0,0,172.3,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:188.7,x:752.7},0).wait(1).to({x:746.25},0).wait(1).to({x:739.8},0).wait(1).to({x:733.35},0).wait(1).to({x:726.9},0).wait(1).to({x:720.45},0).wait(1).to({x:714},0).wait(1).to({x:707.55},0).wait(1).to({x:701.1},0).wait(1).to({x:694.65},0).wait(1).to({x:688.2},0).wait(1).to({x:681.75},0).wait(1).to({x:675.3},0).wait(1).to({x:668.85},0).wait(1).to({x:662.35},0).wait(1).to({x:655.9},0).wait(1).to({x:649.45},0).wait(1).to({x:643},0).wait(1).to({x:636.55},0).wait(1).to({x:630.1},0).wait(1).to({x:623.65},0).wait(1).to({x:617.2},0).wait(1).to({x:610.75},0).wait(1).to({x:604.3},0).wait(1).to({x:597.85},0).wait(1).to({x:591.4},0).wait(1).to({x:584.95},0).wait(1).to({x:578.5},0).wait(1).to({x:572.05},0).wait(61));

	// Bg
	this.instance_10 = new lib.ClipGroup_10();
	this.instance_10.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg6bgIlMB03AAAIAARLMh03AAAg");
	this.shape.setTransform(364,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg6bAImIAAxLMB03AAAIAARLg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(335.4,10.6,665.4,112.2);
// library properties:
lib.properties = {
	id: '2AA1A46739D46C4AB38569BD223651A9',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Banner_HTML5 Canvas_atlas_1.png", id:"Banner_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2AA1A46739D46C4AB38569BD223651A9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;