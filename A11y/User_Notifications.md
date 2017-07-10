# Form - User Notifications

성공 여부와 관계없이 양식 제출 결과에 대한 피드백을 사용자에게 제공할 것. 여기에는 일반적으로 양식 제출 후 제공되는 양식 제어 및 전체 피드백 또는 인라인 피드백이 포함된다.

알림은 간결하고 명확해야한다. 특히 오류 메시지는 이해하기 쉬워야하며 해결 방법에 대한 간단한 지침을 제공해야한다. 성공 메시지 또한 업무 완료를 확인하는 데 중요하다.

--------

## 전반적인 피드백

### 1. heading 사용

피드백을 제공하는 일반적인 방법은 웹 페이지의 메인 제목을 사용하는 것이다. 일반적으로 가장 눈에 잘 띄게 `<h1>` 또는 `<h2>` 요소로 표시한다. 이 기술은 양식이 서버에 의해 처리 될 때 특히 유용하지만, 클라이언트 측 스크립팅에도 유용 할 수 있다.

```html
<h1>3 Errors – Billing Address</h1>
<h1>Thank you for submitting your order.</h1>
```

### 2. title 사용

웹 페이지의 `<title>` 요소는 성공과 오류를 나타내는 데 유용 할 수 있다. 특히 스크린 리더 사용자는 웹 페이지가로드 될 때 즉시 피드백을 받을 수 있다. 이 기능은 제목(heading)이 탐색 메뉴 이후와 같이 컨텐츠 내에서 깊숙한 곳에 위치할 때 도움이 될 수 있다.

```html
<title>3 Errors – Billing Address</title>
<title>Thank you for submitting your order.</title>
```

### 3. 대화상자 사용

대화 상자는 사용자에게 변경 사항을 알리는 일반적인 방법이다. 

JavaScript는 적절한 키보드 탐색을 제공하고 글꼴 크기, 색상 및 언어를 포함하여 사용자의 기본 설정을 준수하는 매우 기본적인 경고 대화 상자를 제공한다. 

```javascript
document.getElementById('alertconfirm')
	.addEventListener('click', function() {
		/* [… code saving data …] */
		alert('Thanks for submitting the form!');
	});
```

----------

## 인라인 피드백

전반적인 피드백 외에도 양식 컨트롤 또는 그 근처에서 보다 구체적인 피드백을 통해 사용자가 양식을 사용하는 데 더 도움이 될 수 있다. 여기에는 올바르게 입력 된 입력뿐만 아니라 입력의 오류를 나타내는 피드백도 포함된다.

일반적으로 메시지 및 시각적 신호의 조합은 인라인 피드백을 제공하는 데 사용된다. 예를 들어, 유효한 입력은 체크 표시 (✓) 및 녹색 경계로 표시 될 수 있으며 오류는 오류 아이콘 (예 : 빨간색 ✗ 또는 느낌표)과 빨간색 경계로 표시 될 수 있다. 오류 메시지는 오류를 수정하는 방법에 대한 지침도 제공해야한다. 

### 1. submit 이후 

양식이 제출되면 항목이 확인되고 피드백이 사용자에게 제공된다. 사용자가 양식을 완성하는 데 도움이되도록 각 입력 필드마다 적절한 성공 및 오류 메시지가 표시된다. 

제출 된 데이터에 오류가있는 경우 오류가 포함 된 첫 번째 `<input>`요소로 포커스를 설정하는 것이 편리하다.

```html
<div class="success">
	<label for="username"><strong>OK:</strong> Username:</label>
	<input type="text" name="username" id="username" value="spaceteddy13" 
     aria-describedby="userDesc">
	<span id="userDesc">✓</span>
</div>
<div class="error">
  	<label for="expire"><strong>Error:</strong>Expiry date:</label>
	<input type="text" name="expire" id="expire" value="03.2015" aria-describedby="expDesc">
	<span id="expDesc">Use the format MM/YYYY.</span>
</div>
<div>
	<button type="submit">Submit</button>
</div>
```

```css
.error   { color: #900; }
.success { color: #007a00; }
.error   input { border: 3px solid #900; }
.success input { border: 3px solid #007a00; }
```

### 2. 타이핑 중

타이핑 중 즉각적인 피드백은 매우 유용 할 수 있다. 이전 예에서 입력한 값이 적절한지 확인하기 위해서 사용자가 양식을 제출해야했기 때문에 잘 못하면 여러 번 제출해야 했다. 사용자가 입력하는 동안 피드백을 제공하면 적절한 값을 찾을 때까지 더 쉽게 시도 할 수 있다. 그러나 클라이언트 측 스크립팅이 이러한 기능에 필요하며 모든 상황이 그러한 피드백에 적절하지는 않다.

#### 1) Binary messages

사용자가 입력 필드에 텍스트를 입력하는 동안 가용성을 즉시 확인한다. 사용자가 양식을 제출할 필요없이 해당 성공 및 오류 메시지가 표시된다.

```html
<div>
	<label for="username">Username:</label>
	<input type="text" name="username" id="username">
	<span id="username_feedback" aria-live="polite"></span>
</div>
```

```javascript
document.getElementById('username').addEventListener('keyup', function(){
	function setError(el, msg) {
		el.parentNode.querySelector('strong').innerHTML = "Error:";
		el.parentNode.className='error';
		el.parentNode.querySelector('span').innerHTML = msg;
	}
	function setSuccess(el) {
		el.parentNode.querySelector('strong').innerHTML = "OK:";
		el.parentNode.className='success';
		el.parentNode.querySelector('span').innerHTML = "&check;";
	}
	var val = this.value;
	if (val !== "") {
		if (taken_usernames.indexOf(val.trim())+1) {
			setError(this, '&cross; Sorry, this username is taken.');
		} else {
			setSuccess(this, '&check; You can use this username.');
		}
	} else {
		document.getElementById('username_feedback').innerHTML = '';
		document.getElementById('username_feedback').parentNode.className = '';
		document.querySelector('[for="username"] strong').innerHTML = '';
	}
});
```

이 예제에서 표시된 메시지는 값이 aria-live="polite" 속성이있는 `<span> `요소를 사용하여 코딩됩니다. "라이브 영역"의 내용은 스크린 리더 및 기타 보조 기술로 전달된다. 'polite'값은 메시지의 중요성을 덜 강조하며 화면 판독기가이 메시지를 읽는 현재 작업을 중단시키지 않는다. 따라서 사용자는 사용자가 입력하는 모든 키 입력이 아닌 입력을 중단 할 때만 메시지를 한 번 읽는다.

#### 2)  On focus change 

사용자가 입력하는대로 입력을 검사하는 것은 대부분의 시간 동안 오류 메시지를 표시하기 때문에  의미가 없다. 사용자가 Tab 키를 사용하여 포커스를 다음 필드로 이동하거나 다른 필드를 클릭하여 양식 필드에서 나가면 입력이 확인한다.