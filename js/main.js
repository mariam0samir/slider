let sliderImages=Array.from(document.querySelectorAll('img'))
let slideCount=sliderImages.length

let currentSlide=1;
let slideNumberElement=document.querySelector('#slide-number');

let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev')

nextBtn.onclick=nextSlide
prevBtn.onclick=prevSlide

let indi=document.createElement('ul')
indi.setAttribute('id','indi-ul')

for(let i=1;i<= slideCount;i++){
  let indiITEM=document.createElement('li')
  indiITEM.setAttribute('data',i)
  indiITEM.appendChild(document.createTextNode(i))
  indi.appendChild(indiITEM)
}
document.getElementById('indicators').appendChild(indi)

let indiUl=document.getElementById('indi-ul')
let indiBullet=Array.from(document.querySelectorAll('#indi-ul li'))
console.log(indiBullet)
TheCheker()



function TheCheker(){
    slideNumberElement.textContent='slide # '+(currentSlide) + ' of '+ (slideCount)
    removeActive()
    sliderImages[currentSlide-1].classList.add('active')
    indiUl.children[currentSlide-1].classList.add('active')
    if(currentSlide ==1 ){
        prevBtn.classList.add('disabled')
    }else{
        prevBtn.classList.remove('disabled')
    }
    if(currentSlide==slideCount){
        nextBtn.classList.add('disabled')
    }else{
        nextBtn.classList.remove('disabled')
    }

}


function removeActive(){
sliderImages.forEach(function(img){
img.classList.remove('active')
})
indiBullet.forEach(function(bullet){
bullet.classList.remove('active')
})
}

function nextSlide(){
if(nextBtn.classList.contains('disabled')){
return false
}else{
 currentSlide++
TheCheker()
}
}
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
    return false
    }else{
     currentSlide--
    TheCheker()
    }
    }

for(let i=0;i<indiBullet.length;i++){
indiBullet[i].onclick=function(){
   currentSlide=parseInt(this.getAttribute('data'))
   TheCheker()
}
    }