# 객체

**[자바스크립트 완벽 가이드] 객체 파트 공부**

---------------------



+ 자바 스크립트의 기본 데이터 타입. 

+ 이름과 값으로 구성된 프로퍼티들의 정렬되지 않은 집합. 문자열을 값에 대응시키는 구조. 

+ '프로토타입' 이라고하는 다른 객체의 프로퍼티를 상속받는다. 

+ 객체는 참조(reference)를 통해 조작한다. 

   `var y = x;` 가 실행될 때 y는 x와 같은 객체를 참조하며, 객체 자체를 복사하지는 않는다.  

+ 프로퍼티의 이름은 빈 문자열을 포함한 어떤 문자열이든 될 수 있지만, 객체가 같은 이름의 프로퍼티를 두 개 가질 수는 없다. 

+ 네이티브 객체(native object) : ES명세에 정의된 객체 또는 그 객체의 클래스, Array, Function, Date, 정규 표현식

+ 호스트 객체(host object) :  브라우저와 같이 자바스크립트 인터프리터가 내장된 호스트 환경에 정의된 객체. 

+ 사용자 정의 객체(user-defined object) : 자바스크립트 코드의 실행으로 생성된 객체. 

+ 고유 프로퍼티(own property) : 객체에 직접 정의된 프로퍼티. 

+ 상속받은 프로퍼티(inherited property) : 객체의 프로토타입 객체가 정의한 프로퍼티 

  ​

----------

## 1. 객체 생성하기

### 1-1) 객체 리터럴

+ 중괄호({})안에, 이름과 값을 쌍점(:)으로 구분한 순서 쌍을 쉼표로 연결한 리스트. 
+ 프로퍼티 이름으로는 자바스크립트 식별자 또는 문자열을 사용할 수 있다. 
+ 프로퍼티 값으로는 자바스크립트 표현식을 사용할 수 있다. 표현식의 값은 곧 프로퍼티의 값이 된다. 
+ 객체 리터럴은 평가될 때 마다 새로운 객체를 생성하고 초기화하는 표현식. 

```javascript
var empty = {}; 								//프로퍼티가 없는 빈 객체
var point ={x:0, y:0};							//두 개의 프로퍼티 x,y를 정의
var point ={x:point.x, y:point.y+1};			 //프로퍼티를 수식의 값으로 정으. 
var book = {
  'main title':'JavaScript',				    //프로퍼티의 이름은 공백과
  'sub-title':'The Definitive Guide',            //하이픈을 포함 할 수 있다. 
  'for':'all audiences',
  author:{									  //프로퍼티 author의 값은 객체  			
    firstname:'David',
    surname: 'Flanagan'
  }
};
```



### 1-2) new를 사용해 객체 생성하기

+ new 연산자는 객체를 만들고 초기화한다. new 키워드 다음에는 반드시 함수 호출문이 와야 한다. 
+ 이때 호출되는 함수를 생성자(constructor)라고 하는데, 새로 생성된 객체를 초기화하는 역할을 한다. 
+ 코어 자바스크립트는 기본 타입에 대한 생성자를 내장하고 있다.
+ 미리 작성된 생성자뿐 아니라, 원하는 형태의 객체를 생성하고 초기화하기 위해 임의의 생성자 함수를 직접 정의할 수도 있다. 

```javascript
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");
```



### 1-3) 프로토타입

+ 객체 리터럴로 생성된 모든 객체는  프로토타입 객체가 같으며, 이 프로토타입 객체는 Object.prototype으로 참조 할 수 있다. 
+ new 키워드를 사용해서 생성자를 호출하면, 생성자 함수의 프로토 타입이 생성된 객체의 프로토타입이 된다. 
+ new Object로 생성된 객체는 {}로 생성된 객체와 마찬가지로 Object.prototype를 상속받는다. 
+ Object.prototype 프로토타입이 없는 객체, 아무런 프로퍼티도 상속 받지 않는다. 
+ 모든 내장 생성자와 대부분의 사용자 정의 생성자는 Object.prototype을 상속하는 객체를 프로토타입으로 갖는다. 
+ 프로토타입 체인 : 프로토타입 객체들이 연결된 것. (new Date()로 생성한 Date 객체는 Date.prototype과 Object.prototype으로 부터 프로퍼티를 상속받는다 )



### 1-4) Object.create()

+ Object.create()는 객체를 생성하는 매서드, 이 매서드의 첫 번째 인자가 프로토타입 객체.

```javascript
var o1 = Object.create({x:1, y:2})     
// o1은 x,y 프로퍼티를 상속받는다. ===> o1의 __proto__는 {x:1, y:2} 
```

- 프로토타입을 갖지 않는 새 객체를 만들기 위해서는 함수에 null을 전달하면 된다. 이 경우 어떠한 객체도 상속 받지 않기 때문에 toString()과 같은 기본적인 메서드조차 사용할 수 없다. 
- 일반적인 빈 객체를 만들고 싶다면, 함수에 Object.prototype을 전달 한다.

```javascript
var o3 = Object.create(Object.prototpye)
```



----------

## 2. 프로퍼티 접근 및 설정

+ 프로퍼티의 값을 가져오기 위해서는 마침표(.) 연산자 또는 대괄호([]) 연산자를 사용한다. 
+ 연산자 좌측에는 객체로 평가되는 표현식이 와야한다. 
+ 마침표 연산자를 사용할 경우에는 연산자 우측에 반드시 프로퍼티 이름이 식별자로 와야한다. 
+ 대괄호 연산자를 사용할 경우, 대괄호 안의 값은 받느시 프로퍼티 이름의 문자열로 평가되는 표현식이어야한다. 

```javascript
var author = book.author;
var name = author.surname;
var title = book['main title'];
```

+ 프로퍼티를 만들거나 설정할 때도 객체의 프로퍼티에 접근할 때와 동일하게 마침표 또는 대괄호를 사용.

```javascript
book.edition = 6 					//book 객체에 edition 프로퍼티를 만든다. 
book.['main title'] = "ECMAScript"	 //'main title' 프로퍼티를 만든다. 
```

### 2-1) 연관 배열로서의 객체 

+ 연관배열(associative array) : 숫자가 아닌 문자열을 인덱스로 갖는 배열에 접근하는 형태. 
+ []연산자를 사용해 객체의 프로퍼티에 접근할 때는 프로퍼티의 이름을 문자열로 표현한다. 문자열은 자바스크립트의 자료형이므로 프로그램 실행 중에 생성하고 조작할 수 있다. 

```javascript
var addr = '';
for (i = 0; i<4; i++){
  addr += custromer['address'+ i] + '\n';
}
//customer객체의 address0 ~ address3 프로퍼티 값을 읽고 읽은 값을 addr변수에 이어 붙인다.  
```

### 2-2) 상속

+ 객체는 고유 프로퍼티를 가지고 있으며,  해당 객체의 프로토타입 객체로부터 여러 프로퍼티를 상속받는다.

```javascript
//예제의 inherit()은 특정 프로토타입을 사용해 객체를 생성하는 사용자 정의 함수
var o = {}				
o.x = 1;				
var p = inherit(o);		 
p.y = 2; 			    
var q = inherit(p);		 
q.z = 3;
var s = q.toString();		//q는 Object.prototype을 상속받았기 때문에, toString() 사용가능.
q.x + q.y 				   //q의 프로퍼티 x와 y는 각각 객체 o와 p에서 상속받았다. 
```

### 2-3) 프로퍼티 접근 에러

+ 프로퍼티 접근 표현식을 사용해도 항상 값을 얻을 수 있거나 값을 설정할 수 있는 것은 아니다. 

+ 존재하지 않는 프로퍼티 접근 표현식은 undefined를 반환한다. 

  ```javascript
  book.subtitle //undefined를 반환
  ```

+ 존재하지 않는 프로퍼티에 접근하려고 하면 에러가 발생한다. 

  ```javascript
  var len = book.subtitle.length //Type Error 예외를 발생시킨다.undefined는 length프로퍼티가 없다
  ```

+ 프로퍼티가 읽기 전용 속성을 갖고 있으면 값을 설정할 수 없을 수도 있고, 객체가 새 프로퍼티를 추가하는 것을 허용하지 않을 수도 있다. 

  ```javascript
  Object.prototype = 0; //Object.prototype은 바뀌지 않고, 예외가 발생하지 않는다.
  					//strict mode에서는 프로퍼티 값을 설정하는데 실패하면 TypeError 발생.
  ```

  ​

-----------------

## 3. 프로퍼티 삭제하기

+ delete 연산자는 객체의 프로퍼티를 삭제한다. 하나의 피연산자를 갖는데 이 때 피연산자는 올바른 프로퍼티 접근 표현식이어야 한다. 

+ 프로퍼티의 값을 지우는 것이 아니라 프로퍼티를 지운다. 

+ 상속받은 프로퍼티가 아닌 고유 프로퍼티만 지울 수 있다. 

+ 상속받은 프로퍼티는 해당 프로퍼티가 정의된 프로토타입 객체에서 지워야한다. 삭제하면 해당 프로토타입 객체를 상속한 모든 객체가 영향을 받는다. 

  ```javascript
  o = {x:1}			
  delete o.x; 		// 객체 o에서 프로퍼티 x를 지우고, true를 반환
  delete o.x;			// x가 없기 때문에 아무일도 하지 않고 true를 반환
  delete o.toStirng	// toString은 o의 고유 프로퍼티가 아니기 때문에 아무일 하지 않고 true반환
  delete 1 		   // 말도 안 되지만 true를 반환한다. 
  ```



------

## 4. 프로퍼티 검사하기 

+ in 연산자 : 왼쪽에 프로퍼티 이름이 문자열로 오고, 오른쪽에는 객체가 온다. 객체에 해당 프로퍼티가 존재하면 true를 반환한다. 

  ``` javascript
  var o = {x:1};
  "x" in o;		//객체 o에 고유 프로퍼티 x가 존재하므로 true를 반환한다. 
  "y" in o;		//객체 o에 고유 프로퍼치 y가 존재하지 않으므로 false를 반환한다. 
  'toString' in o  //객체 o에 상속받은 프로퍼티 toString이 존재하기 때문에 true를 반환한다.
  ```


+ hasOwnProperty() 메서드는 주어진 이름의 프로퍼티가 객체에 존재하는지 검사. 상속받은 프로퍼티는 false를 반환. 

  ```javascript
  var o ={ x:1 };
  o.hasOwnProperty('x'); //객체 o에 고유 프로퍼티 x가 존재하므로 true를 반환한다. 
  o.hasOwnProperty('y'); //객체 o에 고유 프로퍼치 y가 존재하지 않으므로 false를 반환한다. 
  o.hasOwnProperty('toString'); //toString은 상속받은 것이기 때문에 false를 반환한다. 
  ```

+ undefined가 아닌지만 확인할 때는 in 연산자 대신 논리 연산자 !==를 사용하는 것이 효과적이다. 

  ```javascript
  var o = { x: 1}
  o.x !== undefined;			//true
  o.y !== undefined; 			//false
  o.toSting !== undefined; 	//true

  //프로퍼티의 존재 유무를 확인할 때, 만약에 프로퍼티의 값이 undefined라면 !==가 아닌 in으로 확인 
  var o2 = {x: undefined}
  o.x !== undefined; 			//flase
  "x" in o;				   //true
  ```



--------------------

## 5. 프로퍼티 열거하기

+ for/in 루프 : 지정한 객체가 가진 고유 프로퍼티 또는 상속된 프로퍼티들 중 열거 가능한 프로퍼티들 마다 for/in루프의 몸체가 실행.

  ```javascript
  var o = {x:1, y:2, z:3}
  o.propertyIsEnumerable('toString');  //false : toString은 열거할 수 없는 프로퍼티.
  for (p in o)
    console.log(p);				   //x,y,z를 출력. toString은 출력되지 않는다. 
  ```

+ Object.keys() : 해당객체가 가진 고유 프로퍼티 중에 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환. 

+ Object.getPropertyNames(): 해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열로 반환.

  ​