window.addEventListener('load', () => {
  const TL = gsap.timeline({ pause: true })

  TL.fromTo('.logo', { y: -150 }, { duration: 1, y: 0, ease: 'power2.out' })
    .fromTo('h1', { y: -1300 }, { duration: 1, y: 0, ease: 'power2.out' })
    .fromTo('h2', { y: -1300 }, { duration: 1.5, y: 0, ease: 'power2.out' })
    .fromTo('.icons', { y: 1300 }, { duration: 2, y: 0, ease: 'power2.out' })

  TL.play()
})
