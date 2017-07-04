# Drag Events
| 이름          | 설명                                |
| ----------- | --------------------------------- |
| ondrag      | 요소가 드래그 되고 있을 때 이벤트가 발생한다.        |
| ondragend   | 사용자가 요소의 드래그를 끝냈을 때 이벤트가 발생한다.    |
| ondragenter | 드래그 된 요소가 드롭 타겟에 들어갈 때 이벤트가 발생한다. |
| ondragvalue | 드래그 된 요소가 드롭 타겟을 떠날 때 이벤트가 발생한다.  |
| ondragover  | 드래그 된 요소가 드롭 타겟 위에있을 때 이벤트가 발생한다. |
| ondragstart | 사용자가 요소를 드래그하기 시작할 때 이벤트가 발생한다.   |
| ondrop      | 드래그 한 요소가 드롭 타겟에 놓이면 이벤트가 발생한다.   |

## 추가속성

+ draggable = true : HTML 속성, 요소가 Drag 될 수 있게 한다. 

+ DragEvent.dataTransfer : 드래그 조작중 드래그되고있는 데이터를 유지할 수 있게 한다. 

  + DataTransfer.setData() : 드래그된 요소의 데이터 타입과 값을 설정한다.
  + DataTransfer.getData() : 드래그된 요소의 데이터를 가져온다. 

  ​