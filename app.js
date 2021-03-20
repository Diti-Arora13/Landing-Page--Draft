 const plus = document.querySelectorAll(".plus");
 const question = document.querySelectorAll(".act-question");
 const faq = document.querySelectorAll(".faq-question")
 const h1 = document.querySelectorAll(".faq-question h1")
  
plus[0].addEventListener('click', change0); 
plus[1].addEventListener('click', change1); 
plus[2].addEventListener('click', change2); 
plus[3].addEventListener('click', change3); 
plus[4].addEventListener('click', change4); 

           // 1st
function change0(){
   if(plus[0].getAttribute("src") == "./images/plus.png"){

      //  plus-minus image
      plus[0].setAttribute("src", "./images/minus.png");
      plus[0].classList.add("minus1");
      
      function otherPlusModificationsOnPlusClick(){
         plus[1].style.marginTop = "90px";
         plus[2].style.marginTop = "60px";
         plus[3].style.marginTop = "60px";
         plus[4].style.marginTop = "60px";
      }
      otherPlusModificationsOnPlusClick();

      //  text addition
      function text() {
         const hey = question[0].innerHTML += "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>";
      }
      setTimeout(text, 200);     
      // actual question width transformation
      faq[0].classList.add("trial");
   }

   else{
      // Plus-minus image 
      plus[0].setAttribute("src", "./images/plus.png");
      plus[0].classList.remove("minus1");

      function otherPlusModificationsOnMinusClick(){
         plus[1].style.marginTop = "20px";
         plus[2].style.marginTop = "5px";
         plus[3].style.marginTop = "0px";
         plus[4].style.marginTop = "0px";
      }
      otherPlusModificationsOnMinusClick();

      // new text removal
      question[0].innerHTML = question[0].innerHTML.replace("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>", "");

      // actual question width transformation
      faq[0].classList.remove("trial");
   }
}

                     // 2nd
function change1(){
   // plus-minus image
    if( plus[1].getAttribute("src") == "./images/plus.png"){
       plus[1].setAttribute("src", "./images/minus.png");
        plus[1].classList.add("minus1");

      function otherPlusModificationsOnPlusClick(){
         plus[2].style.marginTop = "60px";
         plus[3].style.marginTop = "60px";
         plus[4].style.marginTop = "60px";
      }

      otherPlusModificationsOnPlusClick();

      //  new text addition
       function text() {
         question[1].innerHTML += "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>";
       }

       setTimeout(text, 200);

       // actual question width transformation
      faq[1].classList.add("trial");

    }

    else{
      //  plus-minus image
       plus[1].setAttribute("src", "./images/plus.png");
       plus[1].classList.remove("minus1");
 
       function otherPlusModificationsOnMinusClick(){
         plus[2].style.marginTop = "0px";
         plus[3].style.marginTop = "0px";
         plus[4].style.marginTop = "0px";
      }

      otherPlusModificationsOnMinusClick();

      // actual question width transformation
      faq[1].classList.remove("trial");

      //  new text removal
       question[1].innerHTML = question[1].innerHTML.replace("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>", "");
    }
}


// 3rd
function change2(){
     if( plus[2].getAttribute("src") == "./images/plus.png"){
      //  plus-minus image
       plus[2].setAttribute("src", "./images/minus.png");

       function otherPlusModificationsOnPlusClick(){
         plus[3].style.marginTop = "60px";
         plus[4].style.marginTop = "60px";
      }

      otherPlusModificationsOnPlusClick();
      // new text addition
      function text() {
         question[2].innerHTML += "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>";
      }

      setTimeout(text,200);

       // actual question width transformation
      faq[2].classList.add("trial");
    }

    else{
      //  plus-minus image
       plus[2].setAttribute("src", "./images/plus.png");
       question[2].innerHTML = question[2].innerHTML.replace("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>", "");

       function otherPlusModificationsOnMinusClick(){
         plus[3].style.marginTop = "0px";
         plus[4].style.marginTop = "0px";
      }

      otherPlusModificationsOnMinusClick();

       // actual question width transformation
      faq[2].classList.remove("trial");
     }
}

// 4th
function change3(){
    if( plus[3].getAttribute("src") == "./images/plus.png"){

      // plus-minus image
       plus[3].setAttribute("src", "./images/minus.png");

       function otherPlusModificationsOnPlusClick(){
         plus[4].style.marginTop = "60px";
      }

      otherPlusModificationsOnPlusClick();

      // new text addition
      function text() {
         question[3].innerHTML += "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>";
      }

      setTimeout(text, 200);
       
      // actual question width transformation
      faq[3].classList.add("trial");
    }

    else{
       plus[3].setAttribute("src", "./images/plus.png");
       question[3].innerHTML = question[3].innerHTML.replace("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>", "");

       function otherPlusModificationsOnMinusClick(){
         plus[4].style.marginTop = "0px";
      }

      otherPlusModificationsOnMinusClick();

      // actual question width transformation
      faq[3].classList.remove("trial");
    }
}

// 5th
function change4(){
    if( plus[4].getAttribute("src") == "./images/plus.png"){

      // plus-minus image
       plus[4].setAttribute("src", "./images/minus.png");

      // new text addition
      function text() {
         question[4].innerHTML += "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>";
      }

      setTimeout(text, 200);

         // actual question width transformation
      faq[4].classList.add("trial");
      faq[4].style.transition = ".5s";

    }

    else{
       plus[4].setAttribute("src", "./images/plus.png");
       question[4].innerHTML = question[4].innerHTML.replace("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum eligendi fugit repudiandae neque aperiam numquam iure blanditiis reiciendis. Sapiente!</h1>", "");

       faq[4].classList.remove("trial");
    }
}

 
 