
function init(){
	//variables
	var resultado=document.getElementById("resultado");
	var uno=document.getElementById("uno");
	var dos=document.getElementById("dos");
	var tres=document.getElementById("tres");
	var cuatro=document.getElementById("cuatro");
	var cinco=document.getElementById("cinco");
	var seis=document.getElementById("seis");
	var siete=document.getElementById("siete");
	var ocho=document.getElementById("ocho");
	var nueve =document.getElementById("nueve");
	var cero=document.getElementById("cero");
	var dividir=document.getElementById("dividir");
	var multiplicar=document.getElementById("multiplicar");
	var restar=document.getElementById("restar");
	var sumar=document.getElementById("sumar");
	var igual=document.getElementById("igual");
	var borrar=document.getElementById("borrar");

	uno.onclick= function(e){
		resultado.textContent= resultado.textContent + "1";
	}
	dos.onclick= function(e){
		resultado.textContent= resultado.textContent+"2";

	}
	tres.onclick= function(e){
		resultado.textContent= resultado.textContent+"3";

	}
	cuatro.onclick= function(e){
		resultado.textContent= resultado.textContent+"4";

	}
	cinco.onclick= function(e){
		resultado.textContent= resultado.textContent+"5";

	}
	seis.onclick= function(e){
		resultado.textContent= resultado.textContent+"6";

	}
	siete.onclick= function(e){
		resultado.textContent= resultado.textContent+"7";

	}
	ocho.onclick= function(e){
		resultado.textContent= resultado.textContent+"8";

	}
	nueve.onclick= function(e){
		resultado.textContent= resultado.textContent+"9";

	}
	cero.onclick= function(e){
		resultado.textContent= resultado.textContent+"0";
	}
	borrar.onclick= function(e){
		resetear();
	}
	sumar.onclick= function(e){
		resultado.textContent=resultado.textContent+"+";
	}
	restar.onclick= function(e){
		resultado.textContent=resultado.textContent+"-";
	}
	multiplicar.onclick= function(e){
		resultado.textContent=resultado.textContent+"*";
	}
	dividir.onclick= function(e){
		resultado.textContent=resultado.textContent+"/";
	}
	igual.onclick= function(e){
		resultado.textContent=eval(resultado.textContent);
	}
}


function resetear(){
	resultado.textContent="";
}
function color(x){
	x.style.background="#FFA07A";
}
function fondo(x){
	x.style.background="white";
}
