// toEqual
describe('toEqual 테스트', function() {
  it('동등한 숫자이다', function() {
    expect(1).toEqual(1);
  });
  it('동등한 문자열이다', function() {
    expect('testing').toEqual('testing');
  });
  it('동등한 불린값이다', function() {
    expect(true).toEqual(true);
  });
  it('동등한 객체다', function() {
    expect({a: "testing"}).toEqual({a: "testing"});
  });
  it('동등한 배열이다', function() {
    expect([1,2,3]).toEqual([1,2,3]);
  });
});

//toBe
describe('toBe 테스트', function() {
  it('동등한 숫자이다', function() {
    expect(1).toBe(1);
  });
  it('동등한 문자열이다', function() {
    expect('testing').toBe('testing');
  });
  it('동등한 불린값이다', function() {
    expect(true).toBe(true);
  });
  it('동등한 객체다', function() {
    var object = {a: 'testing'};
    expect(object).toBe(object);
  });
  it('동등한 배열이다', function() {
    var array = [1,2,3]
    expect(array).toBe(array);
  });
  it('동등한 객체가 아니다', function() {
    expect({a: 'testing'}).not.toBe({a: 'testing'});
  });
  it('동등한 배열이 아니다', function() {
    expect([1,2,3]).not.toBe([1,2,3]);
  });
});

// toBeFalsy
describe('toBeFalsy 테스트', function() {
  it('undefined는 falsy다', function() {
    expect(undefined).toBeFalsy();
  });
  it('null는 falsy다', function() {
    expect(null).toBeFalsy();
  });
  it('NaN는 falsy다', function() {
    expect(NaN).toBeFalsy();
  });
  it('false는 falsy다', function() {
    expect(false).toBeFalsy();
  });
  it('0은 falsy다', function() {
    expect(0).toBeFalsy();
  });
  it('빈문자열은 falsy다', function() {
    expect("").toBeFalsy();
  });
});

// toBeTruthy
describe('truthy 테스트', function() {
  it('true는 truthy이다', function() {
    expect(true).toBeTruthy();
  });
  it('0이 아닌 숫자는 truthy이다', function() {
    expect(5).toBeTruthy();
  });
  it('비어있지 않은 문자열은 truthy이다', function() {
    expect("a").toBeTruthy();
  });
  it('배열을 포함한 일반 객체는 truthy이다', function() {
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
  });
});

//toBeUndefined
describe('toBeUndefined 테스트', function() {
  it('undefined는 undefined다.', function() {
    expect(undefined).toBeUndefined();
  });
});

//toBeNull
describe('toBeNull 테스트', function() {
  it('null은 null이다.', function() {
    expect(null).toBeNull();
  });
});

//toBeNaN
describe('toBeNaN 테스트', function() {
  it('NaN는 NaN이다.', function() {
    expect(NaN).toBeNaN();
  });
});

// toBeDefined
describe('toBeDefined 테스트', function() {
  it('undefined가 아닌 값은 모두 정의되어 있다', function() {
    expect(null).toBeDefined();
  });
});

// toContain
describe('toContain 테스트', function() {
  it('어떤 문자열이 다른 문자열을 포함하고 있다', function() {
    expect("My big String").toContain('big');
  });
  it('어떤 배열이 특정 엘리먼트를 포함하고 있다.', function() {
    expect([1,2,3]).toContain(2);
  });
});

// toMatch
describe('toMatch', function() {
  it('문자열이 정규식에 매칭된다', function() {
    expect('My big matched string').toMatch(/My(.+)string/);
  });  
});

// toBeLessThan, toBeGreaterThan 
describe('toBeLessThan 테스트', function() {
  it('실제값이 기댓값보다 작다', function() {
    expect(1).toBeLessThan(2);
  });
});

describe('toBeGreaterThan', function() {
  it('실제값이 기댓값보다 크다', function() {
    expect(2).toBeGreaterThan(1);
  });
});

// toThrow
describe('toThrow 테스트', function() {
  it('예외가 던져져야한다', function() {
    expect(function() {
      throw("Some exception")
    }).toThrow("Some exception");
  });
});