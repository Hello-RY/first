

function myfunc1() {
  const ham = document.querySelector('.ham');
  const uljs = document.querySelector('.uljs');
  
  ham.addEventListener("click", () => {
    uljs.classList.toggle("active");
    ham.classList.toggle("active");
  
  })
};

myfunc1();

function myfunc2() {
  const ham = document.querySelector('.ham');
  const uljs = document.querySelector('.uljs');

  uljs.addEventListener("click", () => {
    uljs.classList.remove("active");
    ham.classList.remove("active");
  })
};
myfunc2();





  
  


  function myfunc6() {

    
    const text = document.querySelector(".fancy");
    const strText = text.textContent;
    const splitText = strText.split("");
    
    text.textContent = "";
    // for (let i = 0; i < splitText.length; i++) {
    //   text.innerHTML += "<span>" + splitText[i] + "</span>";

      for(let i=0; i < splitText.length; i++) {
        if (splitText[i] === " ") {
            text.innerHTML += "<span class='span1'>" + "&nbsp" + "</span>";
        } else {
            text.innerHTML += "<span class='span1'>"+ splitText[i] + "</span>";
        }
    }
    
    let char = 0;
    let timer = setInterval(onTick, 70);
    
    function onTick() {
      const span = text.querySelectorAll('.span1')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  
  function complete() {
    clearInterval(timer);
    timer = null;
  }
};

myfunc6();




  // ========reveal=======


  function myfunc8() {

  
    const reveals = document.querySelectorAll('.reveal');
    
    const options = {
      threshold: 0.4
      
    };
    
    const observer = new IntersectionObserver(showElements, options);
    
    reveals.forEach(one => {
      observer.observe(one);
    });
    
    function showElements(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };
  };
    
    myfunc8();

    