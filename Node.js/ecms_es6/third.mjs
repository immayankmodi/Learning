//https://nodejs.org/dist/latest-v18.x/docs/api/url.html

import { URL } from 'node:url';
console.log(URL === globalThis.URL); // Prints 'true'.

const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
// Prints #bar

myURL.hash = 'baz';
console.log(myURL.href);
// Prints https://example.org/foo#baz


const myURL1 = new URL('https://example.org');
myURL1.pathname = '/a/b/c';
myURL1.search = '?d=e';
myURL1.hash = '#fgh';
console.log(myURL1);