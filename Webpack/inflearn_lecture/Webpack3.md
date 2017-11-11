# 3. Webpack Output

<u>**Output 소개**</u>

entry에서 설정하고 묶은 파일의 결과값 설정 (path나 이름 설정)

```javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
  // filename: `[name].js`
  // 파일 이름은 엔트리 포인트를 나누는 것에 따라서 엔트리포인트이름.js로 달라질 수 있다.
}
```



<u>**output name 옵션**</u>

```javascript
output: {
  filename: '[name].js' //1 엔트리명에 따른 이름
  filename: '[hash].js' //2 웹팩 빌드할 때, 빌드에 따라서 파일명을 따로 생성 
  filename: '[chunkhash].js' //3 웹팩 chunk에 따라서 값이 다른 아웃풋 파일을 생성한다. (권고)
}
```



<u>**[부록] path.join() & path.resolve() 소개**</u>

```javascript
path.join('/foo', 'bar', 'baz/') 
// 해당 API가 동작되는 OS의 파일 구분자를 사용하여 파일 위치를 합친다. 
// 결과값이 달라진다.
// 문자열을 그냥 합치는 것
```

```javascript
path.resolve('/foo/bar', './baz');

// 오른쪽에서 왼쪽으로 파일 위치를 구성해가며 유효한 위치를 찾는다. 
// 여러가지 값들을 resolve를 넣을 수 있는데, 필요없는 것은 제외하는것. 
// 웹팩에서 번들링 할 때, 설정이 복잡해지면 거기서 유효하지 않은 것은 제외해주고, 검증이 된 폴더 위치만 잡아준다. 좀 더 안전한 번들링을 위해 사용한다. 
// 결과값이 유효하지 않으면 현재 디렉토리를 사용한다. 
```

