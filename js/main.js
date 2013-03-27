var li = "elements/0.jpg elements/1.jpg elements/2.jpg elements/3.jpg elements/4.jpg elements/5.jpg elements/6.jpg elements/7.jpg elements/8.jpg elements/9.jpg".split(" ")

$(document).ready(function(){
	var rnd = Math.floor(li.length * Math.random());
	$("#header")
		.css("opacity", "0")
		.css("background-image", "url(" + li[rnd] + ")")
		.animate({
			opacity: 1
		}, 1000);
	var i = 0;
		$(".club").css("background-image", function(){
			i++;
			return "url(" + li[i-1] + ")";
		});
});
$(".club").mouseover(function(){
    $(this).fadeTo("fast", 1)
});
$(".club").mouseout(function(){
    $(this).fadeTo("fast", 0.8)
});
