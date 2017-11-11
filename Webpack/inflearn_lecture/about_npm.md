# [부록]Webpack을 위한 NPM소개 

**<u>NPM(Node Package Manager)소개</u>**

javascript 라이브러리들이 모여있는 저장소

Gulp, Webpack 모두 node기반으로 npm을 사용하여 라이브러리를 로딩한다

module, package : 재사용 가능한 code단위를 의미함

package.json : npm으로 다운받거나 업데이트하거하는 모든 파일 정보가 들어가있는 파일



**<u>[실습] NPM 명령어 & package.json 파일</u>**

`npm init` : package.json을 생성. -y를 붙이면 default값으로 자동 생성된다.



<u>**[실습] NPM지역 & w전역 설치 (Local & Global Install)**</u>

`npm install 패키지명 --save` : 해당 패키지를 npm 저장소로부터 다운 받는다.

Global 설치 vs Local 설치

`npm install 패키지명 -global` : 현재 위치가 아닌 시스템 레벨에서 설치가된다. cli에서 사용하려면 global로 설치 

local 설치는 현재 폴더의 node_modules에 추가가 된다.local로 설치하여 webpack.config.js에서 require한다.



<u>**[실습] NPM install --save와 --save-dev**</u>

`npm install 패키지명 --save` : 앱이 구동하기 위해 필요한 모듈&라이브러리 설치, package.json의 dependencies에 추가가 된다. ex) vue, react  

`npma` : 앱 개발시에 도움이 되고 개발을 빨리하게 해주는 라이브러리,package.json의 devDependencies에 추가가 된다. ex) test, build tool, live reloading

