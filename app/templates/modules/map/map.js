ymaps.ready(init);
let mymapId = document.querySelector("#mymap");
function init(){
  if(mymapId){
    var myMap = new ymaps.Map('mymap', {
      center: [56.85, 53.20],
      zoom: 13
    });
    var myPlacemark = new ymaps.Placemark([56.83, 53.44], {
      hintContent: 'Изюм',
      balloonContent: 'Изюм'      
    }, {        
      preset:'islands#yellowIcon',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]});
      myMap.geoObjects.add(myPlacemark);
  };
  }