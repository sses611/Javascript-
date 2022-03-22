# 메타태그
### 웹 서버와 웹 브라우저 간의 상호 교환되는 정보를 정의하는데 사용, 문서의 정보와 키워드를 담고 있다.


## 속성
### http-equiv="항목명" : 웹 브라우저가 서버에 명령을 내리는 속성으로, name속성을 대신하여 사용 
### content="정보값" : mate의 내용을 지정, name과 http-equiv와 연관된 값을 준다,
### name ="정보이름" : 몇개의 meta 정보의 이름을 정할 수 있으며 지정하지 않으면 http-equiv와 같은 기능을 함

## 종류
keyword : 검색 엔진에 의해 검색되는 단어 지정
```
  <meta name="Keywords" content="DANS"/>
```

Description : 검색 결과에 표시되는 문자를 지정
```
<meta name="Description" content="DANS"/>
```
  
robots : 검색 로봇 제어
```
<meta name="robots" content="" /> 
```
All(기본값) = 'index, follow'
None : 'noindex, nofollow' 를 지정한 것과 같다.
Index : 그 페이지를 수집 대상으로 한다.
Follow : 그 페이지를 포함해 링크가 걸린 곳을 수집대상으로 한다.
Noindex : 그 페이지를 수집대상에서 제외한다. 
          검색 결과에 이 페이지를 표시하지 않음 = Non != index : 수집대상
Nofollow : 이 페이지의 링크를 따라가지 않음 = Non != follow : 수집대상
Noarchive : 검색결과에 저장된 페이지 링크를 표시하지 않음, 캐시를 하지 않음
Noimageindex : 그 페이지에 포함된 이미지를 검색대상에서 제외한다.
Noimageclick : 그 페이지에 포함된 이미지의 링크를 방지한다.

Date : 제작일
```
<meta name="Date" content="2022-03-15"/>
```

charset 
```
<meta charset="UTF-8"> : 문자코드 인코딩 설정
```
웹페이지 문자가 깨지는 경우
1. charset이 미설정된 경우
2. 서버언어가 사용된 경 인코딩 선언의 오류 
3. DB인코딩 설정의 오류

Content-Script-Type : 웹페이지에 쓰인 언어 지정
```
<meta http-equiv="Content-Script-Type" content="Text/javascript" />
```

브라우저 호환성
```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

```
<meta http-equiv="Subject" content="IT" /> : 주제 지정 
<meta http-equiv="Title" content="HTML5"/> : 제목 지정
<meta http-equiv="Author" content="DANS"/> : 제작자 지정 
<meta http-equiv="publisher" content="DANS" /> : 제작사 지정
<meta http-equiv="Other Agent" content="DANS" /> : 웹 책임자
<meta http-equiv="Generator" content="Visual Studio Code" /> : 제작도구
<meta http-equiv="Filename" content="index.html" /> : 파일이름
<meta http-equiv="Location" content="위치" /> 
<meta http-equiv="Distribution" content="name" /> : 배포자
<meta http-equiv="Copyright" content="DANS" /> : 저작권
<meta http-equiv="Build" content="date" /> : 제적년월
<meta http-equiv="Last-Modified" content="" /> 수정년월
```

```
<meta http-equiv="imagetoolbar" content="no" /> : 그림 위 마우스오버시 이마지 툴바 생기지 않게 하기
```
```
<meta http-equiv="Cache-Control" content="no-cache" /> : 페이지를 캐시에서 가져오지 않게 하여 항상 서버에 접속해서 페이지를 가져옴
<meta http-equiv="Pragma" content="no-chche" />
```

```
<meta http-equiv="Expires" content="Mon,  08 Sep 2016 10:10:10 GMT" /> : 캐쉬 만료일 지정
```

```
<meta http-equiv="refresh" content="60" /> : 60초마다 새로고침하도록 지정
<meta http-equiv="refresh" content="5; url = 주소" /> 입력한 주소로 5초후 이동
```

```
<meta http-equiv="refresh" content="revealtrans(Duration=1, Transition=12)" />
```

1. Box out : 네모난 박스가 안쪽에서 바깥쪽으로
2. Circle in : 원이 바깥에서 안쪽으로
3. Circle out : 원이 안쪽에서 바깥쪽으로
4. Wipe up : 이미지의 아래에서 위쪽으로 수직 이동
5. Wipe down : 이미지의 위에서 아래쪽으로 수직 이동
6. Wipe right : 이미지의 왼쪽에서 오른쪽으로 수평 이동
7. Wipe left : 이미지의 오른쪽에서 왼쪽으로 수평 이동
8. Vertical blinds : 수직 블라인드가 쳐지는 형태로 변환
9. Horizontal blinds : 수평 블라인드가 쳐지는 형태로 변환
10. Checkerboard across : 바둑판 형태의 격자가 왼쪽에서 오른쪽으로 생성
11. Checkerboard down : 바둑판 형태의 격자가 위에서 아래로 생성
12. Random dissove : 안개와 비슷한 형태로 전환
13. Split vertical in : 왼쪽과 오른쪽 끝에서 중앙으로 수직 이동
14. Split vertical out : 중앙에서 양쪽 끝으로 수직 이동
15. Split Horizontal in : 양쪽에서 중앙으로 수평 이동
16. Split Horizontal out : 중앙에서 양쪽 끝으로 수직이동
17. Strips left down : 대각선 형태로 오른쪽 상단에서 왼쪽 하단으로 이동
18. Strips left up : 대각선 형태로 오른쪽 하단에서 왼쪽 상단으로 이동
19. Strips right down : 대각선 형태로 왼쪽 상단에서 오른쪽 하단으로 이동
20. Strips right up : 대각선 형태로 왼쪽 하단에서 오른쪽 상단으로 이동
21. Random bars horizontal : 수평선이 무작위로 생성
22. Random bars vertical : 수직선이 무작위로 생성
23. Random : 임의로 생성 
