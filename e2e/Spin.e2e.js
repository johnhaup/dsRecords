describe('Bounce', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should navigate to Spin tab', async () => {
    await waitFor(element(by.id('@TabBar/Spin')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('@TabBar/Spin')).tap();
    expect(element(by.id('@Spin/Record'))).toBeVisible();
  });
});
