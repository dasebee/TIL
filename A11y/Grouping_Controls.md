# Form - Grouping Controls

**참고** https://www.w3.org/WAI/tutorials/forms/

----

관련된 폼 컨트롤들을 그룹화하면 관련 컨트롤을 쉽게 식별 할 수 있으므로 모든 사용자가 양식을 이해할 수 있다. 또한 전체 양식을 한 번에 파악하는 것이 아니라 작고 관리하기 쉬운 그룹에 집중하는 것이 더 쉬워진다. 

---------

## 관련된 컨트롤들을 `fieldset`으로 연결

`<fieldset>` 요소는 관련 양식 컨트롤에 대한 컨테이너를 제공하고, `<legend>` 요소는 그룹을 식별하는 제목으로 사용된다.

### 1. Radio buttons/Checkboxes

라디오 버튼과 체크박스는  `<fieldset>`을 사용하여 그룹화되어야한다.

```html
<!--Radio buttons-->
<fieldset>
<legend>Output format</legend>
  <div>
    <input type="radio" name="format" id="txt" value="txt" checked>
    <label for="txt">Text file</label>
  </div>
  <div>
    <input type="radio" name="format" id="csv" value="csv">
    <label for="csv">CSV file</label>
  </div>
</fieldset>
<!--Check box-->
<fieldset>
<legend>I want to receive</legend>
	<div>
	  <input type="checkbox" name="newsletter" id="check_1">
      <label for="check_1">The weekly newsletter</label>
	</div>
  	<div>
      <input type="checkbox" name="newsletter" id="check_2">
      <label for="check_2">TOffers from the company</label>
	</div>
</fieldset>
```

### 2. Related fields

아래 예제의 두 그룹의 레이블이 같은 텍스트를 가지기 때문에 `<fieldset>` 요소는 그룹별로 양식 필드를 구별하는 데 도움이된다. `<legend>`이 스크린리더에서 읽히지 않는 경우(아래 참조) 각 그룹의 첫 번째 양식 컨트롤에 대한 레이블에는 그룹의 이름이 포함되어야 한다. 이 이름은 시각적으로 숨길 수 있다.

> **<참조>** : 구성에 따라서 일부 스크린 리더는 모든 양식 요소의 범례(legend)를 한 번만 읽거나 거의 읽지 않거나 아예 읽지 않는다. 이 문제를 해결하기 위해 다음을 고려한다.
>
> 범례가 매번 레이블과 함께 읽히는 경우 범례를 가능한 짧게 만들 고, 범례가 모든 레이블에서 반복되지 않고 읽히지 않는 경우, 각각의 레이블이 자명해야한다. 

```html
<fieldset>
	<legend>Shipping Address:</legend>
	<div>
		<label for="shipping_name">
      <span class="visuallyhidden">Shipping </span>Name:
    </label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
  <div>
    <label for="shipping_street">Street:</label><br>
    <input type="text" name="shipping_street" id="shipping_street">
  </div>
</fieldset>
<fieldset>
	<legend>Billing Address:</legend>
	<div>
		<label for="billing_name">
      <span class="visuallyhidden">Billing </span>Name:
    </label><br>
		<input type="text" name="billing_name" id="billing_name">
	</div>
  <div>
    <label for="billing_street">Street:</label><br>
    <input type="text" name="billing_street" id="billing_street">
  </div>
</fieldset>
```

------

## 관련된 컨트롤들을 `WAI-ARIA`로 연결

`WAI-ARIA`는 `<filedset>` 및 `<legend>`와 유사하게 기능하는 그룹화 역할을 제공한다. 아래 예에서 `div` 요소에 포함 된 요소가 그룹의 구성원임을 나타 내기 위해 `role = group`을 가지고, `aria-labelledby` 속성은 그룹의 레이블 역할을하는 텍스트의 ID를 참조한다.

WAI-ARIA는 모든 웹 브라우저와 스크린 리더 조합에서 완전히 지원되지 않기 때문에 그룹 식별자가 그룹의 첫 번째 폼 컨트롤에 추가되어야한다.

```html
<div role="group" aria-labelledby="shipping_head">
	<div id="shipping_head">Shipping Address:</div>
	<div>
		<label for="shipping_name">
      <span class="visuallyhidden">Shipping </span>Name:
    </label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
</div>
<div role="group" aria-labelledby="billing_head">
	<div id="billing_head">Billing Address:</div>
	<div>
		<label for="billing_name">
      <span class="visuallyhidden">Billing </span>Name:
    </label><br>
		<input type="text" name="billing_name" id="billing_name">
	</div>
</div>
```

-------------

## `select` 요소의 항목 그룹화

옵션 그룹이있는 `select` 요소의 경우, `optgroup` 요소를 사용하여 이러한 그룹을 나타낼 수 있다. `optgroup` 요소의 `label` 속성은 그룹에 대한 레이블을 제공하는 데 사용된다. 이것은 많은 관련 옵션이있는 목록에 특히 유용하다. 

```html
<select>
	<optgroup label="8.01 Physics I: Classical Mechanics">
		<option value="8.01.1">Lecture 01: Powers of Ten</option>
		<option value="8.01.2">Lecture 02: 1D Kinematics</option>
		<option value="8.01.3">Lecture 03: Vectors</option>
	</optgroup>
	<optgroup label="8.02 Physics II: Electricity and Magnestism">
		<option value="8.02.1">Lecture 01: What holds our world together?</option>
		[…]
	</optgroup>
	[…]
</select>
```

