# 트랜지션
> CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공, 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있다.

## 속성
#### 1. transition-property
  + 트랜지션을 적용해야 하는 CSS 속성의 이름
  + all : 트랜지션으로 애니메이션이 가능한 모든 프로퍼티에서 트랜지션을 실시.
  + property-name : 값이 변경되었을 때 트랜지션효과를 적용할 프로퍼티.

#### 2.transition-duration
 + 트랜지션이 일어나는 지속 시간
 + 초기값 : 0s 애니메이션을 실행시키지 않는 것을 의미한다.
 + time 형식

#### 3.transition-timing-function
  + 속성의 중간값을 계산하는 방법을 정의하는 함수를 명시
  + ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | ...

#### 4. transition-delay
  + 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의
  + time 형식

##### 예
``` CSS
  a:hover{
    transition: all 0.8s ease-in-out;
  } ```
