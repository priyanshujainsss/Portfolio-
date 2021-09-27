$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY>20){
           $("nav").addClass("sticky");
       }
       else{
           $("nav").removeClass("sticky")
       }
         if(this.scrollY>500){
             $(".scroll-up-btn").addClass("show")
         }
         else{
             $(".scroll-up-btn").removeClass("show")
         }
    });
//   slide up script
  $('.scroll-up-btn').click(function(){
      console.log("called")
      $('body').animate({scrollTop:0},100);
  });

  //typed script
  var typed=new Typed(".typing",{
      strings:["", 'Designer',' Developer'],
      typeSpeed:70,
      backspeed:60,
      loop:true,
  })



   //menun button toggling
   $(".menu-btn").click(function(){
       $(".navbar .menu").toggleClass("active")
       $(".menu-btn i").toggleClass("active")

   })

// owl carousel script
$(".carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
           items:2,
           nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
})
})

$(".send-mail").click(function(){
    sendEmail()
})









function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "source.priyanshu@gmail.com",
      Password: "password",
      To: 'priyanshu.jain@sourcesoftsolutions.com',
      From: "source.priyanshu@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
          console.log(message)
        alert("mail sent successfully")
      });
  }