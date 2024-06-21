"use strict";
function callback(callback, newName) {
    callback(newName);
}
let arrofunc = (name) => {
    console.log(`Hellow\n Mr / Mrs : ${name.toUpperCase()}`);
};
callback(arrofunc, "Saif");
