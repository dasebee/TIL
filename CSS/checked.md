# checked 속성
+ :checked 가상클래스 선택자는 선택(체크)된 상태의 라디오 버튼（`<input type="radio">`）, 체크박스（`<input type="checkbox">`）, 옵션 버튼（`<select>` 안에 있는 `<option>`）을 나타낸다. 
+ 선택되었을 때 속성을 적용 시킨다. 
--------------
### 예제
```css
  input[type="radio"]:checked {
  margin-left: 25px;
}
```
-------------
## 토글 메뉴 만들기
+ 메뉴 요소를 `display:none`으로 숨겨둔 뒤 checked 상태일 때 화면에 보이도록 변경하면 CSS만으로 토글 메뉴를 만들 수 있다. 

### 예제 
```css
    .menu{
        display:none;
    }

    /* +는 인접한 형제요소를 선택한다. */
    .check-box:checked + .menu{
        display:block;
    }
```
