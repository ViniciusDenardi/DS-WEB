<?php
    class avião {
        public $cor;
        public $tamanho;
        public $modelo;
        public $marca;
        public $capacidade;
        
        public function voar() { 
            return "<br>O aviao do modelo ".$this->modelo . " voou";
        
        }
     

         public function pousar() { 
            return "<br>O aviao de marca  ". $this->marca . " pousou";

       

        }
         public function transportar() { 
            return "<br>Transportou  ". $this->capacidade . " pesssoas";

     
        }
    }

        $Airbus_A320 = new avião();
        $Airbus_A320->modelo = "Airbus A320";
        echo $Airbus_A320->voar();

        $Airbus = new avião();
        $Airbus->marca = "Airbus";
        echo $Airbus->pousar();

        $capacidade = new avião();
        $capacidade->capacidade = "50";
        echo $capacidade->transportar();

        echo "<hr>";


     class ar_condicionado {
        public $potencia;
        public $modelo;
        public $marca;
        public $material;
        public $voltagem;


         public function resfriar() { 
            return " <br>O ar de modelo   ".$this->modelo . " resfriou a temperatura" ;
        }
         public function esquentar() { 
            return "<br>A temperatura esquentou por conta da ".$this->potencia . " potencia do ar";
        }
         public function ligar() { 
            return "<br>O ar de marca  ".$this->marca . " ligou";
        }
    }


        
        $Split  = new ar_condicionado();
        $Split ->modelo = " Split ";
        echo $Split ->resfriar();

        $ar_7500  = new ar_condicionado();
        $ar_7500 ->potencia = "7.500";
        echo $ar_7500 ->esquentar();

        $Samsung = new ar_condicionado();
        $Samsung->marca = "Samsung";
        echo $Samsung->ligar();

        echo "<hr>";

     class cadeira {
        public $material;
        public $modelo;
        public $marca;
        public $cor;
        public $tamanho;


         public function apoiar() { 
            return "<br>A cadeira de  ".$this->material . " foi apoiada";
        }
         public function segurar() { 
            return "<br>A cadeira ".$this->cor . " segurou";
        }
         public function comportar() { 
            return "<br>A cadeira de marca  ".$this->marca . " comportou";
        }
    }

      
        $cadeiramadeira  = new cadeira();
        $cadeiramadeira ->material = " madeira ";
        echo $cadeiramadeira ->apoiar();

        $cadeiramarrom  = new cadeira();
        $cadeiramarrom ->cor = "marrom";
        echo $cadeiramarrom ->segurar();

        $Herman_Miller = new cadeira();
        $Herman_Miller->marca = "Herman Miller";
        echo $Herman_Miller->comportar();

        echo "<hr>";
     class corretivo {
        public $capacidade;
        public $modelo;
        public $marca;
        public $cor;
        public $tamanho;


         public function apagar() { 
            return "<br>O corretivo de marca  ".$this->marca . " apagou";
        }
         public function corrigir() { 
            return "<br>O corretivo de capacidade  ".$this->capacidade . " corrigiu";
        }
         public function remover() { 
            return "<br>O corretivo ".$this->tamanho . " removeu 50 palavras";
        }
    }

        $Tilibra  = new corretivo();
        $Tilibra ->marca = " Tilibra ";
        echo $Tilibra ->apagar();

        $corretivo18_mL  = new corretivo();
        $corretivo18_mL ->capacidade = "18mL";
        echo $corretivo18_mL ->corrigir();

        $corretivogrande = new corretivo();
        $corretivogrande->tamanho = "grande";
        echo $corretivogrande->remover();

        echo "<hr>";

     class tomada {
        public $voltagem;
        public $modelo;
        public $marca;
        public $material;
        public $tamanho;


         public function carregar() { 
            return "<br>A tomada de ".$this->voltagem . " carregou o celular";
        }
         public function transportar() { 
            return "<br>A tomada de marca  ".$this->modelo . " transportou energia";
        }
         public function ligar() { 
            return "<br>O celular foi ligado na tomada  ".$this->tamanho;
        }
    }

        $tomada110v  = new tomada();
        $tomada110v ->voltagem = " 110V ";
        echo $tomada110v ->carregar();

        $tramontina  = new tomada();
        $tramontina ->modelo = "tramontina";
        echo $tramontina ->transportar();

        $tamanho10A  = new tomada();
        $tamanho10A->tamanho = "10A ";
        echo $tamanho10A->ligar();

        echo "<hr>";
   
?>