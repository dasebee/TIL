// TDD없이 createReservation 구현
// 작동 명세 : '승객 객체, 항공편 객체를 입력받은 createReservation은 passengerInformation 프로퍼티가 승객 객체, fligtInformation 프로퍼티가 항공편 객체인 새로운 객체를 반환한다'
function createReservation(passenger, flight, saver) {  
  var reservation =  {    
    passengerInfomation: passenger,    
    flightInfomation : flight  
  };

  saver.saveReservation(reservation);

  return reservation;
}

function ReservationSaver() {
  this.saveReservation = function(reservation) {
    // 예약 정보를 저장하는 웹 서비스와 연동하는 코드
  };
}