// 콘퍼런스에 해당하는 파라미터를 제공하여 여행사의 원래 웹 서비스를 래핑한다

TravelService = (function(rawWebService){
  var conferenceAirport = 'BOS';
  var maxArrival = new Date(/* 날짜 */);
  var minDeparture = new Date(/* 날짜 */);

  //간단한 캐싱 : 인덱스는 공항이고 객체는 티켓이다. 
  var cache = [];

  return {
    getSuggestedTicket: function(homeAirport) {
      var ticket;
      if(cache[homeAirport]) {
        return cache[homeAirport];
      }
      
      ticket = rawWebService.getCheapestRoundTrip(homeAirport, conferenceAirport, maxArrival, minDeparture)

      cache[homeAirport] = ticket;
      return ticket;
    }
  };
})();

TravelService.getSuggestedTicket(attendee.homeAirport);