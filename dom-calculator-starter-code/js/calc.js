// var screen = document.getElementsByClassName();
var numberArray = [];
var array1 = [];
var array2 = [];
var operatorCheck = 0;
var joined = numberArray.join("");
var screen = document.getElementById("screen");
var operatorCheck = 0;

function num(number){
	numberArray.push(number);
	screen.innerHTML = numberArray.join("");
	console.log(screen.innerHTML);
	}

function op(operatorClick){
	operatorCheck = operatorClick;
	console.log(operatorClick);
	return operatorCheck
	}

function joinArray1(){
	if (operator !== 0) {
		array1 = num();
		console.log(array1);
		return array1;
	}
}

function equals(){
	calculate();
	if (operatorCheck === 5){
		var getTotal = calculate();
		return getTotal;
	} 
}

function calculate(){
	switch(operatorCheck) {
	    case 1: //multiply
	        var result =(joined1)*(joined2);
	        return result;
	        break;
	    case 2: //divide
	        var result =(joined1)/(joined2);
	        return result;	        
	        break;	
	    case 3: // subtract
	        var result = (joined1)-(joined2);
	        return result;	        
	        break;
	    case 4: // reset
	        joined1.length = 0;
	        joined2.length = 0;
	       result = 0;
	      	return result;
	    	break;
	    case 5: // equals
	 		equals();        
	    case 6: // add
	        var result =(joined1)+(joined2);
	        return result;	        
	    	break;
	    default: // unexpected
	        alert("Unexpeced Result");
	  }
}

//var firstnumber = joinArray1(op(operatorClick), num(number)); 
//console.log(firstnumber);



// function arrayTwo(joined){
// 	array2.push(joined);
// 	clear();
// 	return array2;
// }

// function clearArray(){
// 	numberArray.length = 0;
// }





// }





//////////////////////////////////


//console.log(opClicked);

// function join(operatorClick){
// 		var joined1 = numberarray.join("");
// }

// 	var joined1 = numberarray.join("");

// function join(operatorClick, numberarray){
// 	if (operatorClick == true)
		
// 		var screen = document.getElementById("screen");
// 		screen.innerHTML = joined1;
// 		console.log(joined1);
// }

// function DOM2(){
//     	var name = document.getElementById("name2");
//     	name.innerHTML = "Hello!";
//     }

// var opClick = op(operatorClick);

// function operatortest(opClick){
// 	if (opClick === 1){
// 		console.log("Multiply was used!");
// 	} 
// }

// var test = op(operatorcheck);
// var numberarray = []
// console.log(test);
// console.log(numberarray);

	// 	if (operatorcheck !== 0)
	// 	console.log(operatorcheck);
	// 	return numberarray = [];
	// else (operatorcheck === 0)
// var operatorchosen = op(operatorcheck);


// function clearFirstEntry(operatorchosen){
// 	if (operatorvalue !== 0){
// 		return numberarray = [];
// 	}
// }


// function join1(){
// 	if (1 <= operatorcheck >  )
// 		var joined1 = numberarray.join("");
// 		console.log(joined1)
// 		return joined1;
// }


// var arrayComplete = 
// console.log(arrayComplete);

// function checkOpPress(arrayComplete)


// function op(operatorcheck){
// 	if (operatorcheck === 1){
// 		var joined1 = numberarray.join("");
// 		console.log(joined)
// 		return joined1;
// 	}	
// }

// function op(subtract){
// 	if (operatorcheck.push(operator) == 4){ //
// 		numberarray = [];
// 		console.log(operatorcheck);
// }

