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
<meta http-equiv="Cache-Control" content="no-cache" /> : zp
<meta http-equiv="Pragma" content="no-chche" />

