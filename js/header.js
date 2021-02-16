const toggleBar = document.querySelector('.toggle')
const navExit = document.querySelector('.nav-exit')
let menu = document.getElementsByTagName('article')[0]

toggleBar.addEventListener('click', () =>{
    document.querySelector('.toggle').classList.add("rotate")
    menu.classList.add('open')
    menu.classList.remove('hidden')
    setTimeout("document.querySelector('.content').style.opacity = 1", 500)
})

navExit.addEventListener('click', () => {
    
    document.querySelector('.content').style.opacity = 0
    setTimeout("menu.classList.remove('open')",300)
    setTimeout("menu.classList.add('hidden')",300)
    setTimeout("document.querySelector('.toggle').classList.remove('rotate')",500)
    
})

