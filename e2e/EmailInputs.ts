import { Selector } from 'testcafe';

const E2E_URL = process.env.E2E_URL || 'http://localhost:9000/';

fixture`Getting Started`
  .page`${E2E_URL}`;

test('Email block should be created by pressing Enter, entering comma, or by losing focus on the input field. A Block can be deleted.', async t => {
  const inputEmailsContainer = await Selector('#emails-input-container');
  const inputEmails = await inputEmailsContainer.find('.emails-input__email-input');

  await t
    .click(inputEmails)
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(inputEmails, 'email@comma.com,')
    .typeText(inputEmails, 'email@enter.com')
    .pressKey('enter')
    .typeText(inputEmails, 'email@blur.com')
    .pressKey('tab')
    .expect(inputEmailsContainer.find('.emails-input__email-box').count)
    .eql(3)
    .expect(inputEmailsContainer.innerText)
    .eql('email@comma.com\nemail@enter.com\nemail@blur.com')
});

test('Pasted emails should be converted into blocks immediately. If multiple comma-separated emails are pasted (e.g., "ivan@mail.ru, max@mail.ru"), they should be converted into multiple blocks.', async t => {
  const inputEmails = await Selector('#emails-input-container').find('.emails-input__email-input');

  await t
    .click(inputEmails)
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(inputEmails, 'email@valid.com,email-invalid', { paste: true })
    .expect(Selector('#emails-input-container').find('.emails-input__email-box').count)
    .eql(2) 
    .expect(Selector('#emails-input-container').find('.emails-input__email-box--invalid').count)
    .eql(1);
});