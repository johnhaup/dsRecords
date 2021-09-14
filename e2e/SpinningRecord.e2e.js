describe('SpinningRecord', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show SpinningRecord loading screen', async () => {
    await expect(element(by.id('@SpinningRecord/container'))).toBeVisible();
  });
});
