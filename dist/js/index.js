(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="158",Ff=0,ql=1,Bf=2,Vu=1,zf=2,Fn=3,ai=0,ke=1,gn=2,ni=0,dr=1,Yl=2,Zl=3,jl=4,kf=5,Ei=100,Gf=101,Hf=102,Jl=103,Kl=104,Vf=200,Wf=201,Xf=202,qf=203,Aa=204,wa=205,Yf=206,Zf=207,jf=208,Jf=209,Kf=210,$f=211,Qf=212,td=213,ed=214,nd=0,id=1,rd=2,no=3,sd=4,od=5,ad=6,ld=7,Wu=0,cd=1,ud=2,ii=0,hd=1,fd=2,dd=3,pd=4,md=5,Xu=300,yr=301,Mr=302,Ra=303,Ca=304,go=306,Pa=1e3,xn=1001,La=1002,Ie=1003,$l=1004,Oo=1005,an=1006,_d=1007,$r=1008,ri=1009,gd=1010,xd=1011,al=1012,qu=1013,Kn=1014,$n=1015,Qr=1016,Yu=1017,Zu=1018,Ai=1020,vd=1021,vn=1023,yd=1024,Md=1025,wi=1026,Sr=1027,Sd=1028,ju=1029,Ed=1030,Ju=1031,Ku=1033,Fo=33776,Bo=33777,zo=33778,ko=33779,Ql=35840,tc=35841,ec=35842,nc=35843,Td=36196,ic=37492,rc=37496,sc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,_c=37819,gc=37820,xc=37821,Go=36492,vc=36494,yc=36495,bd=36283,Mc=36284,Sc=36285,Ec=36286,$u=3e3,Ri=3001,Ad=3200,wd=3201,Rd=0,Cd=1,ln="",ye="srgb",Gn="srgb-linear",ll="display-p3",xo="display-p3-linear",io="linear",te="srgb",ro="rec709",so="p3",Wi=7680,Tc=519,Pd=512,Ld=513,Dd=514,Ud=515,Id=516,Nd=517,Od=518,Fd=519,bc=35044,Ac="300 es",Da=1035,kn=2e3,oo=2001;class Pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,Ua=180/Math.PI;function Lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[r&255]+Te[r>>8&255]+Te[r>>16&255]+Te[r>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function Bd(r,t){return(r%t+t)%t}function Vo(r,t,e){return(1-e)*r+e*t}function wc(r){return(r&r-1)===0&&r!==0}function Ia(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],d=i[3],p=i[6],M=i[1],x=i[4],v=i[7],S=i[2],T=i[5],b=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*d+a*x+l*T,s[6]=o*p+a*v+l*b,s[1]=c*_+u*M+h*S,s[4]=c*d+u*x+h*T,s[7]=c*p+u*v+h*b,s[2]=f*_+m*M+g*S,s[5]=f*d+m*x+g*T,s[8]=f*p+m*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Ot;function Qu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zd(){const r=ts("canvas");return r.style.display="block",r}const Rc={};function qr(r){r in Rc||(Rc[r]=!0,console.warn(r))}const Cc=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[Gn]:{transfer:io,primaries:ro,toReference:r=>r,fromReference:r=>r},[ye]:{transfer:te,primaries:ro,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[xo]:{transfer:io,primaries:so,toReference:r=>r.applyMatrix3(Pc),fromReference:r=>r.applyMatrix3(Cc)},[ll]:{transfer:te,primaries:so,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Pc),fromReference:r=>r.applyMatrix3(Cc).convertLinearToSRGB()}},kd=new Set([Gn,xo]),Jt={enabled:!0,_workingColorSpace:Gn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!kd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Es[t].toReference,i=Es[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Es[r].primaries},getTransfer:function(r){return r===ln?io:Es[r].transfer}};function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class th{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=ts("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gd=0;class eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Lr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qo(i[o].image)):s.push(qo(i[o]))}else s=qo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hd=0;class Ge extends Pr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=xn,i=xn,s=an,o=$r,a=vn,l=ri,c=Ge.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Lr(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?ye:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?Ri:$u}set encoding(t){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?ye:ln}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Xu;Ge.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(m+1)/2,S=(p+1)/2,T=(u+f)/4,b=(h+_)/4,I=(g+d)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=b/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=I/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=I/s),this.set(n,i,s,e),this}let M=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends Pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?ye:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-a;const p=l*f+c*m+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,p*M);d=Math.sin(d*T)/S,a=Math.sin(a*T)/S}const v=a*M;if(l=l*d+f*v,c=c*d+m*v,u=u*d+g*v,h=h*d+_*v,d===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-a*m,t[e+2]=c*g+u*m+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new G,Lc=new hs;class fs{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),bs.subVectors(this.max,Br),qi.subVectors(t.a,Br),Yi.subVectors(t.b,Br),Zi.subVectors(t.c,Br),Xn.subVectors(Yi,qi),qn.subVectors(Zi,Yi),pi.subVectors(qi,Zi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!Zo(e,qi,Yi,Zi,bs)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,qi,Yi,Zi,bs))?!1:(As.crossVectors(Xn,qn),e=[As.x,As.y,As.z],Zo(e,qi,Yi,Zi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new G,new G,new G,new G,new G,new G,new G,new G],fn=new G,Ts=new fs,qi=new G,Yi=new G,Zi=new G,Xn=new G,qn=new G,pi=new G,Br=new G,bs=new G,As=new G,mi=new G;function Zo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mi.fromArray(r,s);const a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xd=new fs,zr=new G,jo=new G;class ds{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(jo)),this.expandByPoint(zr.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new G,Jo=new G,ws=new G,Yn=new G,Ko=new G,Rs=new G,$o=new G;class vo{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jo.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Jo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Yn.dot(this.direction),l=-Yn.dot(ws),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Jo).addScaledVector(ws,f),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,s){Ko.subVectors(e,t),Rs.subVectors(n,t),$o.crossVectors(Ko,Rs);let o=this.direction.dot($o),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Rs.crossVectors(Yn,Rs));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot($o);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,s,o,a,l,c,u,h,f,m,g,_,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,m,g,_,d)}set(t,e,n,i,s,o,a,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Yd)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Zn.crossVectors(n,je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Zn.crossVectors(n,je)),Zn.normalize(),Cs.crossVectors(je,Zn),i[0]=Zn.x,i[4]=Cs.x,i[8]=je.x,i[1]=Zn.y,i[5]=Cs.y,i[9]=je.y,i[2]=Zn.z,i[6]=Cs.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],M=n[3],x=n[7],v=n[11],S=n[15],T=i[0],b=i[4],I=i[8],y=i[12],A=i[1],q=i[5],W=i[9],et=i[13],N=i[2],Y=i[6],J=i[10],H=i[14],V=i[3],at=i[7],st=i[11],z=i[15];return s[0]=o*T+a*A+l*N+c*V,s[4]=o*b+a*q+l*Y+c*at,s[8]=o*I+a*W+l*J+c*st,s[12]=o*y+a*et+l*H+c*z,s[1]=u*T+h*A+f*N+m*V,s[5]=u*b+h*q+f*Y+m*at,s[9]=u*I+h*W+f*J+m*st,s[13]=u*y+h*et+f*H+m*z,s[2]=g*T+_*A+d*N+p*V,s[6]=g*b+_*q+d*Y+p*at,s[10]=g*I+_*W+d*J+p*st,s[14]=g*y+_*et+d*H+p*z,s[3]=M*T+x*A+v*N+S*V,s[7]=M*b+x*q+v*Y+S*at,s[11]=M*I+x*W+v*J+S*st,s[15]=M*y+x*et+v*H+S*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+d*(+e*c*h-e*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],M=h*d*c-_*f*c+_*l*m-a*d*m-h*l*p+a*f*p,x=g*f*c-u*d*c-g*l*m+o*d*m+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*m-o*_*m-u*a*p+o*h*p,S=g*h*l-u*_*l-g*a*f+o*_*f+u*a*d-o*h*d,T=e*M+n*x+i*v+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=M*b,t[1]=(_*f*s-h*d*s-_*i*m+n*d*m+h*i*p-n*f*p)*b,t[2]=(a*d*s-_*l*s+_*i*c-n*d*c-a*i*p+n*l*p)*b,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*b,t[4]=x*b,t[5]=(u*d*s-g*f*s+g*i*m-e*d*m-u*i*p+e*f*p)*b,t[6]=(g*l*s-o*d*s-g*i*c+e*d*c+o*i*p-e*l*p)*b,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*m+e*l*m)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*p-e*h*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*m-e*a*m)*b,t[12]=S*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*d+e*h*d)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*d-e*a*d)*b,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,_=o*u,d=o*h,p=a*h,M=l*c,x=l*u,v=l*h,S=n.x,T=n.y,b=n.z;return i[0]=(1-(_+p))*S,i[1]=(m+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(m-v)*T,i[5]=(1-(f+p))*T,i[6]=(d+M)*T,i[7]=0,i[8]=(g+x)*b,i[9]=(d-M)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/s,u=1/o,h=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,e.setFromRotationMatrix(dn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=kn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===kn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===oo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=kn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,m=(n+i)*u;let g,_;if(a===kn)g=(o+s)*h,_=-2*h;else if(a===oo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new G,dn=new pe,qd=new G(0,0,0),Yd=new G(1,1,1),Zn=new G,Cs=new G,je=new G,Dc=new pe,Uc=new hs;class yo{constructor(t=0,e=0,n=0,i=yo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yo.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zd=0;const Ic=new G,Ji=new hs,Un=new pe,Ps=new G,kr=new G,jd=new G,Jd=new hs,Nc=new G(1,0,0),Oc=new G(0,1,0),Fc=new G(0,0,1),Kd={type:"added"},$d={type:"removed"};class Oe extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new G,e=new yo,n=new hs,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(kr,Ps,this.up):Un.lookAt(Ps,kr,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Un),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Oe.DEFAULT_UP=new G(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new G,In=new G,Qo=new G,Nn=new G,Ki=new G,$i=new G,Bc=new G,ta=new G,ea=new G,na=new G;let Ls=!1;class mn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),In.subVectors(n,e),Qo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(In),l=pn.dot(Qo),c=In.dot(In),u=In.dot(Qo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Nn),l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),In.subVectors(t,e),pn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),pn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ki.subVectors(i,n),$i.subVectors(s,n),ta.subVectors(t,n);const l=Ki.dot(ta),c=$i.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,i);const u=Ki.dot(ea),h=$i.dot(ea);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ki,o);na.subVectors(t,s);const m=Ki.dot(na),g=$i.dot(na);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Bc.subVectors(s,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Bc,a);const p=1/(d+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ki,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function ia(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Bd(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ia(o,s,t+1/3),this.g=ia(o,s,t),this.b=ia(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ae(be.r*255,0,255))*65536+Math.round(Ae(be.g*255,0,255))*256+Math.round(Ae(be.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,s=be.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ye){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Ds);const n=Vo(jn.h,Ds.h,e),i=Vo(jn.s,Ds.s,e),s=Vo(jn.l,Ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Yt;Yt.NAMES=ih;let Qd=0;class Dr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=dr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wn extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new G,Us=new ft;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRange={offset:0,count:-1},this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class rh extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sh extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tp=0;const rn=new pe,ra=new Oe,Qi=new G,Je=new fs,Gr=new fs,ve=new G;class Pe extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?sh:rh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Je.min,Gr.min),Je.expandByPoint(ve),ve.addVectors(Je.max,Gr.max),Je.expandByPoint(ve)):(Je.expandByPoint(Gr.min),Je.expandByPoint(Gr.max))}Je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ve.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),ve.add(Qi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new G,u[A]=new G;const h=new G,f=new G,m=new G,g=new ft,_=new ft,d=new ft,p=new G,M=new G;function x(A,q,W){h.fromArray(i,A*3),f.fromArray(i,q*3),m.fromArray(i,W*3),g.fromArray(o,A*2),_.fromArray(o,q*2),d.fromArray(o,W*2),f.sub(h),m.sub(h),_.sub(g),d.sub(g);const et=1/(_.x*d.y-d.x*_.y);isFinite(et)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(et),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-d.x).multiplyScalar(et),c[A].add(p),c[q].add(p),c[W].add(p),u[A].add(M),u[q].add(M),u[W].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let A=0,q=v.length;A<q;++A){const W=v[A],et=W.start,N=W.count;for(let Y=et,J=et+N;Y<J;Y+=3)x(n[Y+0],n[Y+1],n[Y+2])}const S=new G,T=new G,b=new G,I=new G;function y(A){b.fromArray(s,A*3),I.copy(b);const q=c[A];S.copy(q),S.sub(b.multiplyScalar(b.dot(q))).normalize(),T.crossVectors(I,q);const et=T.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=et}for(let A=0,q=v.length;A<q;++A){const W=v[A],et=W.start,N=W.count;for(let Y=et,J=et+N;Y<J;Y+=3)y(n[Y+0]),y(n[Y+1]),y(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new pe,_i=new vo,Is=new ds,kc=new G,tr=new G,er=new G,nr=new G,sa=new G,Ns=new G,Os=new ft,Fs=new ft,Bs=new ft,Gc=new G,Hc=new G,Vc=new G,zs=new G,ks=new G;class me extends Oe{constructor(t=new Pe,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(sa.fromBufferAttribute(h,t),o?Ns.addScaledVector(sa,u):Ns.addScaledVector(sa.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(Is.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Is,kc)===null||_i.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(s).invert(),_i.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let v=M,S=x;v<S;v+=3){const T=a.getX(v),b=a.getX(v+1),I=a.getX(v+2);i=Gs(this,p,t,n,c,u,h,T,b,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=a.getX(d),x=a.getX(d+1),v=a.getX(d+2);i=Gs(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let v=M,S=x;v<S;v+=3){const T=v,b=v+1,I=v+2;i=Gs(this,p,t,n,c,u,h,T,b,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=d,x=d+1,v=d+2;i=Gs(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function ep(r,t,e,n,i,s,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ai,a),l===null)return null;ks.copy(a),ks.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:r}}function Gs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,tr),r.getVertexPosition(l,er),r.getVertexPosition(c,nr);const u=ep(r,t,e,n,tr,er,nr,zs);if(u){i&&(Os.fromBufferAttribute(i,a),Fs.fromBufferAttribute(i,l),Bs.fromBufferAttribute(i,c),u.uv=mn.getInterpolation(zs,tr,er,nr,Os,Fs,Bs,new ft)),s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv1=mn.getInterpolation(zs,tr,er,nr,Os,Fs,Bs,new ft),u.uv2=u.uv1),o&&(Gc.fromBufferAttribute(o,a),Hc.fromBufferAttribute(o,l),Vc.fromBufferAttribute(o,c),u.normal=mn.getInterpolation(zs,tr,er,nr,Gc,Hc,Vc,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};mn.getNormal(tr,er,nr,h.normal),u.face=h}return u}class ps extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(h,2));function g(_,d,p,M,x,v,S,T,b,I,y){const A=v/b,q=S/I,W=v/2,et=S/2,N=T/2,Y=b+1,J=I+1;let H=0,V=0;const at=new G;for(let st=0;st<J;st++){const z=st*q-et;for(let tt=0;tt<Y;tt++){const Mt=tt*A-W;at[_]=Mt*M,at[d]=z*x,at[p]=N,c.push(at.x,at.y,at.z),at[_]=0,at[d]=0,at[p]=T>0?1:-1,u.push(at.x,at.y,at.z),h.push(tt/b),h.push(1-st/I),H+=1}}for(let st=0;st<I;st++)for(let z=0;z<b;z++){const tt=f+z+Y*st,Mt=f+z+Y*(st+1),B=f+(z+1)+Y*(st+1),U=f+(z+1)+Y*st;l.push(tt,Mt,U),l.push(Mt,B,U),V+=6}a.addGroup(m,V,y),m+=V,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(r){const t={};for(let e=0;e<r.length;e++){const n=Er(r[e]);for(const i in n)t[i]=n[i]}return t}function np(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function oh(r){return r.getRenderTarget()===null?r.outputColorSpace:Jt.workingColorSpace}const ip={clone:Er,merge:Ue};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ah extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends ah{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class op extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(ir,rr,t,e);i.layers=this.layers,this.add(i);const s=new _n(ir,rr,t,e);s.layers=this.layers,this.add(s);const o=new _n(ir,rr,t,e);o.layers=this.layers,this.add(o);const a=new _n(ir,rr,t,e);a.layers=this.layers,this.add(a);const l=new _n(ir,rr,t,e);l.layers=this.layers,this.add(l);const c=new _n(ir,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lh extends Ge{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ap extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?ye:ln),this.texture=new lh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ps(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ni});s.uniforms.tEquirect.value=e;const o=new me(i,s),a=e.minFilter;return e.minFilter===$r&&(e.minFilter=an),new op(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const oa=new G,lp=new G,cp=new Ot;class yi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oa.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cp.getNormalMatrix(t),i=this.coplanarPoint(oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ds,Hs=new G;class ch{constructor(t=new yi,e=new yi,n=new yi,i=new yi,s=new yi,o=new yi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],d=i[11],p=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,d-m,v-p).normalize(),n[1].setComponents(l+s,f+c,d+m,v+p).normalize(),n[2].setComponents(l+o,f+u,d+g,v+M).normalize(),n[3].setComponents(l-o,f-u,d-g,v-M).normalize(),n[4].setComponents(l-a,f-h,d-_,v-x).normalize(),e===kn)n[5].setComponents(l+a,f+h,d+_,v+x).normalize();else if(e===oo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function up(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ms extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const M=p*f-o;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-M,0),_.push(0,0,1),d.push(x/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,v=M+c*(p+1),S=M+1+c*(p+1),T=M+1+c*p;m.push(x,v,T),m.push(v,S,T)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,__=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:hp,alphahash_pars_fragment:fp,alphamap_fragment:dp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:_p,aomap_fragment:gp,aomap_pars_fragment:xp,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:wp,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Np,displacementmap_vertex:Op,emissivemap_fragment:Fp,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Gp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:jp,gradientmap_pars_fragment:Jp,lightmap_fragment:Kp,lightmap_pars_fragment:$p,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:sm,lights_phong_pars_fragment:om,lights_physical_fragment:am,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:um,lights_fragment_end:hm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:_m,map_pars_fragment:gm,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:Tm,morphtarget_vertex:bm,normal_fragment_begin:Am,normal_fragment_maps:wm,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Nm,opaque_fragment:Om,packing:Fm,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:km,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Zm,skinning_pars_vertex:jm,skinning_vertex:Jm,skinnormal_vertex:Km,specularmap_fragment:$m,specularmap_pars_fragment:Qm,tonemapping_fragment:t_,tonemapping_pars_fragment:e_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:r_,uv_pars_vertex:s_,uv_vertex:o_,worldpos_vertex:a_,background_vert:l_,background_frag:c_,backgroundCube_vert:u_,backgroundCube_frag:h_,cube_vert:f_,cube_frag:d_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:__,distanceRGBA_frag:g_,equirect_vert:x_,equirect_frag:v_,linedashed_vert:y_,linedashed_frag:M_,meshbasic_vert:S_,meshbasic_frag:E_,meshlambert_vert:T_,meshlambert_frag:b_,meshmatcap_vert:A_,meshmatcap_frag:w_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:L_,meshphysical_vert:D_,meshphysical_frag:U_,meshtoon_vert:I_,meshtoon_frag:N_,points_vert:O_,points_frag:F_,shadow_vert:B_,shadow_frag:z_,sprite_vert:k_,sprite_frag:G_},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Sn={basic:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ue([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ue([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ue([St.points,St.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ue([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ue([St.common,St.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ue([St.sprite,St.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ue([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ue([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:Ue([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Vs={r:0,b:0,g:0};function H_(r,t,e,n,i,s,o){const a=new Yt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(d,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===go)?(u===void 0&&(u=new me(new ps(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Er(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(x.colorSpace)!==te,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new me(new ms(2,2),new Ii({name:"BackgroundMaterial",uniforms:Er(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,p){d.getRGB(Vs,oh(r)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:g}}function V_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(N,Y,J,H,V){let at=!1;if(o){const st=_(H,J,Y);c!==st&&(c=st,m(c.object)),at=p(N,H,J,V),at&&M(N,H,J,V)}else{const st=Y.wireframe===!0;(c.geometry!==H.id||c.program!==J.id||c.wireframe!==st)&&(c.geometry=H.id,c.program=J.id,c.wireframe=st,at=!0)}V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(at||u)&&(u=!1,I(N,Y,J,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,Y,J){const H=J.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let at=V[Y.id];at===void 0&&(at={},V[Y.id]=at);let st=at[H];return st===void 0&&(st=d(f()),at[H]=st),st}function d(N){const Y=[],J=[],H=[];for(let V=0;V<i;V++)Y[V]=0,J[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:H,object:N,attributes:{},index:null}}function p(N,Y,J,H){const V=c.attributes,at=Y.attributes;let st=0;const z=J.getAttributes();for(const tt in z)if(z[tt].location>=0){const B=V[tt];let U=at[tt];if(U===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),B===void 0||B.attribute!==U||U&&B.data!==U.data)return!0;st++}return c.attributesNum!==st||c.index!==H}function M(N,Y,J,H){const V={},at=Y.attributes;let st=0;const z=J.getAttributes();for(const tt in z)if(z[tt].location>=0){let B=at[tt];B===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(B=N.instanceColor));const U={};U.attribute=B,B&&B.data&&(U.data=B.data),V[tt]=U,st++}c.attributes=V,c.attributesNum=st,c.index=H}function x(){const N=c.newAttributes;for(let Y=0,J=N.length;Y<J;Y++)N[Y]=0}function v(N){S(N,0)}function S(N,Y){const J=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;J[N]=1,H[N]===0&&(r.enableVertexAttribArray(N),H[N]=1),V[N]!==Y&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),V[N]=Y)}function T(){const N=c.newAttributes,Y=c.enabledAttributes;for(let J=0,H=Y.length;J<H;J++)Y[J]!==N[J]&&(r.disableVertexAttribArray(J),Y[J]=0)}function b(N,Y,J,H,V,at,st){st===!0?r.vertexAttribIPointer(N,Y,J,V,at):r.vertexAttribPointer(N,Y,J,H,V,at)}function I(N,Y,J,H){if(n.isWebGL2===!1&&(N.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=H.attributes,at=J.getAttributes(),st=Y.defaultAttributeValues;for(const z in at){const tt=at[z];if(tt.location>=0){let Mt=V[z];if(Mt===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),Mt!==void 0){const B=Mt.normalized,U=Mt.itemSize,C=e.get(Mt);if(C===void 0)continue;const w=C.buffer,Q=C.type,ut=C.bytesPerElement,$=n.isWebGL2===!0&&(Q===r.INT||Q===r.UNSIGNED_INT||Mt.gpuType===qu);if(Mt.isInterleavedBufferAttribute){const lt=Mt.data,P=lt.stride,nt=Mt.offset;if(lt.isInstancedInterleavedBuffer){for(let F=0;F<tt.locationSize;F++)S(tt.location+F,lt.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let F=0;F<tt.locationSize;F++)v(tt.location+F);r.bindBuffer(r.ARRAY_BUFFER,w);for(let F=0;F<tt.locationSize;F++)b(tt.location+F,U/tt.locationSize,Q,B,P*ut,(nt+U/tt.locationSize*F)*ut,$)}else{if(Mt.isInstancedBufferAttribute){for(let lt=0;lt<tt.locationSize;lt++)S(tt.location+lt,Mt.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let lt=0;lt<tt.locationSize;lt++)v(tt.location+lt);r.bindBuffer(r.ARRAY_BUFFER,w);for(let lt=0;lt<tt.locationSize;lt++)b(tt.location+lt,U/tt.locationSize,Q,B,U*ut,U/tt.locationSize*lt*ut,$)}}else if(st!==void 0){const B=st[z];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(tt.location,B);break;case 3:r.vertexAttrib3fv(tt.location,B);break;case 4:r.vertexAttrib4fv(tt.location,B);break;default:r.vertexAttrib1fv(tt.location,B)}}}}T()}function y(){W();for(const N in a){const Y=a[N];for(const J in Y){const H=Y[J];for(const V in H)g(H[V].object),delete H[V];delete Y[J]}delete a[N]}}function A(N){if(a[N.id]===void 0)return;const Y=a[N.id];for(const J in Y){const H=Y[J];for(const V in H)g(H[V].object),delete H[V];delete Y[J]}delete a[N.id]}function q(N){for(const Y in a){const J=a[Y];if(J[N.id]===void 0)continue;const H=J[N.id];for(const V in H)g(H[V].object),delete H[V];delete J[N.id]}}function W(){et(),u=!0,c!==l&&(c=l,m(c.object))}function et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:et,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function W_(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function X_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||t.has("OES_texture_float"),S=x&&v,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:T}}function q_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new yi,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):c();else{const M=s?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,m);for(let S=0;S!==x;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Y_(r){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=yr:a===Ca&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ra||a===Ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ap(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hh extends ah{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,Wc=[.125,.215,.35,.446,.526,.582],Ti=20,aa=new hh,Xc=new Yt;let la=null,ca=0,ua=0;const Mi=(1+Math.sqrt(5))/2,sr=1/Mi,qc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Mi,sr),new G(0,Mi,-sr),new G(sr,0,Mi),new G(-sr,0,Mi),new G(Mi,sr,0),new G(-Mi,sr,0)];class Yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ca,ua),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Qr,format:vn,colorSpace:Gn,depthBuffer:!1},i=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(s)),this._blurMaterial=j_(s,t,e)}return i}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i){const a=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xc),u.toneMapping=ii,u.autoClear=!1;const m=new Wn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new me(new ps,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Xc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ws(i,M*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yr||t.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=qc[(i-1)%qc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Ti;d>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ti}`);const p=[];let M=0;for(let b=0;b<Ti;++b){const I=b/_,y=Math.exp(-I*I/2);p.push(y),b===0?M+=y:b<d&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-cr?i-x+cr:0),T=4*(this._cubeSize-v);Ws(e,S,T,3*v,2*v),l.setRenderTarget(e),l.render(h,aa)}}function Z_(r){const t=[],e=[],n=[];let i=r;const s=r-cr+1+Wc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-cr?l=Wc[o-r+cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(d*g*m),v=new Float32Array(p*g*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,I=T>2?0:-1,y=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];M.set(y,_*g*T),x.set(f,d*g*T);const A=[T,T,T,T,T,T];v.set(A,p*g*T)}const S=new Pe;S.setAttribute("position",new yn(M,_)),S.setAttribute("uv",new yn(x,d)),S.setAttribute("faceIndex",new yn(v,p)),t.push(S),i>cr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(r,t,e){const n=new Ui(r,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function j_(r,t,e){const n=new Float32Array(Ti),i=new G(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function jc(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ra||l===Ca,u=l===yr||l===Mr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Yc(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Yc(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function K_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $_(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,v=M.length;x<v;x+=3){const S=M[x+0],T=M[x+1],b=M[x+2];f.push(S,T,T,b,b,S)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const S=x+0,T=x+1,b=x+2;f.push(S,T,T,b,b,S)}}else return;const d=new(Qu(f)?sh:rh)(f,1);d.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Q_(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),e.update(m,s,1)}function h(f,m,g){if(g===0)return;let _,d;if(i)_=r,d="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[d](s,m,a,f*l,g),e.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function tg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eg(r,t){return r[0]-t[0]}function ng(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ig(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ee,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let Y=function(){et.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var m=Y;d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),S===!0&&(y=3);let A=u.attributes.position.count*y,q=1;A>t.maxTextureSize&&(q=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const W=new Float32Array(A*q*4*_),et=new nh(W,A,q,_);et.type=$n,et.needsUpdate=!0;const N=y*4;for(let J=0;J<_;J++){const H=T[J],V=b[J],at=I[J],st=A*q*4*J;for(let z=0;z<H.count;z++){const tt=z*N;x===!0&&(o.fromBufferAttribute(H,z),W[st+tt+0]=o.x,W[st+tt+1]=o.y,W[st+tt+2]=o.z,W[st+tt+3]=0),v===!0&&(o.fromBufferAttribute(V,z),W[st+tt+4]=o.x,W[st+tt+5]=o.y,W[st+tt+6]=o.z,W[st+tt+7]=0),S===!0&&(o.fromBufferAttribute(at,z),W[st+tt+8]=o.x,W[st+tt+9]=o.y,W[st+tt+10]=o.z,W[st+tt+11]=at.itemSize===4?o.w:1)}}d={count:_,texture:et,size:new ft(A,q)},s.set(u,d),u.addEventListener("dispose",Y)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const S=_[v];S[0]=v,S[1]=f[v]}_.sort(ng);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(eg);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const S=a[v],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(d&&u.getAttribute("morphTarget"+v)!==d[T]&&u.setAttribute("morphTarget"+v,d[T]),p&&u.getAttribute("morphNormal"+v)!==p[T]&&u.setAttribute("morphNormal"+v,p[T]),i[v]=b,M+=b):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function rg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const fh=new Ge,dh=new nh,ph=new Wd,mh=new lh,Kc=[],$c=[],Qc=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function Ur(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Kc[i];if(s===void 0&&(s=new Float32Array(i),Kc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Mo(r,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function cg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;eu.set(n),r.uniformMatrix2fv(this.addr,!1,eu),ge(e,n)}}function ug(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;tu.set(n),r.uniformMatrix3fv(this.addr,!1,tu),ge(e,n)}}function hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Qc.set(n),r.uniformMatrix4fv(this.addr,!1,Qc),ge(e,n)}}function fg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function _g(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function yg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||fh,i)}function Mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ph,i)}function Sg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mh,i)}function Eg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dh,i)}function Tg(r){switch(r){case 5126:return sg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return _g;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function bg(r,t){r.uniform1fv(this.addr,t)}function Ag(r,t){const e=Ur(t,this.size,2);r.uniform2fv(this.addr,e)}function wg(r,t){const e=Ur(t,this.size,3);r.uniform3fv(this.addr,e)}function Rg(r,t){const e=Ur(t,this.size,4);r.uniform4fv(this.addr,e)}function Cg(r,t){const e=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Pg(r,t){const e=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Lg(r,t){const e=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Dg(r,t){r.uniform1iv(this.addr,t)}function Ug(r,t){r.uniform2iv(this.addr,t)}function Ig(r,t){r.uniform3iv(this.addr,t)}function Ng(r,t){r.uniform4iv(this.addr,t)}function Og(r,t){r.uniform1uiv(this.addr,t)}function Fg(r,t){r.uniform2uiv(this.addr,t)}function Bg(r,t){r.uniform3uiv(this.addr,t)}function zg(r,t){r.uniform4uiv(this.addr,t)}function kg(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||fh,s[o])}function Gg(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ph,s[o])}function Hg(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mh,s[o])}function Vg(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dh,s[o])}function Wg(r){switch(r){case 5126:return bg;case 35664:return Ag;case 35665:return wg;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ig;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return Fg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Tg(e.type)}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function nu(r,t){r.seq.push(t),r.map[t.id]=t}function Zg(r,t,e){const n=r.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),o=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nu(e,c===void 0?new Xg(a,r,t):new qg(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new Yg(a),nu(e,h)),e=h}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Zg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function iu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const jg=37297;let Jg=0;function Kg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $g(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===so&&e===ro?n="LinearDisplayP3ToLinearSRGB":t===ro&&e===so&&(n="LinearSRGBToLinearDisplayP3"),r){case Gn:case xo:return[n,"LinearTransferOETF"];case ye:case ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ru(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Kg(r.getShaderSource(t),o)}else return i}function Qg(r,t){const e=$g(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function t0(r,t){let e;switch(t){case hd:e="Linear";break;case fd:e="Reinhard";break;case dd:e="OptimizedCineon";break;case pd:e="ACESFilmic";break;case md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function e0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function n0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Vr(r){return r!==""}function su(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(r){return r.replace(r0,o0)}const s0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o0(r,t){let e=kt[t];if(e===void 0){const n=s0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(r){return r.replace(a0,l0)}function l0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lu(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function u0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function f0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wu:t="ENVMAP_BLENDING_MULTIPLY";break;case cd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function d0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=c0(e),c=u0(e),u=h0(e),h=f0(e),f=d0(e),m=e.isWebGL2?"":e0(e),g=n0(s),_=i.createProgram();let d,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),d.length>0&&(d+=`
`),p=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(d=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[m,lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?kt.tonemapping_pars_fragment:"",e.toneMapping!==ii?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Na(o),o=su(o,e),o=ou(o,e),a=Na(a),a=su(a,e),a=ou(a,e),o=au(o),a=au(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+d+o,v=M+p+a,S=iu(i,i.VERTEX_SHADER,x),T=iu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(q){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),et=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(T).trim();let Y=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{const H=ru(i,S,"vertex"),V=ru(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+H+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(et===""||N==="")&&(J=!1);J&&(q.diagnostics={runnable:Y,programLog:W,vertexShader:{log:et,prefix:d},fragmentShader:{log:N,prefix:p}})}i.deleteShader(S),i.deleteShader(T),I=new $s(i,_),y=i0(i,_)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,jg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let m0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function x0(r,t,e,n,i,s,o){const a=new cl,l=new _0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function d(y,A,q,W,et){const N=W.fog,Y=et.geometry,J=y.isMeshStandardMaterial?W.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),V=H&&H.mapping===go?H.image.height:null,at=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,z=st!==void 0?st.length:0;let tt=0;Y.morphAttributes.position!==void 0&&(tt=1),Y.morphAttributes.normal!==void 0&&(tt=2),Y.morphAttributes.color!==void 0&&(tt=3);let Mt,B,U,C;if(at){const ue=Sn[at];Mt=ue.vertexShader,B=ue.fragmentShader}else Mt=y.vertexShader,B=y.fragmentShader,l.update(y),U=l.getVertexShaderID(y),C=l.getFragmentShaderID(y);const w=r.getRenderTarget(),Q=et.isInstancedMesh===!0,ut=!!y.map,$=!!y.matcap,lt=!!H,P=!!y.aoMap,nt=!!y.lightMap,F=!!y.bumpMap,X=!!y.normalMap,Z=!!y.displacementMap,ht=!!y.emissiveMap,O=!!y.metalnessMap,L=!!y.roughnessMap,dt=y.anisotropy>0,Tt=y.clearcoat>0,Vt=y.iridescence>0,D=y.sheen>0,E=y.transmission>0,K=dt&&!!y.anisotropyMap,mt=Tt&&!!y.clearcoatMap,pt=Tt&&!!y.clearcoatNormalMap,_t=Tt&&!!y.clearcoatRoughnessMap,Rt=Vt&&!!y.iridescenceMap,gt=Vt&&!!y.iridescenceThicknessMap,Et=D&&!!y.sheenColorMap,Lt=D&&!!y.sheenRoughnessMap,qt=!!y.specularMap,xt=!!y.specularColorMap,jt=!!y.specularIntensityMap,Ft=E&&!!y.transmissionMap,It=E&&!!y.thicknessMap,Pt=!!y.gradientMap,wt=!!y.alphaMap,Xt=y.alphaTest>0,k=!!y.alphaHash,bt=!!y.extensions,vt=!!Y.attributes.uv1,ct=!!Y.attributes.uv2,yt=!!Y.attributes.uv3;let Dt=ii;return y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=r.toneMapping),{isWebGL2:u,shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Mt,fragmentShader:B,defines:y.defines,customVertexShaderID:U,customFragmentShaderID:C,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Q,instancingColor:Q&&et.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:w===null?r.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Gn,map:ut,matcap:$,envMap:lt,envMapMode:lt&&H.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:nt,bumpMap:F,normalMap:X,displacementMap:f&&Z,emissiveMap:ht,normalMapObjectSpace:X&&y.normalMapType===Cd,normalMapTangentSpace:X&&y.normalMapType===Rd,metalnessMap:O,roughnessMap:L,anisotropy:dt,anisotropyMap:K,clearcoat:Tt,clearcoatMap:mt,clearcoatNormalMap:pt,clearcoatRoughnessMap:_t,iridescence:Vt,iridescenceMap:Rt,iridescenceThicknessMap:gt,sheen:D,sheenColorMap:Et,sheenRoughnessMap:Lt,specularMap:qt,specularColorMap:xt,specularIntensityMap:jt,transmission:E,transmissionMap:Ft,thicknessMap:It,gradientMap:Pt,opaque:y.transparent===!1&&y.blending===dr,alphaMap:wt,alphaTest:Xt,alphaHash:k,combine:y.combine,mapUv:ut&&_(y.map.channel),aoMapUv:P&&_(y.aoMap.channel),lightMapUv:nt&&_(y.lightMap.channel),bumpMapUv:F&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:Z&&_(y.displacementMap.channel),emissiveMapUv:ht&&_(y.emissiveMap.channel),metalnessMapUv:O&&_(y.metalnessMap.channel),roughnessMapUv:L&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(y.sheenRoughnessMap.channel),specularMapUv:qt&&_(y.specularMap.channel),specularColorMapUv:xt&&_(y.specularColorMap.channel),specularIntensityMapUv:jt&&_(y.specularIntensityMap.channel),transmissionMapUv:Ft&&_(y.transmissionMap.channel),thicknessMapUv:It&&_(y.thicknessMap.channel),alphaMapUv:wt&&_(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(X||dt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:ct,vertexUv3s:yt,pointsUvs:et.isPoints===!0&&!!Y.attributes.uv&&(ut||wt),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:et.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gn,flipSided:y.side===ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:bt&&y.extensions.derivatives===!0,extensionFragDepth:bt&&y.extensions.fragDepth===!0,extensionDrawBuffers:bt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)A.push(q),A.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(M(A,y),x(A,y),A.push(r.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function M(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function v(y){const A=g[y.type];let q;if(A){const W=Sn[A];q=ip.clone(W.uniforms)}else q=y.uniforms;return q}function S(y,A){let q;for(let W=0,et=c.length;W<et;W++){const N=c[W];if(N.cacheKey===A){q=N,++q.usedTimes;break}}return q===void 0&&(q=new p0(r,A,y,s),c.push(q)),q}function T(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:I}}function v0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function y0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function cu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function uu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,m,g,_,d){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),t++,p}function a(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||y0),n.length>1&&n.sort(f||cu),i.length>1&&i.sort(f||cu)}function u(){for(let h=t,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function M0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new uu,r.set(n,[o])):i>=s.length?(o=new uu,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function S0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Yt};break;case"SpotLight":e={position:new G,direction:new G,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function E0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let T0=0;function b0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function A0(r,t){const e=new S0,n=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const s=new G,o=new pe,a=new pe;function l(u,h){let f=0,m=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,d=0,p=0,M=0,x=0,v=0,S=0,T=0,b=0,I=0,y=0;u.sort(b0);const A=h===!0?Math.PI:1;for(let W=0,et=u.length;W<et;W++){const N=u[W],Y=N.color,J=N.intensity,H=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=Y.r*J*A,m+=Y.g*J*A,g+=Y.b*J*A;else if(N.isLightProbe){for(let at=0;at<9;at++)i.probe[at].addScaledVector(N.sh.coefficients[at],J);y++}else if(N.isDirectionalLight){const at=e.get(N);if(at.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const st=N.shadow,z=n.get(N);z.shadowBias=st.bias,z.shadowNormalBias=st.normalBias,z.shadowRadius=st.radius,z.shadowMapSize=st.mapSize,i.directionalShadow[_]=z,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=N.shadow.matrix,v++}i.directional[_]=at,_++}else if(N.isSpotLight){const at=e.get(N);at.position.setFromMatrixPosition(N.matrixWorld),at.color.copy(Y).multiplyScalar(J*A),at.distance=H,at.coneCos=Math.cos(N.angle),at.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),at.decay=N.decay,i.spot[p]=at;const st=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,st.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[p]=st.matrix,N.castShadow){const z=n.get(N);z.shadowBias=st.bias,z.shadowNormalBias=st.normalBias,z.shadowRadius=st.radius,z.shadowMapSize=st.mapSize,i.spotShadow[p]=z,i.spotShadowMap[p]=V,T++}p++}else if(N.isRectAreaLight){const at=e.get(N);at.color.copy(Y).multiplyScalar(J),at.halfWidth.set(N.width*.5,0,0),at.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=at,M++}else if(N.isPointLight){const at=e.get(N);if(at.color.copy(N.color).multiplyScalar(N.intensity*A),at.distance=N.distance,at.decay=N.decay,N.castShadow){const st=N.shadow,z=n.get(N);z.shadowBias=st.bias,z.shadowNormalBias=st.normalBias,z.shadowRadius=st.radius,z.shadowMapSize=st.mapSize,z.shadowCameraNear=st.camera.near,z.shadowCameraFar=st.camera.far,i.pointShadow[d]=z,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=N.shadow.matrix,S++}i.point[d]=at,d++}else if(N.isHemisphereLight){const at=e.get(N);at.skyColor.copy(N.color).multiplyScalar(J*A),at.groundColor.copy(N.groundColor).multiplyScalar(J*A),i.hemi[x]=at,x++}}M>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const q=i.hash;(q.directionalLength!==_||q.pointLength!==d||q.spotLength!==p||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==v||q.numPointShadows!==S||q.numSpotShadows!==T||q.numSpotMaps!==b||q.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=d,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,q.directionalLength=_,q.pointLength=d,q.spotLength=p,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=v,q.numPointShadows=S,q.numSpotShadows=T,q.numSpotMaps=b,q.numLightProbes=y,i.version=T0++)}function c(u,h){let f=0,m=0,g=0,_=0,d=0;const p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const v=u[M];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){const S=i.hemi[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:i}}function hu(r,t){const e=new A0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function w0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new hu(r,t),e.set(s,[l])):o>=a.length?(l=new hu(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class R0 extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C0 extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D0(r,t,e){let n=new ch;const i=new ft,s=new ft,o=new Ee,a=new R0({depthPacking:wd}),l=new C0,c={},u=e.maxTextureSize,h={[ai]:ke,[ke]:ai,[gn]:gn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:P0,fragmentShader:L0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let p=this.type;this.render=function(S,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const I=r.getRenderTarget(),y=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ni),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=p!==Fn&&this.type===Fn,et=p===Fn&&this.type!==Fn;for(let N=0,Y=S.length;N<Y;N++){const J=S[N],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||W===!0||et===!0){const st=this.type!==Fn?{minFilter:Ie,magFilter:Ie}:{};H.map!==null&&H.map.dispose(),H.map=new Ui(i.x,i.y,st),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const at=H.getViewportCount();for(let st=0;st<at;st++){const z=H.getViewport(st);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),q.viewport(o),H.updateMatrices(J,st),n=H.getFrustum(),v(T,b,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&M(H,b),H.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(I,y,A)};function M(S,T){const b=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ui(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,b,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,b,m,_,null)}function x(S,T,b,I){let y=null;const A=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=b.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=y.uuid,W=T.uuid;let et=c[q];et===void 0&&(et={},c[q]=et);let N=et[W];N===void 0&&(N=y.clone(),et[W]=N),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,I===Fn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=r.properties.get(y);q.light=b}return y}function v(S,T,b,I,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Fn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const W=t.update(S),et=S.material;if(Array.isArray(et)){const N=W.groups;for(let Y=0,J=N.length;Y<J;Y++){const H=N[Y],V=et[H.materialIndex];if(V&&V.visible){const at=x(S,V,I,y);r.renderBufferDirect(b,null,W,at,S,H)}}}else if(et.visible){const N=x(S,et,I,y);r.renderBufferDirect(b,null,W,N,S,null)}}const q=S.children;for(let W=0,et=q.length;W<et;W++)v(q[W],T,b,I,y)}}function U0(r,t,e){const n=e.isWebGL2;function i(){let k=!1;const bt=new Ee;let vt=null;const ct=new Ee(0,0,0,0);return{setMask:function(yt){vt!==yt&&!k&&(r.colorMask(yt,yt,yt,yt),vt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,Dt,Zt,ue,nn){nn===!0&&(yt*=ue,Dt*=ue,Zt*=ue),bt.set(yt,Dt,Zt,ue),ct.equals(bt)===!1&&(r.clearColor(yt,Dt,Zt,ue),ct.copy(bt))},reset:function(){k=!1,vt=null,ct.set(-1,0,0,0)}}}function s(){let k=!1,bt=null,vt=null,ct=null;return{setTest:function(yt){yt?ut(r.DEPTH_TEST):$(r.DEPTH_TEST)},setMask:function(yt){bt!==yt&&!k&&(r.depthMask(yt),bt=yt)},setFunc:function(yt){if(vt!==yt){switch(yt){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case od:r.depthFunc(r.GEQUAL);break;case ad:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=yt}},setLocked:function(yt){k=yt},setClear:function(yt){ct!==yt&&(r.clearDepth(yt),ct=yt)},reset:function(){k=!1,bt=null,vt=null,ct=null}}}function o(){let k=!1,bt=null,vt=null,ct=null,yt=null,Dt=null,Zt=null,ue=null,nn=null;return{setTest:function(Qt){k||(Qt?ut(r.STENCIL_TEST):$(r.STENCIL_TEST))},setMask:function(Qt){bt!==Qt&&!k&&(r.stencilMask(Qt),bt=Qt)},setFunc:function(Qt,Le,Mn){(vt!==Qt||ct!==Le||yt!==Mn)&&(r.stencilFunc(Qt,Le,Mn),vt=Qt,ct=Le,yt=Mn)},setOp:function(Qt,Le,Mn){(Dt!==Qt||Zt!==Le||ue!==Mn)&&(r.stencilOp(Qt,Le,Mn),Dt=Qt,Zt=Le,ue=Mn)},setLocked:function(Qt){k=Qt},setClear:function(Qt){nn!==Qt&&(r.clearStencil(Qt),nn=Qt)},reset:function(){k=!1,bt=null,vt=null,ct=null,yt=null,Dt=null,Zt=null,ue=null,nn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],d=null,p=!1,M=null,x=null,v=null,S=null,T=null,b=null,I=null,y=new Yt(0,0,0),A=0,q=!1,W=null,et=null,N=null,Y=null,J=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,at=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(st)[1]),V=at>=1):st.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),V=at>=2);let z=null,tt={};const Mt=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),U=new Ee().fromArray(Mt),C=new Ee().fromArray(B);function w(k,bt,vt,ct){const yt=new Uint8Array(4),Dt=r.createTexture();r.bindTexture(k,Dt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<vt;Zt++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(bt,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(bt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return Dt}const Q={};Q[r.TEXTURE_2D]=w(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=w(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Q[r.TEXTURE_2D_ARRAY]=w(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=w(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(r.DEPTH_TEST),l.setFunc(no),O(!1),L(ql),ut(r.CULL_FACE),Z(ni);function ut(k){f[k]!==!0&&(r.enable(k),f[k]=!0)}function $(k){f[k]!==!1&&(r.disable(k),f[k]=!1)}function lt(k,bt){return m[k]!==bt?(r.bindFramebuffer(k,bt),m[k]=bt,n&&(k===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=bt),k===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=bt)),!0):!1}function P(k,bt){let vt=_,ct=!1;if(k)if(vt=g.get(bt),vt===void 0&&(vt=[],g.set(bt,vt)),k.isWebGLMultipleRenderTargets){const yt=k.texture;if(vt.length!==yt.length||vt[0]!==r.COLOR_ATTACHMENT0){for(let Dt=0,Zt=yt.length;Dt<Zt;Dt++)vt[Dt]=r.COLOR_ATTACHMENT0+Dt;vt.length=yt.length,ct=!0}}else vt[0]!==r.COLOR_ATTACHMENT0&&(vt[0]=r.COLOR_ATTACHMENT0,ct=!0);else vt[0]!==r.BACK&&(vt[0]=r.BACK,ct=!0);ct&&(e.isWebGL2?r.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function nt(k){return d!==k?(r.useProgram(k),d=k,!0):!1}const F={[Ei]:r.FUNC_ADD,[Gf]:r.FUNC_SUBTRACT,[Hf]:r.FUNC_REVERSE_SUBTRACT};if(n)F[Jl]=r.MIN,F[Kl]=r.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(F[Jl]=k.MIN_EXT,F[Kl]=k.MAX_EXT)}const X={[Vf]:r.ZERO,[Wf]:r.ONE,[Xf]:r.SRC_COLOR,[Aa]:r.SRC_ALPHA,[Kf]:r.SRC_ALPHA_SATURATE,[jf]:r.DST_COLOR,[Yf]:r.DST_ALPHA,[qf]:r.ONE_MINUS_SRC_COLOR,[wa]:r.ONE_MINUS_SRC_ALPHA,[Jf]:r.ONE_MINUS_DST_COLOR,[Zf]:r.ONE_MINUS_DST_ALPHA,[$f]:r.CONSTANT_COLOR,[Qf]:r.ONE_MINUS_CONSTANT_COLOR,[td]:r.CONSTANT_ALPHA,[ed]:r.ONE_MINUS_CONSTANT_ALPHA};function Z(k,bt,vt,ct,yt,Dt,Zt,ue,nn,Qt){if(k===ni){p===!0&&($(r.BLEND),p=!1);return}if(p===!1&&(ut(r.BLEND),p=!0),k!==kf){if(k!==M||Qt!==q){if((x!==Ei||T!==Ei)&&(r.blendEquation(r.FUNC_ADD),x=Ei,T=Ei),Qt)switch(k){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFunc(r.ONE,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,S=null,b=null,I=null,y.set(0,0,0),A=0,M=k,q=Qt}return}yt=yt||bt,Dt=Dt||vt,Zt=Zt||ct,(bt!==x||yt!==T)&&(r.blendEquationSeparate(F[bt],F[yt]),x=bt,T=yt),(vt!==v||ct!==S||Dt!==b||Zt!==I)&&(r.blendFuncSeparate(X[vt],X[ct],X[Dt],X[Zt]),v=vt,S=ct,b=Dt,I=Zt),(ue.equals(y)===!1||nn!==A)&&(r.blendColor(ue.r,ue.g,ue.b,nn),y.copy(ue),A=nn),M=k,q=!1}function ht(k,bt){k.side===gn?$(r.CULL_FACE):ut(r.CULL_FACE);let vt=k.side===ke;bt&&(vt=!vt),O(vt),k.blending===dr&&k.transparent===!1?Z(ni):Z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const ct=k.stencilWrite;c.setTest(ct),ct&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Tt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):$(r.SAMPLE_ALPHA_TO_COVERAGE)}function O(k){W!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),W=k)}function L(k){k!==Ff?(ut(r.CULL_FACE),k!==et&&(k===ql?r.cullFace(r.BACK):k===Bf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$(r.CULL_FACE),et=k}function dt(k){k!==N&&(V&&r.lineWidth(k),N=k)}function Tt(k,bt,vt){k?(ut(r.POLYGON_OFFSET_FILL),(Y!==bt||J!==vt)&&(r.polygonOffset(bt,vt),Y=bt,J=vt)):$(r.POLYGON_OFFSET_FILL)}function Vt(k){k?ut(r.SCISSOR_TEST):$(r.SCISSOR_TEST)}function D(k){k===void 0&&(k=r.TEXTURE0+H-1),z!==k&&(r.activeTexture(k),z=k)}function E(k,bt,vt){vt===void 0&&(z===null?vt=r.TEXTURE0+H-1:vt=z);let ct=tt[vt];ct===void 0&&(ct={type:void 0,texture:void 0},tt[vt]=ct),(ct.type!==k||ct.texture!==bt)&&(z!==vt&&(r.activeTexture(vt),z=vt),r.bindTexture(k,bt||Q[k]),ct.type=k,ct.texture=bt)}function K(){const k=tt[z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(k){U.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),U.copy(k))}function It(k){C.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),C.copy(k))}function Pt(k,bt){let vt=h.get(bt);vt===void 0&&(vt=new WeakMap,h.set(bt,vt));let ct=vt.get(k);ct===void 0&&(ct=r.getUniformBlockIndex(bt,k.name),vt.set(k,ct))}function wt(k,bt){const ct=h.get(bt).get(k);u.get(bt)!==ct&&(r.uniformBlockBinding(bt,ct,k.__bindingPointIndex),u.set(bt,ct))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},z=null,tt={},m={},g=new WeakMap,_=[],d=null,p=!1,M=null,x=null,v=null,S=null,T=null,b=null,I=null,y=new Yt(0,0,0),A=0,q=!1,W=null,et=null,N=null,Y=null,J=null,U.set(0,0,r.canvas.width,r.canvas.height),C.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ut,disable:$,bindFramebuffer:lt,drawBuffers:P,useProgram:nt,setBlending:Z,setMaterial:ht,setFlipSided:O,setCullFace:L,setLineWidth:dt,setPolygonOffset:Tt,setScissorTest:Vt,activeTexture:D,bindTexture:E,unbindTexture:K,compressedTexImage2D:mt,compressedTexImage3D:pt,texImage2D:xt,texImage3D:jt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Lt,texStorage3D:qt,texSubImage2D:_t,texSubImage3D:Rt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Et,scissor:Ft,viewport:It,reset:Xt}}function I0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return p?new OffscreenCanvas(D,E):ts("canvas")}function x(D,E,K,mt){let pt=1;if((D.width>mt||D.height>mt)&&(pt=mt/Math.max(D.width,D.height)),pt<1||E===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _t=E?Ia:Math.floor,Rt=_t(pt*D.width),gt=_t(pt*D.height);_===void 0&&(_=M(Rt,gt));const Et=K?M(Rt,gt):_;return Et.width=Rt,Et.height=gt,Et.getContext("2d").drawImage(D,0,0,Rt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Rt+"x"+gt+")."),Et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function v(D){return wc(D.width)&&wc(D.height)}function S(D){return a?!1:D.wrapS!==xn||D.wrapT!==xn||D.minFilter!==Ie&&D.minFilter!==an}function T(D,E){return D.generateMipmaps&&E&&D.minFilter!==Ie&&D.minFilter!==an}function b(D){r.generateMipmap(D)}function I(D,E,K,mt,pt=!1){if(a===!1)return E;if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _t=E;if(E===r.RED&&(K===r.FLOAT&&(_t=r.R32F),K===r.HALF_FLOAT&&(_t=r.R16F),K===r.UNSIGNED_BYTE&&(_t=r.R8)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(_t=r.R8UI),K===r.UNSIGNED_SHORT&&(_t=r.R16UI),K===r.UNSIGNED_INT&&(_t=r.R32UI),K===r.BYTE&&(_t=r.R8I),K===r.SHORT&&(_t=r.R16I),K===r.INT&&(_t=r.R32I)),E===r.RG&&(K===r.FLOAT&&(_t=r.RG32F),K===r.HALF_FLOAT&&(_t=r.RG16F),K===r.UNSIGNED_BYTE&&(_t=r.RG8)),E===r.RGBA){const Rt=pt?io:Jt.getTransfer(mt);K===r.FLOAT&&(_t=r.RGBA32F),K===r.HALF_FLOAT&&(_t=r.RGBA16F),K===r.UNSIGNED_BYTE&&(_t=Rt===te?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(_t=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(_t=r.RGB5_A1)}return(_t===r.R16F||_t===r.R32F||_t===r.RG16F||_t===r.RG32F||_t===r.RGBA16F||_t===r.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function y(D,E,K){return T(D,K)===!0||D.isFramebufferTexture&&D.minFilter!==Ie&&D.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function A(D){return D===Ie||D===$l||D===Oo?r.NEAREST:r.LINEAR}function q(D){const E=D.target;E.removeEventListener("dispose",q),et(E),E.isVideoTexture&&g.delete(E)}function W(D){const E=D.target;E.removeEventListener("dispose",W),Y(E)}function et(D){const E=n.get(D);if(E.__webglInit===void 0)return;const K=D.source,mt=d.get(K);if(mt){const pt=mt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&N(D),Object.keys(mt).length===0&&d.delete(K)}n.remove(D)}function N(D){const E=n.get(D);r.deleteTexture(E.__webglTexture);const K=D.source,mt=d.get(K);delete mt[E.__cacheKey],o.memory.textures--}function Y(D){const E=D.texture,K=n.get(D),mt=n.get(E);if(mt.__webglTexture!==void 0&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(K.__webglFramebuffer[pt]))for(let _t=0;_t<K.__webglFramebuffer[pt].length;_t++)r.deleteFramebuffer(K.__webglFramebuffer[pt][_t]);else r.deleteFramebuffer(K.__webglFramebuffer[pt]);K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[pt])}else{if(Array.isArray(K.__webglFramebuffer))for(let pt=0;pt<K.__webglFramebuffer.length;pt++)r.deleteFramebuffer(K.__webglFramebuffer[pt]);else r.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let pt=0;pt<K.__webglColorRenderbuffer.length;pt++)K.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[pt]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let pt=0,_t=E.length;pt<_t;pt++){const Rt=n.get(E[pt]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),o.memory.textures--),n.remove(E[pt])}n.remove(E),n.remove(D)}let J=0;function H(){J=0}function V(){const D=J;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),J+=1,D}function at(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function st(D,E){const K=n.get(D);if(D.isVideoTexture&&Tt(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const mt=D.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(K,D,E);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function z(D,E){const K=n.get(D);if(D.version>0&&K.__version!==D.version){ut(K,D,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function tt(D,E){const K=n.get(D);if(D.version>0&&K.__version!==D.version){ut(K,D,E);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function Mt(D,E){const K=n.get(D);if(D.version>0&&K.__version!==D.version){$(K,D,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const B={[Pa]:r.REPEAT,[xn]:r.CLAMP_TO_EDGE,[La]:r.MIRRORED_REPEAT},U={[Ie]:r.NEAREST,[$l]:r.NEAREST_MIPMAP_NEAREST,[Oo]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[_d]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},C={[Pd]:r.NEVER,[Fd]:r.ALWAYS,[Ld]:r.LESS,[Ud]:r.LEQUAL,[Dd]:r.EQUAL,[Od]:r.GEQUAL,[Id]:r.GREATER,[Nd]:r.NOTEQUAL};function w(D,E,K){if(K?(r.texParameteri(D,r.TEXTURE_WRAP_S,B[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,B[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,B[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,U[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,U[E.minFilter])):(r.texParameteri(D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==xn||E.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(D,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(D,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Ie&&E.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,C[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ie||E.minFilter!==Oo&&E.minFilter!==$r||E.type===$n&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Qr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(D,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Q(D,E){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",q));const mt=E.source;let pt=d.get(mt);pt===void 0&&(pt={},d.set(mt,pt));const _t=at(E);if(_t!==D.__cacheKey){pt[_t]===void 0&&(pt[_t]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pt[_t].usedTimes++;const Rt=pt[D.__cacheKey];Rt!==void 0&&(pt[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&N(E)),D.__cacheKey=_t,D.__webglTexture=pt[_t].texture}return K}function ut(D,E,K){let mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=r.TEXTURE_3D);const pt=Q(D,E),_t=E.source;e.bindTexture(mt,D.__webglTexture,r.TEXTURE0+K);const Rt=n.get(_t);if(_t.version!==Rt.__version||pt===!0){e.activeTexture(r.TEXTURE0+K);const gt=Jt.getPrimaries(Jt.workingColorSpace),Et=E.colorSpace===ln?null:Jt.getPrimaries(E.colorSpace),Lt=E.colorSpace===ln||gt===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const qt=S(E)&&v(E.image)===!1;let xt=x(E.image,qt,!1,u);xt=Vt(E,xt);const jt=v(xt)||a,Ft=s.convert(E.format,E.colorSpace);let It=s.convert(E.type),Pt=I(E.internalFormat,Ft,It,E.colorSpace,E.isVideoTexture);w(mt,E,jt);let wt;const Xt=E.mipmaps,k=a&&E.isVideoTexture!==!0,bt=Rt.__version===void 0||pt===!0,vt=y(E,xt,jt);if(E.isDepthTexture)Pt=r.DEPTH_COMPONENT,a?E.type===$n?Pt=r.DEPTH_COMPONENT32F:E.type===Kn?Pt=r.DEPTH_COMPONENT24:E.type===Ai?Pt=r.DEPTH24_STENCIL8:Pt=r.DEPTH_COMPONENT16:E.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===wi&&Pt===r.DEPTH_COMPONENT&&E.type!==al&&E.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Kn,It=s.convert(E.type)),E.format===Sr&&Pt===r.DEPTH_COMPONENT&&(Pt=r.DEPTH_STENCIL,E.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ai,It=s.convert(E.type))),bt&&(k?e.texStorage2D(r.TEXTURE_2D,1,Pt,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,xt.width,xt.height,0,Ft,It,null));else if(E.isDataTexture)if(Xt.length>0&&jt){k&&bt&&e.texStorage2D(r.TEXTURE_2D,vt,Pt,Xt[0].width,Xt[0].height);for(let ct=0,yt=Xt.length;ct<yt;ct++)wt=Xt[ct],k?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,wt.width,wt.height,Ft,It,wt.data):e.texImage2D(r.TEXTURE_2D,ct,Pt,wt.width,wt.height,0,Ft,It,wt.data);E.generateMipmaps=!1}else k?(bt&&e.texStorage2D(r.TEXTURE_2D,vt,Pt,xt.width,xt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt.width,xt.height,Ft,It,xt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,xt.width,xt.height,0,Ft,It,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Pt,Xt[0].width,Xt[0].height,xt.depth);for(let ct=0,yt=Xt.length;ct<yt;ct++)wt=Xt[ct],E.format!==vn?Ft!==null?k?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,xt.depth,Ft,wt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,Pt,wt.width,wt.height,xt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,xt.depth,Ft,It,wt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,Pt,wt.width,wt.height,xt.depth,0,Ft,It,wt.data)}else{k&&bt&&e.texStorage2D(r.TEXTURE_2D,vt,Pt,Xt[0].width,Xt[0].height);for(let ct=0,yt=Xt.length;ct<yt;ct++)wt=Xt[ct],E.format!==vn?Ft!==null?k?e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,wt.width,wt.height,Ft,wt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,wt.width,wt.height,Ft,It,wt.data):e.texImage2D(r.TEXTURE_2D,ct,Pt,wt.width,wt.height,0,Ft,It,wt.data)}else if(E.isDataArrayTexture)k?(bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Pt,xt.width,xt.height,xt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ft,It,xt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,xt.width,xt.height,xt.depth,0,Ft,It,xt.data);else if(E.isData3DTexture)k?(bt&&e.texStorage3D(r.TEXTURE_3D,vt,Pt,xt.width,xt.height,xt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ft,It,xt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,xt.width,xt.height,xt.depth,0,Ft,It,xt.data);else if(E.isFramebufferTexture){if(bt)if(k)e.texStorage2D(r.TEXTURE_2D,vt,Pt,xt.width,xt.height);else{let ct=xt.width,yt=xt.height;for(let Dt=0;Dt<vt;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,Pt,ct,yt,0,Ft,It,null),ct>>=1,yt>>=1}}else if(Xt.length>0&&jt){k&&bt&&e.texStorage2D(r.TEXTURE_2D,vt,Pt,Xt[0].width,Xt[0].height);for(let ct=0,yt=Xt.length;ct<yt;ct++)wt=Xt[ct],k?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ft,It,wt):e.texImage2D(r.TEXTURE_2D,ct,Pt,Ft,It,wt);E.generateMipmaps=!1}else k?(bt&&e.texStorage2D(r.TEXTURE_2D,vt,Pt,xt.width,xt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,It,xt)):e.texImage2D(r.TEXTURE_2D,0,Pt,Ft,It,xt);T(E,jt)&&b(mt),Rt.__version=_t.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function $(D,E,K){if(E.image.length!==6)return;const mt=Q(D,E),pt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+K);const _t=n.get(pt);if(pt.version!==_t.__version||mt===!0){e.activeTexture(r.TEXTURE0+K);const Rt=Jt.getPrimaries(Jt.workingColorSpace),gt=E.colorSpace===ln?null:Jt.getPrimaries(E.colorSpace),Et=E.colorSpace===ln||Rt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let ct=0;ct<6;ct++)!Lt&&!qt?xt[ct]=x(E.image[ct],!1,!0,c):xt[ct]=qt?E.image[ct].image:E.image[ct],xt[ct]=Vt(E,xt[ct]);const jt=xt[0],Ft=v(jt)||a,It=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type),wt=I(E.internalFormat,It,Pt,E.colorSpace),Xt=a&&E.isVideoTexture!==!0,k=_t.__version===void 0||mt===!0;let bt=y(E,jt,Ft);w(r.TEXTURE_CUBE_MAP,E,Ft);let vt;if(Lt){Xt&&k&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,wt,jt.width,jt.height);for(let ct=0;ct<6;ct++){vt=xt[ct].mipmaps;for(let yt=0;yt<vt.length;yt++){const Dt=vt[yt];E.format!==vn?It!==null?Xt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,0,0,Dt.width,Dt.height,It,Dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,wt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,0,0,Dt.width,Dt.height,It,Pt,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,wt,Dt.width,Dt.height,0,It,Pt,Dt.data)}}}else{vt=E.mipmaps,Xt&&k&&(vt.length>0&&bt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,wt,xt[0].width,xt[0].height));for(let ct=0;ct<6;ct++)if(qt){Xt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,xt[ct].width,xt[ct].height,It,Pt,xt[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,wt,xt[ct].width,xt[ct].height,0,It,Pt,xt[ct].data);for(let yt=0;yt<vt.length;yt++){const Zt=vt[yt].image[ct].image;Xt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,0,0,Zt.width,Zt.height,It,Pt,Zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,wt,Zt.width,Zt.height,0,It,Pt,Zt.data)}}else{Xt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,Pt,xt[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,wt,It,Pt,xt[ct]);for(let yt=0;yt<vt.length;yt++){const Dt=vt[yt];Xt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,0,0,It,Pt,Dt.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,wt,It,Pt,Dt.image[ct])}}}T(E,Ft)&&b(r.TEXTURE_CUBE_MAP),_t.__version=pt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function lt(D,E,K,mt,pt,_t){const Rt=s.convert(K.format,K.colorSpace),gt=s.convert(K.type),Et=I(K.internalFormat,Rt,gt,K.colorSpace);if(!n.get(E).__hasExternalTextures){const qt=Math.max(1,E.width>>_t),xt=Math.max(1,E.height>>_t);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?e.texImage3D(pt,_t,Et,qt,xt,E.depth,0,Rt,gt,null):e.texImage2D(pt,_t,Et,qt,xt,0,Rt,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,pt,n.get(K).__webglTexture,0,L(E)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,pt,n.get(K).__webglTexture,_t),e.bindFramebuffer(r.FRAMEBUFFER,null)}function P(D,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer&&!E.stencilBuffer){let mt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||dt(E)){const pt=E.depthTexture;pt&&pt.isDepthTexture&&(pt.type===$n?mt=r.DEPTH_COMPONENT32F:pt.type===Kn&&(mt=r.DEPTH_COMPONENT24));const _t=L(E);dt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,mt,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,mt,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,D)}else if(E.depthBuffer&&E.stencilBuffer){const mt=L(E);K&&dt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,r.DEPTH24_STENCIL8,E.width,E.height):dt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,D)}else{const mt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pt=0;pt<mt.length;pt++){const _t=mt[pt],Rt=s.convert(_t.format,_t.colorSpace),gt=s.convert(_t.type),Et=I(_t.internalFormat,Rt,gt,_t.colorSpace),Lt=L(E);K&&dt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,Et,E.width,E.height):dt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,Et,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Et,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st(E.depthTexture,0);const mt=n.get(E.depthTexture).__webglTexture,pt=L(E);if(E.depthTexture.format===wi)dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(E.depthTexture.format===Sr)dt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function F(D){const E=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");nt(E.__webglFramebuffer,D)}else if(K){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]=r.createRenderbuffer(),P(E.__webglDepthbuffer[mt],D,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),P(E.__webglDepthbuffer,D,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function X(D,E,K){const mt=n.get(D);E!==void 0&&lt(mt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&F(D)}function Z(D){const E=D.texture,K=n.get(D),mt=n.get(E);D.addEventListener("dispose",W),D.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=E.version,o.memory.textures++);const pt=D.isWebGLCubeRenderTarget===!0,_t=D.isWebGLMultipleRenderTargets===!0,Rt=v(D)||a;if(pt){K.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[gt]=[];for(let Et=0;Et<E.mipmaps.length;Et++)K.__webglFramebuffer[gt][Et]=r.createFramebuffer()}else K.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)K.__webglFramebuffer[gt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(_t)if(i.drawBuffers){const gt=D.texture;for(let Et=0,Lt=gt.length;Et<Lt;Et++){const qt=n.get(gt[Et]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&dt(D)===!1){const gt=_t?E:[E];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Et=0;Et<gt.length;Et++){const Lt=gt[Et];K.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Et]);const qt=s.convert(Lt.format,Lt.colorSpace),xt=s.convert(Lt.type),jt=I(Lt.internalFormat,qt,xt,Lt.colorSpace,D.isXRRenderTarget===!0),Ft=L(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,jt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,K.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),P(K.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){e.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),w(r.TEXTURE_CUBE_MAP,E,Rt);for(let gt=0;gt<6;gt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)lt(K.__webglFramebuffer[gt][Et],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else lt(K.__webglFramebuffer[gt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);T(E,Rt)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){const gt=D.texture;for(let Et=0,Lt=gt.length;Et<Lt;Et++){const qt=gt[Et],xt=n.get(qt);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),w(r.TEXTURE_2D,qt,Rt),lt(K.__webglFramebuffer,D,qt,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),T(qt,Rt)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?gt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,mt.__webglTexture),w(gt,E,Rt),a&&E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)lt(K.__webglFramebuffer[Et],D,E,r.COLOR_ATTACHMENT0,gt,Et);else lt(K.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,gt,0);T(E,Rt)&&b(gt),e.unbindTexture()}D.depthBuffer&&F(D)}function ht(D){const E=v(D)||a,K=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let mt=0,pt=K.length;mt<pt;mt++){const _t=K[mt];if(T(_t,E)){const Rt=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,gt=n.get(_t).__webglTexture;e.bindTexture(Rt,gt),b(Rt),e.unbindTexture()}}}function O(D){if(a&&D.samples>0&&dt(D)===!1){const E=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],K=D.width,mt=D.height;let pt=r.COLOR_BUFFER_BIT;const _t=[],Rt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(D),Et=D.isWebGLMultipleRenderTargets===!0;if(Et)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){_t.push(r.COLOR_ATTACHMENT0+Lt),D.depthBuffer&&_t.push(Rt);const qt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(qt===!1&&(D.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),Et&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]),qt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Rt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Rt])),Et){const xt=n.get(E[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,K,mt,0,0,K,mt,pt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]);const qt=n.get(E[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function L(D){return Math.min(h,D.samples)}function dt(D){const E=n.get(D);return a&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(D){const E=o.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function Vt(D,E){const K=D.colorSpace,mt=D.format,pt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Da||K!==Gn&&K!==ln&&(Jt.getTransfer(K)===te?a===!1?t.has("EXT_sRGB")===!0&&mt===vn?(D.format=Da,D.minFilter=an,D.generateMipmaps=!1):E=th.sRGBToLinear(E):(mt!==vn||pt!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=st,this.setTexture2DArray=z,this.setTexture3D=tt,this.setTextureCube=Mt,this.rebindTextures=X,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=dt}function N0(r,t,e){const n=e.isWebGL2;function i(s,o=ln){let a;const l=Jt.getTransfer(o);if(s===ri)return r.UNSIGNED_BYTE;if(s===Yu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gd)return r.BYTE;if(s===xd)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===qu)return r.INT;if(s===Kn)return r.UNSIGNED_INT;if(s===$n)return r.FLOAT;if(s===Qr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vd)return r.ALPHA;if(s===vn)return r.RGBA;if(s===yd)return r.LUMINANCE;if(s===Md)return r.LUMINANCE_ALPHA;if(s===wi)return r.DEPTH_COMPONENT;if(s===Sr)return r.DEPTH_STENCIL;if(s===Da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sd)return r.RED;if(s===ju)return r.RED_INTEGER;if(s===Ed)return r.RG;if(s===Ju)return r.RG_INTEGER;if(s===Ku)return r.RGBA_INTEGER;if(s===Fo||s===Bo||s===zo||s===ko)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ql||s===tc||s===ec||s===nc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ic||s===rc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ic)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===hc||s===fc||s===dc||s===pc||s===mc||s===_c||s===gc||s===xc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ac)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_c)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xc)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Go||s===vc||s===yc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Go)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bd||s===Mc||s===Sc||s===Ec)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Go)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class O0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ze extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class B0 extends Ge{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:wi,u!==wi&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=Kn),n===void 0&&u===Sr&&(n=Ai),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class z0 extends Pr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=e.getContextAttributes();let d=null,p=null;const M=[],x=[],v=new _n;v.layers.enable(1),v.viewport=new Ee;const S=new _n;S.layers.enable(2),S.viewport=new Ee;const T=[v,S],b=new O0;b.layers.enable(1),b.layers.enable(2);let I=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let tt=M[z];return tt===void 0&&(tt=new fa,M[z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(z){let tt=M[z];return tt===void 0&&(tt=new fa,M[z]=tt),tt.getGripSpace()},this.getHand=function(z){let tt=M[z];return tt===void 0&&(tt=new fa,M[z]=tt),tt.getHandSpace()};function A(z){const tt=x.indexOf(z.inputSource);if(tt===-1)return;const Mt=M[tt];Mt!==void 0&&(Mt.update(z.inputSource,z.frame,c||o),Mt.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",W);for(let z=0;z<M.length;z++){const tt=x[z];tt!==null&&(x[z]=null,M[z].disconnect(tt))}I=null,y=null,t.setRenderTarget(d),m=null,f=null,h=null,i=null,p=null,st.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",q),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),p=new Ui(m.framebufferWidth,m.framebufferHeight,{format:vn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,Mt=null,B=null;_.depth&&(B=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?Sr:wi,Mt=_.stencil?Ai:Kn);const U={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(U),i.updateRenderState({layers:[f]}),p=new Ui(f.textureWidth,f.textureHeight,{format:vn,type:ri,depthTexture:new B0(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const C=t.properties.get(p);C.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(z){for(let tt=0;tt<z.removed.length;tt++){const Mt=z.removed[tt],B=x.indexOf(Mt);B>=0&&(x[B]=null,M[B].disconnect(Mt))}for(let tt=0;tt<z.added.length;tt++){const Mt=z.added[tt];let B=x.indexOf(Mt);if(B===-1){for(let C=0;C<M.length;C++)if(C>=x.length){x.push(Mt),B=C;break}else if(x[C]===null){x[C]=Mt,B=C;break}if(B===-1)break}const U=M[B];U&&U.connect(Mt)}}const et=new G,N=new G;function Y(z,tt,Mt){et.setFromMatrixPosition(tt.matrixWorld),N.setFromMatrixPosition(Mt.matrixWorld);const B=et.distanceTo(N),U=tt.projectionMatrix.elements,C=Mt.projectionMatrix.elements,w=U[14]/(U[10]-1),Q=U[14]/(U[10]+1),ut=(U[9]+1)/U[5],$=(U[9]-1)/U[5],lt=(U[8]-1)/U[0],P=(C[8]+1)/C[0],nt=w*lt,F=w*P,X=B/(-lt+P),Z=X*-lt;tt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Z),z.translateZ(X),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ht=w+X,O=Q+X,L=nt-Z,dt=F+(B-Z),Tt=ut*Q/O*ht,Vt=$*Q/O*ht;z.projectionMatrix.makePerspective(L,dt,Tt,Vt,ht,O),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function J(z,tt){tt===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(tt.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;b.near=S.near=v.near=z.near,b.far=S.far=v.far=z.far,(I!==b.near||y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,y=b.far);const tt=z.parent,Mt=b.cameras;J(b,tt);for(let B=0;B<Mt.length;B++)J(Mt[B],tt);Mt.length===2?Y(b,v,S):b.projectionMatrix.copy(v.projectionMatrix),H(z,b,tt)};function H(z,tt,Mt){Mt===null?z.matrix.copy(tt.matrixWorld):(z.matrix.copy(Mt.matrixWorld),z.matrix.invert(),z.matrix.multiply(tt.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ua*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let V=null;function at(z,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const Mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let B=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,B=!0);for(let U=0;U<Mt.length;U++){const C=Mt[U];let w=null;if(m!==null)w=m.getViewport(C);else{const ut=h.getViewSubImage(f,C);w=ut.viewport,U===0&&(t.setRenderTargetTextures(p,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(p))}let Q=T[U];Q===void 0&&(Q=new _n,Q.layers.enable(U),Q.viewport=new Ee,T[U]=Q),Q.matrix.fromArray(C.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(C.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(w.x,w.y,w.width,w.height),U===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),B===!0&&b.cameras.push(Q)}}for(let Mt=0;Mt<M.length;Mt++){const B=x[Mt],U=M[Mt];B!==null&&U!==void 0&&U.update(B,tt,c||o)}V&&V(z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const st=new uh;st.setAnimationLoop(at),this.setAnimationLoop=function(z){V=z},this.dispose=function(){}}}function k0(r,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,oh(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,M,x):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===ke&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===ke&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const M=t.get(p).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,M,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=x*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const M=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G0(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",d));const S=x.program;n.updateUBOMapping(M,S);const T=t.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const v=r.createBuffer(),S=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,S=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,b=v.length;T<b;T++){const I=v[T];if(m(I,T,S)===!0){const y=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let W=0;W<A.length;W++){const et=A[W],N=_(et);typeof et=="number"?(I.__data[0]=et,r.bufferSubData(r.UNIFORM_BUFFER,y+q,I.__data)):et.isMatrix3?(I.__data[0]=et.elements[0],I.__data[1]=et.elements[1],I.__data[2]=et.elements[2],I.__data[3]=et.elements[0],I.__data[4]=et.elements[3],I.__data[5]=et.elements[4],I.__data[6]=et.elements[5],I.__data[7]=et.elements[0],I.__data[8]=et.elements[6],I.__data[9]=et.elements[7],I.__data[10]=et.elements[8],I.__data[11]=et.elements[0]):(et.toArray(I.__data,q),q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,y,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,x,v){const S=M.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const T=Array.isArray(S)?S:[S],b=[];for(let I=0;I<T.length;I++)b.push(T[I].clone());v[x]=b}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const T=Array.isArray(v[x])?v[x]:[v[x]],b=Array.isArray(S)?S:[S];for(let I=0;I<T.length;I++){const y=T[I];if(y.equals(b[I])===!1)return y.copy(b[I]),!0}}return!1}function g(M){const x=M.uniforms;let v=0;const S=16;let T=0;for(let b=0,I=x.length;b<I;b++){const y=x[b],A={boundary:0,storage:0},q=Array.isArray(y.value)?y.value:[y.value];for(let W=0,et=q.length;W<et;W++){const N=q[W],Y=_(N);A.boundary+=Y.boundary,A.storage+=Y.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=v,b>0){T=v%S;const W=S-T;T!==0&&W-A.boundary<0&&(v+=S-T,y.__offset=v)}v+=A.storage}return T=v%S,T>0&&(v+=S-T),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function d(M){const x=M.target;x.removeEventListener("dispose",d);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class _h{constructor(t={}){const{canvas:e=zd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let v=!1,S=0,T=0,b=null,I=-1,y=null;const A=new Ee,q=new Ee;let W=null;const et=new Yt(0);let N=0,Y=e.width,J=e.height,H=1,V=null,at=null;const st=new Ee(0,0,Y,J),z=new Ee(0,0,Y,J);let tt=!1;const Mt=new ch;let B=!1,U=!1,C=null;const w=new pe,Q=new ft,ut=new G,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return b===null?H:1}let P=n;function nt(R,j){for(let it=0;it<R.length;it++){const rt=R[it],ot=e.getContext(rt,j);if(ot!==null)return ot}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),P=nt(j,R),P===null)throw nt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let F,X,Z,ht,O,L,dt,Tt,Vt,D,E,K,mt,pt,_t,Rt,gt,Et,Lt,qt,xt,jt,Ft,It;function Pt(){F=new K_(P),X=new X_(P,F,t),F.init(X),jt=new N0(P,F,X),Z=new U0(P,F,X),ht=new tg(P),O=new v0,L=new I0(P,F,Z,O,X,jt,ht),dt=new Y_(x),Tt=new J_(x),Vt=new up(P,X),Ft=new V_(P,F,Vt,X),D=new $_(P,Vt,ht,Ft),E=new rg(P,D,Vt,ht),Lt=new ig(P,X,L),Rt=new q_(O),K=new x0(x,dt,Tt,F,X,Ft,Rt),mt=new k0(x,O),pt=new M0,_t=new w0(F,X),Et=new H_(x,dt,Tt,Z,E,f,l),gt=new D0(x,E,X),It=new G0(P,ht,X,Z),qt=new W_(P,F,ht,X),xt=new Q_(P,F,ht,X),ht.programs=K.programs,x.capabilities=X,x.extensions=F,x.properties=O,x.renderLists=pt,x.shadowMap=gt,x.state=Z,x.info=ht}Pt();const wt=new z0(x,P);this.xr=wt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=F.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=F.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(Y,J,!1))},this.getSize=function(R){return R.set(Y,J)},this.setSize=function(R,j,it=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,J=j,e.width=Math.floor(R*H),e.height=Math.floor(j*H),it===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(Y*H,J*H).floor()},this.setDrawingBufferSize=function(R,j,it){Y=R,J=j,H=it,e.width=Math.floor(R*it),e.height=Math.floor(j*it),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,j,it,rt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,j,it,rt),Z.viewport(A.copy(st).multiplyScalar(H).floor())},this.getScissor=function(R){return R.copy(z)},this.setScissor=function(R,j,it,rt){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,j,it,rt),Z.scissor(q.copy(z).multiplyScalar(H).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){Z.setScissorTest(tt=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(R=!0,j=!0,it=!0){let rt=0;if(R){let ot=!1;if(b!==null){const At=b.texture.format;ot=At===Ku||At===Ju||At===ju}if(ot){const At=b.texture.type,Ct=At===ri||At===Kn||At===al||At===Ai||At===Yu||At===Zu,Ut=Et.getClearColor(),Nt=Et.getClearAlpha(),Gt=Ut.r,Bt=Ut.g,zt=Ut.b;Ct?(m[0]=Gt,m[1]=Bt,m[2]=zt,m[3]=Nt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Gt,g[1]=Bt,g[2]=zt,g[3]=Nt,P.clearBufferiv(P.COLOR,0,g))}else rt|=P.COLOR_BUFFER_BIT}j&&(rt|=P.DEPTH_BUFFER_BIT),it&&(rt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),pt.dispose(),_t.dispose(),O.dispose(),dt.dispose(),Tt.dispose(),E.dispose(),Ft.dispose(),It.dispose(),K.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",nn),wt.removeEventListener("sessionend",Qt),C&&(C.dispose(),C=null),Le.stop()};function Xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=ht.autoReset,j=gt.enabled,it=gt.autoUpdate,rt=gt.needsUpdate,ot=gt.type;Pt(),ht.autoReset=R,gt.enabled=j,gt.autoUpdate=it,gt.needsUpdate=rt,gt.type=ot}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const j=R.target;j.removeEventListener("dispose",vt),ct(j)}function ct(R){yt(R),O.remove(R)}function yt(R){const j=O.get(R).programs;j!==void 0&&(j.forEach(function(it){K.releaseProgram(it)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,it,rt,ot,At){j===null&&(j=$);const Ct=ot.isMesh&&ot.matrixWorld.determinant()<0,Ut=Uf(R,j,it,rt,ot);Z.setMaterial(rt,Ct);let Nt=it.index,Gt=1;if(rt.wireframe===!0){if(Nt=D.getWireframeAttribute(it),Nt===void 0)return;Gt=2}const Bt=it.drawRange,zt=it.attributes.position;let le=Bt.start*Gt,Ye=(Bt.start+Bt.count)*Gt;At!==null&&(le=Math.max(le,At.start*Gt),Ye=Math.min(Ye,(At.start+At.count)*Gt)),Nt!==null?(le=Math.max(le,0),Ye=Math.min(Ye,Nt.count)):zt!=null&&(le=Math.max(le,0),Ye=Math.min(Ye,zt.count));const xe=Ye-le;if(xe<0||xe===1/0)return;Ft.setup(ot,rt,Ut,it,Nt);let Pn,se=qt;if(Nt!==null&&(Pn=Vt.get(Nt),se=xt,se.setIndex(Pn)),ot.isMesh)rt.wireframe===!0?(Z.setLineWidth(rt.wireframeLinewidth*lt()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(ot.isLine){let Ht=rt.linewidth;Ht===void 0&&(Ht=1),Z.setLineWidth(Ht*lt()),ot.isLineSegments?se.setMode(P.LINES):ot.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else ot.isPoints?se.setMode(P.POINTS):ot.isSprite&&se.setMode(P.TRIANGLES);if(ot.isInstancedMesh)se.renderInstances(le,xe,ot.count);else if(it.isInstancedBufferGeometry){const Ht=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Do=Math.min(it.instanceCount,Ht);se.renderInstances(le,xe,Do)}else se.render(le,xe)};function Dt(R,j,it){R.transparent===!0&&R.side===gn&&R.forceSinglePass===!1?(R.side=ke,R.needsUpdate=!0,Ss(R,j,it),R.side=ai,R.needsUpdate=!0,Ss(R,j,it),R.side=gn):Ss(R,j,it)}this.compile=function(R,j,it=null){it===null&&(it=R),d=_t.get(it),d.init(),M.push(d),it.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(d.pushLight(ot),ot.castShadow&&d.pushShadow(ot))}),R!==it&&R.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(d.pushLight(ot),ot.castShadow&&d.pushShadow(ot))}),d.setupLights(x._useLegacyLights);const rt=new Set;return R.traverse(function(ot){const At=ot.material;if(At)if(Array.isArray(At))for(let Ct=0;Ct<At.length;Ct++){const Ut=At[Ct];Dt(Ut,it,ot),rt.add(Ut)}else Dt(At,it,ot),rt.add(At)}),M.pop(),d=null,rt},this.compileAsync=function(R,j,it=null){const rt=this.compile(R,j,it);return new Promise(ot=>{function At(){if(rt.forEach(function(Ct){O.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){ot(R);return}setTimeout(At,10)}F.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Zt=null;function ue(R){Zt&&Zt(R)}function nn(){Le.stop()}function Qt(){Le.start()}const Le=new uh;Le.setAnimationLoop(ue),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(R){Zt=R,wt.setAnimationLoop(R),R===null?Le.stop():Le.start()},wt.addEventListener("sessionstart",nn),wt.addEventListener("sessionend",Qt),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(j),j=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,j,b),d=_t.get(R,M.length),d.init(),M.push(d),w.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(w),U=this.localClippingEnabled,B=Rt.init(this.clippingPlanes,U),_=pt.get(R,p.length),_.init(),p.push(_),Mn(R,j,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,at),this.info.render.frame++,B===!0&&Rt.beginShadows();const it=d.state.shadowsArray;if(gt.render(it,R,j),B===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(_,R),d.setupLights(x._useLegacyLights),j.isArrayCamera){const rt=j.cameras;for(let ot=0,At=rt.length;ot<At;ot++){const Ct=rt[ot];kl(_,R,Ct,Ct.viewport)}}else kl(_,R,j);b!==null&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,j),Ft.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Mn(R,j,it,rt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Mt.intersectsSprite(R)){rt&&ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(w);const Ct=E.update(R),Ut=R.material;Ut.visible&&_.push(R,Ct,Ut,it,ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Mt.intersectsObject(R))){const Ct=E.update(R),Ut=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ut.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ut.copy(Ct.boundingSphere.center)),ut.applyMatrix4(R.matrixWorld).applyMatrix4(w)),Array.isArray(Ut)){const Nt=Ct.groups;for(let Gt=0,Bt=Nt.length;Gt<Bt;Gt++){const zt=Nt[Gt],le=Ut[zt.materialIndex];le&&le.visible&&_.push(R,Ct,le,it,ut.z,zt)}}else Ut.visible&&_.push(R,Ct,Ut,it,ut.z,null)}}const At=R.children;for(let Ct=0,Ut=At.length;Ct<Ut;Ct++)Mn(At[Ct],j,it,rt)}function kl(R,j,it,rt){const ot=R.opaque,At=R.transmissive,Ct=R.transparent;d.setupLightsView(it),B===!0&&Rt.setGlobalState(x.clippingPlanes,it),At.length>0&&Df(ot,At,j,it),rt&&Z.viewport(A.copy(rt)),ot.length>0&&Ms(ot,j,it),At.length>0&&Ms(At,j,it),Ct.length>0&&Ms(Ct,j,it),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Df(R,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;const At=X.isWebGL2;C===null&&(C=new Ui(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Qr:ri,minFilter:$r,samples:At?4:0})),x.getDrawingBufferSize(Q),At?C.setSize(Q.x,Q.y):C.setSize(Ia(Q.x),Ia(Q.y));const Ct=x.getRenderTarget();x.setRenderTarget(C),x.getClearColor(et),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=ii,Ms(R,it,rt),L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C);let Nt=!1;for(let Gt=0,Bt=j.length;Gt<Bt;Gt++){const zt=j[Gt],le=zt.object,Ye=zt.geometry,xe=zt.material,Pn=zt.group;if(xe.side===gn&&le.layers.test(rt.layers)){const se=xe.side;xe.side=ke,xe.needsUpdate=!0,Gl(le,it,rt,Ye,xe,Pn),xe.side=se,xe.needsUpdate=!0,Nt=!0}}Nt===!0&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),x.setRenderTarget(Ct),x.setClearColor(et,N),x.toneMapping=Ut}function Ms(R,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let ot=0,At=R.length;ot<At;ot++){const Ct=R[ot],Ut=Ct.object,Nt=Ct.geometry,Gt=rt===null?Ct.material:rt,Bt=Ct.group;Ut.layers.test(it.layers)&&Gl(Ut,j,it,Nt,Gt,Bt)}}function Gl(R,j,it,rt,ot,At){R.onBeforeRender(x,j,it,rt,ot,At),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ot.onBeforeRender(x,j,it,rt,R,At),ot.transparent===!0&&ot.side===gn&&ot.forceSinglePass===!1?(ot.side=ke,ot.needsUpdate=!0,x.renderBufferDirect(it,j,rt,ot,R,At),ot.side=ai,ot.needsUpdate=!0,x.renderBufferDirect(it,j,rt,ot,R,At),ot.side=gn):x.renderBufferDirect(it,j,rt,ot,R,At),R.onAfterRender(x,j,it,rt,ot,At)}function Ss(R,j,it){j.isScene!==!0&&(j=$);const rt=O.get(R),ot=d.state.lights,At=d.state.shadowsArray,Ct=ot.state.version,Ut=K.getParameters(R,ot.state,At,j,it),Nt=K.getProgramCacheKey(Ut);let Gt=rt.programs;rt.environment=R.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(R.isMeshStandardMaterial?Tt:dt).get(R.envMap||rt.environment),Gt===void 0&&(R.addEventListener("dispose",vt),Gt=new Map,rt.programs=Gt);let Bt=Gt.get(Nt);if(Bt!==void 0){if(rt.currentProgram===Bt&&rt.lightsStateVersion===Ct)return Vl(R,Ut),Bt}else Ut.uniforms=K.getUniforms(R),R.onBuild(it,Ut,x),R.onBeforeCompile(Ut,x),Bt=K.acquireProgram(Ut,Nt),Gt.set(Nt,Bt),rt.uniforms=Ut.uniforms;const zt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=Rt.uniform),Vl(R,Ut),rt.needsLights=Nf(R),rt.lightsStateVersion=Ct,rt.needsLights&&(zt.ambientLightColor.value=ot.state.ambient,zt.lightProbe.value=ot.state.probe,zt.directionalLights.value=ot.state.directional,zt.directionalLightShadows.value=ot.state.directionalShadow,zt.spotLights.value=ot.state.spot,zt.spotLightShadows.value=ot.state.spotShadow,zt.rectAreaLights.value=ot.state.rectArea,zt.ltc_1.value=ot.state.rectAreaLTC1,zt.ltc_2.value=ot.state.rectAreaLTC2,zt.pointLights.value=ot.state.point,zt.pointLightShadows.value=ot.state.pointShadow,zt.hemisphereLights.value=ot.state.hemi,zt.directionalShadowMap.value=ot.state.directionalShadowMap,zt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,zt.spotShadowMap.value=ot.state.spotShadowMap,zt.spotLightMatrix.value=ot.state.spotLightMatrix,zt.spotLightMap.value=ot.state.spotLightMap,zt.pointShadowMap.value=ot.state.pointShadowMap,zt.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.currentProgram=Bt,rt.uniformsList=null,Bt}function Hl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=$s.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Vl(R,j){const it=O.get(R);it.outputColorSpace=j.outputColorSpace,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function Uf(R,j,it,rt,ot){j.isScene!==!0&&(j=$),L.resetTextureUnits();const At=j.fog,Ct=rt.isMeshStandardMaterial?j.environment:null,Ut=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gn,Nt=(rt.isMeshStandardMaterial?Tt:dt).get(rt.envMap||Ct),Gt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Bt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),zt=!!it.morphAttributes.position,le=!!it.morphAttributes.normal,Ye=!!it.morphAttributes.color;let xe=ii;rt.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xe=x.toneMapping);const Pn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=Pn!==void 0?Pn.length:0,Ht=O.get(rt),Do=d.state.lights;if(B===!0&&(U===!0||R!==y)){const Ze=R===y&&rt.id===I;Rt.setState(rt,R,Ze)}let he=!1;rt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Do.state.version||Ht.outputColorSpace!==Ut||ot.isInstancedMesh&&Ht.instancing===!1||!ot.isInstancedMesh&&Ht.instancing===!0||ot.isSkinnedMesh&&Ht.skinning===!1||!ot.isSkinnedMesh&&Ht.skinning===!0||ot.isInstancedMesh&&Ht.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ht.instancingColor===!1&&ot.instanceColor!==null||Ht.envMap!==Nt||rt.fog===!0&&Ht.fog!==At||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Rt.numPlanes||Ht.numIntersection!==Rt.numIntersection)||Ht.vertexAlphas!==Gt||Ht.vertexTangents!==Bt||Ht.morphTargets!==zt||Ht.morphNormals!==le||Ht.morphColors!==Ye||Ht.toneMapping!==xe||X.isWebGL2===!0&&Ht.morphTargetsCount!==se)&&(he=!0):(he=!0,Ht.__version=rt.version);let fi=Ht.currentProgram;he===!0&&(fi=Ss(rt,j,ot));let Wl=!1,Or=!1,Uo=!1;const De=fi.getUniforms(),di=Ht.uniforms;if(Z.useProgram(fi.program)&&(Wl=!0,Or=!0,Uo=!0),rt.id!==I&&(I=rt.id,Or=!0),Wl||y!==R){De.setValue(P,"projectionMatrix",R.projectionMatrix),De.setValue(P,"viewMatrix",R.matrixWorldInverse);const Ze=De.map.cameraPosition;Ze!==void 0&&Ze.setValue(P,ut.setFromMatrixPosition(R.matrixWorld)),X.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&De.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Or=!0,Uo=!0)}if(ot.isSkinnedMesh){De.setOptional(P,ot,"bindMatrix"),De.setOptional(P,ot,"bindMatrixInverse");const Ze=ot.skeleton;Ze&&(X.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),De.setValue(P,"boneTexture",Ze.boneTexture,L),De.setValue(P,"boneTextureSize",Ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Io=it.morphAttributes;if((Io.position!==void 0||Io.normal!==void 0||Io.color!==void 0&&X.isWebGL2===!0)&&Lt.update(ot,it,fi),(Or||Ht.receiveShadow!==ot.receiveShadow)&&(Ht.receiveShadow=ot.receiveShadow,De.setValue(P,"receiveShadow",ot.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(di.envMap.value=Nt,di.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Or&&(De.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&If(di,Uo),At&&rt.fog===!0&&mt.refreshFogUniforms(di,At),mt.refreshMaterialUniforms(di,rt,H,J,C),$s.upload(P,Hl(Ht),di,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&($s.upload(P,Hl(Ht),di,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&De.setValue(P,"center",ot.center),De.setValue(P,"modelViewMatrix",ot.modelViewMatrix),De.setValue(P,"normalMatrix",ot.normalMatrix),De.setValue(P,"modelMatrix",ot.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ze=rt.uniformsGroups;for(let No=0,Of=Ze.length;No<Of;No++)if(X.isWebGL2){const Xl=Ze[No];It.update(Xl,fi),It.bind(Xl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function If(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Nf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,j,it){O.get(R.texture).__webglTexture=j,O.get(R.depthTexture).__webglTexture=it;const rt=O.get(R);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,j){const it=O.get(R);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,it=0){b=R,S=j,T=it;let rt=!0,ot=null,At=!1,Ct=!1;if(R){const Nt=O.get(R);Nt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(P.FRAMEBUFFER,null),rt=!1):Nt.__webglFramebuffer===void 0?L.setupRenderTarget(R):Nt.__hasExternalTextures&&L.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ct=!0);const Bt=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Bt[j])?ot=Bt[j][it]:ot=Bt[j],At=!0):X.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?ot=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Bt)?ot=Bt[it]:ot=Bt,A.copy(R.viewport),q.copy(R.scissor),W=R.scissorTest}else A.copy(st).multiplyScalar(H).floor(),q.copy(z).multiplyScalar(H).floor(),W=tt;if(Z.bindFramebuffer(P.FRAMEBUFFER,ot)&&X.drawBuffers&&rt&&Z.drawBuffers(R,ot),Z.viewport(A),Z.scissor(q),Z.setScissorTest(W),At){const Nt=O.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,it)}else if(Ct){const Nt=O.get(R.texture),Gt=j||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,it||0,Gt)}I=-1},this.readRenderTargetPixels=function(R,j,it,rt,ot,At,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){Z.bindFramebuffer(P.FRAMEBUFFER,Ut);try{const Nt=R.texture,Gt=Nt.format,Bt=Nt.type;if(Gt!==vn&&jt.convert(Gt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===Qr&&(F.has("EXT_color_buffer_half_float")||X.isWebGL2&&F.has("EXT_color_buffer_float"));if(Bt!==ri&&jt.convert(Bt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===$n&&(X.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-rt&&it>=0&&it<=R.height-ot&&P.readPixels(j,it,rt,ot,jt.convert(Gt),jt.convert(Bt),At)}finally{const Nt=b!==null?O.get(b).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(R,j,it=0){const rt=Math.pow(2,-it),ot=Math.floor(j.image.width*rt),At=Math.floor(j.image.height*rt);L.setTexture2D(j,0),P.copyTexSubImage2D(P.TEXTURE_2D,it,0,0,R.x,R.y,ot,At),Z.unbindTexture()},this.copyTextureToTexture=function(R,j,it,rt=0){const ot=j.image.width,At=j.image.height,Ct=jt.convert(it.format),Ut=jt.convert(it.type);L.setTexture2D(it,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,it.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,it.unpackAlignment),j.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,rt,R.x,R.y,ot,At,Ct,Ut,j.image.data):j.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,rt,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Ct,j.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,rt,R.x,R.y,Ct,Ut,j.image),rt===0&&it.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,j,it,rt,ot=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=R.max.x-R.min.x+1,Ct=R.max.y-R.min.y+1,Ut=R.max.z-R.min.z+1,Nt=jt.convert(rt.format),Gt=jt.convert(rt.type);let Bt;if(rt.isData3DTexture)L.setTexture3D(rt,0),Bt=P.TEXTURE_3D;else if(rt.isDataArrayTexture)L.setTexture2DArray(rt,0),Bt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,rt.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,rt.unpackAlignment);const zt=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ye=P.getParameter(P.UNPACK_SKIP_PIXELS),xe=P.getParameter(P.UNPACK_SKIP_ROWS),Pn=P.getParameter(P.UNPACK_SKIP_IMAGES),se=it.isCompressedTexture?it.mipmaps[0]:it.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),it.isDataTexture||it.isData3DTexture?P.texSubImage3D(Bt,ot,j.x,j.y,j.z,At,Ct,Ut,Nt,Gt,se.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Bt,ot,j.x,j.y,j.z,At,Ct,Ut,Nt,se.data)):P.texSubImage3D(Bt,ot,j.x,j.y,j.z,At,Ct,Ut,Nt,Gt,se),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pn),ot===0&&rt.generateMipmaps&&P.generateMipmap(Bt),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){S=0,T=0,b=null,Z.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ll?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===xo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?Ri:$u}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?ye:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class H0 extends _h{}H0.prototype.isWebGL1Renderer=!0;class V0 extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class gh extends Dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new G,du=new G,pu=new pe,da=new vo,Xs=new ds;class W0 extends Oe{constructor(t=new Pe,e=new gh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)fu.fromBufferAttribute(e,i-1),du.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fu.distanceTo(du);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=s,t.ray.intersectsSphere(Xs)===!1)return;pu.copy(i).invert(),da.copy(t.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,u=new G,h=new G,f=new G,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=p,v=M-1;x<v;x+=m){const S=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,T),da.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(d.count,o.start+o.count);for(let x=p,v=M-1;x<v;x+=m){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),da.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mu=new G,_u=new G;class X0 extends W0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)mu.fromBufferAttribute(e,i),_u.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mu.distanceTo(_u);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xh extends Dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gu=new pe,Oa=new vo,qs=new ds,Ys=new G;class hl extends Oe{constructor(t=new Pe,e=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,t.ray.intersectsSphere(qs)===!1)return;gu.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const d=c.getX(g);Ys.fromBufferAttribute(h,d),xu(Ys,d,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ys.fromBufferAttribute(h,g),xu(Ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xu(r,t,e,n,i,s,o){const a=Oa.distanceSqToPoint(r);if(a<e){const l=new G;Oa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ft:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new G,i=[],s=[],o=[],a=new G,l=new pe;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(Ae(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl extends Cn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ft,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class q0 extends fl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Zs=new G,pa=new dl,ma=new dl,_a=new dl;class Y0 extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Zs.subVectors(i[0],i[1]).add(i[0]),c=Zs);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Zs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),pa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,d),ma.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,d),_a.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,d)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ma.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),_a.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(pa.calc(l),ma.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vu(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Z0(r,t){const e=1-r;return e*e*t}function j0(r,t){return 2*(1-r)*r*t}function J0(r,t){return r*r*t}function Yr(r,t,e,n){return Z0(r,t)+j0(r,e)+J0(r,n)}function K0(r,t){const e=1-r;return e*e*e*t}function $0(r,t){const e=1-r;return 3*e*e*r*t}function Q0(r,t){return 3*(1-r)*r*r*t}function tx(r,t){return r*r*r*t}function Zr(r,t,e,n,i){return K0(r,t)+$0(r,e)+Q0(r,n)+tx(r,i)}class vh extends Cn{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zr(t,i.x,s.x,o.x,a.x),Zr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ex extends Cn{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zr(t,i.x,s.x,o.x,a.x),Zr(t,i.y,s.y,o.y,a.y),Zr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yh extends Cn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nx extends Cn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends Cn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Yr(t,i.x,s.x,o.x),Yr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ix extends Cn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Yr(t,i.x,s.x,o.x),Yr(t,i.y,s.y,o.y),Yr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vu(a,l.x,c.x,u.x,h.x),vu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:Y0,CubicBezierCurve:vh,CubicBezierCurve3:ex,EllipseCurve:fl,LineCurve:yh,LineCurve3:nx,QuadraticBezierCurve:Mh,QuadraticBezierCurve3:ix,SplineCurve:Sh});class rx extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Fa[i.type]().fromJSON(i))}return this}}class mr extends rx{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new yh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Mh(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new vh(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new fl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _r extends mr{constructor(t){super(t),this.uuid=Lr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new mr().fromJSON(i))}return this}}const sx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Eh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(n&&(s=ux(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return es(s,o,e,a,l,m,0),o}};function Eh(r,t,e,n,i){let s,o;if(i===Mx(r,t,e,n)>0)for(s=t;s<e;s+=n)o=yu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=yu(s,r[s],r[s+1],o);return o&&So(o,o.next)&&(is(o),o=o.next),o}function Ni(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(So(e,e.next)||ie(e.prev,e,e.next)===0)){if(is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function es(r,t,e,n,i,s,o){if(!r)return;!o&&s&&mx(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ax(r,n,i,s):ox(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),is(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=lx(Ni(r),t,e),es(r,t,e,n,i,s,2)):o===2&&cx(r,t,e,n,i,s):es(Ni(r),t,e,n,i,s,1);break}}}function ox(r){const t=r.prev,e=r,n=r.next;if(ie(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&ur(i,a,s,l,o,c,g.x,g.y)&&ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ax(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ie(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,p=Ba(m,g,t,e,n),M=Ba(_,d,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==o&&ur(a,u,l,h,c,f,x.x,x.y)&&ie(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==i&&v!==o&&ur(a,u,l,h,c,f,v.x,v.y)&&ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==o&&ur(a,u,l,h,c,f,x.x,x.y)&&ie(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==i&&v!==o&&ur(a,u,l,h,c,f,v.x,v.y)&&ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!So(i,s)&&Th(i,n,n.next,s)&&ns(i,s)&&ns(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),is(n),is(n.next),n=r=s),n=n.next}while(n!==r);return Ni(n)}function cx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xx(o,a)){let l=bh(o,a);o=Ni(o,o.next),l=Ni(l,l.next),es(o,t,e,n,i,s,0),es(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function ux(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Eh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(gx(c));for(i.sort(hx),s=0;s<i.length;s++)e=fx(i[s],e);return e}function hx(r,t){return r.x-t.x}function fx(r,t){const e=dx(r,t);if(!e)return t;const n=bh(e,r);return Ni(n,n.next),Ni(e,e.next)}function dx(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&ur(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),ns(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&px(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function px(r,t){return ie(r.prev,r,t.prev)<0&&ie(t.next,r,r.next)<0}function mx(r,t,e,n){let i=r;do i.z===0&&(i.z=Ba(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,_x(i)}function _x(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ba(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function gx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ur(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function xx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!vx(r,t)&&(ns(r,t)&&ns(t,r)&&yx(r,t)&&(ie(r.prev,r,t.prev)||ie(r,t.prev,t))||So(r,t)&&ie(r.prev,r,r.next)>0&&ie(t.prev,t,t.next)>0)}function ie(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function So(r,t){return r.x===t.x&&r.y===t.y}function Th(r,t,e,n){const i=Js(ie(r,t,e)),s=Js(ie(r,t,n)),o=Js(ie(e,n,r)),a=Js(ie(e,n,t));return!!(i!==s&&o!==a||i===0&&js(r,e,t)||s===0&&js(r,n,t)||o===0&&js(e,r,n)||a===0&&js(e,t,n))}function js(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Js(r){return r>0?1:r<0?-1:0}function vx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Th(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ns(r,t){return ie(r.prev,r,r.next)<0?ie(r,t,r.next)>=0&&ie(r,r.prev,t)>=0:ie(r,t,r.prev)<0||ie(r,r.next,t)<0}function yx(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function bh(r,t){const e=new za(r.i,r.x,r.y),n=new za(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yu(r,t,e,n){const i=new za(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function is(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function za(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class An{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return An.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Mu(t),Su(n,t);let o=t.length;e.forEach(Mu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Su(n,e[l]);const a=sx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mu(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Su(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class pl extends Pe{constructor(t=new _r([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Sx;let x,v=!1,S,T,b,I;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,S=p.computeFrenetFrames(u,!1),T=new G,b=new G,I=new G),f||(d=0,m=0,g=0,_=0);const y=a.extractPoints(c);let A=y.shape;const q=y.holes;if(!An.isClockWise(A)){A=A.reverse();for(let P=0,nt=q.length;P<nt;P++){const F=q[P];An.isClockWise(F)&&(q[P]=F.reverse())}}const et=An.triangulateShape(A,q),N=A;for(let P=0,nt=q.length;P<nt;P++){const F=q[P];A=A.concat(F)}function Y(P,nt,F){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(nt,F)}const J=A.length,H=et.length;function V(P,nt,F){let X,Z,ht;const O=P.x-nt.x,L=P.y-nt.y,dt=F.x-P.x,Tt=F.y-P.y,Vt=O*O+L*L,D=O*Tt-L*dt;if(Math.abs(D)>Number.EPSILON){const E=Math.sqrt(Vt),K=Math.sqrt(dt*dt+Tt*Tt),mt=nt.x-L/E,pt=nt.y+O/E,_t=F.x-Tt/K,Rt=F.y+dt/K,gt=((_t-mt)*Tt-(Rt-pt)*dt)/(O*Tt-L*dt);X=mt+O*gt-P.x,Z=pt+L*gt-P.y;const Et=X*X+Z*Z;if(Et<=2)return new ft(X,Z);ht=Math.sqrt(Et/2)}else{let E=!1;O>Number.EPSILON?dt>Number.EPSILON&&(E=!0):O<-Number.EPSILON?dt<-Number.EPSILON&&(E=!0):Math.sign(L)===Math.sign(Tt)&&(E=!0),E?(X=-L,Z=O,ht=Math.sqrt(Vt)):(X=O,Z=L,ht=Math.sqrt(Vt/2))}return new ft(X/ht,Z/ht)}const at=[];for(let P=0,nt=N.length,F=nt-1,X=P+1;P<nt;P++,F++,X++)F===nt&&(F=0),X===nt&&(X=0),at[P]=V(N[P],N[F],N[X]);const st=[];let z,tt=at.concat();for(let P=0,nt=q.length;P<nt;P++){const F=q[P];z=[];for(let X=0,Z=F.length,ht=Z-1,O=X+1;X<Z;X++,ht++,O++)ht===Z&&(ht=0),O===Z&&(O=0),z[X]=V(F[X],F[ht],F[O]);st.push(z),tt=tt.concat(z)}for(let P=0;P<d;P++){const nt=P/d,F=m*Math.cos(nt*Math.PI/2),X=g*Math.sin(nt*Math.PI/2)+_;for(let Z=0,ht=N.length;Z<ht;Z++){const O=Y(N[Z],at[Z],X);w(O.x,O.y,-F)}for(let Z=0,ht=q.length;Z<ht;Z++){const O=q[Z];z=st[Z];for(let L=0,dt=O.length;L<dt;L++){const Tt=Y(O[L],z[L],X);w(Tt.x,Tt.y,-F)}}}const Mt=g+_;for(let P=0;P<J;P++){const nt=f?Y(A[P],tt[P],Mt):A[P];v?(b.copy(S.normals[0]).multiplyScalar(nt.x),T.copy(S.binormals[0]).multiplyScalar(nt.y),I.copy(x[0]).add(b).add(T),w(I.x,I.y,I.z)):w(nt.x,nt.y,0)}for(let P=1;P<=u;P++)for(let nt=0;nt<J;nt++){const F=f?Y(A[nt],tt[nt],Mt):A[nt];v?(b.copy(S.normals[P]).multiplyScalar(F.x),T.copy(S.binormals[P]).multiplyScalar(F.y),I.copy(x[P]).add(b).add(T),w(I.x,I.y,I.z)):w(F.x,F.y,h/u*P)}for(let P=d-1;P>=0;P--){const nt=P/d,F=m*Math.cos(nt*Math.PI/2),X=g*Math.sin(nt*Math.PI/2)+_;for(let Z=0,ht=N.length;Z<ht;Z++){const O=Y(N[Z],at[Z],X);w(O.x,O.y,h+F)}for(let Z=0,ht=q.length;Z<ht;Z++){const O=q[Z];z=st[Z];for(let L=0,dt=O.length;L<dt;L++){const Tt=Y(O[L],z[L],X);v?w(Tt.x,Tt.y+x[u-1].y,x[u-1].x+F):w(Tt.x,Tt.y,h+F)}}}B(),U();function B(){const P=i.length/3;if(f){let nt=0,F=J*nt;for(let X=0;X<H;X++){const Z=et[X];Q(Z[2]+F,Z[1]+F,Z[0]+F)}nt=u+d*2,F=J*nt;for(let X=0;X<H;X++){const Z=et[X];Q(Z[0]+F,Z[1]+F,Z[2]+F)}}else{for(let nt=0;nt<H;nt++){const F=et[nt];Q(F[2],F[1],F[0])}for(let nt=0;nt<H;nt++){const F=et[nt];Q(F[0]+J*u,F[1]+J*u,F[2]+J*u)}}n.addGroup(P,i.length/3-P,0)}function U(){const P=i.length/3;let nt=0;C(N,nt),nt+=N.length;for(let F=0,X=q.length;F<X;F++){const Z=q[F];C(Z,nt),nt+=Z.length}n.addGroup(P,i.length/3-P,1)}function C(P,nt){let F=P.length;for(;--F>=0;){const X=F;let Z=F-1;Z<0&&(Z=P.length-1);for(let ht=0,O=u+d*2;ht<O;ht++){const L=J*ht,dt=J*(ht+1),Tt=nt+X+L,Vt=nt+Z+L,D=nt+Z+dt,E=nt+X+dt;ut(Tt,Vt,D,E)}}}function w(P,nt,F){l.push(P),l.push(nt),l.push(F)}function Q(P,nt,F){$(P),$(nt),$(F);const X=i.length/3,Z=M.generateTopUV(n,i,X-3,X-2,X-1);lt(Z[0]),lt(Z[1]),lt(Z[2])}function ut(P,nt,F,X){$(P),$(nt),$(X),$(nt),$(F),$(X);const Z=i.length/3,ht=M.generateSideWallUV(n,i,Z-6,Z-3,Z-2,Z-1);lt(ht[0]),lt(ht[1]),lt(ht[3]),lt(ht[1]),lt(ht[2]),lt(ht[3])}function $(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function lt(P){s.push(P.x),s.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ex(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fa[i.type]().fromJSON(i)),new pl(n,t.options)}}const Sx={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ft(s,o),new ft(a,l),new ft(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[s*3],d=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(f,1-g),new ft(_,1-p)]:[new ft(a,1-l),new ft(u,1-h),new ft(m,1-g),new ft(d,1-p)]}};function Ex(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Eo extends Pe{constructor(t=new _r([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(i,3)),this.setAttribute("normal",new ee(s,3)),this.setAttribute("uv",new ee(o,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let m=f.shape;const g=f.holes;An.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=g.length;d<p;d++){const M=g[d];An.isClockWise(M)===!0&&(g[d]=M.reverse())}const _=An.triangulateShape(m,g);for(let d=0,p=g.length;d<p;d++){const M=g[d];m=m.concat(M)}for(let d=0,p=m.length;d<p;d++){const M=m[d];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let d=0,p=_.length;d<p;d++){const M=_[d],x=M[0]+h,v=M[1]+h,S=M[2]+h;n.push(x,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Tx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Eo(n,t.curveSegments)}}function Tx(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class ml extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,f=new G,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){const T=S/e;h.x=-t*Math.cos(i+T*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+T*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),d.push(T+v,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=u[p][M+1],v=u[p][M],S=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&m.push(x,v,T),(p!==n-1||l<Math.PI)&&m.push(v,S,T)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class To extends Pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new G,h=new G,f=new G;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,d=m/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(_),h.y=(t+e*Math.cos(d))*Math.sin(_),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,d=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,M=(i+1)*m+g;o.push(_,d,M),o.push(d,p,M)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}const ao={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bx{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Ax=new bx;class Ir{constructor(t){this.manager=t!==void 0?t:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class wx extends Error{constructor(t,e){super(t),this.response=e}}class Ah extends Ir{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ao.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:n,onError:i});return}On[t]=[],On[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=On[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let _=0;const d=new ReadableStream({start(p){M();function M(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let T=0,b=u.length;T<b;T++){const I=u[T];I.onProgress&&I.onProgress(S)}p.enqueue(v),M()}})}}});return new Response(d)}else throw new wx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ao.add(t,c);const u=On[t];delete On[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=On[t];if(u===void 0)throw this.manager.itemError(t),c;delete On[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rx extends Ir{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ao.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ts("img");function l(){u(),ao.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Cx extends Ir{constructor(t){super(t)}load(t,e,n,i){const s=new Ge,o=new Rx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Px{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return(typeof performance>"u"?Date:performance).now()}class Lx{constructor(t,e,n=0,i=1/0){this.ray=new vo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(Tu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ka(t[i],this,n,e);return n.sort(Tu),n}}function Tu(r,t){return r.distance-t.distance}function ka(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ka(i[s],t,e,!0)}}const bu=new ft;class Dx{constructor(t=new ft(1/0,1/0),e=new ft(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Ux extends X0{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Pe;i.setAttribute("position",new ee(e,3)),i.setAttribute("color",new ee(n,3));const s=new gh({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Yt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jn{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new mr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let x=0,v=p.length;x<v;x++){const S=p[x],T=new _r;T.curves=S.curves,M.push(T)}return M}function n(p,M){const x=M.length;let v=!1;for(let S=x-1,T=0;T<x;S=T++){let b=M[S],I=M[T],y=I.x-b.x,A=I.y-b.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(b=M[T],y=-y,I=M[S],A=-A),p.y<b.y||p.y>I.y)continue;if(p.y===b.y){if(p.x===b.x)return!0}else{const q=A*(p.x-b.x)-y*(p.y-b.y);if(q===0)return!0;if(q<0)continue;v=!v}}else{if(p.y!==b.y)continue;if(I.x<=p.x&&p.x<=b.x||b.x<=p.x&&p.x<=I.x)return!0}}return v}const i=An.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new _r,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],g=0,_;f[g]=void 0,m[g]=[];for(let p=0,M=s.length;p<M;p++)a=s[p],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new _r,p:_},f[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let p=!1,M=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const S=m[x];for(let T=0;T<S.length;T++){const b=S[T];let I=!0;for(let y=0;y<f.length;y++)n(b.p,f[y].p)&&(x!==y&&M++,I?(I=!1,h[y].push(b)):p=!0);I&&h[x].push(b)}}M>0&&p===!1&&(m=h)}let d;for(let p=0,M=f.length;p<M;p++){l=f[p].s,c.push(l),d=m[p];for(let x=0,v=d.length;x<v;x++)l.holes.push(d[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Bn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tr={duration:.5,overwrite:!1,delay:0},_l,Re,oe,cn=1e8,$t=1/cn,Ga=Math.PI*2,Ix=Ga/4,Nx=0,Rh=Math.sqrt,Ox=Math.cos,Fx=Math.sin,Se=function(t){return typeof t=="string"},ae=function(t){return typeof t=="function"},Hn=function(t){return typeof t=="number"},gl=function(t){return typeof t>"u"},Rn=function(t){return typeof t=="object"},He=function(t){return t!==!1},xl=function(){return typeof window<"u"},Ks=function(t){return ae(t)||Se(t)},Ch=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ce=Array.isArray,Ha=/(?:-?\.?\d|\.)+/gi,Ph=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lh=/[+-]=-?[.\d]+/,Dh=/[^,'"\[\]\s]+/gi,Bx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ne,on,Va,vl,en={},lo={},Uh,Ih=function(t){return(lo=Oi(t,en))&&qe},yl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},rs=function(t,e){return!e&&console.warn(t)},Nh=function(t,e){return t&&(en[t]=e)&&lo&&(lo[t]=e)||en},ss=function(){return 0},zx={suppressEvents:!0,isStart:!0,kill:!1},Qs={suppressEvents:!0,kill:!1},kx={suppressEvents:!0},Ml={},si=[],Wa={},Oh,Ke={},xa={},Au=30,to=[],Sl="",El=function(t){var e=t[0],n,i;if(Rn(e)||ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=to.length;i--&&!to[i].targetTest(e););n=to[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new af(t[i],n)))||t.splice(i,1);return t},Ci=function(t){return t._gsap||El(un(t))[0]._gsap},Fh=function(t,e,n){return(n=t[e])&&ae(n)?t[e]():gl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},gr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Gx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},co=function(){var t=si.length,e=si.slice(0),n,i;for(Wa={},si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bh=function(t,e,n,i){si.length&&!Re&&co(),t.render(e,n,i||Re&&e<0&&(t._initted||t._startAt)),si.length&&!Re&&co()},zh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dh).length<2?e:Se(t)?t.trim():t},kh=function(t){return t},hn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Oi=function(t,e){for(var n in e)t[n]=e[n];return t},wu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Rn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},uo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jr=function(t){var e=t.parent||ne,n=t.keyframes?Hx(Ce(t.keyframes)):hn;if(He(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},bo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Pi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Wx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Xa=function(t,e,n,i){return t._startAt&&(Re?t._startAt.revert(Qs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Xx=function r(t){return!t||t._ts&&r(t.parent)},Ru=function(t){return t._repeat?br(t._tTime,t=t.duration()+t._rDelay)*t:0},br=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ho=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ao=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},wo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ao(t),n._dirty||Pi(n,t)),t},Hh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ho(t.rawTime(),e),(!e._dur||_s(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),Pi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},En=function(t,e,n,i){return e.parent&&li(e),e._start=Me((Hn(n)?n:n||t!==ne?sn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gh(t,e,"_first","_last",t._sort?"_start":0),qa(e)||(t._recent=e),i||Hh(t,e),t._ts<0&&wo(t,t._tTime),t},Vh=function(t,e){return(en.ScrollTrigger||yl("scrollTrigger",e))&&en.ScrollTrigger.create(e,t)},Wh=function(t,e,n,i,s){if(bl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Re&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Oh!==$e.frame)return si.push(t),t._lazy=[s,i],1},qx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},qa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Yx=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&qx(t)&&!(!t._initted&&qa(t))||(t._ts<0||t._dp._ts<0)&&!qa(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=_s(0,t._tDur,e),u=br(l,a),t._yoyo&&u&1&&(o=1-o),u!==br(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Re||i||t._zTime===$t||!e&&t._zTime){if(!t._initted&&Wh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Xa(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&li(t,1),!n&&!Re&&(Qe(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Zx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ar=function(t,e,n,i){var s=t._repeat,o=Me(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Me(o*(s+1)+t._rDelay*s):o,a>0&&!i&&wo(t,t._tTime=t._tDur*a),t.parent&&Ao(t),n||Pi(t.parent,t),t},Cu=function(t){return t instanceof Ne?Pi(t):Ar(t,t._dur)},jx={_start:0,endTime:ss,totalDuration:ss},sn=function r(t,e,n){var i=t.labels,s=t._recent||jx,o=t.duration()>=cn?s.endTime(!1):t._dur,a,l,c;return Se(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ce(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Jr=function(t,e,n){var i=Hn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=He(l.vars.inherit)&&l.parent;o.immediateRender=He(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new de(e[0],o,e[s+1])},ui=function(t,e){return t||t===0?e(t):e},_s=function(t,e,n){return n<t?t:n>e?e:n},we=function(t,e){return!Se(t)||!(e=Bx.exec(t))?"":e[1]},Jx=function(t,e,n){return ui(n,function(i){return _s(t,e,i)})},Ya=[].slice,Xh=function(t,e){return t&&Rn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Rn(t[0]))&&!t.nodeType&&t!==on},Kx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||Xh(i,1)?(s=n).push.apply(s,un(i)):n.push(i)})||n},un=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Se(t)&&!n&&(Va||!wr())?Ya.call((e||vl).querySelectorAll(t),0):Ce(t)?Kx(t,n):Xh(t)?Ya.call(t,0):t?[t]:[]},Za=function(t){return t=un(t)[0]||rs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return un(e,n.querySelectorAll?n:n===t?rs("Invalid scope")||vl.createElement("div"):t)}},qh=function(t){return t.sort(function(){return .5-Math.random()})},Yh=function(t){if(ae(t))return t;var e=Rn(t)?t:{each:t},n=Li(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Se(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||e).length,d=o[_],p,M,x,v,S,T,b,I,y;if(!d){if(y=e.grid==="auto"?0:(e.grid||[1,cn])[1],!y){for(b=-cn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(d=o[_]=[],p=l?Math.min(y,_)*u-.5:i%y,M=y===cn?0:l?_*h/y-.5:i/y|0,b=0,I=cn,T=0;T<_;T++)x=T%y-p,v=M-(T/y|0),d[T]=S=c?Math.abs(c==="y"?v:x):Rh(x*x+v*v),S>b&&(b=S),S<I&&(I=S);i==="random"&&qh(d),d.max=b-I,d.min=I,d.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),d.b=_<0?s-_:s,d.u=we(e.amount||e.each)||0,n=n&&_<0?rf(n):n}return _=(d[f]-d.min)/d.max||0,Me(d.b+(n?n(_):_)*d.v)+d.u}},ja=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hn(n)?0:we(n))}},Zh=function(t,e){var n=Ce(t),i,s;return!n&&Rn(t)&&(i=n=t.radius||cn,t.values?(t=un(t.values),(s=!Hn(t[0]))&&(i*=i)):t=ja(t.increment)),ui(e,n?ae(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=cn,u=0,h=t.length,f,m;h--;)s?(f=t[h].x-a,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Hn(o)?u:u+we(o)}:ja(t))},jh=function(t,e,n,i){return ui(Ce(t)?!e:n===!0?!!(n=0):!i,function(){return Ce(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},$x=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Qx=function(t,e){return function(n){return t(parseFloat(n))+(e||we(n))}},tv=function(t,e,n){return Kh(t,e,0,1,n)},Jh=function(t,e,n){return ui(n,function(i){return t[~~e(i)]})},ev=function r(t,e,n){var i=e-t;return Ce(t)?Jh(t,r(0,t.length),e):ui(n,function(s){return(i+(s-t)%i)%i+t})},nv=function r(t,e,n){var i=e-t,s=i*2;return Ce(t)?Jh(t,r(0,t.length-1),e):ui(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},os=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Dh:Ha),n+=t.substr(e,i-e)+jh(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Kh=function(t,e,n,i,s){var o=e-t,a=i-n;return ui(s,function(l){return n+((l-t)/o*a||0)})},iv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var o=Se(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ce(t)&&!Ce(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Oi(Ce(t)?[]:{},t));if(!u){for(l in e)Tl.call(a,t,l,"get",e[l]);s=function(g){return Rl(g,a)||(o?t.p:t)}}}return ui(n,s)},Pu=function(t,e,n){var i=t.labels,s=cn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qe=function(t,e,n){var i=t.vars,s=i[e],o=oe,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&si.length&&co(),a&&(oe=a),u=l?s.apply(c,l):s.call(c),oe=o,u},Wr=function(t){return li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Re),t.progress()<1&&Qe(t,"onInterrupt"),t},fr,$h=[],Qh=function(t){if(xl()&&t){t=!t.name&&t.default||t;var e=t.name,n=ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ss,render:Rl,add:Tl,kill:vv,modifier:xv,rawVars:0},o={targetTest:0,get:0,getSetter:wl,aliases:{},register:0};if(wr(),t!==i){if(Ke[e])return;hn(i,hn(uo(t,s),o)),Oi(i.prototype,Oi(s,uo(t,o))),Ke[i.prop=e]=i,t.targetTest&&(to.push(i),Ml[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Nh(e,i),t.register&&t.register(qe,i,We)}else t&&$h.push(t)},Kt=255,Xr={aqua:[0,Kt,Kt],lime:[0,Kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kt],navy:[0,0,128],white:[Kt,Kt,Kt],olive:[128,128,0],yellow:[Kt,Kt,0],orange:[Kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kt,0,0],pink:[Kt,192,203],cyan:[0,Kt,Kt],transparent:[Kt,Kt,Kt,0]},va=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Kt+.5|0},tf=function(t,e,n){var i=t?Hn(t)?[t>>16,t>>8&Kt,t&Kt]:0:Xr.black,s,o,a,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xr[t])i=Xr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Kt,i&Kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Kt,t&Kt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ha),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=va(l+1/3,s,o),i[1]=va(l,s,o),i[2]=va(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ph),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ha)||Xr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Kt,o=i[1]/Kt,a=i[2]/Kt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ef=function(t){var e=[],n=[],i=-1;return t.split(oi).forEach(function(s){var o=s.match(hr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Lu=function(t,e,n){var i="",s=(t+i).match(oi),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=tf(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ef(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(oi,"1").split(hr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(oi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},oi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),rv=/hsl[a]?\(/,nf=function(t){var e=t.join(" "),n;if(oi.lastIndex=0,oi.test(e))return n=rv.test(e),t[1]=Lu(t[1],n),t[0]=Lu(t[0],n,ef(t[1])),!0},as,$e=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,m,g=function _(d){var p=r()-i,M=d===!0,x,v,S,T;if(p>t&&(n+=p-e),i+=p,S=i-n,x=S-o,(x>0||M)&&(T=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=c(_)),v)for(m=0;m<a.length;m++)a[m](S,f,T,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Uh&&(!Va&&xl()&&(on=Va=window,vl=on.document||{},en.gsap=qe,(on.gsapVersions||(on.gsapVersions=[])).push(qe.version),Ih(lo||on.GreenSockGlobals||!on.gsap&&on||{}),u=on.requestAnimationFrame,$h.forEach(Qh)),l&&h.sleep(),c=u||function(d){return setTimeout(d,o-h.time*1e3+1|0)},as=1,g(2))},sleep:function(){(u?on.cancelAnimationFrame:clearTimeout)(l),as=0,c=ss},lagSmoothing:function(d,p){t=d||1/0,e=Math.min(p||33,t)},fps:function(d){s=1e3/(d||240),o=h.time*1e3+s},add:function(d,p,M){var x=p?function(v,S,T,b){d(v,S,T,b),h.remove(x)}:d;return h.remove(d),a[M?"unshift":"push"](x),wr(),x},remove:function(d,p){~(p=a.indexOf(d))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},h}(),wr=function(){return!as&&$e.wake()},Wt={},sv=/^[\d.\-M][\d.\-,\s]/,ov=/["']/g,av=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ov,"").trim():+c,i=l.substr(a+1).trim();return e},lv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},cv=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[av(e[1])]:lv(t).split(",").map(zh)):Wt._CE&&sv.test(t)?Wt._CE("",t):n},rf=function(t){return function(e){return 1-t(1-e)}},sf=function r(t,e){for(var n=t._first,i;n;)n instanceof Ne?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Li=function(t,e){return t&&(ae(t)?t:Wt[t]||cv(t))||e},Bi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ve(t,function(a){Wt[a]=en[a]=s,Wt[o=a.toLowerCase()]=n;for(var l in s)Wt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[a+"."+l]=s[l]}),s},of=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ya=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ga*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fx((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:of(a);return s=Ga/s,l.config=function(c,u){return r(t,c,u)},l},Ma=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:of(n);return i.config=function(s){return r(t,s)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Bi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;Bi("Elastic",ya("in"),ya("out"),ya());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Bi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Bi("Circ",function(r){return-(Rh(1-r*r)-1)});Bi("Sine",function(r){return r===1?1:-Ox(r*Ix)+1});Bi("Back",Ma("in"),Ma("out"),Ma());Wt.SteppedEase=Wt.steps=en.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-$t;return function(a){return((i*_s(0,o,a)|0)+s)*n}}};Tr.ease=Wt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sl+=r+","+r+"Params,"});var af=function(t,e){this.id=Nx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fh,this.set=e?e.getSetter:wl},ls=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ar(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),as||$e.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ar(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(wr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wo(this,n),!s._dp||s.parent||Hh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&En(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ru(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ru(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?br(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ho(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this._tDur,s),i!==!1),Ao(this),Wx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&En(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(He(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ho(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kx);var i=Re;return Re=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Re=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(sn(this,n),He(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,He(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$t)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=ae(n)?n:kh,a=function(){var c=i.then;i.then=null,ae(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Wr(this)},r}();hn(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var Ne=function(r){wh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=He(n.sortChildren),ne&&En(n.parent||ne,Bn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vh(Bn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Jr(0,arguments,this),this},e.from=function(i,s,o){return Jr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Jr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new de(i,s,sn(this,o),1),this},e.call=function(i,s,o){return En(this,de.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new de(i,o,sn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,jr(o).immediateRender=He(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,jr(a).immediateRender=He(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Me(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,d,p,M,x,v,S,T,b;if(this!==ne&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,o);if(f=Me(u%d),u===l?(_=this._repeat,f=c):(_=~~(u/d),_&&_===u/d&&(f=c,_--),f>c&&(f=c)),S=br(this._tTime,d),!a&&this._tTime&&S!==_&&this._tTime-S*d-this._dur<=0&&(S=_),T&&_&1&&(f=c-f,b=1),_!==S&&!this._lock){var I=T&&S&1,y=I===(T&&_&1);if(_<S&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Me(_*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;sf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Zx(this,Me(a),Me(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Qe(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-$t);break}}m=g}else{m=this._last;for(var A=i<0?i:f;m;){if(g=m._prev,(m._act||A<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(A-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(A-m._start)*m._ts,s,o||Re&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=A?-$t:$t);break}}m=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-$t)._zTime=f>=a?1:-1,this._ts))return this._start=v,Ao(this),this.render(i,s,o);this._onUpdate&&!s&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&li(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Qe(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Hn(s)||(s=sn(this,s,i)),!(i instanceof ls)){if(Ce(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Se(i))return this.addLabel(i,s);if(ae(i))i=de.delayedCall(0,i);else return this}return this!==i?En(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-cn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof de?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Se(i)?this.removeLabel(i):ae(i)?this.killTweensOf(i):(bo(this,i),i===this._recent&&(this._recent=this._last),Pi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me($e.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=sn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=de.delayedCall(0,s||ss,o);return a.data="isPause",this._hasPause=1,En(this,a,sn(this,i))},e.removePause=function(i){var s=this._first;for(i=sn(this,i);s;)s._start===i&&s.data==="isPause"&&li(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qn!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=un(i),l=this._first,c=Hn(s),u;l;)l instanceof de?Gx(l._targets,a)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=sn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=de.to(o,hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$t,onStart:function(){if(o.pause(),!m){var d=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==d&&Ar(g,d,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,hn({startAt:{time:sn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pu(this,sn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pu(this,sn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=cn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,En(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ar(o,o===ne&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ne._ts&&(Bh(ne,ho(i,ne)),Oh=$e.frame),$e.frame>=Au){Au+=tn.autoSleep||120;var s=ne._first;if((!s||!s._ts)&&tn.autoSleep&&$e._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$e.sleep()}}},t}(ls);hn(Ne.prototype,{_lock:0,_hasPause:0,_forcing:0});var uv=function(t,e,n,i,s,o,a){var l=new We(this._pt,t,e,0,1,df,null,s),c=0,u=0,h,f,m,g,_,d,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=os(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),f=n.match(ga)||[];h=ga.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?gr(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=ga.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Lh.test(i)||p)&&(l.e=0),this._pt=l,l},Tl=function(t,e,n,i,s,o,a,l,c,u){ae(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:ae(h)?c?t[e.indexOf("set")||!ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=ae(h)?c?mv:hf:Al,g;if(Se(i)&&(~i.indexOf("random(")&&(i=os(i)),i.charAt(1)==="="&&(g=gr(f,i)+(we(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ja)return!isNaN(f*i)&&i!==""?(g=new We(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?gv:ff,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&yl(e,i),uv.call(this,t,e,f,i,m,l||tn.stringFilter,c))},hv=function(t,e,n,i,s){if(ae(t)&&(t=Kr(t,s,e,n,i)),!Rn(t)||t.style&&t.nodeType||Ce(t)||Ch(t))return Se(t)?Kr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Kr(t[a],s,e,n,i);return o},lf=function(t,e,n,i,s,o){var a,l,c,u;if(Ke[t]&&(a=new Ke[t]).init(s,a.rawVars?e[t]:hv(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new We(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==fr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qn,Ja,bl=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,d=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:d,x=t._overwrite==="auto"&&!_l,v=t.timeline,S,T,b,I,y,A,q,W,et,N,Y,J,H;if(v&&(!f||!s)&&(s="none"),t._ease=Li(s,Tr.ease),t._yEase=h?rf(Li(h===!0?s:h,Tr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(W=d[0]?Ci(d[0]).harness:0,J=W&&i[W.prop],S=uo(i,Ml),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!m?_.render(-1,!0):_.revert(u&&g?Qs:zx),_._lazy=0),o){if(li(t._startAt=de.set(d,hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&He(l),startAt:null,delay:0,onUpdate:c&&function(){return Qe(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re||!a&&!m)&&t._startAt.revert(Qs),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),b=hn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&He(l),immediateRender:a,stagger:0,parent:p},S),J&&(b[W.prop]=J),li(t._startAt=de.set(d,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re?t._startAt.revert(Qs):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&He(l)||l&&!g,T=0;T<d.length;T++){if(y=d[T],q=y._gsap||El(d)[T]._gsap,t._ptLookup[T]=N={},Wa[q.id]&&si.length&&co(),Y=M===d?T:M.indexOf(y),W&&(et=new W).init(y,J||S,t,Y,M)!==!1&&(t._pt=I=new We(t._pt,y,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(V){N[V]=I}),et.priority&&(A=1)),!W||J)for(b in S)Ke[b]&&(et=lf(b,S,t,Y,y,M))?et.priority&&(A=1):N[b]=I=Tl.call(t,y,b,"get",S[b],Y,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),x&&t._pt&&(Qn=t,ne.killTweensOf(y,N,t.globalTime(e)),H=!t.parent,Qn=0),t._pt&&l&&(Wa[q.id]=1)}A&&pf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&v.render(cn,!0,!0)},fv=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(u=f[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ja=1,t.vars[e]="+=0",bl(t,a),Ja=0,l?rs(e+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=ce(n)+we(h.e)),h.b&&(h.b=u.s+we(h.b))},dv=function(t,e){var n=t[0]?Ci(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Oi({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ce(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Kr=function(t,e,n,i,s){return ae(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?os(t):t},cf=Sl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uf={};Ve(cf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return uf[r]=1});var de=function(r){wh(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:jr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,d=l.scrollTrigger,p=l.yoyoEase,M=i.parent||ne,x=(Ce(n)||Ch(n)?Hn(n[0]):"length"in i)?[n]:un(n),v,S,T,b,I,y,A,q;if(a._targets=x.length?El(x):rs("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||Ks(c)||Ks(u)){if(i=a.vars,v=a.timeline=new Ne({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=Bn(a),v._start=0,f||Ks(c)||Ks(u)){if(b=x.length,A=f&&Yh(f),Rn(f))for(I in f)~cf.indexOf(I)&&(q||(q={}),q[I]=f[I]);for(S=0;S<b;S++)T=uo(i,uf),T.stagger=0,p&&(T.yoyoEase=p),q&&Oi(T,q),y=x[S],T.duration=+Kr(c,Bn(a),S,y,x),T.delay=(+Kr(u,Bn(a),S,y,x)||0)-a._delay,!f&&b===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(y,T,A?A(S,y,x):0),v._ease=Wt.none;v.duration()?c=u=0:a.timeline=0}else if(g){jr(hn(v.vars.defaults,{ease:"none"})),v._ease=Li(g.ease||i.ease||"none");var W=0,et,N,Y;if(Ce(g))g.forEach(function(J){return v.to(x,J,">")}),v.duration();else{T={};for(I in g)I==="ease"||I==="easeEach"||pv(I,g[I],T,g.easeEach);for(I in T)for(et=T[I].sort(function(J,H){return J.t-H.t}),W=0,S=0;S<et.length;S++)N=et[S],Y={ease:N.e,duration:(N.t-(S?et[S-1].t:0))/100*c},Y[I]=N.v,v.to(x,Y,W),W+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return m===!0&&!_l&&(Qn=Bn(a),ne.killTweensOf(x),Qn=0),En(M,Bn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Me(M._time)&&He(h)&&Xx(Bn(a))&&M.data!=="nested")&&(a._tTime=-$t,a.render(Math.max(0,-u)||0)),d&&Vh(Bn(a),d),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-$t&&!u?l:i<$t?0:i,f,m,g,_,d,p,M,x,v;if(!c)Yx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Me(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Me(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),d=br(this._tTime,_),f===a&&!o&&this._initted&&g===d)return this._tTime=h,this;g!==d&&(x&&this._yEase&&sf(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==c&&this._initted&&(this._lock=o=1,this.render(Me(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Wh(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!g&&(Qe(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:!f&&p?-$t:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xa(this,i,s,o),Qe(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&Qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Xa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&li(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Qe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){as||$e.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bl(this,c),u=this._ease(c/this._dur),fv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(wo(this,0),this.parent||Gh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Wr(this),this.parent&&o!==this.timeline.totalDuration()&&Ar(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?un(i):a,c=this._ptLookup,u=this._pt,h,f,m,g,_,d,p;if((!s||s==="all")&&Vx(a,l))return s==="all"&&(this._pt=0),Wr(this);for(h=this._op=this._op||[],s!=="all"&&(Se(s)&&(_={},Ve(s,function(M){return _[M]=1}),s=_),s=dv(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,m={}):(m=h[p]=h[p]||{},g=s);for(_ in g)d=f&&f[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&bo(this,d,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Wr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Jr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Jr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ne.killTweensOf(i,s,o)},t}(ls);hn(de.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(r){de[r]=function(){var t=new Ne,e=Ya.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Al=function(t,e,n){return t[e]=n},hf=function(t,e,n){return t[e](n)},mv=function(t,e,n,i){return t[e](i.fp,n)},_v=function(t,e,n){return t.setAttribute(e,n)},wl=function(t,e){return ae(t[e])?hf:gl(t[e])&&t.setAttribute?_v:Al},ff=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},df=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Rl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},xv=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},vv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?bo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},pf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},We=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ff,this.d=l||this,this.set=c||Al,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yv,this.m=n,this.mt=s,this.tween=i},r}();Ve(Sl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ml[r]=1});en.TweenMax=en.TweenLite=de;en.TimelineLite=en.TimelineMax=Ne;ne=new Ne({sortChildren:!1,defaults:Tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=nf;var Di=[],eo={},Mv=[],Du=0,Sv=0,Sa=function(t){return(eo[t]||Mv).map(function(e){return e()})},Ka=function(){var t=Date.now(),e=[];t-Du>2&&(Sa("matchMediaInit"),Di.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=on.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Sa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Du=t,Sa("matchMedia"))},mf=function(){function r(e,n){this.selector=n&&Za(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Sv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ae(n)&&(s=i,i=n,n=ae);var o=this,a=function(){var c=oe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Za(s)),oe=o,h=i.apply(o,arguments),ae(h)&&o._r.push(h),oe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ae?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof de&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ne?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof de)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Di.length;o--;)Di[o].id===this.id&&Di.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Ev=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){Rn(n)||(n={matches:n});var o=new mf(0,s||this.scope),a=o.conditions={},l,c,u;oe&&!o.selector&&(o.selector=oe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=on.matchMedia(n[c]),l&&(Di.indexOf(o)<0&&Di.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ka):l.addEventListener("change",Ka)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),fo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Qh(i)})},timeline:function(t){return new Ne(t)},getTweensOf:function(t,e){return ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=un(t)[0]);var s=Ci(t||{}).get,o=n?kh:zh;return n==="native"&&(n=""),t&&(e?o((Ke[e]&&Ke[e].get||s)(t,e,n,i)):function(a,l,c){return o((Ke[a]&&Ke[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=un(t),t.length>1){var i=t.map(function(u){return qe.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Ke[e],a=Ci(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;fr._pt=0,h.init(t,n?u+n:u,fr,0,[t]),h.render(1,h),fr._pt&&Rl(1,fr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=qe.to(t,Oi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Li(t.ease,Tr.ease)),wu(Tr,t||{})},config:function(t){return wu(tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ke[a]&&!en[a]&&rs(e+" effect requires "+a+" plugin.")}),xa[e]=function(a,l,c){return n(un(a),hn(l||{},s),c)},o&&(Ne.prototype[e]=function(a,l,c){return this.add(xa[e](a,Rn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=Li(e)},parseEase:function(t,e){return arguments.length?Li(t,e):Wt},getById:function(t){return ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ne(t),i,s;for(n.smoothChildTiming=He(t.smoothChildTiming),ne.remove(n),n._dp=0,n._time=n._tTime=ne._time,i=ne._first;i;)s=i._next,(e||!(!i._dur&&i instanceof de&&i.vars.onComplete===i._targets[0]))&&En(n,i,i._start-i._delay),i=s;return En(ne,n,0),n},context:function(t,e){return t?new mf(t,e):oe},matchMedia:function(t){return new Ev(t)},matchMediaRefresh:function(){return Di.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ka()},addEventListener:function(t,e){var n=eo[t]||(eo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=eo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ev,wrapYoyo:nv,distribute:Yh,random:jh,snap:Zh,normalize:tv,getUnit:we,clamp:Jx,splitColor:tf,toArray:un,selector:Za,mapRange:Kh,pipe:$x,unitize:Qx,interpolate:iv,shuffle:qh},install:Ih,effects:xa,ticker:$e,updateRoot:Ne.updateRoot,plugins:Ke,globalTimeline:ne,core:{PropTween:We,globals:Nh,Tween:de,Timeline:Ne,Animation:ls,getCache:Ci,_removeLinkedListItem:bo,reverting:function(){return Re},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return _l=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fo[r]=de[r]});$e.add(Ne.updateRoot);fr=fo.to({},{duration:0});var Tv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bv=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Tv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ea=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Se(s)&&(l={},Ve(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bv(a,s)}}}},qe=fo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Re?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ea("roundProps",ja),Ea("modifiers"),Ea("snap",Zh))||fo;de.version=Ne.version=qe.version="3.12.4";Uh=1;xl()&&wr();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Uu,ti,xr,Cl,bi,Iu,Pl,Av=function(){return typeof window<"u"},Vn={},Si=180/Math.PI,vr=Math.PI/180,or=Math.atan2,Nu=1e8,Ll=/([A-Z])/g,wv=/(left|right|width|margin|padding|x)/i,Rv=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$a=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Pv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Lv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_f=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Dv=function(t,e,n){return t.style[e]=n},Uv=function(t,e,n){return t.style.setProperty(e,n)},Iv=function(t,e,n){return t._gsap[e]=n},Nv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ov=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Fv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},re="transform",Xe=re+"Origin",Bv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Vn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=zn(i,a)}):this.tfm[t]=o.x?o[t]:zn(i,t),t===Xe&&(this.tfm.zOrigin=o.zOrigin);else return Tn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xe,e,"")),t=re}(s||e)&&this.props.push(t,e,s[t])},xf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ll,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Pl(),(!s||!s.isStart)&&!n[re]&&(xf(n),i.zOrigin&&n[Xe]&&(n[Xe]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vf=function(t,e){var n={target:t,props:[],revert:zv,save:Bv};return t._gsap||qe.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},yf,Qa=function(t,e){var n=ti.createElementNS?ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ti.createElement(t);return n&&n.style?n:ti.createElement(t)},wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ll,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Rr(e)||e,1)||""},Ou="O,Moz,ms,Ms,Webkit".split(","),Rr=function(t,e,n){var i=e||bi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ou[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ou[o]:"")+t},tl=function(){Av()&&window.document&&(Uu=window,ti=Uu.document,xr=ti.documentElement,bi=Qa("div")||{style:{}},Qa("div"),re=Rr(re),Xe=re+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yf=!!Rr("perspective"),Pl=qe.core.reverting,Cl=1)},Ta=function r(t){var e=Qa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(xr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),xr.removeChild(e),this.style.cssText=s,o},Fu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Mf=function(t){var e;try{e=t.getBBox()}catch{e=Ta.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ta||(e=Ta.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Fu(t,["x","cx","x1"])||0,y:+Fu(t,["y","cy","y1"])||0,width:0,height:0}:e},Sf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Mf(t))},Fi=function(t,e){if(e){var n=t.style,i;e in Vn&&e!==Xe&&(e=re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ll,"-$1").toLowerCase())):n.removeAttribute(e)}},ei=function(t,e,n,i,s,o){var a=new We(t._pt,e,n,0,1,o?gf:_f);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Bu={deg:1,rad:1,turn:1},kv={grid:1,flex:1},ci=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bi.style,l=wv.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,d,p;if(i===o||!s||Bu[i]||Bu[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Sf(t),(m||o==="%")&&(Vn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],ce(m?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ti||!_.appendChild)&&(_=ti.body),d=_._gsap,d&&m&&d.width&&l&&d.time===$e.time&&!d.uncache)return ce(s/d.width*h);if(m&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:Fi(t,e)}else(m||o==="%")&&!kv[wn(_,"display")]&&(a.position=wn(t,"position")),_===t&&(a.position="static"),_.appendChild(bi),g=bi[u],_.removeChild(bi),a.position="absolute";return l&&m&&(d=Ci(_),d.time=$e.time,d.width=_[u]),ce(f?g*s/h:g&&s?h/g*s:0)},zn=function(t,e,n,i){var s;return Cl||tl(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vn[e]&&e!=="transform"?(s=us(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:mo(wn(t,Xe))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=po[e]&&po[e](t,e,n)||wn(t,e)||Fh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ci(t,e,s,n)+n:s},Gv=function(t,e,n,i){if(!n||n==="none"){var s=Rr(e,t,1),o=s&&wn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=wn(t,"borderTopColor"))}var a=new We(this._pt,t.style,e,0,1,df),l=0,c=0,u,h,f,m,g,_,d,p,M,x,v,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=wn(t,e)||i,_?t.style[e]=_:Fi(t,e)),u=[n,i],nf(u),n=u[0],i=u[1],f=n.match(hr)||[],S=i.match(hr)||[],S.length){for(;h=hr.exec(i);)d=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),d!==(_=f[c++]||"")&&(m=parseFloat(_)||0,v=_.substr((m+"").length),d.charAt(1)==="="&&(d=gr(m,d)+v),p=parseFloat(d),x=d.substr((p+"").length),l=hr.lastIndex-x.length,x||(x=x||tn.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(m=ci(t,e,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:m,c:p-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?gf:_f;return Lh.test(i)&&(a.e=0),this._pt=a,a},zu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zu[n]||n,e[1]=zu[i]||i,e.join(" ")},Vv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vn[a]&&(l=1,a=a==="transformOrigin"?Xe:re),Fi(n,a);l&&(Fi(n,re),o&&(o.svg&&n.removeAttribute("transform"),us(n,1),o.uncache=1,xf(i)))}},po={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new We(t._pt,e,n,0,0,Vv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},cs=[1,0,0,1,0,0],Ef={},Tf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ku=function(t){var e=wn(t,re);return Tf(e)?cs:e.substr(7).match(Ph).map(ce)},Dl=function(t,e){var n=t._gsap||Ci(t),i=t.style,s=ku(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cs:s):(s===cs&&!t.offsetParent&&t!==xr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,xr.appendChild(t)),s=ku(t),l?i.display=l:Fi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):xr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},el=function(t,e,n,i,s,o){var a=t._gsap,l=s||Dl(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],_=l[2],d=l[3],p=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,T,b,I,y;n?l!==cs&&(b=m*d-g*_)&&(I=v*(d/b)+S*(-_/b)+(_*M-d*p)/b,y=v*(-g/b)+S*(m/b)-(m*M-g*p)/b,v=I,S=y):(T=Mf(t),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),S=T.y+(~(x[1]||x[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(p=v-c,M=S-u,a.xOffset=h+(p*m+M*_)-p,a.yOffset=f+(p*g+M*d)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Xe]="0px 0px",o&&(ei(o,a,"xOrigin",c,v),ei(o,a,"yOrigin",u,S),ei(o,a,"xOffset",h,a.xOffset),ei(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},us=function(t,e){var n=t._gsap||new af(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=wn(t,Xe)||"0",u,h,f,m,g,_,d,p,M,x,v,S,T,b,I,y,A,q,W,et,N,Y,J,H,V,at,st,z,tt,Mt,B,U;return u=h=f=_=d=p=M=x=v=0,m=g=1,n.svg=!!(t.getCTM&&Sf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[re]!=="none"?l[re]:"")),i.scale=i.rotate=i.translate="none"),b=Dl(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),el(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,T=n.yOrigin||0,b!==cs&&(q=b[0],W=b[1],et=b[2],N=b[3],u=Y=b[4],h=J=b[5],b.length===6?(m=Math.sqrt(q*q+W*W),g=Math.sqrt(N*N+et*et),_=q||W?or(W,q)*Si:0,M=et||N?or(et,N)*Si+_:0,M&&(g*=Math.abs(Math.cos(M*vr))),n.svg&&(u-=S-(S*q+T*et),h-=T-(S*W+T*N))):(U=b[6],Mt=b[7],st=b[8],z=b[9],tt=b[10],B=b[11],u=b[12],h=b[13],f=b[14],I=or(U,tt),d=I*Si,I&&(y=Math.cos(-I),A=Math.sin(-I),H=Y*y+st*A,V=J*y+z*A,at=U*y+tt*A,st=Y*-A+st*y,z=J*-A+z*y,tt=U*-A+tt*y,B=Mt*-A+B*y,Y=H,J=V,U=at),I=or(-et,tt),p=I*Si,I&&(y=Math.cos(-I),A=Math.sin(-I),H=q*y-st*A,V=W*y-z*A,at=et*y-tt*A,B=N*A+B*y,q=H,W=V,et=at),I=or(W,q),_=I*Si,I&&(y=Math.cos(I),A=Math.sin(I),H=q*y+W*A,V=Y*y+J*A,W=W*y-q*A,J=J*y-Y*A,q=H,Y=V),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,p=180-p),m=ce(Math.sqrt(q*q+W*W+et*et)),g=ce(Math.sqrt(J*J+U*U)),I=or(Y,J),M=Math.abs(I)>2e-4?I*Si:0,v=B?1/(B<0?-B:B):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Tf(wn(t,re)),H&&t.setAttribute("transform",H))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ce(m),n.scaleY=ce(g),n.rotation=ce(_)+a,n.rotationX=ce(d)+a,n.rotationY=ce(p)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Xe]=mo(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?Xv:yf?bf:Wv,n.uncache=0,n},mo=function(t){return(t=t.split(" "))[0]+" "+t[1]},ba=function(t,e,n){var i=we(e);return ce(parseFloat(e)+parseFloat(ci(t,"x",n+"px",i)))+i},Wv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bf(t,e)},xi="0deg",Hr="0px",vi=") ",bf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,v="",S=p==="auto"&&t&&t!==1||p===!0;if(x&&(h!==xi||u!==xi)){var T=parseFloat(u)*vr,b=Math.sin(T),I=Math.cos(T),y;T=parseFloat(h)*vr,y=Math.cos(T),o=ba(M,o,b*y*-x),a=ba(M,a,-Math.sin(T)*-x),l=ba(M,l,I*y*-x+x)}d!==Hr&&(v+="perspective("+d+vi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==Hr||a!==Hr||l!==Hr)&&(v+=l!==Hr||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vi),c!==xi&&(v+="rotate("+c+vi),u!==xi&&(v+="rotateY("+u+vi),h!==xi&&(v+="rotateX("+h+vi),(f!==xi||m!==xi)&&(v+="skew("+f+", "+m+vi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+vi),M.style[re]=v||"translate(0, 0)"},Xv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(o),v=parseFloat(a),S,T,b,I,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=vr,c*=vr,S=Math.cos(l)*h,T=Math.sin(l)*h,b=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=vr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,I*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,T*=y)),S=ce(S),T=ce(T),b=ce(b),I=ce(I)):(S=h,I=f,T=b=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=ci(m,"x",o,"px"),v=ci(m,"y",a,"px")),(g||_||d||p)&&(x=ce(x+g-(g*S+_*b)+d),v=ce(v+_-(g*T+_*I)+p)),(i||s)&&(y=m.getBBox(),x=ce(x+i/100*y.width),v=ce(v+s/100*y.height)),y="matrix("+S+","+T+","+b+","+I+","+x+","+v+")",m.setAttribute("transform",y),M&&(m.style[re]=y)},qv=function(t,e,n,i,s){var o=360,a=Se(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Si:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Nu)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Nu)%o-~~(c/o)*o)),t._pt=f=new We(t._pt,e,n,i,c,Cv),f.e=u,f.u="deg",t._props.push(n),f},Gu=function(t,e){for(var n in e)t[n]=e[n];return t},Yv=function(t,e,n){var i=Gu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[re]=e,a=us(n,1),Fi(n,re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[re],o[re]=e,a=us(n,1),o[re]=c);for(l in Vn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=we(c),g=we(u),h=m!==g?ci(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new We(t._pt,a,l,h,f-h,$a),t._pt.u=g||0,t._props.push(l));Gu(a,i)};Ve("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});po[t>1?"border"+r:r]=function(a,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return zn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,m,h)}});var Af={name:"css",register:tl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,m,g,_,d,p,M,x,v,S,T,b,I;Cl||tl(),this.styles=this.styles||vf(t),I=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Ke[_]&&lf(_,e,n,i,t,s)))){if(m=typeof u,g=po[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=os(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",oi.lastIndex=0,oi.test(c)||(d=we(c),p=we(u)),p?d!==p&&(c=ci(t,_,c,p)+p):d&&(u+=d),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Se(c)&&~c.indexOf("random(")&&(c=os(c)),we(c+"")||c==="auto"||(c+=tn.units[_]||we(zn(t,_))||""),(c+"").charAt(1)==="="&&(c=zn(t,_))):c=zn(t,_),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Tn&&(_==="autoAlpha"&&(f===1&&zn(t,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),ei(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Tn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Vn,x){if(this.styles.save(_),v||(S=t._gsap,S.renderTransform&&!e.parseTransform||us(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new We(this._pt,a,re,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new We(this._pt,S,"scaleY",S.scaleY,(M?gr(S.scaleY,M+h):h)-S.scaleY||0,$a),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Xe,0,a[Xe]),u=Hv(u),S.svg?el(t,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&ei(this,S,"zOrigin",S.zOrigin,p),ei(this,a,_,mo(c),mo(u)));continue}else if(_==="svgOrigin"){el(t,u,1,T,0,this);continue}else if(_ in Ef){qv(this,S,_,f,M?gr(f,M+u):u);continue}else if(_==="smoothOrigin"){ei(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){Yv(this,u,t);continue}}else _ in a||(_=Rr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!Rv.test(u)&&_ in a)d=(c+"").substr((f+"").length),h||(h=0),p=we(u)||(_ in tn.units?tn.units[_]:d),d!==p&&(f=ci(t,_,c,p)),this._pt=new We(this._pt,x?S:a,_,f,(M?gr(f,M+h):h)-f,!x&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Lv:$a),this._pt.u=p||0,d!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Pv);else if(_ in a)Gv.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){yl(_,u);continue}x||(_ in a?I.push(_,0,a[_]):I.push(_,1,c||t[_])),o.push(_)}}b&&pf(this)},render:function(t,e){if(e.tween._time||!Pl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Vn&&e!==Xe&&(t._gsap.x||zn(t,"x"))?n&&Iu===n?e==="scale"?Nv:Iv:(Iu=n||{})&&(e==="scale"?Ov:Fv):t.style&&!gl(t.style[e])?Dv:~e.indexOf("-")?Uv:wl(t,e)},core:{_removeProperty:Fi,_getMatrix:Dl}};qe.utils.checkPrefix=Rr;qe.core.getStyleSaver=vf;(function(r,t,e,n){var i=Ve(r+","+t+","+e,function(s){Vn[s]=1});Ve(t,function(s){tn.units[s]="deg",Ef[s]=1}),Tn[i[13]]=r+","+t,Ve(n,function(s){var o=s.split(":");Tn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});qe.registerPlugin(Af);var gs=qe.registerPlugin(Af)||qe;gs.core.Tween;const Zv=ye;class xs extends Ir{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new Ah(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(B,U){if(B.nodeType!==1)return;const C=v(B);let w=!1,Q=null;switch(B.nodeName){case"svg":U=g(B,U);break;case"style":s(B);break;case"g":U=g(B,U);break;case"path":U=g(B,U),B.hasAttribute("d")&&(Q=i(B));break;case"rect":U=g(B,U),Q=l(B);break;case"polygon":U=g(B,U),Q=c(B);break;case"polyline":U=g(B,U),Q=u(B);break;case"circle":U=g(B,U),Q=h(B);break;case"ellipse":U=g(B,U),Q=f(B);break;case"line":U=g(B,U),Q=m(B);break;case"defs":w=!0;break;case"use":U=g(B,U);const lt=(B.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=B.viewportElement.getElementById(lt);P?n(P,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+lt);break}Q&&(U.fill!==void 0&&U.fill!=="none"&&Q.color.setStyle(U.fill,Zv),T(Q,z),W.push(Q),Q.userData={node:B,style:U});const ut=B.childNodes;for(let $=0;$<ut.length;$++){const lt=ut[$];w&&lt.nodeName!=="style"&&lt.nodeName!=="defs"||n(lt,U)}C&&(N.pop(),N.length>0?z.copy(N[N.length-1]):z.identity())}function i(B){const U=new Jn,C=new ft,w=new ft,Q=new ft;let ut=!0,$=!1;const lt=B.getAttribute("d");if(lt===""||lt==="none")return null;const P=lt.match(/[a-df-z][^a-df-z]*/ig);for(let nt=0,F=P.length;nt<F;nt++){const X=P[nt],Z=X.charAt(0),ht=X.slice(1).trim();ut===!0&&($=!0,ut=!1);let O;switch(Z){case"M":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2)C.x=O[L+0],C.y=O[L+1],w.x=C.x,w.y=C.y,L===0?U.moveTo(C.x,C.y):U.lineTo(C.x,C.y),L===0&&Q.copy(C);break;case"H":O=d(ht);for(let L=0,dt=O.length;L<dt;L++)C.x=O[L],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"V":O=d(ht);for(let L=0,dt=O.length;L<dt;L++)C.y=O[L],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"L":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2)C.x=O[L+0],C.y=O[L+1],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"C":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=6)U.bezierCurveTo(O[L+0],O[L+1],O[L+2],O[L+3],O[L+4],O[L+5]),w.x=O[L+2],w.y=O[L+3],C.x=O[L+4],C.y=O[L+5],L===0&&$===!0&&Q.copy(C);break;case"S":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=4)U.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),O[L+0],O[L+1],O[L+2],O[L+3]),w.x=O[L+0],w.y=O[L+1],C.x=O[L+2],C.y=O[L+3],L===0&&$===!0&&Q.copy(C);break;case"Q":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=4)U.quadraticCurveTo(O[L+0],O[L+1],O[L+2],O[L+3]),w.x=O[L+0],w.y=O[L+1],C.x=O[L+2],C.y=O[L+3],L===0&&$===!0&&Q.copy(C);break;case"T":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2){const Tt=_(C.x,w.x),Vt=_(C.y,w.y);U.quadraticCurveTo(Tt,Vt,O[L+0],O[L+1]),w.x=Tt,w.y=Vt,C.x=O[L+0],C.y=O[L+1],L===0&&$===!0&&Q.copy(C)}break;case"A":O=d(ht,[3,4],7);for(let L=0,dt=O.length;L<dt;L+=7){if(O[L+5]==C.x&&O[L+6]==C.y)continue;const Tt=C.clone();C.x=O[L+5],C.y=O[L+6],w.x=C.x,w.y=C.y,o(U,O[L],O[L+1],O[L+2],O[L+3],O[L+4],Tt,C),L===0&&$===!0&&Q.copy(C)}break;case"m":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2)C.x+=O[L+0],C.y+=O[L+1],w.x=C.x,w.y=C.y,L===0?U.moveTo(C.x,C.y):U.lineTo(C.x,C.y),L===0&&Q.copy(C);break;case"h":O=d(ht);for(let L=0,dt=O.length;L<dt;L++)C.x+=O[L],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"v":O=d(ht);for(let L=0,dt=O.length;L<dt;L++)C.y+=O[L],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"l":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2)C.x+=O[L+0],C.y+=O[L+1],w.x=C.x,w.y=C.y,U.lineTo(C.x,C.y),L===0&&$===!0&&Q.copy(C);break;case"c":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=6)U.bezierCurveTo(C.x+O[L+0],C.y+O[L+1],C.x+O[L+2],C.y+O[L+3],C.x+O[L+4],C.y+O[L+5]),w.x=C.x+O[L+2],w.y=C.y+O[L+3],C.x+=O[L+4],C.y+=O[L+5],L===0&&$===!0&&Q.copy(C);break;case"s":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=4)U.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),C.x+O[L+0],C.y+O[L+1],C.x+O[L+2],C.y+O[L+3]),w.x=C.x+O[L+0],w.y=C.y+O[L+1],C.x+=O[L+2],C.y+=O[L+3],L===0&&$===!0&&Q.copy(C);break;case"q":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=4)U.quadraticCurveTo(C.x+O[L+0],C.y+O[L+1],C.x+O[L+2],C.y+O[L+3]),w.x=C.x+O[L+0],w.y=C.y+O[L+1],C.x+=O[L+2],C.y+=O[L+3],L===0&&$===!0&&Q.copy(C);break;case"t":O=d(ht);for(let L=0,dt=O.length;L<dt;L+=2){const Tt=_(C.x,w.x),Vt=_(C.y,w.y);U.quadraticCurveTo(Tt,Vt,C.x+O[L+0],C.y+O[L+1]),w.x=Tt,w.y=Vt,C.x=C.x+O[L+0],C.y=C.y+O[L+1],L===0&&$===!0&&Q.copy(C)}break;case"a":O=d(ht,[3,4],7);for(let L=0,dt=O.length;L<dt;L+=7){if(O[L+5]==0&&O[L+6]==0)continue;const Tt=C.clone();C.x+=O[L+5],C.y+=O[L+6],w.x=C.x,w.y=C.y,o(U,O[L],O[L+1],O[L+2],O[L+3],O[L+4],Tt,C),L===0&&$===!0&&Q.copy(C)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(C.copy(Q),U.currentPath.currentPoint.copy(C),ut=!0);break;default:console.warn(X)}$=!1}return U}function s(B){if(!(!B.sheet||!B.sheet.cssRules||!B.sheet.cssRules.length))for(let U=0;U<B.sheet.cssRules.length;U++){const C=B.sheet.cssRules[U];if(C.type!==1)continue;const w=C.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<w.length;Q++){const ut=Object.fromEntries(Object.entries(C.style).filter(([,$])=>$!==""));et[w[Q]]=Object.assign(et[w[Q]]||{},ut)}}}function o(B,U,C,w,Q,ut,$,lt){if(U==0||C==0){B.lineTo(lt.x,lt.y);return}w=w*Math.PI/180,U=Math.abs(U),C=Math.abs(C);const P=($.x-lt.x)/2,nt=($.y-lt.y)/2,F=Math.cos(w)*P+Math.sin(w)*nt,X=-Math.sin(w)*P+Math.cos(w)*nt;let Z=U*U,ht=C*C;const O=F*F,L=X*X,dt=O/Z+L/ht;if(dt>1){const gt=Math.sqrt(dt);U=gt*U,C=gt*C,Z=U*U,ht=C*C}const Tt=Z*L+ht*O,Vt=(Z*ht-Tt)/Tt;let D=Math.sqrt(Math.max(0,Vt));Q===ut&&(D=-D);const E=D*U*X/C,K=-D*C*F/U,mt=Math.cos(w)*E-Math.sin(w)*K+($.x+lt.x)/2,pt=Math.sin(w)*E+Math.cos(w)*K+($.y+lt.y)/2,_t=a(1,0,(F-E)/U,(X-K)/C),Rt=a((F-E)/U,(X-K)/C,(-F-E)/U,(-X-K)/C)%(Math.PI*2);B.currentPath.absellipse(mt,pt,U,C,_t,_t+Rt,ut===0,w)}function a(B,U,C,w){const Q=B*C+U*w,ut=Math.sqrt(B*B+U*U)*Math.sqrt(C*C+w*w);let $=Math.acos(Math.max(-1,Math.min(1,Q/ut)));return B*w-U*C<0&&($=-$),$}function l(B){const U=x(B.getAttribute("x")||0),C=x(B.getAttribute("y")||0),w=x(B.getAttribute("rx")||B.getAttribute("ry")||0),Q=x(B.getAttribute("ry")||B.getAttribute("rx")||0),ut=x(B.getAttribute("width")),$=x(B.getAttribute("height")),lt=1-.551915024494,P=new Jn;return P.moveTo(U+w,C),P.lineTo(U+ut-w,C),(w!==0||Q!==0)&&P.bezierCurveTo(U+ut-w*lt,C,U+ut,C+Q*lt,U+ut,C+Q),P.lineTo(U+ut,C+$-Q),(w!==0||Q!==0)&&P.bezierCurveTo(U+ut,C+$-Q*lt,U+ut-w*lt,C+$,U+ut-w,C+$),P.lineTo(U+w,C+$),(w!==0||Q!==0)&&P.bezierCurveTo(U+w*lt,C+$,U,C+$-Q*lt,U,C+$-Q),P.lineTo(U,C+Q),(w!==0||Q!==0)&&P.bezierCurveTo(U,C+Q*lt,U+w*lt,C,U+w,C),P}function c(B){function U(ut,$,lt){const P=x($),nt=x(lt);Q===0?w.moveTo(P,nt):w.lineTo(P,nt),Q++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new Jn;let Q=0;return B.getAttribute("points").replace(C,U),w.currentPath.autoClose=!0,w}function u(B){function U(ut,$,lt){const P=x($),nt=x(lt);Q===0?w.moveTo(P,nt):w.lineTo(P,nt),Q++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new Jn;let Q=0;return B.getAttribute("points").replace(C,U),w.currentPath.autoClose=!1,w}function h(B){const U=x(B.getAttribute("cx")||0),C=x(B.getAttribute("cy")||0),w=x(B.getAttribute("r")||0),Q=new mr;Q.absarc(U,C,w,0,Math.PI*2);const ut=new Jn;return ut.subPaths.push(Q),ut}function f(B){const U=x(B.getAttribute("cx")||0),C=x(B.getAttribute("cy")||0),w=x(B.getAttribute("rx")||0),Q=x(B.getAttribute("ry")||0),ut=new mr;ut.absellipse(U,C,w,Q,0,Math.PI*2);const $=new Jn;return $.subPaths.push(ut),$}function m(B){const U=x(B.getAttribute("x1")||0),C=x(B.getAttribute("y1")||0),w=x(B.getAttribute("x2")||0),Q=x(B.getAttribute("y2")||0),ut=new Jn;return ut.moveTo(U,C),ut.lineTo(w,Q),ut.currentPath.autoClose=!1,ut}function g(B,U){U=Object.assign({},U);let C={};if(B.hasAttribute("class")){const $=B.getAttribute("class").split(/\s/).filter(Boolean).map(lt=>lt.trim());for(let lt=0;lt<$.length;lt++)C=Object.assign(C,et["."+$[lt]])}B.hasAttribute("id")&&(C=Object.assign(C,et["#"+B.getAttribute("id")]));function w($,lt,P){P===void 0&&(P=function(F){return F.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),F}),B.hasAttribute($)&&(U[lt]=P(B.getAttribute($))),C[$]&&(U[lt]=P(C[$])),B.style&&B.style[$]!==""&&(U[lt]=P(B.style[$]))}function Q($){return Math.max(0,Math.min(1,x($)))}function ut($){return Math.max(0,x($))}return w("fill","fill"),w("fill-opacity","fillOpacity",Q),w("fill-rule","fillRule"),w("opacity","opacity",Q),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",Q),w("stroke-width","strokeWidth",ut),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ut),w("visibility","visibility"),U}function _(B,U){return B-(U-B)}function d(B,U,C){if(typeof B!="string")throw new TypeError("Invalid input: "+typeof B);const w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,ut=1,$=2,lt=3;let P=Q,nt=!0,F="",X="";const Z=[];function ht(Tt,Vt,D){const E=new SyntaxError('Unexpected character "'+Tt+'" at index '+Vt+".");throw E.partial=D,E}function O(){F!==""&&(X===""?Z.push(Number(F)):Z.push(Number(F)*Math.pow(10,Number(X)))),F="",X=""}let L;const dt=B.length;for(let Tt=0;Tt<dt;Tt++){if(L=B[Tt],Array.isArray(U)&&U.includes(Z.length%C)&&w.FLAGS.test(L)){P=ut,F=L,O();continue}if(P===Q){if(w.WHITESPACE.test(L))continue;if(w.DIGIT.test(L)||w.SIGN.test(L)){P=ut,F=L;continue}if(w.POINT.test(L)){P=$,F=L;continue}w.COMMA.test(L)&&(nt&&ht(L,Tt,Z),nt=!0)}if(P===ut){if(w.DIGIT.test(L)){F+=L;continue}if(w.POINT.test(L)){F+=L,P=$;continue}if(w.EXP.test(L)){P=lt;continue}w.SIGN.test(L)&&F.length===1&&w.SIGN.test(F[0])&&ht(L,Tt,Z)}if(P===$){if(w.DIGIT.test(L)){F+=L;continue}if(w.EXP.test(L)){P=lt;continue}w.POINT.test(L)&&F[F.length-1]==="."&&ht(L,Tt,Z)}if(P===lt){if(w.DIGIT.test(L)){X+=L;continue}if(w.SIGN.test(L)){if(X===""){X+=L;continue}X.length===1&&w.SIGN.test(X)&&ht(L,Tt,Z)}}w.WHITESPACE.test(L)?(O(),P=Q,nt=!1):w.COMMA.test(L)?(O(),P=Q,nt=!0):w.SIGN.test(L)?(O(),P=ut,F=L):w.POINT.test(L)?(O(),P=$,F=L):ht(L,Tt,Z)}return O(),Z}const p=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(B){let U="px";if(typeof B=="string"||B instanceof String)for(let w=0,Q=p.length;w<Q;w++){const ut=p[w];if(B.endsWith(ut)){U=ut,B=B.substring(0,B.length-ut.length);break}}let C;return U==="px"&&e.defaultUnit!=="px"?C=M.in[e.defaultUnit]/e.defaultDPI:(C=M[U][e.defaultUnit],C<0&&(C=M[U].in*e.defaultDPI)),C*parseFloat(B)}function v(B){if(!(B.hasAttribute("transform")||B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))))return null;const U=S(B);return N.length>0&&U.premultiply(N[N.length-1]),z.copy(U),N.push(U),U}function S(B){const U=new Ot,C=Y;if(B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))){const w=x(B.getAttribute("x")),Q=x(B.getAttribute("y"));U.translate(w,Q)}if(B.hasAttribute("transform")){const w=B.getAttribute("transform").split(")");for(let Q=w.length-1;Q>=0;Q--){const ut=w[Q].trim();if(ut==="")continue;const $=ut.indexOf("("),lt=ut.length;if($>0&&$<lt){const P=ut.slice(0,$),nt=d(ut.slice($+1));switch(C.identity(),P){case"translate":if(nt.length>=1){const F=nt[0];let X=0;nt.length>=2&&(X=nt[1]),C.translate(F,X)}break;case"rotate":if(nt.length>=1){let F=0,X=0,Z=0;F=nt[0]*Math.PI/180,nt.length>=3&&(X=nt[1],Z=nt[2]),J.makeTranslation(-X,-Z),H.makeRotation(F),V.multiplyMatrices(H,J),J.makeTranslation(X,Z),C.multiplyMatrices(J,V)}break;case"scale":if(nt.length>=1){const F=nt[0];let X=F;nt.length>=2&&(X=nt[1]),C.scale(F,X)}break;case"skewX":nt.length===1&&C.set(1,Math.tan(nt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":nt.length===1&&C.set(1,0,0,Math.tan(nt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":nt.length===6&&C.set(nt[0],nt[2],nt[4],nt[1],nt[3],nt[5],0,0,1);break}}U.premultiply(C)}}return U}function T(B,U){function C($){st.set($.x,$.y,1).applyMatrix3(U),$.set(st.x,st.y)}function w($){const lt=$.xRadius,P=$.yRadius,nt=Math.cos($.aRotation),F=Math.sin($.aRotation),X=new G(lt*nt,lt*F,0),Z=new G(-P*F,P*nt,0),ht=X.applyMatrix3(U),O=Z.applyMatrix3(U),L=Y.set(ht.x,O.x,0,ht.y,O.y,0,0,0,1),dt=J.copy(L).invert(),D=H.copy(dt).transpose().multiply(dt).elements,E=q(D[0],D[1],D[4]),K=Math.sqrt(E.rt1),mt=Math.sqrt(E.rt2);if($.xRadius=1/K,$.yRadius=1/mt,$.aRotation=Math.atan2(E.sn,E.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const _t=J.set(K,0,0,0,mt,0,0,0,1),Rt=H.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),gt=_t.multiply(Rt).multiply(L),Et=Lt=>{const{x:qt,y:xt}=new G(Math.cos(Lt),Math.sin(Lt),0).applyMatrix3(gt);return Math.atan2(xt,qt)};$.aStartAngle=Et($.aStartAngle),$.aEndAngle=Et($.aEndAngle),b(U)&&($.aClockwise=!$.aClockwise)}}function Q($){const lt=y(U),P=A(U);$.xRadius*=lt,$.yRadius*=P;const nt=lt>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);$.aRotation+=nt,b(U)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const ut=B.subPaths;for(let $=0,lt=ut.length;$<lt;$++){const nt=ut[$].curves;for(let F=0;F<nt.length;F++){const X=nt[F];X.isLineCurve?(C(X.v1),C(X.v2)):X.isCubicBezierCurve?(C(X.v0),C(X.v1),C(X.v2),C(X.v3)):X.isQuadraticBezierCurve?(C(X.v0),C(X.v1),C(X.v2)):X.isEllipseCurve&&(at.set(X.aX,X.aY),C(at),X.aX=at.x,X.aY=at.y,I(U)?w(X):Q(X))}}}function b(B){const U=B.elements;return U[0]*U[4]-U[1]*U[3]<0}function I(B){const U=B.elements,C=U[0]*U[3]+U[1]*U[4];if(C===0)return!1;const w=y(B),Q=A(B);return Math.abs(C/(w*Q))>Number.EPSILON}function y(B){const U=B.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function A(B){const U=B.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function q(B,U,C){let w,Q,ut,$,lt;const P=B+C,nt=B-C,F=Math.sqrt(nt*nt+4*U*U);return P>0?(w=.5*(P+F),lt=1/w,Q=B*lt*C-U*lt*U):P<0?Q=.5*(P-F):(w=.5*F,Q=-.5*F),nt>0?ut=nt+F:ut=nt-F,Math.abs(ut)>2*Math.abs(U)?(lt=-2*U/ut,$=1/Math.sqrt(1+lt*lt),ut=lt*$):Math.abs(U)===0?(ut=1,$=0):(lt=-.5*ut/U,ut=1/Math.sqrt(1+lt*lt),$=lt*ut),nt>0&&(lt=ut,ut=-$,$=lt),{rt1:w,rt2:Q,cs:ut,sn:$}}const W=[],et={},N=[],Y=new Ot,J=new Ot,H=new Ot,V=new Ot,at=new ft,st=new G,z=new Ot,tt=new DOMParser().parseFromString(t,"image/svg+xml");return n(tt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:tt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,d,p,M){const x=_.x,v=d.x,S=p.x,T=M.x,b=_.y,I=d.y,y=p.y,A=M.y,q=(T-S)*(b-y)-(A-y)*(x-S),W=(v-x)*(b-y)-(I-b)*(x-S),et=(A-y)*(v-x)-(T-S)*(I-b),N=q/et,Y=W/et;if(et===0&&q!==0||N<=0||N>=1||Y<0||Y>1)return null;if(q===0&&et===0){for(let J=0;J<2;J++)if(o(J===0?p:M,_,d),i.loc==n.ORIGIN){const H=J===0?p:M;return{x:H.x,y:H.y,t:i.t}}else if(i.loc==n.BETWEEN){const H=+(x+i.t*(v-x)).toPrecision(10),V=+(b+i.t*(I-b)).toPrecision(10);return{x:H,y:V,t:i.t}}return null}else{for(let V=0;V<2;V++)if(o(V===0?p:M,_,d),i.loc==n.ORIGIN){const at=V===0?p:M;return{x:at.x,y:at.y,t:i.t}}const J=+(x+N*(v-x)).toPrecision(10),H=+(b+N*(I-b)).toPrecision(10);return{x:J,y:H,t:N}}}function o(_,d,p){const M=p.x-d.x,x=p.y-d.y,v=_.x-d.x,S=_.y-d.y,T=M*S-v*x;if(_.x===d.x&&_.y===d.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===p.x&&_.y===p.y){i.loc=n.DESTINATION,i.t=1;return}if(T<-Number.EPSILON){i.loc=n.LEFT;return}if(T>Number.EPSILON){i.loc=n.RIGHT;return}if(M*v<0||x*S<0){i.loc=n.BEHIND;return}if(Math.sqrt(M*M+x*x)<Math.sqrt(v*v+S*S)){i.loc=n.BEYOND;return}let b;M!==0?b=v/M:b=S/x,i.loc=n.BETWEEN,i.t=b}function a(_,d){const p=[],M=[];for(let x=1;x<_.length;x++){const v=_[x-1],S=_[x];for(let T=1;T<d.length;T++){const b=d[T-1],I=d[T],y=s(v,S,b,I);y!==null&&p.find(A=>A.t<=y.t+Number.EPSILON&&A.t>=y.t-Number.EPSILON)===void 0&&(p.push(y),M.push(new ft(y.x,y.y)))}}return M}function l(_,d,p){const M=new ft;d.getCenter(M);const x=[];return p.forEach(v=>{v.boundingBox.containsPoint(M)&&a(_,v.points).forEach(T=>{x.push({identifier:v.identifier,isCW:v.isCW,point:T})})}),x.sort((v,S)=>v.point.x-S.point.x),x}function c(_,d,p,M,x){(x==null||x==="")&&(x="nonzero");const v=new ft;_.boundingBox.getCenter(v);const S=[new ft(p,v.y),new ft(M,v.y)],T=l(S,_.boundingBox,d);T.sort((W,et)=>W.point.x-et.point.x);const b=[],I=[];T.forEach(W=>{W.identifier===_.identifier?b.push(W):I.push(W)});const y=b[0].point.x,A=[];let q=0;for(;q<I.length&&I[q].point.x<y;)A.length>0&&A[A.length-1]===I[q].identifier?A.pop():A.push(I[q].identifier),q++;if(A.push(_.identifier),x==="evenodd"){const W=A.length%2===0,et=A[A.length-2];return{identifier:_.identifier,isHole:W,for:et}}else if(x==="nonzero"){let W=!0,et=null,N=null;for(let Y=0;Y<A.length;Y++){const J=A[Y];W?(N=d[J].isCW,W=!1,et=J):N!==d[J].isCW&&(N=d[J].isCW,W=!0)}return{identifier:_.identifier,isHole:W,for:et}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(_=>{const d=_.getPoints();let p=-999999999,M=999999999,x=-999999999,v=999999999;for(let S=0;S<d.length;S++){const T=d[S];T.y>p&&(p=T.y),T.y<M&&(M=T.y),T.x>x&&(x=T.x),T.x<v&&(v=T.x)}return h<=x&&(h=x+1),u>=v&&(u=v-1),{curves:_.curves,points:d,isCW:An.isClockWise(d),identifier:-1,boundingBox:new Dx(new ft(v,M),new ft(x,p))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const m=f.map(_=>c(_,f,u,h,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!m[_.identifier].isHole){const p=new _r;p.curves=_.curves,m.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const v=f[x.identifier],S=new mr;S.curves=v.curves,p.holes.push(S)}),g.push(p)}}),g}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(xs.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const l=new Pe;return l.setAttribute("position",new ee(s,3)),l.setAttribute("normal",new ee(o,3)),l.setAttribute("uv",new ee(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){const c=new ft,u=new ft,h=new ft,f=new ft,m=new ft,g=new ft,_=new ft,d=new ft,p=new ft,M=new ft,x=new ft,v=new ft,S=new ft,T=new ft,b=new ft,I=new ft,y=new ft;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=nt(t);const A=t.length;if(A<2)return 0;const q=t[0].equals(t[A-1]);let W,et=t[0],N;const Y=e.strokeWidth/2,J=1/(A-1);let H=0,V,at,st,z,tt=!1,Mt=0,B=l*3,U=l*2;C(t[0],t[1],c).multiplyScalar(Y),d.copy(t[0]).sub(c),p.copy(t[0]).add(c),M.copy(d),x.copy(p);for(let F=1;F<A;F++){W=t[F],F===A-1?q?N=t[1]:N=void 0:N=t[F+1];const X=c;if(C(et,W,X),h.copy(X).multiplyScalar(Y),v.copy(W).sub(h),S.copy(W).add(h),V=H+J,at=!1,N!==void 0){C(W,N,u),h.copy(u).multiplyScalar(Y),T.copy(W).sub(h),b.copy(W).add(h),st=!0,h.subVectors(N,et),X.dot(h)<0&&(st=!1),F===1&&(tt=st),h.subVectors(N,W),h.normalize();const Z=Math.abs(X.dot(h));if(Z>Number.EPSILON){const ht=Y/Z;h.multiplyScalar(-ht),f.subVectors(W,et),m.copy(f).setLength(ht).add(h),I.copy(m).negate();const O=m.length(),L=f.length();f.divideScalar(L),g.subVectors(N,W);const dt=g.length();switch(g.divideScalar(dt),f.dot(I)<L&&g.dot(I)<dt&&(at=!0),y.copy(m).add(W),I.add(W),z=!1,at?st?(b.copy(I),S.copy(I)):(T.copy(I),v.copy(I)):ut(),e.strokeLineJoin){case"bevel":$(st,at,V);break;case"round":lt(st,at),st?Q(W,v,T,V,0):Q(W,b,S,V,1);break;case"miter":case"miter-clip":default:const Tt=Y*e.strokeMiterLimit/O;if(Tt<1)if(e.strokeLineJoin!=="miter-clip"){$(st,at,V);break}else lt(st,at),st?(g.subVectors(y,v).multiplyScalar(Tt).add(v),_.subVectors(y,T).multiplyScalar(Tt).add(T),w(v,V,0),w(g,V,0),w(W,V,.5),w(W,V,.5),w(g,V,0),w(_,V,0),w(W,V,.5),w(_,V,0),w(T,V,0)):(g.subVectors(y,S).multiplyScalar(Tt).add(S),_.subVectors(y,b).multiplyScalar(Tt).add(b),w(S,V,1),w(g,V,1),w(W,V,.5),w(W,V,.5),w(g,V,1),w(_,V,1),w(W,V,.5),w(_,V,1),w(b,V,1));else at?(st?(w(p,H,1),w(d,H,0),w(y,V,0),w(p,H,1),w(y,V,0),w(I,V,1)):(w(p,H,1),w(d,H,0),w(y,V,1),w(d,H,0),w(I,V,0),w(y,V,1)),st?T.copy(y):b.copy(y)):st?(w(v,V,0),w(y,V,0),w(W,V,.5),w(W,V,.5),w(y,V,0),w(T,V,0)):(w(S,V,1),w(y,V,1),w(W,V,.5),w(W,V,.5),w(y,V,1),w(b,V,1)),z=!0;break}}else ut()}else ut();!q&&F===A-1&&P(t[0],M,x,st,!0,H),H=V,et=W,d.copy(T),p.copy(b)}if(!q)P(W,v,S,st,!1,V);else if(at&&s){let F=y,X=I;tt!==st&&(F=I,X=y),st?(z||tt)&&(X.toArray(s,0*3),X.toArray(s,3*3),z&&F.toArray(s,1*3)):(z||!tt)&&(X.toArray(s,1*3),X.toArray(s,3*3),z&&F.toArray(s,0*3))}return Mt;function C(F,X,Z){return Z.subVectors(X,F),Z.set(-Z.y,Z.x).normalize()}function w(F,X,Z){s&&(s[B]=F.x,s[B+1]=F.y,s[B+2]=0,o&&(o[B]=0,o[B+1]=0,o[B+2]=1),B+=3,a&&(a[U]=X,a[U+1]=Z,U+=2)),Mt+=3}function Q(F,X,Z,ht,O){c.copy(X).sub(F).normalize(),u.copy(Z).sub(F).normalize();let L=Math.PI;const dt=c.dot(u);Math.abs(dt)<1&&(L=Math.abs(Math.acos(dt))),L/=n,h.copy(X);for(let Tt=0,Vt=n-1;Tt<Vt;Tt++)f.copy(h).rotateAround(F,L),w(h,ht,O),w(f,ht,O),w(F,ht,.5),h.copy(f);w(f,ht,O),w(Z,ht,O),w(F,ht,.5)}function ut(){w(p,H,1),w(d,H,0),w(v,V,0),w(p,H,1),w(v,V,1),w(S,V,0)}function $(F,X,Z){X?F?(w(p,H,1),w(d,H,0),w(v,V,0),w(p,H,1),w(v,V,0),w(I,V,1),w(v,Z,0),w(T,Z,0),w(I,Z,.5)):(w(p,H,1),w(d,H,0),w(S,V,1),w(d,H,0),w(I,V,0),w(S,V,1),w(S,Z,1),w(b,Z,0),w(I,Z,.5)):F?(w(v,Z,0),w(T,Z,0),w(W,Z,.5)):(w(S,Z,1),w(b,Z,0),w(W,Z,.5))}function lt(F,X){X&&(F?(w(p,H,1),w(d,H,0),w(v,V,0),w(p,H,1),w(v,V,0),w(I,V,1),w(v,H,0),w(W,V,.5),w(I,V,1),w(W,V,.5),w(T,H,0),w(I,V,1)):(w(p,H,1),w(d,H,0),w(S,V,1),w(d,H,0),w(I,V,0),w(S,V,1),w(S,H,1),w(I,V,0),w(W,V,.5),w(W,V,.5),w(I,V,0),w(b,H,1)))}function P(F,X,Z,ht,O,L){switch(e.strokeLineCap){case"round":O?Q(F,Z,X,L,.5):Q(F,X,Z,L,.5);break;case"square":if(O)c.subVectors(X,F),u.set(c.y,-c.x),h.addVectors(c,u).add(F),f.subVectors(u,c).add(F),ht?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(Z,F),u.set(c.y,-c.x),h.addVectors(c,u).add(F),f.subVectors(u,c).add(F);const dt=s.length;ht?(h.toArray(s,dt-1*3),f.toArray(s,dt-2*3),f.toArray(s,dt-4*3)):(h.toArray(s,dt-2*3),f.toArray(s,dt-1*3),f.toArray(s,dt-4*3))}break}}function nt(F){let X=!1;for(let ht=1,O=F.length-1;ht<O;ht++)if(F[ht].distanceTo(F[ht+1])<i){X=!0;break}if(!X)return F;const Z=[];Z.push(F[0]);for(let ht=1,O=F.length-1;ht<O;ht++)F[ht].distanceTo(F[ht+1])>=i&&Z.push(F[ht]);return Z.push(F[F.length-1]),Z}}}class jv extends Ir{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Ah(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new Jv(t)}}class Jv{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Kv(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function Kv(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=$v(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function $v(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new Jn;let a,l,c,u,h,f,m,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,p=_.length;d<p;)switch(_[d++]){case"m":a=_[d++]*t+e,l=_[d++]*t+n,o.moveTo(a,l);break;case"l":a=_[d++]*t+e,l=_[d++]*t+n,o.lineTo(a,l);break;case"q":c=_[d++]*t+e,u=_[d++]*t+n,h=_[d++]*t+e,f=_[d++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[d++]*t+e,u=_[d++]*t+n,h=_[d++]*t+e,f=_[d++]*t+n,m=_[d++]*t+e,g=_[d++]*t+n,o.bezierCurveTo(h,f,m,g,c,u);break}}return{offsetX:s.ha*t,path:o}}class Ul extends pl{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const nl=document.querySelector("canvas.webgl"),Cr={width:nl.offsetWidth,height:nl.offsetHeight};let Qv=20;const Be=2.5,vs=new V0,_o=new ft;new ft;window.addEventListener("mousemove",r=>{_o.x=r.clientX/Cr.width*2-1,_o.y=-(r.clientY/Cr.height)*2+1});const ty=new Cx,ey=ty.load("textures/particles/point.png"),Il=new jv,wf=new xs,Ro=new ze,ar=new ze,lr=new ze;wf.load("img/new-logo.svg",function(r){const t=r.paths;for(let e=0;e<t.length;e++){const n=t[e],i=new Wn({color:n.color,side:gn,depthWrite:!1});i.transparent=!0,i.alphaTest=!1;const s=xs.createShapes(n);for(let o=0;o<s.length;o++){const a=s[o],l=new Eo(a),c=new me(l,i);c.rotation.x=Math.PI,ar.add(c)}}ar.rotation.x=0,ar.scale.set(.015,.02),ar.position.x=-.43,ar.position.y=1.5,Ro.add(ar)},function(r){console.log(r.loaded/r.total*100+"% loaded")},function(r){console.log("An error happened")});wf.load("img/tls.svg",function(r){const t=r.paths;for(let e=0;e<t.length;e++){const n=t[e],i=new Wn({color:n.color,side:gn,depthWrite:!1});i.transparent=!0,i.alphaTest=!1;const s=xs.createShapes(n);for(let o=0;o<s.length;o++){const a=s[o],l=new Eo(a),c=new me(l,i);c.rotation.x=Math.PI,lr.add(c)}}lr.rotation.x=0,lr.scale.set(.0023,.003),lr.position.x=-.86,lr.position.y=.9,Ro.add(lr)},function(r){console.log(r.loaded/r.total*100+"% loaded")},function(r){console.log("An error happened")});vs.add(Ro);const Rf=new ze,zi=new ze,ki=new ze,Nr=new ze,ny=new To(Be,.004,162,162),Cf=new To(Be,.008,162,162);new ml(.05,16,16);const Nl=new Wn({color:"#ffffff"}),iy=new me(Cf,Nl),ry=new me(ny,Nl),sy=new me(Cf,Nl);zi.add(iy);ki.add(ry);Nr.add(sy);const Co=new Pe,oy=1,Po=new Float32Array(oy*3);Po[0]=0;Po[1]=0;Po[2]=0;Co.setAttribute("position",new yn(Po,3));const hi=new xh;hi.size=32;hi.sizeAttenuation=!0;hi.color=new Yt("#ffffff");hi.transparent=!0;hi.alphaMap=ey;const il=new hl(Co,hi),rl=new hl(Co,hi),sl=new hl(Co,hi);zi.add(il);ki.add(rl);Nr.add(sl);const Gi=new ze;Il.load("fonts/helvetiker_regular.typeface.json",r=>{const t=new Ul("DE-TOX",{font:r,size:.1,height:.01,curveSegments:12,bevelEnabled:!1,bevelThickness:.01,bevelSize:.02,bevelOffset:0,bevelSegments:5}),e=new Wn,n=new me(t,e);Gi.add(n),n.position.y=-.05,n.position.x=-.25});const Pf=new ms(.6,.15),Ol=new Wn({color:"#000"}),ay=new me(Pf,Ol),Fl=580;Gi.position.z=.009;Gi.position.x=-Math.cos(Fl/200*4)*Be;Gi.position.y=-Math.sin(Fl/200*4)*Be;Gi.rotation.z=Fl*.02+Math.PI*.5;Gi.add(ay);ki.add(Gi);const Hi=new ze;Il.load("fonts/helvetiker_regular.typeface.json",r=>{const t=new Ul("A-OX",{font:r,size:.1,height:.01,curveSegments:12,bevelEnabled:!1,bevelThickness:.01,bevelSize:.02,bevelOffset:0,bevelSegments:5}),e=new Wn,n=new me(t,e);Hi.add(n),n.position.y=-.05,n.position.x=-.17});const ly=new ms(.45,.15),cy=new me(ly,Ol),Bl=190;Hi.position.z=.009;Hi.position.x=-Math.cos(Bl/200*4)*Be;Hi.position.y=-Math.sin(Bl/200*4)*Be;Hi.rotation.z=Bl*.02+Math.PI*.5;Hi.add(cy);zi.add(Hi);const Vi=new ze;Il.load("fonts/helvetiker_regular.typeface.json",r=>{const t=new Ul("RE-NEW",{font:r,size:.1,height:.01,curveSegments:12,bevelEnabled:!1,bevelThickness:.01,bevelSize:.02,bevelOffset:0,bevelSegments:5}),e=new Wn,n=new me(t,e);Vi.add(n),n.position.y=.15,n.position.x=-.22,n.position.z=-.0015,n.rotation.x=5});const ys=new me(Pf,Ol);ys.rotation.x=5;ys.position.x=.019;ys.position.y=.1;ys.position.z=-.025;const zl=875;Vi.position.z=.009;Vi.position.x=-Math.cos(zl/200*4)*Be;Vi.position.y=-Math.sin(zl/200*4)*Be;Vi.rotation.z=zl*.02+Math.PI*.5;Vi.add(ys);Nr.add(Vi);zi.rotation.y=-Math.PI*.25;zi.rotation.x=-Math.PI*.25;ki.rotation.y=Math.PI*.25;ki.rotation.x=-Math.PI*.25;Nr.rotation.x=Math.PI*.5;Rf.add(zi,ki,Nr);vs.add(Rf);new Ux;new Lx;const Hu=Cr.width/Cr.height,bn=new hh(-3*Hu,3*Hu,4,-4,.1,100);bn.position.x=0;bn.position.y=1;bn.position.z=3;bn.lookAt(new G);vs.add(bn);const Lo=new _h({canvas:nl,antialias:!0});Lo.setSize(Cr.width,Cr.height);Lo.setPixelRatio(Math.min(window.devicePixelRatio,2));Lo.render(vs,bn);const uy=new Px;gs.fromTo(ki.scale,{y:1,x:1},{y:1.005,x:1.005,duration:1.5,delay:.5,yoyo:!0,repeat:-1,ease:"sine.inOut"});gs.fromTo(zi.scale,{y:1,x:1},{y:1.005,x:1.005,duration:1.7,delay:1,yoyo:!0,repeat:-1,ease:"sine.inOut"});gs.fromTo(Nr.scale,{y:1,x:1},{y:1.009,x:1.009,duration:1.4,delay:1.5,yoyo:!0,repeat:-1,ease:"sine.inOut"});gs.fromTo(Ro.scale,{y:1,x:1},{y:1.039,x:1.039,duration:1.9,delay:.1,yoyo:!0,repeat:-1,ease:"sine.inOut"});const Lf=()=>{const r=uy.getElapsedTime(),t=Qv;console.log(t),il.position.x=Math.cos(r/t*4)*Be,il.position.y=Math.sin(r/t*4)*Be,rl.position.x=-Math.cos(r/t*4)*Be,rl.position.y=-Math.sin(r/t*4)*Be,sl.position.x=-Math.cos(r/t*4)*Be,sl.position.y=-Math.sin(r/t*4)*Be,bn.position.x=_o.x*2,bn.position.y=_o.y*.4+1,bn.lookAt(new G),Lo.render(vs,bn),window.requestAnimationFrame(Lf)};Lf();
//# sourceMappingURL=index.js.map
