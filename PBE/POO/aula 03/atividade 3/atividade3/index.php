<?php

class fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}

class motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class modelo {
    public $modelo;
    public $ano;
    public $fabricante;
    public $motor;

    public function __construct($modelo, $ano, fabricante $fabricante, motor $motor){
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }
}

$fabricante = new fabricante("Honda", "Japão");
$motor= new motor("150cv", "Flex");

$modelo = new modelo("Civic", "2024", $fabricante, $motor);

echo " O modelo é: " . $modelo->modelo . " | Ano de fabricação: " . $modelo->ano . "<br><br>";
echo "Fabricante: " . $modelo->fabricante->nome . " | País de fabricação: " . $modelo->fabricante->paisOrigem . "<br><br>";
echo "Potência do modelo: " . $modelo->motor->potencia . " | Combustível do modelo: " . $modelo->motor->combustivel;

?>