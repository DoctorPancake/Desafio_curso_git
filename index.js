var texto = document.getElementById('numeros');
var boton = document.getElementById("boton");


boton.addEventListener("click", fibonacci);

function fibonacci()
{
  var suceciones = texto.value;
  var var1 = 0;
  var var2 = 1;
  var var3;

  document.write(var1 + "<br>");
  document.write(var2 + "<br>");

  for(var i=3; i<= suceciones; i++)
  {
    var3 = var1 + var2;
    var1 = var2;
    var2 = var3;
    document.write(var3 + "<br>");
  }
}
