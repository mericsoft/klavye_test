<?php
class Metintest{
	private static $tekil; //singleton değişken
	public $klasor; //klasörümüz bu olacak;
	private function __construct(){}  // boş kalacak

	public static function tek(){
		if(!isset(self::$tekil))
			return self::$tekil=new Metintest;
		else
			return self::$tekil;
	}	

	public function dok(){
		chdir($this->klasor);
		return glob("*.txt");

	}

	public function say(){
		return count($this->dok());  //bunu kullanmadık ama pratik yapmak açısından ekledik
	}

	
}