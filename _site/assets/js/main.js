$(function(){
	slideMovement(1000);
});

function slideMovement(){
	$(".slide-figure").first().addClass("active-slide");
	$(".slide-mobile-control span").first().addClass("active-slide");

	$(".slide-mobile-control span").click(function(){

		var $this = $(this), // elemento seleccionado
			$siblings = $this.parent().children(), // hermano del elemento
			position = $siblings.index($this); // pasar al siguiente

		$(".slide-figure").removeClass("active-slide").eq(position).addClass("active-slide");//remueve clases 
		$siblings.removeClass("active-slide"); //remueve clases a los hermanos
		$this.addClass("active-slide");		//le añade al hermano de la actual posición	
	});

}