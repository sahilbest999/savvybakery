


 $("#nav-line").css('width',$('.nav li.selected').outerWidth());

 function sumget(arr){
     ans = [];
     sum = 0;
     for(item of arr){
        sum+=$(item).outerWidth()+5;
        ans.push(sum);
     }
     return ans;
 }

 var Ans = sumget($('.nav li'));



$(document).ready(function () {
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // if (isMobile) {
        
    // }
    // else{
        
    // }
    // $('#review').css('padding-top',$('.nav').outerHeight()-30);
    // $('#review').css('padding-bottom',$('.nav').outerHeight()+1);

    document.querySelector('#home .inner .wu').addEventListener('animationend', function(e){
        $(this).stop().animate({letterSpacing: '0px' }, 300,'easeInOutExpo',function(){
            setTimeout(()=>{$(this).css('letter-spacing','50px')},6000)
        });
    });

    $('.nav li.home').click(function(){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });

    $('.nav li.menu').click(function(){
        $('a.linkNav')[1].click();
    });

    // $('.nav li.gallery').click(function(){
    //     $('a.linkNav')[2].click();
    // });

    $('.nav li.reviews').click(function(){
        $('a.linkNav')[2].click();
    });

    $('.nav li.contact').click(function(){
        $('a.linkNav')[3].click();
    });


    $('.nav li.aboutus').click(function(){
        $('a.linkNav')[4].click();
    });
    
   

    $(".nav").sticky({topSpacing:0,zIndex:9999999});

    var HomeScrollobserver1 = new IntersectionObserver(function(entries) {
        if(entries[0]['isIntersecting'] === true) {

            if(entries[0]['intersectionRatio'] > 0.6){

                var width = $(".nav .home").outerWidth();
                $('#nav-line').css('width',width);

                $("#nav-line").css('margin-left','0');
            }
        }
    }, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.7, 1] }).observe(document.querySelector("#home"));
     
    var MenuScrollobserver2 = new IntersectionObserver(function(entries) {
        // since there is a single target to be observed, there will be only one entry
        if(entries[0]['isIntersecting'] === true) {

      
            if(entries[0]['intersectionRatio'] > 0.5){
                var width = $(".nav .menu").outerWidth();
                $('#nav-line').css('width',width);
        
                $("#nav-line").css('margin-left',Ans[0]);
            }
        }
    }, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.7, 1] }).observe(document.querySelector("#menu"));
    
    // var GalleryScrollobserver1 = new IntersectionObserver(function(entries) {
    //     if(entries[0]['isIntersecting'] === true) {

    //         if(entries[0]['intersectionRatio'] > 0.6){

    //             var width = $(".nav .gallery").css('width');
    //             $('#nav-line').css('width',width);

    //             $("#nav-line").css('margin-left',Ans[1]);
    //         }
    //     }
    // }, { threshold: [0.5,0.7, 1] }).observe(document.querySelector("#gallery"));
     
    var ReviewScrollobserver1 = new IntersectionObserver(function(entries) {
        if(entries[0]['isIntersecting'] === true) {
            
            if(entries[0]['intersectionRatio'] > 0.6){
                var width = $(".nav .reviews").outerWidth();
                $('#nav-line').css('width',width);

                $("#nav-line").css('margin-left',Ans[1]);
            }
        }
    }, { threshold: [0.5,0.7, 1] }).observe(document.querySelector("#review"));
     
    var ContactScrollobserver1 = new IntersectionObserver(function(entries) {
        if(entries[0]['isIntersecting'] === true) {
            if(entries[0]['intersectionRatio'] > 0.6){

                var width = $(".nav .contact").outerWidth();
                $('#nav-line').css('width',width);


                $("#nav-line").css('margin-left',Ans[2]-2);
            }
        }
    }, { threshold: [0.5,0.7, 1] }).observe(document.querySelector("#contact"));
     
    
    var AboutUsScrollobserver3 = new IntersectionObserver(function(entries) {
        // since there is a single target to be observed, there will be only one entry
        if(entries[0]['isIntersecting'] === true) {
            if(entries[0]['intersectionRatio'] > 0.6){

                var width = $(".nav .aboutus").outerWidth();
                $('#nav-line').css('width',width);

                 $("#nav-line").css('margin-left',Ans[3]-3);
            }

        }
    }, { threshold: [0.5,0.7, 1] }).observe(document.querySelector("#aboutus"));
    

      var menuIsotope = $('.category-items').isotope({
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });
  
    $("#foodcategory li").click(function(e){
        $("#foodcategory li").removeClass("category-selected");
        $(this).addClass('category-selected');

        menuIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if(scroll<5){
            $('.nav').removeClass('navBackground');

        }
        else{
            $('.nav').addClass('navBackground');

        }
    });
    var scrolltoOffset = $('.nav').outerHeight();
    $('.nav a').on('click', function(e) {
          var target = $(this.hash);
          if (target.length) {
            e.preventDefault();

            var scrollto = target.offset().top - scrolltoOffset;
    
            $('html, body').stop().animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
   
          }
      });


    $('.nav li').click(function(e){
        $('.nav li').removeClass("selected");
        $(this).addClass("selected");
    });

    $('.review-slider').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        friction: 0.3
      });

      formcarry({
        form: "2yWXkx33Cow4",
        // id or the class name of the form element, only form element allowed
        // works with css selectors
        // # <= for id
        // . <= for class
        element: "#OrderForm",
        extraData: {
          // add whatever you want
          Ordered_Items:getCartData(),
        },
        // Success callback, you can show alert messages
        // or redirect the user in this function
        onSuccess: function(response){
          alert("Your Order Has Been Placed Successfully!\nWe'll Contact You within 5 hrs");
        },
        // Error callback, a good place to show errors 🗿
        onError: function(error){
            alert("Something Went Wrong!\nPlease Check Your Internet Connection!");
        }
      });

});

function getCartData(){
    



    return Data;
}