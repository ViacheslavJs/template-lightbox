
"use strict"

const galleryLayer = document.getElementById('gallery-layer');
const singleLayer = document.getElementById('single-layer');
const iconClose = document.getElementById('close');
const popLayer = document.getElementById('pop-up-layer');

const effect = document.getElementsByClassName('for-effects');

const pageScroll = document.getElementsByTagName('body')[0]; 


let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('filter-blur-grayscale');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('filter-blur-grayscale');
      }  
    };

// page scroll disable function (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// page scroll enable function (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // instead of visible - auto or ""
}
    
function showInfo() {  
  popLayer.style.display = "block";  
  onEffect();
  disablePageScrolling(); 
} 

function hideInfo() {  
  popLayer.style.display = "none";  
  offEffect();
  enablePageScrolling();
}     
                   
function showGallery() {  
  galleryLayer.style.display = "block";
  iconClose.style.display = "block";  
  onEffect();
  disablePageScrolling();           
}

function hideGallery() {	
  galleryLayer.style.display = "none";
  iconClose.style.display = "none"; 
  offEffect(); 
  enablePageScrolling();  
}

function closeLayer() {
  galleryLayer.style.display = "none";
  iconClose.style.display = "none";  
  offEffect(); 
  enablePageScrolling(); 
}

function showSingleImg() {  
  singleLayer.style.display = "block";
  onEffect(); 
  disablePageScrolling();
}

function hiddeSingleImg() {	
  singleLayer.style.display = "none"; 
  offEffect();
  enablePageScrolling();   
}

function closeSingleLayer() {
  singleLayer.style.display = "none";  
  offEffect();
  enablePageScrolling();  
}

///////////////

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('gallery');
  const info = document.getElementsByClassName('pop-up');
  let i;
   
  if (n > slides.length) {
      slideIndex = 1
  }
  
  if (n > info.length) {
      slideIndex = 1
  }
      
  if (n < 1) {
      slideIndex = slides.length
  }    
  
  if (n < 1) {
      slideIndex = info.length
  } 
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
  }
      
  slides[slideIndex-1].style.display = "block";
  info[slideIndex-1].style.display = "block";
  
  //////// centering images in gallery /////////   
  const sizeLayer = document.getElementById('gallery-layer'); 
  let heightLayer = sizeLayer.offsetHeight;                                     
  //console.log(heightLayer);

  let heightGallery = slides[slideIndex-1].offsetHeight;
  //console.log(heightGallery);
  
  // centering algorithm:
  let differenceLayerGallery = heightLayer - heightGallery;
  let remainder = differenceLayerGallery / 2;
  
  if (heightGallery < heightLayer) {
      slides[slideIndex-1].style.top = remainder + "px"; 
  } else if (heightGallery > heightLayer) {
      slides[slideIndex-1].style.top = 0 + "px";
  }

}

///////////////

let imgIndex = 1;
showImg(imgIndex);

function counterImg(w) {
  showImg(imgIndex = w);
}

function showImg(w) {
  const bigImg = document.getElementsByClassName('single-image');
  let i;
   
  if (w > bigImg.length) {
      imgIndex = 1
  }
    
  if (w < 1) {
      imgIndex = bigImg.length
  }
    
  
  for (i = 0; i < bigImg.length; i++) {
      bigImg[i].style.display = "none";
  }
    
  
  bigImg[imgIndex-1].style.display = "block";  

  //////// single image centering /////////   
  const sizeSingleLayer = document.getElementById('single-layer'); 
  let heightSingleLayer = sizeSingleLayer.offsetHeight;                                     
  //console.log(heightSingleLayer);

  let heightBigImg = bigImg[imgIndex-1].offsetHeight;
  //console.log(heightBigImg);
  
  // centering algorithm:
  let differenceLayerImg = heightSingleLayer - heightBigImg;
  let remain = differenceLayerImg / 2;
  
  if (heightBigImg < heightSingleLayer) {
      bigImg[imgIndex-1].style.top = remain + "px"; 
  } else if (heightBigImg > heightSingleLayer) {
      bigImg[imgIndex-1].style.top = 0 + "px";
  }

}

///////////////

