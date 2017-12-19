// 테스트 대상을 완성한 다음 작성한 createReservation의 테스트 코드
describe('createReservation(passenger, flight)', () => {
  let testPassenger = null, testFlight = null, testReservation = null, testSaver = null;
  beforeEach(() => {
    testPassenger = {
      firstName: '윤지',
      lastName: '김'
    };
    testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산'
    };

    testSaver = new ReservationSaver();
    spyOn(testSaver, 'saveReservation');

    reservation = createReservation(testPassenger, testFlight, testSaver);
  });
  it('주어진 passenger를 pessengerInfomation 프로퍼티에 할당한다', () => {
    expect(reservation.passengerInfomation).toBe(testPassenger);
  });
  it('주어진 flight를 flightInfomation 프로퍼티에 할당한다', () => {
    expect(reservation.flightInfomation).toBe(testFlight);
  });
  it('예약 정보를 저장한다', () => {
    expect(testSaver.saveReservation).toHaveBeenCalled(); // 한 번 이상 실행되었는지를 확인
  });
})