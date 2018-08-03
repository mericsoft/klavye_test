
var _=function(ad){
	var a= document.querySelector(ad);
	return a;
}


/* id,name ve tag ile çekme*/
var elm = function (i){
	var a = document.getElementById(i);
	return a	;
}

var isim = function (i) {
	var a= document.getElementsByName(i);
	return a;
}

var tag = function (i) {
	var a=document.getElementsByTagName(i);
	return a;
}
/*  ////////////////////       */

*/ documan prototipleri */
Document.prototype.yeni=function (a) {
	var yap= this.createElement(a.tur);
	elm(a.ust).appendChild(yap);
	if(a.oz){
		for(key in a.oz){
			yap.setAttribute(key,a.oz[key]);		
		}
	}	
	if(a.ic){
		var mtn=this.createTextNode(a.ic);
		yap.appendChild(mtn);		
	}	
	if(a.once){
		var once= elm(a.ust).insertBefore(yap,elm(a.once));
	}
	if(a.sonra){
		var sonra = elm(a.ust).insertBefore(yap,elm(a.sonra).nextSibling);	
	}
	
}


String.prototype.kucukTurkce = function(){ //thanks to Şahin Çetinkaya
	var string = this;
	var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
	string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })
	return string.toLowerCase();
}	

//document ie uyumluluk //
HTMLDocument.prototype.yeni=function (a) {
	var yap= this.createElement(a.tur);
	elm(a.ust).appendChild(yap);
	if(a.oz){
		for(key in a.oz){
			yap.setAttribute(key,a.oz[key]);		
		}
	}	
	if(a.ic){
		var mtn=this.createTextNode(a.ic);
		yap.appendChild(mtn);		
	}	
	if(a.once){
		var once= elm(a.ust).insertBefore(yap,elm(a.once));
	}
	if(a.sonra){
		var sonra = elm(a.ust).insertBefore(yap,elm(a.sonra).nextSibling);	
	}
	
}


/* element prototipleri */

Element.prototype.sil=function () {
	this.parentNode.removeChild(this)
	}


Element.prototype.bosalt= function () {
	var say = this.childNodes;
	
	//if (say.length>0) {
		for(var i=0;i<say.length;i++){
			this.removeChild(say[i]);		 
		} 
	//}
}

Element.prototype.olay= function (olayad,fonksiyon) {
	var atac= "on"+olayad;
	var ekle= this.addEventListener||this.attachEvent ? this.addEventListener(olayad,fonksiyon,false):this.attachEvent(atac,fonksiyon);
}

Element.prototype.olaysil= function (olayad,fonksiyon)
{
	var atac="on"+olayad;
	var sil= this.removeEventListener?this.removeEventListener(olayad,fonksiyon,false):this.detachEvent(atac,fonksiyon);

}

	
	
/*formdan sonuc kutuları çek */
var kutucek = function(kutuisim,isaret)
{
	var a= document.getElementsByName(kutuisim);
	var i;
	var al="";
	for(i=0;i<a.length;i++){
		if(a[i].checked==true){al+=a[i].value+isaret;}	
	}
	
	var uz= (al.length)-1;
	var al2=al.substr(0,uz);
	return al2;
}

/* formdan tüm verileri al*/
var formal=function (formad,ayrac) {
	var a= document.getElementsByName(formad);
	var i;
	var al="";
	for(i=0;i<a.length;i++){
		al+=a[i].value+ayrac;
	}
	var uz= (al.length)-1;
	var al2=al.substr(0,uz);
	return al2;
}

var jsonyap=function(formad){
	var a= document.getElementsByName(formad);
	var b=[];
	for(var i=0;i<a.length;i++){
		b.push(a[i].value);
	}
	return JSON.stringify(b);

}

//tarih işlemleri
	function tarih() {
		var d= new Date();
		var g= parseInt(d.getDate())<10 ? "0"+parseInt(d.getDate()):parseInt(d.getDate());
		var m=parseInt(d.getMonth()+1)<10 ? "0"+parseInt(d.getMonth()+1):parseInt(d.getMonth()+1);
		return g+'.'+m+'.'+d.getFullYear();
	}





