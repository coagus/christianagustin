// Script para cambiar el tema (claro/oscuro)
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const profileImage = document.getElementById('profile-image');
  
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    enableDarkMode();
  }
  
  themeToggle.addEventListener('click', function() {
    if (htmlElement.classList.contains('dark')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
  
  function enableDarkMode() {
    htmlElement.classList.add('dark');
    document.body.style.backgroundColor = '#1a202c';
    document.body.classList.add('text-white');
    themeToggle.innerHTML = '<i class="fas fa-sun" style="font-size: 1.5rem;"></i>';
    localStorage.setItem('theme', 'dark');
    
    // Cambiar colores específicos para modo oscuro
    document.querySelectorAll('.bg-white').forEach(el => {
      el.classList.remove('bg-white');
      el.classList.add('bg-gray-800');
    });
    
    document.querySelectorAll('.bg-gray-50').forEach(el => {
      el.classList.remove('bg-gray-50');
      el.classList.add('bg-gray-900');
    });

    profileImage.src = 'img/christian-agustin-fn.jpg';
  }
  
  function disableDarkMode() {
    htmlElement.classList.remove('dark');
    document.body.style.backgroundColor = '#d8d8d8';
    document.body.classList.remove('text-white');
    themeToggle.innerHTML = '<i class="fas fa-moon" style="font-size: 1.5rem;"></i>';
    localStorage.setItem('theme', 'light');
    
    // Restaurar colores originales
    document.querySelectorAll('.bg-gray-800').forEach(el => {
      el.classList.remove('bg-gray-800');
      el.classList.add('bg-white');
    });
    
    document.querySelectorAll('.bg-gray-900').forEach(el => {
      el.classList.remove('bg-gray-900');
      el.classList.add('bg-gray-50');
    });

    profileImage.src = 'img/christian-agustin-fb.jpg';
  }

}); 