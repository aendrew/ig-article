import { IgArticlePage } from './app.po';

describe('ig-article App', function() {
  let page: IgArticlePage;

  beforeEach(() => {
    page = new IgArticlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
