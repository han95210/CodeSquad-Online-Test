// 2단계: 팀데이터 입력 및 시합 기능 구현

// 2단계 클린 코딩 (미완성)
// -전역변수 사용을 최소화한다.
// -함수(또는 메소드)의 크기는 15줄 이하를 권장한다.
// -함수(또는 메소드)의 들여쓰기는 최대 3단계로 구현한다.

// 2단계 요구사항 1: 팀데이터 입력 및 저장
// (1)두 야구팀의 팀이름과 선수 데이터를 입력한다. (완료)
// (2)각 팀은 9명의 타자와 한명의 투수로 이루어진다. (완료)
// (3)타자 정보: 순번, 이름, 타율을 저장한다. 타율이란 각 타자가 안타를 칠 수 있는 확률로 타율 h는 0.1 < h < 0.5이고 소수 세째 자리까지 입력한다. (ex: 0.347, 0.120) (완료)
// (4)입력한 팀 데이터에 대한 저장하기 및 출력하기 기능을 구현한다. (완료)
// (5)편의를 위해 에러 처리 등의 기능을 구현한다. (완료)

// 2단계 요구사항 2: 시합하기 기능 구현
// 저장된 데이터를 기반으로 두 팀이 시합하는 기능을 구현한다.
// (1)1단계에서 입력한 두 팀이 가상으로 시합을 실시한다. (완료)
// (2)시합은 6회까지 진행되며 6회에도 승패를 알 수 없을 경우 무승부로 기록된다. (미완성)
// (3)각 회는 회초 / 회말로 나뉘며 회초에는 팀1, 회말에는 팀2의 타자가 경기를 진행하게 된다. 타자가 경기를 진행하는 팀을 이하 공격팀이라고 한다. (완료)
// (4)3아웃이 될 경우 공격팀의 공격이 끝나게 된다. 회초 공격, 회말 공격이 끝나면 다음 회로 넘어간다 (1회초 -> 1회말 -> 2회초 -> ... ) (완료)
// (5)타자는 1번 타자부터 차례로 타석에서 타격을 수행하고, 안타 / 아웃시 다음 선수가 타격을 수행한다. 9번 타자 이후에는 1번으로 돌아간다. (미완성)
// (6)타자의 타격은 안타 / 스트라이크 / 볼 / 아웃 중 하나의 결과를 갖는다. 타자의 타율을 h라고 할 때 각각의 확률은 아래와 같다. (완료)
// (7)1단계처럼 세 번의 스트라이크는 아웃, 네 번의 볼은 안타이다. (완료)
// (8)매 회에서 네 번의 누적된 안타는 1 득점으로 이어지며, 이후부터는 1안타당 추가로 1득점이 발생한다. (완료)
// (9)경기 진행상황과 경기의 최종 결과를 화면에 표시한다. (완료)

/*
문제점
1. game.randomVariable() 함수가 반복문 9번을 돌고 마지막 9번째 타자의 타율로만 계산을 한다. 
2. game.randomVariable() 을 game.attack()에서 호출시
*/

// team.playerName1 = ["최한울", "김보근", "한동윤", "김승언", "달마", "박선배", "박재연", "최승현", "박게이"];
// team.playerName2 = ["카타", "가렌", "제이스", "제라스", "세나", "루시안", "카밀", "잭스", "니코"];
// team.playerBattingAve1 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.playerBattingAve2 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.teamNameSave = ["1-8반 히어로즈", "리오레"];

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

// team.playerName1 = ["최한울", "김보근", "한동윤", "김승언", "달마", "박선배", "박재연", "최승현", "박게이"];
// team.playerName2 = ["카타", "가렌", "제이스", "제라스", "세나", "루시안", "카밀", "잭스", "니코"];
// team.playerBattingAve1 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.playerBattingAve2 = ["0.111", "0.222", "0.333", "0.444", "0.111", "0.222", "0.333", "0.444", "0.111"];
// team.teamNameSave = ["1-8반 히어로즈", "리오레"];


game.attack1 = function () {
    while (this.out1 != 3) {
        for (var i = 0; i < 9; i++) {
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
                if (this.strike < 3) {
                    i--;
                }
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
                if (this.ball < 4) {
                    i--;
                }
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