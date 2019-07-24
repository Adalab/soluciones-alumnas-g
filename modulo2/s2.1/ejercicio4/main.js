"use strict";
const title = document.querySelector(".title");
let name = document.querySelector(".name");
title.innerHTML =
  title.innerHTML + document.querySelectorAll(".name")[1].innerHTML;
