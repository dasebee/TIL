# React 라이프 사이클

참고

 https://velopert.com/1130

https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955

--------------

1. constructor

   생성자, 컴포넌트가 만들어질 때 실행, state를 정의

2. componentWillMount

   컴포넌트가 DOM위에 만들어지기 전에 실행, props나 state를 바꾸면 안 됨. Mount중이기 때문, DOM에 render하지 않았기 때문에 DOM에 접근할 수 없음

3. render

   컴포넌트 렌더링

4. componentDidMount

   컴포넌트가 만들어지고 첫 렌더링을 마친 후 실행, setTimeout,setInterval, AJAX처리, DOM에 접근 가능

5. componentWillReceiveProps

   컴포넌트가 prop을 새로 받았을 때 실행

   prop에 따라 state를 업데이트해야 할 때 사용, 여기서 this.setState()를 해도 추가적으로 렌더링하지 않는다.

6. shouldComponentUpdate

   prop이나 state가 변경되었을 때, 리렌더링 여부를 정함, boolean 반환 필요(false이면 render취소 - 쓸데없는 update를 걸러낸다), 바뀔 props에 대한 정보가 첫번째인자

7. componentWillUpdate

   컴포넌트가 업데이트 되기 전에 실행. 여기서 this.setState()를 사용하면 무한루프, 아직 props가 업데이트되지 않아서 state를 바꾸면 또 shouldComponentUpdate가 실행됨. 바뀔 props에 대한 정보가 첫번째인자

8. componentDidUpdate

   컴포넌트가 리렌더링을 마친 후 실행됨, DOM에 접근 가능, 이전 props에 대한 정보를 갖는다.

9. componentWillUnmount

   컴포넌트가 DOM에서 사라진후 실행되는 메소드, 이벤트 리스너를 제거.