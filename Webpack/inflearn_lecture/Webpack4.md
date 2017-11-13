# 4. Webpack Loader

**<u>Loader 소개</u>**

번들링할 때 파일별로 특정 동작을 수행하도록 해주는 것.

로더가 사용되는 이유 : 웹자원(이미지, html등)들이 올바르게 인식되어 javascript에 포함될 수 있도록 하는 것.

모듈의 로딩 순서는 배열 요소의 오른쪽에서 왼쪽으로 진행. 

```javascript
module: {
  rules: [
    {test: /\.css$/, use:['style-loader', 'css-loader']}
  ]
}
```

**<u>Babel Loader</u>**

ES6는 최신 문법이기 때문에, 구형 부라우저같은 경우 ES6의 분법과 기능이 호환이 잘 되지 않는다. 

babel은 모든 브라우저에 호환 가능하게  변환해준다. 

```javascript
module: {
  rules: [{
    test: /\.js$/, //js 파일들 
    user: [{
      loader: 'babel-loader',
      options: {
        presets: [
          ['es2015', 'react', {modules: false}]
        ]
      }
    }]
  }]
}

// preset같은 경우는 .babelrc 파일에 아래와 같이 설정할 수도 있다. 
{
  "presets": ["react", "es2015"]
}
```

**<u>Extract Text Webpack Plugin</u>**   

css를 bundle.js 파일 안에 번들링 하지않고, 빌드시에 별도의 .css 파일로 분리해준다. 

아니면 css 코드가  `<style> </style>`태그에 들어가게 들어가게 된다. 