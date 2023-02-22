
function hasFlashSupport(){var a=!1;if(navigator.plugins&&navigator.plugins.length){var e=navigator.plugins["Shockwave Flash"];e&&(a=!0,e.description);navigator.plugins["Shockwave Flash 2.0"]&&(a=!0)}else{if(navigator.mimeTypes&&navigator.mimeTypes.length){var f=navigator.mimeTypes["application/x-shockwave-flash"];(a=f&&f.enabledPlugin)}else{try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),a=!0}catch(h){try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a=!0}catch(i){try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=!0}catch(j){}}}}}
return a;}
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true;var M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}
return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}();var k=function(){if(!M.w3){return}
if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}
if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}
if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}
try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}
f()})()}}
if(M.wk){(function(){if(J){return}
if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}
f()})()}
s(f)}}();function f(){if(J){return}
try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}
J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}
function K(X){if(J){X()}else{U[U.length]=X}}
function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}
function h(){if(T){V()}else{H()}}
function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}
X.removeChild(aa);Z=null;H()})()}else{H()}}
function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}
if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}
var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}
P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}
ab(aa)}}}}}
function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}
return X}
function A(){return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}
function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}
aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}
if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}
j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}
if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}
u(aa,ab,X)}}
function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}
function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}
return aa}
function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}
if(aa){if(typeof ai.id==D){ai.id=Y}
if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}
var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}
aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}
for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}
aa.parentNode.replaceChild(Z,aa);X=Z}}
return X}
function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}
function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}
function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}
Y.parentNode.removeChild(Y)}}
function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}
return X}
function C(X){return j.createElement(X)}
function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}
function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}
function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}
var aa=j.getElementsByTagName("head")[0];if(!aa){return}
var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}
if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}
G=X}
if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}
function w(Z,X){if(!m){return}
var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}
function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}
var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}
var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}
for(var Y in M){M[Y]=null}
M=null;for(var X in swfobject){swfobject[X]=null}
swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}
aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}
if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}
if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}
X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}
if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}
if(aa==null){return L(Z)}
var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}
return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}
if(E){E(B)}}
a=false}}}}();if(typeof deconceptswf=='undefined')
var deconceptswf=new Object();deconceptswf.SWFObject=function(swfUrl,flashID,width,height,version,color,quality){if(!document.getElementById||!hasFlashSupport())
return;this.variables=new Array();this.attributes=new Array();if(swfUrl)this.addParam('src',swfUrl);if(flashID)this.addParam('id',flashID);if(width)this.addParam('width',width);if(height)this.addParam('height',height);if(version)this.addParam('version',version);if(!color)
color='#FFFFFF';this.addParam('bgcolor',color);if(!quality)
quality='height';this.addParam('quality',quality);}
deconceptswf.SWFObject.prototype={addVariable:function(name,value){this.variables[name]=value;},addParam:function(name,value){this.attributes[name]=value;},attr:function(ds){var str='';for(var d in ds)
str+=' '+d+'="'+ds[d]+'"';return str;},params:function(ds){var str='params=data';for(var d in ds)
str+='&'+d+'='+ds[d];return str;},write:function(containerID){var container=document.getElementById(containerID);if(container){var flashID=this.attributes['id'];this.attributes['name']=flashID;var attributes=this.attr(this.attributes);var flashvars=this.params(this.variables);var htmlSWF='<embed'+attributes+' scale="noScale" allowfullscreen="true" ';htmlSWF+='allownetworking="all" allowscriptaccess="always" name="mediaplayer" menu="false" ';htmlSWF+='flashvars="'+flashvars+'" ';htmlSWF+='wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" ';htmlSWF+='type="application/x-shockwave-flash" loop="false"></embed>';container.innerHTML=htmlSWF;}}}
var SWFObject=deconceptswf.SWFObject;var sAscii=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`";sAscii=sAscii+"abcdefghijklmnopqrstuvwxyz{|}~";var sHex="0123456789abcdef";function hex(i){var h="";for(j=0;j<=3;j++){h+=sHex.charAt((i>>(j*8+4))&0x0F)+sHex.charAt((i>>(j*8))&0x0F);}
return h;}
function add(x,y){return((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000);}
function R1(A,B,C,D,X,S,T){var q=add(add(A,(B&C)|((~B)&D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R2(A,B,C,D,X,S,T){var q=add(add(A,(B&D)|(C&(~D))),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R3(A,B,C,D,X,S,T){var q=add(add(A,B^C^D),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R4(A,B,C,D,X,S,T){var q=add(add(A,C^(B|(~D))),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function oSecu(sInp){var wLen=(((sInp.length+8)>>6)+1)<<4;var X=new Array(wLen);j=4;for(i=0;(i*4)<sInp.length;i++){X[i]=0;for(j=0;j<4&&(i*4+j)<sInp.length;j++){X[i]+=(sAscii.indexOf(sInp.charAt((i*4)+j))+32)<<(j*8);}}
if(j==4){X[i++]=0x80;}
else{X[i-1]+=0x80<<(j*8);}
while(i<wLen){X[i]=0;i++;}
X[wLen-2]=sInp.length<<3;var a=0x67452301,b=0xefcdab89,c=0x98badcfe,d=0x10325476;for(i=0;i<wLen;i+=16){var aO=a,bO=b,cO=c,dO=d;a=R1(a,b,c,d,X[i+0],7,0xd76aa478);d=R1(d,a,b,c,X[i+1],12,0xe8c7b756);c=R1(c,d,a,b,X[i+2],17,0x242070db);b=R1(b,c,d,a,X[i+3],22,0xc1bdceee);a=R1(a,b,c,d,X[i+4],7,0xf57c0faf);d=R1(d,a,b,c,X[i+5],12,0x4787c62a);c=R1(c,d,a,b,X[i+6],17,0xa8304613);b=R1(b,c,d,a,X[i+7],22,0xfd469501);a=R1(a,b,c,d,X[i+8],7,0x698098d8);d=R1(d,a,b,c,X[i+9],12,0x8b44f7af);c=R1(c,d,a,b,X[i+10],17,0xffff5bb1);b=R1(b,c,d,a,X[i+11],22,0x895cd7be);a=R1(a,b,c,d,X[i+12],7,0x6b901122);d=R1(d,a,b,c,X[i+13],12,0xfd987193);c=R1(c,d,a,b,X[i+14],17,0xa679438e);b=R1(b,c,d,a,X[i+15],22,0x49b40821);a=R2(a,b,c,d,X[i+1],5,0xf61e2562);d=R2(d,a,b,c,X[i+6],9,0xc040b340);c=R2(c,d,a,b,X[i+11],14,0x265e5a51);b=R2(b,c,d,a,X[i+0],20,0xe9b6c7aa);a=R2(a,b,c,d,X[i+5],5,0xd62f105d);d=R2(d,a,b,c,X[i+10],9,0x2441453);c=R2(c,d,a,b,X[i+15],14,0xd8a1e681);b=R2(b,c,d,a,X[i+4],20,0xe7d3fbc8);a=R2(a,b,c,d,X[i+9],5,0x21e1cde6);d=R2(d,a,b,c,X[i+14],9,0xc33707d6);c=R2(c,d,a,b,X[i+3],14,0xf4d50d87);b=R2(b,c,d,a,X[i+8],20,0x455a14ed);a=R2(a,b,c,d,X[i+13],5,0xa9e3e905);d=R2(d,a,b,c,X[i+2],9,0xfcefa3f8);c=R2(c,d,a,b,X[i+7],14,0x676f02d9);b=R2(b,c,d,a,X[i+12],20,0x8d2a4c8a);a=R3(a,b,c,d,X[i+5],4,0xfffa3942);d=R3(d,a,b,c,X[i+8],11,0x8771f681);c=R3(c,d,a,b,X[i+11],16,0x6d9d6122);b=R3(b,c,d,a,X[i+14],23,0xfde5380c);a=R3(a,b,c,d,X[i+1],4,0xa4beea44);d=R3(d,a,b,c,X[i+4],11,0x4bdecfa9);c=R3(c,d,a,b,X[i+7],16,0xf6bb4b60);b=R3(b,c,d,a,X[i+10],23,0xbebfbc70);a=R3(a,b,c,d,X[i+13],4,0x289b7ec6);d=R3(d,a,b,c,X[i+0],11,0xeaa127fa);c=R3(c,d,a,b,X[i+3],16,0xd4ef3085);b=R3(b,c,d,a,X[i+6],23,0x4881d05);a=R3(a,b,c,d,X[i+9],4,0xd9d4d039);d=R3(d,a,b,c,X[i+12],11,0xe6db99e5);c=R3(c,d,a,b,X[i+15],16,0x1fa27cf8);b=R3(b,c,d,a,X[i+2],23,0xc4ac5665);a=R4(a,b,c,d,X[i+0],6,0xf4292244);d=R4(d,a,b,c,X[i+7],10,0x432aff97);c=R4(c,d,a,b,X[i+14],15,0xab9423a7);b=R4(b,c,d,a,X[i+5],21,0xfc93a039);a=R4(a,b,c,d,X[i+12],6,0x655b59c3);d=R4(d,a,b,c,X[i+3],10,0x8f0ccc92);c=R4(c,d,a,b,X[i+10],15,0xffeff47d);b=R4(b,c,d,a,X[i+1],21,0x85845dd1);a=R4(a,b,c,d,X[i+8],6,0x6fa87e4f);d=R4(d,a,b,c,X[i+15],10,0xfe2ce6e0);c=R4(c,d,a,b,X[i+6],15,0xa3014314);b=R4(b,c,d,a,X[i+13],21,0x4e0811a1);a=R4(a,b,c,d,X[i+4],6,0xf7537e82);d=R4(d,a,b,c,X[i+11],10,0xbd3af235);c=R4(c,d,a,b,X[i+2],15,0x2ad7d2bb);b=R4(b,c,d,a,X[i+9],21,0xeb86d391);a=add(a,aO);b=add(b,bO);c=add(c,cO);d=add(d,dO);}
return hex(a)+hex(b)+hex(c)+hex(d);}
(function(window){var document=window.document,navigator=window.navigator,console=window.console,localStorage=window.localStorage;var jhCore=window.jhCore=function(selector,context){if(selector!=undefined){if(!(this instanceof jhCore)||context===undefined){return new jhCore(selector,"init")}
jhCore.fn.init.call(this,selector,context);return this}
return null};jhCore.prototype={size:function(){return this.length},bind:function(eventName,callback,weight){return fn.bind(this,eventName,callback,weight)},unbind:function(eventName,callback){for(var i=0,elem;elem=this[i];i++){var cached=jhCore.data(elem,"jhCore.events."+eventName);if(!cached)
continue
var index,callbacks=cached.callbacks;for(var j=0,d;d=callbacks[j];j++){if(d.cb==callback){index=j;break}}
index!==-1&&cached.callbacks.splice(index,1)}
return this},unbindAll:function(eventName){for(var i=0,elem;elem=this[i];i++){var cached=jhCore.data(elem,"jhCore.events."+eventName);if(!cached)
continue
if(elem.detachEvent)
elem.detachEvent("on"+fn.mapEventName(eventName),cached.func)
else{if(elem.removeEventListener)
elem.removeEventListener(fn.mapEventName(eventName),cached.func,false)}
jhCore.removeData(elem,"jhCore.events."+eventName)}
return this},blur:function(callback,weight){return fn.bind(this,"blur",callback,weight)},click:function(callback,weight){return fn.bind(this,"click",callback,weight)},change:function(callback,weight){return fn.bind(this,"change",callback,weight)},dblclick:function(callback,weight){return fn.bind(this,"dblclick",callback,weight)},clickOutside:function(callback,weight,force,group){if(jhCore.isFunction(callback)){for(var i=0,e;e=this[i];i++){var g=jhCore.data(e,"clickoutside.group"),result;if(jhCore.isString(g)&&g.indexOf("jhcog.")!=0){g=null}
result=fn.addCoCallback(e,group||g,callback,weight);if(!g){jhCore.data(e,"clickoutside.group",result)}}
if(force){var newGroup=this.data("clickoutside.group");curClickGroups!=newGroup&&fn.fireCo(curClickGroups);curClickGroups=newGroup}
fn.bindCo()}else{fn.fireCo(this[0])}
return this},clickOutsideWith:function(elems){if(this.size()>0){var e=this[0],g=jhCore.data(e,"clickoutside.group");if(g){if(!jhCore.isArray(elems)&&!(elems instanceof jhCore)){elems=[elems]}
for(var i=0,elem;elem=elems[i];i++){jhCore.data(elem,"clickoutside.group",g)}}}
return this},focus:function(callback,weight){return fn.bind(this,"focus",callback,weight)},keydown:function(callback,weight){return fn.bind(this,"keydown",callback,weight)},keypress:function(callback,weight){return fn.bind(this,"keypress",callback,weight)},keyup:function(callback,weight){return fn.bind(this,"keyup",callback,weight)},mousedown:function(callback,weight){return fn.bind(this,"mousedown",callback,weight)},mouseup:function(callback,weight){return fn.bind(this,"mouseup",callback,weight)},mousemove:function(callback,weight){return fn.bind(this,"mousemove",callback,weight)},mouseenter:function(callback,weight){return fn.bind(this,"mouseenter",callback,weight)},mouseleave:function(callback,weight){return fn.bind(this,"mouseleave",callback,weight)},hover:function(enter,leave){return this.mouseenter(enter).mouseleave(leave)},mousewheel:function(callback,weight){if(jhCore.browser.firefox){return fn.bind(this,"DOMMouseScroll",callback,weight)}else{return fn.bind(this,"mousewheel",callback,weight)}},resize:function(callback,weight){return fn.bind(this,"resize",callback,weight)},scroll:function(callback,weight){return fn.bind(this,"scroll",callback,weight)},submit:function(callback,weight){return fn.bind(this,"submit",callback,weight)},reset:function(callback,weight){return fn.bind(this,"reset",callback,weight)},select:function(callback,weight){return fn.bind(this,"select",callback,weight)},hashchange:function(callback){var w=this[0];if("onhashchange"in window){return fn.bind(this,"hashchange",callback)}else{if(w&&w.location){hashValue=w.location.hash;oldURL=w.location.href;setInterval(function(){if(hashValue!=w.location.hash){hashValue=w.location.hash;var event={};event.timeStamp=new Date().getTime();event.srcElement=event.target=w;event.oldURL=oldURL;event.newURL=oldURL=w.location.href;callback(event)}},hashChangeInv)}
return this}},each:function(callback){for(var i=0,elem;elem=this[i];i++){if(callback.call(elem,i,elem)==false){break}}},toArray:function(){var result=new Array();for(var i=0;i<this.size();i++){result.push(this[i])}
return result},hasClass:function(className){return fn.hasClass(className,this[0])},addClass:function(className){if(className){for(var i=0,elem;elem=this[i];i++){var cl=elem.classList;if(cl){cl.add(className)}else{var classNames=elem.className;if(!classNames){elem.className=className}else{var classes=classNames.split(" "),skip=false,length=classes.length;for(var j=0;j<length;j++){if(classes[j]==className){skip=true;break}}
if(!skip){classes.push(className)}
elem.className=classes.join(" ")}}}}
return this},removeClass:function(className){if(className){for(var i=0,elem;elem=this[i];i++){var cl=elem.classList;if(cl&&cl.length>0){cl.remove(className)}else{var classNames=elem.className;if(!classNames){continue}
var classes=classNames.split(" "),skip=true,length=classes.length;for(var j=0;j<length;j++){if(classes[j]==className){classes.splice(j,1);skip=false;break}}
if(!skip){elem.className=classes.join(" ")}}}}
return this},attr:function(name,value){if(!jhCore.isString(name)){for(var k in name){this.attr(k,name[k])}
return this}
if(value==undefined){return fn.attr(this[0],name)}
for(var i=0,elem;elem=this[i];i++){fn.attr(elem,name,value)}
return this},css:function(name,value){if(!jhCore.isString(name)){for(var k in name){this.css(k,name[k])}
return this}
var length=this.length;if(length==0){return}
if(value!=undefined){for(var i=0;i<length;i++){fn.css(this[i],name,value,true)}
return this}
return fn.css(this[0],name)},val:function(value){var length=this.length;if(value==undefined){return length==0?undefined:this[0].value}
for(var i=0;i<length;i++){this[i].value=value}
return this},empty:function(){for(var i=0,elem;elem=this[i];i++){while(elem.firstChild){elem.removeChild(elem.firstChild)}}
return this},html:function(content){var length=this.length;if(content==undefined){if(length==0){return}
return this[0].innerHTML}
try{for(var i=0;i<length;i++){this[i].innerHTML=fn.cleanHTML(content);fn.evalScripts(fn.getScripts(this[i]))}}catch(e){this.empty().append(content)}
return this},text:function(content){var length=this.length;if(content==undefined){if(length==0){return}
var elem=this[0];if(elem.textContent!=undefined){return elem.textContent}
return elem.innerText}
for(var i=0,e;e=this[i];i++){if(e.textContent!=undefined){e.textContent=content}else{e.innerText=content}}
return this},before:function(content){var isStr=jhCore.isString(content);for(var i=0,e;e=this[i];i++){var p=e.parentNode;if(!isStr){p.insertBefore(content,e);continue}
var d=jhCore.createElement("DIV");d.innerHTML=fn.cleanHTML(content);while(d.firstChild!=null){var c=d.firstChild;d.removeChild(c);p.insertBefore(c,e)}}
return this},after:function(content){for(var i=0,e;e=this[i];i++){var c,p=e.parentNode,d=jhCore.createElement("DIV");d.innerHTML=fn.cleanHTML(content);if(p.lastChild==e){while(d.firstChild!=null){c=d.firstChild;d.removeChild(c);p.appendChild(c)}}else{var next=e.nextSibling;while(d.firstChild!=null){c=d.firstChild;d.removeChild(c);p.insertBefore(c,next)}}}
return this},clone:function(){if(this.size()==0){return}
return this[0].cloneNode(true)},append:function(content){if(this.size()==0){return this}
var i,length=0,list,scripts=[];if(content instanceof jhCore){length=content.size();list=content}else{if(jhCore.isArray(content)){length=content.length;list=content}else{if(jhCore.isString(content)){list=new Array();var d=jhCore.createElement("DIV");d.innerHTML=fn.cleanHTML(content);while(d.firstChild!=null){var c=d.firstChild;if(c.nodeName.toLowerCase()=="script"&&c.type=="text/javascript"){scripts.push(d.removeChild(c))}else{list.push(c);scripts=fn.getScripts(c);d.removeChild(c)}}
length=list.length}else{length=this.size();for(i=0;i<length;i++){this[i].appendChild(content)}
return this}}}
var f=document.createDocumentFragment();for(i=0;i<length;i++){f.appendChild(list[i])}
length=this.size();for(i=0;i<length;i++){this[i].appendChild(f.cloneNode(true));scripts.length>0&&fn.evalScripts(scripts)}
return this},prepend:function(content){if(this.size()==0){return this}
var i,length=0,list,scripts=[];if(content instanceof jhCore){length=content.size();list=content}else{if(jhCore.isArray(content)){length=content.length;list=content}else{if(jhCore.isString(content)){list=new Array();var d=jhCore.createElement("DIV");d.innerHTML=fn.cleanHTML(content);while(d.firstChild!=null){var c=d.firstChild;if(c.nodeName.toLowerCase()=="script"&&c.type=="text/javascript"){scripts.push(d.removeChild(c))}else{list.push(c);scripts=fn.getScripts(c);d.removeChild(c)}}
length=list.length}else{length=1;list=Array(1);list[0]=content}}}
var f=document.createDocumentFragment();for(i=0;i<length;i++){f.appendChild(list[i])}
var e;for(i=0;e=this[i];i++){if(e.hasChildNodes()){var fNode=e.firstChild;e.insertBefore(f.cloneNode(true),fNode)}else{e.appendChild(f.cloneNode(true))}
scripts.length>0&&fn.evalScripts(scripts)}
return this},remove:function(){for(var i=0,elem;elem=this[i];i++){jhCore.removeData(elem);elem.parentNode&&elem.parentNode.removeChild(elem)}},insertAtCaret:function(value){if(this.size()==0){return}
var e=this[0];if(document.selection){e.focus();var sel=document.selection.createRange();sel.text=value;e.focus()}else{if(e.selectionStart||e.selectionStart=="0"){var startPos=e.selectionStart,endPos=e.selectionEnd,scrollTop=e.scrollTop,newValue=e.value.substring(0,startPos)+value,newPos=startPos+value.length;newValue+=e.value.substring(endPos,e.value.length);e.value=newValue;e.focus();e.selectionStart=newPos;e.selectionEnd=newPos;e.scrollTop=scrollTop}else{e.value+=value;e.focus()}}
return this},offset:function(absPosition){if(this.size()==0){return}
var o,v,e=this[0];if(e.getBoundingClientRect){o=e.getBoundingClientRect();var doc=e.ownerDocument,docElem=doc.documentElement||doc.body,left=o.left-(docElem.clientLeft||0),top=o.top-(docElem.clientTop||0);if(absPosition){v=jhCore.getViewport();return{left:left+v.offsetX,top:top+v.offsetY}}}else{o={left:e.offsetLeft,top:e.offsetTop};var op=o.offsetParent;while(op){o.left+=op.offsetLeft;o.top+=op.offsetTop;op=op.offsetParent}
if(!absPosition){v=jhCore.getViewPort();o.left-=v.offsetX;o.top-=v.offsetY}}
return{left:o.left,top:o.top}},position:function(){if(this.size()==0){return}
return{left:this[0].offsetLeft,top:this[0].offsetTop}},top:function(){if(this.size()==0){return 0}
return this.offset(true).top},left:function(){if(this.size()==0){return 0}
return this.offset(true).left},innerWidth:function(){if(this.size()==0){return 0}
var elem=this[0];return Math.max(0,elem.offsetWidth-jhCore.intval(fn.css(elem,"border-left-width"))-jhCore.intval(fn.css(elem,"border-right-width")))},outerWidth:function(margin){if(this.size()==0){return 0}
var elem=this[0];if(margin){return Math.max(0,elem.offsetWidth+jhCore.intval(fn.css(elem,"margin-left"))+jhCore.intval(fn.css(elem,"margin-right")))}
return Math.max(0,elem.offsetWidth)},width:function(){if(this.size()==0){return 0}
var elem=this[0];return Math.max(0,this.innerWidth()-jhCore.intval(fn.css(elem,"padding-left"))-jhCore.intval(fn.css(elem,"padding-right")))},innerHeight:function(){if(this.size()==0){return 0}
var elem=this[0];return Math.max(0,elem.offsetHeight-jhCore.intval(fn.css(elem,"border-top-width"))-jhCore.intval(fn.css(elem,"border-bottom-width")))},outerHeight:function(margin){if(this.size()==0){return 0}
var elem=this[0];if(margin){return Math.max(0,elem.offsetHeight+jhCore.intval(fn.css(elem,"margin-top"))+jhCore.intval(fn.css(elem,"margin-bottom")))}
return Math.max(0,elem.offsetHeight)},height:function(){if(this.size()==0){return 0}
var elem=this[0];return Math.max(0,this.innerHeight()-jhCore.intval(fn.css(elem,"padding-top"))-jhCore.intval(fn.css(elem,"padding-bottom")))},scrollTop:function(top){if(this.size()==0){return 0}
if(top==undefined){var t=this[0];if(t.nodeType==9){return t.documentElement.scrollTop||t.body.scrollTop}
return t.scrollTop}else{for(var i=0,e;e=this[i];i++){e.scrollTop=top}}
return this},scrollLeft:function(left){if(this.size()==0){return 0}
if(left==undefined){var t=this[0];if(t.nodeType==9){return t.documentElement.scrollLeft||t.body.scrollLeft}
return t.scrollLeft}else{for(var i=0,e;e=this[i];i++){e.scrollLeft=left}}
return this},opacity:function(value,max){var i,val,e;if(jhCore.browser.msie&&jhCore.browser.version<9){for(i=0;e=this[i];i++){val=(jhCore.isArray(value)?value[i]:value);if(max&&val>max[i]){val=max[i]}
val=val*100;if(value==""){e.style.removeAttribute("filter")}else{if(e.filters["DXImageTransform.Microsoft.Alpha"]==undefined){e.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+val+")"}else{e.filters["DXImageTransform.Microsoft.Alpha"].Opacity=val}}}}else{for(i=0;e=this[i];i++){val=jhCore.isArray(value)?value[i]:value;if(max&&val>max[i]){val=max[i]}
e.style.opacity=val}}
return this},fadeIn:function(duration,callback){return fn.fade(this,true,duration,callback)},fadeOut:function(duration,callback){return fn.fade(this,false,duration,callback)},stopFading:function(){return this.data("jhCore.fade",2)},show:function(effect,options){var i,length=this.size(),dur=jhCore.isNumber(options)?options:(options&&options.duration),cb=options&&options.callback;if(effect==="blur"){this.fadeIn(dur,cb)}else{if(effect==="roll"){return this.rollDown(dur,cb)}}
for(i=0;i<length;i++){this[i].style.display="";var e=this[i];if(fn.css(e,"display")!="none"){continue}
var oldDisplay=jhCore.data(e,"display");if(oldDisplay&&oldDisplay!="none"){this[i].style.display=oldDisplay;continue}
var tagName=e.tagName.toUpperCase(),t=jhCore.createElement(tagName);document.body.appendChild(t);this[i].style.display=fn.css(t,"display");document.body.removeChild(t)}
return this},hide:function(effect,options){var dur=jhCore.isNumber(options)?options:(options&&options.duration),cb=options&&options.callback;for(var i=0,e;e=this[i];i++){jhCore.data(e,"display",fn.css(e,"display"))}
if(effect==="blur"){this.fadeOut(dur,cb)}else{if(effect==="roll"){this.rollUp(dur,cb)}else{this.css("display","none")}}
return this},toggle:function(effect,options){for(var i=0,elem;elem=this[i];i++){if(fn.css(elem,"display")!="none"){jhCore(elem).hide(effect,options)}else{jhCore(elem).show(effect,options)}}
return this},parents:function(selector){var result=new Array();if(this.size()==0){return}
var p=this[0].parentNode;while(p){if(p.nodeType==1){result.push(p)}
p=p.parentNode}
return jhCore(jhCore.filter(result,selector))},parent:function(){if(this.size()==0){return}
return jhCore(this[0].parentNode)},children:function(selector){if(this.size()==0){return}
var result=new Array();for(var i=0,cn;(cn=this[0].childNodes[i])!=null;i++){if(cn.nodeType==1){result.push(cn)}}
return jhCore(jhCore.filter(result,selector))},find:function(selector){var parents=new Array(),length=this.size();for(var i=0;i<length;i++){parents.push(this[i])}
return jhCore(fn.findDOMElement(parents,selector))},filter:function(selector){return jhCore(jhCore.filter(this,selector))},get:function(param){var index;if(jhCore.isFunction(param)){index=param(this.size())}else{if(jhCore.isNumber(param)){index=param}}
return this[index]?jhCore(this[index]):undefined},rollUp:function(duration,callback,options){return this.roll(jhCore.extend({duration:duration,callback:callback},options))},rollDown:function(duration,callback,options){return this.roll(jhCore.extend({display:1,duration:duration,callback:callback},options))},roll:function(options){if(this.size()<1){return this}
if(!options){options={}}
var cb=options.callback;if(this.data("jhCore.roll")!=1){this.data("jhCore.roll",1);var dir=options.direction,dsp=options.display,dur=options.duration||animation.settings.duration,bf=options.before,easing=(animation.step[options.easing]&&options.easing)||"sin";jhCore.isFunction(bf)&&bf.call(this);dsp&&this.show();var elem=this[0],ecss,jhElem=this,orgVal,parent=elem.parentNode,wrapper=jhCore.createElement("DIV",{},{overflow:"hidden"}),zw=jhCore(wrapper),width=this.outerWidth(),height=this.outerHeight();if(dir){orgVal=width;ecss="width";zw.css("height",height+"px")}else{orgVal=height;ecss="height";zw.css("width",width+"px")}
zw.css(ecss,dsp?((options.start||0)+"px"):(orgVal+"px"));fn.copyCss(elem,wrapper,animation.css);this.css("margin","0px");parent.insertBefore(wrapper,elem);wrapper.appendChild(elem);var val=0,start=options.start||(dsp?0:orgVal),end=options.end||(dsp?orgVal:0),curTime=0,interval=animation.settings.interval,timer=setInterval(function(){curTime+=interval;val=animation.step[easing](start,end,dur,curTime);var cancel=false;if(val==-1){val=end;cancel=true}
zw.css(ecss,val+"px");if(cancel){clearInterval(timer);jhElem.removeData("jhCore.roll").css("margin","");!dsp&&jhCore.intval(options.start)<=0&&jhElem.hide();parent.insertBefore(elem,wrapper);parent.removeChild(wrapper);wrapper=null;jhCore.isFunction(cb)&&cb.call(jhElem)}},interval)}else{jhCore.isFunction(cb)&&cb.call(this)}
return this},slideUp:function(duration,callback,options){this.slide(jhCore.extend({duration:duration,callback:callback,reverse:true},options))},slideDown:function(duration,callback,options){this.slide(jhCore.extend({duration:duration,callback:callback},options))},slide:function(options){if(this.size()<1){return this}
if(!options){options={}}
var cb=options.callback;if(this.data("jhCore.slide")!=1){this.data("jhCore.slide",1);var dir=options.direction,reverse=options.reverse,dur=options.duration||animation.settings.duration,bf=options.before,easing=(animation.step[options.easing]&&options.easing)||"sin";jhCore.isFunction(bf)&&bf.call(this);var ecss=dir?"margin-left":"margin-top",jhElem=this,val=0,start=options.start,end=options.end;if(!jhCore.isNumber(start)){start=jhCore.intval(jhElem.css(ecss))}
if(!jhCore.isNumber(end)){end=this[dir?"outerWidth":"outerHeight"]();end=reverse?(start-end):(start+end)}
var curTime=0,interval=animation.settings.interval,timer=setInterval(function(){curTime+=interval;val=animation.step[easing](start,end,dur,curTime);var cancel=false;if(val==-1){val=end;cancel=true}
jhElem.css(ecss,val+"px");if(cancel){clearInterval(timer);jhElem.removeData("jhCore.slide");jhCore.isFunction(cb)&&cb.call(jhElem)}},interval)}else{jhCore.isFunction(cb)&&cb.call(this)}
return this},data:function(name,data){if(this.size()>0&&data==undefined){return jhCore.data(this[0],name)}
for(var i=0,e;e=this[i];i++){if(jhCore.isFunction(data)){data.call(e,jhCore.data(e,name))}else{jhCore.data(e,name,data)}}
return this},removeData:function(name){for(var i=0,e;e=this[i];i++){jhCore.removeData(e,name)}
return this},buzz:function(callback,coffset){var movefactor=5;var posarr=[[1,1],[1,-1],[-1,-1],[-1,1],[1,-1],[-1,-1],[-1,1],[1,1],[-1,-1],[-1,1],[1,1],[1,-1],[-1,1],[1,1],[1,-1],[-1,-1],[1,1],[1,-1],[-1,-1],[-1,1],[1,1],[1,-1],[-1,-1],[-1,1],[1,-1],[-1,-1],[-1,1],[1,1],[-1,-1],[-1,1],[1,1],[1,-1],[-1,1],[1,1],[1,-1],[-1,-1],[1,1],[1,-1],[-1,-1],[-1,1]];var elem=jh(this[0]);var elemfs={top:0,left:0};if(coffset)elemfs=elem.offset();var index=0;function bzMoveFunc(){var pos=posarr[index];if(pos){try{var nt=elemfs.top+pos[0]*movefactor;var nl=elemfs.left+pos[1]*movefactor;elem.css("top",nt+"px");elem.css("left",nl+"px");}
catch(x){}}
index++;if(index<posarr.length)
intmf=setTimeout(bzMoveFunc,20);else{if(jh.isFunction(callback))
callback();}}
var intmf=setTimeout(bzMoveFunc,20);},is:function(selector){if(this.size()==0){return false}
var elem=jhCore.filter(this,selector);if(selector.charAt(0)==":"){var attr=selector.substr(1),filter=filters[attr];for(var i=0,e;e=elem[i];i++){if(filter&&filter(e)){return true}}
return false}
return elem.size()>0}};jhCore.extend=function(){var target=arguments[0]||{},length=arguments.length,deep=false,i=1,src,value;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2}
for(;i<length;i++){for(var key in arguments[i]){src=target[key];value=arguments[i][key];if(src===value){continue}
if(deep&&value){var clone=jhCore.isArray(src)?[]:{};jhCore.extend(deep,clone,value)}else{if(value!=undefined){target[key]=value}}}}
return target};var scripts=new Array(),readyCallbacks=new Array(),xDomainReg=new RegExp("^https?://"+window.location.host),jsonCallbacks={},jhId=0,jhGroupId=0,cache={},expandAttr="jhId"+new Date().getTime(),delExpandAttr=true,mouseenter=false,hoverIframe=false,windowData={},noData={embed:true,object:true,appled:true},convertAttrs={"class":"className","for":"htmlFor",readonly:"readOnly"},idleCallbacks,idleStatus=false,idleHandled=false,idleTimer,lastBusy=0,lastWndX,lastWndY,hashValue,oldURL,hashChangeInv=300,bindCo=false,curClickGroups=null,coCallbacks,escMap={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'"'};var div=document.createElement("DIV");try{delete div.test;mouseenter=typeof div.onmouseenter!="undefined"}catch(ex){delExpandAttr=false}
div=null;var animation={settings:{interval:10,duration:250},css:["position","top","left","right","bottom","float","display","margin","margin-top","margin-bottom","margin-left","margin-right","background"],step:{sin:function(start,end,duration,currentTime){if(currentTime>=duration){return-1}
var t=(currentTime/duration)*(Math.PI/2);return Math.floor(start+(end-start)*Math.sin(t))},linear:function(start,end,duration,currentTime){if(currentTime>=duration){return-1}
return Math.floor(start+(end-start)*(currentTime/duration))},log:function(start,end,duration,currentTime){if(currentTime>=duration){return-1}
var t=(currentTime/duration)*Math.E+1;return Math.floor(start+(end-start)*Math.log(t))}}};var filters={hidden:function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;return(width===0&&height===0)||jhCore.fn.css(elem,"display")==="none"},visible:function(elem){return!filters.hidden(elem)},enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"},disabled:function(elem){return elem.disabled===true},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}
return elem.selected===true},checked:function(elem){return elem.checked===true}};jhCore.fn={init:function(selector,context){var elements,i;if(jhCore.isArray(selector)){elements=selector}else{if(jhCore.isString(selector)){elements=[document];var subs=selector.split(" "),sLength=subs.length;for(i=0;i<sLength;i++){elements=fn.findDOMElement(elements,subs[i]);if(elements.length==0){break}}}else{elements=[selector]}}
var elemsLength=elements.length;if(jhCore.isArray(context)||context instanceof jhCore){i=0;while(i<elemsLength){if(jhCore.inArray(elements[i],context)==-1){elements.splice(i,1)}else{i++}}}
elemsLength=elements.length;for(i=0;i<elemsLength;i++){this[i]=elements[i]}
this.length=elemsLength},hasClass:function(className,e){className=jhCore.trim(className);if(!className||!e){return true}
var cl=e.classList;if(cl){return cl.contains(className)}else{if((" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(" "+className+" ")>-1){return true}}
return false},checkClasses:function(classes,e){if(!classes||classes.length<1){return true}
var r=0;for(var i=0,c;c=classes[i];i++){if(this.hasClass(c,e)){r++}}
return r==classes.length},isSubElement:function(parents,e){if(jhCore.inArray(document,parents)!=-1){return true}
var p=e.parentNode;while(p!=null){if(jhCore.inArray(p,parents)!=-1){return true}
p=p.parentNode}
return false},parseAttrStr:function(str){var result={};if(jhCore.isString(str)){var arr=str.split("]["),length=arr.length;for(var i=0;i<length;i++){var pair=arr[i].split("="),att=pair[0],value=pair[1],nindex=pair[0].indexOf("!"),not=false;if(value==undefined){value=true}
typeof value=="string"&&jhCore.trim(value,"'\"");if(nindex==0||nindex==pair[0].length-1){att=nindex==0?pair[0].substr(1):pair[0].substr(0,nindex);not=true}
result[att]={value:value,not:not}}}
return result},checkAttributes:function(target,attrs){var valid=true;for(var f in attrs){if((fn.attr(target,f)==attrs[f].value)^!attrs[f].not){valid=false}}
return valid},findDOMElement:function(parents,selector){var result=new Array(),i,plength=parents.length;if(document.querySelectorAll){for(i=0;i<plength;i++){var elems=parents[i].querySelectorAll(selector),elemsLength=elems.length;for(var j=0;j<elemsLength;j++){result.push(elems[j])}}}else{var found=new RegExp("(h[1-6]|[a-z]+)?(\\.[a-z0-9._-]+)?(#[a-z0-9_-]+)?(\\[(.*)\\])?","gi").exec(selector),e,attrs,tagName=found[1]?found[1].toLowerCase():"*",classes=found[2]?found[2].substr(1).split("."):undefined,id=found[3]?found[3].substr(1):undefined;if(found[5]){attrs=fn.parseAttrStr(found[5])}
if(id!=undefined){e=document.getElementById(id);if(e&&(e.tagName.toLowerCase()==tagName||tagName=="*")&&fn.checkClasses(classes,e)&&fn.isSubElement(parents,e)){if(found[5]){if(fn.checkAttributes(e,attrs)){result.push(e)}}else{result.push(e)}}}else{for(j=0;j<plength;j++){elems=parents[j].getElementsByTagName(tagName);for(i=0;(e=elems[i])!=null;i++){if(fn.checkClasses(classes,e)&&fn.isSubElement([parents[j]],e)){if(found[5]){if(fn.checkAttributes(e,attrs)){result.push(e)}}else{result.push(e)}}}}}}
return result},bind:function(elements,eventName,callback,weight){var i,e,orgEvt=eventName;eventName=fn.mapEventName(eventName);if(callback==undefined){if(eventName=="select"){this[0]&&this[0].select()}
for(i=0;e=elements[i];i++){if(e[eventName]!=undefined){e[eventName]()}else{fn.fireEvent(e,eventName)}}}else{if(jhCore.isFunction(callback)){var self=elements;for(i=0;e=elements[i];i++){var element=((eventName=="scroll"||eventName=="resize")&&e==window)?document:e;var cached=jhCore.data(element,"jhCore.events."+eventName);if(!cached){cached={};cached.callbacks=new Array();cached.orgEvt=orgEvt;jhCore.data(element,"jhCore.events."+eventName,cached);cached.func=function(evt){var target,eventName=evt.type;if(window.event){evt=window.event;target=evt.srcElement}else{target=evt.target}
if(!evt.stopPropagation){evt.stopPropagation=function(){this.cancelBubble=true}}
if(!evt.preventDefault){evt.preventDefault=function(){this.returnValue=false}}
if(eventName=="resize"){var v=jhCore.getViewport();if(v.width==lastWndX&&v.height==lastWndY){return false}
lastWndX=v.width;lastWndY=v.height}
var eventData=jhCore.data(element,"jhCore.events."+eventName),orgEvt=eventData.orgEvt,hoverEvt=(orgEvt=="mouseenter"||orgEvt=="mouseleave")&&!mouseenter;if(hoverEvt){var cancel=orgEvt=="mouseleave",e=evt.relatedTarget||(cancel?evt.toElement:evt.fromElement);if(e){if(jhCore.inArray(e,self)==-1){cancel=false;while(e!=null){if(jhCore.inArray(e,self)!=-1){cancel=true;break}
try{e=e.parentNode}catch(ex){break}}}
if(cancel){fn.cancelBubble(evt);return false}}while(jhCore.inArray(target,self)==-1){target=target.parentNode}}
var callbacks,rs=true;if(eventData&&jhCore.isArray(eventData.callbacks)){callbacks=eventData.callbacks;for(var j=0,c;c=callbacks[j];j++){try{if(jhCore.isFunction(c.cb)&&c.cb.call(target,evt)==false){rs=false}
if(evt.stopAllHandlers==true){break}}catch(e){}}}!rs&&fn.cancelEvent(evt);return rs};if(e.attachEvent){e.attachEvent("on"+eventName,cached.func)}else{if(e.addEventListener){e.addEventListener(eventName,cached.func,false)}}}
cached.callbacks.push({cb:callback,weight:weight});cached.callbacks.sort(fn.sortByWeight)}}}
return elements},mapEventName:function(eventName){if(!mouseenter){switch(eventName){case"mouseenter":return"mouseover";case"mouseleave":return"mouseout"}}
return eventName},cancelEvent:function(evt){evt.returnValue=false;if(evt.preventDefault){evt.preventDefault()}},cancelBubble:function(evt){if(evt.stopPropagation){evt.stopPropagation()}
evt.cancelBubble=true;return false},fireEvent:function(element,eventName){var event;if(document.createEvent){event=document.createEvent("HTMLEvents");event.initEvent(eventName,true,true);return!element.dispatchEvent(event)}else{event=document.createEventObject();return element.fireEvent("on"+eventName,event)}},addScript:function(url,callback){var e=document.createElement("SCRIPT");e.setAttribute("type","text/javascript");e.setAttribute("src",url);e.setAttribute("charset","utf-8");e.setAttribute("defer","defer");e.setAttribute("async","async");document.getElementsByTagName("HEAD")[0].appendChild(e);if(callback!=undefined){if(jhCore.browser.opera&&parseFloat(jhCore.browser.version)<9.8){callback.call(window)}else{if(jhCore.browser.msie){var called=false;e.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){if(url==this.src&&!called){callback.call(window);called=true}}}}else{e.onload=callback}}}
return e},loadScripts:function(){var addScript=fn.addScript;for(var i=0,s;s=scripts[i];i++){addScript(s.url,s.callback)}},sortByWeight:function(a,b){return jhCore.intval(a.weight)-jhCore.intval(b.weight)},createXHR:function(url){if(window.XDomainRequest&&/^https?:\/\//i.test(url)&&!xDomainReg.test(url))
return new XDomainRequest()
if(!window.ActiveXObject)
return new XMLHttpRequest()
return new ActiveXObject("Microsoft.XMLHTTP")},makeParams:function(data,addRandom){var params="",randomParam="";if(addRandom){randomParam="jhrp="+Math.floor(Math.random()*100000)}
if(typeof data=="object"){params=jhCore.param(data)}else{if(data){params=data}}
if(!randomParam){return params}
if(params){params+="&"+randomParam}else{params=randomParam}
return params},send:function(method,url,data,options,success,error,complete){options=jhCore.extend({dataType:"text"},options);var reqTimeout,req=fn.createXHR(url);function doSuccess(){if(!jhCore.isFunction(success)){return}
if(options.dataType=="json"){var data,hasError=false;try{data=jhCore.parseJSON(req.responseText)}catch(e){hasError=true;if(jhCore.isFunction(error)){error.call(req,req.responseText)}}!hasError&&success.call(req,data)}else{success.call(req,req.responseText)}}
function doError(){jhCore.isFunction(error)&&error.call(req,req.responseText)}
function doComplete(){jhCore.isFunction(complete)&&complete.call(req,req.responseText)}
if(typeof req.onload!="undefined"){req.onload=function(){clearTimeout(reqTimeout);doSuccess();doComplete()};req.onerror=function(){clearTimeout(reqTimeout);doError();doComplete()}}else{req.onreadystatechange=function(){if(req.readyState!=4){return}
clearTimeout(reqTimeout);if(req.status==200){doSuccess()}else{doError()}
doComplete()}}
try{var isPostXDomain=method=="POST"&&window.XDomainRequest&&req instanceof XDomainRequest,params=fn.makeParams(data,isPostXDomain);if(isPostXDomain){method="GET"}
if(method=="GET"&&params){if(url.indexOf("?")<0){url+="?"}
url+=params}
req.open(method,url);if(options.timeout!=undefined){reqTimeout=setTimeout(function(){req.abort()},options.timeout)}
if(method=="POST"&&!isPostXDomain){if(typeof req.setRequestHeader!="undefined"){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}
req.send(params)}else{req.send(null)}}
catch(e){doError();doComplete()}},convertStyleName:function(name){return name.replace(/-[a-z]/gi,function(match){return match.charAt(1).toUpperCase()})},attr:function(element,name,value){if(!element||element.nodeType!=1){return}
name=convertAttrs[name]||name;var special=/src|href/i.test(name),set=value!=undefined;if(name in element&&!special){if(set&&!(name=="type"&&/input|button/i.test(element.nodeName)&&element.parentNode)){element[name]=value}
return element[name]}
if(set){element.setAttribute(name,""+value)}
var attr=special?element.getAttribute(name,2):element.getAttribute(name);return attr==null?undefined:attr},css:function(e,name,value,force){if(value==undefined){if(window.getComputedStyle){return window.getComputedStyle(e,null).getPropertyValue(name)}
if(e.currentStyle){name=fn.convertStyleName(name);var val=e.currentStyle[name],style=e.style;if(!/\s/.test(val)&&!/^-?\d+(?:px)?$/i.test(val)&&/^-?\d/.test(val)){var left=style.left,rsLeft=e.runtimeStyle&&e.runtimeStyle.left;if(rsLeft){e.runtimeStyle.left=e.currentStyle.left}
style.left=name==="fontSize"?"1em":(val||0);val=style.pixelLeft+"px";style.left=left;if(rsLeft){e.runtimeStyle.left=rsLeft}}
return val}
return e.style[name]}else{e.style[fn.convertStyleName(name)]=value}},copyCss:function(src,dest,css){if(src.nodeType==dest.nodeType==1){var a=css;if(typeof css=="string"){a=[css]}
for(var i=0,name;name=a[i];i++){var val=fn.css(src,name);if(val!=undefined&&val!=null){dest.style[fn.convertStyleName(name)]=val}}}},getOpacity:function(e){if(jhCore.browser.msie){if(e.filters["DXImageTransform.Microsoft.Alpha"]==undefined){return 100}
return e.filters["DXImageTransform.Microsoft.Alpha"].Opacity/100}else{if(e.currentStyle){return e.currentStyle.opacity}
if(window.getComputedStyle){return window.getComputedStyle(e,null).getPropertyValue("opacity")}
return e.style.opacity}},cleanHTML:function(html){return jhCore.isString(html)?html.replace(/(<(?!area|base|br|col|embed|frame|hr|img|input|link|meta|param)([a-z]+)[^<]*)\/>/gi,"$1></$2>"):html},checkScriptType:function(e){return e.type=="text/javascript"},getScripts:function(e){if(typeof e.getElementsByTagName=="undefined"){return[]}
var scriptTags=e.getElementsByTagName("script"),scripts=[];for(i=0;i<scriptTags.length;i++){var s=scriptTags[i];fn.checkScriptType(s)&&scripts.push(s.parentNode.removeChild(s))}
return scripts},evalScripts:function(scripts){var length=scripts.length;for(var i=0;i<length;i++){var s=scripts[i];if(s.src){var e=fn.addScript(s.src,function(){if(e.parentNode){e.parentNode.removeChild(e)}})}else{try{var data=scripts[i].innerHTML;if(window.execScript){window.execScript(data)}else{window.eval.call(window,data)}}catch(e){e=e.stack||e;jhCore.log(e)}}}},fill2:function(value){return value<10?("0"+value):value},initIdleHandler:function(){if(idleHandled){return}
idleHandled=true;idleCallbacks=new Array();jhCore(document).mousemove(fn.hasAnAction).keydown(fn.hasAnAction)},idleTrigger:function(){idleStatus=true;var length=idleCallbacks.length;for(var i=0;i<length;i++){idleCallbacks[i].call(window,true)}},hasAnAction:function(){var now=(new Date()).getTime(),i;if(now-lastBusy<5000){return}
if(!idleStatus){clearTimeout(idleTimer);if(now-lastBusy>=30000){for(i=0;i<idleCallbacks.length;i++){idleCallbacks[i].call(window,false)}}}else{idleStatus=false;for(i=0;i<idleCallbacks.length;i++){idleCallbacks[i].call(window,false)}}
lastBusy=now;idleTimer=setTimeout(fn.idleTrigger,jhCore.idleTimeout)},bindCo:function(){if(!bindCo){jhCore(document).mouseup(function(){var parents=jhCore(this).parents(),fire=true,newGroup=null,i,j,p;parents["-1"]=this;for(i=-1;p=parents[i];i++){var group=jhCore.data(p,"clickoutside.group");if(!jhCore.isString(group)||group.indexOf("jhcog.")!=0){continue}
if(group){newGroup=group}
if(curClickGroups&&group==curClickGroups){for(j=-1;j<i;j++){jhCore.data(parents[j],"clickoutside.group",group)}
fire=false;break}}
if(fire&&coCallbacks&&coCallbacks[curClickGroups]){fn.fireCo(curClickGroups);if(newGroup){curClickGroups=newGroup}}
if(newGroup&&!curClickGroups){curClickGroups=newGroup}},-99);if(jhCore.browser.msie){jhCore(document).bind("focusin",function(){if(this.nodeName.toLowerCase()=="iframe"){fn.fireCo(curClickGroups)}})}else{jhCore(window).blur(function(){if(hoverIframe){fn.fireCo(curClickGroups)}});jhCore(document).bind("mouseover",function(){if(this.nodeName.toLowerCase()=="iframe"){hoverIframe=true}}).bind("mouseout",function(){if(this.nodeName.toLowerCase()=="iframe"){hoverIframe=false}})}
bindCo=true}},addCoCallback:function(elem,group,callback,weight){if(!coCallbacks){coCallbacks={}}
if(!group){group="jhcog."+jhGroupId++}
if(!coCallbacks[group]){coCallbacks[group]=new Array()}
var added=false;for(var i=0,e;e=coCallbacks[i];i++){if(e.element==elem&&callback==e.callback){added=true;break}}!added&&coCallbacks[group].push({element:elem,callback:callback,weight:weight});coCallbacks[group].sort(fn.sortByWeight);return group},removeCoCallback:function(elem,group){var callbacks=coCallbacks[group],i=0;while(i<callbacks.length){if(callbacks[i]&&callbacks[i].element==elem){callbacks.splice(i,1)}else{i++}}},fireCo:function(elem){var group=(jhCore.isString(elem)&&elem)||jhCore.data(elem,"clickoutside.group"),cbs=coCallbacks[group];if(cbs){for(var i=0,c;c=cbs[i];i++){if(c.callback.call(c.element)==false){break}}}},escape:function(s){for(var k in escMap){s=s.replace(k,escMap[k])}
return s},fade:function(elems,show,duration,callback){var s=jhCore.fadeSpeed||20,r=show?1:-1,cb=callback,op=show?0:1,d=200,maxOp=new Array();for(var i=0,e;e=elems[i];i++){var oop=jhCore.data(e,"opacity");if(oop==undefined||oop==null){oop=fn.getOpacity(e);jhCore.data(e,"opacity",oop)}
maxOp.push(oop)}
if(jhCore.isNumber(duration)){d=duration}else{cb=duration}
elems.data("jhCore.fade",1).opacity(op);if(show&&elems.css("display")=="none"){elems.show()}
var intv=setInterval(function(){if(elems.data("jhCore.fade")==2){elems.removeData("jhCore.fade");clearInterval(intv)}else{op+=r*s/d;elems.opacity(op,maxOp);if(show?op>=1:op<=0){elems.opacity("");!show&&elems.hide();jhCore.isFunction(cb)&&cb.call(elems,show);clearInterval(intv)}}},s);return elems}};var fn=jhCore.fn;jhCore.version="1.56";jhCore.isReady=false;jhCore.idleTimeout=60000;jhCore.fadeSpeed=15;jhCore.hasStorage=typeof localStorage!=="undefined";jhCore.cookie=function(name,value,options){if(value==undefined){if(document.cookie){var cookies=document.cookie.split(";"),length=cookies.length,nameLength=name.length;for(var i=0;i<length;i++){var cookie=jhCore.trim(cookies[i]);if(cookie.substring(0,nameLength+1)==(name+"=")){value=decodeURIComponent(cookie.substring(nameLength+1));break}}}
return value}
var defOptions={expires:0,path:"/"};options=jhCore.extend(defOptions,options);var d=new Date(),expires=options.expires,dstr;if(expires==0){dstr=""}else{d.setTime(d.getTime()+expires*1000*60*60*24);dstr="; expires="+d.toUTCString()}
document.cookie=name+"="+encodeURIComponent(value)+dstr+"; path="+options.path+(options.domain!=undefined?"; domain="+options.domain:"")+(options.secure?"; secure":"");return jhCore};jhCore.plugins={};jhCore.isInstalled=function(pluginName){return jhCore.plugins[pluginName]!=undefined};jhCore.install=function(pluginName,extFuncs,initCallback){if(jhCore.isInstalled(pluginName)){return false}
jhCore.plugins[pluginName]={};for(var func in extFuncs){jhCore.prototype[func]=extFuncs[func]}
if(jhCore.isFunction(initCallback)){initCallback()}
return true};jhCore.intval=function(val){try{return parseInt(val,10)||0}catch(e){return 0}};jhCore.isArray=function(obj){if(typeof obj!="object"){return false}
return Object.prototype.toString.call(obj).match(/array|nodelist/i)!=null};jhCore.isNumber=function(obj){return typeof obj=="number"};jhCore.isString=function(obj){if(typeof obj=="string"){return true}
if(obj==undefined||obj==null){return false}
if(typeof obj!="object"){return false}
if(!obj.constructor){return false}
return obj.constructor.toString().match(/string/i)!=null};jhCore.isFunction=function(obj){return typeof obj==="function"||Object.prototype.toString.call(obj).match(/function/i)!=null};jhCore.isEmpty=function(obj){return obj==undefined||obj==null||obj==""||jhCore.isEmptyObject(obj)};jhCore.isEmptyObject=function(obj){for(var key in obj){return false}
return true};jhCore.inArray=function(target,list){var length=(list instanceof jhCore)?list.size():list.length;if(isNaN(length)){return-1}
for(var i=0;i<length;i++){if(list[i]==target){return i}}
return-1};jhCore.objectLength=function(obj){var length=0;for(var key in obj){length++}
return length};jhCore.ltrim=function(s,chars){chars=chars||"\\s";return s&&s.replace(new RegExp("^["+chars+"]+","g"),"")};jhCore.rtrim=function(s,chars){chars=chars||"\\s";return s&&s.replace(new RegExp("["+chars+"]+$","g"),"")};jhCore.trim=function(s,chars){return jhCore.ltrim(jhCore.rtrim(s,chars),chars)};jhCore.detectLink=function(text,options){var attrs="",rdUrl=(options&&options.redirectUrl)||"http://me.zing.vn/rd/go?url=";for(var attr in options){attrs+=" "+attr.toString()+'="'+options[attr]+'"'}
return text.replace(/((https?|ftp):\/\/(([a-z0-9\$\-_\.+!\*'\(\),;\/\?&=]+)\:([a-z0-9\$\-_\.+!\*'\(\),;\/\?&=]+)\@)?([0-9]+|[a-z0-9]([a-z0-9|-]*[a-z0-9])?\.)*([0-9]+|[a-z]([a-z0-9|-]*[a-z0-9])?)(\:\d+)?((\/[a-z0-9\$\-_\.+!\*'\(\)\|,;\/\?\:\@&=%]*)+([;|?|#][a-z0-9\$\-_\.+!\*'\(\)\|,;\/\?\:\@&=%]*)?)?)/gi,function(m){return'<a href="'+rdUrl+encodeURIComponent(m)+'"'+attrs+">"+m+"</a>"})};jhCore.serialize=function(data){if(typeof JSON=="object"&&JSON.stringify){return JSON.stringify(data)}
if(jhCore.isString(data)){return'"'+fn.escape(data)+'"'}
var a;if(jhCore.isArray(data)){a=new Array();var length=data.length;for(var i=0;i<length;i++){a.push(jhCore.serialize(data[i]))}
return"["+fn.escape(a.join(","))+"]"}
if(typeof data=="object"){a=new Array();for(var f in data){a.push('"'+f+'":'+jhCore.serialize(data[f]))}
return"{"+fn.escape(a.join(","))+"}"}
if(data==undefined){return"undefined"}
if(data==null){return"null"}
return data.toString()};jhCore.param=function(params){var fields=new Array();for(var f in params){fields.push(encodeURIComponent(f)+"="+encodeURIComponent(params[f]))}
return fields.join("&")};jhCore.parseJSON=function(s){if(typeof JSON=="object"&&JSON.parse){return JSON.parse(s)}
return eval("("+s+")")};jhCore.isWindow=function(obj){return obj&&typeof obj==="object"&&"setInterval"in obj;};jhCore.cloneObj=function(obj){var clone={};clone.prototype=obj.prototype;for(var p in obj)
clone[p]=obj[p];return clone;};jhCore.formatDateTimeSmall=function(t){var g=new Date(),j=new Date(t*1000),d=Math.floor(g.getTime()/1000)-t;var h=j.getHours(),m=fn.fill2(j.getMinutes());var f=["CN","T2","T3","T4","T5","T6","T7"];if(d<518400){d=(g.getDay()+7-j.getDay())%7;var k="";if(d!=0){if(d==1){k=" hôm qua"}else{k=f[j.getDay()]}}
return h+":"+m+k;}
h=fn.fill2(h);return h+":"+m+" "+fn.fill2(j.getDate())+"/"+fn.fill2(j.getMonth()+1)+"/"+j.getFullYear()};jhCore.formatDateTime=function(t){var e=[[11,"sáng"],[14,"trưa"],[19,"chiều"]],f=["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],g=new Date(),j=new Date(t*1000),d=Math.floor(g.getTime()/1000)-t;if(d<60){return(d<0?0:d).toString()+" giây trước"}
if(d<3600){return Math.floor(d/60)+" phút trước"}
if(d<43200){return Math.floor(d/3600)+" tiếng trước"}
var h=j.getHours(),m=fn.fill2(j.getMinutes());if(d<518400){var b="tối";for(var i=0;i<3;i++){if(h<e[i][0]){b=e[i][1];break}}
d=(g.getDay()+7-j.getDay())%7;var k="";if(d==0){k="hôm nay"}else{if(d==1){k="hôm qua"}else{k=f[j.getDay()]}}
return(h%12).toString()+":"+m+" "+b+" "+k}
h=fn.fill2(h);return h+":"+m+" "+fn.fill2(j.getDate())+"/"+fn.fill2(j.getMonth()+1)+"/"+j.getFullYear()};jhCore.get=function(url,options,success,error){var args=[].concat.apply(["GET"],arguments);args.splice(2,0,{});(jhCore.isFunction(options)||options==undefined)&&args.splice(3,0,{});fn.send.apply(this,args)};jhCore.post=function(url,data,options,success,error){var args=[].concat.apply(["POST"],arguments);(jhCore.isFunction(options)||options==undefined)&&args.splice(3,0,{});fn.send.apply(this,args)};jhCore.ajax=function(options){if(!options||!options.url){return}
if(!options.method){options.method="GET"}
fn.send(options.method,options.url,options.data,options,options.success,options.error,options.complete)};jhCore.getScript=function(url){var sc=document.createElement("script");sc.setAttribute("src",url);sc.setAttribute("type","text/javascript");sc.setAttribute("charset","utf-8");sc.setAttribute("defer","defer");sc.setAttribute("async","async");document.getElementsByTagName("HEAD")[0].appendChild(sc);};jhCore.postJSON=function(url,data,success,error){return jhCore.post(url,data,{dataType:"json"},success,error);};jhCore.getJSON=function(url,success){return jhCore.get(url,{dataType:"json"},success);};jhCore.getJSONP=function(url,data,success){var jsonName="js"+Math.floor(Math.random()*1000000),querystr="";if(jhCore.isFunction(data)){success=data}else{if(jhCore.isString(data)){querystr=data}else{querystr=jhCore.param(data)}}
jsonCallbacks[jsonName]=success;jhCore[jsonName]=function(obj){var jscb=jsonCallbacks[jsonName];if(jhCore.isFunction(jscb)){jscb.call(jhCore,obj)}
delete jsonCallbacks[jsonName];document.getElementsByTagName("HEAD")[0].removeChild(e)};var i=url.indexOf("=?");if(i==-1){i=url.indexOf("?");url+=(i==-1?"?":"&")+"callback=jhCore."+jsonName}else{url=url.substr(0,i)+"=jhCore."+jsonName+url.substr(i+14)}
if(querystr){url+="&"+querystr}
var e=document.createElement("SCRIPT");e.type="text/javascript";e.src=url;document.getElementsByTagName("HEAD")[0].appendChild(e)};jhCore.each=function(list,callback){var result,value;if(jhCore.isArray(list)||list instanceof jhCore){var length=(list instanceof jhCore)?list.size():list.length;for(var i=0;i<length;i++){value=list[i];result=callback.call(value,i,value);if(result===false){break}}}else{for(var field in list){value=list[field];result=callback.call(value,field,value);if(result===false){break}}}};jhCore.cache={};jhCore.data=function(element,name,data){if(!element||(element.nodeName&&noData[element.nodeName.toLowerCase()])){return}
element=element==window?windowData:element;var expattr=expandAttr,id=element[expattr];if(!id&&typeof name=="string"&&data==undefined){return null}
var cache=jhCore.cache;if(data!=undefined){if(!id){id=++jhId}
if(!cache[id]){cache[id]={}}
element[expattr]=id;if(typeof name=="string"){cache[id][name]=data}else{cache[id]=data}}
return typeof name=="string"?cache[id][name]:cache[id]};jhCore.removeData=function(element,name){if(!element||(element.nodeName&&noData[element.nodeName.toLowerCase()])){return}
element=element==window?windowData:element;var expattr=expandAttr,id=element[expattr];if(id==undefined){return}
if(name){delete jhCore.cache[id][name];if(jhCore.isEmpty(jhCore.cache[id])){jhCore.removeData(element)}}else{if(delExpandAttr){delete element[expattr]}else{if(element.removeAttribute){element.removeAttribute(expattr)}}
delete jhCore.cache[id]}};jhCore.createElement=function(tagName,attributes,css){var e=document.createElement(tagName),f;if(typeof attributes=="object"){for(f in attributes){if(f=="class"){e.className=attributes[f]}else{e.setAttribute(f,attributes[f])}}}
if(typeof css=="object"){for(f in css){fn.css(e,f,css[f])}}
return e};jhCore.addScript=function(url,callback){if(jhCore.isReady){fn.addScript(url,callback)}else{scripts.push({url:url,callback:callback})}
return jhCore};jhCore.ready=function(callback,weight){var isReady=jhCore.isReady,callbacks=readyCallbacks;if(callback==undefined){if(isReady){return}
jhCore.isReady=true;callbacks.sort(fn.sortByWeight);for(var i=0,c;c=callbacks[i];i++){try{c.callback.call(document)}catch(e){e=e.stack||e;jhCore.log(e)}}
fn.loadScripts()}else{if(isReady){callback.call(document)}else{callbacks.push({callback:callback,weight:weight==undefined?0:weight})}}};jhCore.getViewport=function(){var result={},docElem=document.documentElement,body=document.body;if(window.innerWidth){result.width=window.innerWidth;result.height=window.innerHeight}else{if(docElem&&docElem.offsetWidth){result.width=docElem.offsetWidth;result.height=docElem.offsetHeight}else{result.width=body.offsetWidth;result.height=body.offsetHeight}}
if(jhCore.isNumber(window.pageYOffset)){result.offsetY=window.pageYOffset;result.offsetX=window.pageXOffset}else{if(docElem&&(docElem.scrollLeft||docElem.scrollTop)){result.offsetY=docElem.scrollTop;result.offsetX=docElem.scrollLeft}else{if(body&&(jhCore.isNumber(body.scrollLeft))){result.offsetY=body.scrollTop;result.offsetX=body.scrollLeft}}}
return result};jhCore.filter=function(elements,selector){if(!selector||elements.length==0){return elements}
var tagName,classes,id,attrs,result=new Array(),found=new RegExp("(h[1-6]|[a-z]+)?(\\.[a-z0-9._-]+)?(#[a-z0-9_-]+)?(\\[(.*)\\])?","gi").exec(selector);if(found){tagName=found[1]?found[1].toLowerCase():tagName;classes=found[2]?found[2].substr(1).split("."):classes;id=found[3]?found[3].substr(1):id;attrs=fn.parseAttrStr(found[5])}
for(var i=0,cn;cn=elements[i];i++){if(cn.nodeType==1){if((tagName&&cn.nodeName.toLowerCase()!=tagName)||(id&&cn.id!=id)||(classes&&!fn.checkClasses(classes,cn))||!fn.checkAttributes(cn,attrs)){continue}
result.push(cn)}}
return result};jhCore.idle=function(callback){fn.initIdleHandler();if(jhCore.isFunction(callback)){idleCallbacks.push(callback)}},jhCore.log=function(){if(typeof console!="undefined"){jhCore.isFunction(console.log)&&console.log.apply(console,arguments)}};jhCore.addStyle=function(text){var style=document.createElement("STYLE"),rules=document.createTextNode(text);style.type="text/css";if(style.styleSheet){style.styleSheet.cssText=rules.nodeValue}else{style.appendChild(rules)}
document.getElementsByTagName("HEAD")[0].appendChild(style)};jhCore.wordCount=function(strHtml){strHtml=strHtml.replace(/<[^>]+>/ig,'');strHtml=strHtml.replace(/[^A-Za-z0-9\u00c0-\u01b0\u1ea0-\u1ef9]+/g,"+");var words=strHtml.split("+");var length=words.length;if(words[length-1]=="")
length--;if(words[0]=="")
length--;return(length<0?0:length);};jhCore.cuttingWord=function(text,length){text=Trim(text);var words=text.split(" ");if(length>=words.length)
return text;var str='';for(var i=0;i<length;i++)
str+=words[i]+' ';return Trim(str)+'..';};jhCore.cuttingChar=function(text,length){text=Trim(text);if(length<=0||length<=0||length>=text.Length)
return text;return text.substring(0,length)+"..";};jhCore.checkEmail=function(strValue){if(strValue.length<3)
return false;var emailRegExp=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;return emailRegExp.test(strValue);};jhCore.checkDay=function(strValue){var dayRegExp=/^\d{1,2}\/\d{1,2}\/\d{2,4}$/;return dayRegExp.test(strValue);};jhCore.checkPhone=function(strValue){if(strValue.length<10)
return false;var phoneRegExp=/^[0-9-]+$/;return phoneRegExp.test(strValue);};var s1286trEn_="qwertyuiopxvnQWERTYUIOPXVN12579asdfghjklzcbmASDFGHJKLZCBM34680";var s1286strDe_="asdfghjklzcbmASDFGHJKLZCBM34680qwertyuiopxvnQWERTYUIOPXVN12579";jhCore.oEncrypt2=function(text){if(text.length==0)
return text;var result='';for(var i=0;i<text.length;i++){var intPos=s1286strDe_.indexOf(text[i]);if(intPos>=0)
result+=s1286trEn_[intPos];else
result+=text[i];}
return result;};jhCore.stringFormat=function(text){if(arguments.length<=1)
return text;var tokenCount=arguments.length-2;for(var token=0;token<=tokenCount;token++){text=text.replace(new RegExp('\\{'+token+'\\}','gi'),arguments[token+1]);}
return text;};jhCore.oEncrypt=function(str){var out='';for(var n=0;n<str.length;n++){var si=str.charCodeAt(n);var ki=(si>=33&&si<=79)?1:(si>=80&&si<=126)?-1:0;out+=String.fromCharCode(si+47*ki);;}
return out;};jhCore.lastName=function(fullname){fullname=jhCore.trim(fullname);var li=fullname.lastIndexOf(' ');if(li==-1)
return fullname;var ll=fullname.length;return fullname.substring(li+1,ll);};jhCore.wgTime=function(delta){if(!delta)delta=0;jh('.stime').each(function(){var rel=parseInt(this.getAttribute('rel'));this.innerHTML=jhCore.formatDateTime(rel,delta);});};jhCore.repMessage=function(txt){txt=txt.replace(/@(\w+)(\:|\s|\,|\.|$)/ig,' <a href="/$1" class="display" rel="$1"></a>$2 ');txt=txt.replace(/(^|\s|;)((http|https):\/\/.*?)(\s|$|;)/ig,' <a target=\"_blank\" href="$2">$2</a> ');return txt;};jhCore.noUnicode=function(text){text=text.replace(/(á|à|ả|ã|ạ|â|ấ|ầ|ẩ|ẫ|ậ|ă|ắ|ằ|ẳ|ẵ|ặ)/ig,'a');text=text.replace(/(Á|À|Ả|Ã|Ạ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ)/ig,'A');text=text.replace(/(ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/ig,'o');text=text.replace(/(Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ)/ig,'O');text=text.replace(/(é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/ig,'e');text=text.replace(/(É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ)/ig,'E');text=text.replace(/(ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/ig,'u');text=text.replace(/(Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự)/ig,'U');text=text.replace(/(í|ì|ỉ|ĩ|ị)/ig,'i');text=text.replace(/(Í|Ì|Ỉ|Ĩ|Ị)/ig,'I');text=text.replace(/(ý|ỳ|ỷ|ỹ|ỵ)/ig,'i');text=text.replace(/(Ý|Ỳ|Ỷ|Ỹ|Ỵ)/ig,'I');text=text.replace(/(đ)/ig,'d');text=text.replace(/(Đ)/ig,'D');return text;};var ua=navigator.userAgent.toLowerCase(),m=ua.match(/(^|\s)(firefox|safari|opera|msie|chrome)[\/:\s]([\d\.]+)/)||["","","0.0"];jhCore.browser={opera:m[2]=="opera",msie:m[2]=="msie",safari:m[2]=="safari",chrome:m[2]=="chrome",firefox:m[2]=="firefox",mozilla:/mozilla/.test(ua),version:(ua.match(/\sversion\/([\d\.]+)/)||["",m[3]])[1]};jhCore.storage={put:function(key,item,exp,force){key="jhvar-"+key;if(exp==undefined){exp=0}
if(exp!=0){exp=exp*1000}
if(jhCore.hasStorage){if(exp!=0){exp+=(new Date()).getTime()}
localStorage.setItem(key,jhCore.serialize({data:item,expires:exp}))}else{if(force){jhCore.cookie(key,jhCore.serialize(item),{expires:exp/(1000*60*60*24)})}}},get:function(key,force){key="jhvar-"+key;if(jhCore.hasStorage){var item=localStorage.getItem(key);if(item){var obj=jhCore.parseJSON(item);if(obj.expires==0||obj.expires>(new Date()).getTime()){return obj.data}
localStorage.removeItem(key)}}else{if(force){return jhCore.parseJSON(jhCore.cookie(key))}}},remove:function(key){this.put(key,null,-1,true)}};if(jhCore.hasStorage){var now=(new Date()).getTime();try{for(var i=0,l=localStorage.length;i<l;i++){var key=localStorage.key(i),item=localStorage.getItem(key);if(item){try{var obj=jhCore.parseJSON(item);if(obj.expires!=0&&obj.expires<=now){localStorage.removeItem(key)}}catch(ex){}}}}catch(ex){}}
if(window.jh==undefined){window.jh=jhCore;if(document.readyState=="complete"||document.readyState=="loaded"){jhCore.ready()}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);jhCore.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete"){document.detachEvent("onreadystatechange",arguments.callee);jhCore.ready()}});if(window==window.top&&document.documentElement.doScroll){(function(){if(jhCore.isReady){return}
try{document.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}
jhCore.ready()})()}}}}}})(window);jh.install("form",{postForm:function(onSucess,onError){var url=jh(this[0]).attr("action");data=jh.plugins.form.getData(this[0],{getDisabled:true,getUncheckedRadio:true});return jh.post(url,data,{dataType:"json"},onSucess,onError);},ajaxSubmit:function(a){var b=this[0];if(b.nodeName.toLowerCase()!="form"){return}
b.submit=function(){var g=(a&&a.action)||b.action,e=(a&&a.dataType)||"text/html",h=a&&a.beforeSubmit,d=a&&a.beforeGetData,j=(a&&a.success)||undefined,f=(a&&a.error)||undefined;typeof d=="function"&&d(b);var c=true,i=jh.plugins.form.getData(b,a);typeof a.postData=="function"&&(i=a.postData(i));if(typeof h=="function"){c=h(b)}
c!==false&&jh.post(g,i,{dataType:e},j,f);return false}},resetForm:function(){if(!this[0]){return}
var c=this[0].elements;for(var a=0,d;d=c[a];a++){d.disabled=false;switch(d.nodeName.toLowerCase()){case"input":var b=d.type;if(b=="text"||b=="password"||b=="file"){d.value=""}else{if(b=="checkbox"||b=="radio"){d.checked=false}}
break;case"textarea":case"select":d.selectedIndex=0;break;default:break}}}},function(){jh.plugins.form.getData=function(d,a){var g=d.elements,f=new Array();for(var b=0;b<g.length;b++){var h=g[b];if(!a.getDisabled&&h.disabled==true){continue}
switch(h.nodeName.toLowerCase()){case"input":var c=h.type;if(c=="text"||c=="password"||c=="hidden"){h.name&&f.push(encodeURIComponent(h.name)+"="+encodeURIComponent(h.value));break;}
var j="";if(c=="file")
j=h.value
else{if(c=="checkbox"){j=h.value;if(!j)
j=h.checked?'on':'off';else if(!h.checked)
break;}else{if(c=="radio"){if(a.getUnCheckedRadio)
j=h.value
else
h.checked&&(j=h.value)}}}
j&&h.name&&f.push(encodeURIComponent(h.name)+"="+encodeURIComponent(j));break;case"textarea":case"select":h.name&&f.push(encodeURIComponent(h.name)+"="+encodeURIComponent(h.value));break;default:break}}
return f.join("&")}});jhCore.postFormJson=function(objID,onSucess){return jh("#"+objID).postForm(onSucess);};var ViString=(function(){var c=[["á","à","ả","ã","ạ","â","ấ","ầ","ẩ","ẫ","ậ","ă","ắ","ằ","ẳ","ẵ","ặ"],["Á","À","Ả","Ã","Ạ","Â","Ấ","Ầ","Ẩ","Ẫ","Ậ","Ă","Ắ","Ằ","Ẳ","Ẵ","Ặ"],["é","è","ẻ","ẽ","ẹ","ê","ế","ề","ể","ễ","ệ"],["É","È","Ẻ","Ẽ","Ẹ","Ê","Ế","Ề","Ể","Ễ","Ệ"],["ú","ù","ủ","ũ","ụ","ư","ứ","ừ","ử","ữ","ự"],["Ú","Ù","Ủ","Ũ","Ụ","Ư","Ứ","Ừ","Ử","Ữ","Ự"],["í","ì","ỉ","ĩ","ị"],["Í","Ì","Ỉ","Ĩ","Ị"],["ý","ỳ","ỷ","ỹ","ỵ"],["Ý","Ỳ","Ỷ","Ỹ","Ỵ"],["ó","ò","ỏ","õ","ọ","ô","ố","ồ","ổ","ỗ","ộ","ơ","ớ","ờ","ở","ỡ","ợ"],["Ó","Ò","Ỏ","Õ","Ọ","Ô","Ố","Ồ","Ổ","Ỗ","Ộ","Ơ","Ớ","Ờ","Ở","Ỡ","Ợ"],["đ"],["Đ"]],d=["a","A","e","E","u","U","i","I","y","Y","o","O","d","D"];function b(g){if(typeof g=="string"){for(var f=0;f<c.length;f++){for(var e=0;e<c[f].length;e++){g=g.replace(new RegExp(c[f][e],"g"),d[f])}}}
return g}
function a(e){return(e instanceof RegExp)?new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")):e}
return{normalize:function(g){if(g instanceof RegExp){var f=g.source,e="";if(g.global){e+="g"}
if(g.ignoreCase){e+="i"}
if(g.multiline){e+="m"}
f=b(f);return new RegExp(f,e)}else{return b(g)}},indexOf:function(g,f,e){g=ViString.normalize(g);f=ViString.normalize(f);if(jh.isString(e)&&e.indexOf("i")>-1){g=g.toLowerCase();f=f.toLowerCase()}
return f.indexOf(g)},search:function(f,e){e=ViString.normalize(e);f=ViString.normalize(f);return e.search(f)},replace:function(v,g,p){if(v){var f=ViString.normalize(v),h=ViString.normalize(p),n=h.match(f),s=h.search(f);if(n&&n.length>0){var o=n[0],q,m=0;while((q=h.indexOf(o,s))>=0&&m<n.length){var r=p.substr(q,o.length),t=a(f).exec(o),l=new Array(),u=0;for(var k=1;k<t.length;k++){if(t[k]&&jh.isString(t[k])){l[k]=r.substr(o.indexOf(t[k],u),t[k].length);u=r.indexOf(l[k])+l[k].length}else{l[k]=""}}
var e=g.replace(/\$(\d)/g,function(j,w){var i=parseInt(w);if(l&&typeof l[i]=="string"){return l[i]}
return j});p=p.substr(0,q)+e+p.substr(q+o.length);h=h.replace(o,e);s=q+e.length;m++}}}
return p}}})();(function(){function _render(tpl,data){for(var f in data)
tpl=tpl.replace(new RegExp("{"+f+"}","g"),data[f]);return tpl.replace(/{[a-z_0-9]+}/gi,"");}
window.jhTemplate={render:function(template,data){if(jh.isArray(data)){var result=new Array();for(var i=0;i<data.length;i++)
result.push(_render(template,data));return result;}
return _render(template,data);}};})();