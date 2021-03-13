# Historical Dynamic Ranking Graphs

이 Repository는 시간의 흐름에 따라 변동하는 데이터를 시각화하기 위한 [Repository](https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js)를 활용하여 각종 데이터를 시각화하기 위한 Repository 입니다.

D3.js를 base로 작성된 프로젝트로 프로그래밍에 대해 별다른 경험이 없는 사용자도 편하게 원하는 데이터를 활용하여 시간의 흐름에 따라 변동하는 랭킹 그래프 애니메이션을 만들 수 있습니다.

기본 레포지토리에서 JS, Config의 주석을 영어로, Readme를 한글로 수정하고 옵션을 추가하는 수정을 통해 더 쉽게 사용할 수 있게 하였습니다.

----

# 한줄 사용법

src폴더의 bargraph.html을 열고 화면 가운데 버튼을 클릭하고 src/example.csv 파일을 선택하면 됩니다.

# 데이터 형식

현재 CSV 형식의 데이터만 지원하고 있습니다.

기본적으로 인코딩 타입은 EUC-KR(CP949)를 지원하고 있으나, Config에서 설정을 변경할 수 있습니다.

현재 src/example.csv 파일은 한국 통계청에서 공개하고 있는 시군구별 이동자수 통계 데이터를 활용하여 만들었습니다.

CSV 구체적인 형식：

| name  | type  | value | date  |
| ----- | ----- | ----- | ----- |
| 이름1 | 타입1 | 값1   | 날짜1 |
| 이름2 | 타입2 | 값2   | 날짜2 |

“name" 값은 그래프 왼쪽에，“type-name” 값은 그래프 위에 쓰여질 Text 값입니다.

"type"에는 빈칸이나 특수문자가 포함되지 않는 것을 권장합니다.

"value" 행에는 반드시 정수 혹은 부동 소수 값이여만 합니다.

"date" 행은 YYYY-MM-DD 형식이어야 합니다.
