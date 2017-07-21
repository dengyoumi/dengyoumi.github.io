<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	
			<!--<link rel="stylesheet" type="text/css" href ="./style.css">-->

		<link rel="stylesheet" type="text/css" href ="./style.css">
	
     

		<!--record data, draw the css style accordingly here -->
		
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		<script src="script.js"></script> <!--load js funciton-->
		
		
	</head>
	
		<body>
		
		<div id="calculator">
			<div id="calculator_headings">
				<div class="calculator_header" id="CO2_calculator_header">CO2</div>
				<div class="calculator_header" id="PM2_5_calculator_header">PM2.5</div>
			</div>
			
			<!--CO2 calculator-->
			<div id="CO2_calculator">
				<form oninput="CO2_V.value=CO2_height.value*CO2_Area.value;CO2_Q.value=CO2_n.value*CO2_ventilation.value*3.6">
				
					
					<div class="result_div" >
						<table>
							<tr>
								<th>item</th>
								<th></th>
								<th>unit</th>
								
							</tr>
							<tr><!--output-->
								<td class="table_heading">Result</td>
							</tr>
							<tr>
								<td>CO2 Concentration after t</td>
								<td id="CO2_C_t"></td>
								<td>ppm</td>
								<td>C</td>
							</tr>
							<tr>
								<td>Steady State CO2 Concentration</td>
								<td id="CO2_steady"></td>
								<td>ppm</td>
								<td>C when t->infinity</td>
							</tr>
							<tr><!--input-->
								<td class="table_heading">Data Input</td>
							</tr>
							<tr> <!--air quality info-->
								<td class="table_heading">Air Quality Info</td>
							</tr>
							<tr>
								<td>Outdoor CO2 Level</td>
								<td><input class = "c_table_input" id="CO2_Co"></td>
								<td>ppm</td>
								<td>Co</td>
							</tr>
							<tr>
								<td>Initial Indoor CO2 Level</td>
								<td><input class = "c_table_input" id="CO2_Ci"></td>
								<td>ppm</td>
								<td>Ci</td>
							</tr>
							
							<tr> <!--CO2 Production-->
								<td class="table_heading">CO2 Production</td>
							</tr>
							<tr>
								<td>Number of People in Room</td>
								<td><input type="number" class = "c_table_input" id="CO2_n" value=40 ></td>
								<td></td>
								<td>n</td>
							</tr>
							
							<tr>
								<td>CO2 Production Per Person</td>
								<td><input type="number" class = "c_table_input" id="CO2_Qh" value=0.02></td>
								<td>m^3/h</td>
								<td>Qh</td>
							</tr>
							
							<tr> <!--Room information-->
								<td class="table_heading">Room Information</td>
							</tr>
							<tr>
								<td>Ventilation Rate Per Person</td>
								<td><input type="number" id="CO2_ventilation" placeholder=2.5 class = "c_table_input"></td>
								<td>L/s</td>
								<td></td>
							</tr>
							
							<tr>
								<td>Total Ventilation Rate</td>
								<td><output type="number" name="CO2_Q" id="CO2_Q"></output></td>
								<td>m^3/h</td>
								<td>Q</td>
							</tr>
							<tr>
								<td>Room Area</td>
								<td><input type="number" class = "c_table_input" id="CO2_Area" value=40 step="0.01"></td>
								<td>m^2</td>
								<td></td>
							</tr>
							<tr>
								<td>Room height</td>
								<td><input type="number" class = "c_table_input" id="CO2_height" value=2.8 step="0.01"></td>
								<td>m</td>
								<td></td>
							</tr>
							<tr>
								<td>Room Volume</td>
								<td><output type="number" step="0.01" name = "CO2_V" class = "c_table_input" id="CO2_V"></output></td>
								<td>m^3</td>
								<td>V</td>
							</tr>
							
							<tr> <!--Time-->
								<td class="table_heading">Time</td>
							</tr>
							
							<tr>
								<td>Time After Purifier Start</td>
								<td><input class = "c_table_input" id="CO2_t"></td>
								<td>h</td>
								<td>t</td>
							</tr>
							
							
						</table>
						<div id="CO2_button" onclick="CO2_calculation()">start</div>
					</div>					
				</form>
				<div class="data_reference"></div>
			</div>
			
			<!--PM2.5 calculator-->
			<div id="PM2_5_calculator">
				<form oninput="PM2_5_V.value=PM2_5_height.value*PM2_5_Area.value;PM2_5_Q.value=PM2_5_n.value*PM2_5_ventilation.value*3.6">
				
					
					<div class="result_div" >
						<table>
							<tr>
								<th>item</th>
								<th></th>
								<th>unit</th>
								
							</tr>
							<tr><!--output-->
								<td class="table_heading">Result</td>
							</tr>
							<tr>
								<td>PM2.5 Concentration after t</td>
								<td id="PM2_5_C_t"></td>
								<td>ppm</td>
								<td>C</td>
							</tr>
							<tr>
								<td>Steady State PM2.5 Concentration</td>
								<td id="PM2_5_steady"></td>
								<td>ppm</td>
								<td>C when t->infinity</td>
							</tr>
							<tr><!--input-->
								<td class="table_heading">Data Input</td>
							</tr>
							<tr> <!--air quality info-->
								<td class="table_heading">Air Quality Info</td>
							</tr>
							<tr>
								<td>Outdoor PM2.5 Level</td>
								<td><input class = "c_table_input" id="PM2_5_Co" value=500></td>
								<td>ppm</td>
								<td>Co</td>
							</tr>
							<tr>
								<td>Initial Indoor PM2.5 Level</td>
								<td><input class = "c_table_input" id="PM2_5_Ci" value=360></td>
								<td>ppm</td>
								<td>Ci</td>
							</tr>
							
							<tr> <!--CO2 Production-->
								<td class="table_heading">PM2.5 Production</td>
							</tr>
							<tr>
								<td>Number of People in Room</td>
								<td><input type="number" class = "c_table_input" id="PM2_5_n" value=3 ></td>
								<td></td>
								<td>n</td>
							</tr>
							
							<tr>
								<td>Purifier Air Flow Rate</td>
								<td><input type="number" class = "c_table_input" id="PM2_5_Qm" value=400></td>
								<td>m^3/h</td>
								<td>Qm</td>
							</tr>
							
							<tr>
								<td>One Time Purification Efficiency</td>
								<td><input type="number" class = "c_table_input" id="PM2_5_e" value=100></td>
								<td>%</td>
								<td>e</td>
							</tr>
							
							
							<tr> <!--Room information-->
								<td class="table_heading">Room Information</td>
							</tr>
							<tr>
								<td>Ventilation Rate Per Person</td>
								<td><input type="number" id="PM2_5_ventilation" value=5 class = "c_table_input"></td>
								<td>L/s</td>
								<td></td>
							</tr>
							
							<tr>
								<td>Total Ventilation Rate</td>
								<td><output type="number" name="PM2_5_Q" id="PM2_5_Q"></output></td>
								<td>m^3/h</td>
								<td>Q</td>
							</tr>
							<tr>
								<td>Room Area</td>
								<td><input type="number" class = "c_table_input" id="PM2_5_Area" value=40 step="0.01"></td>
								<td>m^2</td>
								<td></td>
							</tr>
							<tr>
								<td>Room height</td>
								<td><input type="number" class = "c_table_input" id="PM2_5_height" value=2.8 step="0.01"></td>
								<td>m</td>
								<td></td>
							</tr>
							<tr>
								<td>Room Volume</td>
								<td><output type="number" step="0.01" name = "PM2_5_V" class = "c_table_input" id="PM2_5_V"></output></td>
								<td>m^3</td>
								<td>V</td>
							</tr>
							
							<tr> <!--Time-->
								<td class="table_heading">Time</td>
							</tr>
							
							<tr>
								<td>Time After Purifier Start</td>
								<td><input class = "c_table_input" id="PM2_5_t" value = 0.5></td>
								<td>h</td>
								<td>t</td>
							</tr>
							
							
						</table>
						<div id="PM2_5_button" onclick="PM2_5_calculation()">start</div>
					</div>					
				</form>
				<div class="data_reference"></div>
			</div>
		
		
		
		</div>
		

		<script>
		
		test();

		</script>
		
		</body>
		
		
	</html>