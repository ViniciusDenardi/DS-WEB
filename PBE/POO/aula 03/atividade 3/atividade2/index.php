<?php

class artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero) {
        $this->nome = $nome;
        $this->genero = $genero;
    }
}

class musica {
    public $titulo;
    public $duracao;
    public $artista;

    public function __construct($titulo, $duracao, artista $artista){
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }
}

$artista = new artista("Queen", "Rock");

$musica = new musica("Bohemian Rhapsody", "5:55", $artista);

echo "Nome da Música: " . $musica->titulo . " | Duração: " . $musica->duracao . "<br><br>";
echo "Nome do Artista: " . $musica->artista->nome . " | Gênero: " . $musica->artista->genero;

?>