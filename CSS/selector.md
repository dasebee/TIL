# CSS선택자

CSS선택자는 스타일을 적용하고 싶은 웹 페이지 상의 HTML 요소를 선택할 때 사용된다.

--------------

## Simple selector
Element type, class 혹은 id로 하나 이상의 요소에 매치된다. 
 #### 1. Element Selector
```css
p {color: red;}
```
#### 2. Class Selector
```css
.class-selector {font-weight: bold;}
```
#### 3. ID selector
```css
#id-selector {  font-family: cursive;}
```
#### 4. Universal selector
``` css
/*페이지에 있는 모든 요소를 선택한다.*/
* {
  padding: 5px;
  border: 1px solid black;
}
```
--------------
## Attribute selectors
속성 혹은 속성값으로 하나 이상의 요소에 매치된다.
#### 1. Presence and value attribute selectors(현재 상태 및 값 속성 선택자)
+ [attr] : attr 속성을 가진 요소를 선택한다. 
+ [attr=val] : 속성값이 val인 attr 속성을 가진 요소를 선택한다. 
+ [attr~=val]: 속성값에 val이 포함되는 attr 속성을 가진 요소를 선택한다.

#### 2. Substring value attribute selectors (하위 문자열 값 속성 선택자)
+ [attr|=val] : 속성값이 정확히 val이거나 val로 시작되는 attr 속성을 가진 요소를 선택한다. 
+ [attr^=val] : 속성값이 val로 시작되는 attr 속성을 가진  요소를 선택한다.
+ [attr$=val] : 속성값이 val로 끝나는 attr 속성을 가진 요소를 선택한다.
+ [attr*=val] : 속성값이 val이 포함된 attr 속성을 가진 요소를 선택한다. 
  ([attr ~ = val]과 달리 공백을 값 분리 기호로 취급하지 않고 속성 값의 일부로 취급한다.)
-------------------------

## Pseudo-classes(가상 클래스)
+ 특정 상태에 있는 하나 이상의 요소에 매치된다. 
+ 마우스 포인터로 호버, 체크되어 있는 체크박스, DOM 트리의 첫번째 자식 요소 ... 
+ :active, :checked, :first-child, :focus, :hover, :last-child, :not(),
:only-child, :target, :visited 등

## Pseudo-elements(가상 요소)
+ 요소와 관련하여 특정 위치에 있는 하나 이상의 콘텐츠에 매치된다.
+ 각 단락의 첫번째 단어나 요소의 앞에 표시되도록 생성된 콘텐츠 ... 
+ ::after, ::before, ::first-letter, ::first-line, ::selection, ::backdrop

__MDN - Pseudo-classes and pseudo-elements__ : <https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements>

--------------------------

## Combinators(결합자)
Combinator자체는 선택자가 아니지만, 2개 이상의 선택자를 연결하여 편리하게 특정 선택을 하는 방법이다. 
#### 1. A B
+ A의 자손인 B와 일치하는 모든 요소를 선택
#### 2. A > B
+ A의 직접 하위 요소 B와 일치하는 모든 요소를 선택
#### 3. A + B
+ A의 형제중 첫번째 요소만 선택 (동일한 부모의 다음 자식)
#### 4. A ~ B
+ A의 형제중 매칭되는 모든 형제들을 선택

## 복수선택 
+ 같은 CSS 규칙에 복수의 셀렉터를 콤마로 구분하여 기술하는 것으로 하나의 선언 내용을 선택된 모든 요소에게 적용할 수 있는 방법. 

--------------------------
__CSS Diner__ : <http://flukeout.github.io/> 선택자 연습 사이트 