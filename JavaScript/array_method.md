# 배열의 메소드
## 변경자 메소드 
변경자 메소드는 배열을 수정한다. 

1. Array.prototype.pop() : 배열에서 마지막 요소를 삭제하고 그 요소를 반환.
```javascript
    var arr = ["a","b","c"];
    arr.pop(); //반환값 "c";
    console.log(arr); // ["a","b"]
```

2. Array.prototype.push() : 배열의 끝에 하나 이상의 요소를 추가하고 새로운 길이를 반환.
```javascript
    var arr = ["a","b"];
    arr.push("c"); //반환값 3;
    console.log(arr); // ["a","b","c"]
```

3. Array.prototype.reverse() : 배열의 요소 순서를 반전.
```javascript
    var arr = ["a","b","c"];
    arr.reverse(); 
    console.log(arr); // ["c","b","a"]
```

4. Array.prototype.shift() : 배열에서 첫 번째 요소를 삭제하고 그 요소를 반환.
```javascript
    var arr = ["a","b","c"];
    arr.shift(); //반환값 "a"
    console.log(arr); // ["b","c"]
```

5. Array.prototype.sort() : 배열의 요소를 정렬하고 그 배열을 반환.
```javascript
    var arr = ["c","b","a"];
    arr.sort(); //반환값 ["a","b","c"]
    console.log(arr); // ["a","b","c"]
```

6. Array.prototype.splice() : 배열에서 요소를 추가/삭제하고 삭제된 요소들의 배열을 반환(삭제된 요소가 없는 경우 빈 배열을 반환)

    `array.splice(start, deleteCount[, item1[, item2[, ...]]])`

     start : 변경이 시작되는 인덱스, 배열의 길이보다 더 길 경우는 배열의 끝부터 변경 시작,음수인 경우는 마지막 요소부터 세어간다.

     deleteCount : 배열에서 제거 할 요소의 수,  0인 경우 아무런 요소도 제거되지 않는다. 이 경우, 최소한 하나의 새 요소를 특정해 주어야 한다. 만약, deleteCount가 start에서 부터의 남은 요소 수 보다 많을 경우, 남은 요소를 모두 제거.

     itemN : 배열에 추가될 요소. 만약 아무런 요소도 특정되지 않을 경우, splice()는 요소를 오직 삭제만 한다.
 ```javascript
    var arr = ["a","b","c"];
    arr.splice(0,1); //반환값 ["a"]
    console.log(arr); // ["b","c"]
    arr.splice(1,1,"a") //반환값 ["c"]
    console.log(arr); // ["b","a"]
```

## 접근자 메서드
배열을 수정하지 않고 배열 일부를 반환한다.

1. Array.prototype.concat() : 배열/값을 결합해 새로운 배열을 반환.
```javascript
    var arr1 = ['a','b','c'];
    var arr2 = ['d','e','f'];
    arr1 = arr1.concat(arr2);
    console.log(arr1); //["a", "b", "c", "d", "e", "f"]
    arr1 = arr1.concat(["g","h","i"]);
    console.log(arr1) //["a", "b", "c", "d", "e", "f", "g", "h", "i"]
```

2. Array.prototype.join() : 배열의 모든 요소를 문자열로 변환하여 합친다. 
```javascript
    var array=["a","b","c"];
    array.join() //"a,b,c"
```

3. Array.prototype.slice() : 배열의 일부를 추출한 새 배열을 반환.

    `array.slice([begin[, end]])`

    begin : 0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미. 음수 인덱스는 배열의 끝에서부터의 길이를 나타낸다. (slice(-2)는 배열에서 마지막 두 개의 원소를 추출), begin 인자가 undefined인 경우에는, 0번 인덱스부터 slice.

    end : 추출을 종료 할 인덱스. slice는 end 인덱스를 제외하고 추출, end가 생략되면 slice는 배열의 끝까지 추출. end값이 배열의 길이보다 크다면, silce는 배열의 끝까지 추출.

```javascript
    var array = ["a", "b", "c","d","e","f","g"];
    array.slice(3); //["d", "e", "f", "g"]
    array.slice(-2); //["f","g"]
    array.slice(2,4); //["c", "d"]
```

4. Array.prototype.toString() : 지정된 배열 및 그 요소를 나타내는 문자열을 반환.
```javascript
    var array=["a","b","c"];
    array.toString(); //"a,b,c"
```
