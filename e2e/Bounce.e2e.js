describe('Bounce', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should bounce record', async () => {
    await waitFor(element(by.id('@Bounce/Record')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('@Bounce/Record')).swipe('down');
  });

  it('should bounce record again', async () => {
    await element(by.id('@Bounce/Record')).longPressAndDrag(
      5000,
      NaN,
      NaN,
      element(by.id('@Bounce/AttributionText')),
      0.5,
      0.5,
      'fast',
      0,
    );
  });
});
