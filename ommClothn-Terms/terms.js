 // DarkMode feature

 var lightBulb = document.getElementById("button");
 var toggle = document.getElementById('toggle');
 lightBulb.onclick = ()=>{
   
   document.body.classList.toggle("dark-mode");
   toggle.classList.toggle('dark-mode');

   if (document.body.classList.contains('dark-mode')){
       localStorage.setItem('dark-mode', 'enabled');
   } else {
       localStorage.setItem('dark-mode','disabled');
   }

   // lightBulb Icon change functionality
   //if(document.body.classList.contains("dark-mode")){
    // lightBulb.src = "./svgImages/darkModeSvg/sun.png";
   //} else {
    // lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
   }

   

   //Attempt to Set Persistent Preference in Light || DarkMode Credits @ ma-no.org

   

   if (localStorage.getItem('dark-mode')=='enabled'){
       document.body.classList.toggle('dark-mode');
       toggle.classList.toggle('dark-mode');
   }
 
 //}
 
 // DarkMode Feature ends Here