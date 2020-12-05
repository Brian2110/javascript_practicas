function texto(){
    document.getElementById('Texto3').innerHTML =
     "Texto cambiado desde un archivo externo ";
}
function visualizar(){
    document.getElementById('texto4').innerHTML = 
    5 + 6; 
} 
function doble(){
    document.getElementById("doble1").innerHTML =
    "Hola brian";
    document.getElementById("doble2").innerHTML =
    "¿como estas?";
}
function operador()
{
    var text1 = "Brian";
    var text2 = "Edrei";
    
    document.getElementById("nombre").innerHTML =
     text1 + "  " +  text2;
}
function comparacion(){
    var X = 10; var Y = 20; var Q = 30; var R = 40; 

    result = ( X == Y ); result2 = ( Y < Q ); result3 = (Q > R);
    document.write(

        '10 es igual a 20 = '+ result ,'<br>',
        '20 es menor que 30 = '+ result2 ,'<br>',
        '30 es mayor que 40 = '+ result3,'<br>'

        );
}

function Logicos(){

    var a = true; var b = false;

    result = (a && b); result2 = (a || b); result3 = (!(a && b));
    document.write('operador Y'+result,'<br>','operador O'+ result2,'<br>','operador negativo'+result3);
}
function bit(){

    var a = 2; var b = 3; var line = '<br>';

    result = ( a&b ); result2 = ( a|b ); result3 = ( a^b ); result4 = (~b); result5 = ( a<<b );
    result6 = ( a>>b ); 
    document.write(result, line, result2, line, result3, line, result4, line, result5, line, result6);
}
function asignacion(){

    var a = 23; var b = 10; var line = '<br>';

    result = ( a=b ); result2 = ( a+=b ); result3 =  ( a-=b ); result4 = ( a*=b );
    result5 = ( a/=b ); result6 = ( a%=b );

    document.write(result, line, result2, line, result3, line, result4, line, result5, line, result6);
}
function miscelanio() {
    
    var a = 10; var b = 20; var line = '<br>';
    result =( a > b ) ?  100:200;

    document.write(result);
}
function ciclos(){

    var  acepto = '20';
    
    if (acepto = 18)
    {
        document.getElementById('resultado').innerHTML = "El valor es mayor a 18";
    }
}