
// Display the quotes 
  const displayBibleQuote = ({ book_name, chapter, verse, text }) => {
    const nameBook = document.querySelector('h2'); // selects h2 which is the name of the book
    const numChapter = document.querySelector('span'); // selects h3 which is the chapter
    const numVerse = document.querySelector('h3'); //selects the number of the verse
    const textVerse = document.querySelector('p'); // selects the p that contains the verse
  
    nameBook.textContent = book_name;
    numChapter.textContent = chapter;
    numVerse.textContent = verse;
    textVerse.textContent = text;
  };

  
  export default displayBibleQuote

