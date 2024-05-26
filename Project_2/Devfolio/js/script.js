/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

<<<<<<< HEAD
=======

>>>>>>> 6993ca4d1718775ff3a240160a040ffe5b4f7519
/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
<<<<<<< HEAD
let /** Boolean | String */ isDark = window.matchMedia("(prefers-color-scheme)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme)

=======
let /** {Boolean | String} */ isDark =window.matchMedia("(prefers-color-scheme: dark)").matches;

// console.log(isDark)

if (sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
>>>>>>> 6993ca4d1718775ff3a240160a040ffe5b4f7519
}

$themeBtn.addEventListener("click", changeTheme)