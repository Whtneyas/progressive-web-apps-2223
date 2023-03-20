//---------------IMPORTS---------------------------------------------//
import fetchBibleQuote from "./modules/fetchBibleQuotes.js"
import onRouteChanged from "./modules/router.js"
import    "./modules/filter.js"

// Fetch the Bible quote on page load
fetchBibleQuote();

//this function gets the value of the current route

window.addEventListener("hashchange", onRouteChanged);