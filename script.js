function test(){
	
$(document).ready(function(){$("#random_w").text("Lemme Gfghjfgho!");});

//document.getElementById("random_w").innerHTML = "lalalalalal";
}

function CO2_calculation(){
	var n=$("#CO2_n").val();
	var Qh=$("#CO2_Qh").val();
	//var Q=$("#CO2_Q").val();
	var Co=$("#CO2_Co").val();
	//var V= $("#CO2_V").val();
	var t= $("#CO2_t").val();
	
	//for V
	var Area=Number($("#CO2_Area").val());
	var height= Number($("#CO2_height").val());
	
	//for Q
	var ventilation = Number($("#CO2_ventilation").val());
	
	//calculate V & Q and display
	var V= Area*height;
	$("#CO2_V").text(parseInt(V));
		
	var Q=n*ventilation*3.60;
	$("#CO2_Q").text(parseInt(Q));
	
	//calculating the top answers
	var A_constant = -n*Qh*1000000/Q;
	var Concentration_steady= Number(Co)+Number(n*Qh*1000000/Q);
	var Concentration_t = Number(A_constant)*Math.exp(-Q*t/V)+Number(Concentration_steady);
	//Math.exp(-Q*t/V);
	//Number(A_constant)*Math.pow(-Q*t/V)+Number(Concentration_steady);
	
	
	$("#CO2_C_t").text(parseInt(Concentration_t));
	$("#CO2_steady").text(parseInt(Concentration_steady));
	
}

function PM2_5_calculation(){

	var n=Number($("#PM2_5_n").val());
	var Qm=Number($("#PM2_5_Qm").val());
	
	var Co=Number($("#PM2_5_Co").val());
	
	var t= Number($("#PM2_5_t").val());
	var Ci=Number($("#PM2_5_Ci").val());
	var e = Number($("#PM2_5_e").val());
	
	
	//for V
	var Area=Number($("#PM2_5_Area").val());
	var height= Number($("#PM2_5_height").val());
	
	//for Q
	var ventilation = Number($("#PM2_5_ventilation").val());
	
	//calculate V & Q and display
	var V= Area*height;
	$("#PM2_5_V").text(parseInt(V));
		
	var Q=n*ventilation*3.60;
	$("#PM2_5_Q").text(parseInt(Q));
	
	
	/* for testing
	var V = Number($("#PM2_5_V").val());
	var Q = Number($("#PM2_5_Q").val());
	*/
	
	//calculate constant A
	
	var A_constant = Ci - Q*Co/(Q+e*Qm/100);

	$("#PM2_5_C_t").text(parseFloat(A_constant).toFixed(0));



	//calculate the top 2 answers and display
	var Concentration_steady= Q*Co/(Q+e*Qm/100);//+Number(n*Qh*1000000/Q);
	
	var Concentration_t = A_constant*Math.exp(-(Q+e*Qm/100)*t/V)+Concentration_steady;
	
	
	$("#PM2_5_C_t").text(parseFloat(Concentration_t).toFixed(0));
	$("#PM2_5_steady").text(parseFloat(Concentration_steady).toFixed(0));
	
}


function calculator_switch(x) {
	//if CO2 button is clicked
	if(x=="CO2"){
		$("#PM2_5_calculator").css("display","none");
		$("#CO2_calculator").css("display","block");
		$("#CO2_calculator_header").css("z-index","5");
		$("#CO2_calculator_header").css("backgroundColor","white");
		$("#PM2_5_calculator_header").css("z-index","1");
		$("#PM2_5_calculator_header").css("backgroundColor","#e8e8e8");
	}
	
	if(x=="PM2.5"){
		$("#CO2_calculator").css("display","none");
		$("#PM2_5_calculator").css("display","block");
		$("#PM2_5_calculator_header").css("z-index","5");
		$("#PM2_5_calculator_header").css("backgroundColor","white");
		$("#CO2_calculator_header").css("z-index","1");
		$("#CO2_calculator_header").css("backgroundColor","#e8e8e8");
	}
	$('.formula').css("display","none");
	
}

function close_window(x){
	$(x).css("display","none");
}

function open_window(x){
	$(x).css("display","inline");
}