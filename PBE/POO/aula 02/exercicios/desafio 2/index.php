<?php
class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($n) {
        $this->numero = $n;
    }
}

class CPF extends Documento {

    public function validar() {

       
        $cpf = preg_replace('/[^0-9]/', '', $this->getNumero());

       
        if (strlen($cpf) != 11) {
            return false;
        }

        
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

       
        for ($t = 9; $t < 11; $t++) {

            $soma = 0;
            for ($i = 0; $i < $t; $i++) {
                $soma += $cpf[$i] * (($t + 1) - $i);
            }

            $digito = ((10 * $soma) % 11) % 10;

            if ($cpf[$t] != $digito) {
                return false;
            }
        }

        return true;
    }
}


$doc = new CPF();
$doc->setNumero("111.444.777-35"); 

if($doc->validar()){
    echo "CPF válido"; }
else {
    echo "CPF inválido";
    }
echo "<br/>";
echo $doc->getNumero();
?>