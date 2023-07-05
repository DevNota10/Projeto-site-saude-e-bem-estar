window.onload = function(){

    // animation click menu desktop
  clickMenu()
      function clickMenu(){
          let menu = document.querySelectorAll(".menu a[href^='#']");

          function getDistanceFromTheTop(element){
              const id = element.getAttribute("href");
              return document.querySelector(id).offsetTop;
          }

          function scrollToSection(event){
              event.preventDefault();
              const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
              
              smoothScrollTo(0 ,distanceFromTheTop,600);
              
          }

          menu.forEach(link=>{
              link.addEventListener("click",scrollToSection);
          });

          function smoothScrollTo(endX, endY, duration) {
              const startX = window.scrollX || window.pageXOffset;
              const startY = window.scrollY || window.pageYOffset;
              const distanceX = endX - startX;
              const distanceY = endY - startY;
              const startTime = new Date().getTime();
            
              duration = typeof duration !== "undefined" ? duration : 400;
            
              const easeInOutQuart = (time, from, distance, duration) => {
                if ((time /= duration / 2) < 1)
                  return (distance / 2) * time * time * time * time + from;
                return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
              };
            
              const timer = setInterval(() => {
                const time = new Date().getTime() - startTime;
                const newX = easeInOutQuart(time, startX, distanceX, duration);
                const newY = easeInOutQuart(time, startY, distanceY, duration);
                if (time >= duration) {
                  clearInterval(timer);
                }
                window.scroll(newX, newY);
              }, 1000 / 60);
            }

              // ClickMenuMobile
          const menuMobiile = document.querySelector("#menu-mobile").addEventListener("click",toggloMenu)
          function toggloMenu(){
              const nav = document.querySelector("nav");
              nav.classList.toggle("active");
      }

      }

    // ---------------------- Slider--------------------------
    
    initSlider()
    function initSlider(){
        const statement = document.querySelector(".statement-box")
        const maxStatements = document.querySelectorAll(".single-statement");
        let timer ;
        let curStatement = 0;

        document.querySelector(".arrow-right").addEventListener("click",function(){
            clearInterval(timer);
            curStatement++;
            if(curStatement > maxStatements.length -1 ){   
            curStatement = 0;
            }
            statement.style.transform= `translateX(${-curStatement * 100 / maxStatements.length}%)`;
        })

        document.querySelector(".arrow-left").addEventListener("click",function(){
            clearInterval(timer);
            curStatement--;
            if(curStatement < 0  ){   
            curStatement = 0
            }
            statement.style.transform= `translateX(${-curStatement * 100 / maxStatements.length}%)`;
        })
        // Auto Slider 
        function chaleSlider(){
            curStatement++;
            if(curStatement > maxStatements.length - 1 ){   
            curStatement = 0;

            }
                statement.style.transform= `translateX(${-curStatement * 100 / maxStatements.length}%)`;
        }
            timer = setInterval(chaleSlider,2000);
                
    }

    // validation form :
    const name = document.getElementsByName("name")[0];
    const tel = document.getElementsByName("tel")[0];
    const email = document.getElementsByName("e-mail")[0];
    const btnForm = document.getElementById("btn-form");
   

    btnForm.addEventListener("click",(e)=>{
      e.preventDefault();

     if(validationName(name) == false){
      aplicationError(name);
     }
     else if(validationtel(tel)== false){
      aplicationError(tel);

     }
     else if(validationEmail(email)== false){
      aplicationError(email)

     }
     else{
      alert('Mensagem enviada!');
     if (alert) window.location ="index.html"
     }
    })
    
    validationName = (name)=>{
      const amount = name.value.split(' ').length;
      const splitStr = name.value.split(' ');
      if(name == ''){
        return false;
      }
      if(amount >= 2){
        for(let i = 0; i < amount ; i++){
          if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
      
          }else{
            return false;
          }
        }
      }else{
        return false;
      }

    }

    validationtel =(tel)=>{
      if(tel == ''){
        return false;
      }
      if(tel.value.match(/^[0-9]{2}[0-9]{5}[0-9]{4}$/) == null){
        return false;

      }
    }

    validationEmail=(email) =>{
      if(email == ''){
        return false
      }
      if(email.value.match(/^([a-z0-9.-_]{1,})+@+([a-z.]{1,})$/) == null){
         return false
      }

    }

    aplicationError =(el)=>{
      el.style.border= "2px solid red"
      el.style.color= "red"
      el.value= "*Campo inválido"

    }

   const resetForm = document.querySelectorAll("form input[type=text]").forEach((el)=>{
      el.addEventListener("focusin",()=>{
        el.style.border= "none"
        el.style.color= "#000"
        el.value= ""

      })
    })





}