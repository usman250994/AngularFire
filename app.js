(function(){

  var config = {
      apiKey: "AIzaSyCLapBJGEwkeCNyNrpH0vMVHnfJj44DhT4",
      authDomain: "testing-739c9.firebaseapp.com",
      databaseURL: "https://testing-739c9.firebaseio.com",
      storageBucket: "testing-739c9.appspot.com",
      messagingSenderId: "983334433543"
    };

    firebase.initializeApp(config);

var app = angular.module('app',['firebase']);
app.controller('MyCtrl',function($firebaseObject){

const rootRef =  firebase.database().ref();
this.object = $firebaseObject(rootRef);
});

var appa = angular.module('appa',['firebase','uiGmapgoogle-maps']);

appa.controller('mainCtrl', function($firebaseObject,$scope) {
  var ref =  firebase.database().ref();
var latArray = [];
var lngArray = [];
  ref.once("value")
  .then(function(snapshot) {
    if(snapshot.hasChildren())
    {
  snapshot.forEach(function(child){
    latArray.push(child.child("Lat").val());
    lngArray.push(child.child("Long").val());
  });
    }
  });
console.log(latArray);
var a = Math.min.apply(Math, latArray);
      var b = Math.max.apply(Math, latArray);
      console.log(a,b);

  $scope.map = {
    center:
    {
      latitude: 51.219053, longitude: 4.404418 },
     zoom: 3
              };
$scope.marker = [];
              var mark = {
   id: 0,
   coords: {
     latitude: 52.219053,
     longitude: 4.404619,
     title: "The Blackup House"
  },
options: { title: 'The White House' }
};
      $scope.marker.push(mark);
      var mark = {
id: 1,
coords: {
latitude: 53.219055,
longitude: 4.904419
},
options: { title: 'The black House' }

  };
$scope.marker.push(mark);
// console.log($scope.marker);

   });

}());
