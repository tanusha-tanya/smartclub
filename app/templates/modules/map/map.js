ymaps.ready(init);
let mymapId = document.querySelector("#mymap");
function init(){
  if(mymapId){
   ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('mymap', {
            center: [56.85, 53.20],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#yellowDotIcon');
    objectManager.clusters.options.set('preset', 'islands#yellowClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}
  };
  }
