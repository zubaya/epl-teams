import { EPLPage } from './app.po';

describe('EPL-teams App', function() {
  let page: EPLPage;

  beforeEach(() => {
    page = new EPLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
