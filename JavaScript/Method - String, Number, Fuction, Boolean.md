## String 
```
선언
const title = "자바스크립트"; ▶ typeoof시 String으로 인지
const title = new String("자바스크립트"); ▶ typeoof시 object로 인지

```
#### length : 문자열의 길이를 정수로 나타냄
#### replace : 문자열 수정
```
const test = "가나다라";
const result = test.replace("가","나");
▶ 나나다라
```

#### charAt : 지정된 위치의 문자를 반환
```
const str = "charAt"
document.write(str.chartAt(2));
▶ a
```
#### concat / push / spread operator(...)
```
const arr1 = [1,2,3];
const concatArr = arr1.concat['a', ['b', 'c'], 'abc'];

document.write(concatArr.length()); 
// ▶ 7
document.write(concatArr); 
// ▶1, 2, 3, a, b, c, abc

const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const spreadOperatorArr [
  ...arr1,
  ...arr2,
  ...arr3 ];
document.write(spreadOperatorArr).length()); 
// ▶ 9
document.write(spreadOperatorArr); 
// ▶ 1, 2, 3, 4, 5, 6, 7, 8, 9

arr1.push(arr2);
document.write(arr1.length()); 
// ▶ 4
document.write(arr1[3]); 
// ▶ 4, 5, 6

//...와 push를 합쳐서 사용가능

arr1.push(...arr2);
document.write(arr1.length()); 
// ▶6
// ▶ 1, 2, 3, 4, 5, 6
```

#### slice : 시작위치와 끝 위치의 문자열을 반환
```
const nums = [1, 2, 3, 4, 5, 6, 7];
nums.slice(2, 4); // ▶ 3, 4, 5
nums.slice(2); // ▶ 3, 4, 5, 6, 7 2위치부터 마지막 매열까지
nums.slice(); // 전체

nums.splice(2,4); //  3, 4, 5
nums //1, 2, 6, 7
nums.splice(2, 0, -3, -4, -5); // 1, 2, -3, -4, -5 , 6, 7
```
#### split : 분리자에 의해 단어의 배열 문자열을 자름
```
const str = "apple banana orange";
const arr = str.split();
arr.length(); // 1

const arr= str.split(" ");
arr.length(); // 3
```

#### indexOf : 문자열의 색인 위치를 검색하여 반환 
#### lastIndexOf : 문자열의 마지막 색인 위치를 검색하여 반환  
#### fromCharCode : 콤마로 분리된 문자코드의 문자열을 생성
#### search : 수식을 검색해서 색인 위치를 반환
#### substr : 시작위치에서 끝 위치의 문자열을 반환
#### toLocalLowerCase / toLocalUpperCase : 문자열을 소문자러 변환 / 대문자로 변환
#### toLowerCase / toUpperCase : 모든 문자열을 소문자로 변환 / 대문자로 변환
#### toString : 문자열로 변환
#### valueOf : 객체의 값을 문자열로 반환

## Number
#### constructor
#### MAX_VALUE
#### NaN
#### NEGATIVE_INFINITY
#### POSITIVE_INFIITY
#### prototye

#### toString
#### toFixed
#### toExponential
#### toPrecision
#### ValueOf

## Function
#### length
#### prototype
#### apply
#### call
