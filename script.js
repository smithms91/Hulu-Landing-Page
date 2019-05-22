"use strict";

window.onload = () => {

  let svgLogo = document.querySelector(".logo");
  let nav = document.querySelector('nav');
  let trialButton = document.querySelector('.trial-button');
  let login = document.querySelector('.login');
  let available = document.querySelectorAll('.available');
  
  document.onscroll = () => {
    if (window.scrollY >= 100) {
      nav.classList.add('scroll-nav');
      nav.style.padding = '14px 60px';
      svgLogo.classList.add('black-logo');
      login.classList.add('dark');
      trialButton.classList.add('black-button');  
      document.querySelector('.trial-paragraph').style.display = 'none';
      trialButton.style.display = 'initial';
    } else {
      nav.classList.remove('scroll-nav');
      nav.style.padding = '30px 60px';
      svgLogo.classList.remove('black-logo');
      login.classList.remove('dark');
      trialButton.classList.remove('black-button');
      document.querySelector('.trial-paragraph').style.display = 'initial';
      trialButton.style.display = 'none';
    }
  }

  document.querySelector('.plan-button').addEventListener('click', () => {
    window.scroll({
      top: 1600, 
      left: 0, 
      behavior: 'smooth'
    });
  });


  let open0 = false;
  document.querySelectorAll('.addons')[0].addEventListener('click', () => {
    if(open0) {
      available[0].style.transform = 'scaleY(0)';
      available[0].style.display = 'none';
    } else {
      available[0].style.transform = 'scaleY(1)';
      available[0].style.display = 'initial';
    }
    open0 = !open0;
  });

  let open1 = false;
  document.querySelectorAll('.addons')[1].addEventListener('click', () => {
    if(open1) {
      available[1].style.transform = 'scaleY(0)';
      available[1].style.display = 'none';
    } else {
      available[1].style.transform = 'scaleY(1)';
      available[1].style.display = 'initial';
    }
    open1 = !open1;
  });




}