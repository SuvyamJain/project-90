function back() {
    window.location = "login_page.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


document.getElementById("player1_name").innerHTML = player1_name + "  :   ";
document.getElementById("player2_name").innerHTML = player2_name + "  :   ";



document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_Ans").innerHTML = "Ans turn - " + player1_name;
document.getElementById("player_Question").innerHTML = "Question turn - " + player2_name;

function send() {
    Number1 = document.getElementById("Number1").Value;
    Number2 = document.getElementById("Number2").Value;
actual_answer = parseInt(Number1) *  parseInt(Number2);
console.log(actual_answer);


question_number = <h4> + Number1 + " X "+  Number2 +"</h4>
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").Value = "";
document.getElementById("Number2").Value = "";


}