document.querySelector('.breakfast').addEventListener('click', function(){
    location.assign('breakfast.html')
})

document.querySelector('.dinner').addEventListener('click', function(){
    location.assign('dinner.html')
})

document.querySelector('.lunch').addEventListener('click', function(){
    location.assign('lunch.html')
})

document.querySelector('.desserts').addEventListener('click', function(){
    location.assign('desserts.html')
})

document.querySelector('.healthy_food').addEventListener('click', function(){
    location.assign('healthy.html')
})

document.querySelector('.snacks').addEventListener('click', function(){
    location.assign('snacks.html')
})

let block = document.querySelector('.container')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})