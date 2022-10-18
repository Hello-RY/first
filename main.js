

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


function myfunc3() {

  
  const fromLeft = document.querySelectorAll('.from-left');
  
  const options = {
    threshold: 0.8
    
  };
  
  const observer = new IntersectionObserver(showElements, options);
  
  fromLeft.forEach(one => {
    observer.observe(one);
  });
  
  function showElements(entries){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
};
  
  myfunc3();
  
  // =======from-opa===============
  function myfunc4() {

  
    const fromOpa = document.querySelectorAll('.from-opa');
    
    const options = {
      threshold: 0.8
      
    };
    
    const observer = new IntersectionObserver(showElements, options);
    
    fromOpa.forEach(one => {
      observer.observe(one);
    });
    
    function showElements(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
  };
    
    myfunc4();
  // ===========/from-opa============

// =======move-one-by-one=======
  function myfunc5() {

  
    const oneBy = document.querySelectorAll('.oneby');
    
    const options = {
      threshold: 0.8
      
    };
    
    const observer = new IntersectionObserver(showElements, options);
    
    oneBy.forEach(one => {
      observer.observe(one);
    });
    
    function showElements(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
  };
    
    myfunc5();


  function myfunc6() {

    
    const text = document.querySelector(".fancy");
    const strText = text.innerHTML;
    const splitText = strText.split("");
    
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML = text.innerHTML + "<span>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 70);
    
    function onTick() {
      const span = text.querySelectorAll('span')[char];
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