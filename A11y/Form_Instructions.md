# Form - Form Instructions

**참고** https://www.w3.org/WAI/tutorials/forms/

---------

사용자가 양식을 작성하고 개별 양식 제어를 사용하는 방법을 이해하는 데 도움이되는 지시 사항을 제공한다. 필수 및 선택 입력, 데이터 형식 및 기타 관련 정보를 표시한다.

중요 : 화면 판독기는 `<form>` 요소 내에서 내용을 처리 할 때 종종 "Forms Mode"로 전환한다. 이 모드에서는 일반적으로` <input>`,` <select>`, `<textarea>`, `<legend> `및 `<label>`과 같은 양식 요소를 읽기만합니다. 소리내어 읽을 수있는 방법으로 양식 지침을 포함시키는 것이 중요하다. 

-------

## 전반적인 지침

관련성이있는 경우 전체 양식에 적용되는 전반적인 지침을 제공한다. 예를 들어 필수 및 선택 입력, 허용 된 데이터 형식 및 타이밍 제한을 나타낸다. `<form> `요소 앞에 명령을 제공하여 화면 판독기가 "Forms Mode"로 전환하기 전에 해당 명령을 읽도록 한다. 

**예)**

> + "필수"로 표시된 모든 필드를 완료해야합니다.
> + 날짜는 모두 dd / mm / yyyy 형식으로 입력해야합니다 (2010 년 7 월 21 일).
> + 암호에는 적어도 8 자 이상의 글자 및 / 또는 숫자가 포함되어야합니다.
> + 각 필드 직후 추가 도움말을 찾을 수 있습니다.

------

## In-line 지침

전반적인 지침 이외에도 폼 컨트롤 **레이블**에 관련 지침을 제공하는 것도 중요. 예를 들어, 레이블 텍스트에 필수 입력 필드 및 데이터 형식을 표시한다.

### 레이블 내에 지침 제공

간단한 것은 레이블로 충분히 지침을 제공할 수 있다. 이 접근법은 다양한 웹 브라우저 및 보조 기술에서 신뢰할 수 있지만 일부 스타일링 요구 사항을 지원하기 위해서는 몇 가지 추가 고려가 필요할 수 있다.

```html
<label for="expire">Expiration date (MM/YYYY): </label>
<input type="text" name="expire" id="expire">
```

### 레이블 외부에 지침제공

레이블 외부에 지침을 제공하면보다 유연한 위치 지정 및 디자인이 가능하다. WAI-ARIA를 구현하지 않는 일부 웹 브라우저 및 보조 기술에서는 지원되지 않는다.

#### 1.  `aria-labelledby` 사용

하나의 접근법은 WAI-ARIA `aria-labelledby`속성을 사용하여 명령을 폼 컨트롤과 연결하는 것이다. 이 방법은 모든 웹 브라우저와 보조 기술 (예 : 점자 디스플레이)에서 완전히 지원되지 않는다. 

만약에 `aria-labelledby` 또는 `aria-describedby` 속성이 두 개 이상의 요소를 가리키는 경우, 이 것이 참조하는 요소에 `tabindex = "- 1"`을 추가해야 Internet Explorer에서 이 기술이 작동한다.

```html
<label id="expLabel" for="expire" tabindex="-1">Expiration date:</label>
<span>
	<input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc">
	<span id="expDesc" tabindex="-1">MM/YYYY</span>
</span>
```

#### 2. `aria-describedby` 사용 

`aria-describedby`를 사용하여 필드 형식을 참조하면 요청시 이 정보가 사용자에게 제공된다. 즉, 자동으로 표시되거나 읽히지 않는다. 예를 들어 사용자에게 이전 형식에 대한 정보가 있거나 형식이 동일한 입력 필드가 많은 경우에 유용하다.

```html
<label id="expLabel" for="expire">Expiration date:</label>
<span>
<input type="text" name="expire" id="expire" aria-labelledby="expLabel" aria-describedby="expDesc">
<span id="expDesc">MM/YYYY</span>
</span>
```

--------------

### Placeholder

Placeholder는 사용자가 아직 편집하지 않은 필드 내에 필요한 데이터 형식의 지시 또는 예를 제공한다. Placeholder는 일반적으로 사용자가 제공 한 텍스트보다 색상 대비가 낮게 표시되며 사용자가 텍스트 입력을 시작할 때 양식 필드에서 사라진다. 

Placeholder는 많은 사용자에게 유용한 지침이지만, 레이블을 대체하지 않는다. 화면 판독기와 같은 보조 기술은 Placeholder를 레이블로 취급하지 않는다. 또한 Placeholder는 보조 기술에서 광범위하게 지원되지 않으며 구형 웹 브라우저에는 표시되지 않는다.

```html
<div>
	<label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
</div>
<div>
	<label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
</div>
```

#### Placeholder styling

웹 브라우저는 대개 WCAG 2.0의 최소 대비 요구 사항을 충족하지 않는 색상으로 Placeholder를 표시하기 때문에, 보기 어려운 사람들이 있다. 대부분의 웹 브라우저에서 Place의 색상은 CSS 선택자를 사용하여 스타일을 지정할 수 있다.



