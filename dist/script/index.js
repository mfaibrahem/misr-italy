// if (window.matchMedia('(min-width: 400px)').matches) {
//   /* the viewport is at least 400 pixels wide */
// } else {
//   /* the viewport is less than 400 pixels wide */
// }
// if (window.innerWidth < 992) {

// if (window.matchMedia('(min-width: 992px)').matches) {
//   console.log('lg');
// } else {
// window.addEventListener('resize', init);
init();
function init() {
  const fistAnchor = new Hover('first-a', 'first-inside-ul');
  // const secondAnchor = new Hover('second-a', 'second-inside-ul');
  const firstDrop = new Drop('first-a-md-sm', 'first-inside-ul-md-sm');
  fistAnchor.addEvent();
  firstDrop.addEvent();
  // secondAnchor.addEvent();
}
// end init function

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const UIlines = document.querySelector('.lines');
const UIheader = document.querySelector('.header-md-sm');

function handleClickLines() {
  UIheader.classList.toggle('toggle-header-md-sm');
  UIlines.classList.toggle('toggle-lines');
}
UIlines.addEventListener('click', handleClickLines);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// handle dropdown constructor
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function Drop(dropDownAnchor, dropDownUl) {
  this.dropDownAnchor = dropDownAnchor;
  this.dropDownUl = dropDownUl;

  this.handleDropDown = function(e) {
    const UIdropDownUl = document.querySelector('.' + this.dropDownUl);
    e.currentTarget.parentElement.classList.toggle('toggle-drop-down-li-md-sm');
    e.currentTarget.classList.toggle('toggle-drop-down-anchor-md-sm');
    UIdropDownUl.classList.toggle('toggle-' + this.dropDownUl);
    e.preventDefault();
  };

  this.addEvent = function() {
    const UIdropDownLi = document.querySelector('#' + this.dropDownAnchor);
    UIdropDownLi.addEventListener('click', this.handleDropDown.bind(this));
  };
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// handle Hover constructor /////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function Hover(dropDownAnchor, dropDownUl) {
  this.dropDownAnchor = dropDownAnchor;
  this.dropDownUl = dropDownUl;

  this.handleDropDown = function(e) {
    const UIdropDownUl = document.querySelector('.' + this.dropDownUl);
    const heights = [];
    // const widths = [];
    document
      .querySelectorAll('.' + this.dropDownUl + '>li')
      .forEach(function(item) {
        heights.push(item.offsetHeight);
      });
    // document
    //   // .querySelectorAll('.' + this.dropDownUl + '>li')
    //   // .forEach(function(item) {
    //   //   widths.push(item.offsetWidth);
    //   // });
    // const maxWidth = widths.reduce(function(acc, current) {
    //   return acc >= current ? acc : current;
    // });
    const totalHeight = heights.reduce((acc, current) => acc + current);

    const paddingTopBottom = 48; // 3rem
    // const paddingRightLeft = 32; // 2rem
    UIdropDownUl.style.height = totalHeight + paddingTopBottom + 'px';
    // UIdropDownUl.style.width = maxWidth + paddingRightLeft + 'px';
    e.currentTarget.parentElement.classList.add('toggle-drop-down-li');
    e.currentTarget.classList.add('toggle-drop-down-anchor');
    UIdropDownUl.classList.add('toggle-' + this.dropDownUl);
    e.preventDefault();
  };

  this.removeDropDown = function(e) {
    const UIdropDownUl = document.querySelector('.' + this.dropDownUl);

    e.currentTarget.classList.remove('toggle-drop-down-li');
    e.currentTarget.firstElementChild.classList.remove(
      'toggle-drop-down-anchor'
    );
    UIdropDownUl.style.height = 0;
    // UIdropDownUl.style.width = 0;
    UIdropDownUl.classList.remove('toggle-' + this.dropDownUl);
  };

  this.addEvent = function() {
    const UIdropDownLi = document.querySelector('#' + this.dropDownAnchor);
    UIdropDownLi.addEventListener('mouseover', this.handleDropDown.bind(this));
    UIdropDownLi.parentElement.addEventListener(
      'mouseleave',
      this.removeDropDown.bind(this)
    );
  };
}

window.addEventListener('scroll', () => {
  const UIheader = document.querySelector('header');
  if (window.scrollY >= 100) {
    UIheader.classList.add('header-colored');
  } else {
    UIheader.classList.remove('header-colored');
  }
});

new WOW().init();
