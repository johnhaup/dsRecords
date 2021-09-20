describe('Bounce', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show play screen with bounce record on load', async () => {
    await waitFor(element(by.id('@TabBar/Play')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('@Play/ScrollView'))).toBeVisible();
    await expect(element(by.id('@Bounce/Record'))).toBeVisible();
  });

  it('should bounce record', async () => {
    await element(by.id('@Bounce/Record')).longPressAndDrag(
      500,
      0.5,
      0.5,
      element(by.id('@Bounce/SwipeDestination')),
      0.5,
      0.5,
      'fast',
      0,
    );
  });
});
