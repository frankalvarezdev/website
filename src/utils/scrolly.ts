export const scrolly = (id: string, {
    paddingTop = 0,
    navbarHeight = 0,
    addHashToUrl = true
} = {}) => {
    const target = document.getElementById(id.replace('#', ''))
    if (!target) {
        console.warn(`El elemento con el id "${id}" no existe`)
        return
    }

    if (addHashToUrl) {
        window.location.hash = id
    }

    // si existe un elemento con el id "navbar" obtiene la altura de este
    const navbar = document.getElementById('navbar')
    if (navbar) {
        navbarHeight = navbar.clientHeight
    }

    const to = target.offsetTop - (navbarHeight + paddingTop)
    window.scroll({
        top: to,
        behavior: 'smooth'
    })

    target.classList.add('scrolly')
    setTimeout(() => target.classList.remove('scrolly'), 1000)
}