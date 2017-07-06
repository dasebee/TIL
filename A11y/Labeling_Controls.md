# Form - Labeling Controls

**참고** https://www.w3.org/WAI/tutorials/forms/

-------------

`<label>` 요소를 사용하여, 모든 Form 컨드롤을 식별하는 레이블을 제공한다.

레이블은 Form 컨트롤의 목적을 설명해야 한다. 

----

### 레이블의 명시적 연결

가능하다면  `label` 요소를 사용하여 텍스트를 `form` 요소와 명시적으로 연결한다.  레이블의 `for` 속성과 form의  `id`가 일치해야 한다.

```html
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
```

-----------

### 레이블 숨기기

Form 컨트롤의 레이블은 모든 사람이 그 목적을 더 잘 이해할 수 있도록 도와준다. 어떤 경우에는 시각적으로 렌더링 될 때 내용이 충분히 명확 할 수 있다. 레이블은 스크린 리더 및 음성 입력 사용자와 같은 다른 형식의 표현 및 상호 작용을 지원하기 위해 코드 내에 제공되어야하지만 시각적으로 숨길 수 있다.

#### 1. 레이블 숨기기

아래 예제에서  `<label>` 요소는 코드 내에서 form 컨트롤을 식별하기 위해 제공되지만, 시각적으로 내용을 확인 할 수 있는 사용자의 중복을 피하기 위해 숨겼다.

```html
<label for="search" class="visuallyhidden">Search: </label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>
```

#### 2. aria-label 사용 / aria-labelledby 사용

`aria-label` 속성과 `aria-labelledby` 속성은 form 컨트롤을 식별하는 데 사용할 수 있다. 이 접근법은 스크린 리더 및 기타 보조 기술에서 잘 지원되지만 `title`속성과 달리 시각적인 사용자에게 전달되지는 않는다. 그렇기 때문에 이 접근법은 컨트롤의 레이블이 아래 예제의 버튼과 같이 주변 내용에서 명확한 경우에만 사용해야 한다.

**aria-label 사용**

```html
<input type="text" name="search" aria-label="Search">
<button type="submit">Search</button>
```

**aria-labelledby 사용**

```html
<input type="text" name="search" aria-labelledby="searchbutton">
<button id="searchbutton" type="submit">Search</button>
```

#### 3. title 속성 사용

`title`속성은 form 컨트롤을 식별하는 데 사용할 수 있다. `title`속성이 종종 중요하지 않은 정보를 제공하기 위해 사용 되기 때문에, 일부 스크린 리더 및 보조 기술은 레이블 요소의 대체로 속성을 해석하지 않으므로 이 방법은 일반적으로 안정성이 떨어지며 권장되지 않는다. `title` 속성 정보는 form 필드 위로 마우스를 가져 가면 툴팁으로 시각적 사용자에게 표시된다.

```html
<input title="Search" type="text" name="search">
<button type="submit">Search</button>
```

#### 요소 숨기기에 대한 참고 사항

 스크린 리더나 기타 보조 기술은 웹 브라우저와 마찬가지로 `display: none;` 와 `visibility: hidden;` 를 사용하여 스타일된 요소는 숨겨 버린다. (읽지 않는다.)  정보를 시각적으로 숨기고 스크린 리더 및 기타 보조 기술 사용자가 사용할 수 있도록 유지하기 위해서 CSS를 사용한다. 

```css
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

------------

### 레이블의 암시적 연결

form컨트롤에 명시적으로 레이블을 연결 못 할 경우가 있다. 예를 들어 컨텐츠 작성자가 스크립트로 생선된 from 필드의 `id`를 알지 못하거나, 그 스크립트가  `id`를  전혀 추가하지 않을 수 있다. 이 경우 `label`요소는 form 컨트롤과 레이블 텍스트 모두에 대한 컨테이너로 사용되므로 두 항목이 암시 적으로 연결된다. 일반적으로 명시적 레이블을 보조 기술이 더 잘 지원한다. 

```html
<label>
  First name:
  <input type="text" name="firstname">
</label>
<br>
<label>
  <input type="checkbox" name="subscribe">
  Subscribe to newsletter
</label>
```

---------

### 버튼의 레이블

`<button>`요소 의 레이블은 요소 내부에 설정되며 마크업을 포함 할 수 있다. `<input>`요소를 사용하여 버튼을 만들 때 레이블은 `value`요소의 속성에 설정된다 .

```html
<button type="submit">Submit</button>
<button type="button">Cancel</button>

<input type="submit" value="Submit">
<input type="button" value="Cancel">
```

------

### 레이블 텍스트의 시각적 위치

왼쪽에서 오른쪽으로 쓰는 언어에서는 레이블을 라디오 버튼과 체크 상자의 오른쪽에, 그리고, 다른 form 필드는 왼쪽 또는 바로 위에 시각적으로 배치하는 것이 일반적이다. 이 방법을 유지하면 모든 사용자에 대해 양식의 예측 가능성과 이해 가능성이 높아집니다.

일반적으로 양식 필드 위에 레이블을 배치하면 저 시력 및 모바일 장치 사용자의 경우 수평 스크롤을 줄일 수 있다. 그러나 이 접근법의 유용성은 근처의 다른 양식 필드와 내용의 근접성과 같은 디자인 측면에 따라 다르다. 레이블과 폼 컨트롤 사이에 밀접하고 뚜렷한 시각적 관계를 유지해야 한다.