# this

**참고** : [[mdn:this]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this) , [[poiemaweb:this]](http://poiemaweb.com/js-this)

----

## 전역 컨텍스트

전역 실행 컨텍스트에서 this는 전역 객체를 나타낸다. 

```javascript
console.log(this === window) // true

this.a = 37;
console.log(window.a); //37
```

---

## 함수 컨텍스트

함수 호출 패턴에 따라 `this`의 참조값이 달라진다.

### 1.  단순 함수 호출

단순 함수 호출의 경우, `this`  값은 호출에 의해 설정되지 않는다. 기본적으로 글로벌 오브젝트로 설정된다. 

**strict mode**에서는 `this` 의 값은 context에 들어갔을 때에 설정된 값이 남는다. 정의되지 않는 경우는 undefined 가 남는다. 

```javascript
function f1(){
  return this;
}
f1() === window; // true , this는 global object

// strict mode
function f2(){
  "use strict"; 
  return this;
}
f2() === undefined;
```

### 2. 객체의 메소드

함수가 한 객체의 메소드로 호출되었을 때, `this`는 메소드가 호출된 객체이다. 

```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop; 
  }
};
console.log(o.f()); // 37출력  this.prop === o.prop
```

### 3. 객체의 prototype 체인

메소드가 한 객체의 prototype 체인에 있다면, 마치 메소드가 객체에 있는 것 처럼 `this`는 메소드를 호출한 객체를 나타낸다. 아래 예제에서 **p**자신은 **f**를 갖지 않지만, **prototype**에서 상속을 받는다.  **f**는 **p**의 메소드로서 호출되었기 때문에, `this`는 **p**를 참조한다. 

```javascript
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

### 4. 생성자

함수가 new 키워드와 함께 생성자로서 사용될 때,  `this` 는 새롭게 생성된 객체에 연결된다.

```javascript
function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37
```

### 5. call과 apply

this를 특정 객체에 명시적으로 바인딩한다. 

```javascript
function add(c, d){
  return this.a + this.b + c + d;
}
var o = {a:1, b:3};

// 첫번째 매개 변수는 'this'로 사용할 객체이고,
// 다음 매개 변수들은 호출되는 함수에 인수로 전달된다.
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// 첫번째 매개 변수는 'this'로 사용할 객체이고,
// 두번째는 호출되는 함수에 인수로 사용되는 멤버들의 배열이다.
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

### 6. bind

`bind()`메서드는 호출되었을 때 새로운 함수를 생성한다. 첫번째 인자는 새로운 함수의 `this`가 된다. 

```javascript
function f(){
  return this.a;
}

var g = f.bind({a:"abc"});
console.log(g()); // abc를 출력 , this는 {a:"abc"}이고 this.a는 "abc"

```

### 7. DOM 이벤트 핸들러

함수가 이벤트 핸들러로 사용될 때는, `this`는 이벤트가 발생한 엘리먼트로 설정된다.

```javascript
var elements = document.getElementsByTagName('button');
elements.onclick= function(){
	console.log(this);
} // this는 버튼 요소, 클릭하면 console에 버튼 요소를 출력한다. 
```

### 8. in-line 이벤트 핸들러

코드가 in-line 핸들러에서 호출 될 때, `this`는 리스너가 위치한 DOM 엘리먼트가 할당된다.

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

### 9. Arrow Function 

Arrow function은 자신만의 this를 생성하지 않고 자신을 포함하고 있는 컨텍스트로 부터 this를 계승 받는다. 이를 **Lexical this**라 한다.  

아래 예제에서 함수가 호출되는 방법에 상관없이  `this` 는 생성되었을 때의 값을 갖고 있는다. 

```javascript
var globalObject = this; //window
var foo = (() => this);
console.log(foo() === globalObject); // true
// 오브젝트 메서드로 호출
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true
// call 을 사용하여 this 설정을 시도
console.log(foo.call(obj) === globalObject); // true
// bind 를 사용하여 this 설정을 시도
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

