$(document).ready(function(){
		$("a#login").click(function(){$(".modal").modal();});
		$("marquee").hover(function(){this.stop();},function (){this.start();});
		$("li#flip1").click(function(){$("div#flip1").slideToggle("slow");});
		$("li#flip2").click(function(){$("div#flip2").slideToggle("slow");});
		$("li#flip3").click(function(){$("div#flip3").slideToggle("slow");});
		$("li#flip4").click(function(){$("div#flip4").slideToggle("slow");});
		$('.tabs a:first').tab('show');
		
});