// 2단계: 팀데이터 입력 및 시합 기능 구현

// 2단계 클린 코딩 (미완성)
// -전역변수 사용을 최소화한다.
// -함수(또는 메소드)의 크기는 15줄 이하를 권장한다.
// -함수(또는 메소드)의 들여쓰기는 최대 3단계로 구현한다.

// team.playerName1 = ["김남준", "김태형", "민윤기", "김석진", "정호석", "박지민", "전정국", "방시혁", "손성득"];
// team.playerName2 = ["최한울", "김보근", "한동윤", "김승언", "달마", "박선배", "박재연", "최승현", "박게이"];
// team.playerBattingAve1 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.playerBattingAve2 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.teamNameSave = ["빅히트", "1-8반 히어로즈"];

// team 객체 생성
var team = {};
team.playerName1 = [];
team.playerName2 = [];
team.playerBattingAve1 = [];
team.playerBattingAve2 = [];
team.teamNameSave = [];

//실질적으로 데이터 입력하는 함수
team.isInput = function () {
    for (var j = 0; j < 2; j++) {
        this.Name = prompt((j + 1) + "팀의 이름을 입력하세요.");
        for (var i = 0; i < 9; i++) {
            var strPlayer = prompt((i + 1) + "번 타자 정보 입력(이름,타율)");
            var player1 = strPlayer.split(',');
            var numBattingAve = Number(player1[1]);
            while (numBattingAve > 0.5 || numBattingAve < 0.1) {
                alert("타율값을 다시 입력해주세요.");
                var strPlayer = prompt((i + 1) + "번 타자 정보 입력(이름,타율)");
                var player1 = strPlayer.split(',');
                var numBattingAve = Number(player1[1]);
            }
            if (j === 0) {
                this.playerName1[i] = player1[0];
                this.playerBattingAve1[i] = numBattingAve.toFixed(3);
            } else {
                this.playerName2[i] = player1[0];
                this.playerBattingAve2[i] = numBattingAve.toFixed(3);
            }
        }
        this.teamNameSave[j] = this.Name;
    }
    alert("팀 데이터 입력이 완료되었습니다.");
}

//실질적으로 데이터 출력하는 함수
team.isOutput = function () {
    document.write("메뉴선택 ( 1 - 2 ) 中 2<br>");
    document.write("코드스쿼드 배 " + this.teamNameSave[0] + " 팀 정보<br>");
    for (var i = 0; i < 9; i++) {
        document.write((i + 1) + "번 " + this.playerName1[i] + ", " + this.playerBattingAve1[i] + "<br>");
    }
    document.write("코드스쿼드 배 " + this.teamNameSave[1] + " 팀 정보<br>");
    for (var j = 0; j < 9; j++) {
        document.write((j + 1) + "번 " + this.playerName2[j] + ", " + this.playerBattingAve2[j] + "<br>");
    }
    document.write("<h1>신나는 야구시합</h1>");
    document.write("<h2>1. 데이터 입력 <br> 2. 데이터 출력 <br> 3. 시합 시작</h2>");
    document.write("<input type='text' id='input'>");
    document.write('<button onclick="baseballGame()">확인</button>' + "<br><br>");
};

// game 객체 생성
var game = { strike: 0, ball: 0, out1: 0, out2: 0, hit1: 0, hit2: 0, score1: 0, score2: 0,throwBall1: 0, strikeOut1: 0, totalHit1: 0, throwBall2: 0, strikeOut2: 0, totalHit2: 0, inning1Score1 : 0, inning2Score1: 0, inning3Score1: 0, inning4Score1: 0, inning5Score1: 0, inning6Score1: 0, inning1Score2 : 0, inning2Score2: 0, inning3Score2: 0, inning4Score2: 0, inning5Score2: 0, inning6Score2: 0, totalScore1 : 0, totalScore2: 0, currentScore1: 0, currentScore2: 0, check1player1: "", check1player2: "", check1player3: "", check1player4: "", check1player5: "", check1player6: "", check1player7: "", check1player8: "", check1player9: "", check2player1: "", check2player2: "", check2player3: "", check2player4: "", check2player5: "", check2player6: "", check2player7: "", check2player8: "", check2player9: ""};

game.Array = ["S", "O", "B", "안타"];
// 각 선수 현재 결과 출력
game.result1 = function () {
    document.write(this.strike + "S " + this.ball + "B " + this.out1 + "O<br><br>");
}
game.result2 = function () {
    document.write(this.strike + "S " + this.ball + "B " + this.out2 + "O<br><br>");
}
// strike, ball 리셋 함수
game.reset1 = function () {
    this.strike = 0;
    this.ball = 0;
    this.result1();
}
game.reset2 = function () {
    this.strike = 0;
    this.ball = 0;
    this.result2();
}
//team.playerBattingAve1[i]은 타율
game.randomVariable1 = function (i) {
    var value1 = (1 - team.playerBattingAve1[i]) / 2 - 0.05;
    if (Math.random().toFixed(1) === "0.1") {
        this.answer = "O";
    } else if (Math.random() < value1 && team.playerBattingAve1[i] > 0.1 && team.playerBattingAve1[i] < 0.5) {
        this.answer = "S";
    } else if (Math.random() > value1 && team.playerBattingAve1[i] > 0.1 && team.playerBattingAve1[i] < 0.5) {
        this.answer = "B";
    } else if (team.playerBattingAve1[i] > 0.1 && team.playerBattingAve1[i] < 0.5) {
        this.answer = "안타";
    }
}

game.randomVariable2 = function (i) {
    var value2 = (1 - team.playerBattingAve2[i]) / 2 - 0.05;
    if (Math.random().toFixed(1) === "0.1") {
        this.answer = "O";
    } else if (Math.random() < value2 && team.playerBattingAve2[i] > 0.1 && team.playerBattingAve2[i] < 0.5) {
        this.answer = "S";
    } else if (Math.random() > value2 && team.playerBattingAve2[i] > 0.1 && team.playerBattingAve2[i] < 0.5) {
        this.answer = "B";
    } else if (team.playerBattingAve2[i] > 0.1 && team.playerBattingAve2[i] < 0.5) {
        this.answer = "안타";
    }
}

game.scoreBoard = function () {
    document.write("<table border='1'><tr><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>TOT</td><td></td></tr></table>");
    document.write("<table border='1'><tr><td></td><td>" + team.teamNameSave[0] + "</td><td>" + game.inning1Score1 + "</td><td>" + game.inning2Score1 + "</td><td>" + game.inning3Score1 + "</td><td>" + game.inning4Score1 + "</td><td>" + game.inning5Score1 + "</td><td>" + game.inning6Score1 + "</td><td>" + game.totalScore1 + "</td><td></td></tr></table>");
    document.write("<table border='1'><tr><td></td><td>" + team.teamNameSave[1] + "</td><td>" + game.inning1Score2 + "</td><td>" + game.inning2Score2 + "</td><td>" + game.inning3Score2 + "</td><td>" + game.inning4Score2 + "</td><td>" + game.inning5Score2 + "</td><td>" + game.inning6Score2 + "</td><td>" + game.totalScore2 + "</td><td></td></tr></table>");
    document.write("<table border='1'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>");   //공백칸
    document.write("<table border='1'><tr><td>" + team.teamNameSave[0] + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>" + team.teamNameSave[1] + "</td></tr></table>");
    document.write("<table border='1'><tr><td>1</td><td>" + team.playerName1[0] + "</td><td>" + game.check1player1 + "</td><td></td><td></td><td></td><td></td><td>" + game.check2player1 + "</td><td>" + team.playerName2[0] + "</td><td>1</td></tr></table>");    //1
    document.write("<table border='1'><tr><td>2</td><td>" + team.playerName1[1] + "</td><td>" + game.check1player2 + "</td><td></td><td></td><td></td><td></td><td>" + game.check2player2 + "</td><td>" + team.playerName2[1] + "</td><td>2</td></tr></table>");    //2
    document.write("<table border='1'><tr><td>3</td><td>" + team.playerName1[2] + "</td><td>" + game.check1player3 + "</td><td>S</td><td>X</td><td></td><td></td><td>" + game.check2player3 + "</td><td>" + team.playerName2[2] + "</td><td>3</td></tr></table>");    //3
    document.write("<table border='1'><tr><td>4</td><td>" + team.playerName1[3] + "</td><td>" + game.check1player4 + "</td><td>B</td><td>X</td><td>X</td><td>X</td><td>" + game.check2player4 + "</td><td>" + team.playerName2[3] + "</td><td>4</td></tr></table>");    //4
    document.write("<table border='1'><tr><td>5</td><td>" + team.playerName1[4] + "</td><td>" + game.check1player5 + "</td><td>O</td><td>X</td><td>X</td><td></td><td>" + game.check2player5 + "</td><td>" + team.playerName2[4] + "</td><td>5</td></tr></table>");    //5
    document.write("<table border='1'><tr><td>6</td><td>" + team.playerName1[5] + "</td><td>" + game.check1player6 + "</td><td>팀1투구</td><td>" + game.throwBall1 + "</td><td>팀2투구</td><td>" + game.throwBall2 + "</td><td>" + game.check2player6 + "</td><td>" + team.playerName2[5] + "</td><td>6</td></tr></table>");    //6
    document.write("<table border='1'><tr><td>7</td><td>" + team.playerName1[6] + "</td><td>" + game.check1player7 + "</td><td>팀1삼진</td><td>" + game.strikeOut1 + "</td><td>팀2삼진</td><td>" + game.strikeOut2 + "</td><td>" + game.check2player7 + "</td><td>" + team.playerName2[6] + "</td><td>7</td></tr></table>");    //7
    document.write("<table border='1'><tr><td>8</td><td>" + team.playerName1[7] + "</td><td>" + game.check1player8 + "</td><td>팀1안타</td><td>" + game.totalHit1 + "</td><td>팀2안타</td><td>" + game.totalHit2 + "</td><td>" + game.check2player8 + "</td><td>" + team.playerName2[7] + "</td><td>8</td></tr></table>");    //8
    document.write("<table border='1'><tr><td>9</td><td>" + team.playerName1[8] + "</td><td>" + game.check1player9 + "</td><td></td><td></td><td></td><td></td><td>" + game.check2player9 + "</td><td>" + team.playerName2[8] + "</td><td>9</td></tr></table>");    //9
}

game.attack1 = function () {
    while (this.out1 != 3) {
        for (var i = 0; i < 9; i++) {
            this.throwBall1++;
            if (i === 0) {
                this.check1player9 = "";
                this.check1player1 = "V";
            } else if (i === 1) {
                this.check1player1 = "";
                this.check1player2 = "V";
            } else if (i === 2) {
                this.check1player2 = "";
                this.check1player3 = "V";
            } else if (i === 3) {
                this.check1player3 = "";
                this.check1player4 = "V";
            } else if (i === 4) {
                this.check1player4 = "";
                this.check1player5 = "V";
            } else if (i === 5) {
                this.check1player5 = "";
                this.check1player6 = "V";
            } else if (i === 6) {
                this.check1player6 = "";
                this.check1player7 = "V";
            } else if (i === 7) {
                this.check1player7 = "";
                this.check1player8 = "V";
            } else if (i === 8) {
                this.check1player8 = "";
                this.check1player9 = "V";
            } 
            game.scoreBoard();
            document.write((i + 1) + "번 " + team.playerName1[i] + "<br>");
            this.randomVariable1(i);
            if (this.answer === "S") {
                this.strike++;
                document.write("스트라이크!<br>");
                this.result1();
                if (this.strike < 3) {
                    i--;
                }
                if (this.strike === 3) {
                    this.out1++;
                    this.strikeOut1++;
                    document.write("스트라이크 3개로 1아웃이 추가됩니다!<br>");
                    this.reset1();
                }
            } else if (this.answer === "O") {
                this.out1++;
                if (this.out1 < 3) {
                    document.write("아웃! 다음 타자가 타석에 입장했습니다.<br>");
                    this.reset1();
                } else {
                    document.write("아웃!<br>");
                    this.reset1();
                }
            } else if (this.answer === "B") {
                this.ball++;
                document.write("볼!<br>");
                this.result1();
                if (this.ball < 4) {
                    i--;
                }
                if (this.ball === 4) {
                    this.hit1++;
                    this.totalHit1++;
                    document.write("볼 넷으로 1안타가 됩니다.<br>");
                    this.reset1();
                }
            } else if (this.answer === "안타") {
                this.hit1++;
                this.totalHit1++;
                document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
                this.reset1();
            }
            if (this.out1 === 3) {
                break;
            }
        }
    }
}
game.attack2 = function () {
    while (this.out2 != 3) {
        for (var i = 0; i < 9; i++) {
            this.throwBall2++;
            if (i === 0) {
                this.check2player9 = "";
                this.check2player1 = "V";
            } else if (i === 1) {
                this.check2player1 = "";
                this.check2player2 = "V";
            } else if (i === 2) {
                this.check2player2 = "";
                this.check2player3 = "V";
            } else if (i === 3) {
                this.check2player3 = "";
                this.check2player4 = "V";
            } else if (i === 4) {
                this.check2player4 = "";
                this.check2player5 = "V";
            } else if (i === 5) {
                this.check2player5 = "";
                this.check2player6 = "V";
            } else if (i === 6) {
                this.check2player6 = "";
                this.check2player7 = "V";
            } else if (i === 7) {
                this.check2player7 = "";
                this.check2player8 = "V";
            } else if (i === 8) {
                this.check2player8 = "";
                this.check2player9 = "V";
            } 
            game.scoreBoard();
            document.write((i + 1) + "번 " + team.playerName2[i] + "<br>");
            this.randomVariable2(i);
            if (this.answer === "S") {
                this.strike++;
                document.write("스트라이크!<br>");
                this.result2();
                if (this.strike < 3) {
                    i--;
                }
                if (this.strike === 3) {
                    this.out2++;
                    this.strikeOut2++;
                    document.write("스트라이크 3개로 1아웃이 추가됩니다!<br>");
                    this.reset2();
                }
            } else if (this.answer === "O") {
                this.out2++;
                if (this.out2 < 3) {
                    document.write("아웃! 다음 타자가 타석에 입장했습니다.<br>");
                    this.reset2();
                } else {
                    document.write("아웃!<br>");
                    this.reset2();
                }
            } else if (this.answer === "B") {
                this.ball++;
                document.write("볼!<br>");
                this.result2();
                if (this.ball < 4) {
                    i--;
                }
                if (this.ball === 4) {
                    this.hit2++;
                    this.totalHit2++;
                    document.write("볼 넷으로 1안타가 됩니다.<br>");
                    this.reset2();
                }
            } else if (this.answer === "안타") {
                this.hit2++;
                this.totalHit2++;
                document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
                this.reset2();
            }
            if (this.out2 === 3) {
                break;
            }
        }
    }
}

game.hitoutReset1 = function(i) {
    document.write((i + 1) + "회초 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
    game.scoreBoard();
    this.hit1 = 0;
    this.out1 = 0;
}
game.hitoutReset2 = function(i) {
    document.write((i + 1) + "회말 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
    game.scoreBoard();
    this.hit2 = 0;
    this.out2 = 0;
}
// 6회 경기 모두 출력
game.gameStart = function () {
    for (var i = 0; i < 6; i++) {
        document.write((i + 1) + "회초 " + team.teamNameSave[0] + " 공격<br><br>");
        this.attack1();
        if (this.hit1 === 3 || this.hit1 > 3) {
            this.currentScore1 = (this.hit1 - 2);
            this.score1 += (this.hit1 - 2);
            this.totalScore1 += (this.hit1 - 2);
            if (i === 0) {
                this.inning1Score1 = this.currentScore1;
            } else if (i === 1) {
                this.inning2Score1 = this.currentScore1;
            } else if (i === 2) {
                this.inning3Score1 = this.currentScore1;
            } else if (i === 3) {
                this.inning4Score1 = this.currentScore1;
            } else if (i === 4) {
                this.inning5Score1 = this.currentScore1;
            } else if (i === 5) {
                this.inning6Score1 = this.currentScore1;
            }
        }
        
        this.hitoutReset1(i);
        document.write("<br>" + (i + 1) + "회말 " + team.teamNameSave[1] + " 공격<br><br>");
        this.attack2();
        if (this.hit2 === 3 || this.hit2 > 3) {
            this.currentScore2 = (this.hit2 - 2);
            this.score2 += (this.hit2 - 2);   
            this.totalScore2 += (this.hit2 - 2);
            if (i === 0) {
                this.inning1Score2 = this.currentScore2;
            } else if (i === 1) {
                this.inning2Score2 = this.currentScore2;
            } else if (i === 2) {
                this.inning3Score2 = this.currentScore2;
            } else if (i === 3) {
                this.inning4Score2 = this.currentScore2;
            } else if (i === 4) {
                this.inning5Score2 = this.currentScore2;
            } else if (i === 5) {
                this.inning6Score2 = this.currentScore2;
            }
        }
        this.hitoutReset2(i);
    }
}

// 실질적으로 시합을 출력하는 함수
game.startAMatch = function () {
    document.write("메뉴선택 (1 - 3) 中 3<br>");
    document.write(team.teamNameSave[0] + " VS " + team.teamNameSave[1] + "의 시합을 시작합니다.<br><br>");
    this.gameStart();
    document.write("<br>경기 종료<br><br>");
    document.write(team.teamNameSave[0] + " VS " + team.teamNameSave[1] + "<br>");
    document.write(this.score1 + " : " + this.score2 + "<br>");
    if (this.score1 === this.score2) {
        document.write("무승부입니다!<br>");
    }
    document.write("Thank you!");
}

var baseballGame = function () {
    var str = document.getElementById('input').value;
    if (str === "1") {
        team.isInput();
    } else if (str === "2") {
        team.isOutput();
    } else if (str === "3") {
        game.startAMatch();
    } else {
        alert("다시 입력하세요.");
    }
}