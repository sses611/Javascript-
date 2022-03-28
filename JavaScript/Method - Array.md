
## Array

#### concat : 하나의 배열에 대란 배열의 요소를 결합
#### join : 문자열로 배열의 요소를 분리하여 결합
```
 var weekly = new Array("일","월","화","수");
 var weekly2 = new Array("목", "금", "토");
 
 weekly = weekly.concat(weekly2);
 ▶ document.write(weekly);
 ▶ 일, 월, 화, 수, 목, 금, 토, 일
```

#### pop : 배열의 마지막 요 를 삭제한 후 그 값을 리턴하고 배열의 크기를 줄인다.
#### push : 배열에 하나 또는 여러 개의 값을 넣고 새로운 배열읠 길이를 반환.
```
var weekly = new Array("일","월","화","수");
var poped = weekly.pop(); // 수
var pushed = new Array("목, "금", "토")

weekly.push(weekly); 

▶ document.write(weekly);
▶ 일, 월, 화, 목, 금, 토
```

#### shift / unshift : 배열의 첫요소를 제거 / 베열의 처음에 요소를 추가.
```
 var weekly = new Array("일","월","화","수");
 weekly.shift(); // 월, 화, 수
 weekly.unshift("목, 금");
▶ document.write(weekly);
▶ 목, 금, 월, 화, 수 
 
#### slice : 배열값의 일부분을 선택하여 새로운 배열을 만듬
#### splice : 이전 배열요소를 삭제하고 새로운 내용물을 추가하는 형태로 배열 내용을 변경하고, 삭제된 요소들을 반환
```
 var weekly = new Array("일","월","화","수");
 var sliceArr = weekly.slice(2,4);
 document.write(sliceArr); // 화, 수
 
 weekly.splice(0,3,"일요일", "월요일", "화요일", "수요일");
```
#### reverse : 배열의 요소를 역순으로 변환.
#### sort : 숫자 또는 문자열 순서대로 정렬
#### toLocaleString : 배열의 요소를 format 형태의 문자열로 나타낸다.
#### toString : 배열을문자열로 나타냄
