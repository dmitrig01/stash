/**
 * @file
 * Do not execute directly but via test.sh.
 */

// Declare data.
var sandwiches = [
    'veggie',
    'pulled pork',
    'blt'
];
var fruit = [
    'pear',
    'apple',
    'banana'
];

// Initialize database.
var stash = require('../lib/stash')('test.db');

// Save sandwiches, assert.
stash.set('sandwiches', sandwiches);
var control = stash.get('sandwiches');
var error = false;
for (var i; i < sandwiches.length; i++) {
    if (sandwiches[i] != control[i]) {
        error = true;
    }
}
error ? console.error('Mismatch') : console.log('Match');

// Save fruit, assert.
stash.set('fruit', fruit);
control = stash.get('fruit');
error = false;
for (var i; i < fruit.length; i++) {
    if (fruit[i] != control[i]) {
        error = true;
    }
}
error ? console.error('Mismatch') : console.log('Match');

// Assert list of all entries.
control = stash.list();
error = false;
for (var i; i < fruit.length; i++) {
    if (fruit[i] != control.fruit[i]) {
        error = true;
    }
}
error ? console.error('Mismatch') : console.log('Match');

// Remove sandwiches.
stash.rm('sandwiches');
stash.get('sandwiches') == undefined ? console.log('Match') : console.error('Mismatch');
