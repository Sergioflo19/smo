const seccionCaldera = document.querySelector('.seccion-caldera');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      seccionCaldera.classList.add('active');
    } else {
      seccionCaldera.classList.remove('active'); // ✅ REINICIA LA ANIMACIÓN
    }
  });
}, {
  threshold: 0.35  // ✅ se activa cuando el 35% de la sección es visible
});

observer.observe(seccionCaldera);


