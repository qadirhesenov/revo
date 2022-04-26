const myacc=document.querySelector(".myacc");
const submenu=document.querySelector(".submenutop");
const fun=()=>{
  if(submenu.style.display=="block"){
    submenu.style.display="none";
    submenu.style.transition="1s";
  }else{
    submenu.style.display="block";
    submenu.style.transition="1s";
  }
}
myacc.addEventListener("click",fun);
$(".ham").click(function(){
  $(".toggle").addClass("jqtog");
});
$(".button").click(function(){
  $(".toggle").removeClass("jqtog");
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".icon2",
    prevEl: ".icon1",
  },
});
  const sec6=document.querySelector(".mySwiper");
     var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon12",
      prevEl: ".icon11",
    },
    breakpoints: {
      350: {
        slidesPerView: 1
      },
      390:{
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      992:{
        slidesPerView:5
      }
    }
  });
  var swiper = new Swiper(".mySwiper1", {
 slidesPerView: 5,
 spaceBetween: 30,
 slidesPerGroup: 1,
 loop: true,
 loopFillGroupWithBlank: true,
 pagination: {
   el: ".swiper-pagination2",
   clickable: true,
 },
 navigation: {
   nextEl: ".icon2",
   prevEl: ".icon1",
 },
 breakpoints: {
   350: {
     slidesPerView: 1
   },
   390:{
     slidesPerView: 2
   },
   700: {
     slidesPerView: 3
   },
   992:{
     slidesPerView:5
   }
 }
});
var swiper = new Swiper(".mySwiper9", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".icon22",
    prevEl: ".icon21",
  },
  breakpoints: {
    350: {
      slidesPerView: 3
    },
    700: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 5
    },
    993: {
      slidesPerView: 5
    }
  }
});
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon22",
      prevEl: ".icon21",
    },
    breakpoints: {
      350: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      993: {
        slidesPerView: 3
      }
    }
  });
    AOS.init();
  const func=()=>{
    let day=new Date();
    let h=day.getHours();
    let m=day.getMinutes();
    let s=day.getSeconds();
    m=min(m);
    s=min(s);
    h=hour(h)
    document.querySelector(".demo").innerHTML=`${h}:${m}:${s} `;
}
setInterval(func,1000);
function min (a){
    if(a<10){
        a="0"+a;
    }
    return a;

}
function hour (b){
  if(b>23){
      b="0"+b;
  }
  return b;
}
const en=[
    "HOME",
    "SHOP",
    "COLLECTION",
    "ACCESSORIES",
    "LAYOUT",
    "BLOG",
    "BONUS PAGE"
]
const az=[
    "EV",
    "MAGAZA", 
    "KOLLEKSIYA",
    "XUSUSIYYETLER",
    "LAYUT",
    "BLOQ",
    "BONUS SEHIFE"
]
const nav =document.querySelectorAll(".nav")
const btn=document.querySelector(".button1")
const multiLang=()=>{
  if(btn.innerHTML=="AZ"){
    for(let i=0;i<az.length;i++){
      nav[i].innerHTML=az[i];
      localStorage.setItem("multiLang",az)
      btn.innerHTML="EN"
    }
  }else{
    for(let i=0;i<en.length;i++){
      nav[i].innerHTML=en[i];
      localStorage.setItem("multiLang",en)
      btn.innerHTML="AZ";
    }
  }
}
for(let i=0;i<az.length;i++){
  nav[i].innerHTML=localStorage.getItem("multiLang").split(",")[i]
}
btn.addEventListener("click",multiLang);
