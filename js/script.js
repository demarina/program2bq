$(document).ready(function(){
	$("input").focus(function(){
		$(this).parent().parent().addClass("active");
		}).blur(function(){
			if($(this).val() == "")
				$(this).parent().parent().removeClass("active");
		})

	$("#entrar").click(function(){
		var name = $("#name").val();
		var mail = $("#mail").val();
		var ident = $("#ident").val();

		if((name == "") || (mail == "") || (ident == ""))
			alert("Rellene todos los campos por favor");
		else{
			if(mail.includes("@") && mail.includes(".")){
				$.ajax({

					beforeSend: function(){

					},

					url: "php/mail.php",
					type: "POST",

					data: {
						"name": name,
						"mail": mail,
						"ident": ident,
					},

				    success: function(data) {
				    	$(location).attr("href", 
				    				"http://localhost:8080/rest-restful/rest/"+name);
				    },

				    error: function(jqXHR,estado,error) {
				    	console.log(estado);
				    	console.log(error);
				    },

				    complete: function(jqXHR,estado) {
				    	console.log(estado);
				    },
				});
			}else
				alert("El email introducido no es correcto");
		}
	});
});