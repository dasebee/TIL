# WAI-ARIA

### 1. WAI-ARIA란?

**RIA (리치 인터넷 어플리케이션, Rich Internet Applications)** 

+ 자바스크립트와 Ajax등의 기술을 활용하여 웹 애플리케이션을 제작하고 좀 더 향상된 UX를 제공
+ 스크린리더 등 보조기술을 사용하는 장애인은 RIA 기술로 제작된 웹 앱을 제대로 사용할 수 없는 문제점
+ `<div>`나`<span>`등 의미를 가지지 않는 요소로 특정 컴포넌트를 구현하는 경우, 보조기기에서 해당 컴포넌트의 기능을 명확하게 파악하기 어렵다. 

**WAI-ARIA(Web Accessibility Initiative - Web Accessible Rich Internet Application)**

+ W3C에서 발표한 웹 콘텐츠 및 웹 애플리케이션 접근성과 상호 운용성을 개선하기 위한 기술 명세 
+ 스크린리더 및 보조기기등에서 접근성 및 상호 운용성을 향상시키기 위한 목적으로 탄생. 
+ 웹 애플리케이션에 **역할(Role), 속성(Property), 상태(State)** 정보를 추가. 

----

### 2. WAI-ARIA의 목적

+ 스크린리더 및 보조기기등에서 접근성 및 상호 운용성을 향상시키기 위해 마크업에 **역할(Role), 속성(Property), 상태(State)** 정보를 추가할 수 있도록 지원. 
+ 개발자의 의도가 보조 기술에 잘 전달될 수 있도록 요소나 컴포넌트에 누락된 의미 구조를 제공
+ 논리적 구조 설계 가능해지고 페이지 영역의 빠른 탐색을 제공
+ 동적으로 변경되는 콘텐츠의 식별이 가능
+ 상태 변화가 발생했을 때 적절한 이벤트 알림을 제공하여 보조기기의 사용성을 향상시킬 수 있다. 

-----

### 3. ARIA Roles & States and Properties

#### 1)역할(Role)

  특정 요소에 기능을 정의하는 것. 

```html
<a href="#" onclick="playApp()" role="button">재생</a>
```

  **역할 카테고리**

+ Document Structure Role (문서구조 역할)
+ Abstract Role(추상 역할)
+ Landmark Role(랜드마크 역할)
+ Widget Role(위젯 역할)

#### 2)속성(Property)

요소가 기본적으로 갖고 있는 특징이나 상황. 

```html
<div class="id-area">
  <label for="user-email">아이디</label>
  <input type="email" id="user-email" aria-required="true">
```

#### 3)상태(State)

요소의 현재 상태를 의미, 상황의 변화에 따른 값을 가진다. 

```html
<ul class="menu" role="tree">
    <li class="menu-item" role="treeitem" aria-expanded="true">
        <ul class="sub-menu" role="group">
            <li class="menu-item" role="treeitem" aria-expanded="false">
                <a href="#">WAI-ARIA란?</a>
            </li>
        </ul>
    </li>
    <li class="menu-item" role="treeitem" aria-expanded="false">
        <a href="#">WAI-ARIA목적</a>
    </li>
</ul>
```

---

### 4. WAI-ARIA 작성 규칙

##### 1) 랜드마크와 HTML5

HTML5의 섹션 관련 요소와 WAI-ARIA 규칙을 함께 사용할 경우 해당 기능이 무효화 되거나 충돌이 발생할 수 있으므로 중복 사용은 하지 말 것. 

|       랜드마크 역할        |              HTML5 섹션 관련 요소              |
| :------------------: | :--------------------------------------: |
|  role="application"  |    주로 `<div>`요소와 같이 그룹 역할을 하는 요소로 대체     |
|    role="banner"     |             `<header>`요소와 비슷             |
|  role="navigation"   |                `<nav>` 요소                |
|     role="main"      | `<main>` 요소. 본문의 주요 콘텐츠 영역으로 한 페이지 내에서 1개만 사용 가능. |
| role="complementary" |               `<aside>` 요소               |
|     role="form"      |                `<form>`요소                |
|    role="search"     | 검색의 역할을 담당하는 서식 영역임을 의미. `<div>` 또는 `<form>`요소를 사용하는 것을 권장 |
|  role="contentinfo"  |             `<footer>`요소와 비슷             |

##### 2) HTML요소의 기능 변경 제한

ARIA 규칙을 이용하여 요소의 네이티브 의미를 변경하는 것은 바람직하지 않다. 

```HTML
<--! 좋지 않은 예 -->
  <h1 role="button"> 버튼 </h1>
<--! 권장하는 예 -->
  <h1><button>버튼</button></h1>
```

##### 3) 키보드 사용 보장 

사용자가 클릭할 수 있는 정보나 탭 또는 드래그 앤 드롭, 슬라이드, 스크롤 등의 기능이 필요한 콘텐츠의 경우 키보드로도 접근 및 사용이 가능하도록 제공하여야 한다. 

키보드 포커스를 받지 못하는 HTML 요소의 경우 tabindex 속성을 사용하여 키보드 포커스를 받을 수 있도록 해야한다. 

```HTML
<--! 키보드 포커스를 받지 못한다-->
<span role="button" tabindex="-1">버튼</span>
<--! 키보드 포커스를 받을 수 있다-->
<span role="button" tabindex="0">버튼</span> 
```

##### 4) 숨김 콘텐츠

**aria-hidden="true"**를 지정하면 보조기기에서는 의미적으로 숨겨진 콘텐츠로 인식하기 때문에, 사용자에게 정보를 전달하되 단순히 화면에서만 보이지 않도록 처리된 콘텐츠에는 지정하면 안 된다. 

**role="presentation"**을 지정하면 보조기기에서는 단순히 가시적으로 전달하기 위한 요소로 인식하기 때문에, 특정한 의미를 전달해야 하는 요소에 지정해서는 안된다. 

숨김 콘텐츠에 대해 사용자의 접근을 차단하고자 할 경우는 display:none 과 aria-hidden="true"를 지정한다. 

##### 5)레이블 제공

모든 대화형 UI에 반드시 레이블을 제공해야 한다. `<label>` 요소 사용을 권장. aria-label, arai-labelledby 속성으로도 레이블 제공할 수 있다. 

```html
<div class="container">
    <label for="user-name">이름</label>
    <input type="text" id="user-name">
</div>
<div>
    <div id="user-age">나이</div>
    <input type="text" aria-labelledby="user-age">
</div>
<button aria-label="닫기">X</button>
```

##### 6)유효성 검사

WAI-ARIA를 사용할 경우 의미를 가지는 시맨틱 요소와 충돌되지 않도록 하는 것이 필요.

---------

### 5. Landmark Role

##### 1) 랜드마크에 대해

웹 페이지에서 제공되는 콘텐츠 유형이 어떤 역할을 하는지 식별할 수 있도록 도와주는 표지판 기능을 한다. 콘텐츠에 랜드마크를 할당하면 스크린리더 사용자는 웹 페이지 영역의 의미와 구조를 명확하게 이해할 수 있고 랜드마크를 탐색하는 핫키를 이용하여 문서의 주요 영역을 자유롭게 탐색할 수 있게 된다.

##### 2) 랜드마크 사용 방법

콘텐츠를 포함하고 있는 컨테이너인 HTML 요소에 role 속성을 사용하여 콘텐츠의 역할을 지정.

```html
<div class="container">
    <div role="banner">banner</div>
    <div role="navigation">navigation</div>
    <div role="main">
        <div role="application">application</div>
    </div>
</div>
```

##### 3) 랜드마크 종류

+ application

  웹 애플리케이션 영역임을 선언, 웹 콘텐츠와 반대되는 개념, 특정 기능을 제공하는 경우를 의미

+ banner

  사이트의 로고나 제목등을 포함하는 헤더 정보를 포함할 수 있는 영역 `<header>`요소와 비슷

+ navigation

  웹 사이트의 내비게이션 영역으로 링크 모음을 포함할 수 있다. `<nav>`요소와 동일한 역할이기 때문에 중복해서 사용하지 않는다. 여러 개의 navigation role을 사용하는 경우 aria-label 속성으로 어떤 내비게이션인지 이해할 수 있도록 제공할 필요가 있다. 

+ main

  메인 콘텐츠 영역을 의미, 웹 페이지 내에서 한 번만 선언할 수 있다. `<main>`요소 중복해서 사용하지 말것

+ complementary

  메인 콘텐츠를 보충할 수 있는 부가적인 내용을 담는 영역, 메인 콘텐츠에서 분리되어도 그 자체로 의미가 있는 콘텐츠 영역. `<article>`요소와 동일한 역할

+ form

  사용자가 입력 가능한 form 영역 임을 의미, `<form>`요소와 중복 사용하지 말 것. 

+ search

  검색을 위한 입력 폼 영역을 포함할 수 있다. 

+ contentinfo

  상위 분서의 메타데이터를 담을 수 있는 영역, 저작권 정보와 주소 및 연락처, 개인정보 정책등, `<footer>`요소와 비슷한 역할.

----------

### 6.Live Region

##### 1) Live Region

웹 애플리케이션의 전부 또는 일부가 동적으로 변경되는 경우 사용자의 조작 없이 변경된 내용과 진행 상태를 알리기 위해 사용되는 속성. 

+ aria-live : 업데이트 된 요소를 사용자에게 알려주는 방법을 설정.

  | 속성 값      | 설명                      |
  | :-------- | :---------------------- |
  | off(기본값)  | 업데이트 된 내용을 사용자에게 알리지 않음 |
  | polite    | 사용자의 입력이 끝났을 때 알림       |
  | assertive | 업데이트 된 내용이 있을 때 즉시 알림   |

+ aria-atomic : 업데이트 되었을 때 업데이트 된 부분만을 알려줄 것인지 전체를 모두 알려줄 것인지 설정. 

  | 속성 값       | 설명                            |
  | ---------- | ----------------------------- |
  | false(기본값) | 업데이트 된 내용을 포함하여 전체 내용을 모두 읽음. |
  | true       | 업데이트 된 내용만 읽음.                |

+  aria-busy : 업데이트가 진행 중인지 여부를 표현. 

  | 속성 값       | 설명                     |
  | ---------- | ---------------------- |
  | false(기본값) | 업데이트된 내용을 안내 함.        |
  | true       | 업데이트 된 내용이 있음을 안내하지 않음 |

+ aria-relevant : 요소 및 텍스트 등의 추가, 삭제 등의 업데이트 정보를 알릴 지 여부를 설정. 

  | 속성 값                | 설명                           |
  | ------------------- | ---------------------------- |
  | additions text(기본값) | 요소가 추가되거나 콘텐츠가 변경 되었을 때 안내   |
  | additions           | 요소가 추가 되었을 때 안내              |
  | removals            | 요소가 삭제 되었을 때 안내              |
  | text                | 콘텐츠가 변경 되었을 때 안내             |
  | all                 | 요소의 추가, 삭제 및 콘텐츠가 변경되었을 때 안내 |















