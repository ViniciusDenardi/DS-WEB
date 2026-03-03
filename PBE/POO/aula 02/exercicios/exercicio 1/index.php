<?php
    class Pessoa {
        public $nome = "Vinicius";
        public $idade = 17;
       

        public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
      
    }
    }
     class Funcionario extends Pessoa {
        public $nome = "Gaby";
        public $idade = 13;
        protected $salario = 1300;

        public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->salario . "<br/>";
        }
        public function CalcularBonus(){
        return "Seu salário é 1300 sem bonus";

     }
     }
     class Gerente extends Funcionario {

        public $nome = "Sofia";
        public $idade = 124;
        

        public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
       
        }
        public function CalcularBonus(){
        return "Seu salário é" . 1300 * 1.20;
}
     }
     class Desenvolvedor extends Funcionario {
        
        public $nome = "Rene";
        public $idade = 14;
      

        public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        
        }
        public function CalcularBonus(){
        return "Seu salário é" . 1300 * 1.10;
}
     }

$Vinicius = new Pessoa();
echo $Vinicius->verDados() . "<br/>";
echo "-------------------------<br/>";
$Rene = new Funcionario();
echo $Rene->verDados() . "<br/>";
echo $Rene->CalcularBonus() . "<br/>";
echo "-------------------------<br/>";
$Gaby = new Gerente();
echo $Gaby->verDados() . "<br/>";
echo $Gaby->CalcularBonus() . "<br/>";
echo "-------------------------<br/>";
$Sofia = new Desenvolvedor();
echo $Sofia->verDados() . "<br/>";
echo $Sofia->CalcularBonus() . "<br/>";
echo "-------------------------<br/>";
?>
