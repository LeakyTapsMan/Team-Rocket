var app = angular.module('myApp', ['ngAnimate']);

app.controller('fontsCtrl', function($scope) {
    $scope.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim sit amet ex placerat luctus. Aliquam ullamcorper augue lacus, in ultricies eros venenatis quis. Cras eget elit magna. Curabitur id sagittis massa, non dapibus felis. Integer eu ipsum et sapien scelerisque varius at posuere est. Aliquam viverra volutpat mauris a rhoncus. Aliquam pretium mi sed tempor consequat. Cras varius ex a mauris feugiat fermentum. Mauris pellentesque tincidunt bibendum. Integer commodo interdum mauris in mollis. Ut mi augue, ornare ut lectus et, mattis accumsan leo. Donec dictum sapien justo, ut sagittis ligula luctus et.";
    
    $scope.fonts = [
        {name:"Amaranth", class:"amaranth", type:"Local"},
        {name:"Amaranth Bold", class:"amaranth-bold", type:"Local"},
        {name:"Born", class:"born", type:"Local"},
        {name:"Butler Light", class:"butler-light", type:"Local"},
        {name:"Butler Medium", class:"butler-medium", type:"Local"},
        {name:"Butler Black", class:"butler-black", type:"Local"},
        {name:"Butler Bold", class:"butler-bold", type:"Local"},
        {name:"Butler Stencil", class:"butler-stencil", type:"Local"},
        {name:"Butler Stencil Extra Bold", class:"butler-stencil-extra-bold", type:"Local"},
        {name:"Hero", class:"hero", type:"Local"},
        {name:"Hero Light", class:"hero-light", type:"Local"},
        {name:"Jura", class:"jura", type:"Local"},
        {name:"Jura Bold", class:"jura-bold", type:"Local"},
        {name:"Karla", class:"karla", type:"Google"},
        {name:"League Spartan", class:"spartan", type:"Local"},
        {name:"Montserrat", class:"montserrat", type:"Google"},
        {name:"Montserrat Regular", class:"montserrat-regular", type:"Local"},
        {name:"Quark Bold", class:"quark-bold", type:"Local"},
        {name:"Quark Light", class:"quark-light", type:"Local"}
    ];
});