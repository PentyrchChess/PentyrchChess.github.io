function sumTable(sumTarget){
		$( document ).ready(function() {

		var sum=0; //contains a rolling sum as we total up each column
		var nextNum; //contains the next number to be added to the sum 
		var i = 1; //column index
		var j = 1; //row index
		var nCols=$("table#sumtable tr:first-child td").length;
		var nRows=$("table#sumtable tr").length; //total number of rows in the table

		if (sumTarget.toLowerCase() == "col"){
			for (i=1;i<=nCols;i++){
				$("table#sumtable tr td:nth-of-type("+i+")").each(function(){ //iterate through each row in column i
			    	if (j===nRows){j=1;} //we've finished summing the rows, so just reset j to 1
			    	else {
			    		nextNum = parseFloat($(this).html()); //get the number out of the cell and turn it into a number
			    		if (!isNaN(nextNum)){ // check it's a valid number
			    			sum += nextNum; //add it to our rolling sum
			    		}
			    	j++; //keep a count of which row we're at to make sure we stop before the total row
			    	}
			    });
			    $("table#sumtable tr:last-of-type td:nth-of-type("+i+")").html(sum); //inject the sum into cell in the total row
				sum = 0; //reset the sum to 0;
			}

		}
		else if (sumTarget.toLowerCase() == "row"){
			for (j=2;j<=nRows;j++){
				$("table#sumtable tr:nth-of-type("+j+") td").each(function(){ //iterate through each row in column i
			    		if (i===nCols){
			    			$(this).html(sum);
			    			i=1;
			    			sum=0;
			    		} 
			    		else {
				    		nextNum = parseFloat($(this).html()); //get the number out of the cell and turn it into a number
				    		if (!isNaN(nextNum)){ // check it's a valid number
				    			sum += nextNum; //add it to our rolling sum
				    			
				    		}
				    		i++;
				    	}
			    });
			}
		}
		else {}
		});
	}  