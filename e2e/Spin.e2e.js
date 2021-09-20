describe('Spin', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should scroll to Spin screen', async () => {
    await waitFor(element(by.id('@TabBar/Play')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('@Play/ScrollView'))).toBeVisible();
    await element(by.id('@Play/ScrollView')).swipe('left');
    await waitFor(element(by.id('@Spin/Record')))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should rotate record', async () => {
    await element(by.id('@Spin/Record')).longPressAndDrag(
      500,
      0.25,
      0.75,
      element(by.id('@Spin/SwipeDestination')),
      0.5,
      0.5,
      'fast',
      0,
    );
  });
});
