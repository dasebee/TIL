## 1. Webpack 소개

**<u>Webpack이란?</u>**

웹페이지를 구성할 때 필요한 파일들의 관계를 웹팩에서 인식하고 웹페이지에 올라가기 직전에 최적화된 파일로 만들어 내는 것. 



**<u>Webpack을 사용하는 이유 & 배경</u>**

Web Task Manager + 자바스크립트 모듈 관리



<u>**[부록]자바스크립트 모듈화 문제**</u>

javascirpt는 파일 단위로 scope가 쪼개지지 않는다 

문제점: 전역변수 충돌, 스크립트 로딩순서, 복잡도에 따른 관리상 문제 

이 문제점을 해결하기 위해 모듈 로더들이 등장했다.  



**<u>Webpack 철학</u>**

1. 모든 것이 모듈이다. 모든 웹 자원들 (js, css, html) 은 모두 로딩된다.  

2. 초기에 모두 로딩하지 않고, 해당 페이지에 필요한 것들만 그때그때 로딩한다. 

   ​

**<u>[실습] Webpack 시작하기</u>** 

1. 웹팩 전역 설치

   > npm install webpack -global

2. package.json 생성

   > npm init -y

3. index.js 와 index.html 작성

4. lodash 설치

   > npm install lodash --save

5. index.js에서 lodash import 

   > import _ from 'lodash'

6. index.js 번들링

   > webapck app/index.js dist/bundle.js

7. index.html 에서 index.js가 아닌 bundle.js 불러오기 

     => 여러개의 script파일을 불러오던것이 bundle.js 하나가 된다. 

8. webpack.config.js 작성

   ```javascript
   var path = require('path');

   module.exports = {
     entry: './app/index.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
     }
   };
   ```

   + entry : 번들링할 대상
   + output : 번들링해서 나오는 파일 이름과 경로

   webpack.config.js 파일을 설정하면 webpack 명령어를 쳤을 때, 자동으로 webpack.config.js파일을 찾게되고, 파일의 내용대로 Webpack이 작업을 수행한다. 

   ​

