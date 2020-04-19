export default function EraseButton(onClick: () => void): HTMLSpanElement {
  const eraseButtonElement = document.createElement('span');
  eraseButtonElement.innerHTML = "x";
  eraseButtonElement.className = 'emails-input__erase-button';
  eraseButtonElement.addEventListener('click', onClick);
  return eraseButtonElement;
}