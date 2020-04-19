export default function EmailInput(placeholder: string): HTMLInputElement {
  const emailInputElement = document.createElement('input');
  emailInputElement.className = "emails-input__email-input";
  emailInputElement.placeholder = placeholder;
  emailInputElement.type = 'email';

  return emailInputElement;
}