# Table

### HTML TAG

+ `<table> ` : HTML Table을 정의한다. 
+ `<caption>` : 표의 제목을 나타낸다.   `<table>`요소의 첫번째 자식으로 위치해야한다.
+ `<colgroup>` : 테이블 내부 열의 그룹을 정의한다. 
+ `<col>` : 표 내부의 열을 정의하며 모든 공통 셀들의 공통 시멘틱을 정의하기 위해 사용된다. 일반적으로 `<colgroup>`요소 내부에 있다. 


+ `<thead>` : 테이블 열의 헤더를 나타내는 행의 세트를 정의한다. 
+ `<tfoot>` : 테이블 열을 총괄하는 행의 세트를 정의한다.
+ `<tbody>` : 표의 본문내용 그룹.  `<tbody>`는 `<table>`요소를 부모로하고, 내부에 표의 본체를 나타내는 1개 이상의 `<tr>`요소를 정의한다.  (`<tr>`요소를 `<table>`요소의 바로 아래 자식 요소로 배치 안 하는 경우). 


+ `<th>` : 표의 셀 그룹의 헤더를 정의한다.
+ `<td>` : 데이터를 포함하는 표의 셀을 정의한다.
+ `<tr>` : 테이블의 행을 정의한다.

```html
<table>
    <caption>Awesome caption</caption>
    <colgroup>
        <col span="1" style="background-color:red">
        <col style="background-color:yellow">
    </colgroup>
    <thead>
        <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
        <td>Footer content 1</td>
        <td>Footer content 2</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
        </tr>
    </tbody>
</table>
```

-------------

### Attribute

+ `colspan` : 가로 방향으로 셀을 합치는 개수를 지정
+ `rowspan`:  세로 방향으로 셀을 합치는 개수를 지정
+ `border`  : 테이블 테두리의 굵기를 지정
+ `width`,  `height` : 너비와 높이를 지정 (픽셀이나 %)
+ `cellpadding` : 셀과 경계선 사이의 여백
+ `cellspacing` : 셀과 셀 사이의 여백
+ `align` : 셀의 내용의 수평방향 정렬 (left , center, right) 
+ `valign` : 셀의 내용의 수직방향 정렬(top, middle, bottom)
+ `bgcolor` : 배경색 지정
+ `bordercolor` : 테두리 색 지정

### CSS
+ `border-collapse` : 테이블 또는 셀의 테두리선 표시방법을 지정하는 속성
    + collapse : 서로 이웃하는 테이블이나 셀의 테두리선을 겹쳐서 표현.
    + separate : 기본값으로 서로 이웃하는 테이블이나 셀의 테두리선을 분리시켜 표현.

