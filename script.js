const photos1 = document.getElementById('1photos')
const photos2 = document.getElementById('2photos')
const photos3 = document.getElementById('3photos')
const photos4 = document.getElementById('4photos')



let photosList = [
    ['images/1/11.jpg', 'images/1/12.jpg', 'images/1/13.jpg', 'images/1/14.jpg'],
    ['images/2/21.jpg', 'images/2/22.jpg'],
    ['images/3/31.jpg', 'images/3/32.jpg', 'images/3/33.jpg', 'images/3/34.jpg', 'images/3/35.jpg', 'images/3/36.webp', 'images/3/37.jpg', 'images/3/38.webp', 'images/3/39.webp'],
    ['images/4/41.webp', 'images/4/42.webp', 'images/4/43.webp', 'images/4/44.jpg', 'images/4/45.jpg', 'images/4/46.jpg', 'images/4/47.jpg', 'images/4/48.jpg', 'images/4/49.jpg'],
]
let galleryList = [photos1, photos2, photos3, photos4]



for (let i = 0; i < galleryList.length; i++){

    for (let l = 0; l < photosList[i].length; l++){
        ph = document.createElement('div')
        ph.id = `photo${i+1}${l+1}`
        ph.className = 'photo'
        ph.style.backgroundImage = `url(${photosList[i][l]})`
        ph.style.backgroundPosition = 'center'
        galleryList[i].appendChild(ph)
    }
}



const dropdownBtn = document.querySelector('.sub-menu-btn');
const dropdownContent = document.querySelector('.sub-menu-content');

// Обработчик клика по кнопке
dropdownBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // Препятствуем всплытию события
  dropdownContent.classList.toggle('show');
});

// Закрываем меню при клике вне его
window.addEventListener('click', function(e) {
  if (!dropdownContent.contains(e.target) && e.target !== dropdownBtn) {
    dropdownContent.classList.remove('show');
  }
});

// Дополнительно: закрываем меню по клавише Esc
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    dropdownContent.classList.remove('show');
  }
});