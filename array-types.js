const heap = [true, 5, 'Hello', 25.5, NaN, {name: 'Boast'}, null, undefined, null, 15, 'Mao'];

const hash = {
    number: 0,
    boolean: 0,
    string: 0,
    null: 0,
    undefined: 0,
    object: 0,
};

const hashAuto = {};

for (elem of heap) {
    const type = typeof elem;
    if (hash.hasOwnProperty(type)) {
        hash[type]++;
    }
    if (type in hashAuto) {
        hashAuto[type]++;
    }
    else {
        hashAuto[type] = 0;
        hashAuto[type]++;
    }
    
}

console.log("heap array = ");
console.dir(heap);
console.log('hash filled with counters ');
console.dir(hash);

console.log('hashAuto filled with counters ');
console.dir(hashAuto);