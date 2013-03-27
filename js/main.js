var li = "elements/0.jpg elements/1.jpg elements/2.jpg elements/3.jpg elements/4.jpg elements/5.jpg elements/6.jpg elements/7.jpg elements/8.jpg elements/9.jpg".split(" ");
//var col = "0004B3 24B300 5AB300 8fb300 b3a100 b36b00 b33600 b30000 b30036 b3006b".split(" ");
var col = "2f415e 385e2f 475e2f 545e2f 5e592f 5e4b2f 5e3d2f 5e2f2f 5e2f3d 5e2f4b".split(" ");

$(document).ready(function(){
	var rnd = Math.floor(li.length * Math.random());
	var headImg = new Image();
	var i = 0;
	headImg.src = li[rnd];
	headImg.onload = function(){
		var height = 300-headImg.naturalHeight;
		$("#header")
			.css("background-image", "url(" + headImg.src + ")")
			.animate({
				"background-position-y": height + "px"
			}, 3000);
	}
  $(".club").css("background-color", function(){
    i++;
    return "#" + col[i-1];
  });
  $(".club").mouseover(function(){
      $(this).fadeTo("fast", 1)
  });
  $(".club").mouseout(function(){
      $(this).fadeTo("fast", 0.8)
  });
});
