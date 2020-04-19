export interface EmailsInputOptions {
  customClassName?: string;
  emails?: string[];
  placeholder?: string;
}

export interface EmailsInputReturn {
  getEmails: () => string[];
  setEmails: (emails: string[]) => void;
  onEmailsChange: (callback: (event: Event) => void) => void;
}