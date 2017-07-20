import { Mwalab13Page } from './app.po';

describe('mwalab13 App', () => {
  let page: Mwalab13Page;

  beforeEach(() => {
    page = new Mwalab13Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
