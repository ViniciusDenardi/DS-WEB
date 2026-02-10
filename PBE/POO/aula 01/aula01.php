<?php
    class Pessoa {
        public $nome;//atributo
        public function falar() { //metodo
            return "O meu nome é ".$this->nome;
        }
    }


    $Vinicius = new Pessoa();
    $Vinicius->nome = "Vinicius Denardi";
    echo $Vinicius->falar();
?>