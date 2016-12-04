import { CalorifyUiPage } from './app.po';

describe('calorify-ui App', function() {
  let page: CalorifyUiPage;

  beforeEach(() => {
    page = new CalorifyUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
