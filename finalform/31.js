(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"31_atlas_", frames: [[1956,0,65,76],[1776,251,38,142],[0,2017,37,22],[307,1977,37,22],[1469,447,72,166],[1469,615,32,140],[1884,1770,80,167],[307,1913,303,62],[1469,355,305,90],[1469,0,353,249],[0,828,978,979],[1543,447,158,53],[614,1809,185,54],[0,0,1467,826],[307,1809,305,102],[0,1913,305,102],[980,828,1000,940],[1824,0,130,106],[980,1770,600,271],[1582,1770,300,250],[1824,108,97,92],[1469,251,305,102],[0,1809,305,102]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_0 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_0 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_2 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Path_2_0 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Path_2_2 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Path_3_0 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Path_4_0 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bnext = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bstart = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._final = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.HIT = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.leaf = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.messiiiii = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.names2fdg = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.replayblack = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.replaybtn = function() {
	this.spriteSheet = ss["31_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADLFgIoroqQgegfAAgsQAAgsAegfQAfgeAsAAQAsAAAeAeIIrIrQAfAfAAArQAAAsgfAfQgeAfgsAAQgsAAgfgfg");
	this.shape.setTransform(0,1,0.541,0.541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlgFgQgegfAAgsQAAgrAegfIIrorQAfgeAsAAQAsAAAeAeQAfAfAAAsQAAAsgfAfIorIqQgeAfgsAAQgsAAgfgfg");
	this.shape_1.setTransform(0,1,0.541,0.541);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#501012","rgba(80,16,18,0)"],[0,0.894],-19.3,-18.4,28.5,29.4).s().p("AogCoILArAIGBGCQgTEcjPDGQjQDGkeAHg");
	this.shape_2.setTransform(10.4,11,0.541,0.541);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B70E16").s().p("AkfKqQiFg4hmhmQhnhng4iFQg6iKAAiWQAAiWA6iJQA4iFBnhmQBmhmCFg5QCKg6CVAAQCXAACJA6QCEA5BnBmQBmBmA5CFQA6CJAACWQAACWg6CKQg5CFhmBnQhmBmiFA4QiJA6iXAAQiVAAiKg6g");
	this.shape_3.setTransform(0,0,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnmBOQgegeAAgsQAAgrAegfQAfgfAsAAQAsAAAfAfIC1C0IHsnnQAfgeAsAAQAsAAAfAfQAfAfgBAsQAAAsgfAfIqCJ6g");
	this.shape.setTransform(-0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#026838","rgba(2,104,56,0)"],[0,0.894],-20.3,-23.4,29.6,26.5).s().p("AnADrIBrkeIIYnyIDxDwQANBFAABEQAAEHinDMQikDJj7A2g");
	this.shape_1.setTransform(29,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8BC540").s().p("AkfKqQiFg4hmhmQhmhng5iFQg6iKAAiWQAAiWA6iJQA5iFBmhmQBmhmCFg5QCJg6CWAAQCWAACKA6QCFA5BnBmQBmBmA4CFQA6CJAACWQAACWg6CKQg4CFhmBnQhnBmiFA4QiKA6iWAAQiWAAiJg6g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-74,148,148);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934237").s().p("AAyBkQgHAAgBgIQgEhdgsgxQgOgQgQgJIgQgHQgDAAgCgEQgCgDABgDQABgEADgCQADgCADABIASAHQASALAPARQAyA2AGBlQABAIgJABg");
	this.shape.setTransform(5.6,29.5,0.227,0.188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08177").s().p("AALCwQhigGhCh6QgVgmgOgsIgLglQCegLB2gwQA7gYAcgWIACAMIAXBTQAeBoguBNQgvBNhiAAIgRgBg");
	this.shape_1.setTransform(5,29.6,0.227,0.188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#351906").s().p("AhQB9QgVgLAJgtQAJgsAigyQAig0AlgdQAmgdAVALQAVALgJAtQgJAsgiAzQghAzgmAdQgcAVgTAAQgHAAgFgDg");
	this.shape_2.setTransform(6.5,21.3,0.227,0.188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#351906").s().p("AASBsQgkgfggg1Qggg0gHgsQgIgtAVgKQAVgKAmAeQAkAfAgA1QAgA0AHAsQAIAtgWAKQgFACgGAAQgTAAgcgWg");
	this.shape_3.setTransform(-8,21.1,0.227,0.188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D3A0C").s().p("AkpDyQifAeiNBCIhtA7IBkj9QBpkVCiiTQCeiQC9gCIAAAAIAPAAQC+ALCZCWQCbCaBgEYIBaECQnxkcn7Bjg");
	this.shape_4.setTransform(-0.7,9.4,0.227,0.188);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824615").s().p("AgBFbIgOAAIAAgBQkjgKjJiVQjKiWADjKIBtg7QCNhBCfgfQH7hjHxEcQgDDLjQCMQjMCLkeAAIgHAAg");
	this.shape_5.setTransform(-0.7,20,0.227,0.188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D3A0C").s().p("AgCLPIgHgBQgEABgDgBQkdgKjGigQjFigAEjbIBikQQBokqCeifQCcibC6gCIAAgBIANABQC7AKCVCiQCZClBdEvIBYETQgEDbjLCYQjKCWkaAAIgEAAg");
	this.shape_6.setTransform(-0.7,15.3,0.227,0.188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJALQgFgFAAgGQABgGAEgEQAEgFAFAAQAGAAAFAFQAEAFAAAFQgBAHgEAEQgEAFgGAAQgFgBgEgEg");
	this.shape_7.setTransform(5.3,0.5,0.227,0.188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAjQgNAAgKgKQgKgLABgOQAAgPAKgKQAKgKAMAAQAOAAAKALQAKALgBANQgBAPgJAKQgKALgNAAIAAgBg");
	this.shape_8.setTransform(5.8,-0.9,0.227,0.188);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#381A05").s().p("AgBByQgsAAgfgiQgegjABgvQABgvAgggQAfgiArABQAsABAfAjQAeAigBAvQAAAvggAhQgfAggrAAIgBgBg");
	this.shape_9.setTransform(6.7,-0.2,0.227,0.188);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKALQgDgFAAgGQAAgGAEgEQAEgFAGAAQAFAAAFAFQADAFAAAFQAAAHgEAEQgEAFgGAAQgFgBgFgEg");
	this.shape_10.setTransform(-8.6,0.3,0.227,0.188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAkQgOgBgJgKQgJgLAAgOQAAgOAKgLQAJgKAOAAQANABAKAKQAKALgBAOQgBAPgJAKQgKAKgNAAIAAAAg");
	this.shape_11.setTransform(-8.2,-1.1,0.227,0.188);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#381A05").s().p("AgBByQgsAAgfgjQgegiABgvQABgvAfghQAgghArACQAsABAeAhQAfAigBAvQgBAwggAgQgeAhgrAAIgBgBg");
	this.shape_12.setTransform(-7.2,-0.4,0.227,0.188);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#542607").s().p("AgiC0QgbgdgahVIgNgvQgVhHgCgpQgEhKAtgVQAugWBFApQBEAnARAzQARAzgcBHQgRAsgqBDQgbAqgYAAQgQAAgPgQg");
	this.shape_13.setTransform(17.7,11.8,0.227,0.188);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#542607").s().p("AgTCnQg/gBgqhWQgphVAhg7QAkg+AugaQA2geA3AhQAkAUAZAoQAaApABArQABAvggAkQhRBZg0AAIgCAAg");
	this.shape_14.setTransform(-6.9,-8.4,0.227,0.188);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#542607").s().p("AhgiPQALgBAyAEQBWAIAeA1QAWAogJBCQgGAngXBOQhsh/g1igg");
	this.shape_15.setTransform(-21.3,20.4,0.227,0.188);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#542607").s().p("Ag/gQQgBhAAngaQAdgUA8AAQghCJhFB0QgXhOgChBg");
	this.shape_16.setTransform(21.4,18.9,0.227,0.188);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#542607").s().p("AgjAiQgdgMgigjQBigcBhACIACAAQgjAvgkAWQgRAKgRAAQgOAAgPgGg");
	this.shape_17.setTransform(-2.2,-14.1,0.227,0.188);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#542607").s().p("AAEBgQgsgFgUgbQglgwAVg9QAVhCA9ATQAbAJAZAoQAaApAAAlQAAAbgNAPQgRAUghAAIgRgBg");
	this.shape_18.setTransform(-16,-2.7,0.227,0.188);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#542607").s().p("AAEBgQgsgGgUgaQglgwAVg+QAVhBA9ATQAbAJAaAoQAZApAAAlQAAAagMAPQgRAVgiAAIgRgBg");
	this.shape_19.setTransform(8.7,-6.6,0.227,0.188);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#542607").s().p("AiQA6QgIg1AXh/QCOAmCGBiQhnBJhXAcQgWAIgSAAQg0AAgJhBg");
	this.shape_20.setTransform(6.4,-12.2,0.227,0.188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#542607").s().p("AijCsQgRgwAKhBQAHgvAYg/QAmhkA+hEQBVheA8BZQA0BNAPBiQAGAjgUAvQgIAUgeA3Qg6BshQAnQgbANgXAAQg/AAghhgg");
	this.shape_21.setTransform(-18.7,7.6,0.227,0.188);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#542607").s().p("AAsD/QhMgJgygSQhIgbgfg0Qg9hmCBi8QAggvA+hJQCZDwBMEZQgZACgaAAQg1AAg6gHg");
	this.shape_22.setTransform(17.5,-0.4,0.227,0.188);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB53E").s().p("AgQSjQnHgKkgj9QkxkMAJm8QAEjjBXj6QBYj4CTjPQCbjZC7h5QDMiEDRAEQDSAFDHCMQC2CBCTDgQCMDVBOD7QBPD9gFDkQgIG8k6D/QiRB2jCA7QizA2jKAAIgeAAg");
	this.shape_23.setTransform(-0.6,7.4,0.227,0.188);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCE45").s().p("AkpAhQhAgtg1g5IgpgwQClhYGBBWQDBArCgA9IAIBEQhKAth+AkIhvAaQgcACgbAAQjOAAi1iBg");
	this.shape_24.setTransform(-19.4,-8.4,0.227,0.188);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFAC33").s().p("AmHBMQiBiMg6iZQD5iqHUCXQDsBLC5BtIATDBQhwBWiGAsQgqANgnAIIgfAFQg+ALg8AAQkWAAjUjog");
	this.shape_25.setTransform(-21.4,-10.1,0.227,0.188);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCE45").s().p("AiXCXQgvgLg/gVQh8gphIgwIAJhDIBpgfQCDgkB5gWQGFhGCgBfQg6BLhpBEQitByi9AAQgqAAgqgFg");
	this.shape_26.setTransform(19.2,-7.6,0.227,0.188);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFAC33").s().p("AjpEdQgsgHhCgZQiEgxhthbIAajAIB8g7QCahCCVgpQHaiDDyC0Qg/CXiHCGQjSDUkEAAQhJAAhNgQg");
	this.shape_27.setTransform(21.3,-9.2,0.227,0.188);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#542607").s().p("AitDEQgmgmgDg3QgDg4AigqQAOgQAVgMQgYglADgtQACguAcgiQAigpAygCQAygDAlAkQAIAHAHALQAdgbAmAAQAnAAAcAcQAgAfACAtQACAtgcAiQgIAKgKAIQAgAjACAxQABAzgfAlQghAogxADQgxADglgkIAAAAIgEAGQgiAqgzADIgIAAQgvAAgkgig");
	this.shape_28.setTransform(-9.2,-22.4,0.227,0.188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFB53E").s().p("AhbkQIC3AEIgJHZIijBEg");
	this.shape_29.setTransform(-8.9,-15,0.227,0.188);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#542607").s().p("ABLDmQg0gGgggrIgDgGIgBABQgmAhgxgFQgxgFgfgpQgdgnADgyQADgyAhghQgIgGgKgMQgagjAEgtQAEguAggdQAegaAnABQAmACAbAbQAGgHAKgKQAmgiAyAFQAzAFAgAqQAbAkAAAtQABAtgZAkQAUANAOARQAgArgFA4QgFA3goAkQgiAegsAAIgNAAg");
	this.shape_30.setTransform(9.6,-22,0.227,0.188);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFB53E").s().p("AhfDIIAInZIC3ADIgfIhg");
	this.shape_31.setTransform(9,-14.6,0.227,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-26.7,69.1,59.7);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(-0.2,0.4,1.109,1.109);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(0,0.3,1.109,1.109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-14.3,-14.2,1.109,1.109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-13.7,18.2,1.109,1.109);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(13.7,18.2,1.109,1.109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(14.3,-14.1,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.5,41.4,41.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(1.4,0.3,1.109,1.109,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(1.5,0.2,1.109,1.109,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-16,-10.1,1.109,1.109,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-7,21,1.109,1.109,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(19.4,13.9,1.109,1.109,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(11.6,-17.5,1.109,1.109,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-23.4,44,46.8);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(-1.7,0.2,1.109,1.109,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(-1.5,0.2,1.109,1.109,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-11.6,-17.5,1.109,1.109,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-19.3,13.9,1.109,1.109,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(7.1,21,1.109,1.109,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(16,-10.1,1.109,1.109,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-23.4,43.9,46.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(-0.2,0.4,1.109,1.109);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(0,0.3,1.109,1.109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-14.3,-14.2,1.109,1.109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-13.7,18.2,1.109,1.109);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(13.7,18.2,1.109,1.109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(14.3,-14.1,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.5,41.4,41.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D3A0C").s().p("AjKCxQhsAWhgAwIhKAsIBEi6QBHjKBuhsQBshqCBgBIAKAAIgBABQCCAHBoBuQBqBxBBDNIA9C9QlSjQlZBIg");
	this.shape.setTransform(-1.6,12.8,0.422,0.355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#824615").s().p("AAAD+IgKAAIAAgBQjGgHiJhuQiJhtACiUIBKgrQBggwBsgXQFZhIFSDQQgCCUiNBnQiLBmjDAAIgEAAg");
	this.shape_1.setTransform(-1.6,27.4,0.422,0.355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D3A0C").s().p("AgpAkQgQgPAAgVQAAgUAQgPQASgPAXAAQAYAAASAPQARAPAAAUQAAAVgRAPQgSAPgYAAQgXAAgSgPg");
	this.shape_2.setTransform(10,-2.8,0.422,0.355);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D3A0C").s().p("AgoAkQgRgPAAgVQAAgUARgPQAQgPAYAAQAZAAARAPQAQAPABAUQgBAVgQAPQgRAPgZAAQgYAAgQgPg");
	this.shape_3.setTransform(-9.3,-2.8,0.422,0.355);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAsQgTgCgOgHQgPgHgCgJQgFgTAPgUQAPgVASgBQASgCAKABQAQABAPAHQARAIABARQACAQgOAWQgKARgfAAIgRgBg");
	this.shape_4.setTransform(9.4,-4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguB4QgtgGgagYQg1guAnhJQAkhGBHgQQBSgTAyAmQAsAigEA9QgFBWhoAdQgcAJgcAAQgPAAgOgDg");
	this.shape_5.setTransform(-9.4,-4.2,0.422,0.355);

	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-17,-35,0.445,0.345);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#542607").s().p("Ag7AxIgJgjQgOg0gCgeQgCg3AfgPQAfgPAvAeQAuAcALAlQAMAmgTA0QgMAggcAxQgSAfgRAAQgeAAgbhfg");
	this.shape_6.setTransform(22.3,12,0.422,0.355);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#542607").s().p("AgMB7QgsgBgcg/Qgcg+AXgrQAYguAggTQAkgWAlAYQAZAQAQAcQASAeABAgQABAigWAaQg4BCgjAAIAAAAg");
	this.shape_7.setTransform(-8.8,-16,0.422,0.355);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#542607").s().p("AhBhpQANAAAcADQA7AGAUAmQAPAegGAwQgEAdgQA5QhIhcglh3g");
	this.shape_8.setTransform(-27,23.9,0.422,0.355);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#542607").s().p("AgqgLQgBgvAagUQAUgOApAAQgWBjgvBWQgQg4gBgwg");
	this.shape_9.setTransform(26.9,21.8,0.422,0.355);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#542607").s().p("AgYAZQgTgJgXgZQBCgVBCACIABAAQgYAigYAQQgLAHgMAAQgJAAgLgEg");
	this.shape_10.setTransform(-2.8,-23.9,0.422,0.355);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#542607").s().p("AADBGQgegEgOgTQgYgjANgtQAPgwApAOQATAGARAeQARAeAAAaQABATgJAMQgLAPgYAAIgLgBg");
	this.shape_11.setTransform(-20.3,-8.1,0.422,0.355);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#542607").s().p("AADBGQgegEgOgTQgYgkAOgtQAOgvApAOQATAGARAeQARAeABAaQAAATgJAMQgMAPgXAAIgLgBg");
	this.shape_12.setTransform(11,-13.4,0.422,0.355);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#542607").s().p("AhiArQgGgnARhdQBhAcBaBIQhGA1g7AVQgPAFgMAAQgjAAgHgvg");
	this.shape_13.setTransform(8,-21.2,0.422,0.355);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#542607").s().p("AhvB/QgUg/AlhlQAZhJAqgyQA6hGApBCQAjA4ALBJQAEAZgNAjQgGAPgUAnQgoBPg2AdQgTAKgQAAQgqAAgXhGg");
	this.shape_14.setTransform(-23.6,6.1,0.422,0.355);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#542607").s().p("AAeC7Qg0gHgigNQgxgUgVgmQgphKBXiKQAWgiAqg2QBnCtA1DQIgkACQgkAAgmgFg");
	this.shape_15.setTransform(22.1,-4.9,0.422,0.355);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB53E").s().p("AgLNlQk1gHjEi5QjQjFAGlFQADimA8i3QA7i2BkiYQBqifB/hYQCLhhCOADQCPAECHBmQB8BfBkCkQBfCcA2C4QA1C5gDCnQgFFFjWC7QjCCqklAAIgYgBg");
	this.shape_16.setTransform(-0.8,5.9,0.422,0.355);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCE45").s().p("AACDsIg3g+QhkiVAAjCQAAg8AKg7IAKguQBsBJBkEgQAyCRAdCCIgiAhQgzgfhDhEg");
	this.shape_17.setTransform(-30.4,-7,0.422,0.355);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFAC33").s().p("AgjFZIg4g/QimjQAykcQAaiPA6hkQC2BfBiFxQAyC6AMClIheBcQhYgmhIhHg");
	this.shape_18.setTransform(-30,-10.4,0.422,0.355);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCE45").s().p("Ai1ETQArh9BDiIQCDkOB0g3QAMBGgLBhQgXDAh0CDQgaAZgkAcQhJA6g3AWg");
	this.shape_19.setTransform(29.3,-8.3,0.422,0.355);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFAC33").s().p("Aj0FGQAgijBFivQCMlgC/hCQAuBsAJCRQASEii8C2QgWAXgpAeQhPA6hcAZg");
	this.shape_20.setTransform(29,-11.7,0.422,0.355);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#542607").s().p("Ah1CPQgagbgCgpQgCgpAXgeQAJgMAPgJQgQgbABghQACghATgZQAXgeAigCQAigCAZAaIAKANQAUgTAaAAQAaAAAUAUQAVAWACAiQABAhgTAZQgGAIgGAEQAWAaAAAkQABAlgVAcQgWAdgiACQghACgZgaIAAAAIgDAEQgWAfgjACIgGAAQggAAgYgZg");
	this.shape_21.setTransform(-24.8,-30.8,0.422,0.355);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB53E").s().p("AiKhxIBlhVICwEXIg/B2g");
	this.shape_22.setTransform(-18.9,-22.8,0.422,0.355);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#542607").s().p("AAzCoQgjgDgWggIgCgEQgaAYghgDQgigEgVgeQgUgcACglQACglAWgYQgGgGgFgHQgTgaADghQADghAWgWQAUgTAbABQAZABATAUIALgMQAagZAiADQAiAEAWAfQASAaAAAiQABAggRAbQAOAJAJAMQAWAggDApQgDAogcAaQgYAXgdAAIgJgBg");
	this.shape_23.setTransform(24,-29.1,0.422,0.355);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFB53E").s().p("AiLBOIC0kTIBkBZIjcEyg");
	this.shape_24.setTransform(19.3,-23.1,0.422,0.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-36.8,78.6,73.6);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE45").s().p("AgPQ1QnIgKkgjmQkyj0AImTQAEjOBXjiQBXjiCTi7QCbjFC8htQDLh3DSAEQDSAFDHCAQC3B1CUDLQCMDBBPDlQBPDlgEDPQgHGTk7DnQkbDQmuAAIgmAAg");
	this.shape.setTransform(0.4,25.1,0.227,0.188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#542607").s().p("AihkfIAmARQBQAkBPA+QBXBDAkBFQATAkgHAkQgGAfgcAiQhaBwi4BAIgjALg");
	this.shape_1.setTransform(-5.1,-20.7,0.227,0.188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#542607").s().p("AgCCdQgugRgbggQgkgrAlhAQATghA3g4QAkgmA6gxIgHFfQgygDgngQg");
	this.shape_2.setTransform(9.7,-16.9,0.227,0.188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#542607").s().p("AhcEeQgogYgqgqQgdgdgrg0Qg1g+gMgiQgTgzAgg9QAqhPBphwQAiglAfgbQDhCrC0EIQghAmgwAvQhDBDg+AlQgpAZgsAAQg3AAg9gng");
	this.shape_3.setTransform(17.9,-1.1,0.227,0.188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#542607").s().p("Ag6CTQgwgNgagxQg0hkCuhpQAkgXAZgFQAngIAUAeQAjA0AAA7QAAAxgiAsQgfAogvAUQgfANgcAAQgQAAgQgEg");
	this.shape_4.setTransform(4.1,-8.7,0.227,0.188);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#542607").s().p("AhGCSQgNgWgahHQgMgjANg3QANg1AdgsQAgguAigLQAmgMAfAqQAfAoALBPQAMBQgSA/QgbBYhKAFIgEAAQgpAAgdgwg");
	this.shape_5.setTransform(-27.5,28.5,0.227,0.188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#542607").s().p("Ag6DEQhQgjABhfQAAg8AehTQAkhmAwgXQAogUAsAsQA7A9APB0QAPB8g/A0QgqAjgtAAQgcAAgegOg");
	this.shape_6.setTransform(25.1,13.2,0.227,0.188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#542607").s().p("AhuFCQg8g4ADhmQABg/AghtIAYhMIAYhMQAHgXAMgyQALgwAIgZQAYhIBCALQAxAIBNA2IAAAJQgGF/jTEbQgkgXgZgZg");
	this.shape_7.setTransform(29.9,28.6,0.227,0.188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#542607").s().p("AiVgVQCIlPDgkJQARAdAPA1QARA8ALBNQAHAxAIBZQAKBuABAhQABBSgQA6QgVBKhDBTQgoAxhTBQQg/A9h3BjQiFBtg0AwQAKk2CJlNg");
	this.shape_8.setTransform(-26,9.8,0.227,0.188);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#542607").s().p("AiIDoQiOgqgOiNQgQirCJhRQA6giBKgHQBHgIBFAUQBmAeA0BMQA6BVgbB2QgMA1g7AoQgoAchCAXQhIAahEAAQg1AAg0gPg");
	this.shape_9.setTransform(-7.6,-2.7,0.227,0.188);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#542607").s().p("AgQCUQhCgGgpgrQgygzAehHQAchBAygiQA0gkA5AMQBEANAeA4QAUAogKBCQgMBDggAaQgWASgmAHQgSADgTAAIgbgCg");
	this.shape_10.setTransform(5,-24,0.227,0.188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAC33").s().p("EgAWAqwQkwgGkHhWQkKhXjCieQjKikhpjhQhujsAFkeQAFjqBPkAQBPj8CLjqQCPjvC4i0QDCi+DXhkMAAvgnrIOMATMgAuAnrQDTBuC7DGQCxC8CGD1QCDDuBFEAQBHEDgFDqQgFEeh3DnQhxDcjPCcQjICWkNBLQj1BFkVAAIgwgBg");
	this.shape_11.setTransform(0.5,-6.1,0.227,0.188);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B380A").s().p("AjxBGIA0iWIF0AJIA7CXg");
	this.shape_12.setTransform(9.4,57,0.227,0.188);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#542607").s().p("AgfAxQgbgvAug2QAGgIAOgKQASgNAQgGIgrCzQgTgWgLgTg");
	this.shape_13.setTransform(16,45.9,0.227,0.188);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#542607").s().p("AhjCOQgKgSANglIAYg1QAkhWATggQAwhVAkATQAhARAEBNQADBCgPApQgMAfgiAWIg+AgQglATgVAAQgSAAgHgNg");
	this.shape_14.setTransform(11.3,50.6,0.227,0.188);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#542607").s().p("AgyB8IgTjWQBPg/AmArQAXAagBAvQgBAogTAsQgTArgbAWQgTAQgRAAQgKAAgIgEg");
	this.shape_15.setTransform(6,50.5,0.227,0.188);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB53E").s().p("AkfKDIhw0NIMfARIk7UEg");
	this.shape_16.setTransform(11.7,43.4,0.227,0.188);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B380A").s().p("AjxBGIBAiVIF1AIIAuCXg");
	this.shape_17.setTransform(-10,56.7,0.227,0.188);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#542607").s().p("AhTB5QgrgqArhJQAcgtA0gwQARgOAPgKQAlgXAUAEQAbAFgKAzIgQBSQgMA1gTAXQgVAZguAQQgXAHgRAAQgVAAgLgLg");
	this.shape_18.setTransform(-7.5,51.1,0.227,0.188);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#542607").s().p("AhqiDQAagZAVgPQA0gkA4B8QAdBAAZBZQAUA3hQAhQgaALg6ALg");
	this.shape_19.setTransform(-14.1,47.6,0.227,0.188);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFB53E").s().p("AiDKEIkM0PIMfARIifUGg");
	this.shape_20.setTransform(-11.1,43.1,0.227,0.188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5B380A").s().p("AiZAcQALg2AYhWIEQBiQgeBDgOA8g");
	this.shape_21.setTransform(-37.2,21.5,0.227,0.188);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#542607").s().p("AhLgPQAlgSAlgDQAogEAlAPQghAZgSAKQgcASgZAIQgGACgFAAQgdAAgHg1g");
	this.shape_22.setTransform(-26.5,2.7,0.227,0.188);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#542607").s().p("AhkBoQATg9ARgxQAyhEAlgaQAyghASAyQAUA3gSAxQgSAygxAZQgbAPgiACIgOABQgcAAgXgKg");
	this.shape_23.setTransform(-36.9,15.5,0.227,0.188);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#542607").s().p("ABJiSIAIgKQAOAnALBDQAKA3gFAeQgIAqgoAUQgbAOgvANIhMAYIgYAJQBXi+Bhhxg");
	this.shape_24.setTransform(-33.7,8,0.227,0.188);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB53E").s().p("AkMHhIiMAJQAgiWA/i7QCAl0Cfi4QAagoAqgpQBWhSBVgHQA4gFAwAdQAxAeAXA2QA5CChrCmQgbAohPBfQhmB6gqA2Qi7DzgvC+g");
	this.shape_25.setTransform(-31.4,12.8,0.227,0.188);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B380A").s().p("AiYgVIEThWQAUBWALA4IkLBJQgNhBgahAg");
	this.shape_26.setTransform(38.2,22.8,0.227,0.188);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#542607").s().p("AgdBsQgygJAMg/QAGgjAUgmQATgjAXgdIAGgIQAjBhAdBnQgxATghAAQgKAAgIgCg");
	this.shape_27.setTransform(38.5,16.3,0.227,0.188);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#542607").s().p("AhTAGQAJgUAPgdQA1hjAvgCQASgBANApQANApgBA1QgDCJhQATQggg/g0hNg");
	this.shape_28.setTransform(33.5,17.6,0.227,0.188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#542607").s().p("AANBuQgvgUghgcQgoglAHg1QAFgnAfg5IAIgOIABADQBUBrBKCmQg+gRgcgLg");
	this.shape_29.setTransform(35,8.9,0.227,0.188);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFB53E").s().p("AhcCMQgng4hih+QhMhigZgqQhliqA+h/QAag2AxgbQAxgbA4AHQBUALBUBWQAoArAZAoQCYC/ByF6QA5C9AaCYIiMgQIh/BZQgojAiyj7g");
	this.shape_30.setTransform(32.7,13.9,0.227,0.188);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5B380A").s().p("AiSCGQgVgXgRgfIgMgaQAGiCAtg6QAOgTAQgJIANgFIAIA/QADgZAOgWIANgRQAvgmBwA2QA4AaAuAiIgVBfQgfBlgxAdQgwAdgzgaQgQgIgOgMIgMgLIAzBFQgaALgZAAQg2AAgvgzg");
	this.shape_31.setTransform(25.3,48.1,0.227,0.188);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFAC33").s().p("AAaMzQi+gpiVh7QjDiihokjQgXhCgPg3QhelbBqj7QA+iTB6hhQAngfApgXQAYgNANgEQAbgLAaANQAbANAKAeQAKAdgNAdQgMAcgbALQgGACgUALQgeARgdAYQhbBKguBuQhjDuCBFqQBYD3CkCJQB8BoCfAjQCkAjCsgoQCNghAsgxQAUgXAdgBQAdAAAVAVQAVAWAAAfQABAggUAWQgiAnhDAhQhEAihVAUQhTAUhYAEIgoAAQheAAhbgTg");
	this.shape_32.setTransform(9,35.9,0.227,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-40.7,-57.5,82.4,116.1), null);


(lib.sign2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.playerName = new cjs.Text("", "12px 'Arial'", "#336699");
	this.playerName.name = "playerName";
	this.playerName.textAlign = "center";
	this.playerName.lineHeight = 15;
	this.playerName.lineWidth = 47;
	this.playerName.parent = this;
	this.playerName.setTransform(39.5,21.1);

	this.instance = new lib.names2fdg();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.902,0.773);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.playerName}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign2, new cjs.Rectangle(1,0,87.6,71.1), null);


(lib.sign1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.playerName = new cjs.Text("", "12px 'Arial'", "#336699");
	this.playerName.name = "playerName";
	this.playerName.textAlign = "center";
	this.playerName.lineHeight = 15;
	this.playerName.lineWidth = 47;
	this.playerName.parent = this;
	this.playerName.setTransform(49,21.1);

	this.timeline.addTween(cjs.Tween.get(this.playerName).wait(1));

	// Layer 1
	this.instance = new lib.names2fdg();
	this.instance.parent = this;
	this.instance.setTransform(87.6,0,0.902,0.773,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign1, new cjs.Rectangle(0,0,87.6,71.1), null);


(lib.replaybtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.replaybtn();
	this.instance.parent = this;
	this.instance.setTransform(0,2,0.383,0.383);

	this.instance_1 = new lib.replayblack();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2,0.383,0.383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,116.8,39.1);


(lib.nxtbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bnext();
	this.instance.parent = this;
	this.instance.setTransform(0,2,0.383,0.383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,116.8,39.1);


(lib.nek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#542607").s().p("Ah8BhQgSgQgBgZIAAgBQgBgyAhgqQAegpAwgVQAvgVAsALQAwAMAaAxQAlBEhHBKQgSASgZAAIiJACIgBAAQgYAAgRgRg");
	this.shape.setTransform(10.9,115.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#542607").s().p("AhXglICwAAQhEAmhKAaIgjALg");
	this.shape_1.setTransform(-37.8,95.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#542607").s().p("AAABBQgugSgbggQgignAeg6ICpAAIgDClQgygDgngPg");
	this.shape_2.setTransform(35.2,99.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#542607").s().p("AA3AJIhtACQBOgrAfApg");
	this.shape_3.setTransform(16.2,120.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#542607").s().p("AgugFIBsgCIACACIAHALIiNACg");
	this.shape_4.setTransform(15.5,122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAC33").s().p("AhpAUQAUgRAggUICNgCIASAng");
	this.shape_5.setTransform(13.8,124.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAC33").s().p("AnDhOIAjgLQBLgaBEgnIIzAAQgeA6AiAoQAbAgAtASQAoAOAyADIgCB9IjdAEQgfgqhPAtIpCAMg");
	this.shape_6.setTransform(-1.6,107.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFAC33").s().p("AhXAWQgGgVgMgSIDTgEIgBArg");
	this.shape_7.setTransform(33.2,124.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFAC33").s().p("AkhAAIJDgLIgYAOIorAJg");
	this.shape_8.setTransform(-18.2,122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFAC33").s().p("AkVATIABgcIIqgJQggAUgUARg");
	this.shape_9.setTransform(-19.4,124.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFAC33").s().p("AhsgBIgCgDIDdgEIAAAOIjUAEg");
	this.shape_10.setTransform(32.8,121.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#542607").s().p("AgoAmQAmgmArglIgBBLg");
	this.shape_11.setTransform(40.6,76.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#542607").s().p("AA/AIIgjAAQhSgChBgOIDvAAQgaARgdAAIgCgBg");
	this.shape_12.setTransform(28.1,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#542607").s().p("Ag3i/QBBApAbBCQAfBKgUBbQgPBBhYAug");
	this.shape_13.setTransform(12.4,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#542607").s().p("Ag0CUQgkgDgegQIAAjvQA5gxBEANQBEANAeA4QAUAogKBCQgLBDggAaQgXASgmAHQgQADgUAAIgbgCg");
	this.shape_14.setTransform(18.7,52.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFAC33").s().p("AjIKKIAAiXQAeAQAkADQAiADAfgFQAlgGAXgSQAfgaALhDQAKhDgUgoQgcg4hFgNQhFgNg5AxIAAjBQBZguAPhAQAVhcgghKQgbhChCgpIAAlMIBcAAQBBAPBTACIAjAAQAeABAagSIBGAAIgXTIQgtAlgmAmg");
	this.shape_15.setTransform(26.9,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#542607").s().p("AhVA3QANgZAageIAogqIALgMIBRAAIgCBtg");
	this.shape_16.setTransform(36,86.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#542607").s().p("AhsEjIgQgFQgsgLggggIAAndQAXgTAkgKQBXgZCXgCIABAAQAnAAAdAaQAdAbACAnQANDJgmDfQgHApgiAYg");
	this.shape_17.setTransform(26.9,-78.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFAC33").s().p("AiTA3IAAhtIEnAAIgMAMIgnAqQgbAegNAZg");
	this.shape_18.setTransform(21.7,86.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFAC33").s().p("AgtAYIAAgvQAfAfArALIARAFg");
	this.shape_19.setTransform(11.5,-51.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFAC33").s().p("AB9F4QAhgXAIgpQAljfgMjJQgDgogdgaQgcgbgnABIgBAAQiXAChYAZQgjAKgXATIAAjjIGdAIIgNLng");
	this.shape_20.setTransform(27.6,-87);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#542607").s().p("AhFjwQAhADAZAIQArANAmAYIAAGAQgeARgrAPQgcAKgmAHg");
	this.shape_21.setTransform(-0.1,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#542607").s().p("AgZA+QgVgrAWgzQAWg1AmgiIAADvQgrgWgSgkg");
	this.shape_22.setTransform(3.2,53.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFAC33").s().p("AhFEkIAAoVQAmgIAcgKQArgPAegRIAADBQgnAhgWA2QgVAzAUArQASAkAsAWIAACXg");
	this.shape_23.setTransform(-0.1,51.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFAC33").s().p("AgLCBQgZgIghgEIAAkaICLAAIAAFLQgmgYgrgNg");
	this.shape_24.setTransform(-0.1,-32.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#542607").s().p("AirD6IAJnzIAnARQBQAkBPA+QBXBDAjBEQATAlgHAkQgGAfgbAiQgyA+hSAxg");
	this.shape_25.setTransform(-29.4,66.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#542607").s().p("AgWB/QgKgtABg8QABgnAHhEQAGg8AJgcQALgpAdgYIAAHdQgmgogQhIg");
	this.shape_26.setTransform(3.6,-78.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#542607").s().p("AhGCSQgNgWgahHQgMgjANg3QANg1AdgsQAgguAigLQAmgMAfAqQAfAoALBPQAMBQgSA/QgbBYhKAFIgEAAQgpAAgdgwg");
	this.shape_27.setTransform(-22.3,-77.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#542607").s().p("AgsDcQhugwgMh7QgOiZBvhSQBihKCMARIAAHiQgrAIgmAAQhJAAg7gbg");
	this.shape_28.setTransform(-24,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFAC33").s().p("AheQ/QBSgxAxg+QAbgiAGgfQAHgkgTglQgjhFhWhDQhQg+hQgkIgngRIAf6JIHuALIAADjQgdAYgNApQgIAcgGA8QgHBEgBAoQgBA8AKAtQAPBIAoAoIAAAwIiMAAIAAEbQiLgRhjBIQhvBTAOCaQAMB6BuAxQBbAoB6gVIAAIWICMAAIAABugAgcseQgjAKgfAvQgeAsgMA1QgOA4ANAjQAZBHAOAWQAeAyAtgCQBJgFAahYQAThAgMhRQgMhOgegpQgYgggcAAQgJAAgIADg");
	this.shape_29.setTransform(-19.4,-17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nek, new cjs.Rectangle(-47.2,-125.7,95.6,252.5), null);


(lib.myAboutBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAPAkIgZgkQgFAFgBARIgBAOIgTAAIABgPQACgQAEgGQAEgGAGgEIgRgYIAXAAIAUAdQAFgEABgNIABgMIASAAIgBAJQgCAPgEAGQgDAGgHAEIAWAfg");
	this.shape.setTransform(12.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_1.setTransform(6.2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAEAkIAAg3IgmAAIAAgQIBFAAIAAAQIgLAAIAAA3g");
	this.shape_2.setTransform(0.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_3.setTransform(-5.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgoAjIADgNIAHACQAEAAACgDIABgHIAAgiIgPABIgBgPQASgCASAAQAQAAAJADQAKADAEAHQAFAHAAAPIAAAlIgTAAIAAgjQAAgNgFgFQgFgDgPAAIAAAjQgBAJgBAEQgCAEgEADQgEACgIAAQgJAAgIgCg");
	this.shape_4.setTransform(-12.2,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0000FF").ss(1,1,1).p("AiyAAIFlAA");
	this.shape_5.setTransform(0.8,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(48,48,48,0)").ss(1,1,1).p("AifhNIE/AAIAACbIk/AAg");
	this.shape_6.setTransform(0.4,-2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0)").s().p("AifBOIAAibIE/AAIAACbg");
	this.shape_7.setTransform(0.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-11,38.3,21);


(lib.closeAboutBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,-15.3,0.031,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-15.3,30.6,30.6);


(lib.hitLink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה\n", "18px 'Arial'", "#0000FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(0,-22.3,0.694,0.694);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(48,48,48,0)").ss(0.3,1,1).p("Aq+gBIV9AAIAAADI19AAg");
	this.shape.setTransform(-1.4,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Aq+ACIAAgDIV8AAIAAADg");
	this.shape_1.setTransform(-1.4,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitLink, new cjs.Rectangle(-105.1,-23.7,210.2,47.4), null);


(lib.mesii2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.messiiiii();
	this.instance.parent = this;
	this.instance.setTransform(-52,-42,0.348,0.348);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.71,scaleY:0.71,x:-107,y:-88},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-42,104.3,86.9);


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaf();
	this.instance.parent = this;
	this.instance.setTransform(208.9,40.7,0.365,0.365,0,10.7,-169.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf2, new cjs.Rectangle(-24.4,0,233.3,137.8), null);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaf();
	this.instance.parent = this;
	this.instance.setTransform(21.8,39.4,0.352,0.352,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf1, new cjs.Rectangle(21.8,0,225.4,133.2), null);


(lib.giraffe2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#542607").s().p("ABBCfQgvgWgsgkQgygpgTgoQgTgoAigpQA3hBBrglIAVgGIgQFTg");
	this.shape.setTransform(-2.2,226.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#542607").s().p("AgJBXQgngDgYgZQgcgeASgqQAQgnAdgUQAegVAhAHQAoAIAQAhQAMAXgGAnQgHAngTAQQgTARgiAAIgSgCg");
	this.shape_1.setTransform(-21.2,258.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#542607").s().p("AgJBYQgmgEgYgZQgdgeASgpQAQgnAdgUQAegVAhAGQAoAIARAhQALAXgGAnQgHAogSAPQgUAQgkAAIgQAAg");
	this.shape_2.setTransform(-32.5,226.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#351906").s().p("AgdA4QgLgIAFgiQAFggASgnIAyAoQgRAmgUAVQgOAQgKAAQgDAAgDgCg");
	this.shape_3.setTransform(4.6,189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#351906").s().p("AgBAoQgZgWgWgmIBEgkQAWAnAFAgQAFAggOAIQgEACgEAAQgNAAgSgRg");
	this.shape_4.setTransform(-38.3,189);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCE45").s().p("AgLJ7QkJgEiniHQixiPAFjuQADh5A0iGQAziFBXhvQBah0BthBQB3hHB6ACQB6ACB0BLQBqBFBVB3QBRByAtCGQAuCHgDB6QgGDui3CJQioB8j9AAIgRAAg");
	this.shape_5.setTransform(-24.1,437.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#542607").s().p("AhcipIAXAKQAxAXAqAiQAzAoAUAoQAVAngiApQg1BDhqAmIgVAHg");
	this.shape_6.setTransform(-37.3,293.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#542607").s().p("AgrBAQgWgZAWgmQAMgTAfghQAXgYAggcIgFDPQg/gEgegkg");
	this.shape_7.setTransform(0.5,305.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#542607").s().p("Ag2CpQgXgOgYgZQgQgQgagfQgegkgHgUQgLgeATgkQAZgvA9hCQAWgYAQgOQCCBkBoCbQgPARggAhQgoAogkAWQgZAOgaAAQgfAAgjgWg");
	this.shape_8.setTransform(21.2,354.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#542607").s().p("AhMAyQgeg6Blg/QAVgOAPgDQAWgEALARQAUAeAAAkQAAA+hBAcQgUAJgSAAQglAAgUgog");
	this.shape_9.setTransform(-13.9,331);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#542607").s().p("AgpBXQgIgNgOgqQgIgUAIggQAIggARgaQArhAAkAwQASAYAGAuQAHAvgMAlQgPA0grADIgCABQgYAAgRgdg");
	this.shape_10.setTransform(-95.5,448.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#542607").s().p("AgiB0QgugVABg4QAAgiASgyQAVg8AcgOQAWgMAaAbQAjAjAIBFQAIBJglAeQgYAVgaAAQgRAAgRgIg");
	this.shape_11.setTransform(39.5,399.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#542607").s().p("AhBC+QgighABg8QABgmATg/IAdhaIALgrIAMgrQAOgrAmAGQAbAFAuAfIAAAGQgFDhh7CoQgWgOgOgOg");
	this.shape_12.setTransform(51.5,447.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#542607").s().p("AhVgMQBQjFCCidQAKAPAJAhQAQA4AIBqIAGBVQABAvgKAjQgMArgoAxQgXAcgxAxQglAkhFA6QhOBCgeAbQAHi3BRjEg");
	this.shape_13.setTransform(-91.2,389.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#542607").s().p("AhPCKQhTgYgHhUQgJhkBPgwQBIgrBWAZQA8ARAeAtQAhAygQBFQgHAfgjAYQgWAQgnAPQgrAPgoAAQgeAAgdgIg");
	this.shape_14.setTransform(-43.9,350.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#542607").s().p("AgJBYQgngEgYgZQgcgeASgqQAQgnAdgUQAegVAhAHQAoAIAQAhQAMAXgGAnQgHAngTAQQgTARglAAIgPgBg");
	this.shape_15.setTransform(-11.2,282.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFAC33").s().p("AgQZOQlugGjni+Qj0jKAIlPQAGkdCskjQCzktD8h3IAj3aIIQAJIgjXaQD2B/CkEzQCfEogHEeQgIFPj9DBQjoCwldAAIgYAAg");
	this.shape_16.setTransform(-23.6,339.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B380A").s().p("AiUA4IAghzIDmADIAkB0g");
	this.shape_17.setTransform(1.8,552.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#542607").s().p("AgTAmQgQglAcgpQAEgFAJgJQAKgJAKgFIgbCJQgLgQgHgPg");
	this.shape_18.setTransform(20.1,506.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#542607").s().p("Ag9BtQgGgNAIgdIAPgoQAYhEALgXQAehBAWAOQAUAMACA8QABAygJAfQgIAYgVARQgGAFggAUQgXAPgNAAQgLAAgEgKg");
	this.shape_19.setTransform(6.9,525.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#542607").s().p("AghBfIgKijQAxgxAXAhQAdApgdBOQgMAhgQARQgMANgLAAQgFAAgGgDg");
	this.shape_20.setTransform(-7.2,525.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFB53E").s().p("Ai4HtIg+vdIHtAIIjKPZg");
	this.shape_21.setTransform(8.6,496.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5B380A").s().p("AiUA4IAohzIDmADIAbB0g");
	this.shape_22.setTransform(-51,551.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#542607").s().p("Ag0BdQgaggAbg4QASgiAhglQAGgJANgKQAXgSAMADQAQAEgGAnIgKA+QgIAqgLARQgNATgdAMQgPAGgKAAQgNAAgHgIg");
	this.shape_23.setTransform(-44,528.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#542607").s().p("AhAhkQAOgSAPgNQAggbAhBeQASAxAPBDQAMAqgyAaQgQAJgjAJg");
	this.shape_24.setTransform(-61.9,514.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB53E").s().p("AhYHuIieveIHtAHIhpPag");
	this.shape_25.setTransform(-53.1,496);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B380A").s().p("AhdAVQAHgpAOhBICmBKQgSA0gJAtg");
	this.shape_26.setTransform(-122.4,438.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#542607").s().p("AgugLQAYgNAWgDQAYgDAXAMQgVASgLAIQgQAOgQAGIgHABQgRAAgFgog");
	this.shape_27.setTransform(-93.7,361.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#542607").s().p("Ag9BQIAWhUQAfg1AWgTQAegaALAnQANAqgLAlQgMAngdATQgRALgUACIgIABQgRAAgPgIg");
	this.shape_28.setTransform(-121.7,413.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#542607").s().p("AAthvIAEgIQAJAeAHAzQAGApgDAYQgFAggYAPQgRALgcAKIgvASIgPAHQA2iQA7hXg");
	this.shape_29.setTransform(-113,383.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFB53E").s().p("AijFxIhWAHQAThzAniPQBOkdBhiNQAQgeAaggQA0g/A0gGQAjgEAdAXQAdAWAPAqQAjBkhCB/QgdA5h7C1QhzC6gcCSg");
	this.shape_30.setTransform(-106.8,402.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5B380A").s().p("AhdgQICohCQAMBDAHAqIijA4QgIgygQgxg");
	this.shape_31.setTransform(80.4,443.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#542607").s().p("AgSBSQgegHAHgvQAIg1Ahg0IAEgGQAUBHATBSQgeAOgTAAIgMgCg");
	this.shape_32.setTransform(81.2,417.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#542607").s().p("AgyAEQAGgRAIgUQAhhMAcgBQALgBAIAgQAIAfgBAoQgCBpgxAOQgUgygeg5g");
	this.shape_33.setTransform(67.7,422.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#542607").s().p("AAIBUQgdgOgUgWQgYgcAEgpQADgeATgsIAFgKIAAABQAyBQAvCCQgmgNgRgJg");
	this.shape_34.setTransform(71.8,387.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB53E").s().p("Ag4BrQh1i7gcg7Qg+iCAmhiQAQgpAegVQAegUAiAFQA0AJAyBBQAZAhAPAfQBdCSBGEhQAjCRAQB0IhWgMIhOBEQgYiShtjBg");
	this.shape_35.setTransform(65.7,407.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5B380A").s().p("AhuC2QhNg4AVheIBHAnQgTgNgQgYQgeguAVg4QAVg3Bbg0IBWgqIAXAbQAaAjAUAgQBABpgdA3IgPARQgTAUgWAHIA7gEIgDAPQgHASgPASQgxA6h5AgQgqgJgngbg");
	this.shape_36.setTransform(-169.8,364);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFAC33").s().p("AADJ9Qg9gGg5gKQkcgxiwipQiFiAg/i9QhAjAAUjYQAIhcAXhMQAXhLAggrQATgZAdgGQAdgFAXARQAXARADAeQADAegTAZQgoA3gOCYQgQC4A2CiQAzCdBxBsQCVCNDyAqQFjA9DSiVQBhhFA7htQASgiAMgjQAIgXABgGQAHgeAZgSQAZgSAdAEQAdAEAPAZQAQAYgHAeQgCANgJAdQgQAugYAuQhMCRiCBdQi+CIkPAAQgwAAgygEg");
	this.shape_37.setTransform(-100.3,430.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,177.8,276.8,380.3);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB7D").s().p("AhUAlQAAgQAXgSQArghBngPIgfAHQg2AMgeAQQghARgLASQgKAPAIAGQgIgDAAgGg");
	this.shape.setTransform(8.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0.3,17,9.1), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_4_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,303,62), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB7D").s().p("AgzATQg5gCgggQQBmAhB8gjQAegIAZgKQhdAnhUAAIgPgBg");
	this.shape.setTransform(14.1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,2.4,28.2,4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_3_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,80,167), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,32,140), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,72,166), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB7D").s().p("AgnArQBPANAegMQAJgCAEgIQAIgPgbgWQgagXg+gOQgggIgjgFQAmAEApAKQBQAVARAgIAGAMQADANgPAHQgNAIgaAAQgfAAgwgLg");
	this.shape.setTransform(9.2,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,18.3,10.7), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,37,22), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,37,22), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,38,142), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.btnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnNext, new cjs.Rectangle(0,0,116.3,34), null);


(lib.Bstart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bstart();
	this.instance.parent = this;
	this.instance.setTransform(-61,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bstart2, new cjs.Rectangle(-61,-14,305,102), null);


(lib.dractivechoosenames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAaIATgEIgNg/IAUAAIAJA5QAHgCADgGQACgFAAgJIABgjIATAAIgBAaIgBARQgBAGgDAGQgDAGgGAFQgHAFgMAEQgNAFgSADg");
	this.shape.setTransform(82.2,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGABgEIAFgKIACgCQAEgEAAgIIAAgIIgmAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_1.setTransform(75.2,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_2.setTransform(69.9,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAjIADgPQAHADAFAAQALAAAFgHQAGgGAAgKQAAgJgGgGQgFgHgLAAQgFAAgHADIgDgPQAIgCAJAAQANAAAIAEQAIAEAGAIQAFAIAAAMQAAAMgFAIQgEAIgJAFQgKAEgMAAQgJAAgIgCg");
	this.shape_3.setTransform(64.6,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAlIAAhGQANgDAOAAQARAAAHAFQAJAEAEAHQADAHAAAMIAAAmgAgNgTIAAAnIAcAAIAAgUQAAgKgFgFQgDgFgKAAIgKABg");
	this.shape_4.setTransform(57,43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGACgEIAEgKIACgCQAEgEgBgIIAAgIIglAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_5.setTransform(45.2,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_6.setTransform(37.5,43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAkIAAgJIgBgVIAAgGQAAgNAIgGIgUAAIAAgQIAxAAIAAANQgKAAgFAFQgGAEAAAKIAAAFQACANAAAKIAAALg");
	this.shape_7.setTransform(30.5,43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_8.setTransform(25.5,41.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_9.setTransform(21.7,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_10.setTransform(10.9,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_11.setTransform(1.3,43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_12.setTransform(-4.8,43);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoAiIADgMIAIACQAEAAABgCIABgIIAAgiIgOABIgCgPQARgCAUAAQAPAAAJADQAKADAEAHQAFAIAAANIAAAmIgTAAIAAgjQAAgNgEgFQgFgDgRAAIAAAjQAAAJgBAEQgCAEgEACQgEADgIAAQgJAAgIgDg");
	this.shape_13.setTransform(-11.7,43);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGACgEIAEgKIACgCQADgEABgIIAAgIIgmAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_14.setTransform(-23.6,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_15.setTransform(-31.6,43);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_16.setTransform(-40.8,43.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAiIADgMIAHACQAEAAACgCIABgIIAAgiIgPABIgBgPQASgCASAAQAQAAAJADQAJADAGAHQAEAIAAANIAAAmIgTAAIAAgjQAAgNgFgFQgFgDgQAAIAAAjQAAAJgBAEQgCAEgEACQgEADgIAAQgJAAgIgDg");
	this.shape_17.setTransform(-50.8,43);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_18.setTransform(-59.9,43);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_19.setTransform(-69,43.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_20.setTransform(-75.9,41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAlIAAhGQAOgDANAAQAQAAAJAFQAIAEADAHQAEAHAAAMIAAAmgAgOgTIAAAnIAdAAIAAgUQAAgKgFgFQgDgFgLAAIgKABg");
	this.shape_21.setTransform(-82,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dractivechoosenames, new cjs.Rectangle(-227.5,32,455,19.6), null);


(lib.balon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-99,-60,0.569,0.598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.balon, new cjs.Rectangle(-99,-60,201,149), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leand
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(4,1,0.652,0.724);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1AB7E").s().p("EhKzAC3IAAltMCVnAAAIAAFtg");
	this.shape.setTransform(481.4,582.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// clouds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFFE4").s().p("AhrCZQgngLgUgJQgoAQglgJIgLgDQg0AXgpgDIgDAAIAAjbQARgLAUgDQAzgIAhAwQgFgyAagmQAdgqAxACQApACAdAaQAaAYAHAmIAMgQQATgTAYgIQAbgJAYAIQAhAMAQAeQAQAbgDAjQAygtBMAVQBQAWAEBIQAFBGhXASQhUASg0gvQgvAnhEAJQgSACgUAAQgrAAgsgMg");
	this.shape_1.setTransform(32.1,138.3,0.878,0.878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBFFE4").s().p("AgkCZQgmgLgUgJQgoAQgmgJIgKgDQg1AXgogDQgNABgKAAQgwgCgkgXQgrgcADguQABgjAggNQAdgLAiAKQAEgfAWgXQAZgbAigFQAzgIAgAwQgFgyAbgmQAcgqAyACQApACAbAaQAaAYAHAmIANgQQATgTAYgIQAcgJAXAIQAhAMARAeQAPAbgDAjQAygtBNAVQBPAWAFBIQAEBGhWASQhUASg0gvQgvAnhEAJQgTACgUAAQgrAAgsgMg");
	this.shape_2.setTransform(77.7,62.1,0.878,0.878);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBFFE4").s().p("AgkCZQgmgLgUgJQgoAQgmgJIgKgDQg1AXgogDQgNABgKAAQgwgCgkgXQgrgcADguQABgjAggNQAdgLAiAKQAEgfAWgXQAZgbAigFQAzgIAgAwQgFgyAbgmQAcgqAyACQApACAbAaQAaAYAHAmIANgQQATgTAYgIQAcgJAXAIQAhAMARAeQAPAbgDAjQAygtBNAVQBPAWAFBIQAEBGhWASQhUASg0gvQgvAnhEAJQgTACgUAAQgrAAgsgMg");
	this.shape_3.setTransform(180.3,117.9,0.878,0.878);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBFFE4").s().p("AgkCZQgmgLgUgJQgoAQgmgJIgKgDQg1AXgogDQgNABgKAAQgwgCgkgXQgrgcADguQABgjAggNQAdgLAiAKQAEgfAWgXQAZgbAigFQAzgIAgAwQgFgyAbgmQAcgqAyACQApACAbAaQAaAYAHAmIANgQQATgTAYgIQAcgJAXAIQAhAMARAeQAPAbgDAjQAygtBNAVQBPAWAFBIQAEBGhWASQhUASg0gvQgvAnhEAJQgTACgUAAQgrAAgsgMg");
	this.shape_4.setTransform(704.7,86.4,0.812,0.812);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBFFE4").s().p("AgkCZQgmgLgUgJQgoAQgmgJIgKgDQg1AXgogDQgNABgKAAQgwgCgkgXQgrgcADguQABgjAggNQAdgLAiAKQAEgfAWgXQAZgbAigFQAzgIAgAwQgFgyAbgmQAcgqAyACQApACAbAaQAaAYAHAmIANgQQATgTAYgIQAcgJAXAIQAhAMARAeQAPAbgDAjQAygtBNAVQBPAWAFBIQAEBGhWASQhUASg0gvQgvAnhEAJQgTACgUAAQgrAAgsgMg");
	this.shape_5.setTransform(782.6,138,0.812,0.812);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBFFE4").s().p("AgkCZQgmgLgUgJQgoAQgmgJIgKgDQg1AXgogDQgNABgKAAQgwgCgkgXQgrgcADguQABgjAggNQAdgLAiAKQAEgfAWgXQAZgbAigFQAzgIAgAwQgFgyAbgmQAcgqAyACQApACAbAaQAaAYAHAmIANgQQATgTAYgIQAcgJAXAIQAhAMARAeQAPAbgDAjQAygtBNAVQBPAWAFBIQAEBGhWASQhUASg0gvQgvAnhEAJQgTACgUAAQgrAAgsgMg");
	this.shape_6.setTransform(836.4,95.5,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(1.3,1,958.9,599.8), null);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.7,20.6);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.2,20.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.4,20.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:22.2,y:20.7},4).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,x:19.4},5).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},5).to({_off:true,x:20.7,y:20.6},5).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},5).to({startPosition:0},111).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,41.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.head2 = new lib.Tween6();
	this.head2.parent = this;
	this.head2.setTransform(39.3,41.8);

	this.timeline.addTween(cjs.Tween.get(this.head2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,5,78.6,73.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Bstart2();
	this.startbtn.parent = this;
	this.startbtn.setTransform(45.5,15,0.298,0.293,0,0,0,91.5,37);

	this.instance = new lib.Asset2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.29,0.282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startbtn}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,29.9);


(lib.player2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.6,y:-15.4},1).to({x:0,y:-272.8},18).wait(1));

	// Layer 1
	this.instance_1 = new lib.giraffe2ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.1,101.5,0.463,0.383,0,0,0,138.3,279.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.nek();
	this.instance_2.parent = this;
	this.instance_2.setTransform(36.8,69,0.278,0.11,0,0,0,1.1,1.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:1.3,regY:1.7,scaleY:0.3,x:37.6,y:45.8},3).to({regX:1.1,regY:1.9,scaleY:1.23,x:38.3,y:-70.3},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,1.7,128.1,206.8);


(lib.AboutScreenLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hitLink = new lib.hitLink();
	this.hitLink.parent = this;
	this.hitLink.setTransform(-79.2,113.4);

	this.closeAboutBtn = new lib.closeAboutBtn();
	this.closeAboutBtn.parent = this;
	this.closeAboutBtn.setTransform(-196.6,-50.6,1.3,1.3,0,0,0,-0.2,-0.2);

	this.text = new cjs.Text("\nמכון טכנולוגי חולון", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(-84.8,91.1,0.694,0.694);

	this.instance = new lib.HIT();
	this.instance.parent = this;
	this.instance.setTransform(63,78,0.564,0.564);

	this.text_1 = new cjs.Text(":פותח במסגרת פרויקט בקורסים\nסביבות לימוד אינטראקטיביות 1 & אנימציה, תשע\"ח ", "20px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 587;
	this.text_1.parent = this;
	this.text_1.setTransform(-7.5,28.7,0.694,0.694);

	this.text_2 = new cjs.Text("אפיון ופיתוח: אלעד בן יוסף ורון ראובני", "24px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 544;
	this.text_2.parent = this;
	this.text_2.setTransform(0.2,-15.8,0.694,0.694);

	this.text_3 = new cjs.Text("תופסים ראש", "bold 36px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 42;
	this.text_3.lineWidth = 418;
	this.text_3.parent = this;
	this.text_3.setTransform(-2.4,-59.6,0.694,0.694);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.9,97.8,1.703,1.703,0,0,0,19,71);

	this.instance_2 = new lib.Path_1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(278.3,-37.1,1.703,1.703,0,0,0,9.2,5.4);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-270.5,99.7,1.703,1.703,0,0,0,16,70);

	this.instance_4 = new lib.Path_3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-261.2,-17.9,1.703,1.703,0,0,0,14.1,4.4);

	this.instance_5 = new lib.Path_4_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-266.2,-38.1,1.703,1.703,0,0,0,8.5,4.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB7D").s().p("AgzLzQhvgKhLhOQgtgvgNgoQAdhEAghqQBBjUARi8QAYkKgekTQgQiKgUhUIAOAbQAWAfAnASQB0A2BfACQCHADBFhoIgnCpQhPFPgMExQgKDyAZDMQANBmAOA2QgVAWgrATQhFAghRAAQgWAAgXgDg");
	this.shape.setTransform(265.4,92.7,1.703,1.703);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0843E").s().p("AARBKQg+gFg3gTIAOh7IA6AMQA/ALAggGQAkgGgCgNQADAJgiCNIgUABIghgCg");
	this.shape_1.setTransform(276.2,-19.3,1.703,1.703);

	this.instance_6 = new lib.Path_1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(263.5,-27.9,1.703,1.703,0,0,0,18.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77435").s().p("AiMAfIgfg0QgIgMAAgPQgBgeAmgPQAigOBNADQBcAEBGAiIAVAMQAWAQAGATQADATgTAHQgXAKhNgRIhHgRIgOB6QhJgagugwg");
	this.shape_2.setTransform(262.8,-28.7,1.703,1.703);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCCB7D").s().p("AiPLWQgagMgWgQIgQgNQAPg2AMhmQAZjMgKjyQgNlbhQlCQgNg1gOgxIgKgmQBOBhCDAAQBhgBBtgzQAngSAWgfQALgPADgMQgUBUgPCKQgfETAZEKQARC8BADUQAhBqAcBEQgLAmguAxQhMBOhvAKQgXADgWAAQhRAAhFggg");
	this.shape_3.setTransform(-252.7,92.7,1.703,1.703);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0843E").s().p("AhVADQgRhIACgFQgCAMAkAHQAhAFA+gKQAggGAagGIAOB6Qg3AUg+AFIg1AAIgQhIg");
	this.shape_4.setTransform(-263.5,-19.3,1.703,1.703);

	this.instance_7 = new lib.Path_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-249.2,-27.9,1.703,1.703,0,0,0,18.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A77435").s().p("AAIgRQghAKgmAHQhNARgXgKQgTgIADgSQAGgTAWgQIAVgMQBGgiBcgEQBNgDAiAOQAmAPgBAeQAAAPgIAMIgfA0QgvAwhIAag");
	this.shape_5.setTransform(-250.1,-28.7,1.703,1.703);

	this.instance_8 = new lib.Path_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(255,47,1.703,1.703,0,0,0,36,83);

	this.instance_9 = new lib.Path_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-234.6,45.6,1.703,1.703,0,0,0,40,83.5);

	this.instance_10 = new lib.Path_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(9.7,135.8,1.703,1.703,0,0,0,151.5,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3B872").s().p("A0pNkQhYkHhhkPQjBofgqgvQgpgugUg9IgNg0QAljnJHh4QGShSJbgUIF9AAQJbAUGSBSQJHB4AlDnIgNA0QgUA9gqAuQgoAvjDIfQhgEQhZEGQhRgRiKgaQkUgykcglQjtggkCgDQi0gCjFAPQkIAWl+BBQlEBCgTAAIgCgBg");
	this.shape_6.setTransform(6.4,39.2,1.703,1.703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_5},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_6},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.instance},{t:this.text},{t:this.closeAboutBtn},{t:this.hitLink}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AboutScreenLib, new cjs.Rectangle(-303.1,-108.7,619.5,330.5), null);


(lib.incorrectx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween41("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19,18.6,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.2,scaleX:0.54,scaleY:0.54,x:20.5,y:20.3},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,3.6,30,30);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-34,-29.3,69.1,59.7), null);


(lib.finishTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("!נגמר הזמן\n\nלחץ על המשך ", "37px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 588;
	this.text.parent = this;
	this.text.setTransform(465.5,150.5);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(826.1,302.7,2.497,2.497,0,0,0,19,71);

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(866.3,105,2.497,2.497,0,0,0,9.2,5.4);

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.6,305.6,2.497,2.497,0,0,0,16,70);

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(75.4,133.2,2.497,2.497,0,0,0,14.1,4.4);

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(68,103.5,2.497,2.497,0,0,0,8.5,4.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCB7D").s().p("AgzLzQhvgKhLhOQgtgvgNgoQAdhEAghqQBBjUARi8QAYkKgekTQgQiKgUhUIAOAbQAWAfAnASQB0A2BfACQCHADBFhoIgnCpQhPFPgMExQgKDyAZDMQANBmAOA2QgVAWgrATQhFAghRAAQgWAAgXgDg");
	this.shape.setTransform(847.3,295.3,2.497,2.497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0843E").s().p("AARBKQg+gFg3gTIAOh7IA6AMQA/ALAggGQAkgGgCgNQADAJgiCNIgUABIghgCg");
	this.shape_1.setTransform(863.2,131.2,2.497,2.497);

	this.instance_5 = new lib.Path_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(844.6,118.5,2.497,2.497,0,0,0,18.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77435").s().p("AiMAfIgfg0QgIgMAAgPQgBgeAmgPQAigOBNADQBcAEBGAiIAVAMQAWAQAGATQADATgTAHQgXAKhNgRIhHgRIgOB6QhJgagugwg");
	this.shape_2.setTransform(843.5,117.3,2.497,2.497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCCB7D").s().p("AiPLWQgagMgWgQIgQgNQAPg2AMhmQAZjMgKjyQgNlbhQlCQgNg1gOgxIgKgmQBOBhCDAAQBhgBBtgzQAngSAWgfQALgPADgMQgUBUgPCKQgfETAZEKQARC8BADUQAhBqAcBEQgLAmguAxQhMBOhvAKQgXADgWAAQhRAAhFggg");
	this.shape_3.setTransform(87.8,295.3,2.497,2.497);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0843E").s().p("AhVADQgRhIACgFQgCAMAkAHQAhAFA+gKQAggGAagGIAOB6Qg3AUg+AFIg1AAIgQhIg");
	this.shape_4.setTransform(71.9,131.1,2.497,2.497);

	this.instance_6 = new lib.Path_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.9,118.5,2.497,2.497,0,0,0,18.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A77435").s().p("AAIgRQghAKgmAHQhNARgXgKQgTgIADgSQAGgTAWgQIAVgMQBGgiBcgEQBNgDAiAOQAmAPgBAeQAAAPgIAMIgfA0QgvAwhIAag");
	this.shape_5.setTransform(91.6,117.3,2.497,2.497);

	this.instance_7 = new lib.Path_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(832.1,228.3,2.497,2.497,0,0,0,36,83);

	this.instance_8 = new lib.Path_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(114.2,226.2,2.497,2.497,0,0,0,40,83.5);

	this.instance_9 = new lib.Path_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(472.3,358.5,2.497,2.497,0,0,0,151.5,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3B872").s().p("A0pNkQhYkHhhkPQjBofgqgvQgpgugUg9IgNg0QAljnJHh4QGShSJbgUIF9AAQJbAUGSBSQJHB4AlDnIgNA0QgUA9gqAuQgoAvjDIfQhgEQhZEGQhRgRiKgaQkUgykcglQjtggkCgDQi0gCjFAPQkIAWl+BBQlEBCgTAAIgCgBg");
	this.shape_6.setTransform(467.6,216.9,2.497,2.497);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_5},{t:this.instance_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finishTime, new cjs.Rectangle(13.8,0.1,908.2,484.5), null);


(lib.correctv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.2,21.1,0.203,0.203,0,0,0,3.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.4,regY:3,scaleX:0.29,scaleY:0.29,x:22.7,y:22.2},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,5.5,30,30);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-40.7,-57.5,82.4,116.1), null);


(lib.player1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(1));

	// Layer 2
	this.instance = new lib.head();
	this.instance.parent = this;
	this.instance.setTransform(62.2,45.5,1.519,1.519,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.5,y:-224.6},19).wait(1));

	// Layer 3
	this.instance_1 = new lib.nek();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.8,86.4,0.351,0.14,0,0,0,0.8,1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:1,scaleY:0.28,x:61.9,y:48},2).to({regX:0.8,regY:2,scaleY:1.27,x:61.8,y:-54.8},14).wait(1));

	// Layer 1
	this.instance_2 = new lib.body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.2,126,1.519,1.519,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0.1,125.2,214);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ברוכים הבאים", "bold 24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 245;
	this.text.parent = this;
	this.text.setTransform(286.2,14.1);

	this.text_1 = new cjs.Text("תופסים ראש ", "76px 'Arial'", "#3EC0D6");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 87;
	this.text_1.lineWidth = 510;
	this.text_1.parent = this;
	this.text_1.setTransform(289.2,-87.8);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",-1,-3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape.setTransform(476.1,106.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAlIAAglQAAgKgEgFQgFgFgKAAIgKABIAAA4IgTAAIAAhGQANgDAOAAQARAAAIAFQAIAEADAHQAEAHAAAMIAAAmg");
	this.shape_1.setTransform(466.8,106.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAyIAAhAIATAAIAABAgAAAAWIAAgNQAAgFACgEQABgDAEgGIADgDQADgEAAgIIAAgJIgsAAIAAgQIA/AAIAAASIgBAPQgBAFgCAEIgEAFIgDAGIgBAGIAAAMg");
	this.shape_2.setTransform(458.6,107.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_3.setTransform(452.6,107.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AADAyIAAhHQgJAKgPAEIAAgRQAHgCAKgHQAHgHADgJIAQAAIAABjg");
	this.shape_4.setTransform(442.3,104.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_5.setTransform(125.6,106.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAglQAAgKgFgFQgEgFgJAAIgKABIAAA4IgUAAIAAhGQAOgDANAAQARAAAHAFQAJAEAEAHQADAHAAAMIAAAmg");
	this.shape_6.setTransform(116.3,106.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAyIAAhAIATAAIAABAgAAAAWIAAgNQAAgFABgEQACgDAFgGIABgDQAEgEAAgIIAAgJIgsAAIAAgQIA/AAIAAASIgBAPQgBAFgDAEIgCAFIgFAGIgBAGIAAAMg");
	this.shape_7.setTransform(108.1,107.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_8.setTransform(102.1,107.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAyQABgKAGgJQAFgJAQgPIAPgPQAEgGAAgGQAAgHgDgDQgEgDgGAAQgFAAgDADQgEAEAAAIIgUgCQACgQAJgGQAJgHANAAQAPAAAIAIQAJAIAAAMQAAAGgDAGQgCAHgGAFIgMANIgLALIgEAFIAmAAIAAASg");
	this.shape_9.setTransform(92.2,104.9);

	this.instance = new lib.dractivechoosenames();
	this.instance.parent = this;
	this.instance.setTransform(285.1,56.3,1,1,0,0,0,0,30.8);

	this.textinputplayer1 = new lib.an_TextInput({'id': 'textinputplayer1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.textinputplayer1.setTransform(460,140.3,1.5,1.5,0,0,0,50,11.1);

	this.textinputplayer2 = new lib.an_TextInput({'id': 'textinputplayer2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.textinputplayer2.setTransform(110,140.2,1.5,1.5,0,0,0,50,11);

	this.startbtn = new lib.Symbol2();
	this.startbtn.parent = this;
	this.startbtn.setTransform(226.1,206,1,1,0,0,0,45.5,15);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, ספורט, 1, היסטוריה, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(348.1,205.2,1.24,1.359,0,0,0,50.1,11.1);

	this.instance_1 = new lib.player2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.1,439.9,1.676,1.676,0,0,0,35.4,100.6);

	this.instance_2 = new lib.player1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,430.4,1.673,1.673,0,0,0,59,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.mycb},{t:this.startbtn},{t:this.textinputplayer2},{t:this.textinputplayer1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-145.6,-97.8,699,723), null);


(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*	end.replaybtn.addEventListener("click", replayfunc);
			end.replaybtn.cursor = "pointer";
		
		replayfunc();
			
				
		function replayfunc() {
		
		
		stage.getChildByName("end").visible = false;
			
			
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 2
	this.replaybtn = new lib.replaybtn_1();
	this.replaybtn.parent = this;
	this.replaybtn.setTransform(-69.7,190.5);
	new cjs.ButtonHelper(this.replaybtn, 0, 1, 2, false, new lib.replaybtn_1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzA6QgUgWAAgjQAAgkAUgWQAUgWAfAAQATAAAQAJQAQAIAKASQALASAAAbQAAAWgIARQgIASgQALQgRALgXAAQgfAAgUgWgAgegoQgLAQAAAZQAAAaALAPQALAPATAAQAVAAALgQQAKgQAAgZQAAgagLgPQgLgPgUAAQgUAAgKAQg");
	this.shape.setTransform(175.3,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAnIAAhNIAbAAIAABNg");
	this.shape_1.setTransform(163.2,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAnIAAhNIAbAAIAABNg");
	this.shape_2.setTransform(155.9,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFBMIAAgWIAyAAIAAgtQAAgYgCgLQgCgLgGgIQgHgHgLAAQgPAAgLARQgLAQgJAnIgKA4IgcAAIAMg7IAHgcIgYg+IAbAAIAMAhQAGgPAPgKQAOgKAQAAQASAAANAJQAMAJAGARQAGARgBAhIAABCg");
	this.shape_3.setTransform(142.9,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRBIIAFgUQAHACAKAAQAKAAADgEQAEgEAAgMIAAhVQgMAAgTACIgCgWQAhgFAhAAQAiAAASAGQATAGAKAPQAKAPAAAdIAABRIgcAAIAAhKQAAgVgEgLQgDgKgLgGQgLgHgaAAIgOABIAABaQAAAOgDAIQgCAHgJAFQgIAFgRAAQgOAAgNgFg");
	this.shape_4.setTransform(124.2,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCBMIAAiSQAfgFAaAAQAbAAARAIQASAIAHAOQAHANAAAZIAABTgAgmgyIAABoIBNAAIAAg6QAAgRgEgKQgDgJgMgGQgLgGgUAAQgMAAgPACg");
	this.shape_5.setTransform(106.7,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmBLIg6hQQgNAGgDAWIgGA0IgdAAIAHg0QAEgjAagNIgkgxIAiAAIAwBDQAJgGAEgHQADgHACgRIAEgeIAcAAIgDAfQgDAUgGANQgHALgRAKIAuBAg");
	this.shape_6.setTransform(81.6,35.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhQBIIAEgUQAHACAKAAQAKAAADgEQAEgEAAgMIAAhVQgMAAgTACIgCgWQAhgFAiAAQAhAAASAGQATAGAKAPQAKAPAAAdIAABRIgcAAIAAhKQAAgVgEgLQgDgKgLgGQgMgHgZAAIgOABIAABaQAAAOgCAIQgDAHgJAFQgIAFgQAAQgOAAgNgFg");
	this.shape_7.setTransform(62.7,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFBMIAAgWIAyAAIAAgtQAAgYgCgLQgCgLgGgIQgHgHgLAAQgPAAgLARQgLAQgJAnIgKA4IgcAAIAMg7IAHgcIgYg+IAbAAIAMAhQAGgPAPgKQAOgKAQAAQASAAANAJQAMAJAGARQAGARgBAhIAABCg");
	this.shape_8.setTransform(36.3,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgxBBQgSgNgJgYQgJgYAAgnIgCgpIAcAAIAAAYQABAmADAOQAPAAAMgHQAMgIAAgVIADgoIAbAAIgDAvQgBAMgCAGQgCAHgGAGQgFAHgMAFQgNAFgVACQADAPAOAJQANAJATAAQARAAAMgIQANgIAGgNQAGgOACgXIAGhAIAcAAIgFA3QgDAfgIAVQgIAVgTAMQgTANgeAAQgbAAgSgMg");
	this.shape_9.setTransform(17.6,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnBMIAAhQQAAgRgEgKQgDgJgMgGQgLgGgUAAQgMAAgPACIAAB+IgcAAIAAiSQAfgFAaAAQAbAAARAIQASAIAHAOQAHANAAAZIAABTg");
	this.shape_10.setTransform(-1.4,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7BoIAAiOIAbAAIAACOgAACAuIAAgUQAAgQADgJQADgJAIgLIAJgLQAGgHACgHQACgGAAgKIAAgVIhhAAIAAgWIB8AAIAAAlQABAQgDAKQgDAKgIAKIgHAKQgMAPAAARIAAAYg");
	this.shape_11.setTransform(-18.2,38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAlIgHgmIAAgjIAdAAIAAAjIgHAmg");
	this.shape_12.setTransform(-37.7,25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhRBIIAFgUQAIACAIAAQALAAADgEQAEgEAAgMIAAhVQgNAAgRACIgDgWQAhgFAhAAQAiAAATAGQASAGAKAPQAJAPAAAdIAABRIgbAAIAAhKQAAgVgDgLQgEgKgLgGQgMgHgZAAIgOABIAABaQAAAOgDAIQgCAHgIAFQgJAFgRAAQgNAAgOgFg");
	this.shape_13.setTransform(-50.8,35.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNBLIAAiVIAbAAIAACVg");
	this.shape_14.setTransform(-63.1,35.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhBBDIAGgWQAPAJAVAAQAZAAARgOQASgOAAgbQAAgYgOgPQgOgPgXAAQgMAAgLADIAAAcQgBARATAAQAHAAAEgCIADATQgIAEgLAAQgTAAgKgKQgLgJAAgUIAAgsQAZgIAcAAQAgAAAXATQAWAUAAAlQAAAjgXAWQgXAWgoAAQgdAAgQgLg");
	this.shape_15.setTransform(-74.7,35.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzA6QgUgWAAgjQAAgkAUgWQAUgWAfAAQATAAAQAJQAQAIAKASQALASAAAbQAAAWgIARQgIASgQALQgRALgXAAQgfAAgUgWgAgegoQgLAQAAAZQAAAaALAPQALAPATAAQAVAAALgQQAKgQAAgZQAAgagLgPQgLgPgUAAQgUAAgKAQg");
	this.shape_16.setTransform(-91.5,35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAnIAAhNIAbAAIAABNg");
	this.shape_17.setTransform(-103.6,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhCBMIAAiSQAfgFAaAAQAbAAARAIQASAIAHAOQAHANAAAZIAABTgAgmgyIAABoIBNAAIAAg6QAAgRgEgKQgDgJgMgGQgLgGgUAAQgMAAgPACg");
	this.shape_18.setTransform(-116,35.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiBMIAAhKQAAgTgEgLQgFgKgMgHQgNgHgWAAQgPAAgWADIgCgXQAWgDATAAQAtAAATASQASARAAAkIAABQg");
	this.shape_19.setTransform(-141.5,35.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAmBLIg6hQQgNAGgDAWIgGA0IgdAAIAHg0QAEgjAagNIgkgxIAiAAIAwBDQAJgGAEgHQADgHACgRIAEgeIAcAAIgDAfQgDAUgGANQgHALgRAKIAuBAg");
	this.shape_20.setTransform(-156.2,35.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBBQgSgNgJgYQgJgYAAgnIgCgpIAcAAIAAAYQABAmADAOQAPAAAMgHQAMgIAAgVIADgoIAbAAIgDAvQgBAMgCAGQgCAHgGAGQgFAHgMAFQgNAFgVACQADAPAOAJQANAJATAAQARAAAMgIQANgIAGgNQAGgOACgXIAGhAIAcAAIgFA3QgDAfgIAVQgIAVgTAMQgTANgeAAQgbAAgSgMg");
	this.shape_21.setTransform(-175.2,35.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAlIgHgmIAAgjIAdAAIAAAjIgHAmg");
	this.shape_22.setTransform(-188.3,25.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOBoIAAgdIAdAAIAAAdgAgHA0IgIhtIAAguIAfAAIAAAuIgHBtg");
	this.shape_23.setTransform(-195.2,32.3);

	this.instance = new lib.player2();
	this.instance.parent = this;
	this.instance.setTransform(230,210,0.7,0.7,0,0,0,35.3,102.6);

	this.instance_1 = new lib.player1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-247,211.2,0.7,0.7,0,0,0,59.1,107);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoAuQgPgRAAgdQAAgbAPgSQAQgRAYAAQAPAAAMAHQAMAGAIAOQAJAPAAAUQAAASgHAOQgGAOgNAIQgMAJgSAAQgYAAgQgRgAgYgfQgHANgBASQAAAVAJAMQAIAMAPAAQARAAAIgNQAHgMABgUQAAgUgJgMQgIgNgQAAQgPAAgJAOg");
	this.shape_24.setTransform(8.1,-6.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAfIAAg9IAVAAIAAA9g");
	this.shape_25.setTransform(-1.3,-9.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgqA6IADgTQAKADALAAQANAAAIgFQAIgFAEgKQAFgJABgNQAAgRgLgNQgKgLgSAAQgLgBgKAEIgDgTQANgDAKAAQAdAAAQARQASARgBAaQAAARgHAOQgHANgOAJQgOAIgUAAQgKABgNgEg");
	this.shape_26.setTransform(-9.5,-6.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKA7IAAh1IAVAAIAAB1g");
	this.shape_27.setTransform(-17.6,-6.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgzA8IAAhzQAYgEAUAAQAVAAAOAGQANAHAGALQAFAKAAAUIAABBgAgegnIAABRIA8AAIAAgtQAAgNgCgIQgDgHgJgFQgJgFgPAAQgKAAgMACg");
	this.shape_28.setTransform(-27.2,-6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpAvQgQgRgBgeQABgcAQgSQAPgSAaAAQAPABAOAGQAMAHAIAOQAKAQgBAUQAAATgGAOQgHAOgNAJQgOAJgSgBQgaAAgPgRgAgYghQgJAOAAATQAAAWAJAMQAJAMAPAAQARAAAIgNQAJgNAAgUQAAgVgJgNQgJgMgQAAQgQAAgIANg");
	this.shape_29.setTransform(143.2,-35.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAgIAAg/IAXAAIAAA/g");
	this.shape_30.setTransform(133.3,-38.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLAgIAAg/IAXAAIAAA/g");
	this.shape_31.setTransform(127.4,-38.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA+IAAgSIApAAIAAgkIgBgdQgBgJgGgGQgFgGgJAAQgNAAgIAOQgKANgGAgIgJAtIgWAAIAKgvIAFgYIgTgzIAWAAIAJAbQAGgMALgIQALgIANAAQAOAAALAHQAKAIAFANQAFAOAAAbIAAA2g");
	this.shape_32.setTransform(116.9,-35.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhBA6IAEgQQAFACAIAAQAIAAADgEQADgDAAgJIAAhFQgKAAgPABIgCgSQAbgEAbABQAcAAAPAEQAPAFAHAMQAIAMAAAYIAABBIgWAAIAAg7QAAgSgDgIQgDgIgJgGQgJgEgUAAIgLAAIAABJQAAALgDAGQgCAGgHAEQgHAEgOABQgLgBgKgEg");
	this.shape_33.setTransform(101.7,-35.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag1A+IAAh2QAZgFAVAAQAWAAAOAHQAOAHAGALQAFALAAATIAABEgAgfgoIAABUIA/AAIAAgvQAAgOgDgIQgDgHgJgFQgJgFgQAAIgXACg");
	this.shape_34.setTransform(87.4,-35.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAeA9IguhBQgLAFgCASIgFAqIgXAAIAFgqQAEgdAUgKIgcgoIAbAAIAmA3QAIgFADgGQADgGACgOIACgYIAYAAIgEAZQgBAQgFALQgHAJgNAIIAlA0g");
	this.shape_35.setTransform(67.1,-35.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhBA6IAEgQQAFACAIAAQAIAAADgEQADgDAAgJIAAhFQgKAAgPABIgCgSQAbgEAbABQAcAAAPAEQAPAFAHAMQAIAMAAAYIAABBIgWAAIAAg7QAAgSgDgIQgDgIgJgGQgJgEgUAAIgLAAIAABJQAAALgDAGQgCAGgHAEQgHAEgOABQgLgBgKgEg");
	this.shape_36.setTransform(51.7,-35.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEA+IAAgSIAoAAIAAgkIgBgdQgCgJgFgGQgGgGgIAAQgNAAgJAOQgIANgHAgIgJAtIgXAAIAKgvIAGgYIgTgzIAWAAIAJAbQAFgMAMgIQALgIAOAAQANAAALAHQAKAIAFANQAFAOAAAbIAAA2g");
	this.shape_37.setTransform(30.4,-35.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnA1QgPgLgHgUQgIgTAAgfIgCgiIAXAAIABAUQAAAfACALQANAAAKgGQAKgGAAgRIACghIAWAAIgDAmQgBAKgBAGQgCAFgFAEQgDAGgLAEQgKAFgRABQADAMAKAIQALAHAQAAQANAAAKgHQALgHAFgKQAFgLABgSIAFg1IAXAAIgEAuQgDAYgGARQgHARgPALQgQAKgYAAQgWAAgOgKg");
	this.shape_38.setTransform(15.2,-35.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAgA+IAAhBQAAgOgDgIQgDgHgJgFQgJgFgQAAIgXACIAABmIgWAAIAAh2QAZgFAVAAQAWAAAOAHQAOAHAGALQAFALAAATIAABEg");
	this.shape_39.setTransform(-0.3,-35.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgwBVIAAhzIAWAAIAABzgAACAmIAAgRQAAgMACgIQACgHAHgJIAHgJQAFgGACgFQACgFAAgJIAAgQIhPAAIAAgTIBlAAIAAAfQAAANgCAIQgDAIgGAIIgGAIQgKAMAAAOIAAAUg");
	this.shape_40.setTransform(-13.9,-33.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAcA+IAAg8QAAgQgEgJQgDgIgKgFQgLgFgRgBQgNAAgSADIgCgTQASgDAQAAQAkAAAQAPQAPAOgBAdIAABBg");
	this.shape_41.setTransform(-34.1,-35.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAeA9IguhBQgLAFgCASIgFAqIgXAAIAFgqQAEgdAUgKIgdgoIAcAAIAnA3QAHgFADgGQACgGADgOIADgYIAWAAIgDAZQgBAQgGALQgFAJgOAIIAlA0g");
	this.shape_42.setTransform(-46,-35.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnA1QgPgLgHgUQgIgTAAgfIgCgiIAXAAIABAUQAAAfACALQANAAAKgGQAKgGAAgRIACghIAWAAIgDAmQgBAKgBAGQgCAFgFAEQgDAGgLAEQgKAFgRABQADAMAKAIQALAHAQAAQANAAAKgHQALgHAFgKQAFgLABgSIAFg1IAXAAIgEAuQgDAYgGARQgHARgPALQgQAKgYAAQgWAAgOgKg");
	this.shape_43.setTransform(-61.5,-35.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhBA6IADgQQAHACAHAAQAIAAADgEQADgDAAgJIAAhFQgKAAgOABIgDgSQAbgEAbABQAcAAAOAEQAPAFAJAMQAHAMABAYIAABBIgXAAIAAg7QAAgSgDgIQgCgIgKgGQgJgEgVAAIgKAAIAABJQgBALgCAGQgCAGgHAEQgHAEgOABQgKgBgLgEg");
	this.shape_44.setTransform(-84.8,-35.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgKA9IAAh5IAVAAIAAB5g");
	this.shape_45.setTransform(-94.9,-35.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag1A3IAGgSQALAHASAAQATAAAPgLQAOgMAAgVQAAgUgMgMQgLgMgRAAQgLAAgJACIAAAWQAAAPAOAAQAGAAAEgCIADAPQgHADgJAAQgQAAgIgIQgJgHAAgQIAAgkQAUgGAWAAQAbAAASAQQASAPAAAeQAAAdgSASQgTARghAAQgWAAgOgIg");
	this.shape_46.setTransform(-104.2,-35.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpAvQgQgRgBgeQABgcAQgSQAPgSAaAAQAQABANAGQAMAHAIAOQAKAQgBAUQAAATgGAOQgHAOgNAJQgOAJgSgBQgaAAgPgRgAgYghQgJAOAAATQAAAWAJAMQAJAMAPAAQASAAAHgNQAJgNAAgUQAAgVgJgNQgJgMgQAAQgQAAgIANg");
	this.shape_47.setTransform(-117.9,-35.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKAgIAAg/IAVAAIAAA/g");
	this.shape_48.setTransform(-127.7,-38.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag1A+IAAh2QAZgFAVAAQAWAAAOAHQAOAHAGALQAFALAAATIAABEgAgfgoIAABUIA/AAIAAgvQAAgOgDgIQgDgHgJgFQgJgFgQAAIgXACg");
	this.shape_49.setTransform(-137.8,-35.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#336699").s().p("AAQAgIAAgfQAAgJgCgDQgDgFgEgDQgGgBgJAAIgSABIgBgJQALgCAKAAQASgBAIAIQAHAHAAAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_50.setTransform(32.9,-83.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#336699").s().p("AgCAgIAAgKIAUAAIAAgSIgBgOQAAgFgDgDQgDgDgEAAQgGAAgEAHQgEAHgEAPIgEAYIgMAAIAGgZIACgKIgJgaIAKAAIAFANQADgGAGgEQAFgFAGABQAIAAAFADQAFAEACAHQACAHABANIAAAcg");
	this.shape_51.setTransform(25.5,-83.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#336699").s().p("AgOAgIAAgKIASAAIAAgeIgBgHQAAgCgDgCQgCgCgEAAIgGABIgBgJQAEgBAFAAQAIAAAEACQAEADABAFQACAFAAAHIAAAog");
	this.shape_52.setTransform(19.7,-83.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#336699").s().p("AgVAfIAAgKIAeAAIghgzIANAAIAQAbQAEgDACgDQACgEAAgHIABgKIALAAIAAALIgCAJQgBAEgDADQgDADgHADIAOAVIAAAHg");
	this.shape_53.setTransform(14.6,-83);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#336699").s().p("AAQAgIAAghQAAgHgCgEQgBgEgFgCQgEgDgIABIgLAAIAAA0IgLAAIAAg8QAMgCALAAQAKgBAHAEQAHADADAGQADAFAAALIAAAig");
	this.shape_54.setTransform(8.5,-83.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#336699").s().p("AgFAfIAAgMIALAAIAAAMgAgFgSIAAgMIALAAIAAAMg");
	this.shape_55.setTransform(3.2,-83);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAhQgKgGgEgNQgFgMAAgTIgBgWIAOAAIABANIABAaQAIAAAGgDQAGgEAAgLIACgVIANAAIgCAZIgBAJIgEAGQgCADgGADQgHADgLABQACAHAHAFQAHAFAJAAQAIAAAHgEQAGgFADgGQADgHABgMIAEghIAOAAIgDAdQgCAPgEALQgEALgJAGQgKAHgPAAQgNAAgJgHg");
	this.shape_56.setTransform(20.8,-107.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAUAnIAAgpQAAgIgCgFQgCgFgGgDQgFgDgKAAIgOABIAABAIgOAAIAAhLQAQgCANAAQANAAAJAEQAJAEADAHQAEAHAAANIAAAqg");
	this.shape_57.setTransform(11.1,-108);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgeA2IAAhJIAOAAIAABJgAABAYIAAgLQAAgIABgFQACgEAEgFIAFgGQADgEABgDIABgJIAAgKIgxAAIAAgMIA/AAIAAATQAAAJgCAFQgBAFgEAFIgEAFQgGAHAAAJIAAANg");
	this.shape_58.setTransform(2.6,-106.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_59.setTransform(-3.5,-106.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_60.setTransform(-14.3,-109.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgpAvQgRgRABgdQgBgdARgSQAQgSAZAAQAQAAANAHQAMAHAJAOQAJAQAAAVQgBARgGAOQgHAPgNAJQgOAJgSAAQgZAAgQgSgAgYggQgJANAAAUQAAAVAJAMQAJAMAPAAQASAAAHgNQAJgNAAgUQAAgVgJgMQgJgNgQAAQgQAAgIAOg");
	this.shape_61.setTransform(141.2,-34.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFA+IAAgTIApAAIAAgkIgBgcQgBgJgGgGQgGgGgIAAQgNAAgIANQgJAOgHAfIgJAuIgXAAIALgwIAFgXIgTgyIAWAAIAJAbQAFgMAMgJQALgIANAAQAPAAAKAHQALAIAEAOQAFAOAAAaIAAA2g");
	this.shape_62.setTransform(114.9,-34.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhCA6IAFgQQAFACAIAAQAIAAADgEQADgDAAgJIAAhGQgKAAgPACIgBgSQAagDAcgBQAbAAAPAGQAPAEAHAMQAJANgBAXIAABCIgWAAIAAg9QAAgRgDgIQgCgIgKgFQgJgGgUAAIgMAAIAABKQAAAMgCAFQgCAHgHADQgHAFgNAAQgMAAgLgFg");
	this.shape_63.setTransform(99.7,-34.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag1A+IAAh3QAZgEAVAAQAWAAAOAHQAOAGAGALQAFALAAAVIAABDgAgfgoIAABTIA/AAIAAguQAAgOgDgHQgDgJgJgEQgJgFgQABIgXABg");
	this.shape_64.setTransform(85.4,-34.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhCA6IAFgQQAFACAIAAQAIAAADgEQADgDAAgJIAAhGQgKAAgPACIgBgSQAagDAcgBQAbAAAPAGQAPAEAHAMQAJANgBAXIAABCIgWAAIAAg9QAAgRgDgIQgCgIgKgFQgJgGgUAAIgMAAIAABKQAAAMgCAFQgCAHgHADQgHAFgNAAQgMAAgLgFg");
	this.shape_65.setTransform(49.7,-34.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFA+IAAgTIApAAIAAgkIgBgcQgCgJgFgGQgGgGgIAAQgNAAgJANQgJAOgGAfIgJAuIgWAAIAKgwIAFgXIgTgyIAWAAIAJAbQAFgMAMgJQALgIAOAAQAOAAAKAHQAKAIAFAOQAFAOAAAaIAAA2g");
	this.shape_66.setTransform(28.4,-34.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgnA0QgPgKgHgTQgIgUAAgfIgCgiIAXAAIABAUQAAAeACAMQANAAAKgGQAKgGAAgRIACghIAWAAIgDAmQgBALgBAEQgCAFgFAFQgDAGgLAEQgKAEgRABQADANAKAHQALAIAQAAQANAAAKgHQALgGAFgLQAFgLABgTIAFg0IAXAAIgEAtQgDAZgGARQgHARgPAKQgQALgYAAQgWAAgOgLg");
	this.shape_67.setTransform(13.2,-34);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAgA+IAAhBQAAgOgDgHQgDgJgJgEQgJgFgQABIgXABIAABmIgWAAIAAh3QAZgEAVAAQAWAAAOAHQAOAGAGALQAFALAAAVIAABDg");
	this.shape_68.setTransform(-2.3,-34.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAcA+IAAg8QAAgQgEgIQgEgJgJgGQgLgEgSAAQgMAAgSACIgBgTQARgDAQAAQAlAAAOAOQAPAPAAAdIAABBg");
	this.shape_69.setTransform(-36.1,-34.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAeA9IguhBQgLAFgCASIgFAqIgXAAIAFgqQADgdAVgKIgdgoIAcAAIAnA3QAHgFADgGQADgGABgOIAEgYIAWAAIgCAZQgCAQgGALQgFAJgOAIIAlA0g");
	this.shape_70.setTransform(-48,-34.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgnA0QgPgKgHgTQgIgUAAgfIgCgiIAXAAIABAUQAAAeACAMQANAAAKgGQAKgGAAgRIACghIAWAAIgDAmQgBALgBAEQgCAFgFAFQgDAGgLAEQgKAEgRABQADANAKAHQALAIAQAAQANAAAKgHQALgGAFgLQAFgLABgTIAFg0IAXAAIgEAtQgDAZgGARQgHARgPAKQgQALgYAAQgWAAgOgLg");
	this.shape_71.setTransform(-63.5,-34);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhBA6IADgQQAHACAHAAQAIAAADgEQADgDAAgJIAAhGQgKAAgPACIgCgSQAbgDAbgBQAbAAAPAGQAPAEAJAMQAHANAAAXIAABCIgWAAIAAg9QAAgRgDgIQgDgIgJgFQgJgGgUAAIgLAAIAABKQAAAMgDAFQgCAHgHADQgHAFgOAAQgLAAgKgFg");
	this.shape_72.setTransform(-86.8,-34.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag1A3IAGgSQAMAHARAAQATAAAPgLQAOgMAAgVQAAgUgMgMQgLgMgRAAQgKAAgKACIAAAWQAAAPAOAAQAGAAAEgCIACAPQgHADgIAAQgQAAgIgIQgJgHAAgQIAAgkQAVgGAWAAQAaAAATAQQARAPABAeQAAAdgTASQgTARghAAQgXAAgNgIg");
	this.shape_73.setTransform(-106.2,-34.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgpAvQgRgRABgdQgBgdARgSQAQgSAZAAQAPAAANAHQANAHAJAOQAIAQABAVQgBARgGAOQgHAPgNAJQgOAJgSAAQgZAAgQgSgAgZggQgIANAAAUQAAAVAJAMQAJAMAPAAQASAAAHgNQAJgNAAgUQAAgVgJgMQgJgNgQAAQgQAAgJAOg");
	this.shape_74.setTransform(-119.9,-34.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag1A+IAAh3QAZgEAVAAQAWAAAOAHQAOAGAGALQAFALAAAVIAABDgAgfgoIAABTIA/AAIAAguQAAgOgDgHQgDgJgJgEQgJgFgQABIgXABg");
	this.shape_75.setTransform(-139.8,-34.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAUAnIAAgmQAAgLgCgFQgDgGgHgCQgGgDgMAAQgKAAgMACIgBgMQANgCANAAQAXAAAJAJQAJAJAAASIAAApgAggAnIAAgrIAOAAIAAArg");
	this.shape_76.setTransform(41.1,-72.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAnIAAgLIAZAAIAAgXIgBgSQgBgGgDgEQgEgDgFAAQgIAAgFAIQgGAJgEATIgFAdIgPAAIAHgeIADgOIgMggIAOAAIAGARQADgIAHgFQAHgFAIAAQAJAAAGAEQAHAFADAJQADAIAAARIAAAig");
	this.shape_77.setTransform(31.8,-72.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAnIAAgLIAXAAIAAgmIgBgJQgBgDgDgCQgCgCgGAAIgIAAIgBgLQAFgBAHAAQAJAAAGADQAFAEACAGQACAFAAAKIAAAxg");
	this.shape_78.setTransform(24.6,-72.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbAnIAAgMIAnAAIgqhBIAQAAIAUAjQAGgEACgFQADgFgBgIIABgNIAPAAIgBAOIgBALQgCAFgEAEQgDAEgJAFIAQAZIAAAJg");
	this.shape_79.setTransform(18.3,-72.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_80.setTransform(4,-72.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAUAnIAAgpQAAgIgCgFQgCgFgGgDQgFgDgKAAIgOABIAABAIgOAAIAAhLQAQgCANAAQANAAAJAEQAJAEADAHQAEAHAAANIAAAqg");
	this.shape_81.setTransform(13.7,-110);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgJQAQgOAHgHQAGgJAAgHQAAgIgFgGQgHgFgJAAQgIAAgGAGQgFAFAAAKIgOgBQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAJAAAMQAAAHgDAFQgDAHgGAGQgGAHgPAMIgNANQgEADgCAEIA0AAIAAANg");
	this.shape_82.setTransform(-11.3,-111.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_1,p:{scaleX:0.7,scaleY:0.7,x:-247,y:211.2}},{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.replaybtn}]}).to({state:[{t:this.shape_60},{t:this.shape_59,p:{x:-3.5,y:-106.4}},{t:this.shape_58,p:{x:2.6,y:-106.4}},{t:this.shape_57,p:{x:11.1,y:-108}},{t:this.shape_56,p:{x:20.8,y:-107.8}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:292.3,y:169.1}},{t:this.shape_49},{t:this.shape_48,p:{x:-127.7,y:-38.8}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-94.9,y:-35.9}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:-46,y:-35.9}},{t:this.shape_41},{t:this.shape_40,p:{x:-13.9,y:-33.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:127.4,y:-38.8}},{t:this.shape_30,p:{x:133.3,y:-38.8}},{t:this.shape_29}]},1).to({state:[{t:this.shape_82},{t:this.shape_59,p:{x:-0.9,y:-108.5}},{t:this.shape_58,p:{x:5.2,y:-108.5}},{t:this.shape_81},{t:this.shape_56,p:{x:23.4,y:-109.9}},{t:this.shape_80},{t:this.shape_57,p:{x:10.6,y:-72.2}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_48,p:{x:-129.7,y:-37.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_45,p:{x:-96.9,y:-34.2}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_40,p:{x:-15.9,y:-31.9}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_42,p:{x:65.1,y:-34.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_31,p:{x:125.4,y:-37.2}},{t:this.shape_30,p:{x:131.3,y:-37.2}},{t:this.shape_61}]},1).wait(1));

	// Layer 1
	this.t2 = new cjs.Text("", "14px 'Arial'");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 18;
	this.t2.lineWidth = 116;
	this.t2.parent = this;
	this.t2.setTransform(-151.9,140.2);

	this.g2 = new cjs.Text("", "14px 'Arial'");
	this.g2.name = "g2";
	this.g2.textAlign = "center";
	this.g2.lineHeight = 18;
	this.g2.lineWidth = 116;
	this.g2.parent = this;
	this.g2.setTransform(-151.9,84.2);

	this.t1 = new cjs.Text("", "14px 'Arial'");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 18;
	this.t1.lineWidth = 116;
	this.t1.parent = this;
	this.t1.setTransform(136.1,140.2);

	this.g1 = new cjs.Text("", "14px 'Arial'");
	this.g1.name = "g1";
	this.g1.textAlign = "center";
	this.g1.lineHeight = 18;
	this.g1.lineWidth = 116;
	this.g1.parent = this;
	this.g1.setTransform(136.1,84.2);

	this.instance_2 = new lib.player2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-274.5,177.2,1,1,0,0,0,35.3,102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.g1,p:{x:136.1,y:84.2,font:"14px 'Arial'",lineHeight:17.6}},{t:this.t1,p:{x:136.1,y:140.2,font:"14px 'Arial'",lineHeight:17.6}},{t:this.g2,p:{x:-151.9,y:84.2,font:"14px 'Arial'",lineHeight:17.6}},{t:this.t2,p:{x:-151.9,y:140.2,font:"14px 'Arial'",lineHeight:17.6}}]}).to({state:[{t:this.g1,p:{x:145.1,y:17.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.t1,p:{x:145.1,y:73.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.g2,p:{x:-142.9,y:17.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.t2,p:{x:-142.9,y:73.2,font:"12px 'Arial'",lineHeight:15.35}}]},1).to({state:[{t:this.g1,p:{x:147.1,y:24.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.t1,p:{x:147.1,y:80.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.g2,p:{x:-140.9,y:24.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.t2,p:{x:-140.9,y:80.2,font:"12px 'Arial'",lineHeight:15.35}},{t:this.instance_2}]},1).wait(1));

	// Layer 3
	this.instance_3 = new lib._final();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-452,-470,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452,-470,895.7,842);


// stage content:
(lib._31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this;
		
		var nextTurn = 'X'
		
		var playerName1 = "";
		var playerName2 = "";
		
		//מערך לציונים
		var try1 = [];
		var try2 = [];
		var isAnswered1 = [];
		var isAnswered2 = [];
		
		
		//Sound Effect
		init()
		
		function init() {
			//לטעון את הסאונד - נתיב + שם
			createjs.Sound.registerSound("/sounds/GoodSound.mp3", "Good");
			createjs.Sound.registerSound("/sounds/back.mp3", "backmusic");
			createjs.Sound.registerSound("/sounds/badGood.mp3", "LessGood");
		
		}
		
		var QPositions = [ // מערך למיקומי המסיחים
			[350, 450],
			[600, 450],
			[350, 250],
			[600, 250],
		];
		
		/*הנושא הנבחר
		  mychoice -1*/
		
		// איזה מספר שאלה להציג
		var qnum = -1;
		
		//כמות המסיחים שיש בשאלה וצריך להציג
		//var cuntOptions = 0;
		
		
		//גודל הבמה
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		//הטיימר
		var timer;
		
		//כמות התשובות הנכונות שהמשתמש ענה
		var correctAnswer = 0;
		var correctAnswer1 = 0;
		var correctAnswer2 = 0;
		
		//הוספת הקומבו לבמה
		var forcombo;
		
		//בחירת משחק
		
		//שימו לב, מערך זה משמש רק להצגת הנושאים בתוך תיבת הטקסט
		//את הערכים שמוצגים בקומבו עצמו, יש להגדיר בתוך הקומפוננטה - לחיצה כפולה עליה בלייבררי, המקרה שלנו:
		//forcomb -> click on the combobox componenet -> component parameters
		//משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
		var mychoice = 0;
		upadateEvents();
		
		//שמות השחקנים
		function upadateEvents() {
		
			forcombo = new lib.forcomb();
			forcombo.x = 200;
			forcombo.y = 150;
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		
			if (!this.input1_change_cbk) {
				function input1_change(evt) {
		
					playerName1 = evt.target.value;
					if (playerName1 != "" && playerName2 != "" && mychoice != 0) {
						forcombo.startbtn.alpha = 1;
						forcombo.startbtn.addEventListener("click", topic_ClickToPosition);
					} else {
						forcombo.startbtn.alpha = 0.3;
						forcombo.startbtn.removeEventListener("click", topic_ClickToPosition);
					}
				}
				$("#dom_overlay_container").on("keyup", "#textinputplayer1", input1_change.bind(this));
				//$("#textinputplayer1").css("font-size","15pt");
				this.input1_change_cbk = true;
			}
		
			if (!this.input2_change_cbk) {
				function input2_change(evt) {
		
					playerName2 = evt.target.value;
					if (playerName1 != "" && playerName2 != "" && mychoice != 0) {
						forcombo.startbtn.alpha = 1;
						forcombo.startbtn.addEventListener("click", topic_ClickToPosition);
					} else {
						forcombo.startbtn.alpha = 0.3;
						forcombo.startbtn.removeEventListener("click", topic_ClickToPosition);
					}
				}
				$("#dom_overlay_container").on("keyup", "#textinputplayer2", input2_change.bind(this));
				this.input2_change_cbk = true;
			}
		
		}
		
		
		
		
		var topic = new createjs.Text();
		topic.x = (stageW / 2);
		topic.y = 50;
		topic.color = "black";
		topic.font = "12px Arial";
		topic.textAlign = "center";
		stage.addChild(topic);
		
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			topic.text = ""; //ניקוי הבחירה הקודמת
			//שימרת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", topic_ClickToPosition);
			} else if (playerName1 != "" && playerName2 != "") {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", topic_ClickToPosition);
			}
		
		}
		
		//לחיצה על בחר בקומבו
		function topic_ClickToPosition() {
		
			stage.removeChild(forcombo);
		
			Namesign1.playerName.text = playerName1;
			Namesign2.playerName.text = playerName2;
			
			for (i = 0; i < distractors[mychoice - 1].length; i++) {
				try1[i] = 0;
				isAnswered1 [i] = false;
				try2[i] = 0;
				isAnswered2 [i] = false;
			}
		
			startGame();
		
		}
		
		
		
		
		
		//כל תא של המערך יחזיק נתוני השאלה
		//var qustions = ["מה הסיבה העקרית לכך שיש בכדור הארץ עונות שונות","cxnjk"];
		//בשורה של השאלהעם יש "" אין תמונה ואם יש  רשום IMG אז יש
		
		//כל תא של המערך יחזיק נתוני השאלה
		var distractors = [
			//משחק ראשון
			[
		
				// שאלה ראשונה
				//סוג אובייקט, כיתוב
				[
					//שאלה ראשונה
					["?מי היא אלופת העולם לשנת 2017",""],
					["2"],
					["false"],
					["ישראל","text"],
					["גרמניה","text"],
					["ספרד","text"],
					["ארגנטינה","text"]
				],
				// שאלה שניה
				[
					["?מלך השערים של גביע אופא (כולל הליגה האירופית כיום) בכל הזמנים הוא",""],
					["2"],
					["false"],
					["קלאודיו פיזארו","text"],
					["הנריק לארסון","text"],
					["רדאמל פלקאו","text"],
					["קלאס יאן הונטלאר","text"]
				],
				//שאלה שלישית
				[
					["?מי זכתה ביורוליג נכון לשנת 2012",""],
					["4"],
					["false"],
					["אולימפיאקוס","text"],
					["פנאתנייקוס","text"],
					["צ''סקא","text"],
					["מכבי","text"]
				],
				// שאלה רביעית
				[
					["?מי אלופת ליגת העל בכדורגל לשנת 2012",""],
					["3"],
					["false"],
					["עירוני קריית שמונה","text"],
					["הפועל תל אביב","text"],
					["מכבי תל אביב","text"],
					["מכבי חיפה","text"]
				],
				//שאלה חמישית
				[
					["?זוכה כדור הזהב הראשון הוא",""],
					["2"],
					["false"],
					["ריימוד קופה","text"],
					["סטנלי מתאוס","text"],
					["אלפרדו די סטפאנו","text"],
					["מישל פלאטיני","text"]
				],
				// שאלה שישית
				[
					["?מי אלוף הווימבלדון יותר פעמים",""],
					["1"],
					["false"],
					["פיט סאמפרס","text"],
					["רפאל נדאל","text"],
					["גראנד סלאם","text"],
					["רוג'ר פדרר","text"]
				],
				//שאלה שביעית
				//דוגמא לתמונה במסיח
				[
					["?מי זכה בכדור הזהב לשנת 2017",""],
					["4"],
					["false"],
					["ניימאר","text"],
					["בופון","text"],
					[lib.mesii2,"img"],
					["כריסטיאנו רונאלדו","text"]
				],
				// שאלה שמינית
				//דוגמא לתמונה בשאלה
				[
					["?מה השם המלא של מסי",lib.mesii2],
					["1"],
					["false","text"],
					["ליאונל","text"],
					["דויד","text"],
					["פיקה","text"],
					["פויול","text"]
				],
				//שאלה תשיעית
				[
					["?באיזה מהענפים הבאים אין לישראל מדליה אולימפית",""],
					["4"],
					["false","text"],
					["ג'ודו","text"],
					["חתירה","text"],
					["שייט","text"],
					["קפיצה במוט","text"]
				],
				// עשירית שאלה
				[
					["?הטורניר הראשון של נבחרת ישראל בכדורגל אחרי שהיא עזבה את אסיה וחזרה לאירופה",""],
					["3"],
					["false"],
					["מוקדמות מונדיאל 1990","text"],
					["מוקדמות יורו 1990","text"],
					["מוקדמות מונדיאל 1994","text"],
					["מוקדמות יורו 1996","text"]
				]
		
		
			],
			//משחק שני
			[
		
		
				// שאלה ראשונה
				//סוג אובייקט, כיתוב
				[
					["ישראל משתתפת באופן סדיר במשחקים האולימפיים החל משנת 1952 באולימפיאדת הלסינקי. לאחר שלא זכתה במדליה אולימפית בארבעת העשורים הראשונים, מאז שנות ה-90 הצליחה ישראל להגיע להשגיים רבים במשחקים האולימפיים, אני יכול לספור על שתי ידיים, כמה זכיות ישנם ומי הם ?הזוכים",""],
					["4"],
					["false"],
					["שישה - אסתר רוט-שחמורוב, גל פרידמן, אריק זהבי, מרק סלבין, יעל ארד ואורן סמדג'ה","text"],
					["שלושה - יעל ארד, אורן סמדג'ה, גל פרידמן ואריק זאבי","text"],
					["חמישה - יעל ארד, איתן אורבך, יורי יבסייבצ'יק, אריק זהבי ואנסטסיה גלושקוב","text"],
					["חמישה - יעל ארד, אורן סמדג'ה, גל פרידמן, מיכאל קלגנוב ואריק זאבי","text"]
				],
				// שאלה שניה
				[
					["?מי האישה הראשונה שמונתה לנשיאת בית המשפט העליון",""],
					["2"],
					["false"],
					["מטילדה גז","text"],
					["דורית בייניש","text"],
					["אסתר חיות","text"],
					["מרים נאור","text"]
				],
				//שאלה שלישית
				[
					["?מאיזו מדינה הועלו ארצה יהודים במבצע עזרא ונחמיה",""],
					["1"],
					["false"],
					["עירק","text"],
					["אתיופיה","text"],
					["תימן","text"],
					["סודן","text"]
				],
				// שאלה רביעית
				[
					["?איזה אירוע זכה לכינוי המהפך בשנת 1977",""],
					["3"],
					["false"],
					["הבחירות לכנסת הראשונה","text"],
					["בחירות לרשות הממשלה בין פרס ורבין","text"],
					["ניצחון הליכוד בבחירות לכנסת","text"],
					["ניצחון ישראל באליפות אירופה לכדורסל","text"]
				],
				//שאלה חמישית
				[
					["?כמה זמן נמשכה מלחמת השחרור",""],
					["2"],
					["false"],
					["כ-20 ימים","text"],
					["כ-20 חודשים","text"],
					["שלוש שנים","text"],
					["שבוע","text"]
				],
				// שאלה שישית
				[
					["?מי היה רהמ ישראל בעת מלחמת ששת הימים",""],
					["1"],
					["false"],
					["לוי אשכול","text"],
					["יצחק רבין","text"],
					["דוד בן גוריון","text"],
					["משה שרת","text"]
				],
				//שאלה שביעית
				[
					["?איך נקראים ההסכמים בין ישראל למצרים שנחתמו ב-1978",""],
					["3"],
					["false"],
					["אוסלו","text"],
					["בין השלום","text"],
					["הסכמי קמפ דיוויד","text"],
					["מצרים לשלום","text"]
				],
				// שאלה שמינית
				[
					["?מתי התחילה מלחמת ההתשה",""],
					["1"],
					["false"],
					["1969","text"],
					["1986","text"],
					["1990","text"],
					["1967","text"]
				],
				// שאלה תשיעית
				[
					["?מול מי נלחמה ישראל במלחמת ההתשה",""],
					["2"],
					["false"],
					["לבנון","text"],
					["מצרים","text"],
					["ארהב","text"],
					["עזה","text"]
				],
				//שאלה עשירית
				[
					["?מי היתה מלכת היופי הישראלית הראשונה שזכתה בתואר מיס תבל",""],
					["4"],
					["false"],
					["אילנית לוי","text"],
					["אביבה ישראלי","text"],
					["מירי זמיר","text"],
					["רינה מור","text"]
				]
		
		
			]
		
		
		];
		
		
		
		
		
		
		
		
		
		
		
		
		//קוראת אותו בהתחלת המשחק וקוראת לפונקציה אחרת שמגרילה שאלות
		function startGame() {
			//במידה והתחלנו את המשחק מחדש, לאחר סיומו, העלמת כפתורים או פידבק מהסיבוב הקודם
			//toRemove("restartbtn");
			//selfHome.feedback.text = "";
		
			//פתיחת תיבת טקסט לשאלה
			var myQuestion = new createjs.Text();
			myQuestion.x = (stageW / 2);
			myQuestion.y = 90;
			myQuestion.color = "black";
			myQuestion.font = "18px Arial";
			myQuestion.textAlign = "center";
			myQuestion.lineWidth = 650;
			myQuestion.name = "QuestionText";
			stage.addChild(myQuestion);
		
		
			//myRandom();
		createQuestion();
			//קריאה לסאונד רקע
			var playbackmusic = createjs.Sound.play("backmusic");
		
		}
		
		//יצירת הדמויות שחקנים
		var play1 = new lib.player1();
		var play2 = new lib.player2();
		
		stage.addChild(play1)
		play1.name = "play1";
		play1.x = 30
		play1.y = 350
		play1.visible = false;
		
		
		stage.addChild(play2)
		play2.name = "play2";
		play2.x = 825
		play2.y = 350
		play2.visible = false;
		
		//שלטים לשמות
		var Namesign1 = new lib.sign1();
		var Namesign2 = new lib.sign2();
		
		stage.addChild(Namesign1)
		Namesign1.name = "Namesign1";
		Namesign1.x = 150
		Namesign1.y = 500
		Namesign1.visible = false;
		
		
		
		stage.addChild(Namesign2)
		Namesign2.name = "Namesign2";
		Namesign2.x = 710
		Namesign2.y = 500
		Namesign2.visible = false;
		
		
		//עצים יצירת
		var leaf1 = new lib.leaf1();
		var leaf2 = new lib.leaf2();
		
		stage.addChild(leaf1)
		leaf1.name = "leaf1";
		leaf1.x = 775
		leaf1.y = 40
		leaf1.visible = false;
		
		stage.addChild(leaf2)
		leaf2.name = "leaf2";
		leaf2.x = -35
		leaf2.y = 40
		leaf2.visible = false;
		
		
		//יצירת כפתור הבא
		
		var nextClick = new lib.nxtbtn();
		nextClick.x = stageW / 2 - 50;
		nextClick.y = 520;
		nextClick.name = "myNextBtn";
		stage.addChild(nextClick);
		//הגדרת הנראות של הכפתור
		nextClick.visible = false;
		nextClick.addEventListener('click', createQuestion);
		nextClick.cursor = "pointer";
		
		//יצירת טימר לשחקן 1 + 2
		var timer1 = new lib.timer();
		stage.addChild(timer1)
		timer1.name = "timer1";
		timer1.x = 30;
		timer1.y = 86.5;
		timer1.visible = false;
		
		var timer2 = new lib.timer();
		stage.addChild(timer2)
		timer2.name = "timer2";
		timer2.x = 889.55;
		timer2.y = 86.5;
		timer2.visible = false;
		
		var totalTime1 = 0;
		var totalTime2 = 0;
		
		
		
		//פתיחת תיבת טקסט לטיימר של הזמן
		var seconds = new createjs.Text();
		
		seconds.color = "black";
		seconds.font = "12px Arial";
		seconds.textAlign = "center";
		seconds.name = "mySeconds";
		seconds.text = 30;
		stage.addChild(seconds);
		//seconds.visible = false;
		stage.getChildByName("mySeconds").visible = false;
		
		
		//יצירת חלון נגמר הזמן
		var endTime = new lib.finishTime();
		endTime.x = 10;
		endTime.y = 50;
		endTime.name = "theEndTime";
		stage.addChild(endTime);
		endTime.visible = false;
		
		
		
		
		//משתנה לספירת שניות
		var countSeconds = 0;
		
		//סופרת את הטיימר ומקפיצה חלון נגמר הזמן כשצריך
		function stratTimer() {
		
			// יצירת הטיימר
			timer = setInterval(function () {
				//הקטנת התוכן של תיבת הטקסט באחד
				stage.getChildByName("mySeconds").text = parseInt(stage.getChildByName("mySeconds").text) - 1;
				if (qnum % 2 != 0) {
					totalTime1++;
				} else {
					totalTime2++;
				}
		
		
				//אם הטיימר הסתיים
				if (stage.getChildByName("mySeconds").text == -1) {
		
		
					stage.getChildByName("mySeconds").visible = false;
					stage.getChildByName("myNextBtn").visible = true;
					stage.getChildByName("theEndTime").visible = true;
					//endTime.visible = true;
		
					stage.getChildByName("QuestionText").visible = false;
					if (qnum + 1 > 0) {
						//ניטרול המסיחים מהשאלה הקודמת
						for (var i = 3; i < (distractors[mychoice - 1][qnum].length); i++) {
							var current = stage.getChildByName("Balon" + (i - 2));
							stage.removeChild(current);
						}
					}
		
					//nextClick.visible = true;
					//stage.newBalon.visible = false;
					//stage.getChildByName("Balon").visible = false;
					//ביטול הטיימר
					clearInterval(timer);
		
				}
		
		
				countSeconds++;
				//		console.log(countSeconds);
		
			}, 1000);
		
		
		
		}
		
		
		//מגריל שאלה מתוך המערך המתאים
		function myRandom() {
		
			do {
				var rndQ = Math.floor(Math.random() * (distractors[mychoice - 1].length));
		
			}
			while (distractors[mychoice - 1][qnum + 1][2] == "true");
		
		
		
			createQuestion();
		
		
		}
		
		
		
		
		
		
		
		
		
		
		
		
		//הזנת נתונים לשאלה- קורה בלחיצה על כפתור הבא
		function createQuestion() {
		
			/*	for (i = 0; i < distractors[mychoice - 1].length; i++) {
				if (distractors[mychoice - 1][i][2] == "true") {
					clearAll();
				}
			}*/
		
			console.log(distractors[mychoice - 1].length)
			console.log(correctAnswer + "correctAnswer1")
			console.log(qnum)
			
			
			
		if (qnum == distractors[mychoice - 1].length - 1) {
				qnum = 0;
			} else {
				qnum++;
			}
			console.log("qnum " + qnum)
		
			var i = 0;
		
			while (distractors[mychoice - 1][qnum][2] == "true" && i < distractors[mychoice - 1].length) {
				i++;
				
				
				console.log("i " + i)
				if (qnum == distractors[mychoice - 1].length - 1) {
					qnum = 0;
					} else {
						qnum++;
					}
				
			}
			console.log("qnum " + qnum)
			console.log("i " + i)
			//ענו על כל השאלות
			if (i == distractors[mychoice - 1].length) {	
			
			//if (distractors[mychoice - 1].length == qnum + 1) {
				clearAll();
		
				var end = new lib.end();
				stage.addChild(end);
				end.x = (stageW/2);
				end.y = (stageH/2);
				
			
				if (correctAnswer1 == correctAnswer2) {
					end.gotoAndStop(0);
				} else if (correctAnswer1 > correctAnswer2) {
					end.gotoAndStop(1);
				} else if (correctAnswer1 < correctAnswer2) {
					end.gotoAndStop(2);
				}
		
				
				console.log("player1 correct Answer: " + correctAnswer1);
				console.log("player2 correct Answer: " + correctAnswer2);
				
				console.log("isAnswered1: " + isAnswered1);
				console.log("isAnswered2: " + isAnswered2);
				
				console.log("try1: " + try1);
				console.log("try2: " + try2);
				
				var pointsPerQuestion1 = 100 /correctAnswer1;
				var pointsPerQuestion2 = 100 /correctAnswer2;
				
				var grade1 =0;		
				var grade2 =0;		
				
				for(i=0;i<isAnswered1.length; i++){
					if(isAnswered1[i] == true){
						grade1 += pointsPerQuestion1/try1[i];
					}
				}
				
			
				for(i=0;i<isAnswered2.length; i++){
					if(isAnswered2[i] == true){
						grade2 += pointsPerQuestion2/try2[i];
					}
				}
				
		
				end.g1.text = "ציון של שחקן 1 " + grade1;
				end.g2.text = "ציון של שחקן 2 " + grade2; 
				
				
				
				var min1 = parseInt(totalTime1 / 60);
				var sec1 = totalTime1 % 60;
		
				var min2 = parseInt(totalTime2 / 60);
				var sec2 = totalTime2 % 60;
		
				if (min1 < 10) {
					min1 = "0" + min1.toString();
				}
		
				if (min2 < 10) {
					min2 = "0" + min2.toString();
				}
		
				if (sec1 < 10) {
					sec1 = "0" + sec1.toString();
				}
		
				if (sec2 < 10) {
					sec2 = "0" + sec2.toString();
				}
		
				
				//alert("time1: " + min1 + ":" + sec1);
				//alert("time2: " + min2 + ":" + sec2);
				end.t1.text = ":זמן מענה ממוצע " + min1 + ":" + sec1;
				end.t2.text = ":זמן מענה ממוצע " + min2 + ":" + sec2; 
		
			} else {
				if (qnum % 2 != 0) {
					try1[qnum]++ ;
				}else{
					try2[qnum]++ ;
				}
		
				stage.getChildByName("theEndTime").visible = false;
				stage.getChildByName("QuestionText").visible = true;
		
				stage.getChildByName("mySeconds").visible = true;
				stage.getChildByName("mySeconds").text = 30;
				stratTimer();
		
				if (qnum + 1 > 0) {
					//ניטרול המסיחים מהשאלה הקודמת
					for (var i = 3; i < (distractors[mychoice - 1][qnum].length); i++) {
						var current = stage.getChildByName("Balon" + (i - 2));
						stage.removeChild(current);
					}
				}
				stage.removeChild(stage.getChildByName("imageQ"));
				
		
				nextClick.visible = false;
				mycorrectv.visible = false;
				myincorrectx.visible = false;
				play1.visible = true;
				play2.visible = true;
				timer1.visible = true;
				timer2.visible = true;
				Namesign1.visible = true;
				Namesign2.visible = true;
				leaf1.visible = true;
				leaf2.visible = true;
		
				//qnum++;
		
				var thisQuestion = stage.getChildByName("QuestionText");
		
				//הצגת השאלה בתיבת הטקסט
				thisQuestion.text = distractors[mychoice - 1][qnum][0][0];
				if(distractors[mychoice - 1][qnum][0][1] != "" ){
					var imageQ = new (distractors[mychoice - 1][qnum][0][1])();
					imageQ.x = 300;
					imageQ.y = 110;
					imageQ.name ="imageQ";
					stage.addChild(imageQ);
					imageQ.addEventListener("mouseover", fl_MouseOverHandler);
					imageQ.addEventListener("mouseout", fl_MouseOutHandler);
				}
		
		
				for (i = 3; i < distractors[mychoice - 1][qnum].length; i++) {
					//הפונקציה מקבלת שני מספרים, הראשון מייצג את המסיח
					//השני מייצג את המיקום שלו בסדר המסיחים
		
					var newBalon = new lib.balon(); // יצירת מסיח
					newBalon.x = QPositions[i - 3][0];
					newBalon.y = QPositions[i - 3][1];
					//bubble.x = 10 *i
					//bubble.y = 20
					stage.addChild(newBalon);
					newBalon.name = "Balon" + (i - 2);
					stage.addChild(newBalon);
					newBalon.cursor = "pointer";
		
					if(distractors[mychoice - 1][qnum][i][1] == "text"){
						//יצירת תיבת טקסט להצגת המסיח על המסיח
						var output = new createjs.Text();
						output.color = "black";
						output.font = "14px Arial";
						output.textAlign = "center";
						output.lineWidth = 140;
						//פניה לשם מתוך מערך השמות
						output.text = distractors[mychoice - 1][qnum][i][0];
						newBalon.addChild(output);
					}else{
						var output = new (distractors[mychoice - 1][qnum][i][0])();
						newBalon.addChild(output);
						output.addEventListener("mouseover", fl_MouseOverHandler);
						output.addEventListener("mouseout", fl_MouseOutHandler);
					}
		
					newBalon.addEventListener('click', checkAnswar);
				}
		
		
				
				changeTurn();
			}
		}
		
		
		function changeTurn() {
			if (nextTurn == 'X') {
				nextTurn = 'O';
				play1.alpha = 0.1;
				timer1.alpha = 0.1;
				play2.alpha = 1;
				timer2.alpha = 1;
				seconds.x = stageW - 50;
				seconds.y = 100;
			} else {
				nextTurn = 'X';
				play2.alpha = 0.1;
				timer2.alpha = 0.1;
				play1.alpha = 1;
				timer1.alpha = 1;
				seconds.x = 50;
				seconds.y = 100;
		
			}
		}
		
		
		
		
		//תיבת טקסט להצגת הנתונים של המשתמש בסיום המשחק
		//יצירת תיבת טקסט להצגת המסיח על המסיח
		var showData = new createjs.Text();
		showData.color = "#6654BF";
		showData.font = "12px Arial";
		showData.textAlign = "center";
		showData.name = "showData";
		//פניה לשם מתוך מערך השמות
		showData.text = "זמן:" + countSeconds;
		
		
		function clearAll() {
			stage.getChildByName("QuestionText").visible = false;
			stage.getChildByName("mySeconds").visible = false;
			clearInterval(timer);
			stage.getChildByName("myNextBtn").visible = false;
			stage.getChildByName("theEndTime").visible = false;
			stage.getChildByName("play1").visible = false;
			stage.getChildByName("play2").visible = false;
			stage.getChildByName("Namesign1").visible = false;
			stage.getChildByName("Namesign2").visible = false;
		/*	stage.getChildByName("mycorrectv").visible = false;
			stage.getChildByName("myincorrectx").visible = false;*/
			//stage.getChildByName("timer1").visible = false;
			//stage.getChildByName("timer2").visible = false;
			
			
			
		
			if (qnum + 1 > 0) {
				//ניטרול המסיחים מהשאלה הקודמת
				for (var i = 3; i < (distractors[mychoice - 1][qnum].length); i++) {
					var current = stage.getChildByName("Balon" + (i - 2));
					stage.removeChild(current);
				}
			}
			stage.addChild(showData);
		
		
		}
		
		
		
		
		
		//יצירת איקס
		var myincorrectx = new lib.incorrectx();
		myincorrectx.x = 30;
		myincorrectx.y = 520;
		myincorrectx.name = "myincorrectx";
		stage.addChild(myincorrectx);
		//הגדרת הנראות של הכפתור
		myincorrectx.visible = false;
		
		
		
		//יצירת וי
		var mycorrectv = new lib.correctv();
		mycorrectv.x = 30;
		mycorrectv.y = 520;
		mycorrectv.name = "mycorrectv";
		stage.addChild(mycorrectv);
		//הגדרת הנראות של הכפתור
		mycorrectv.visible = false;
		
		
		
		
		//פונציה שמופעלת בלחיצה על המסיח
		function checkAnswar(e) {
		
			//לעצור - קליר אינטרוול
			//לבדוק כמה נשאר לי  30 פחות כמה שיש לי בתיבת הטקסט
			clearInterval(timer);
		
		
		
			var num = parseInt(e.currentTarget.name.slice(5));
			//nextClick.visible = true;
			stage.getChildByName("myNextBtn").visible = true;
		
		
		
			if (num == parseInt(distractors[mychoice - 1][qnum][1])) {
				mycorrectv.visible = true;
				var trueBaloon = stage.getChildByName(e.currentTarget.name);
				mycorrectv.x = (trueBaloon.x) + 30;
				mycorrectv.y = (trueBaloon.y) + 20;
		
		
				distractors[mychoice - 1][qnum][2] = "true";
				console.log(distractors[mychoice - 1][qnum][2]);
				correctAnswer++;
		
		
				//אנימציית צוואר מנצח + משוב מוזיקה
				if (qnum % 2 != 0) {
					correctAnswer1++;
					play1.gotoAndPlay(correctAnswer1 * 2);
					var playfuckingsound = createjs.Sound.play("Good");
					isAnswered1[qnum] = true;
				} else {
					correctAnswer2++;
					play2.gotoAndPlay(correctAnswer2 * 2);
					var playfuckingsound2 = createjs.Sound.play("Good");
					isAnswered2[qnum] = true;
					
				}
				//משוב שלילי
			} else {
				var playbadsound = createjs.Sound.play("LessGood");
		
				myincorrectx.visible = true;
				var untrueBaloon = stage.getChildByName(e.currentTarget.name);
				myincorrectx.x = (untrueBaloon.x) + 30;
				myincorrectx.y = (untrueBaloon.y) + 20;
			}
		
			//ניטרול יתר הכפתורים ברגע שלחצתי על מסיח כלשהו
			for (var i = 3; i < (distractors[mychoice - 1][qnum].length); i++) {
				stage.getChildByName("Balon" + (i - 2)).removeEventListener('click', checkAnswar);
				stage.getChildByName("Balon" + (i - 2)).alpha = 0.5;
			}
		
		
		}
		
		
		
		//אירוע לחיצה לכפתור אודות
		selfHome.myAboutBtn.addEventListener('click', openAbout);
		selfHome.myAboutBtn.cursor = "pointer";
		
		function openAbout() {
			// יצירת מסך אודות
			var AboutScreen = new lib.AboutScreenLib();
			stage.addChild(AboutScreen);
			AboutScreen.name = "aboutScreen";
			AboutScreen.x = stageW / 2;
			AboutScreen.y = stageH / 2;
		
			AboutScreen.hitLink.addEventListener('click', myHitLink);
			AboutScreen.closeAboutBtn.cursor = "pointer";
			AboutScreen.closeAboutBtn.addEventListener('click', closeAbout);
		}
		
		//פונקציה לפתיחת הקישור לאתר המכון
		function myHitLink() {
			window.open("http://www.hit.ac.il/telem/overview");
		}
		
		/// פונקציה לסגירת מסך אודות
		function closeAbout() {
			stage.removeChild(stage.getChildByName("aboutScreen"));
		
		}
		
		//הגדלה של תמונה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_MouseOverHandler(e)
		{
			e.currentTarget.gotoAndStop(1);
			
		}
		
		function fl_MouseOutHandler(e)
		{
			e.currentTarget.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E0D8").s().p("Avbb2QnIjBlflfQlglgjAnIQjInWAAoFQAAmFBzlwQBvlkDTk2IGYAAQj4EmiFFnQiLFzAAGPQAAHCCuGaQCpGNEyEzQEzEzGNCoQGcCuHAAAQHCAAGbiuQGNioEzkzQEykzCpmNQCumaAAnCQAAmPiKlzQiGlnj4kmIGYAAQDTE2BvFkQBzFwAAGFQAAIFjIHWQjAHIlgFgQlfFfnIDBQnXDHoFAAQoDAAnYjHg");
	this.shape.setTransform(918.1,24,0.059,0.046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B9792A","#B9792A"],[0,1],-11.5,0.3,9.9,-1).s().p("AhcDTQgLgHAAgTIALlmQABgSANgMQAOgLASACIA/AKQATADAPAPQAQAPACATIAiDOQADASgJAUQgKAUgQAKIiIBTQgKAGgIAAQgFAAgEgCg");
	this.shape_1.setTransform(922.1,12.9,0.059,0.046);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B9792A","#B9792A"],[0,1],-11.1,0.8,11.4,-0.6).s().p("AhRCIQgPgGgEgSIgEgMQgEgSAGgWQAGgWAOgNICgiYQAOgNAIAEQAIAEgCATIgMBwQgCASgNAUQgMAVgQAKIhmBAQgKAGgKAAQgFAAgFgCg");
	this.shape_2.setTransform(920.9,15.5,0.059,0.046);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B9792A","#B9792A"],[0,1],-11.4,0.4,11.3,-1).s().p("AhlCaQgGgDADgSIASh3QAJg3AHgiIAIgnQAEgSAPgMQAQgLATACIBYAJQATADAFAMQAGAMgMAPIi2DzQgKANgFAAIgCAAg");
	this.shape_3.setTransform(918.9,17,0.059,0.046);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B9792A","#B9792A"],[0,1],-14,0.4,14,-1.3).s().p("AiGA4QgHgLAIgRIAbg4QAIgRATgLQAUgLASACICdALQATACADAJQADAJgPALIhIA2QgOALgYAJQgXAJgTABIhRAFIgDAAQgQAAgIgKg");
	this.shape_4.setTransform(918.8,18.8,0.059,0.046);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B9792A","#B9792A"],[0,1],-21.3,1.6,21,-1).s().p("AApCLQgZgGgQgJIjGhzQgRgJAAgMQAAgOAQgJICnhiQAQgKAWAAQAXAAARAJIB6BHQAQAKANAUQAMAUABARIAFBWQABATgMAOQgMAOgTABIhZAFIgGABQgQAAgVgFg");
	this.shape_5.setTransform(915.5,18.5,0.059,0.046);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B9792A","#B9792A"],[0,1],-14.4,0.8,13.9,-0.9).s().p("AgTB1QgYgGgRgKIg6gkQgQgJgGgTQgGgTAIgRIAnhUQAIgRASgLQATgLATABIB7AKQATACAOAOQAOAPABASIAICDQABATgNAOQgMAOgTABIhOAEIgHABQgQAAgTgFg");
	this.shape_6.setTransform(914.9,17,0.059,0.046);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B9792A","#B9792A"],[0,1],-22.9,1.4,22.9,-1.4).s().p("AjXCyQgIgJAKgVIBFiLQAKgTAXgWQAVgVAVgKID7hzQAVgJALAJQAKAJgGAWIgsCYQgGAWgUAVQgUAVgWAIIkkBnQgKADgHAAQgIAAgEgFg");
	this.shape_7.setTransform(920.2,17.4,0.059,0.046);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B9792A","#B9792A"],[0,1],-37,0.7,36.1,-3.8).s().p("Aj1htQAJgVAXgMQAWgNAXADIHeA/QAXAEAPASQAPASgCAXIgLCJIrGArg");
	this.shape_8.setTransform(918.9,31.8,0.059,0.046);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B9792A","#B9792A"],[0,1],-34.5,2.5,32.9,-1.6).s().p("AEoE5IiWgSIhugPIiOgTQgXgDgbgOQgbgOgQgRIh5iBQgQgRgGgbQgHgcAHgVIAVhDQAGgWANgeQAOgdAMgUIBBhqQAMgTAYgHQAXgIAVAKIGHC0QAVAJAQAXQARAXACAXIAeE5QACAXgOAOQgMAMgTAAIgHAAg");
	this.shape_9.setTransform(919.6,29.6,0.059,0.046);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#653F17","#C4802A"],[0,1],30,-0.9,-85.4,21.2).s().p("AnZDrQhzgshVgvQhTgtA+AWQCzBBBuAfQD7BIBvgSQCqgaDgi2QBqhUCPiUQgagbgLgqQgLgpAGgpQAjBNAbAgQAnAwA/ARQhCAbgwgqQhDBjh0BqQitCejKBcQg7AbhVAAQiXAAjkhWg");
	this.shape_10.setTransform(919.2,23.6,0.059,0.046);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAlQgOgOgCgUQgBgUAMgPQAMgPASgBQARgBAOANQAOAOABAUQABAUgLAPQgNAPgSABIgCAAQgQAAgMgMg");
	this.shape_11.setTransform(919.3,13.7,0.059,0.046);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAlQgOgOgBgUQgBgUAMgPQALgPATgBQARgBAOANQAOAOABAUQABAUgMAPQgLAPgTABIgDAAQgPAAgNgMg");
	this.shape_12.setTransform(914.5,13.8,0.059,0.046);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B9792A","#B9792A"],[0,1],-10.7,0.4,10.8,-0.9).s().p("AhnAyQgFgIAJgOIAhgyQAJgOASgJQARgKARAAIBaAAQAQAAAEAJQAEAIgLAMIgdAgQgLAMgTALQgTAKgPACIhXAOIgHABQgKAAgEgGg");
	this.shape_13.setTransform(912.8,10.7,0.059,0.046);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#343225","#231F20"],[0,1],-2.4,-30.6,1.4,30.6).s().p("Ai3BlQAEhWAehoQAZhXAYgrQAlhAAqgTQAjgPAcAUQAqAcApBXQAsBcAMBfQAOBvglBLQgsBZhsAXQgdAGgZAAQiRAAAKjQg");
	this.shape_14.setTransform(919.6,14,0.059,0.046);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#343225","#231F20"],[0,1],-2.4,-30.6,1.4,30.6).s().p("AAUEvQhugJg2hTQgthFAAhxQAAhgAghgQAehbAmgiQAagXAmALQArANAsA8QAeAnAjBUQArBkAOBUQAmDgivAAIgbgBg");
	this.shape_15.setTransform(914.7,14.1,0.059,0.046);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#343225","#231F20"],[0,1],-13,0.8,13,-0.8).s().p("ABXCQQgSgNgMggQgHgTghgUIhBgiQhUgtASg9QgDgBgJgPQgKgSgCgNQgEgpBMAbQBFAYA0A7QAvA1AbBHQAZBFgkAQQgEACgFAAQgLAAgLgJg");
	this.shape_16.setTransform(915.8,21,0.059,0.046);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#343225","#231F20"],[0,1],-12.9,0.8,13.1,-0.8).s().p("AhhCkQgPgEgGgVQgIgXAIgiQAShMAog5QAthBBBggQBJgkAAApQAAAOgIASQgHAQgDACQAZA6hNA3Ig8AqQgfAXgFAUQgIAhgQAQQgLALgMAAIgHgBg");
	this.shape_17.setTransform(919.5,20.9,0.059,0.046);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#B9792A","#B9792A"],[0,1],-8,0.6,7.9,-0.4).s().p("AgbCHQgNgFgEgQIgjh9QgFgQAGgSQAGgSANgKIA8guQANgKALgEQALgEACAEQAFAHALAoIAbBzQADAQgHASQgHASgNAJIg6AoQgJAGgIAAIgJgBg");
	this.shape_18.setTransform(924.7,18.7,0.059,0.046);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FED350","#ECB75D"],[0,1],-46.9,50.3,-0.4,10.1).s().p("AlgCjQgCghBGg9QATgRBRg7QAsghBKhDQBCg2BBgOQBQgSBgAgQBxAlgBBTQgCAsgZA4QgaA6gdAUQAqhTgGg+QgFg4gqgeQgngcg7ACQg7ADg4AhQglAWhGA+QhKBAgiAVQg0ApgsAbQgvAegWAAQgSAAgBgUg");
	this.shape_19.setTransform(919.9,19.8,0.059,0.046);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FED350","#ECB75D"],[0,1],61,43.4,-11.6,-0.5).s().p("AlYhwQA+g4DGAlQCyAiCWBNQCcBPgoAwQgNAPjGhXQjkhjgPgEQhRgWgkgDQhSgIgUAsQgUApAhBCQAIASATAiQAQAdADAQQiki/BKhEg");
	this.shape_20.setTransform(915.7,20.1,0.059,0.046);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FED350","#ECB75D"],[0,1],-1.2,9.6,1,-7.4).s().p("AgNA1IgEhnQAOghARAfIAEBnQgHARgJAAQgHAAgIgPg");
	this.shape_21.setTransform(917.9,20.8,0.059,0.046);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B9792A","#B9792A"],[0,1],-10.6,0.6,9.8,-0.6).s().p("AhcBtQgKgKACgQIARiBQACgQAMgOQANgPAPgEIBJgSQAQgEANAIQANAJADAPIAYB9QADAQgKANQgJAOgQADIiIAcIgIABQgKAAgHgGg");
	this.shape_22.setTransform(912.5,11.7,0.059,0.046);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#653F17","#C4802A"],[0,1],0.8,-22.2,-41.9,118.9).s().p("AkeAPQhDipjSjfQClhKDagRIAQgBQEFgKDFBOQA8AoAsAtQBDBEAoBGQArBMAQBaQiXi1iahaQBcCigeDRQgQBuhaEFQAajAhPisQhGiZiciPQAaC+g4CvQg8C5iHB7QBbjuhYjbg");
	this.shape_23.setTransform(917.8,10.5,0.059,0.046);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#653F17","#C4802A"],[0,1],-57.6,5.9,58.1,-1.2).s().p("AAZDWQmHhCjShfICkhBQDGhNCpg3QIcivAzBtQA3B1grCVQgkB+g+A1QgVAShLAAQhuAAjlgng");
	this.shape_24.setTransform(925.6,10.3,0.059,0.046);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#653F17","#C4802A"],[0,1],70.7,-4.5,-124.9,4).s().p("An0DIQh0hzApicQAPg6Aig1QAdgtAcgWQBLg8HxB+QD5A/DqBLQjkByhuAyQjDBYiaAlQhsAZhTAAQiKAAhGhFg");
	this.shape_25.setTransform(908.6,10.8,0.059,0.046);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#875C58").s().p("ABmAeIgagHQgMgCgWgHIgjgKQgegHgxADQgMAAgXACIgKACQgGAAAAgEQBKggA7ACQAZAAAMACQAVADAOAKQATALAIAKQAQASgBAEQgBADgHAAIgOgBg");
	this.shape_26.setTransform(919.9,11.8,0.059,0.046);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#875C58").s().p("AjGAqQAfgiAzgaQApgVBOgEQAwgDBQACIA1ABIAKAAQAIAAgCAFQgOABgZAEIgnAHQhlANgYAFIg6ARIg6ASQglALgTAFIgPACIgFABQgHAAAEgEg");
	this.shape_27.setTransform(914.1,12.2,0.059,0.046);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FED350","#FCD151","#F7C855","#EEBA5B","#ECB75D"],[0,0.467,0.741,0.961,1],-137.6,281.1,29.5,-44.3).s().p("AoCbfQjOhfjTjEQAUg2AsheIBIifQBUjFAPiPQAjlNA9kNIAti+QAYhlALhQQALhJgVhvQgMhBgqiVQgpiWgQhQQgZiDAFhlQALjXBBohQClhIDWgRIAQgBQC0gGCRAhQB8IxArDvQARBjgGCCQgDBOgRCUQgRCOgCA8QgDBmAVA6QAuB/BQEAQBqFXBWEGQAvCMBrCxQA7BhBuCvIgLANQi1DVjBB0QjtCPkYASQgkACgkAAQj3AAjihpg");
	this.shape_28.setTransform(918,16.9,0.059,0.046);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#B9792A","#B9792A"],[0,1],-8,-3.4,6.7,1.4).s().p("AgtCEQgfgGgcgPIAojAQA8geApgOQBAgUAEAZQAEAWgqBgIgSA8QgXBAgVAJQgJAEgOAAQgMAAgPgDg");
	this.shape_29.setTransform(911,16.8,0.059,0.046);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B9792A","#B9792A"],[0,1],-12.4,1.1,12.5,-0.4).s().p("AgxCqQgVgLgLgQIgdgtQgKgQAAgXQgBgXALgQIAPgZQALgQATgUQASgUAPgLICNhqQANBYAAA6QgBBnggBmIhhAGIgFAAQgRAAgTgJg");
	this.shape_30.setTransform(924.9,20,0.059,0.046);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B9792A","#B9792A"],[0,1],-15,0.8,14.3,-1).s().p("AiKCJQgIgIAEgQIAXhkQBXhcBxg9QAOgCALAJQAMAIACAPIAYB8QADAQgJAPQgJAPgPAFIjkBKQgGACgFAAQgIAAgFgEg");
	this.shape_31.setTransform(913.6,9.5,0.059,0.046);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#B9792A","#B9792A"],[0,1],-13.3,0.8,12.1,-0.7).s().p("Ah5C/QAliuAShkQAUgjASgUIABgCQAjgoAggPQAggQAJASQAJATALAyQAMA0AHA0IABAVQABAbgEAXQgOBLg5ANQgkAJhPAqQgZAOgNAAQgNAAgCgNg");
	this.shape_32.setTransform(911.5,14.8,0.059,0.046);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#B9792A","#B9792A"],[0,1],-6.6,0.3,6.1,-0.4).s().p("Ag7B3IAEgpQAEhjAMhfQANgGAMAEIAgALQAQAFALAPQAMAPABAQIABATQACAjgCAqIgCAkQAAAQgNANQgMAMgQABIgoACIgOABQgMAAgJgCg");
	this.shape_33.setTransform(911.6,13.2,0.059,0.046);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FED350","#ECB75D"],[0,1],-102.1,153.5,140.9,-206.9).s().p("AnfbcQjOhhjXjJIhlhfQigiYhRiWQhCh6gRiBQgcjYB2o+QBAknAaiDQAsjdAFhnQAYnoC3kMQDklPHxgoIARgBQHygSELEvQDWDzBUHhQARBlBIDWQApB+BkEfQC7IqgBDZQgBCCgzCCQg+CfiMCqQhLBcgnAtQi1DVjAB0QjtCPkZASQglACgkAAQj5AAjmhsg");
	this.shape_34.setTransform(917.7,16.9,0.059,0.046);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FED350","#FCD151","#F7C855","#EEBA5B","#ECB75D"],[0,0.467,0.741,0.961,1],0,66.2,0,-66.2).s().p("AkTJoQAxg+AjhxQBGjjhFj/QgThGg0heQgrhNgDgzQgIiABVhgQBVhgCAgIQB+gHBgBVQBgBUAICAQAFBYhYBrQhrBygkA4QgmA1gWAjQgpA/gWA/QhAC5BDENg");
	this.shape_35.setTransform(919.1,6.2,0.059,0.046);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FED350","#FCD151","#F7C855","#EEBA5B","#ECB75D"],[0,0.467,0.741,0.961,1],0,65.6,0,-65.5).s().p("ABEDNQgdg8gwg6Qg0g4gTgYQgZgdg0gtIhWhMQhlhggFhYQgIiABVhfQBVhgB/gIQB/gIBgBVQBgBVAIB/QADAzghBSQgoBkgKBHQgmEGBhDZQAxBsA4A3IjmBLQAikThXiwg");
	this.shape_36.setTransform(913.7,6.4,0.059,0.046);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FED350","#ECB75D"],[0,1],69.8,0.1,-69.7,0.1).s().p("AoQGlQgggOgsg+Qg1hMgYhbQhDkHDRj6QDMj0IYDfQENBwDkCgIgWDlQkRCJjiBgQioBHjTAMQgoADglAAQibgBhegqg");
	this.shape_37.setTransform(908.4,10.4,0.059,0.046);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FED350","#ECB75D"],[0,1],-73,6.7,73.7,-2.3).s().p("ADVHAQhlgTj3g6Qjxg5hfgSQibgcgVAWIhVkNICLhZQCrhqCehTQH3kKC2BFQDCBJBIB6QAwBTgCB8QgCBlhoC6QhvDEhaAhQgOAFgcAAQg5AAhygVg");
	this.shape_38.setTransform(925.5,9.7,0.059,0.046);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A87C4F","#D0AF7F"],[0,1],-42.3,-25.5,32.7,17.2).s().p("AA3C1QgfgFgWgIIjPhSQgVgIgLgWQgLgVAGgWIAriZQAHgWAUgMQAUgNAXAFIFGBCQAWAEAOAUQAOATgDAXIgVCtQgCAXgTARQgSARgXABIgzAEIgIAAQgVAAgagEg");
	this.shape_39.setTransform(919.6,22.6,0.059,0.046);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#9C6327","#B9792A"],[0,1],-39.4,25.2,0,-39.4,25.2,72.4).s().p("ACIEqIhugoQhugqgHgIQgKgOhhi6QgJgRgLg2QgJgugBgXQgBgRAKgYQAKgZAPgRIAzgzQASgNAcgLQAcgLAWgBQASgBA2AcQAvAYATAPQAOALATAWQASAWAMAUIAhBMQAjBfADBnQAFCkgCACQgRAQgbAFQgLADgLAAQgOAAgMgFg");
	this.shape_40.setTransform(916.3,23,0.059,0.046);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#B9792A","#B9792A"],[0,1],-23.6,1,24.9,-2).s().p("AAsF2QgZgGgNgTIhxihQgOgTgWgTQgWgTgSgJQgSgIgOgXQgOgWgBgXIgYlPQgBgXABgWQACgXADgJQAEgKARAAQASgBAVAJICoA3QCwBDAtA+QAuA+AIC4QAEBcgFBPQAEAXgMAXQgMAXgUAKIh9A7QgMAGgOAAQgJAAgJgDg");
	this.shape_41.setTransform(916.1,26.1,0.059,0.046);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#B9792A","#B9792A"],[0,1],-19.3,1.5,17.2,-0.7).s().p("AhAGOQgVgOgGgWIhllbQACgIAEg+QAEg1AJgPICZjxQAKgQBCgPQAjgHAmgHQAIgCAGAPQAGAOABAXIArKxQACAXgPASQgPASgXADIijARIgHABQgTAAgRgMg");
	this.shape_42.setTransform(920.2,26.5,0.059,0.046);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#B9792A","#B9792A"],[0,1],-13.5,0.2,16.2,-1.6).s().p("AhTEwQgTgFgPgTQgNjygWlRQAPgKAVAHIDdBNQAWAHAOAWQAOAVgCAXIgOCeQgCAWgLAeQgKAegNATIhsCjQgMATgXAKQgQAHgOAAQgHAAgGgCg");
	this.shape_43.setTransform(915.9,30.1,0.059,0.046);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#653F17","#D0AF7F"],[0,1],-15.5,1,372.6,-22.9).s().p("AijiRQgfo7AtliIB9h7IAMIgIASCvIAaCZIgaCPIgWG9IAmDYICSK0IAJAKIibAJQiTp1gmrGg");
	this.shape_44.setTransform(922.1,26.8,0.059,0.046);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FED350","#ECB75D"],[0,1],59.7,-62.5,-253,246.1).s().p("ApakdIhHvOISsA8QgaBggNDkQgOD8AKE1QAbMZCnLEIyeBIQgVnchJwsg");
	this.shape_45.setTransform(918.3,26.8,0.059,0.046);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E8E0D8").s().p("AaeItQk3lxmyjOQnBjWn0AAQnzAAnBDWQmyDOk3FxImYAAQFdoCIhknQIzkwKEgBQKFABIzEwQIhEnFdICg");
	this.shape_46.setTransform(918.1,12.2,0.059,0.046);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#F8F5F2","#EAE0D4"],[0,1],0,-221.3,0,221.4).s().p("Atcf4QmNipkzkyQkykzipmNQiumbAAnCQAAnBCumbQCpmNEykzQEzkyGNioQGcivHAAAQHCAAGbCvQGNCoEzEyQEyEzCpGNQCuGbAAHBQAAHCiuGbQipGNkyEzQkzEymNCpQmbCunCAAQnAAAmciug");
	this.shape_47.setTransform(918.1,21.4,0.059,0.046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// elements
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(787,6,0.683,0.625);

	this.myAboutBtn = new lib.myAboutBtn();
	this.myAboutBtn.parent = this;
	this.myAboutBtn.setTransform(39.2,17.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AAPAkIgZgkQgFAFgBARIgBAOIgTAAIABgPQACgQAEgGQAEgGAGgEIgRgYIAXAAIATAdQAGgEABgNIABgMIASAAIgBAJQgCAPgEAGQgDAGgHAEIAWAfg");
	this.shape_48.setTransform(150.6,19);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_49.setTransform(144.4,17.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AAMAzIAAg/QAAgMgGgFQgGgFgMAAIgRACIgBgPQAKgDANAAQASAAALAJQAJAIAAASIAABCg");
	this.shape_50.setTransform(138.5,20.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0000FF").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_51.setTransform(126.6,18.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0000FF").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_52.setTransform(117.5,19.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AAPAlIAAglQAAgKgFgFQgEgFgJAAIgKABIAAA4IgUAAIAAhGQAOgDANAAQARAAAHAFQAJAEAEAHQADAHAAAMIAAAmg");
	this.shape_53.setTransform(108.2,18.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgfAyIAAhAIATAAIAABAgAAAAWIAAgNQAAgFABgEQACgDAFgGIABgDQAEgEAAgIIAAgJIgsAAIAAgQIA/AAIAAASIgBAPQgBAFgDAEIgCAFIgFAGIgBAGIAAAMg");
	this.shape_54.setTransform(100,20.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_55.setTransform(94,17.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AghAlIAAhGQANgDAOAAQARAAAIAFQAIAEAEAHQADAHAAAMIAAAmgAgNgTIAAAnIAcAAIAAgUQAAgKgEgFQgFgFgKAAIgJABg");
	this.shape_56.setTransform(87.9,18.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("EBLEAC9MiV/AAAIgIAAIAAl5IAIAAMCV/AAA");
	this.shape_57.setTransform(478.3,18.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CCFF").s().p("EBK8AC9MiV/AAAIAAl5MCV/AAAIAIAAIAAF5g");
	this.shape_58.setTransform(479.1,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.myAboutBtn},{t:this.instance}]}).wait(1));

	// background
	this.instance_1 = new lib.background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(477,294.1,1.003,0.988,0,0,0,478.7,298.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476.9,294,963.3,594.4);
// library properties:
lib.properties = {
	id: '0AB552CDEAAFF947B0C1886D39A73D66',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/31_atlas_.png", id:"31_atlas_"},
		{src:"sounds/badGood.mp3", id:"badGood"},
		{src:"sounds/GoodSound.mp3", id:"GoodSound"},
		{src:"sounds/back.mp3", id:"back"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
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
an.compositions['0AB552CDEAAFF947B0C1886D39A73D66'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;