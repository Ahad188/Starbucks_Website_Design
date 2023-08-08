let menu = document.getElementById('menu-icon') ;
let navigate = document.getElementById('navigate') ;
 

 
     menu.onclick=()=>{
          // console.log("ok menu");
          menu.classList.toggle('bx-x')
          navigate.classList.toggle('active') 
     }
     window.scroll=()=>{
          menu.classList.remove('bx-x')
          navigate.classList.remove('active') 
     }
 