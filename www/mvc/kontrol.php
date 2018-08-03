<?php 
include ("metinmodel.php");
Metintest::tek();  //singleton pattern kullandık
Metintest::tek()->klasor='../metinler/';
if(isset($_REQUEST["dokum"]))
	echo json_encode(Metintest::tek()->dok());
if(isset($_REQUEST["dosya"])){  //bunu kullanmadık yerine ajax ile doğrudan metin dosyasını çağırdık
	$ac=fopen(Metintest::tek()->klasor.$_REQUEST["dosya"],"r");
	echo fread($ac, 1024) or die("böyle bir dosya yok");
}
