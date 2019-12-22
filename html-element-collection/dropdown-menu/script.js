const dropDown = document.querySelector('.wrapper-dropdown');
dropDown.onclick = function () {
  let classArray = dropDown.className.split(' ');
  if (classArray.includes('active')) {
    dropDown.className = classArray[0];
  } else {
    dropDown.className += ' active';
  }
}
