describe('NewInvestmentView는', function() {
  var view;

  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');
    view = new NewInvestmentView({selector: '#new-invastment'})
  })
  it('DOM 엘리먼트를 프로퍼티로 노출시켜야 한다', function() {
    expect(view.$el).toExist();
  });
  it('빈 종목 코드를 가져야 한다', function() {
    expect(view.$el.find('.new-investment-stocksymbol')).toHaveValue('');
  });
  it('종복 코드를 입력 받아야 한다', function() {
    expect(view.$el.find('.new-investment-stocksymbol').toBe('input[type=text]'));
  });
  it('매수 수량을 입력 받아야한다', function() {
    expect(view.$el).toContainHtml('input type="number class="newinvestment-shares" name="shares" value="0"');
  });
  it('매수 단가를 입력 받아야한다', function() {
    expect(view.$el).toContain('input[type=number].new-investmentshare-price');
  });
  it('매수 수량이 0이여야 한다.', function() {
    expect(view.$el.find('.new-investmentshares')).toHaveValue('0');
  });
  it('매수 단가가 0이여야 한다', function() {
    expect(view.$el.find('.new-investment-shareprice')).toHaveAttr('value', '0');
  });
  it('종목 코드 입력부에 포커싱이 되어야 한다', function() {
    expect(view.$el.find('.new-investment-stocksymbol')).toBeFocused();
  });
  // 테스트 끝난 후 제거
  afterEach(function() {
    $('#new-invastment').remove();
  })
});



// describe('InvestmentView는', function() {
//   var view;
//   // html fixtures
//   beforeEach(function() {
//     loadFixtures('NewInvestmentView.html');
//     appendLoadFixtures('InvestmentListView.html');
//     listView = new InvestmentListView({
//       id: 'investment-list'
//     });

//     view = new NewInvestmentView({
//       id: 'new-invastment',
//       listView: listView
//     });
//   });
//   describe('Add 버튼을 클릭했을 때', function() {
//     beforeEach(function() {
//       // input 엘리먼트 내용을 채운다.
//       // 버튼을 클릭한 것 처럼 처리한다.
//     });
//     it('투자 종목 리스트에 해당 건이 추가되어야 한다', function() {
//       expect(listView.count()).toEqual(1);
//     });
//   });
// });