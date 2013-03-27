var li = "elements/0.jpg elements/1.jpg elements/2.jpg elements/3.jpg elements/4.jpg elements/5.jpg elements/6.jpg elements/7.jpg elements/8.jpg elements/9.jpg".split(" ")

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
  $(".club").css("background-image", function(){
    i++;
    return "url(" + li[i-1] + ")";
  });
  $(".club").mouseover(function(){
      $(this).fadeTo("fast", 1)
  });
  $(".club").mouseout(function(){
      $(this).fadeTo("fast", 0.8)
  });
});
