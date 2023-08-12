// ------------------- regex url ---------------------

// http://condense.tech # => OK
// ftp://condense.tech # => NO
// http:condense.tech # => NO
// http//condense.tech # => NO
// http:/condense.tech # => NO
// http://asdadajksdad.1231239-asdasd # => OK
// http://asdasd   asdasdad # => NO
// http://cond,com # => NO

var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
var regex = new RegExp(expression);

function validateURL(url) {
   if(url.match(regex)) {
        console.log('OK');
    } else {
        console.log('NO');
    }
}

validateURL("http://condense.tech")
validateURL("ftp://condense.tech")
validateURL("http:condense.tech")
validateURL("http//condense.tech")
validateURL("http://asdadajksdad.1231239-asdasd")
validateURL("http://asdasd   asdasdad")
validateURL("http://cond,com")


// ------------------- regex phone numbers ---------------------

// My phone number is (039) 02-121212 # => (039) 02-121212
// None of my 32 friends has a phone. One of them gave me the number 123-123123 but it isn't valid # => no match
// Phone numbers cannot have letters. Numbers like (800) STAR-121212 are not valid # => no match
// Every country has its own rules for phone numbers. Even a number like (1) 1-2 can be a valid phone number



var expression = /\(\d{2,3}\) \d{2,3}-\d{4,8}/g;
var regex = new RegExp(expression);

function catchPhone(string) {
   if(string.match(regex)) {
      var number = string.match(regex);
      console.log(number);
    } else {
        console.log('no match');
    }
}

catchPhone("My phone number is (039) 02-121212");
catchPhone("None of my 32 friends has a phone. One of them gave me the number 123-123123 but it isn't valid");
catchPhone("Phone numbers cannot have letters. Numbers like (800) STAR-121212 are not valid");
catchPhone("Every country has its own rules for phone numbers. Even a number like (1) 1-2 can be a valid phone number");


// ------------------- regex html inner text ---------------------


var expression = />([^<]*)</g;
var regex = new RegExp(expression);

function catchText(html) {
   if(html.match(regex)) {
      var text = html.match(regex).toString();
      text = text.slice(1);
      text = text.slice(0, -1);
      console.log(text);
    } else {
        console.log('no match');
    }
}


catchText('<a href="https://example.com">Visit Example</a>')
