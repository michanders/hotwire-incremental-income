// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require_tree .

function formAutoSubmit(){
	var frm = document.getElementById("room");
	frm.submit();
	$("#star option:last").attr("selected", "selected");
}


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
	window.onchange = function(){
		formAutoSubmit;
	};
}
else{
	window.onchange = function(){
		formAutoSubmit;
	};
	window.oninput = function(){
		window.setTimeout(formAutoSubmit, 1500);
	};
};





