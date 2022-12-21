// this function will show the  value in the display

function calculator(NewValue) {
    document.getElementById("disp").value += NewValue;
}

// this function willl clear the display

function DeleteMe() {
    document.getElementById("disp").value =  "";
}


// this function will show our result

function Answere() {
    let a = document.getElementById("disp").value ;
    let b = eval(a);
    document.getElementById("disp").value = b;
}
