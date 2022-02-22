$(document).ready(function () {
  // javascript의 data
  var data = [
    { no: 1, name: "어뮤즈스파", floor: "B1", storetype: "etc", logo: "../img/test.png", phone: "010-0000-0000" },
    { no: 2, name: "공인중개사", floor: "B1", storetype: "rent", logo: "../img/test.png", phone: "010-0000-0000" },
    { no: 3, name: "입주지원센터", floor: "B1", storetype: "etc", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 4, name: "하노이 별", floor: "B1", storetype: "restaurant", logo: "../img/test.png", phone: "010-0000-0000" },
    { no: 5, name: "오몬드", floor: "B1", storetype: "cafe", logo: "../img/test.png", phone: "010-0000-0000" },
    { no: 6, name: "S클래스 동물병원", floor: "B1", storetype: "hospital", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 7, name: "오븐빨", floor: "B1", storetype: "restaurant", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 8, name: "쥬쥬퍼피", floor: "B1", storetype: "shop", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 9, name: "차이나클래스", floor: "B1", storetype: "restaurant", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 10, name: "헤담", floor: "B1", storetype: "beauty", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 11, name: "호치킨", floor: "B1", storetype: "restaurant", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 12, name: "플러스투어", floor: "B1", storetype: "rent", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 13, name: "지구촌공인중개사", floor: "B1", storetype: "rent", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 14, name: "오쁘헤어", floor: "B1", storetype: "beauty", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 15, name: "다이슨", floor: "B1", storetype: "shop", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
    { no: 16, name: "무무", floor: "B1", storetype: "shop", logo: "../img/sample/starbucks-logo.png", phone: "010-0000-0000" },
  ];

  var template = '<a><img src="${logo}"></a>';
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
    console.log(makeData);

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
  $('#list').on('click', 'button', function(evt) {
    // console.log(this);

    var no = $(this).data('no');
    var value = data[no - 1];
    // console.log(value);
    var view = 'No: ' + value.no + ' &nbsp; &nbsp;';
    view += 'Name: ' + value.name + ' &nbsp; &nbsp;';
    view += 'Capital: ' + value.capital + ' &nbsp; &nbsp;';
    


    $('#result').html('상세정보: ' + view)
  })
        
});