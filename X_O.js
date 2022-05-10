   /*<!--div class="firstx"></div>
                    <div class="secondx"></div-->*/        
    var s  = 0;
    var ff = 0;
    var you_winner_counter = "";
    var array_winner = [1,2,3,4,5,6,7,8,9];
    var array_collect_you = [];
    var playing_choice = 0;
    var switch_ = true;
    var lines_arr = [document.getElementById("first_line"),document.getElementById("second_line"),document.getElementById("third_line"),
        document.getElementById("forth_line"),document.getElementById("fiveth_line"),document.getElementById("sext_line"),document.getElementById("sevent_line"),
        document.getElementById("heigt_line")];
    var inner_test = ['<div id="firstcircle"><div id="secondcircle"></div></div>','<div id="firstx"></div><div id="secondx"></div>'];
    var players = [[,,],[,,]];
    var counter1 = 0;
    var counter2 = 0;
    function playing_style(x){
            playing_choice = x*1;
            document.getElementById("play_style").style.display = "none";
        if(x == 0){
        document.getElementById("Names").style.display = "block";
        }else {
            start();
        }
    }
    function start(){
    if(playing_choice == 0){
        players[0][0] = ((document.getElementById("first_player").value != "") ? 
      document.getElementById("first_player").value : "Player 1");
      players[1][0] = ((document.getElementById("second_player").value != "") ?
      document.getElementById("second_player").value : "player 2");
      /*ran =  Math.floor(Math.random() * 2);
      players[0][1] = ran;
      players[1][1] = ((players[0][1] == 0) ? 1 : 0);*/
      players[0][1] = 0;
      players[1][1] = 1;
    }else{
        players[0][0] = "You";
        players[1][0] = "Computer";
        players[0][1] = 0;
        players[1][1] =1;
    }
      
      ready();
    }
    function ready(){
        document.getElementById("ready").style.display = "block";
        document.getElementById("Names").style.display = "none";
        document.getElementById("first").innerHTML= players[0][0];
        document.getElementById("second").innerHTML= players[1][0];
        document.getElementById("first_player_counter").innerHTML = players[0][0];
        document.getElementById("second_player_counter").innerHTML = players[1][0];
        Mark_Creator("first_table", players[0][1]);
        Mark_Creator("second_table", players[1][1]);

    }
function Mark_Creator(ID_, oper){
    if(oper === 0){
        var fcircle = document.createElement('div');
        var scircle = document.createElement('div');
        scircle.id  = "secondcircle";
        fcircle.id = "firstcircle";
        fcircle.appendChild(scircle);
        document.getElementById(ID_).appendChild(fcircle);
    }
    else if(oper === 1){
        var fX = document.createElement('div');
        var sX = document.createElement('div');
        fX.id  = "firstx";
        sX.id = "secondx";
        document.getElementById(ID_).appendChild(fX);
        document.getElementById(ID_).appendChild(sX);
    }
}
function computer(ID_){
    if(ff == 0){
        winner(1);
    }
    setTimeout(function() { 
       while(1){
            ran =  Math.floor(Math.random() * 9) + 1;
            box = document.getElementById(ran);
            glob_id = ran;
            if(!box.hasChildNodes()){
                Mark_Creator(ran, players[1][1]);
                if(ff == 0){
                    winner(1);
                }
                s++;
                break;
            }
        }
    }, 100);
    if(ff == 0){
        winner(1);
    }
}
function fun(ID_){
    box = document.getElementById(ID_);
    if(playing_choice == 1){
        if (!box.hasChildNodes()) {
            Mark_Creator(ID_,  players[0][1]);
            winner(0);
            s++;
                if(s<9){
                computer(ID_);
                }/*else{
                    winner(0);
                }*/
        }
    }
    else if(playing_choice == 0){
        if(box.hasChildNodes()){
            switch_ = switch_;
        }else if(!box.hasChildNodes()){
            switch_ = !switch_;
            if(switch_ ===  true){
                //Mark_Creator(ID_,  players[0][1]);
                Mark_Creator(ID_,  0);
                winner(0);
            }else if(switch_ ===  false){
                //Mark_Creator(ID_,  players[1][1]);
                Mark_Creator(ID_, 1);
                winner(1);
            }
        }
    }
}
var g = 0;
function winner(x){
    var inner_arr = [ document.getElementById("1").innerHTML,document.getElementById("2").innerHTML,
        document.getElementById("3").innerHTML,document.getElementById("4").innerHTML,document.getElementById("5").innerHTML,
        document.getElementById("6").innerHTML,document.getElementById("7").innerHTML,document.getElementById("8").innerHTML,
        document.getElementById("9").innerHTML];
        if(inner_arr[0] == inner_test[0] && inner_arr[4] == inner_test[0] && inner_arr[8] == inner_test[0]){
            lines_arr[6].style.width = "130%";
            lines_arr[6].style.transition = "width 0.2s";
            winning_event(6, 0);
        }
        else if(inner_arr[0] == inner_test[0] && inner_arr[1] == inner_test[0] && inner_arr[2] == inner_test[0]){
            lines_arr[0].style.width = "90%";
            lines_arr[0].style.transition = "width 0.2s";
            winning_event(0, 0);
        }
        else if(inner_arr[0] == inner_test[0] && inner_arr[3] == inner_test[0] && inner_arr[6] == inner_test[0]){
            lines_arr[3].style.width = "90%";
            lines_arr[3].style.transition = "width 0.2s";
            winning_event(3, 0);
        }
        else if(inner_arr[1] == inner_test[0] && inner_arr[4] == inner_test[0] && inner_arr[7] == inner_test[0]){
            lines_arr[4].style.width = "90%";
            lines_arr[4].style.transition = "width 0.2s";
            winning_event(4, 0);
        }
        else if(inner_arr[2] == inner_test[0] && inner_arr[4] == inner_test[0] && inner_arr[6] == inner_test[0]){
            lines_arr[7].style.width = "130%";
            lines_arr[7].style.transition = "width 0.2s";
            winning_event(7, 0);
        }
        else if(inner_arr[2] == inner_test[0] && inner_arr[5] == inner_test[0] && inner_arr[8] == inner_test[0]){
            lines_arr[5].style.width = "90%";
            lines_arr[5].style.transition = "width 0.2s";
            winning_event(5, 0);
        }
        else if(inner_arr[3] == inner_test[0] && inner_arr[4] == inner_test[0] && inner_arr[5] == inner_test[0]){
            lines_arr[1].style.width = "90%";
            lines_arr[1].style.transition = "width 0.2s";
            winning_event(1, 0);
        }
        else if(inner_arr[6] == inner_test[0] && inner_arr[7] == inner_test[0] && inner_arr[8] == inner_test[0]){
            lines_arr[2].style.width = "90%";
            lines_arr[2].style.transition = "width 0.2s";
            winning_event(2, 0);
        }
      /************************************************************************************/  
        else if(inner_arr[0] == inner_test[1] && inner_arr[4] == inner_test[1] && inner_arr[8] == inner_test[1]){
            lines_arr[6].style.width = "130%";
            lines_arr[6].style.transition = "width 0.2s";
            winning_event(6, 1);
        }
        else if(inner_arr[0] == inner_test[1] && inner_arr[1] == inner_test[1] && inner_arr[2] == inner_test[1]){
            lines_arr[0].style.width = "90%";
            lines_arr[0].style.transition = "width 0.2s";
            winning_event(0, 1);
        }
        else if(inner_arr[0] == inner_test[1] && inner_arr[3] == inner_test[1] && inner_arr[6] == inner_test[1]){
            lines_arr[3].style.width = "90%";
            lines_arr[3].style.transition = "width 0.2s";
            winning_event(3, 1);
        }
        else if(inner_arr[1] == inner_test[1] && inner_arr[4] == inner_test[1] && inner_arr[7] == inner_test[1]){
            lines_arr[4].style.width = "90%";
            lines_arr[4].style.transition = "width 0.2s";
            winning_event(4, 1);
        }
        else if(inner_arr[2] == inner_test[1] && inner_arr[4] == inner_test[1] && inner_arr[6] == inner_test[1]){
            lines_arr[7].style.width = "130%";
            lines_arr[7].style.transition = "width 0.2s";
            winning_event(7, 1);
        }
        else if(inner_arr[2] == inner_test[1] && inner_arr[5] == inner_test[1] && inner_arr[8] == inner_test[1]){
            lines_arr[5].style.width = "90%";
            lines_arr[5].style.transition = "width 0.2s";
            winning_event(5, 1);
        }
        else if(inner_arr[3] == inner_test[1] && inner_arr[4] == inner_test[1] && inner_arr[5] == inner_test[1]){
            lines_arr[1].style.width = "90%";
            lines_arr[1].style.transition = "width 0.2s";
            winning_event(1, 1);
        }
        else if(inner_arr[6] == inner_test[1] && inner_arr[7] == inner_test[1] && inner_arr[8] == inner_test[1]){
            lines_arr[2].style.width = "90%";
            lines_arr[2].style.transition = "width 0.2s";
            winning_event(2, 1);
        }else{
            var t = 0;
            for(i=0;i<9;i++){
                if(document.getElementById(i+1).hasChildNodes()){
                    t += 1;
                }else{
                    break;
                }
            }
            if(t==9){
                clear_();
            }
        }
}
function winning_event(X, Y){
    ff = 1;
    setTimeout(function() { 
g = X;
s = 0;
var winn;
if(Y == 0){
    winn = players[0][0];
    counter1 += 1;
}else if(Y == 1){
    counter2 += 1;
    winn = players[1][0];
}
document.getElementById("winn").innerHTML = winn;
document.getElementById("first_player_counter_number").innerHTML = counter1;
document.getElementById("second_player_counter_number").innerHTML = counter2;
document.getElementById("result_shower").style.display = "block";
clear_()
    }, 1000);

}
function clear_(){
        setTimeout(function() { 
            document.getElementById("result_shower").style.display = "none";
         }, 2000);
    lines_arr[g].style.width = "0%";
    for(i=0;i<9;i++){
        if(document.getElementById(i+1).innerHTML == inner_test[1]){
            for(j=0;j<2;j++){
                document.getElementById(i+1).removeChild(document.getElementById(i+1).childNodes[0]);
            }
        }else if(document.getElementById(i+1).innerHTML == inner_test[0]){
                document.getElementById(i+1).removeChild(document.getElementById(i+1).childNodes[0]);
        }
    }
   ff = 0; 
   s = 0;

}