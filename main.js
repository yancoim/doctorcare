window.addEventListener('scroll', onScroll);

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(depositions)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

function showNavOnScroll() {
  const navigation = document.getElementById("navigation")
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } 
  else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  const navigation = document.getElementById("navigation")
  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}


ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:900
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#depositions,
#depositions header,
#depositions .clients-card,
#about,
#about header,
#about p,
#about img,
#contact,
#contact header,
#contact img,
#footer,
#footer header`)


