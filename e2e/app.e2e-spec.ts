import { Leto.UIPage } from './app.po';

describe('leto.ui App', () => {
  let page: Leto.UIPage;

  beforeEach(() => {
    page = new Leto.UIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
