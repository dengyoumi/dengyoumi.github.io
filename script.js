function test(){
	
$(document).ready(function(){$("#random_w").text("Lemme Gfghjfgho!");});

//document.getElementById("random_w").innerHTML = "lalalalalal";
}

function CO2_calculation(){
	var n=$("#CO2_n").val();
	var Qh=$("#CO2_Qh").val();
	var Q=$("#CO2_Q").val();
	var Co=$("#CO2_Co").val();
	var V= $("#CO2_V").val();
	var t= $("#CO2_t").val();
	
	var A_constant = -$("#CO2_n").val()*$("#CO2_Qh").val()*1000000/$("#CO2_Q").val();
	
	var Concentration_steady= Number(Co)+Number(n*Qh*1000000/Q);
	//$("#CO2_n").val()*$("#CO2_Qh").val()*1000000/$("#CO2_Q").val()+$("#CO2_Co").val();
	
	var Concentration_t = Number(A_constant)*Math.exp(-Q*t/V)+Number(Concentration_steady);
	//Math.exp(-Q*t/V);
	//Number(A_constant)*Math.pow(-Q*t/V)+Number(Concentration_steady);
	
	
	$("#CO2_C_t").text(parseFloat(Concentration_t).toFixed(2));
	$("#CO2_steady").text(parseFloat(Concentration_steady).toFixed(2));
	
}

function PM2_5_calculation(){
	var n=Number($("#PM2_5_n").val());
	var Qm=Number($("#PM2_5_Qm").val());
	var Q=Number($("#PM2_5_Q").val());
	var Co=Number($("#PM2_5_Co").val());
	var V= Number($("#PM2_5_V").val());
	var t= Number($("#PM2_5_t").val());
	var Ci=Number($("#PM2_5_Ci").val());
	var e = Number($("#PM2_5_e").val());
	
	//var A_QeQm = Qm///100 ;/// 100;
	
	var A_constant = Number(Ci) - Number(Q*Co/(Q+e*Qm/100));

	//$("#PM2_5_C_t").text(parseFloat(A_constant).toFixed(2));



	
	var Concentration_steady= Q*Co/(Q+e*Qm/100);//+Number(n*Qh*1000000/Q);
	//$("#CO2_n").val()*$("#CO2_Qh").val()*1000000/$("#CO2_Q").val()+$("#CO2_Co").val();
	
	var Concentration_t = Number(A_constant)*Math.exp(-(Q+e*Qm/100)*t/V)+Number(Concentration_steady);
	//Math.exp(-Q*t/V);
	//Number(A_constant)*Math.pow(-Q*t/V)+Number(Concentration_steady);
	
	
	$("#PM2_5_C_t").text(parseFloat(Concentration_t).toFixed(2));
	$("#PM2_5_steady").text(parseFloat(Concentration_steady).toFixed(2));
	
}