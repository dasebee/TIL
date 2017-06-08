# Web Accessibility

udacity의 웹 접근성 강의 공부 : <https://classroom.udacity.com/courses/ud891>

--------------------
## Lesson 1 - Overview
### 1.Introduction to Accessibillity.
+ Accessibility → A11y (A와 y사이의 글자가 11개)
+ 사이트에 접근 한다는 것은 사이트의 콘텐츠와 기능을 모두가 사용하고 운용할 수 있어야 한다는 것을 의미한다. 
+ 개발자들은 자신이 경험하는 것과 같은 방식으로 모든 사용사자가 볼 수 있고, 마우스나 터치 스크린 같은 포인터 인터페이스를 사용하여 어플리케이션을 사용할 것이라고 가정하기 쉽다. → 좁은 범위의 사람들에게는 효과가 있을지 모르겠지만, 그 범위를 벗어난 사람들에게서는 문제가 발생할 수 있다. 
+ __접근성 은 그 좁은 범위를 벗어난 사용자의 경험에 우선권을 준다.__

### 2.What is Accessibility 
+ 낮은 대비 → 저시력 사용자가 읽기 힘들다 → 대비를 수정하여 개선
+ 폼 레이블과 폼 필드가 좌우로 떨어져 있다면? → 화면을 확대해서 사용하는 사용자들은 둘을 연결 짓기 힘들다 → 레이블링하고 있는 것의 옆에 레이블이 오도록하여 개선.
+ 작은 체크박스 → 선택하기 힘들다 → 레이블과 체크박스를 연결하여 레이블을 클릭하면 체크되도록 수정하여 개선.
+ __접근성을 높임으로써 모든 사람들에게 더 나은 상황을 만들어낼 가능성이 높다.__

### 3.Understanding the diversity of users
+ 스크린 리더 : 음성 합성기를 통해서 스크린에 표시된 정보를 읽어주는 소프트웨어
+ 점자 표시기 : 스크린에 있는 텍스트를 점자로 표시하는 장치. 
+ 전맹 시각 장애가 있는 사용자는 스크린리더나 점자표시기를 통해서 사이트를 이용할 수 있다. 
+ 저시력 장애가 있는 사용자는 컴퓨터를 사용할 때 큰 화면을 사용하거나 확대해서 본다. 
+ 운동 능력에 장애가 있는 사용자는 키보드만 사용하거나, 머리, 눈을 추적하는 소프트웨어를 사용한다. 
+ 청각 장애가 있는 사용자들을 위해서는 소리 콘텐츠에 대해서 시각 대체를 제공해야하 한다. 
+ 인지장애(ADD, 난독증, 자폐증)가 있는 사용자를 위해서 콘텐츠를 쉽게 읽을 수 있게 줌이 되도록 하거나, 주의 산만 및 인지 부하를 최소화하는 최소한의 디자인을 한다. 
+ __접근성이란 개발자가 만든 콘텐츠나 웹사이트가 다양한 장애와 능력을 가진 사람들에게 쓸모가 있게 하는 것을 말한다.__

### 4. Web Content Accessibility Guidlines(WCAG)
__4가지 핵심 원칙__
1. 인지가능(Perceivable)
2. 운용가능(Operable)
3. 이해가능(Understandable)
4. 견고한(Robust)

WCAG2.0 <https://www.w3.org/TR/WCAG20/>

Web Aim Checklist for WCAG 2.0 <http://webaim.org/standards/wcag/checklist>

-------------
## Lesson 2 - Focus

### 1. Introduction to Focus
+ 포터스는 키보드에서 입력을 받아서 컴퓨터 스크린을 컨트롤 한다. 
+ Tab 키를 눌러 포커스를 이동할 수 있다. 
+ 어떤 사용자들은 컴퓨터를 오로지 키보드로를 통해서만 이용하는데, 이러한 사용자들에게 포커스는 매우 중요하다. 
+ 기능을 키보드를 사용하여 알려진 방법으로 수행할 수 없는 경우를 제외하고 키보드를 사용하여 모든 페이지 기능을 사용할 수 있어야 한다 

### 2. What is Focus
+ Tab으로 포커스가 다음으로 이동 Shift + Tab으로 포커스가 이전으로 이동한다.
+ 키보드의 화살표로 구성요소의 포커스를 이동할 수 있다. 
+ Tab Order : Tab키로 포커스가 이동하는 순서, 논리적인 Tab Order는 중요하다!
+ input, button, select 요소는 자동으로 Tab Order와 키보드 이벤트 핸들링이 포함된다.(포커스 가능하다.)

### 3. DOM Order Matters
+ native요소들은 자신의 DOM position에 맞게 자동으로 tab order가 삽입된다.
+ CSS로 DOM Position과 다른 순서로 화면에 표시하여도 Tab order는 변하지 않는다. 이 것은 Tab이 순서없이 움직이는 것 처럼보여서 키보드로 이용하는 사용자에게 혼란을 야기시킬 수 있기 때문에 주의가 필요하다. 
+ WebAIM checklist 1.3.2 에 __(코드 순서에 따라 결정되는) 읽기 및 탐색 순서는 논리적이고 직관적입니다.__ 라고 명시되어 있다. 

### 4. Using Tabindex
+ Tabindex는 Html의 어느 요소에나 적용할 수 있다.
+ tabindex="-1" : TabOrder에 들어가지 않지만 focus()메서드를 통해서 포커스될 수 있다. 사용자의 이벤트에 의해서 화면에 나타나는 콘텐츠에 유용하다. 
+ tabindex="0" : 자연스러운 TabOrder.이 또한 focus()메서드로 포커스될 수 있다. 
+ tabindex="5" : DOM의 위치와 상관없이 앞의 tab order를 뛰어넘는다. 선형 방식으로 DOM을 탐색하는 스크린 리더 사용자가 혼란스러워할 가능성이 있다. Tab 순서를 빨리하고 싶으면 DOM의 위치를 변경하라.

### 5. Deciding whats in focus 
+ tabindex는 사이트의 콘텐츠가 아닌 상호작용하는 요소들(예: 버튼, 드롭다운, 입력상자등)에 추가해야한다. 

### 6. Skip Links 
+ 보통 웹사이트에서 메인 콘텐츠는 DOM의 첫번째 요소가 아니기 때문에 키보드로 컨트롤하는 사용자는 메인 콘텐츠로 가기 전에 부수적인 내용들(네비게이션 같은)을 모두 탭을 해서 거쳐야만 한다.
+ 이 문제는 링크를 통해서 사용자가 바로 페이지의 메인 콘텐츠로 점프!할 수 있도록 하여 해결할 수 있다. (페이지에 접속하여 처음 탭을 눌렀을 때 메인 컨텐츠로 넘어 갈 것인지 물어보는 링크가 뜨도록 해주는 것)
    ```html
        <a href="#maincontent" class="skip-link">
        Skip to main content</a>
        <!--skiplink는 nav 이전에-->
        <nav>
        </nav>
        <!--main content의 id로 skip link를 연결한다-->
        <main id = "maincontent" tabindex ="-1">
        </main>
    ```

    ```css
        .skip-link{
            position: absolute;
            <!--링크가 화면 밖으로 나가게한다.-->
            top : -40px;
            left: 0;
            background: #BF1722;
            color: white;
            padding: 8px;
            z-index: 100;
        }
        .skip-link:focus{
            <!--포커스 받았을 때 화면에 표시되게한다.-->
            top:0;
        }
    ```
+ 참고

    <https://developers.google.com/web/updates/2016/03/focus-start-point?hl=en>
    
    <http://webaim.org/techniques/skipnav/>

### 7. Focus in Complex Components
+ ARIA Authoring Practices(ARIA Design Pattern)에서 Complex Componets(복잡한 구성요소?)가 어떤 종류의 키보드 지원을 구현해야 하는지 파악할 수 있다.
+ 참고 
   WAI-ARIA Authoring Practices 1.1 : <https://www.w3.org/TR/wai-aria-practices-1.1/>

### 8. Offscreen Content
+ 숨어있는 콘텐츠가 있는 경우 탭을 눌렀을 때, 숨어있는 영역안에서 계속해서 포커스가 움직일 가능성이 있다. (사용자는 포커스가 어디에 있는지 모른채)
+ console에 `document.activeElement`를 입력하여 포커스가 어디에 있는지 확인 할 수 있다. 
+ Accessibility Developer Tools: Audits 패널에서 Accessibility 옵션을 추가, 페이지의 접근성 문제를 빠르게 찾을 수 있다.   <https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en> 

### 9. Modals and Keyboard Traps 
+ WebAIM checklist items: 2.1.2: 키보드 포커스는 특정한 페이지 요소에 잠기거나 갇혀서는 안된다. 사용자는 키보드 만 사용하여 탐색 가능한 모든 페이지 요소를 탐색 할 수 있어야 한다. <http://webaim.org/standards/wcag/checklist#sc2.1.2>

