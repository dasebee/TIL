# 2.Webpack Entry

<u>**Entry 소개**</u>

webpack으로 묶을 모든 라이브러리들을 로딩할 시작점. 

엔트리는 문자, 배열, 객체의 형태로 지정할 수 있다.  

`entry: './public/src/index.js'`, `entry: ['./public/src/index.js']`, `entry:{index : './public/src/index.js'}`



<u>**Entry 유형**</u>

```javascript
var config = {
  // 1
  entry: './path/to/my/entry/file.js'
  // 2 - 앱 로직용, 외부 라이브러리용 
  // 한번만 불러오면 되는 것을 구분하기 위해, 엔트리 포인트를 분리할 수 있다. 
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
  // 3 - 페이지당 불러오는 js 설정
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
```

