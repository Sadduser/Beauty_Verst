let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    let blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

let burger_menu = () => {
  let btn_open_menu = document.querySelector('.burger_button')
  let burger_menu = document.querySelector('.burger-menu')
  let btn_close_menu = document.querySelector('.burger_close_btn')
  btn_open_menu.addEventListener('click', () => {
    burger_menu.classList.toggle('opened')
  })
  btn_close_menu.addEventListener('click', () => {
    burger_menu.classList.remove('opened')
  })

}


burger_menu() 
