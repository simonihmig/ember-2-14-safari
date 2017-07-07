# testapp

The only files with code relevant to the validation error are.

* Controllers/index.js
* Templates/index.hbs

To reproduce the error

* `ember serve`
* Visit http://localhost:4200 in Safari (Mac)
* Continuously enter characters into the field
* at some point the exception `null is not an object (evaluating 'm.isInitialized')` will throw
