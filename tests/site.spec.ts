import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/work/event-pipeline', '/work/business-app', '/work/doc-publisher', '/404'];

for (const path of pages) {
  test.describe(path, () => {
    test('has no accessibility violations', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
    });

    test('loads without console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });
  });
}

test('skip link moves focus to the main content', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard test runs on desktop');
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  await skip.press('Enter');
  await expect(page).toHaveURL(/#main$/);
});

test('layer buttons select a layer and announce it', async ({ page }) => {
  await page.goto('/');
  const queues = page.getByRole('button', { name: 'Queues' });
  await queues.click();
  await expect(queues).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText('Queues & events layer selected.')).toBeAttached();
});

test('old hash links land on the new sections', async ({ page }) => {
  await page.goto('/#/portfolio');
  await expect(page).toHaveURL(/\/#work$/);
});

test('content is visible with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: "Systems I've designed." })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Pause animation' })).toBeVisible();
});
