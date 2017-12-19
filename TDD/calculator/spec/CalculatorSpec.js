describe('계산기는', function() {
  beforeEach(function() {
    cal = new Calculator();
  });
  it('기본값이 0이다', function() {
    expect(cal.result).toEqual(0);
  });
  describe('더하기', function() {
    it('기능이 있어야 한다', function() {
      expect(cal.add).toBeDefined();
    });
    it('2와 1을 입력하면 결과값이 3이다.', function() {
      cal.add(2,1);
      expect(cal.result).toEqual(3);
    });
  });
  describe('빼기', function() {
    it('기능이 있어야 한다.', function() {
      expect(cal.subtract).toBeDefined();
    });
    it('2와 1을 입력하면 결과값이 1이다.', function() {
      cal.subtract(2,1);
      expect(cal.result).toEqual(1);
    });
  });
  describe('곱하기', function() {
    it('기능이 있어야 한다.', function() {
      expect(cal.multiply).toBeDefined();
    });
    it('2와 1을 입력하면 결과값이 2이다.', function() {
      cal.multiply(2,1);
      expect(cal.result).toEqual(2);
    });
  });
  describe('나누기', function() {
    it('기능이 있어야 한다', function() {
      expect(cal.division).toBeDefined();
    });
    it('4와 2를 입력하면 결과값이 2이다.', function() {
      cal.division(4,2);  
      expect(cal.result).toEqual(2);
    });
  });
  describe('초기화', function() {
    it('기능이 있어야 한다', function() {
      expect(cal.reset).toBeDefined();
    });
    it('결과값이 0이 되어야한다', function() {
      cal.division(4,2);
      cal.reset();
      expect(cal.result).toEqual(0);
    });
  });
});