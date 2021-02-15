const toggleBar = document.querySelector('.toggle')
const navExit = document.querySelector('.nav-exit')
let menu = document.getElementsByTagName('article')[0]

function opacity(x){
    
}

toggleBar.addEventListener('click', () =>{
    menu.classList.add('open')
    setTimeout("document.querySelector('.content').style.opacity = 1", 500)
})

navExit.addEventListener('click', () => {
    document.querySelector('.content').style.opacity = 0
    setTimeout("menu.classList.remove('open')",300)
    
    
})

