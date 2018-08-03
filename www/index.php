<?php header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");?>
<!DOCTYPE HTML>
<html>
<head>
	<title>mericsoft - klavye pratik</title>
	<meta charset="utf-8">
	<meta name="description" content="klavye pratik uygulaması">
	<link rel="stylesheet" href="stil/stil.css">
	<link rel="icon" href="">
	<script src="js/mericsoft_ajax.js"></script>
	<script src="js/mericsoft_proto.js"></script>
	
</head>
<body oncontextmenu="return false;">
	<!--<footer> 
		<img src="resim/mericsoft.svg"/>
		<span> MERICSOFT - KLAVYE TEST </span>
	</footer>-->
	<div id="yazigelen" class="kutular">
		<textarea id="yazikaynak" ></textarea>


	</div>
	<div id="yaziyaz" class='kutular'>
		<textarea id="yaziarea" ></textarea>


	</div>

	<div id="butonlar" class="butonlar">
		<button id="yaziyukle">metin yükle</button>
		<button id="sifirla" >sıfırla</button>
		<button id="yorumla" >analiz et</button>
		<span id="sureyaz" > süre : </span>
	</div>
	<div id="dosyalist" class="gizle"></div>
	<div id="analiz" class="gizle">
		<h1 id="analizbaslik"></h1>
		<div id="analizsay"></div>
		<div id="analizliste"></div>
		<div id="analizkapat">kapat </div>
	</div>
<script src="js/islem.js"></script>
</body>
</html>