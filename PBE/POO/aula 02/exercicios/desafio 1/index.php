<?php
    abstract class Produto {
    public $nome = "Chocolate";
    public $preco = 17;
    public $estoque = 10;
    
    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->preco . "<br/>";
        echo $this->estoque . "<br/>";
        }
    public function calcularDesconto(){}
}
  
    class Eletronico extends Produto {
    public $nome = "Celular";
    public $preco = 1700;
    public $estoque = 3;

    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->preco . "<br/>";
        echo $this->estoque . "<br/>";
        }
    public function calcularDesconto() {
        $desconto1 = $this->preco - ($this->preco * 0.10);
        if ($this->estoque < 5) {
        $descontofinal = $desconto1 - ($this->preco * 0.10);
    } else {
        $descontofinal = $desconto1;
    }
    return "O preço final é " . $descontofinal ;
}
}
    class Roupas extends Produto {
    public $nome = "Moletom";
    public $preco = 10;
    public $estoque = 1;

    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->preco . "<br/>";
        echo $this->estoque . "<br/>";
        }
    public function calcularDesconto() {
         $desconto2 =  $this->preco -($this->preco * 0.20 );
          if ($this->estoque < 5) {
        $descontofinal2 = $desconto2 - ($this->preco * 0.10);
    } else {
        $descontofinal2 = $desconto2;
    }
    return "O preço final é " . $descontofinal2 ;
}
       
    
}
    
    /*$produto = new Produto(); Não pode instanciar classe abstrata - para eu lembrar erro depois
     echo $produto->verDados(). "<br>";*/


    $eletronico = new Eletronico();
     echo $eletronico->verDados(). "<br>";
     echo $eletronico->calcularDesconto(). "<br>";
     echo "-------------------------<br/>";

    $roupa = new Roupas();
     echo $roupa->verDados(). "<br>";
     echo $roupa->calcularDesconto(). "<br>";
     echo "-------------------------<br/>";


?> 