# Emails Input
An agnostic input email library

## How to use

```html
<html>
  <head>
    <script src="emails-input.min.js"></script>
  </head>
  <body>
    <div id="emails-input-container"></div>
    <script type="application/javascript">
      var emailsInputContainer = document.getElementById("emails-input-container");
      var emailsInput = EmailsInput(emailsInputContainer, {
        customClassName: 'custom-class',
        emails: ['test@gmail.com', 'test@outlook.com'],
      });
      emailsInput.onEmailsChange(function(emails) { console.log(emails) });
    </script>
  <body>
<html>
```

## EmailsInput API

### Email input constructor
`EmailsInput( container [, options] )`

| Parameter | Type | Description |
| --- | --- | --- |
| `container` | HTMLElement | HTML element container for the input |
| `options` | Object | Options object to initialize the input |

Options
| Option | Type | Description |
| --- | --- | --- |
| `customClassName` | string | Additional custom class added to the root container |
| `emails` | Array | Initial list of emails |
| `placeholder` | string | Placeholder for the email input |
| `onChange` | Function | Function that receices email list when any change happen |

### Email Instance Methods

`getEmails(): emails`
| Parameter | Type | Description |
| --- | --- | --- |
| `emails` | string[] | Array of current emails |

`setEmails( emails )`
| Parameter | Type | Description |
| --- | --- | --- |
| `emails` | string[] | Array of emails to replace the current ones on the input |

`onEmailsChange( callback )`
| Parameter | Type | Description |
| --- | --- | --- |
| `callback` | Function | Callback to listen for all changes on the input |

`callback( emails )`
| Parameter | Type | Description |
| --- | --- | --- |
| `emails` | string[] | Emails received from the input |

## Developing

Install dependencies:
`> npm ci`

Run development server:
`> npm run develop`

## E2E Testing

Install dependencies:
`> npm ci`

Run development server:
`> npm run develop`

Run tests:
`> npm run test`


