
import EraseButton from './EraseButton';

const emailValidationRegex = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export default function EmailBox(
  email: string,
  onEraseButtonClick: (emailBox: HTMLDivElement) => void
): HTMLDivElement {
  const validationClass = emailValidationRegex.test(email) ? "" : "emails-input__email-box--invalid";
  const emailBoxElement = document.createElement('div');
  emailBoxElement.className = ["emails-input__email-box", validationClass].join(' ');
  emailBoxElement.innerHTML = email;
  emailBoxElement.appendChild(EraseButton(function onClick() {
    onEraseButtonClick(emailBoxElement);
  }));

  return emailBoxElement;
}