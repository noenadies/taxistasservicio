
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

alert("ok");

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
/*for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log( "fi " + arrnode2[indi]);
//console.log( "idgeneral " + idgeneral);

}*/


//   console.log( "id " +Object.keys(arrnode2) );

/*

var i;
for (i = 0; i < arrnode2.length; i++) { 
console.log( "arrnode2 " + arrnode2[i].idfirebase);
}
*/


/*
for (var i=1 ; i<=idgeneral;i=i+1){

//console.log("s "+ Object.keys(arrnode2));
console.log("s "+ arrnode2[i]);
}*/

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}

// tieen los id node de firebase y id  de
function  arrayidall(){
var i;
for (i = 0; i < arrnode2.length; i++) { 
console.log( "arrnode2 " + arrnode2[i].idfirebase);


}

}
//busco la informacion del json traido 
// firebase  los valor ejemplo general ceria ya el padres en estecaso
//de fireabse taxi pues el node  de taxis los hijos  son uno dos y tres  ese seria hijo  nodh
// un hijo mas profundo nodh2 seria  cedula telefono, nombre ect 
function  nodepartei(nodh,nodh2){
//console.log( "general.uno.cedula  = general[nodh][nodh2]  " + general[nodh][nodh2]);
return general[nodh][nodh2]; 
}


var noregistro=true;
function validadcionuser(cel,ced){
for(var val in general){
    console.log("cel "+general[val].cedula);
   if(general[val].cel==cel&&general[val].cedula==ced){
 alert("encontrado login ");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}
var idx=0;


function myFunction2(){
 console.log("cel "+general["uno"].cedula);
//validadcionuser("311","1112");
//console.log("fffffffff "+general["taxis"]["uno"].lat);
//showAndroidToast(22);
}

function llamarandroid(){

    // vreturn=  window.Android.showToast(id,st1,st2);
 document.getElementById("demo").innerHTML = vreturn;
}



function unavesmensaje()
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
for (var indice in objh) {

 colocar = {idscript: idgeneral, idfirebase:objh[indice]};
//arrnode2.push(idgeneral,objh[indice]);
arrnode2.push(colocar);

//arrnode2.push(idgeneral,objh[indice]);
//idgeneral=idgeneral+1;
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log("ind'" + indice + "un  " + objh[indice]);


}




for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log( "fi " + arrnode2[indi]);
//console.log( "idgeneral " + idgeneral);

}/*
for (var i=1 ; i<=idgeneral;i=i+1){

//console.log("s "+ Object.keys(arrnode2));
console.log("s "+ arrnode2[i]);
}*/

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}




var idx=0;


function udatemap(){


   initMap1();
   andridmarker(222, map) ;
   eventoonclimaker(markerand);

  
}

    function initMap1() {
        var uluru = {lat: 4.657883333333333, lng: -74.06214833333334};
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
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

  var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";
  
           var marker = new google.maps.Marker({
           position:{lat:latm, lng: lngm},
           //  icon: icons[feature.type].icon,
            map: map,
            title:"uno",
            name:"uno",
            
            icon: image,

            activom:"b",
               animation: google.maps.Animation.DROP
          });




   markers.push({idmar:0, lng: marker});

   marker.addListener('click', function(e) {
   map.setZoom(13);
   map.setCenter(this.getPosition());
   // alert(this.title);
    console.log("name "+this.name);
     console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
    this.activom="a";
    //clearMarkers(markesmas);
    console.log(this.activom);//4.635707

    this.activom="a";
/*
firebase.database().ref().child("taxis").child(String(this.name)).child("activo").set(this.activom);
   this.activom="a";
firebase.database().ref().child("taxis").child(String(this.name)).child("latuser").set(vlatuser);
firebase.database().ref().child("taxis").child(String(this.name)).child("lnguser").set(vlnguser);
 firebase.database().ref().child("taxis").child(String(this.name)).child("msn").set("carrera activa");
 
*/



  });












     

      }

     

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
    position: {lat:latus, lng:lngus},
   map: map,
   icon:imaandroidiconmaker,
   title:"android",
           

  });

 markers.push({idmar:1, lng: markerand});

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



  });

}

//setttimeout(true);

var viniinterval=true;
function setttimeout(bol){

  viniinterval=bol;
  if(viniinterval){
   
setTimeout(cuenta_atras, 3000);

}
}

function cuenta_atras(bo){


  showAndroidToast("gpsllamar","","","");
  var boli=bo;
  if(String(bo)=="undefined"){
boli=true;}

udatemap();
 setttimeout(boli);



//window.location="https://noenadies.github.io/taxistasservicio/";

}


setTimeout(wazeinicia, 3000);
function wazeinicia(){

document.getElementById("demo").innerHTML = vnodelatuser+
" lauylnu "+  vnodelnguser+""+vnodelat+" "+vnodelng+
" "+vndpadre+" "+vndhijo+"  "+"waze activo";
showAndroidToast("wazeinciia","","","");
}
