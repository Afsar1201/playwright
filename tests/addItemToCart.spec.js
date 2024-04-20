import { test, expect } from '@playwright/test';

test('Add item to cart on Amazon.in', async ({ page }) => {
    // Navigate to Amazon.in
    await page.goto('https://www.amazon.in');

    // Search for an item
    await page.fill('#twotabsearchtextbox', 'laptop');
    await page.press('#twotabsearchtextbox', 'Enter');
    await page.waitForSelector('.s-result-item');

    // Click on the first item in the search results
    const firstItem = await page.$('.s-result-item');
    await firstItem.click();

    // Wait for the "Add to Cart" button and click on it
    await page.waitForSelector('input[type="submit"]#add-to-cart-button');
    await page.click('input[type="submit"]#add-to-cart-button');

    // Wait for the confirmation message that the item is added to cart
    // Verify item is added to cart by checking the confirmation message
    const confirmationMessage = await page.textContent('.a-alert-success');
    expect(confirmationMessage).toContain('Added to Cart');
});
