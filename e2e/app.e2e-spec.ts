import { Testang2Page } from './app.po';

describe('testang2 App', function() {
  let page: Testang2Page;

  beforeEach(() => {
    page = new Testang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
