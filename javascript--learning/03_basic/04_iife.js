// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log("DB CONNECTED");
})();

(() => {
    console.log("DB CONNECTED");
})();