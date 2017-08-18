// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require material
var data;
var ticks = 2;
var occ;
var day;

$.getJSON("https://qubox-ddkclaudio.c9users.io/to_json.json", function(json) {
    data = json;
    puts(data)
});

function tab_ticks(arg){
    ticks = arg;
}

function select_occ(arg){
    occ = arg;
    day = $("#day").html().replace("Estudos do Book - ","");
    update();
}

function update() {
    puts(day);
    puts(ticks);
    puts(occ)
}

function puts(argument) {
    console.log(argument);
    $("#"+ticks+"_ticks #less50").html("kkkk")
}

function find_occ() {
    
}