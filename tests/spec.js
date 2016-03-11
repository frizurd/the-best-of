// spec.js
describe('the home page', function() {
  it('should have a title', function() {
    var title = 'The Best Of'
    browser.get('http://localhost:8000');

    expect(browser.getTitle()).toEqual(title);
  });
});
