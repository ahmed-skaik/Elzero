//for test !
console.log(`Hello from JS`)

//scroll up start
let up = document.getElementById("up")

window.onscroll = function () {
  if (scrollY >= 200) {
    up.style.right = "12px";
  }else {
    up.style.right = "-100px";
  }
}

up.onclick = function () {
  window.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
}
//scroll up end