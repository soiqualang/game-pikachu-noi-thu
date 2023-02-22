
function highlight(field){field.focus();field.select();}
function setAudioElement(pn,file){if(typeof(file)=='undefined')
file=pn;var html="<source src='"+oStaticURL+"sound/"+file+".mp3' />";html+="<source src='"+oStaticURL+"sound/"+file+".ogg' />";var audio=document.createElement("AUDIO");audio.id=pn;audio.innerHTML=html;document.body.appendChild(audio);}
function getAudioName(file){var pn="audio"+file;var pid=document.getElementById(pn);if(!pid){setAudioElement(pn,file);pid=document.getElementById(pn);}
return pid;}
function loadedAll(){el=newBoard();el.createBigGame();document.getElementById("board").appendChild(el);document.getElementById("maintable").style.visibility="visible";}
function loadImage(){
	var list=new Array;
	var i;
	//for(i=0;i<4;i++)list.push(oStaticURL+"images/bgr"+i+".jpg");
	for(i=1;i<=36;i++)list.push(oStaticURL+"images/pieces"+i+".png");
	var t=new ImagePreloader(list,loadedAll);
}

var startTime=(new Date()).getTime();
totalScorethis = 0;
namesave = '';
timesavetwice=(new Date()).getTime();
var onlyyou = Math.floor((Math.random()*1000000)+100000);

function printDate() {               
            var dateobj= new Date(); 
            var month = dateobj.getMonth(); 
            var day = dateobj.getDate();
            var year = dateobj.getFullYear();

            if(day < 10) day = '0' + day;
            if(month < 10) month = '0' + month;

            var linkdate = day + "-" + month + "-" + year;
            
            var redirectlink = 'http://www.gamevui.com';
            window.location=redirectlink;
}

var MD5 = function (string) {

  function RotateLeft(lValue, iShiftBits) {
    return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
  }

  function AddUnsigned(lX,lY) {
    var lX4,lY4,lX8,lY8,lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      } else {
        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      }
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  }

  function F(x,y,z) { return (x & y) | ((~x) & z); }
  function G(x,y,z) { return (x & z) | (y & (~z)); }
  function H(x,y,z) { return (x ^ y ^ z); }
  function I(x,y,z) { return (y ^ (x | (~z))); }

  function FF(a,b,c,d,x,s,ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function GG(a,b,c,d,x,s,ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function HH(a,b,c,d,x,s,ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function II(a,b,c,d,x,s,ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1=lMessageLength + 8;
    var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
    var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
    var lWordArray=Array(lNumberOfWords-1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while ( lByteCount < lMessageLength ) {
      lWordCount = (lByteCount-(lByteCount % 4))/4;
      lBytePosition = (lByteCount % 4)*8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount-(lByteCount % 4))/4;
    lBytePosition = (lByteCount % 4)*8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
    lWordArray[lNumberOfWords-2] = lMessageLength<<3;
    lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
    return lWordArray;
  };

  function WordToHex(lValue) {
    var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
    for (lCount = 0;lCount<=3;lCount++) {
      lByte = (lValue>>>(lCount*8)) & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
    }
    return WordToHexValue;
  };

  function Utf8Encode(string) {
    string = string.replace(/rn/g,"n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  };

  var x=Array();
  var k,AA,BB,CC,DD,a,b,c,d;
  var S11=7, S12=12, S13=17, S14=22;
  var S21=5, S22=9 , S23=14, S24=20;
  var S31=4, S32=11, S33=16, S34=23;
  var S41=6, S42=10, S43=15, S44=21;

  string = Utf8Encode(string);

  x = ConvertToWordArray(string);

  a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

  for (k=0;k<x.length;k+=16) {
    AA=a; BB=b; CC=c; DD=d;
    a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
    d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
    c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
    b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
    a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
    d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
    c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
    b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
    a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
    d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
    c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
    b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
    a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
    d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
    c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
    b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
    a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
    d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
    c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
    b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
    a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
    d=GG(d,a,b,c,x[k+10],S22,0x2441453);
    c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
    b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
    a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
    d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
    c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
    b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
    a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
    d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
    c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
    b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
    a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
    d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
    c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
    b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
    a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
    d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
    c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
    b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
    a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
    d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
    c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
    b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
    a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
    d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
    c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
    b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
    a=II(a,b,c,d,x[k+0], S41,0xF4292244);
    d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
    c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
    b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
    a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
    d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
    c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
    b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
    a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
    d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
    c=II(c,d,a,b,x[k+6], S43,0xA3014314);
    b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
    a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
    d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
    c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
    b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
    a=AddUnsigned(a,AA);
    b=AddUnsigned(b,BB);
    c=AddUnsigned(c,CC);
    d=AddUnsigned(d,DD);
  }

  var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
  return temp.toLowerCase();
}

function loadXMLDoc() {
	var timenowsave=(new Date()).getTime();
	secondelay=Math.round(((timenowsave-timesavetwice)/1000));
	if(secondelay < 60) {
		alert("Bạn đã chơi được "+ secondelay + "/60 giây!\n\nHai lần gửi Điểm Cao cách nhau tối thiểu 60 giây!");
		return;
	}
	else {
		timesavetwice=(new Date()).getTime();
	}
	

	if(namesave.length > 1) { // da ton tai ten lan trc
		alert('Bạn sẽ lưu lại điểm cao này với tên: '+namesave);
	}
	else {
		namesave=prompt("Nhập tên bạn muốn lưu điểm(Từ 1 tới 15 ký tự)","TaiGamePikachu.Vn");
		if (namesave==null && namesave=="") {
		 	loadXMLDoc();
			return; 
		}	
	}
	
	var endTime=(new Date()).getTime();
	endTime=Math.round(((endTime-startTime)/1000));
	
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	  }
	}	
	var isscrore = totalScorethis;
	var hash = MD5(''+onlyyou+isscrore+startTime+endTime);
	var rsdone = xmlhttp.send();
	
	alert("Hệ thống sẽ kiểm duyệt và lưu Điểm Cao của bạn!\n\nChú ý:\n\n+ 2 lần gửi điểm liên tiếp tối thiểu cách nhau 60 giây!\n\n+ Điểm của một ván sẽ được tính là lần gửi cuối cùng!\n\n+ Tên ghi điểm cao là duy nhất trong mỗi lượt chơi!");
}

function ImagePreloader(images,callback){this.callback=callback;this.nLoaded=0;this.nProcessed=0;this.aImages=new Array;this.nImages=images.length;for(var i=0;i<images.length;i++)
this.preload(images[i]);}
ImagePreloader.prototype.preload=function(image){var oImage=new Image;this.aImages.push(oImage);oImage.onload=ImagePreloader.prototype.onload;oImage.onerror=ImagePreloader.prototype.onerror;oImage.onabort=ImagePreloader.prototype.onabort;oImage.oImagePreloader=this;oImage.bLoaded=false;oImage.src=image;}
ImagePreloader.prototype.onComplete=function(){this.nProcessed++;if(this.nProcessed==this.nImages){this.callback();}}
ImagePreloader.prototype.onload=function(){this.bLoaded=true;this.oImagePreloader.nLoaded++;this.oImagePreloader.onComplete();}
ImagePreloader.prototype.onerror=function(){this.bError=true;this.oImagePreloader.onComplete();}
ImagePreloader.prototype.onabort=function(){this.bAbort=true;this.oImagePreloader.onComplete();}
var PieceWidth=42;var PieceHeight=52;function newPiece(board,col,row,value){var div=document.createElement("div");div.image=document.createElement("img");div.setImage=function(imgIndex){this.image.src=oStaticURL+"images/pieces"+imgIndex+".png";this.valueInMatrix=imgIndex;}
if(value>0)div.setImage(value);div.appendChild(div.image);div.board=board;div.colIndex=col;div.rowIndex=row;div.style.position="absolute";div.style.left=col*PieceWidth+"px";div.style.top=row*PieceHeight+"px";div.style.width=PieceWidth+"px";div.style.height=PieceHeight+"px";div.isVisible=true;div.setVisible=function(flag){this.isVisible=flag;this.style.visibility=flag?"visible":"hidden";}
div.setBorder=function(thick,color){this.image.border=thick;this.image.style.borderColor=color;}
div.setHightlight=function(){this.setBorder(1,"red");}
div.setSelected=function(opacity){opacity=(opacity==100)?200:opacity;this.image.style.filter="alpha(opacity:"+opacity+")";this.image.style.KHTMLOpacity=opacity/100;this.image.style.MozOpacity=opacity/100;this.image.style.opacity=opacity/100;}
div.setNormal=function(){this.setBorder(1,"#009933");}
div.onmouseover=function(){this.setHightlight();}
div.onmouseout=function(){this.setNormal();}
div.onmousedown=function(evt){if(window.event)evt=window.event;this.board.onClickPiece(evt,this.colIndex,this.rowIndex);}
div.setNormal();return div;}
var BoardWidth=PieceWidth*18;var BoardHeight=PieceHeight*11;var checksound=true;var totalscore=0;function newBoard(){var div=document.createElement("div");div.lines=new Array;for(var i=0;i<3;i++){div.lines[i]=document.createElement("div");div.lines[i].style.position="absolute";div.lines[i].style.visibility="hidden";div.lines[i].style.backgroundColor="red";div.appendChild(div.lines[i]);}
div.arrPiece=newArray(17);for(var i=1;i<=16;i++){for(var j=1;j<=9;j++){div.arrPiece[i][j]=newPiece(div,i,j,0);div.appendChild(div.arrPiece[i][j]);}}
div.style.position="relative";div.style.width=BoardWidth+"px";div.style.height=BoardHeight+"px";
div.setNewLevel=function(level){this.level=level;this.arrValue=getNewMatrix();this.isWaiting=false;repaint("level",this.level);repaint("blood",this.blood);repaint("score",totalscore);this.applyMatrix();startCountDown();}
div.setNextLevel=function(){if(this.level==9){alert("Bạn đã hoàn thành tất cả 9 màn chơi! Thành tích bạn ghi được là:"+totalscore+" điểm");this.createBigGame();}else{this.level++;this.blood++;totalscore+=el.score+elTimebar.tmp;alert(totalscore);this.setNewLevel(this.level);}}
div.disp_confirm=function(){this.createBigGame();}

div.disp_saveScore=function(){
	//alert(totalScorethis);
	//return;
	// if(totalScorethis < 50) {
		// alert("Điểm tối thiểu để gửi yêu cầu là 50 điểm, bạn hiện có "+totalScorethis+" điểm");
		// return;
	// }
	
	// var sendScoreTime=(new Date()).getTime();
	// var minusTime=Math.round(((sendScoreTime-startTime)/1000));
	
	// if(minusTime <  60) {
		// alert("Bạn chỉ có thể gửi điểm cao khi chơi tối thiểu 60 giây.\nHiện tại bạn đã chơi ván mới được "+minusTime+" giây!");
		// return;		
	// }

	//var r=confirm("Bạn có muốn lưu số điểm hiện tại là "+totalScorethis+" trên hệ thống?")
	//if(r==true)	{ loadXMLDoc(); return;}
	savescore1();
}

div.createBigGame=function(){if(checksound){getAudioName("sound4").play();}
this.level=1;this.blood=10;this.score=0;totalscore=0;this.setNewLevel(this.level);repaint("score",0);}
div.changesound=function(){var change_soundID=jh("#change_sound");if(checksound){checksound=false;change_soundID.val("Bật tiếng");change_soundID.attr("class","soundOff");}
else{checksound=true;change_soundID.val("Tắt tiếng");change_soundID.attr("class","soundOn");}}
div.drawPath=function(arrayList){var point1=arrayList[0];var point2;var centre1,centre2;var i,rect;for(i=1;i<arrayList.length;i++){point2=arrayList[i];centre1=findCentre(point1.x,point1.y);centre2=findCentre(point2.x,point2.y);rect=getRRR(centre1,centre2);this.lines[i-1].style.left=rect.x+"px";this.lines[i-1].style.top=rect.y+"px";this.lines[i-1].style.width=rect.width+"px";this.lines[i-1].style.height=rect.height+"px";point1=point2;}
for(i=1;i<arrayList.length;i++)
this.lines[i-1].style.visibility="visible";}
div.onClickPiece=function(evt,iClick,jClick){if(checksound){getAudioName("sound2").play();}
var mybutton=getMouseButton(evt);if(mybutton==0){if(this.isWaiting){this.isWaiting=false;var list=checkPath(this.arrValue,this.iFist,this.jFist,iClick,jClick);if(list!=null){this.arrValue[this.iFist][this.jFist]=0;this.arrValue[iClick][jClick]=0;this.arrPiece[this.iFist][this.jFist].setVisible(false);this.arrPiece[iClick][jClick].setVisible(false);this.drawPath(list);setTimeout("afterDrawPath()",200);if(checksound){getAudioName("sound5").play();}}else{if(checksound){getAudioName("sound1").play();}
this.arrPiece[this.iFist][this.jFist].setSelected(100);}}else{this.iFist=iClick;this.jFist=jClick;this.arrPiece[iClick][jClick].setSelected(50);this.isWaiting=true;}}}
div.onmousedown=function(evt){if(window.event)evt=window.event;var tmp=getMouseButton(evt);if(tmp==2&&this.isWaiting){this.arrPiece[this.iFist][this.jFist].setSelected(100);this.isWaiting=false;}else if(tmp==1){var rect=findCheat(this.arrValue);this.arrPiece[rect.x][rect.y].setSelected(50);this.arrPiece[rect.width][rect.height].setSelected(50);}}
div.applyMatrix=function(){var i,j;for(i=1;i<=16;i++){for(j=1;j<=9;j++){if(this.arrValue[i][j]==0)
this.arrPiece[i][j].setVisible(false);else{this.arrPiece[i][j].setVisible(true);this.arrPiece[i][j].setSelected(100);this.arrPiece[i][j].setImage(this.arrValue[i][j]);}}}}
return div;}

function afterDrawPath(){
	for(var i=0;i<3;i++)
		el.lines[i].style.visibility="hidden";
		el.score+=10;
		
		if(el.level==1){
			totalScorethis+=10;
			repaint("score",el.score);
		}else{
			totalscore+=10;
			totalScorethis+=10;
			repaint("score",totalscore);
		}
	if(el.score==720){
		clearInterval(timeID);
		el.setNextLevel();
		el.score=0;
		return;
	}
	if(el.level>1){fixMatrix(el.arrValue,el.level);el.applyMatrix();}
	if(isEnd(el.arrValue)){
		el.blood--;
		repaint("blood",el.blood);
		if(el.blood==0){
			clearInterval(timeID);
			alert("Hết lượt đổi");
			el.createBigGame();
			if(checksound){
				getAudioName("sound7").play();
			}
		}else{
			alert("Không còn cặp nào có thể loại bỏ");
			repairMatrix(el.arrValue);el.applyMatrix();
			if(checksound){getAudioName("sound8").play();}
		}
	}
}
var UU=new Array(0,0,1,-1);var VV=new Array(1,-1,0,0);function getRandom(n){return Math.round(Math.random()*(n-1));}
function newArray(col){var a=new Array;for(var i=0;i<col;i++)
a[i]=new Array;return a;}
function Point(x,y){this.x=x;this.y=y;}
function Rectangle(x,y,width,height){this.x=x;this.y=y;this.width=width;this.height=height;}
function getNewMatrix(){var a=newArray(18);var i,j,k,t,remain,key;var stop;for(i=0;i<18;i++)
for(j=0;j<11;j++)
a[i][j]=0;remain=144;for(k=1;k<=36;k++){for(t=1;t<=4;t++){key=getRandom(remain--)+1;stop=false;for(i=1;i<=16;i++){if(stop)
break;else{for(j=1;j<=9;j++){if(a[i][j]==0){key--;if(key==0){stop=true;a[i][j]=k;break;}}}}}}}
return a;}
function checkPath(a,i1,j1,i2,j2){if(i1==i2&&j1==j2)return null;if(a[i1][j1]==0||a[i2][j2]==0)return null;if(a[i1][j1]!=a[i2][j2])return null;var fist,last,i,j,t;var queue=new Array;var dad=newArray(18);var count=newArray(18);for(i=0;i<198;i++)queue[i]=new Point(0,0);fist=0;last=0;queue[0].x=i1;queue[0].y=j1;for(i=0;i<18;i++)
for(j=0;j<11;j++)
dad[i][j]=new Point(-1,-1);dad[i1][j1].x=-2;count[i1][j1]=0;var canGo=new Array;var p=new Array;var q=new Array;while(fist<=last){i=queue[fist].x;j=queue[fist].y;fist++;for(t=0;t<4;t++){canGo[t]=true;p[t]=i;q[t]=j;}
do{for(t=0;t<4;t++){if(canGo[t]){p[t]+=UU[t];q[t]+=VV[t];if(!myInside(p[t],q[t])){canGo[t]=false;continue;}
if(p[t]==i2&&q[t]==j2){dad[p[t]][q[t]].x=i;dad[p[t]][q[t]].y=j;return createArrayList(dad,i2,j2);}
if(a[p[t]][q[t]]>0){canGo[t]=false;continue;}
if(dad[p[t]][q[t]].x!=-1)continue;if(count[i][j]==2)continue;last++;queue[last].x=p[t];queue[last].y=q[t];dad[p[t]][q[t]].x=i;dad[p[t]][q[t]].y=j;count[p[t]][q[t]]=count[i][j]+1;}}}while(canGo[0]||canGo[1]||canGo[2]||canGo[3]);}
return null;}
function myInside(i,j){return i>=0&&i<18&&j>=0&&j<11;}
function createArrayList(dad,i,j){arrayList=new Array;var p,q;do{arrayList.push(new Point(i,j));p=dad[i][j].x;q=dad[i][j].y;i=p;j=q;}while(i!=-2);return arrayList;}
function isEnd(a){var i,j;for(i=1;i<=16;i++)
for(j=1;j<=9;j++)
if(a[i][j]>0)
if(findTwin(a,i,j)!=null)
return false;return true;}
function findTwin(a,i1,j1){var fist,last,i,j,t;var queue=new Array;var cx=newArray(18);var count=newArray(18);for(i=0;i<198;i++)queue[i]=new Point();fist=0;last=0;queue[0].x=i1;queue[0].y=j1;for(i=0;i<18;i++)
for(j=0;j<11;j++)cx[i][j]=true;cx[i1][j1]=false;count[i1][j1]=0;var canGo=new Array;var p=new Array;var q=new Array;while(fist<=last){i=queue[fist].x;j=queue[fist].y;fist++;for(t=0;t<4;t++){canGo[t]=true;p[t]=i;q[t]=j;}
do{for(t=0;t<4;t++){if(canGo[t]){p[t]+=UU[t];q[t]+=VV[t];if(!myInside(p[t],q[t])){canGo[t]=false;continue;}
if(a[p[t]][q[t]]==a[i1][j1]&&cx[p[t]][q[t]])
return new Point(p[t],q[t]);if(a[p[t]][q[t]]>0){canGo[t]=false;continue;}
if(!cx[p[t]][q[t]])continue;if(count[i][j]==2)continue;last++;queue[last].x=p[t];queue[last].y=q[t];cx[p[t]][q[t]]=false;count[p[t]][q[t]]=count[i][j]+1;}}}while(canGo[0]||canGo[1]||canGo[2]||canGo[3]);}
return null;}
function findCheat(a){var i,j;var b=new Array;var c=new Array;var k=0;for(i=1;i<=16;i++)
for(j=1;j<=9;j++)
if(a[i][j]>0){b[k]=i;c[k]=j;k++;}
mixArray2(b,c,k);for(i=0;i<k-1;i++)
for(j=k-1;j>i;j--)
if(checkPath(a,b[i],c[i],b[j],c[j])!=null)
return new Rectangle(b[i],c[i],b[j],c[j]);return null;}
function repairMatrix(a){var b=new Array;var i,j,k=0;for(i=1;i<=16;i++)
for(j=1;j<=9;j++)
if(a[i][j]>0)b[k++]=a[i][j];mixArray(b,k);k=0;for(i=1;i<=16;i++)
for(j=1;j<=9;j++)
if(a[i][j]>0)a[i][j]=b[k++];var tmp=newArray(18);for(i=0;i<18;i++)
for(j=0;j<11;j++)tmp[i][j]=a[i][j]>0?1:0;var rect=findCheat(tmp);var k=0;var u=0,v=0;for(i=1;i<=16;i++){if(k>0)break;else{for(j=1;j<=9;j++){if(i!=rect.x||j!=rect.y){if(a[i][j]==a[rect.x][rect.y]){u=i;v=j;k=1;break;}}}}}
swap(a,rect.width,rect.height,u,v);}
function fixMatrix(a,fixType){if(fixType==1)return;if(fixType==2){fixZone(a,1,1,16,9,0);}else if(fixType==3){fixZone(a,1,1,16,9,1);}else if(fixType==4){fixZone(a,1,1,16,9,3);}else if(fixType==5){fixZone(a,1,1,16,9,2);}else if(fixType==6){fixZone(a,1,5,16,9,0);fixZone(a,1,1,16,4,1);}else if(fixType==7){fixZone(a,1,5,16,9,1);fixZone(a,1,1,16,4,0);}else if(fixType==8){fixZone(a,1,1,8,9,3);fixZone(a,9,1,16,9,2);}else{fixZone(a,1,1,8,9,2);fixZone(a,9,1,16,9,3);}}
function fixZone(a,i1,j1,i2,j2,vector){var i,j,p,q;var stop;do{stop=true;for(i=i1;i<=i2;i++)
for(j=j1;j<=j2;j++)
if(a[i][j]>0){p=i+UU[vector];q=j+VV[vector];if(p>=1&&p<=16&&q>=1&&q<=9){if(a[p][q]==0){swap(a,i,j,p,q);stop=false;}}}}while(!stop);}
function swap(a,i1,j1,i2,j2){var tmp=a[i1][j1];a[i1][j1]=a[i2][j2];a[i2][j2]=tmp;}
function generateHV(n){var a=new Array;var i,j,k,t;for(i=0;i<n;i++)a[i]=n;j=n;for(i=0;i<n;i++){k=getRandom(j--)+1;t=0;while(k>0){if(a[t++]==n)k--;}
a[t-1]=i;}
return a;}
function mixArray(a,n){var b=generateHV(n);var c=new Array;for(var i=0;i<n;i++)
c[i]=a[b[i]];for(var i=0;i<n;i++)
a[i]=c[i];}
function mixArray2(a,aa,n){var b=generateHV(n);var c=new Array;var i;for(i=0;i<n;i++)
c[i]=a[b[i]];for(i=0;i<n;i++)
a[i]=c[i];for(i=0;i<n;i++)
c[i]=aa[b[i]];for(i=0;i<n;i++)
aa[i]=c[i];}
var timeID=0;var elTimebar=document.getElementById("timebar");var iffause=true;function startCountDown(){if(timeID>0)clearInterval(timeID);elTimebar.tmp=469;elTimebar.style.height="469px";timeID=setInterval("decTime()",1250);}
function pausecomp(millis){var date=new Date();var curDate=null;do{curDate=new Date();}
while(curDate-date<millis);}
function change_block(){if(el.blood==0){alert("Bạn đã hết lần đổi vị trí");}else{if(checksound){getAudioName("sound4").play();}
repairMatrix(el.arrValue);el.applyMatrix();el.blood--;repaint("blood",el.blood);}}
function decTime(){elTimebar.tmp--;elTimebar.style.height=elTimebar.tmp+"px";if(elTimebar.tmp==0){if(el.checksound){getAudioName("sound7").play();}
clearInterval(timeID);el.createBigGame();}}
function getMouseButton(evt){if(navigator.appName=='Microsoft Internet Explorer'){if(window.event){var tmp=evt.button;if(tmp==1)return 0;if(tmp==4)return 1;if(tmp==2)return 2;}else{return evt.button;}}
else{return evt.button;}}
function repaint(id,value){var el=document.getElementById(id);if(el.hasChildNodes())
el.removeChild(el.firstChild);el.appendChild(document.createTextNode(value));}
function getRRR(p1,p2){var x1,y1,x2,y2;if(p1.x<p2.x){x1=p1.x;x2=p2.x;}else{x2=p1.x;x1=p2.x;}
if(p1.y<p2.y){y1=p1.y;y2=p2.y;}else{y2=p1.y;y1=p2.y;}
return new Rectangle(x1-3,y1-3,x2-x1+6,y2-y1+6);}
function findCentre(i,j){return new Point(i*PieceWidth+PieceWidth/2,j*PieceHeight+PieceHeight/2);}

function savescore1() {
        $(".dialog .message").html("Điểm bạn đạt được là <strong class='score'>" + getPoints() + "</strong>");
        $(".button.btn-submit").removeClass("hide").one("click", function () {
            var getuserinfoUrl = drc4("87097116c3664b52b06957a029b391e0159d741779f2b9dbc91b719fe0261a88e770a0b9088ebcc9a660ad20589d21812e", alphabet);/*//www.gamevui.com/games/services/getuserinfo.aspx*/
            $.ajax({ url: getuserinfoUrl, mimeType: "text/plaint" })
                .done(function (xml) {
                    var $xml = $($.parseXML("<data>" + xml + "</data>")), $key = $xml.find("key"), $username = $xml.find("username");

                    $(".button.btn-submit").removeClass("hide").off().on("click", function () {
                        /*Gửi điểm*/
                        var prefix = drc4("cf666b52c23d4510b86242a739ed86e41dcb32", alphabet);
                        var gid = getvar("gid"), s = gid + ":" + getPoints(), k = prefix + $key.text();

                        s = rc4(s, k);
                        var data = {
                            "u": $("#username").val(),
                            "p": $("#password").val(),
                            "s": s
                        };
                        var sendscoreUrl = drc4("87097116c3664b52b06957a029b391e0159d741779f2b9dbc91b719fe0261a88e764a0a3198ebad4bd6be52e058c2a", alphabet);/*//www.gamevui.com/games/services/sendscore.aspx*/
                        $.post(sendscoreUrl, data, function (x) {
                            try {
                                var $x = $($.parseXML("<data>" + x + "</data>")), $message = $x.find("message");
                                $(".dialog .message").html($message);
                            } catch (e) {
                                $(".dialog .message").html("Gửi điểm không thành công.<br/>Vui lòng thử lại sau!");
                            }
                            $(".button.btn-submit").off().addClass("hide");
                        }, "text").fail(function (xhr, status, error) {
                            console.log("status", status); console.log("error", error);
                            $(".dialog .message").html("Gửi điểm không thành công.<br/>Vui lòng thử lại sau!");
                            $(".button.btn-submit").off().addClass("hide");
                        });
                    });

                    if ($username.length < 1 || $username.text() == '') {
                        /*Đăng nhập*/
                        if ($(".dialog .body .loginbox").hasClass("hide")) {
                            $(".dialog .body .loginbox").removeClass("hide");
                        }
                    } else {
                        $("#username").val($username.text());
                        $(".button.btn-submit").trigger("click");
                    }
                })
                .fail(function (xhr, status, error) {
                    console.log("status", status); console.log("error", error);
                    $(".dialog .message").html("Gửi điểm không thành công!<br/>Xin vui lòng thử lại sau.");
                    $(".button.btn-submit").off().addClass("hide");
                });
        });
    }