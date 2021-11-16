// for test !
console.log(`Hello from JS`)

// scroll up start
let up = document.getElementById("up")

up.onclick = function () {
  window.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
}

function scroll() {
  if (scrollY >= 200) {
    up.style.right = "12px";
  }else {
    up.style.right = "-100px";
  }
}

window.addEventListener("scroll", scroll)

// scroll up end

// skills start
let sectionTop = document.querySelector(".our-skills")
let sectionBottom = document.querySelector(".how-it-works")
let progSpan = document.querySelectorAll(".skills .skill div.progg span")

function skills() {
  if ((window.scrollY >= sectionTop.offsetTop - 50) && (window.scrollY <= sectionBottom.offsetTop - 100)) {
    progSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }else {
    progSpan.forEach((span) => {
      span.style.width = 0;
    })
  }
}

window.addEventListener("scroll", skills)

// skills end

// latest event  start 
let countDown = new Date("3 Feb, 2022 23:59:59").getTime()

setInterval(() => {
  let dayNow = new Date().getTime()
  let timeDiff = countDown  - dayNow;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60 ));
  let sec = Math.floor((timeDiff % (1000 * 60 )) / (1000));

  document.querySelector(".events .time .days span.days").innerHTML = days < 10 ? `0${days}`: days;
  document.querySelector(".events .time .hours span.hours").innerHTML = hours < 10 ? `0${hours}`: hours;
  document.querySelector(".events .time .min span.min").innerHTML = min < 10 ? `0${min}`: min;
  document.querySelector(".events .time .sec span.sec").innerHTML = sec < 10 ? `0${sec}`: sec;

  if (timeDiff < 0) {
    clearInterval()
  }
}, 1000);

// latest event  end 

//stats start
let nums = document.querySelectorAll(".stats .box .number")
let statsSection = document.querySelector(".stats")
let statsSectionBot = document.querySelector(".discount")
let started = false;

function startCount (ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count)
    }
  }, (3000 / goal));
}

function stats() {
  if (window.scrollY >= statsSection.offsetTop - 150) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num)
      })    
    }
    started = true;
    }
}

window.addEventListener("scroll", stats)

//stats end 