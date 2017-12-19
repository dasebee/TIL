// 빈자의 의존성 주입 방식으로 작성한 Attendee 객체
Attendee = function(service, messenger, attendeeId) {
    // 'new'로 생성하도록 강제 
    if(!(this instanceof Attendee)){
      return new Attendee(attendeeId) ;
    }

    this.attendeeId = attendeeId;
    this.service = service;
    this.messenger = messenger;
}


// 기본 Attendee 객체 
/*
Attendee = function(attendeeId) {
  // 'new'로 생성하도록 강제 
  if(!(this instanceof Attendee)){
    return new Attendee(attendeeId) ;
  }

  this.attendeeId = attendeeId;

  this.service = new CoferenceWebSvc();
  this.messenger = new Messenger();
}

// 주어진 세션에 좌석 예약을 시도
// 성공/실패 여부를 메세지로 알려준다

Attendee.prototype.reserve = function (sessionId) {
  if(this.service.reserve(this.attendeeId, sessionId)){
    this.messenger.seucess('좌석 예약이 완료되었습니다!' + 
    '고객님은' + this.service.getRemainingReservations() + 
    '좌석을 추가 예약하실 수 있습니다.'
  );
  } else {
    this.messenger.failure('죄송합니다, 해당 좌석은 예약하실 수 없습니다.');
  }
}; */