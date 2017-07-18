# jQuery 

## Core

### jQuery()

DOM을 검색하여 제공된 값과 일치하는 요소를 참조하는 새로운 jQuery 개체를 생성한다. `$()`로도 적을 수 있다. 

일치하는 요소가 없으면 jQuery 객체는 비어있고,  `.length`는 0 이다. return은 jQuery 객체.

기본적으로 root에서 검색을 시작하지만, 두번째 매개변수로 context를 지정할 수 있다. 

```javascript
$( "div.foo" ).click(function() {
  $( "span", this ).addClass( "bar" );
});
```

 ###  jQuery.noConflict()

jQuery가 $ 변수를 제어하지 못하게한다.

### jQuery.ready

문서로드가 끝나면 jQuery 코드가 실행되도록 한다. 

```javascript
$(document).ready(function(){
   // jQuery methods go here...
});
```

`$(function)` 으로도 적을 수 있다. 

```javascript
$(function(){
   // jQuery methods go here...
});
```

-------------

## Attributes

### .addClass()

요소에 지정된 클래스를 추가한다.  return은 jQuery객체

```javascript
$( "p" ).addClass( "myClass yourClass" );
$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
```

함수를 인자로 받을 수도 있다. 

```javascript
$( "ul li" ).addClass(function( index ) {
  return "item-" + index;
});
```

### .attr()

일치하는 요소 집합의 첫 번째 요소의 속성 값을 가져 오거나, 일치하는 모든 요소에 대해 하나 이상의 속성을 설정

1. 속성값을 가져올 때 (return은 string)

```html
<p>Once there was a <em title="huge, gigantic">large</em> dinosaur...</p>
```

```javascript
$( "em" ).attr( "title" );  //'huge, gigantic'
```

2. 속성을 설정할 때 (return 은 jQuery)

```javascript
$("div" ).attr( "id","div-id")
```

### .hasClass()

지정된 클래스를 가지고 있는지 확인. return boolean.

```html
<div id="mydiv" class="foo bar"></div>
```

```javascript
$( "#mydiv" ).hasClass( "foo" )   //true
$( "#mydiv" ).hasClass( "quux" )  //false
```

### .removeClass()

클래스를 제거. 함수를 인자로 받을 수도 있다. return jQuery

```javascript
$( "p" ).removeClass( "myClass yourClass" )
```

### .toggleClass()

클래스의 존재 여부에 따라 클래스를 추가하거나 제거한다.  return jQuery

```javascript
$( "div.tumble" ).toggleClass( "bounce" )
```

-------------

## css

### .css()

일치하는 요소 집합의 첫 번째 요소의 스타일 속성을 가져 오거나, 일치하는 모든 요소에 대해 하나 이상의 CSS 속성을 설정. 

1. 속성을 가져올 때 

   + `.css("background-color")`와 `.css("backgroundColor")` 모두 인식 가능하다. 

   + .css ()에 스타일 속성 배열을 전달하면 객체를 반환한다. 

     ```javascript
     $(elem).css([ "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"]);
     // {borderTopWidth: "1px", borderRightWidth: "1px", borderBottomWidth: "1px", borderLeftWidth: "1px"}
     ```


2. 속성을 설정할 때

   + .css ()를 사용하여 속성을 설정하면 jQuery는 요소의 스타일 속성을 수정한다.

   `$( "#mydiv" ).css( "color", "green" )` 와 `document.getElementById( "mydiv" ).style.color = "green"`는 동일 하다.

   +  `+=` 나 `-=` 로 값을 증가, 감소 시킬 수 있다. `.css("padding-left", "+=15" )`
   +  함수를 인자로 받을 수 있다. 

   ```javascript
   $( "div.example" ).css( "width", function( index ) {
     return index * 50;
   });
   ```

### .scrollTop()

선택된 요소의 세로 스크롤 바의 위치를 가져오거나 설정할 수 있다. return number

```javascript
//get
$("div").scrollTop();
//set
$( "div" ).scrollTop( 300 );
```

-------------

## Effects 

### show()

일치하는 요소를 표시한다. 

```javascript
$( ".target" ).show();
```

**option**

+ duration : 애니메이션이 실행되는 시간. fast=== 200, slow === 600  

### hide()

일치하는 요소를 숨긴다. 

```javascript
$( ".target" ).hide(); // == $(".target").css("display", "none")
```

----------

## Traversing 

### find()

DOM 요소 집합을 나타내는 jQuery 객체가 주어지면 .find () 메서드를 사용하여 DOM 트리에서 이러한 요소의 자손을 검색하고 일치하는 요소에서 새 jQuery 객체를 생성 할 수 있습니다.