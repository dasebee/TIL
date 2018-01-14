# 네임스페이스

+ 네임스페이스는 PHP코드의 가상 계층 구조를 구성한다. 
+ 벤더 네임스페이스(최상위 네임스페이스)를 만들고 하위에 가각의 코드를 구성하면  다른 벤더에서 같은 이름의 클래스를 사용하더라도 충돌하거나 소유권의 문제가 발생하지 않는다. 
+ 네임스페이스를 통해 다른 개발자들의 코드와 동시에 작동하는 고립된 코드를 만들 수 있다. 

### 선언

+ 모든 PHP 클래스, 인터페이스, 함수, 상수는 네임스페이스 하위에 존재

+ 네임스페이스는 <?php 시작 태그 바로 다음 줄에 선언한다.

+ 네임스페이스는 보통 최상위 벤더명으로 시작한다

+ 서브네임스페이스는 `\`로 구분하여 이어적는다. 

  ```php
  <?php
  namespace Daseb\Study;
  ```

+ PHP 파일의 맨 처음에 네임스페이스나 서브네임스페이스를 정해주면 그 파일의 코드는 해당 네임스페이스나 서브네임스페이스의 일부분이 된다.  동일한 네임스페이스에 속하는 클래스들을 여러 파일에 작성할 수 있다. 

### 임포트와 별칭

+ 임포트를 통해 각 PHP 파일에서 어떤 네임스페이스, 클래스, 인터페이스, 함수, 상수를 사용할 것인지 PHP에 알려준다. 

+ 별칭을 통해 임포트한 것의 축약한 이름으로 참조할 것임을 PHP에 알려준다. 

  ```php
  # 별칭이 없는 네임스페이스
  <?php
    $response = new \Symfony\Component\HttpFoundation\Responese('앗', 400);
    $response->send();
  ```

  ```php
  # 기본 별칭을 사용한 네임스페이스
  <?php
    use Symfony\Component\HttpFoundation\Responese;

    $response = new Response('앗', 400);
    $response->send();
  ```

  ```php
  # 클래스명과 다른 별칭을 사용한 네임스페이스
  <?php
    use Symfony\Component\HttpFoundation\Responese as Res;

    $r = new Res('앗', 400);
    $r->send();
  ```

+ 함수와 상수 임포트, 별칭 사용 방법은 클래스의 별칭 사용과 동일

  ```php
  # 함수 임포트
  <?php
    use func Namespace\functionName;

    functionName();
  ```

  ```php
  # 상수 임포트
  <?php
    use constant Namespace\CONST_NAME;

    echo CONST_NAME;
  ```

+ 한 파일에 복수의 네임스페이스를 정의

  ```php
  <?php
    namespace Foo{
      // 클래스, 인터페이스, 함수, 상수정의
    }
    namespace Bar{
      // 클래스, 인터페이스, 함수, 상수정의    
    }
  ```

+ 전역 네임스페이스  `\`를 클래스명 앞에 붙이면 PHP가 현재 네임스페이스 대신 전역 네임스페이스에서 클래스를 찾는다.

  ```php
  <?php
    namespace My\App;
    class Foo
    {
      public function doSomething()
      {
        throw new \Exception();
      }
    }
  ```

  ​

