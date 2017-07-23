# Ajax

#### Ajax(Asynchronous JavaScript and XML)

Javascript를 이용하여 비동기적으로 서버와 통신하는 방식. 사용자가 필요로 할 때, 해당 데이터만 가져오기 때문에 서버의 부담이 줄고 사용자는 더 빠르게 이용할 수 있다. 

#### XMLHttpRequest

Ajax 통신을 하기 위해 사용하는 객체, 서버측으로 다양한 형식(JSON, XML, HTML 및 일반 텍스트 형식 등)의 정보를 주고 받을 수 있다.

+ `new XMLHttpRequest()`

  JavaScript를 이용하여 서버로 보내는 HTTP request를 만들기 위해서는 이런 기능을 제공하는 인스턴스가 필요.

  ```javascript
   httpRequest = new XMLHttpRequest();
  ```


+ `onreadystatechange`

  서버로 보낸 요청에 대한 응답을 받았을 때 어떤 동작을 할 것인지를 정의

  ```javascript
  httpRequest.onreadystatechange = function(){
      // process the server response
  }; 
  ```

+ `open()` 

  첫번째 파라미터 : HTTP메서드 - GET,POST,HEAD중 하나이거나 서버에서 지원하는 다른 방식

  두번째 파라미터 : 요구할 페이지의 URL

  세번째 파라미터 : 비동기식 수행 여부	 

  `send()` 의 파라미터는 POST 방식으로 요구한 경우 서버로 보내고 싶은 어떠한 데이터라도 가능하다. 

  데이터는 서버에서 쉽게 parse할 수 있는 형식이어야 한다.       

  ```javascript
  httpRequest.open('GET', 'http://www.example.org/some.file', true);
  httpRequest.send(null);
  ```

+ `readyState` : 요구의 상태값 검사 

  0 (uninitialized), 1 (loading), 2 (loaded), 3 (interactive), 4 (complete)

  ```javascript
  if (http_request.readyState == 4) {
      // 이상 없음, 응답 받았음
  } else {
      // 아직 준비되지 않음
  }
  ```

+ `status` : HTTP 서버 응답의 상태 코드 

  ```javascript
  if (http_request.status == 200) {
      // 이상 없음!
  } else {
      // 요구를 처리하는 과정에서 문제가 발생되었음
      // 예를 들어 응답 상태 코드는 404 (Not Found) 이거나
      // 혹은 500 (Internal Server Error) 이 될 수 있음
  }
  ```

+ 서버에서 받은 데이터를 통해 원하는 작업을 수행. 

  - `http_request.responseText` : 서버의 응답을 텍스트 문자열로 반환.
  - `http_request.responseXML` : 서버의 응답을 `XMLDocument` 객체로 반환.