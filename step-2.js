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
var game = { strike: 0, ball: 0, out1: 0, out2: 0, hit1: 0, hit2: 0, score1: 0, score2: 0 };
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
game.randomVariable1 = function () {
    for (var i = 0; i < 9; i++) {
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
}

game.randomVariable2 = function () {
    for (var i = 0; i < 9; i++) {
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
}

game.attack1 = function () {
    while (this.out1 != 3) {
        for (var i = 0; i < 9; i++) {
            document.write((i + 1) + "번 " + team.playerName1[i] + "<br>");
            this.randomVariable1();
            if (this.answer === "S") {
                this.strike++;
                document.write("스트라이크!<br>");
                this.result1();
                if (this.strike === 3) {
                    this.out1++;
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
                if (this.ball === 4) {
                    this.hit1++;
                    document.write("볼 넷으로 1안타가 됩니다.<br>");
                    this.reset1();
                }
            } else if (this.answer === "안타") {
                this.hit1++;
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
            document.write((i + 1) + "번 " + team.playerName2[i] + "<br>");
            this.randomVariable2();
            if (this.answer === "S") {
                this.strike++;
                document.write("스트라이크!<br>");
                this.result2();
                if (this.strike === 3) {
                    this.out2++;
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
                if (this.ball === 4) {
                    this.hit2++;
                    document.write("볼 넷으로 1안타가 됩니다.<br>");
                    this.reset2();
                }
            } else if (this.answer === "안타") {
                this.hit2++;
                document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
                this.reset2();
            }
            if (this.out2 === 3) {
                break;
            }
        }
    }
}
// 6회 경기 모두 출력
game.gameStart = function () {
    for (var i = 0; i < 6; i++) {
        document.write((i + 1) + "회초 " + team.teamNameSave[0] + " 공격<br><br>");
        this.attack1();
        if (this.hit1 === 3 || this.hit1 > 3) {
            this.score1 += (this.hit1 - 2);
        }
        document.write((i + 1) + "회초 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
        this.hit1 = 0;
        this.out1 = 0;
        document.write("<br>" + (i + 1) + "회말 " + team.teamNameSave[1] + " 공격<br><br>");
        this.attack2();
        if (this.hit2 === 3 || this.hit2 > 3) {
            this.score2 += (this.hit2 - 2);
        }
        document.write((i + 1) + "회말 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
        this.hit2 = 0;
        this.out2 = 0;
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
/*



// game 객체 생성
var game = { strike: 0, ball: 0, out1: 0, out2: 0, hit1: 0, hit2: 0, score1: 0, score2: 0 };
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
game.randomVariable1 = function () {
    for (var i = 0; i < 9; i++) {
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
}

game.randomVariable2 = function () {
    for (var i = 0; i < 9; i++) {
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
}

game.ifStrike1 = function () {
    if (this.answer === "S") {
        this.strike++;
        document.write("스트라이크!<br>");
        this.result1();
        if (this.strike === 3) {
            this.out1++;
            document.write("스트라이크 3개로 1아웃이 추가됩니다!<br>");
            this.reset1();
        }
    }
};
game.ifStrike2 = function () {
    if (this.answer === "S") {
        this.strike++;
        document.write("스트라이크!<br>");
        this.result2();
        if (this.strike === 3) {
            this.out2++;
            document.write("스트라이크 3개로 1아웃이 추가됩니다!<br>");
            this.reset2();
        }
    }
};

game.ifOut1 = function () {
    if (this.answer === "O") {
        this.out1++;
        if (this.out1 < 3) {
            document.write("아웃! 다음 타자가 타석에 입장했습니다.<br>");
            this.reset1();
        } else {
            document.write("아웃!<br>");
            this.reset1();
        }
    }
};
game.ifOut2 = function () {
    if (this.answer === "O") {
        this.out2++;
        if (this.out2 < 3) {
            document.write("아웃! 다음 타자가 타석에 입장했습니다.<br>");
            this.reset2();
        } else {
            document.write("아웃!<br>");
            this.reset2();
        }
    }
};
game.ifBall1 = function () {
    if (this.answer === "B") {
        this.ball++;
        document.write("볼!<br>");
        this.result1();
        if (this.ball === 4) {
            this.hit1++;
            document.write("볼 넷으로 1안타가 됩니다.<br>");
            this.reset1();
        }
    }
};
game.ifBall2 = function () {
    if (this.answer === "B") {
        this.ball++;
        document.write("볼!<br>");
        this.result2();
        if (this.ball === 4) {
            this.hit2++;
            document.write("볼 넷으로 1안타가 됩니다.<br>");
            this.reset2();
        }
    }
};
game.ifHit1 = function () {
    if (this.answer === "안타") {
        this.hit1++;
        document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
        this.reset1();
    }
};
game.ifHit2 = function () {
    if (this.answer === "안타") {
        this.hit2++;
        document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
        this.reset2();
    }
};

game.attack1 = function () {
    while (this.out1 != 3) {
        for (var i = 0; i < 9; i++) {
            document.write((i + 1) + "번 " + team.playerName1[i] + "<br>");
            this.randomVariable1();
            this.ifStrike1();
            this.ifBall1();
            this.ifOut1();
            this.ifHit1();
        }
        if (this.out1 === 3) {
            return;
        }
    }
};

game.attack2 = function () {
    while (this.out2 != 3) {
        for (var i = 0; i < 9; i++) {
            document.write((i + 1) + "번 " + team.playerName2[i] + "<br>");
            this.randomVariable2();
            this.ifStrike2();
            this.ifBall2();
            this.ifOut2();
            this.ifHit2();
        }
        if (this.out1 === 3) {
            return;
        }
    }
};
// n 회초 경기 출력
game.inningFirst = function () {
    var i = 0;
    document.write((i + 1) + "회초 " + team.teamNameSave[0] + " 공격<br><br>");
    this.attack1();
    if (this.hit1 === 3 || this.hit1 > 3) {
        this.score1 += (this.hit1 - 2);
    }
    document.write((i + 1) + "회초 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
    this.hit1 = 0;
    this.out1 = 0;
}
// n 회말 경기 출력
game.inningSecond = function () {
    var i = 0;
    document.write("<br>" + (i + 1) + "회말 " + team.teamNameSave[1] + " 공격<br><br>");
    this.attack2();
    if (this.hit2 === 3 || this.hit2 > 3) {
        this.score2 += (this.hit2 - 2);
    }
    document.write((i + 1) + "회말 중간점수 " + team.teamNameSave[0] + " : " + this.score1 + " VS " + team.teamNameSave[1] + " : " + this.score2 + "<br>")
    this.hit2 = 0;
    this.out2 = 0;
}
// 6회 경기 모두 출력
game.gameStart = function () {
    for (var i = 0; i < 6; i++) {
        this.inningFirst();
        this.inningSecond();
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
    document.write("Thank you!");
}
*/


