var ajax=function (a){
	var that = this;
	if(window.XMLHttpRequest){
		that.req = new XMLHttpRequest();
	}else{
		that.req= new ActiveXObject("Microsoft.XMLHTTP");  
	}	
	that.hedef = a.hedef;
	that.sorgu = a.sorgu;
	that.metot= a.metot; //1 get 2 post
	that.senkron=a.senkron;
	that.don=a.don;
	that.hata=a.hata;	
		
	that.req.onreadystatechange = function () {
		if(that.req.readyState==4 && that.req.status==200){
			a.don();		
		}
	}
	that.req.onerror=function(){that.hata();}
	switch (that.metot){
	case 1:
		that.req.open("get",that.hedef,that.senkron);
		that.req.send();
	break;
	case 2:
		that.req.open("POST",that.hedef,that.senkron);
		that.req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		that.req.send(that.sorgu);
	break;
	}
}

var dupload = function (a) {
	var that = this;
	that.dosya = a.dosya;
	that.hedef = a.hedef;
	that.isim= a.isim;
	that.don =a.don;
	that.hata= a.hata;
	that.ajx = new XMLHttpRequest();
	that.fdata = new FormData();
	that.fdata.append(that.isim,that.dosya);
	that.ajx.onreadystatechange = function () {
		
		if(that.ajx.readyState==4 && that.ajx.status==200){
			that.don();		
		}
	}
	that.ajx.onerror=function(){that.hata();}
	this.ajx.open("POST",this.hedef,true);
	this.ajx.setRequestHeader("enctype","multipart-form-data");
	this.ajx.send(this.fdata);
}

function ajaxmesaj(msj){ //ajax dönüş mesajı, al her yerde kullan
	document.yeni({tur:'div', ust:msj.ust,oz:{id:msj.id,class:'mesaj'},ic:msj.ic});
	setTimeout(function(){elm(msj.id).sil();},msj.sure);
}