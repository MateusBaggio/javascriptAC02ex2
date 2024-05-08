/Um banco concede um crédito de empréstimo pré aprovado baseado 
//no saldo médio em contado seu cliente. Para saber qual é o crédito disponível, leia o saldo médio
//do cliente e aplique a seguinte condição
// Saldo até 1300,00 - 20%
// maior que 1300,00 até 3000,00 - 30%
// Maior que 3000,00 até 8000,00 - 45%
// Maior que 8000,00 até 10.000,00 - 50%
// Acima de 10.000,00 - 60%

function verificar(){
        saldo = document.getElementById("saldo").value;
        vinte = saldo*0.20;
        trinta = saldo*0.30;
        quarentaecindo = saldo*0.45;
        cinquenta = saldo*0.50;
        sessenta = saldo*0.60;
        
        if (saldo <= 1300.00){
            document.getElementById("resposta").innerHTML=`O valor do seu crédito é de ${vinte}`;
        }
        else if (saldo > 1300.00 && saldo <= 3000.00){
            document.getElementById("resposta").innerHTML=`O valor do seu crédito é de ${trinta}`;
        }
        else if (saldo > 3000.00 && saldo <= 8000.00){
            document.getElementById("resposta").innerHTML=`O valor do seu crédito é de ${quarentaecindo}`;
        }
        else if (saldo > 8000.00 && saldo <= 10000.00){
            document.getElementById("resposta").innerHTML=`O valor do seu crédito é de ${cinquenta}`;
        }
        else {
            document.getElementById("resposta").innerHTML=`O valor do seu crédito é de ${sessenta}`;
        }
}
