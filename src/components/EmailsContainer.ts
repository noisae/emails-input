export default function EmailsContainer(customClassName: string, emailInput: HTMLInputElement): HTMLDivElement {
  const emailsContainerElement = document.createElement('div');
  emailsContainerElement.className = ['emails-input', customClassName].join(' ');
  emailsContainerElement.appendChild(emailInput);

  return emailsContainerElement;
}