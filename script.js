for (var i = 1; i > 0; i++) {
    for (var j = 1; j > 0; j++) {
        var CnvrtInto = prompt("In which do you want to convert amount. Press   1 for DOLR to PKR   or   2 for PKR to DOLR");
        if (CnvrtInto === "1") {
            var AmountToConvert = prompt("enter an amount in to convert DOLLAR into PKR");
            var CnvrtedValue = AmountToConvert * 278;
            CnvrtedValue = CnvrtedValue.toFixed(2);
            break;
        }
        else if (CnvrtInto === "2") {
            var AmountToConvert = Number(prompt("enter an amount in to convert PKR into DOLLAR"));
            var CnvrtedValue = AmountToConvert / 278;
            CnvrtedValue = CnvrtedValue.toFixed(2);
            break;
        }
        else {
            alert("Please enter correct value only 1 or 2");
        }
    }
    alert("The converted amount is  " + CnvrtedValue + "   according to (1$ = 278RS)");
    for (var m = 1; m > 0; m++) {
        var ToRestart = prompt("If you want to restart the program press  1  or want to end press  2 ");
        if (ToRestart === "1") {
            break;
        }
        else if(ToRestart==="2"){
            break;
        }
        else {
            alert("Please enter correct value only 1 or 2");
        }
    }
    if(ToRestart==="2"){
        alert("thanks for your comming");
        break;
    }
}