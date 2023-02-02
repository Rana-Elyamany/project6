let ul =document.querySelector('.home > .nav > ul');
let li =document.querySelectorAll('.home > .nav > ul > li');
let DIv = document.querySelector('.home > .nav > .prt2');
let toggler = document.querySelector('.home > .nav > .toggler');
toggler.onclick=function(){
    ul.classList.toggle('show-ul');
    for(let i=0;i<6;i++){
        
        li[i].classList.toggle('show-li');
        


    }
   
}