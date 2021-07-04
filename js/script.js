animaIntro()

function animaIntro(){
  const animaItens = document.querySelectorAll('[data-anima]')
  animaItens.forEach((item, index)=>{
    let time = item.dataset.time;
    setTimeout(()=>{
      item.classList.add('anima-center')
    }, +time)
  })
}


/* HANDLE SECTIONS*/
const sections = document.querySelectorAll('main > section')
const itensMenu = document.querySelectorAll('aside li')

document.querySelector('main').addEventListener('wheel', handleSections)
  
function handleSections(event){
  let currentSection = document.querySelector('.active').dataset.section;

    if(event.deltaY > 0){
      if(currentSection!=3){
        sections[currentSection].classList.add('animate-up-out');
        setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-up-out');
          sections[currentSection].classList.remove('active');
          itensMenu[currentSection].classList.remove('menu-active')
          itensMenu[+currentSection+1].classList.add('menu-active')
  
        },700);
  
        setTimeout(() => {
          sections[+currentSection+1].classList.add('animate-up-in');
          sections[+currentSection+1].classList.remove('d-none');
          
        }, 900);
  
        setTimeout(() => {
          sections[+currentSection+1].classList.remove('animate-up-in');
          sections[+currentSection+1].classList.add('active');
        }, 1300);
      }
      
    }else{
      if(currentSection!=0){
        sections[currentSection].classList.add('animate-down-out');
        setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-down-out');
          sections[currentSection].classList.remove('active');
        },700);
  
        setTimeout(() => {
          sections[+currentSection-1].classList.add('animate-down-in');
          sections[+currentSection-1].classList.remove('d-none');
          itensMenu[currentSection].classList.remove('menu-active')
          itensMenu[+currentSection-1].classList.add('menu-active')
        }, 900);
  
        setTimeout(() => {
          sections[+currentSection-1].classList.remove('animate-down-in');
          sections[+currentSection-1].classList.add('active');
        }, 1300);
      }
      }
      

}

/* MENU LATERAL */
itensMenu.forEach((item, index)=>{
  let i = index;
  item.addEventListener('click', ()=>{
    let currentSection = document.querySelector('.active').dataset.section;

    if(currentSection > i){
      sections[currentSection].classList.add('animate-down-out');
      setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-down-out');
          sections[currentSection].classList.remove('active');
        },700);

        setTimeout(() => {
           sections[i].classList.add('animate-down-in');
            sections[i].classList.remove('d-none');
            itensMenu[currentSection].classList.remove('menu-active')
            itensMenu[i].classList.add('menu-active')
          }, 900);
          
          setTimeout(() => {
            sections[i].classList.remove('animate-down-in');
            sections[i].classList.add('active');
          }, 1300);
    }else if(currentSection<i){
      sections[currentSection].classList.add('animate-up-out');
      
      setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-up-out');
          sections[currentSection].classList.remove('active');
          itensMenu[currentSection].classList.remove('menu-active')
      itensMenu[i].classList.add('menu-active')
        },700);

        setTimeout(() => {
           sections[i].classList.add('animate-up-in');
            sections[i].classList.remove('d-none');
            
          }, 900);
          
          setTimeout(() => {
            sections[i].classList.remove('animate-up-in');
            sections[i].classList.add('active');
          }, 1300);
    }


  })
})