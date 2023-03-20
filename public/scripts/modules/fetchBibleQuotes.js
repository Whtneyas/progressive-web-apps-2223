import displayBibleQuote from "../modules/displayBibleQuote.js";
import {
  startLoading,
  stopLoading,
  displayErrorMessage
} from "../modules/states.js";


//  import "./modules/filter.js";
let bibleQuotes = []; // Initialize an empty array to store fetched quotes.
let currentIndex = 0; // Initialize the index of the last displayed verse to 0.

export const fetchBibleQuotes = async () => {
  console.log("fetching bible quotes");

  startLoading();

  try {
    const response = await fetch(
      "https://bible-api.com/romans%201,2,3,4,5,6,7,,9,10,11,12,13,14,15,16"
    );


    if (response.ok) {

      const data = await response.json();
      bibleQuotes = data.verses; // Save fetched quotes to the array.
      const currentVerse = bibleQuotes[currentIndex];

      displayBibleQuote(currentVerse);
      currentIndex = (currentIndex + 1) % bibleQuotes.length; // Update the index to the next verse in the array.
      stopLoading();
      console.log(bibleQuotes);


    } else {
      throw new Error(
        `Failed to fetch bible quotes. Status code: ${response.status}`
      );
    }

    // Display error message when the data fails to laod. 
  } catch (error) {
    console.error(error);
    displayErrorMessage();
  }
};

const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button


nextBtn.addEventListener("click", () => {

  if (bibleQuotes.length > 0) { // If there are already quotes in the array,
    const currentVerse = bibleQuotes[currentIndex];
    displayBibleQuote(currentVerse);
    currentIndex = (currentIndex + 1) % bibleQuotes.length; // Update the index to the next verse in the array.


  } else { // Otherwise, fetch new quotes from the API.
    fetchBibleQuotes();
  }

});

export default fetchBibleQuotes;