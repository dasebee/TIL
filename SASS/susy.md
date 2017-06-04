# Susy

참고사이트  
<https://css-tricks.com/build-web-layouts-easily-susy/>

<http://susy.oddbird.net/demos/>

## 0. susy 설치 

+ Install using npm : `npm i -D susy` , `npm install susy sass-loader --save-dev`
+ Start using Susy : `@import "~susy/sass/susy";` 

## 1. susy 기본 설정
```scss 
//_config 파일에 추가
 $susy: (
  flow: ltr,
  math: fluid,
  output: float,
  gutter-position: after,
  container: auto,
  container-position: center,
  columns: 4,
  gutters: .25,
  column-width: false,
  global-box-sizing: content-box,
  last-flow: to,
  debug: (
    image: hide,
    color: rgba(#66f, .25),
    output: background,
    toggle: top right,
  ),
  use-custom: (
    background-image: true,
    background-options: false,
    box-sizing: true,
    clearfix: false,
    rem: true,
  )
);
```
## 2. 기본 설정 변경 하기 
```scss
  $susy: (
    /* 12 column 사용 */
    columns: 12,
    /* container의 max-width 설정 */
    container: 1120px,
    /* border-box 사용 */
    global-box-sizing: border-box 
    );

```

## 3. column 수 설정하기 - __span__
```scss
    /* content에 column 8 설정 */
  .content {
    @include span(8); 
  }

  /* sidebar에 column 4설정 & 이것이 row의 마지막 아이템 */
  .sidebar {
    @include span(4 last); 
  }
```

## 4. isolate 기법 - __gallery mixin__ 
```scss
  .social__list-item {
    @include gallery(1 of 10);
  }

/* css로 변환하면  margin-right : -100%; , margin-left : 각 column의 위치%; */
```

## 5. 미디어 쿼리 
```scss
  .content {
  @media (min-width: 700px) {
    @include span(8); 
    }
  }
.sidebar {
  @media (min-width: 700px) {
    @include span(4 last); 
    }
  }
```

## 6. 비대칭 그리드 - __columns__

```scss
   /*2개의 column이 있는데 하나의 column의 width가 다른 column의 2배이다.*/ 
  /*output을 isolate로 해야한다.*/
  $susy : (
  columns: 2 1, 
  output: isolate,
  )
  /*column의 개수와 위치를 알려준다.*/
  .content {
  @include span(1 first); 
  }
  .sidebar {
  @include span(1 last);
  }
``` 



