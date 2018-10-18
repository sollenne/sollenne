import { Component, OnInit } from '@angular/core';
import * as Dynamics from 'src/assets/jq/dynamics.min.js';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss'],
})

export class HomePortfolioComponent implements OnInit {
  public title: string;
  constructor(
    // private dynamics: Dynamics,
  ) { }

  ngOnInit() {
    this.title = 'You\'re probably looking for this...';
    this.initFloatingCards();
  }

  public initFloatingCards = (): void => {
    const fc = document.getElementsByClassName("fc");
    let i;
    for (i = 0; i < fc.length; i++) {
      (function (i) {
        let vars = {
          _fc : document.getElementsByClassName("fc")[i] as HTMLElement,
          wrapper : fc[i].getElementsByClassName("fc__wrapper")[0] as HTMLElement,
          light : fc[i].getElementsByClassName("fc__light")[0] as HTMLElement,
          fcHalfHeight : 205,
          fcHalfWidth : 135,
          defaultLightWidth : 40,
          defaultLightAngle : 45,
          maxRotateX : 7,
          maxRotateY : 10,
          maxLightWidth : 25,
          maxLightAngle : 20,
          lightValue : {
            width: 40,
            angle: 45
          }
        };

        vars.wrapper.addEventListener("mousemove", (event: MouseEvent) => {

          let fcRect = vars._fc.getBoundingClientRect();
          let top = fcRect.top + document.body.scrollTop;

          let mouseX = (event.pageX - fcRect.left) | 0;
          let mouseY = (event.pageY - top) | 0;

          let diffX = -1 * (vars.fcHalfWidth - mouseX);
          let diffY = vars.fcHalfHeight - mouseY;
          let rotateX = diffY / vars.fcHalfHeight * vars.maxRotateX;
          let rotateY = diffX / vars.fcHalfWidth * vars.maxRotateY;

          Dynamics.stop(vars.wrapper);
          vars.wrapper.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

          // Move the light
          vars.lightValue.width = vars.defaultLightWidth - (diffY / vars.fcHalfHeight * vars.maxLightWidth);
          vars.lightValue.angle = vars.defaultLightAngle + (diffX / vars.fcHalfWidth * vars.maxLightAngle);

          Dynamics.stop(vars.lightValue);
          vars.light.style.backgroundImage = "linear-gradient(" + vars.lightValue.angle + "deg, black, transparent " + vars.lightValue.width + "%)";
        });

        vars.wrapper.addEventListener("mouseleave", function () {
          // Move the floating card to its initial position
          Dynamics.animate(vars.wrapper, {
            rotateX: 0,
            rotateY: 0
          }, {
            type: Dynamics.spring,
            duration: 1500
          });

          // Move the light to its initial position
          Dynamics.animate(vars.lightValue, {
            width: vars.defaultLightWidth,
            angle: vars.defaultLightAngle
          }, {
            type: Dynamics.spring,
            duration: 1500,
            change: function (obj) {
              vars.light.style.backgroundImage = "linear-gradient(" + obj.angle + "deg, black, transparent " + obj.width + "%)";
            }
          });
        });
    })(i);
    }
  }



}
