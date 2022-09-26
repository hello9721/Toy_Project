let answer = "";

function add(char){
    let display = document.getElementById("display");
    let result = document.getElementById("result");
    let record = document.getElementById("record");

    if (result.value != "") {
        record.value = "";
        result.value = "";
    }

    display.value = display.value + char;
}

function add_(char){
    let display = document.getElementById("display");
    let record = document.getElementById("record");
    let a = display.value + char;

    record.value = record.value + a
    display.value = "";

    return answer = a
}

function back(){
    let record = document.getElementById("record");
    let display = document.getElementById("display");
    let result = document.getElementById("result");

    let i_record = record.value.length-1;
    let i_display = display.value.length-1;

    if (result.value != ""){
        result.value = "";
    }
    else if (display.value == "") {
        record.value = record.value.substring(0, i_record);
    } else {
        display.value = display.value.substring(0, i_display);
    }
}

function result(){
    let display = document.getElementById("display");
    let result = document.getElementById("result");
    let record = document.getElementById("record");

    stay = record.value + display.value;
    
    display.value = "";
    
    if (record.value == ""){
        record.value = display.value;
        result.value = "";
    }else{
        record.value = stay
        result.value = eval(stay)
    }

    if (record.value != "" & display.value == "" & result.value == ""){
        result.value = eval(stay);
    }else if(record.value != "" & display.value == "" & result.value != ""){
        record.value = result.value;
        result.value = "";
    }
}

function reset(){
    document.getElementById("record").value = "";
    document.getElementById("display").value = "";
    document.getElementById("result").value = "";
}