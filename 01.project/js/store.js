$(document).ready(function () {
  // javascript의 data
  var data = [
    { no: 1, name: "어뮤즈스파", floor: "B1", storetype: "etc", logo: "./img/store/logo1.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic1.jpeg", menu: "찜질, 헬스", desc: ""},
    { no: 2, name: "금빛공인중개사", floor: "B1", storetype: "rent", logo: "./img/store/logo2.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic2.jpeg", menu: "공인중개사", desc: "공인중개사입니다." },
    { no: 3, name: "입주지원센터", floor: "B1", storetype: "etc", logo: "./img/store/noimage.png", phone: "010-0000-0000", menupic: "./img/store/noimage.png", menu: "입주민 지원", desc: "입주민 지원 센터입니다." },
    { no: 4, name: "하노이 별", floor: "B1", storetype: "restaurant", logo: "./img/store/logo4.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic4.jpeg", menu: "팟타이, 쌀국수", desc: "베트남음식점 하노이 별 입니다." },
    { no: 5, name: "오몬드", floor: "B1", storetype: "cafe", logo: "./img/store/logo5.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic5.jpeg", menu: "커피, 강아지 수제간식", desc: "반려동물과 함께 커피와 디저트를 먹을 수 있습니다." },
    { no: 6, name: "S클래스 동물병원", floor: "B1", storetype: "hospital", logo: "./img/store/logo6.jpeg", phone: "010-0000-0000", menupic: "./img/store/logo6.jpeg", menu: "동물병원", desc: "동물병원입니다." },
    { no: 7, name: "오븐빨", floor: "B1", storetype: "restaurant", logo: "./img/store/logo7.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic7.jpeg", menu: "빵 만들기", desc: "빵과 휴식을 굽는 놀이터" },
    { no: 8, name: "쥬쥬퍼피", floor: "B1", storetype: "shop", logo: "./img/store/logo8.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic8.jpeg", menu: "애견미용", desc: "애견 전문 오픈미용실 쥬쥬퍼피입니다." },
    { no: 9, name: "차이나클래스", floor: "B1", storetype: "restaurant", logo: "./img/store/logo9.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic9.jpeg", menu: "짬뽕, 탕수육", desc: "중식이 생각날땐 기억되는 곳." },
    { no: 10, name: "헤담", floor: "B1", storetype: "beauty", logo: "./img/store/logo10.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic10.jpeg", menu: "헤어, 두피클리닉", desc: "첫 방문 고객님 컷트 10% 할인" },
    { no: 11, name: "호치킨", floor: "B1", storetype: "restaurant", logo: "./img/store/logo11.jpeg", phone: "010-0000-0000", menupic: "./img/store/menupic11.jpeg", menu: "후라이드치킨", desc: "최고의 맛! 호치킨입니다." },
    { no: 12, name: "플러스투어", floor: "B1", storetype: "rent", logo: "./img/store/noimage.png", phone: "010-0000-0000", menupic: "./img/store/noimage.png", menu: "패키지여행", desc: "여행관련 대행사" },
    { no: 13, name: "지구촌공인중개사", floor: "B1", storetype: "rent", logo: "./img/store/logo13.jpeg", phone: "010-0000-0000", menupic: "./img/store/logo13.jpeg", menu: "공인중개사", desc: "공인중개사" },
    { no: 14, name: "오쁘헤어", floor: "B1", storetype: "beauty", logo: "./img/store/noimage.png", phone: "010-0000-0000", menupic: "./img/store/noimage.png", menu: "컷트, 염색", desc: "미용실입니다." },
    { no: 15, name: "다이슨", floor: "B1", storetype: "shop", logo: "./img/store/logo15.jpeg", phone: "010-0000-0000", menupic: "./img/store/logo15.jpeg", menu: "서비스센터", desc: "다이슨 서비스센터" },
    { no: 16, name: "무무", floor: "B1", storetype: "shop", logo: "./img/store/noimage.png", phone: "010-0000-0000", menupic: "./img/store/noimage.png", menu: "꽃, 화초", desc: "화훼가게" },
  ];

  var template = "<button type='button' class='storebtn' data-no='${no}' ><img src='${logo}' class='btnimg' ></button>";
    // + <span>${name}</span>';
    


  function makeTemplate(){

    // 1. 사용자가 선택한 값을 뽑아온다.
    var result = $('#select-store > option:selected').val()
    // 2. 위의 data와 사용자가 선택한 값과 매칭되는 값만 makeData 배열에 추가(걸러내는 작업)
    var makeData = [];
    data.forEach(function(item, index){
      if(result === 'all'){
        makeData = data;
      } else {
        makeData = data.filter(function(value, index){
          if(value.storetype === result) return true
        });
      }
    });
    // console.log(makeData);

    // 만들기 전에 기존에 tbody에 있던 모든 tr을 삭제하고 아래에 만들어지는 요소로 출력
    // 요소로 출력
    $('#list').empty();

    //3. 걸러진 makeData를 기반으로 동적 TR을 생성하자
    // 기존 template이 있으니 그 텍스트를 이용해서 생성
    makeData.forEach(function(item, index){
      var temp = template;
      // ${XXX} => 실질적인 뷰 데이터로 변경
      // item => { no: 2, name: "프랑스", capital: "파리", region: "europe" }
      var dom = temp.replace('${logo}', item.logo)
      .replace('${no}', item.no)
      // .replace('${name}', item.name)

      
      //dom 변수의 값은 일반 text
      // 4. 한 줄 완성했을때마다 tbody('#list') 하단 에 추가
      // $('요소명').append(일반텍스트);
      // $('#list').append(dom);

      // $(일반텍스트).appendTo('요소명')  -> 앞의 text를 jQuery객체로 변경해야한다.
      // dom.appendTo('#list');   // error
      $(dom).appendTo('#list');
    })
  }

  makeTemplate();

  $("#inquery").on("click", function(e){
    makeTemplate();
    
  });








  // 5. 상세정보 나오는 버튼 기능
  // Event 위임. 이벤트를 할당할 상위요소에 이벤트를 기술
  // on 두번쨰 매개변수가 상위 요소가 전달한 이벤틀르 위임 받아서 실행할 요소
  var menutemp = "<img src='${menu}' >";
  $('#list').on('click', 'button', function(evt) {
    // console.log(this);

    var no = $(this).data('no');
    var value = data[no - 1];
    console.log(value);
    var menupic = value.menupic;
    var storetype = value.storetype;
    var floor = value.floor;
    var storename = value.name;
    var storelogo = value.logo;
    var menu = value.menu
    var desc = value.desc;

    $('#menupic').empty();
    $("#menupic").append("<img src="+menupic+">")
    $('#storetype').html(storetype)
    $('#floor').html(floor)
    $('#storename').html(storename)
    $('#storelogo').empty();
    $("#storelogo").append("<img src="+storelogo+">")
    $('#desc').html(desc)
    $('#menu').html(menu)
    
  })
        
});