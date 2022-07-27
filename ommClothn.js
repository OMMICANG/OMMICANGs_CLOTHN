    //preloader Call Credits @ProMaker Dev YouTube.

    var loader = document.getElementById("loader")
    console.log(loader); // Call check
    window.addEventListener("load", vanish)

    function vanish() {
        loader.classList.add("disappear");
    }
       
      // DarkMode feature

      var lightBulb = document.getElementById("button");
      var ToggleOn = document.getElementById('toggle');
      lightBulb.onclick = ()=>{
        
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains('dark-mode')){
            sessionStorage.setItem('dark-mode', 'enabled');
        } else {
            sessionStorage.setItem('dark-mode','disabled');
        }


        // lightBulb Icon change functionality
        //if(document.body.classList.contains("dark-mode")){
         // lightBulb.src = "./svgImages/darkModeSvg/sun.png";
        //} else {
         // lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
        }

        

        //Attempt to Set Persistent Preference in Light || DarkMode Credits @ ma-no.org

        

        if (sessionStorage.getItem('dark-mode')=='enabled'){
            document.body.classList.toggle('dark-mode');
            ToggleOn.checked = true;

        }
      
      //}
      
      // DarkMode Feature ends Here


       // BGmusic Starts Here
/*var timer = setInterval(() => {
    document.getElementById("popUp").style.display = "flex";
    
    var getMusic= document.getElementById("Yes");
    var cancel=  document.getElementById("No");
    
    if(getMusic){
    getMusic.onclick = ()=>{
      musicPlay();
      clearInterval(timer);
      document.getElementById("popUp").style.display = "none";
    }
    } if(cancel) { // else if doesn't seem to work
    cancel.onclick = ()=>{
      
      clearInterval(timer);
      document.getElementById("popUp").style.display = "none";
      }
    }else {
      document.getElementById("popUp").style.display = "none";
    
    }
      
    }, 3000);
    
    
    
    // PART B
    
    function musicPlay() {
      document.getElementById('ID').play();
    }
    
    function musicStop() {
    var reset = document.getElementById('ID');
    reset.pause();
    if (reset.pause()){
      reset.play(); // Prev issue solved reset code credits @adeneo (Stack)
    }
      else{
        reset.currentTime = 0;
      }
    } 
    // BGmusic Ends Here*/z
   
      

// Main slider Effect {Credits > Web Dev @YouTube}
//selecting needed Elements
const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLenght = slideLeft.querySelectorAll('div').length;

// code for Image slide

let activeSlideIndex =0;

slideLeft.style.top = `-${(slidesLenght -1) * 100}%`;

//Adding Event Listener to Button

upButton.addEventListener('click', ()=> changeSlide('up'));
downButton.addEventListener('click', ()=> changeSlide('down'));

const changeSlide  = (direction)=> {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLenght -1){
            activeSlideIndex = 0;
        } 
    } else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLenght -1;
        }
    }

    slideRight.style.transform =  `translateY(-${
        activeSlideIndex * sliderHeight}px)`;

        slideLeft.style.transform =  `translateY(${
            activeSlideIndex * sliderHeight}px)`;
};

// End of SliderCode

// ---- H-SLIDER CODE STARTS HERE
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      
    },
  
  });
