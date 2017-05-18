# CSS로 Centering하기

## 수평

1. inline 요소

    ``` CSS
    text-align: center;
    ```
2. block 요소

    ``` CSS
    margin: 0 auto
    ```   
    width값이 있어야한다.
----

## 수직
1. inline 요소

  height와 line-height를 동일하게한다.
    ```css
    div{
      height: 100px;
      line-height: 100px;
    }
    ```

2. block 요소

  position과 translate를 사용한다.

  ```css
    .container {
      position: relative;
    }
    .container div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  ```

3. flexbox

    ```css
      .container div{
        flex-direction: column;
        justify-content: center;
      }
    ```
