describe('Testing Navigation',function(){

 it('should go to main page',function(){
  browser.get('index.html');

  browser.get('#/main');
  var h2 = element.all(by.tagName('h2')).first();
  expect(h2.getText()).toBe("Home");
  
});

 it('should go to About us page',function(){
  
  browser.get('#/about');
  var h2 = element(by.tagName('h2'));
  expect(h2.getText()).toBe("About");
  
});

it('should go to Services page',function(){
  
  browser.get('#/services');
  var h2 = element(by.tagName('h2'));
  expect(h2.getText()).toBe("Services");
  
});

it('should go to Contact page',function(){
  
  browser.get('#/contact');
  var h2 = element(by.tagName('h2'));
  expect(h2.getText()).toBe("Contact");
  
});




})