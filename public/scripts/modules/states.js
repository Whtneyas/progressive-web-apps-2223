const nextBtn = document.querySelector("button:nth-of-type(1)");

export function startLoading() {
  nextBtn.disabled = true;
  nextBtn.textContent = 'Loading...';
}

export function stopLoading() {
  nextBtn.disabled = false;
  nextBtn.textContent = 'Next';
}

export function displayErrorMessage() {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = "Failed to load quotes. Please try again later.";
  nextBtn.parentNode.insertBefore(errorMessage, nextBtn.nextSibling);
}
