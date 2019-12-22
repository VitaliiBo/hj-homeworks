const dropDown = document.querySelector('.wrapper-dropdown');


dropDown.onclick = function () {
  let classes = dropDown.className;
  let classArray = classes.split(' ');
  if (classArray.includes('active')) {
    dropDown.className = classArray[0];
  } else {
    dropDown.className += ' active';
  }
}
