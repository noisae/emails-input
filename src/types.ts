export interface EmailsInputOptions {
  customClassName?: string;
  emails?: string[];
  placeholder?: string;
  onChange?: (emails: string[]) => void;
}

export interface EmailsInputReturn {
  getEmails: () => string[];
  setEmails: (emails: string[]) => void;
  onEmailsChange: (callback: (emails: string[]) => void) => void;
}