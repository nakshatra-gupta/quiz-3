Name_1 = localStorage.getItem("Input_1");
Name_2 = localStorage.getItem("Input_2");

Score_1 = 0;
Score_2 = 0;

document.getElementById("question").innerHTML = "Question turn is: " + Name_1;
document.getElementById("answer").innerHTML = "Answer turn is: " + Name_2;

document.getElementById("player_1_name").innerHTML = Name_1;
document.getElementById("player_2_name").innerHTML = Name_2;

document.getElementById("player_1_score").innerHTML = " : " + Score_1;
document.getElementById("player_2_score").innerHTML = " : " + Score_2;

function Send()
{
    number1 = document.getElementById("Number_1").value;
    number2 = document.getElementById("Number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-warning' onclick ='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTMl = row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}