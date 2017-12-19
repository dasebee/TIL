(function($, Investment, Stock){
 'use strict'
  function NewInvestmentView (params) {
    this.$el = $(params.selector);
  };
  NewInvestmentView.prototype = {
    $: function () {
      return this.$el.find.apply(this.$el, arguments);
    },
    getSymbolInput: function () {
      return this.$('.new-investment-stock-symbol');
    },
    setSymbol : function(value) {
      this.$('.new-investment-stock-symbol').val(value);
    }
  }
  this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);