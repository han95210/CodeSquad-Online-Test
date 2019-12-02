var game = { strike: 0, ball: 0, out: 0, hit: 0 };
game.Array = ["S", "O", "B", "안타"];

game.result = function() {
    document.write(this.strike + "S " + this.ball + "B " + this.out + "O<br><br>");
}

game.reset = function () {
    this.strike = 0;
    this.ball = 0;
    this.result();
}

game.playGame = function () {
    document.write("신나는 야구 게임!<br>");
    document.write("첫 번째 타자가 타석에 입장했습니다.<br><br>");
    while (true) {
        this.idx = Math.floor(Math.random() * this.Array.length);
        this.answer = this.Array[this.idx];
        if (this.answer === "S") {
            this.strike++;
            document.write("스트라이크!<br>");
            this.result();
            if (this.strike === 3) {
                this.out++;
                document.write("스트라이크 3개로 1아웃이 추가됩니다!<br>");
                this.reset();
            }
        } else if (this.answer === "O") {
            this.out++;
            if (this.out < 3) {
                document.write("아웃! 다음 타자가 타석에 입장했습니다.<br>");
                this.reset();
            } else {
                document.write("아웃!<br>");
                this.reset();
            }
        } else if (this.answer === "B") {
            this.ball++;
            document.write("볼!<br>");
            this.result();
            if (this.ball === 4) {
                this.hit++;
                document.write("볼 넷으로 1안타가 됩니다.<br>");
                this.reset();
            }
        } else if (this.answer === "안타") {
            this.hit++;
            document.write("안타! 다음 타자가 타석에 입장했습니다.<br>");
            this.reset();
        }
        if (this.out === 3) {
            document.write("최종 안타수: " + this.hit + "<br>");
            document.write("GAME OVER");
            break;
        }
    }
}
game.playGame();