import { test, expect } from '@playwright/test';

test('checkout flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Medusa Hoodie Medusa Hoodie €36.50' }).click();
  await page.getByRole('link', { name: 'M', exact: true }).click();
  await page.getByLabel('Add item to cart').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();

  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('a@a.co');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your first name').fill('Nimo');
  await page.getByPlaceholder('Enter your first name').press('Tab');
  await page.getByPlaceholder('Enter your last name').fill('Beeren');
  await page.getByPlaceholder('Enter your last name').press('Tab');
  await page.getByPlaceholder('Enter your first address line').fill('x');
  await page.getByPlaceholder('Enter your first address line').press('Tab');
  await page.getByPlaceholder('Enter your second address line').fill('x');
  await page.getByPlaceholder('Enter your second address line').press('Tab');
  await page.getByPlaceholder('Enter your city').fill('x');
  await page.getByPlaceholder('Enter your city').press('Tab');
  await page.getByPlaceholder('Enter your postcode').fill('x');
  await page.getByLabel('Country').selectOption('nl');
  await page.getByRole('button', { name: 'Proceed to payment' }).click();
  
  await page.getByLabel('Payment method').selectOption('ideal');
  await page.getByLabel('Bank').selectOption('asn');
  await page.getByRole('button', { name: 'Place order' }).click();

  await expect(page.getByText(/Order ID: \d+/i)).toBeVisible();
});