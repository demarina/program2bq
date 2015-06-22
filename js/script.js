$(document).ready(function(){
	$("input").focus(function(){
		if($(this).attr("type") == "text")
			$(this).parent().parent().addClass("active");
			}).blur(function(){
				if($(this).val() == "")
					$(this).parent().parent().removeClass("active");
			})

});