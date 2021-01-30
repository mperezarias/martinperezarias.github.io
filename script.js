// NAVBAR STICKY


function navbarsticky(){
    window.addEventListener('scroll', () =>{
        if (scrollY > 20){
        document.querySelector('.navbar').classList.add('sticky');
        document.querySelector('.menu').classList.add('sticky');
        }else{
            document.querySelector('.navbar').classList.remove('sticky');
            document.querySelector('.menu').classList.remove('sticky');
        }
    });
}

window.onload = navbarsticky();

// BLURRY TEXT RESPONSIVE


function responsiveblur(){
    window.addEventListener('scroll', () =>{
        var widthsize = window.innerWidth;
        var heightsize = window.innerHeight;

        if (widthsize > 700 && heightsize > 500){
            window.addEventListener('scroll', () =>{
                    if (scrollY > 160){
                    document.querySelector('.resume').classList.add('blur');
                    }else{
                        document.querySelector('.resume').classList.remove('blur');
                    }
                });
            }
        else{
            window.addEventListener('scroll', () =>{
                    if (scrollY > 280){
                        document.querySelector('.resume').classList.add('blur');
                    }else{
                        document.querySelector('.resume').classList.remove('blur');
                    }
                });
            }

    });
}

window.onload = responsiveblur();




// NAME HIGHLIGHT

var i = 1;

function highlightname(){

    var name = document.querySelector('.n'+ i);
    var nameless = document.querySelector('.n'+ (i - 1));

    if (i<5){
        name.classList.add('high');
        if (i>1){
            nameless.classList.toggle('high');
        }
        i++;
        setTimeout("highlightname()",1500);
    }else{
        nameless.classList.toggle('high');
        i = 1;
        highlightname();
    }

}

window.onload = highlightname();


// SCROLL INTO VIEW

var links = document.querySelector('.navbar ul a')

for (var link of Object.keys(links)) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
   
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  }


// SCROLL REVEAL

const sr = ScrollReveal();

sr.reveal('.rev',{
    origin: 'left',
    distance: '180px',
    duration: 1500
});


//PROGRESS BAR

function move(pg,text,bar,max) {
    if (pg == 0){
        pg = 1;
        var width = 1;
        var id = setInterval(frame, 15);
        function frame(){
            if (width >= max){
                clearInterval(id);
                pg = 0;
            }else{
                width++;
                bar.style.width = width + "%";
            }

            text.innerHTML = width + '%';  
        }
    }       
}

var cb = 0;
var ctext = document.querySelector('.ctext');
var barc = document.querySelector('.cprogress');

var cppb = 0;
var cpptext = document.querySelector('.cpptext');
var barcpp = document.querySelector('.cppprogress');

var htmlb = 0;
var htmltext = document.querySelector('.htmltext');
var barhtml = document.querySelector('.htmlprogress');

var cssb = 0;
var csstext = document.querySelector('.csstext');
var barcss = document.querySelector('.cssprogress');

var jsb = 0;
var jstext = document.querySelector('.jstext');
var barjs = document.querySelector('.jsprogress');

var angb = 0;
var angtext = document.querySelector('.angtext');
var barang = document.querySelector('.angprogress');

document.querySelector('.c img').addEventListener('click', ()=>{
    move(cb,ctext,barc, 60);
});


document.querySelector('.cpp img').addEventListener('click', ()=>{
    move(cppb,cpptext,barcpp, 65);
});

document.querySelector('.html img').addEventListener('click', ()=>{
    move(htmlb,htmltext,barhtml, 80);
});

document.querySelector('.css img').addEventListener('click', ()=>{
    move(cssb,csstext,barcss, 60);
});

document.querySelector('.js img').addEventListener('click', ()=>{
    move(jsb,jstext,barjs, 55);
});

document.querySelector('.angular img').addEventListener('click', ()=>{
    move(angb,angtext,barang, 15);
});

//OWL CAROUSEL SCRIPT

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        autoplay: true,
        slideTransition: 'ease-in-out',
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true
    });
});


//RESPONSIVE MENU

const showMenu = () =>{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li');

    burger.addEventListener('click', ()=>{
            
        menu.classList.toggle('menu-active');

        //Slide-in Animation
        menuLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = "";
            }
            else{
                link.style.animation = `menuFade 0.5s ease forwards ${index/7 + .5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

showMenu();

//SHOW DETAIL

const achiv = document.querySelector('.achiv');
const det = document.querySelector('.det');
const revs = document.querySelectorAll('.rev');
const details = document.querySelectorAll('.detail');



achiv.addEventListener('click', ()=>{
    achiv.classList.toggle('hidden');
    det.classList.toggle('hidden');
    
    revs.forEach(element =>
    element.classList.toggle('hidden'));

    details.forEach(element =>
        element.classList.toggle('hidden'));
});

det.addEventListener('click', ()=>{
    achiv.classList.toggle('hidden');
    det.classList.toggle('hidden');

    revs.forEach(rev =>
        rev.classList.toggle('hidden')     
        );
    
        details.forEach(de =>
            de.classList.toggle('hidden'),
        );
});




