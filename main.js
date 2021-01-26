// NAVBAR STICKY

$(document).ready(function(){
    $(window).scroll(function(){
        if (scrollY > 20){
        $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    })
});

// BLURRY TEXT

$(document).ready(function(){
    $(window).scroll(function(){
        if (scrollY > 160){
        $('.resume').addClass('blur');
        }else{
            $('.resume').removeClass('blur');
        }
    })
});


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
        setTimeout("highlightname()",1000);
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

  sr.reveal('.litem',{
    origin: 'left',
    distance: '180px',
    duration: 1800
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

document.querySelector('.c').addEventListener('click', ()=>{
    move(cb,ctext,barc, 70);
});


document.querySelector('.cpp').addEventListener('click', ()=>{
    move(cppb,cpptext,barcpp, 75);
});

document.querySelector('.html').addEventListener('click', ()=>{
    move(htmlb,htmltext,barhtml, 80);
});

document.querySelector('.css').addEventListener('click', ()=>{
    move(cssb,csstext,barcss, 60);
});

document.querySelector('.js').addEventListener('click', ()=>{
    move(jsb,jstext,barjs, 55);
});

document.querySelector('.angular').addEventListener('click', ()=>{
    move(angb,angtext,barang, 15);
});

//OWL CAROUSEL SCRIPT

$('.carousel').owlCarousel({
});