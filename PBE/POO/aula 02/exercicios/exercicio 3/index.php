<?php
    class Veiculo {
        public $marca = "Honda";
        public $modelo = "Civic";
        private $velocidade ;
       

       public function getNumero() {
        return $this->velocidade;


}
      public function setNumero($n) {
       $this->velocidade = $n;
}
    }
   
     class Carro extends Veiculo {
        public $marca = "Honda";
        public $modelo = "Civic";
        private $velocidade ;

        public function acelerar(){
        echo "Acelere com o pé";
        }
       
     }
     
     class Motos extends Veiculo {

        public $marca = "Honda";
        public $modelo = "Civic";
        private $velocidade;
        

        public function acelerar(){
        echo "Acelere com o guidão";
        }
        }
       
     

$veiculo = new Veiculo();
echo $veiculo->setNumero(120) . "<br/>";
echo "Velocidade do veículo: " . $veiculo->getNumero() . "<br/>";
echo "-------------------------<br/>";
$carro = new Carro();
echo $carro->acelerar() . "<br/>";
echo $carro->setnumero(120) . "<br/>";
echo "Velocidade do veículo: " . $carro->getNumero() . "<br/>";
echo "-------------------------<br/>";
$moto = new Motos();
echo $moto->acelerar() . "<br/>";
echo $moto->setNumero(80) . "<br/>";
echo "Velocidade do veículo: " . $moto->getNumero() . "<br/>";
echo "-------------------------<br/>";

?>
