import { EmailsInputOptions } from './types';
import './style.css';

function EmailsInput(domNode: Node, options: EmailsInputOptions): void {
  const emailsInputElement = document.createElement('div');
  emailsInputElement.className = options.className
  domNode.appendChild(emailsInputElement);
}
module.exports = EmailsInput;