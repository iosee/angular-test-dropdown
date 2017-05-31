import { AngularTestDropdownPage } from './app.po';

describe('angular-test-dropdown App', () => {
  let page: AngularTestDropdownPage;

  beforeEach(() => {
    page = new AngularTestDropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
