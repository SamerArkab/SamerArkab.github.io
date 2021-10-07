var mario = document.getElementById('mario');
var flaglight = document.getElementById('flaglight');

window.addEventListener('scroll', function() {
  var value = window.scrollY; //number of pixels that the document is currently scrolled vertically
  mario.style.top = value * 0.129 + 'vh'; //height of viewport

  if (window.scrollMaxY == value)
    flaglight.style.visibility = "visible";
  else flaglight.style.visibility = "hidden";
})

let links = document.querySelectorAll('.nav-link');
for(let i=0; i<links.length; i++){
  links[i].addEventListener('click', function() { //add event listener to each nav-link element
    for(let j=0; j<links.length; j++)
      links[j].classList.remove('active'); //remove the active
    this.classList.add('active'); //add active class to the clicked element
  });
}