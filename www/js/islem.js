
/***** http://mericsoft.com *****/

//olay dinleyiciler //
sure=0;  //timer başlangıç
elm("yaziarea").olay("input",function(){  //yazmaya başlayınca timer çalışsın
	if(this.value.length==1){  //ilk tiklama ile timer tetiklensin
		elm("sureyaz").innerHTML="sure : "+sure;  //sureyi bas
		 t=setInterval(function(){ //saniyelik döngü
		 	sure++;
		 	elm("sureyaz").innerHTML="sure : "+sure;
			if(sure>179){  //3 dk olunca süreyi durdur klavye sınavlarında süre bu
			clearInterval(t);
			this.disabled=true; //ayrıca yazı yazamasın
			}
		},1000);
	} else{
		if(sure>179){this.disabled=true;}  // disabled tekrar
	}
});

elm("sifirla").olay("click",function(){  //sıfırla butonuna basınca süreyi sıfırlaacağız
	clearInterval(t);
	sure=0;
	elm("sureyaz").innerHTML="sure : "+sure;
	elm("yaziarea").value='';
	elm("yaziarea").disabled=false;
}
);



elm("yaziyukle").olay("click",function(){  //metin klasöründen hazır yazıların listesini yükle
	var dosyalist=new ajax({              // çekimleri ajax ile yapacağız bknz:mericsot_ajax.js
	hedef:"mvc/kontrol.php?dokum=null",
	metot:1,   // 1 ise get 2 ise post
	senkron:true,
	don:function(){
		var dosyalar=JSON.parse(dosyalist.req.responseText);
		if(dosyalar.length==0){
			alert("dosya yok");
		}else{
			elm("dosyalist").className='goster';  //ilk yüklemede bu gizli şimdi görünür yapıyoruz
			var bas="<div id='dosyakapat'>x</div>";
			for (var i=0;i<dosyalar.length;i++){
				bas+="<div class='dosyalar' onclick='yaziyukle(this.innerHTML)'>"+dosyalar[i]+"</div>";
			}
			elm("dosyalist").innerHTML=bas;
			elm("dosyakapat").olay("click",function()	{
				elm("dosyalist").className='gizle';  //kapat kelimesine tıklayınca div gizlenecek
				elm("dosyalist").innerHTML='';
				
			});
		} //else son

	} //don function son



	}); //ajax son
	
}); //yaziyukle olay son


// dosyalar klasöründen yazı yükleme
function yaziyukle(dosya){   //listeden dosya ismine tıklandımı yazı soldaki textarea'ya gelecek
	var al= new ajax({
		hedef:"metinler/"+dosya,
		metot:1,
		senkron:true,
		don:function(){
			elm("yazikaynak").value=al.req.responseText;
			elm("dosyalist").className='gizle';  //soldaki modal dosyalar listesi gizlensin
		}
	});

	
}


// öğrencinin yazılarını yorumlamak istiyoruz  //
// kaç vuruş yapmış, kaçı hatalı, oran ne, ve hangi kelimeler hatalı yazılmış //
elm("yorumla").olay("click",function(){  
	var reg=/[,\.\'\"\-\_\!\?]/gm;  // bunları yüklenen metinde varsa da temizleyecek klavye sınavlarında öyle çünkü
	var gelen=elm("yazikaynak").value.replace(reg,""); // yüklenen metinden yukarıdaki listeyi temizle
	gelen= gelen.kucukTurkce(); // metni türkçe karakterlere uygun bir şekilde lowerCase yap bknz: mericsoft_proto.js
	gelen=gelen.replace(/\n/gm,' '); // enter tuşu ile açılan boşluklar varsa bunları whitespace yap klavye sınavlarına özel
	gelen=gelen.split(" "); // yüklenen metni whitespace'e göre katara çevir
	var yazilan=elm("yaziarea").value.toLowerCase(); // şimdi sağ tarafta kendi yazdığımızı küçük harf yap
	yazilan=yazilan.split(" "); // kendi yazdığımızı katara çevir
	var say=0; // hatalı kelimeyi bulacağız
	var hatali=''; 
	var gelenyeni=[];
	var d=0;
	while(d<gelen.length){ // eğer yüklenen metinde tamamen boş bir katar elemanı varsa yksayacak
		if(gelen[d].length>0){
			gelenyeni.push(gelen[d]);  // boş olmayanları gelenyeni katarına aktar
		}


		d++;
	}
	
	// sağdaki katarın uzunluğu kadar soldaki katar elemanları ile karşılatır
	for(var i=0;i<yazilan.length;i++){
		gelenyeni[i].replace(/\s /g,''); //whitespaceleri temizlemek gerekiyor eleman içinde			
		if(yazilan[i]!=gelenyeni[i]){  // her bir elemanda uymayan varsa
			say++;                      // sayıyı bir arttır hatalı yazı sayısı
			hatali+="..."+yazilan[i]+'... <br/> '; // hatalı kelimeleri listeye ekle
		}
		
	}
	
	elm("analizbaslik").innerHTML="ANALİZ SONUCU";
	elm("analizsay").innerHTML= "toplam "+yazilan.length+" adet kelime içinde "+say+" hata";
	elm("analizsay").innerHTML+="<br/> hata oranı : "+Math.round(100/(yazilan.length/say))+"%";
	elm("analizliste").innerHTML=hatali;
	elm("analiz").className="goster";
	elm("analizkapat").olay("click",function(){
		elm("analiz").className="gizle";
		elm("analizsay").innerHTML='';
		elm("analizliste").innerHTML='';	
	})
});
