import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
  window.addEventListener("scroll",function(){
    const scrullUp = this.document.querySelector(".scrollup");

    if(this.scrollY >=560) scrullUp.classList.add("show-scroll");
    else scrullUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
    )
}

export default Scrollup