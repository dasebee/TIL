# let

> `let`은  선언된 블록 유효 범위에 상관없이 전역 또는 함수 유효 범위를 갖는 `var`키워드와는 달리, 변수가 사용되는 블록, 구문 또는 표현식 유효 범위를 갖는 변수를 선언한다.

```javascript
//var로 선언한 경우.
var a = 1;
if (a < 2){ var test = 'test';}
console.log(test); //console에 test가 출력된다. 

//let으로 선언한 경우.
var a = 1;
if (a < 2){ let test2 = 'test2';}
console.log(test2); //ReferenceError
```



## 유효범위 규칙

> `let`으로 선언한 변수는 변수를 선언한 블록과 그 내부 블록들에서 유효하다. 이럴 경우, `let`은 `var`와 같이 동작한다. 가장 큰 차이점은` var` 변수의 유효 범위는 전체 외부 함수까지라는 점이다.

```javascript
//var 선언. 
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // 처음에 할당했던 값이 31이 71로 덮어쓰기 된다.  
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

//let 선언 - 1  
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // 위에 31을 할당했던 x와는 다른 변수를 선언하는 것. if문 안에서 유효.
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

//let 선언 - 2
function letTest() {
  let x = 31;
  if (true) {
     x = 71;  // 처음에 할당했던 값이 31이 71로 덮어쓰기 된다.  
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

```



## 에러발생

> 동일한 함수 또는 블록 범위에서 동일한 변수를 재선언시 `TypeError`가 발생한다.

```javascript
if (x) {
  let foo;
  let foo; // TypeError
}
```



> `switch`문 사용 시에는 하나의 기본 블록만이 있기 때문에 에러가 발생할 수 있다.

```javascript
//switch문이 하나의 블록이기 때문에, 동일한 블록 범위에서 동일한 변수를 재선언하여 TypeError 발생.
switch (x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // TypeError for redeclaration.
    break;
}
```



## 일시적인 사각지대(Temporal dead zone)

>  블록 내에서 변수가 선언되기 전에 해당 변수를 참조할 경우 `ReferenceError`가 발생한다. 이 변수는 블록의 시작부터 선언되어질 때까지 “일시적 사각 지대”에 있다.

```javascript
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
```



