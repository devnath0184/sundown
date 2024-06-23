
function page4Anim(){
  var eBox = document.querySelector(".eBox");
var box = document.querySelectorAll(".box4");
var video = ["1.mp4","5.webp",  "2.mp4","6.webp",  "3.mp4", "7.webp","4.mp4", "7.webp"];
box.forEach(function(x, index) {
  x.addEventListener("mouseenter", function() {
    eBox.style.transform = "scale(1)";
    if (index % 2 == 0) {
      eBox.innerHTML = `<video src="${video[index]}" autoplay loop muted></video>`;
    } else {
      eBox.innerHTML = `<img src="${video[index]}">`;
    }
  });

  x.addEventListener("mouseleave", function() {
    eBox.style.transform = "scale(0)";
    eBox.innerHTML = "";
  });
});
}
page4Anim()

function circle(){
  var circle = document.querySelector(".circle6");
let box = document.querySelector(".page6");
box.addEventListener("mouseenter",()=>{
  gsap.to(circle, {
    scale :1,
  })
})
box.addEventListener("mouseleave",()=>{
  gsap.to(circle, {
    scale :0,
  })
})
box.addEventListener("mousemove",(dets) => {
  gsap.to(circle,{
    x: dets.x - 72.96,
    y:dets.y - 72.96
  })
})

}
circle()




function smoothScroll(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
smoothScroll();

function boxAnim() {
  gsap.from(".box4 h1, .box4 p", {
      y: 50,
      opacity: 0,
      // stagger: 0.1,
      scrollTrigger: {
          trigger: ".page4",
          scroller: ".main",
          scrub: 2,
          // markers: true,
          start: "top 60%",
          end: "top 5%"
      }
  });
}
boxAnim();

function box6Anim(){
  gsap.from(".box6 img, .box6 p",{
    y: 50,
    opacity:0,
    stagger: .1,
    scrollTrigger:{
      trigger:".page6",
      scroller: ".main",
      scrub: 2,
      end: "top 20%",
      start: "top 70%"
    }
  })
}
box6Anim()

function page1Anim(){
  var tl = gsap.timeline();
  tl.from("nav h5", {
    y: 50,
    opacity:0, 
    stagger: .1,
    delay: 2.7,
    duration: 1
  })
  tl.from(".left1 h6",{
    opacity: 0
  })
  tl.from(".page1 .right1 h1 ",{
    // y: 150,
    // delay: 2.7,
    duration: 1,
    opacity: 0
  },"-=.5")
}
page1Anim()

function nevRes(){
  var menu = document.querySelector(".navRes h1");
  var tl = gsap.timeline();
  var overlay = document.querySelector(".overlayRes");
  var elem = document.querySelector(".navResElem");
  tl.to(overlay,{
    top: 0,
    duration: .3
  },"a")
  tl.to(elem,{
    top:0,
    duration: .3

  },"a")
  tl.from(".navText h1",{
    y:50,
    opacity: 0,
    stagger: .1
  })
  tl.pause();
  var i = 0;
    menu.addEventListener("click", () =>{
      i++;
      if(i%2!=0){
        tl.play()
      }
      else{
        tl.reverse()
      }
    })
}
nevRes()