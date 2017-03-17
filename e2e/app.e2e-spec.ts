import { HorseappPage } from './app.po';

describe('horseapp App', function() {
  let page: HorseappPage;

  beforeEach(() => {
    page = new HorseappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
