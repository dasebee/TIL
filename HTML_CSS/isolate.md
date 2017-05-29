# Isolate
+ 웹브라우저가 퍼센트 값을 픽셀로 변경하는 과정에서 브라우저마다 계산하는 방식이 달라서 레이아웃이 무너지는 문제의 해결.
+ 화면에 표시되는 순서와 마크업의 순서가 다를 때 flexbox의 order를 사용하지 않고 순서 변경 가능. 
-----------------
## 활용 방법
+ `float:left; margin-right: -100%` : 모든 자식요소가 왼쪽으로 이동하여 겹치면 
+ `margin-left: 양수값` : 원하는 요소에 양수값을 줘서 위치를 이동시킬 수 있다. 

### 예제
``` css
    /*자식 요소가 모두 float되기 때문에 부모에게 clearfix 추가*/
    .container::after{
        content:'';
        display:block;
        clear:both;
    }
    /*자식요소를 모두 왼쪽으로 이동시킨다.*/
    .col{
        float: left;
        margin-right: -100%;
    }
    /*원하는 요소의 위치를 이동시킨다.*/
    .col-1{
        margin-left: 100px;
    }
```
--------------
## SASS로 Class 생성 
+ SASS를 활용하여 여러개의 Class를 만들어 두고 필요할 때 원하는 요소에 Class만 추가

### 예제
``` scss
    /*위치 이동 할 폭을 구하는 함수*/
    /*거터_절반_폭 + ( (거터_폭 + 컬럼_폭) * (순서 - 1) )*/
    @function order-width($n){
      @return $half-gutter-width + ( ($gutter-width + $column-width) * ($n - 1) );

   /*for문으로 반복하여 class를 생성*/
   @for $i from 1 through 12 {
        .is-isolate > .order-#{$i},
        .is-isolate > .o-#{$i} {
        margin-left: order-width($i);
        }
   }
```




