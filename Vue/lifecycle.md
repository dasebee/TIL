# Vue 라이프 사이클

1. beforeCreate

   가장 먼저 실행되는 훅, data와 events가 세팅되지 않아 접근 할 수 없음

2. created

   data와 events가 활성되어 접근 가능. 템플릿과 가상돔은 마운트 및 렌더링되지 않은 상태

   this.$el은 undefined

3. beforeMount

   render함수가 호출되는 시점. this.$el 접근 못함.

4. mounted

   컴포넌트, 템플릿, 렌더링된 돔에 접근가능. 이 시점에 ajax호출하여 데이터를 불러온다

5. beforeUpdate

   돔이 재 렌더링 되고 패치되기 직전에 실행. 데이터는 변경되어있고, DOM렌더링이 안된 상태

6. updated

   컴포넌트의 데이터가 변하여 재 렌더링이 일어난 후에 실행. 돔 업데이트가 완료된 상태. 여기서 상태를 변경하면 무한루프에 빠질 수 있다. 

7. beforeDestroy

   뷰 인스턴스가 제거되기 직전에 호출된다. 이벤트 리스너를 제거하거나 reactive subscription을 제거.

8. destroyed

   뷰 인스턴스가 제거된 후에 호출. 모든 디렉티브 바인딩이 헤제되고 모든 이벤트 리스너가 제거됨. 모든 하위 Vue인스턴스도 삭제.