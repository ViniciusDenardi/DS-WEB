<?php
    abstract class Animal {
    public function fazerSom(){}
    public function mover(){
    return "anda";
    }
}
    class Sapo extends Animal {
    public function fazerSom() {
    echo "croac croac!";
}
}

    class Cavalo extends Animal {
    public function fazerSom() {
    echo "iiirrrrí, rilinchin!";
}
    public function mover(){
    return "Galopa e " . parent::mover();
}
}

    class Tartaruga extends Animal {
    public function fazerSom() {
    echo "grunidos!";
}
}
    $sapo = new Sapo();
    echo $sapo->fazerSom() . "<br>";
    echo $sapo->mover() ."<br>";
    echo "-------------------------<br/>";

    $cavalo = new Cavalo();
    echo $cavalo->fazerSom() ."<br>";
    echo $cavalo->mover() ."<br>";
    echo "-------------------------<br/>";

    $tartaruga = new Tartaruga() ;
    echo $tartaruga->fazerSom() ."<br>";
    echo $tartaruga->mover() ."<br>";
    echo "-------------------------<br/>";
?>

