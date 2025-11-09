// script.js - alap interakciók: évszám, menü, kategória-szűrés, cookie banner

document.addEventListener('DOMContentLoaded', function() {
  // évszám a láblécbe
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobil menü toggler
  const menuBtn = document.getElementById('menu-btn');
  const mainNav = document.getElementById('main-nav');
  menuBtn && menuBtn.addEventListener('click', function(){
    if(mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });

  // kategória gombok
  const catBtns = document.querySelectorAll('.cat-btn');
  const products = document.querySelectorAll('.product');
  catBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const cat = btn.dataset.cat;
      products.forEach(p=>{
        if(cat === 'all' || p.dataset.cat === cat) p.style.display = '';
        else p.style.display = 'none';
      });
    });
  });

  // cookie banner
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const onlyNecessary = document.getElementById('only-necessary');

  function hideCookie() {
    cookieBanner.style.display = 'none';
    try{ localStorage.setItem('cookiesAccepted','1'); }catch(e){}
  }
  if(localStorage.getItem('cookiesAccepted')) cookieBanner.style.display = 'none';

  acceptBtn && acceptBtn.addEventListener('click', hideCookie);
  onlyNecessary && onlyNecessary.addEventListener('click', hideCookie);

});
