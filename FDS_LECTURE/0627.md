# Node.cloneNode

> ```javascript
> var dupNode = node.cloneNode(deep);
> ```

+ `node` 	  복제 할 노드  

+ `dupNode`  새롭게 생성된  `node` 의 복제

+ `deep`        선택사항. 

  `node` 의 자손 노드도 복제할 경우는  `true`  / `node` 만을 복제할 경우는  `false`

  `true`를 하더라도 자손 노드의 이벤트까지 복제되지는 않는다. 

----



# Array.prototype.forEach()

> ```javascript
> arr.forEach(callback[, thisArg])
> ```

+ `callback`
  `currentValue`  배열에서 현재 처리 중인 요소. 

  `index`               배열에서 현재 처리 중인 요소의 인덱스.  

  `array`              `forEach()`가 적용되고 있는 배열. 

+ `thisArg`          선택 사항. 

  `callback`을 실행할 때 `this`로서 사용하는 값.



**for과 forEach의 차이점**

`for`는 `break`를 만나면 멈추지만 `forEach`는 멈출 수 없다. 

`for`는 index의 step 설정하거나 역순 순환이 가능하지만,  `forEach`는 1씩 증가하며 순환한다. 



-------------------------------

# Element.classList

> ```javascript
> const elementClasses = elementNodeReference.classList;
> ```

**elementNodeReference**의 클래스 속성을 나타내는 [DOMTokenList]이다. 만약 클래스 속성이 설정되어 있지 않거나 비여있다면 **elementClasses.length**는 0을 반환한다. `element.classList `그 자체는 읽기전용 프로퍼티이지만 `add()`와 `remove()` 메서드를 이용하여 변형할 수 있다.



#### 메서드

+ `add( String [, String] )` : 특정 클래스 값을 추가. 만약 요소의 속성에 추가하려는 클래스가 존재한다면 무시

+ `remove( String [, String] )` : 특정 클래스 값을 제거

+ `item` : 클래스 값을 콜렉션의 인덱스를 이용하여 반환.

+ `toggle( String [, force] )` 

  한개의 인수만 있을 때 : 클래스 값을 변환. 즉 클래스가 존재한다면 지우고 false를 반환하며, 존재하지 않다면 그것을 추가하고 true를 반환한다.
  두번째 인수가 있을 때 : 두번째 인수가 true로 평가되면 특정 클래스 값을 추가하고 false로 평가되면 지운다.

+ `contains( String )` : 특정 클래스 값이 요소의 클래스 속성에 존재하는지 확인한다.