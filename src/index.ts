import { EmailsInputOptions, EmailsInputReturn } from './types';
import EmailBox from './components/EmailBox';
import EmailInput from './components/EmailInput';
import EmailsContainer from './components/EmailsContainer';
import './style.css';

function EmailsInput(domNode: HTMLElement, options: EmailsInputOptions): EmailsInputReturn {
  const emailInputElement = EmailInput(options.placeholder ||  'Type your emails...');
  let onChange = options.onChange;
  let emails = [];
  let emailBoxes = [];
  let emailsContainerElement: HTMLDivElement;

  function removeEmail(emailBox: HTMLDivElement): void {
    const emailIndex = Array.prototype.indexOf.call(emailsContainerElement.childNodes, emailBox);
    emails.splice(emailIndex, 1);
    emailBoxes.splice(emailIndex, 1);
    emailsContainerElement.removeChild(emailBox);
    onChange && onChange(emails);
  }

  function addEmail(email: string): void {
    const insertEmail = email.trim();
    if (!insertEmail) {
      return;
    }

    const emailBox = EmailBox(insertEmail, removeEmail);
    emailBoxes.push(emailBox);
    emails.push(insertEmail);
    emailsContainerElement.insertBefore(emailBox, emailInputElement);
    domNode.scrollTop = emailsContainerElement.scrollHeight;
    onChange && onChange(emails);
  }

  function onAddEmail(email: string): void {
    addEmail(email);
    emailInputElement.value = "";
  }

  function onRemoveLastEmail(email: string): void {
    if (email !== "" || emailBoxes.length <= 0){
      return;
    }
    removeEmail(emailBoxes[emailBoxes.length - 1]);
  }
  
  function setEmails(newEmails: string[]): void {
    emails = [];
    emailBoxes = [];
    emailsContainerElement = EmailsContainer(options.customClassName || '', emailInputElement);
    domNode.innerHTML = "";
    domNode.appendChild(emailsContainerElement);
    newEmails.forEach(addEmail);
  }

  emailInputElement.addEventListener('blur', function onEmailInputElementBlur(event: KeyboardEvent) {
    onAddEmail(emailInputElement.value);
  });

  emailInputElement.addEventListener('keydown', function onEmailInputElementKeyUp(event: KeyboardEvent) {
    const actionsMap = {
      'Enter': onAddEmail,
      'Backspace': onRemoveLastEmail,
    }

    actionsMap[event.key] && actionsMap[event.key](emailInputElement.value);
  });

  emailInputElement.addEventListener('input', function onEmailInput() {
    const emails = emailInputElement.value.split(",");
    if (emails.length > 1) {
      emails.forEach(onAddEmail);
    }
  });

  // Init emails;
  setEmails(options.emails || []);

  return {
    getEmails: function getEmails(): string[] { return emails; },
    setEmails: setEmails,
    onEmailsChange: function onEmailsChange(callback: (emails: string[]) => void): void {
      onChange = callback;
    },
  };
}

module.exports = EmailsInput