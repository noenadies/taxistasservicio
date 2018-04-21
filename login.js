
var arraymarkes ;
var generalkey;

var idgeneral=0;
var objh;

  var map;
var markers = [];

var vnodep="";
var vnodelat="";
var vnodelng="";
var vnodelnguser="";
var vnodelatuser="";
var vlatmia="";
var vlngmia="";


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_L67YUVbfzQbgNLFbOylVyuQ6wF4Df_g",
    authDomain: "mototaxi-2b9d7.firebaseapp.com",
    databaseURL: "https://mototaxi-2b9d7.firebaseio.com",
    projectId: "mototaxi-2b9d7",
    storageBucket: "mototaxi-2b9d7.appspot.com",
    messagingSenderId: "424969414739"
  };
  firebase.initializeApp(config);



var general;



unavesmensaje();




var arrnode2=[];



function unavesmensaje2()
{

//var c=String(cedu);
//var cl= String(celu);child("user").

  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");
generalkey=snapshot.key;
general=s;
//console.log("un "+generalkey);
objh=Object.keys(mi);
idgeneral=0;
var colocar;
for (var indice in objh) {
   colocar = {idscript: idgeneral, idfirebase:objh[indice]};
//arrnode2.push(idgeneral,objh[indice]);
arrnode2.push(colocar);
//{firstname : "Malcom", lastname: "Reynolds"}
idgeneral=idgeneral+1;
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log("ind'" + indice + "un  " + objh[indice]);




}


function  nodepartei(nodh,nodh2){

return general[nodh][nodh2]; 
}


var noregistro=true;
function validadcionuser(cel,ced){
for(var val in general){
    console.log("cel "+general[val].cedula);
   if(general[val].cel==cel&&general[val].cedula==ced){

    vlatuser=general[val].latuser;
    vlnguser=general[val].lnguser;
    vlatmia=general[val].lat;
    vlngmia=general[val].lng;

showAndroidToast(vlatmia,vlngmia,vlatuser,vlnguser);

 alert("encontrado login ");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}
var idx=0;


function androiniciawaze(){
showAndroidToast("2","","","");

}
//4.630149, -74.136172
function llamarandroid(){


 document.getElementById("demo").innerHTML = vreturn;
}



function unavesmensaje()
{



  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';

    mi=snapshot.val();

var s=mi;
generalkey=snapshot.key;
general=s;
//console.log("un "+generalkey);
objh=Object.keys(mi);
idgeneral=0;
for (var indice in objh) {

 colocar = {idscript: idgeneral, idfirebase:objh[indice]};

arrnode2.push(colocar);


}




for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);


}
  });


}




var idx=0;


function myFunction2(){

   unavesmensaje();
   initMap();
   andridmarker(222, map) ;
   eventoonclimaker(markerand);
   showAndroidToast("1","","","")

  for (var ids in general ){

    console.log("laattsi   "+general[ids].lat);
  }
}





    function initMap() {
        var uluru = {lat:vnodelat, lng: vnodelng};
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru,
          styles:[

{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#44b8db"
            }
        ]
    }

          ]
        });



  var vidrecore=0;
  var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";

           var marker = new google.maps.Marker({
           position:{lat:vnodelat, lng:vnodelng},
           //  icon: icons[feature.type].icon,
            map: map,
            title:vndhijo,
            name:vndhijo,
         
            icon: image,

            activom:"b",
               animation: google.maps.Animation.DROP
          });




   markers.push(marker);

   marker.addListener('click', function(e) {
   map.setZoom(13);
   map.setCenter(this.getPosition());
   // alert(this.title);
    console.log("name "+this.name);
     console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
    this.activom="b";
    //clearMarkers(markesmas);
    console.log(this.activom);//4.635707

//firebase.database().ref().child("taxis").child(String(this.name)).child("activo").set(this.activom);
   this.activom="a";
   texto(this.getPosition()+" "+this.title+" a "+this.activom);
/*firebase.database().ref().child("taxis").child(String(this.name)).child("latuser").set(vlatuser);
firebase.database().ref().child("taxis").child(String(this.name)).child("lnguser").set(vlnguser);
 firebase.database().ref().child("taxis").child(String(this.name)).child("msn").set("carrera activa");
 
*/}




function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Azure.png
 var markerand ;
 var imaandroidiconmaker="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/map_marker_base-32.png";
function andridmarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
   markerand = new google.maps.Marker({
    position: {lat: vnodelnguser, lng:vnodelatuser},
   map: map,
   icon:imaandroidiconmaker,
   title:"android",
           


  });
}
var vlatuser=0;
var vlnguser=0;
function eventoonclimaker(mark){
    mark.addListener('click', function(e) {
    map.setZoom(13);
    map.setCenter(this.getPosition());
    vlnguser=this.getPosition().lng();
    vlatuser=this.getPosition().lat();
  
   // alert(this.title);
    console.log("name "+this.title);
    // console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
   //// this.activom="a";
    //clearMarkers(markesmas);
    console.log("lat "+this.getPosition());

texto(this.getPosition()+" "+this.title);

  });

}


function texto(str){
  document.getElementById("demo").innerHTML = str
}
