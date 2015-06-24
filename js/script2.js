$(document).ready(function(){
	var URL = window.location;
	URL = URL.toString();
	var token1 = URL.split("?");
	var iden = token1[1];
	$("#ident").html(iden);
	$("#mandar").click(function(){
		var mensaje = $("#mensaje").val();
		if(mensaje == "")
			alert("Rellene el campo mensaje para mandar uno!");
		else{
			$(location).attr("href", 
						 "http://localhost:8080/rest-restful/rest/"+mensaje+"&"+iden);
		}
	});
	$("#ver").click(function(){
		$(location).attr("href", 
						 "http://localhost:8080/rest-restful/rest/ver&"+iden);
	});
});