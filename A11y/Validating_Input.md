# Form - Validating Input

**참고** https://www.w3.org/WAI/tutorials/forms/

---------

지침을 제공하는 것 외에도 사용자가 실수를하지 않도록 사용자 입력의 유효성을 검사를 할 것. HTML5는 이메일 주소 및 날짜와 같은 일반적인 입력 유형의 유효성을 검사하는 기본 제공 기능을 정의한다. 일부 상황에서는 사용자 입력의 유효성을 검사하기 위해 추가 스크립팅이 필요할 수 있다.

----------

## Validating required input

폼은 종종 레이블로 명확하게 식별해야하는 필수 입력 요소를 포함한다.  필수 항목임을 나타내기 위해 폼 컨트롤에 `required` 속성을 추가 할 수 있다. 대부분의 최신 웹 브라우저는이 속성을 지원하며 표준 웹 브라우저 대화 상자를 사용하여 누락 된 필수 입력을 사용자에게 전달한다. 

아래 예에서는 `required` 속성이 입력 필드에 추가되어있다. 웹 브라우저가 HTML5를 지원하는 경우 텍스트를 입력 필드에 입력하지 않고 양식을 제출할 수 없다. 대신 웹 브라우저 자체에서 생성 된 메시지를 표시한다.

보조 기술을 사용하지 않거나 HTML5 필수 속성을 지원하지 않는 이전 웹 브라우저를 사용하는 사용자에게 알리기 위해 레이블에 '필수'라고 표시한다.

`aria-required` 속성은 보조 기술이 필수 컨트롤을 사용자에게 알릴 수 있도록 한다.  (입력의 유효성을 검증하는 것과 반대). 현재 웹 브라우저는 HTML5 필수 속성이있을 때 자동으로 값을 true로 설정한다. 

```html
<label for="name">Name (required): </label>
<input type="text" name="name" id="name" required aria-required="true">
```

------

## Validating common input

HTML5는 이메일, URL, 숫자, 범위, 날짜 또는 시간을 비롯한 다른 데이터에 대한 입력 유형도 제공한다. 대부분의 최신 웹 브라우저는 이러한 기능을 지원하고 입력 유효성 검사를 처리한다. 또한 HTML5 유효성 검사는 날짜 선택 및 온 스크린 키보드와 같은 특정 컨트롤을 제공하여 사용자가 데이터를 입력하는 데 도움이된다. HTML5 입력 유형은 이러한 HTML5 기능을 지원하지 않는 구형 웹 브라우저에서 단순히 텍스트 입력 필드로 표시된다.

웹 브라우저에 따라 "범위"입력 필드는 사용자가 입력을보다 쉽게 할 수 있도록 슬라이더 컨트롤로 표시된다. 마찬가지로, "숫자"입력 필드는 숫자를 점차적으로 늘리거나 줄이기위한 버튼으로 표시 될 수 있다. 잘못된 이메일 주소와 같은 입력 오류는 웹 브라우저 대화 상자를 사용하여 표시된다.

```html
<div>
	<label for="email">Email: </label>
	<input type="email" name="email" id="email">
</div>
<div>
	<label for="url">Website: </label>
	<input type="url" name="url" id="url">
</div>
<div>
	<label for="number">Number: </label>
	<input type="number" name="number" id="number" min="0" max="100" step="10" value="0">
</div>
<div>
	<label for="range">Range: </label>
	<input type="range" name="range" id="range" min="0" max="100" step="10" value="0">
</div>
<div>
	<label for="date">Date: </label>
	<input type="date" name="date" id="date">
</div>
<div>
	<label for="time">Time: </label>
	<input type="time" name="time" id="time">
</div>
```

-----------

## Validating patterned input

HTML5 패턴 속성을 사용하면 정규 표현식을 사용하여 입력에 대한 사용자 정의 형식을 지정할 수 있다. 이것은 전화 번호, 우편 번호 및 일련 번호와 같은 특정 유형의 데이터 패턴에 유용하다.

```html
<div>
	<input type="text" id="license" pattern="[A-ZÖÄÜ]{1,3}( )[A-Z]{2,4}( )[0-9]{1,4}">
</div>
```

------

