


<!DOCTYPE html>
<html>
  <head>
    <style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>

         <script src='jquery-3.3.1.min.js'></script>
 
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
  
    </script>


 <button id ="idbutonmap" onclick="myFunction2()">map</button>
 <button id ="idbuton" onclick="androiniciawaze()">android</button>
    <div id="demo"></div>
<script>
  
var vreturn="";
var vid="1";
var vndpadre="taxis";
var vndhijo="uno";
   function showAndroidToast(st1,st2,st3,st4) {

    vid="1";
       vreturn=  window.Android.showToast(vid,vndpadre,vndhijo);
 document.getElementById("demo").innerHTML = vreturn;
   //  alert(st);
    }


     function showAndroiinicia() {
vid="2";
    
      var vreturninicio=  window.Android.showToast(vid,vndpadre,vndhijo;
        document.getElementById("demo").innerHTML = vreturninicio;
   //  alert(st);
    }


    </script>
     <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
<script  src="login.js"></script>
        </script> <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCV4ya46Yoag-iGeJb5SUwZ2q1Irx0UjnU&callback=initMap">
    </script>


  </body>
</html>








