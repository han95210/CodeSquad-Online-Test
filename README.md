# 1단계: 간단 야구 게임 구현하기

## 1단계 클린 코딩
* 함수 기반으로 구현한다.
* 함수의 이름, 매개변수, 반환 값을 고려하여 구현한다.

## 1단계 요구사항
(1) 게임이 시작되면 "첫 번째 타자가 타석에 입장했습니다." 메시지와 함께 경기를 진행한다. <br>
(2) 경기가 진행되면 랜덤하게 스트라이크 / 볼 / 안타 / 아웃 네 가지 중 한 결과가 출력된다. <br>
(3) (2)의 결과의 아래 줄에 누적된 스트라이크(S), 볼(B), 아웃(O) 상황을 출력한다. (아래 예시 참고) <br>
(4) 스트라이크가 3회 누적되면 1 아웃이다. <br>
(5) 볼이 4회 누적되면 1 안타가 된다. <br>
(6) (4)와 (5)의 경우를 포함한 안타 또는 아웃의 경우 "다음 타자가 타석에 입장했습니다." 메시지와 함께 경기가 이어진다. <br>
(7) 다음 타자의 차례에서 현재의 안타, 아웃 카운트는 유지되고, 스트라이크와 볼 카운트는 초기화된다. <br>
(8) 3 아웃이 될 경우 전체 안타수를 출력하고 경기가 종료된다.