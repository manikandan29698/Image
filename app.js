const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["1a","2a","3a","4a"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("${imgList[index]}.jpg") center/cover no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("${imgList[index]}.jpg") center/cover no-repeat`
        }
    })
})