player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1NAME").innerHTML=player1_name+" : ";
document.getElementById("player2NAME").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question turn : " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn : " + player2_name;

function send()
{
    get_word = document.getElementById("word_input").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt_1 =  word.charAt(1);
    console.log(charAt_1);

    length_2 = Math.floor(word.length/2);

    charAt_2 = word.charAt(length_2);
    console.log(charAt_2);

    minus = word.length - 1;

    charAt_3 = word.charAt(minus);
    console.log(charAt_3);

    remove_charAt_1 = word.replace(charAt_1, "_");
    remove_charAt_2 = remove_charAt_1.replace(charAt_2, "_");
    remove_charAt_3 = remove_charAt_2.replace(charAt_3, "_");

    console.log(remove_charAt_3);

    ques_word = "<h4 id='word_display'> Q. " + remove_charAt_3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='inp_checkbox'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = ques_word + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word_input").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_ans = document.getElementById("inp_checkbox").value;
    answer = get_ans.toLowerCase();
    console.log("Answer in lowercase = "+answer);

    if(answer == word)
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }



    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("player_ques").innerHTML = "Question turn -"+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_ques").innerHTML = "Question turn -"+player1_name;
    }





    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer turn -"+ player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = "Answer turn -"+player1_name;
    }


    document.getElementById("output").innerHTML = " ";
}
