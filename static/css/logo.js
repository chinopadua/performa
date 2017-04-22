var num = 1;
$('brand-logo').attr("src","static/img/performa-logo-white.png");

$(window).scroll(function () { 
  num = $(window).scrollTop() / 3;
  
 if( parseInt(num) === num){
  
      $('brand-logo').attr("src","http://sendamessage.to/dist/images/fistbump-700/"+ num +".png");}
  else{}
  
  if (num<1){
    $('brand-logo').attr("src","static/img/performa-logo-white.png");
  }
    if (num>30){
    $('brand-logo').attr("src","static/img/performa-logo.png");
      $("brand-logo").css("position","absolute");
  }


});