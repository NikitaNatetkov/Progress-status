const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cicrles = document.querySelectorAll('.circle');
let activeCureent = 1;
next.addEventListener('click', function(){
    activeCureent++
    if(activeCureent>cicrles.length){
        activeCureent = cicrles.length;
    }
    update()
})
prev.addEventListener('click', function(){
    activeCureent--
    if(activeCureent<1){
        activeCureent = 1;
    }
    update()
})

function update(){
    cicrles.forEach((cicrle,idx)=>{
        if(idx < activeCureent){
            cicrle.classList.add('active')
        } else{
            cicrle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1)/(cicrles.length -1) * 100 + '%';

    if (activeCureent === 1){
        prev.disabled = true
    } else if(activeCureent === cicrles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}