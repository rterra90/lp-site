animaIntro()

function animaIntro(){
  const animaItens = document.querySelectorAll('[data-anima]')
  animaItens.forEach((item)=>{
    let time = item.dataset.time;
    setTimeout(()=>{
      item.classList.add('anima-center')
    }, +time)
  })
}



/* HANDLE SECTIONS WHEEL*/
const sections = document.querySelectorAll('main > section')
const itensMenu = document.querySelectorAll('aside li')
const itensMenuBars = document.querySelectorAll('.nav-btn > div')
const btnsIntro = document.querySelectorAll('.btns > span');
document.querySelector('main').addEventListener('wheel', handleSections)


  
function handleSections(event){
  let currentSection = document.querySelector('.active').dataset.section;

    if(event.deltaY > 0){
      if(currentSection!=3){
        sections[currentSection].classList.add('animate-up-out');
        setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-up-out', 'active');
          itensMenu[currentSection].classList.remove('menu-active')
          itensMenu[+currentSection+1].classList.add('menu-active')
          itensMenuBars[currentSection].classList.remove('active-nav')
          itensMenuBars[+currentSection+1].classList.add('active-nav')
  
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
          sections[currentSection].classList.remove('animate-down-out', 'active');
        },700);
  
        setTimeout(() => {
          sections[+currentSection-1].classList.add('animate-down-in');
          sections[+currentSection-1].classList.remove('d-none');
          itensMenu[currentSection].classList.remove('menu-active')
          itensMenu[+currentSection-1].classList.add('menu-active')
          itensMenuBars[currentSection].classList.remove('active-nav')
          itensMenuBars[+currentSection-1].classList.add('active-nav')
        }, 900);
  
        setTimeout(() => {
          sections[+currentSection-1].classList.remove('animate-down-in');
          sections[+currentSection-1].classList.add('active');
        }, 1300);
      }
      }
      

}

/* HANDLE SECTIONS MENU LATERAL */
itensMenu.forEach((item)=>{
  item.addEventListener('click', handleSectionsMenu)
})

itensMenuBars.forEach((item)=>{
  item.addEventListener('click', handleSectionsMenu)
})

  
  function handleSectionsMenu(event){
    let currentSection = document.querySelector('.active').dataset.section;
    let i = event.target.dataset.order;
    if(currentSection > i){
      sections[currentSection].classList.add('animate-down-out');
      setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-down-out', 'active');
        },700);

        setTimeout(() => {
           sections[i].classList.add('animate-down-in');
            sections[i].classList.remove('d-none');
            itensMenu[currentSection].classList.remove('menu-active')
            itensMenu[i].classList.add('menu-active')
            itensMenuBars[currentSection].classList.remove('active-nav')
            itensMenuBars[i].classList.add('active-nav')
          }, 900);
          
          setTimeout(() => {
            sections[i].classList.remove('animate-down-in');
            sections[i].classList.add('active');
          }, 1300);
    }else if(currentSection<i){
      sections[currentSection].classList.add('animate-up-out');
      
      setTimeout(()=>{
          sections[currentSection].classList.add('d-none');
          sections[currentSection].classList.remove('animate-up-out', 'active');
          itensMenu[currentSection].classList.remove('menu-active')
          itensMenu[i].classList.add('menu-active');
          itensMenuBars[currentSection].classList.remove('active-nav')
          itensMenuBars[i].classList.add('active-nav')
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
  }

  // botões intro
btnsIntro.forEach((btn, i)=>{
  btn.addEventListener('click', ()=>{
    if(i==0){
      sections[i].classList.add('animate-up-out');
      setTimeout(()=>{
        sections[i].classList.add('d-none');
        sections[i].classList.remove('animate-up-out', 'active');
        itensMenu[i].classList.remove('menu-active')
        itensMenu[1].classList.add('menu-active');
        itensMenuBars[i].classList.remove('active-nav')
        itensMenuBars[1].classList.add('active-nav')
      },700);

      setTimeout(() => {
        sections[1].classList.add('animate-up-in');
         sections[1].classList.remove('d-none');
         
       }, 900);
       
       setTimeout(() => {
         sections[1].classList.remove('animate-up-in');
         sections[1].classList.add('active');
       }, 1300);
    }else{
      sections[0].classList.add('animate-up-out');
      setTimeout(()=>{
        sections[0].classList.add('d-none');
        sections[0].classList.remove('animate-up-out', 'active');
        itensMenu[0].classList.remove('menu-active')
        itensMenu[3].classList.add('menu-active');
        itensMenuBars[0].classList.remove('active-nav')
        itensMenuBars[3].classList.add('active-nav')
      },700);

      setTimeout(() => {
        sections[3].classList.add('animate-up-in');
         sections[3].classList.remove('d-none');
         
       }, 900);
       
       setTimeout(() => {
         sections[3].classList.remove('animate-up-in');
         sections[3].classList.add('active');
       }, 1300);
    }
  })
})
