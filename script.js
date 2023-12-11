/* ------ Menu Section --------- */
//Active Navbar on menu
//Change active navlink on scroll & click
    
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.parent');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('activenav');
                document.querySelector('.parent[href*=' + id + ']').classList.add('activenav');
            });
        };
    });
};

/*----------- About Project Section -----------*/
//Process slides
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.process-item');
  document.getElementById('process-slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.process-item');
  document.getElementById('process-slide').prepend(lists[lists.length - 1]);
}


/*-------- Data Cleaning Section -------------*/


/*----------- Data Modelling Section -----------*/
// Data Model
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var model_popup = document.getElementById('model_popup');
  model_popup.classList.toggle('active')
}

// Show SQL code Output
function codeOutput()
{
  var sql = document.getElementById('sqlImg');
  sql.src = 'images/TopCont250.png';
}

function codeOutput2()
{
  var sql2 = document.getElementById('sqlImg2');
  sql2.src = 'images/Top7Ingred250.png';
}

function codeOutput3()
{
  var sql3 = document.getElementById('sqlImg3');
  sql3.src = 'images/meatExp250.png';
}



//Few notes for Navbar:
//Keep Dashboard and About Project hover features on when hovering over children
//Make submenu accesible by click
//Add active features for submenu (though not top priority)
