var Player1 = localStorage.getItem("Player 1");
var Player2 = localStorage.getItem("Player 2");
var P1Score = 0;
var P2Score = 0;
document.getElementById("P1Name").innerHTML= Player1+ " : "+ P1Score;
document.getElementById("P2Name").innerHTML= Player2+ " : "+ P2Score;

document.getElementById("playerquestion").innerHTML= "Question Turn - "+ Player1;
document.getElementById("playeranswer").innerHTML= "Answer Turn - "+ Player2;
var finalword = "";
function Send(){
 number1 = document.getElementById("number1").value;
 number2 = document.getElementById("number2").value;
 actual_answer = parseInt(number1) * parseInt(number2);
 question_number = "<h4>" + number1 + " X " + number2 +"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
number1 = document.getElementById("number1").value= "";
number2 = document.getElementById("number2").value= "";
}
var Qt= "P1";
var At = "P2";
function Check(){
var getanswer= document.getElementById("Answerinput").value.toLowerCase();
if(getanswer == finalword){
    if(Qt== "P1")
    {
        P2Score = P2Score + 1;
        document.getElementById("P2Name").innerHTML= Player2+ " : "+ P2Score;
        Qt= "P2";
        At = "P1";
        document.getElementById("playerquestion").innerHTML= "Question Turn - "+ Player2;
        document.getElementById("playeranswer").innerHTML= "Answer Turn - "+ Player1;
        document.getElementById("output").innerHTML = "";
    }
    else{
        P1Score = P1Score + 1;
        document.getElementById("P1Name").innerHTML= Player1+ " : "+ P1Score;
        Qt= "P1";
        At = "P2";
        document.getElementById("playerquestion").innerHTML= "Question Turn - "+ Player1;
        document.getElementById("playeranswer").innerHTML= "Answer Turn - "+ Player2;
        document.getElementById("output").innerHTML = "";
    }
}
}


