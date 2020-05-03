import { Component, AfterViewInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'homepage2020';


  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function () {

      const sections = document.querySelectorAll(".section");
      const menu_links = document.querySelectorAll(".nav-item a");

      // functions to add and remove the active class from links as appropriate
      const makeActive = (link) => menu_links[link].classList.add("active");
      const removeActive = (link) => menu_links[link].classList.remove("active");
      const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

      //init with first entry
      makeActive(0);
      const sectionMargin = 200;

      // keep track of the currently active link
      // use this so as not to change the active link over and over
      // as the user scrolls but rather only change when it becomes
      // necessary because the user is in a new section of the page
      let currentActive = 0;

      // listen for scroll events
      window.addEventListener("scroll", () => {

        //create array and reverse it
        let arr = Object.keys(sections).map((k) => sections[k]);
        arr.reverse();
        const current = sections.length - arr.findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
        // only if the section has changed
        // remove active class from all menu links
        // and then apply it to the link for the current section
        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
    }, false);
  }
}