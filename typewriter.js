const sentence = "hello there from lighthouse labs";

const typewritter = function(text) {
  let textArr = text.split('');
  let delay = 0;
  for (let i = 0; i < textArr.length; i++) {
    setTimeout(function() {
  
      process.stdout.write(textArr[i]);
      
    }, delay);
    delay += 50;
  }
  setTimeout(function() {
    console.log();
  }, delay);
};

typewritter(sentence);

