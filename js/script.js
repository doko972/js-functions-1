// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.


/* ------------------------------------------------------*/

console.log("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");
/**
 * get parameters sum
 * @param {number} a 
 * @param {number} b 
 * @returns {number} result
 */
function getSum(a, b) {
    return a + b;
}

console.log(getSum(10, 20));
console.log(getSum(33, 100));


/* ------------------------------------------------------*/

console.log("2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre.");
/**
 * Get smallest value
 * @param {number} a 
 * @param {number} b 
 * @returns {number} result
 */
function getSmallest(a, b) {
    return Math.min(a, b);
}

function getSmallest2(a, b) {
    if (a < b) return a;
    return b;
}

function getSmallest3(a, b) {
    return a < b ? a : b;
}

console.log(getSmallest(25, 56));
console.log(getSmallest(32, 45));


/* ------------------------------------------------------*/

console.log("3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau.");

/**
 * Get the last value of an array
 * @param {array} array - not empty
 * @returns {*} Last value
 */
function getLastArrayValue(array) {
    return array[array.length - 1];
}

const arrayOne = [10, 25, 63, 42];
const arrayTwo = ["Luc", "Paul", "Jean", "Lucie"];

console.log(getLastArrayValue(arrayOne));
console.log(getLastArrayValue(arrayTwo));


/* ------------------------------------------------------*/

console.log("4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation.");

/**
 * increases a value with a percentage without %
 * @param {number} a arbitrary value to increase.
 * @param {number} percent percentage without % (ex : 1, 2, 3)
 * @returns {number} value "a" increased.
 */
function increaseValuePercent(a, percent) {
    return a * (1 + percent / 100);
}

console.log(increaseValuePercent(50, 16));
console.log(increaseValuePercent(97, 50));


/* ------------------------------------------------------*/

console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");

// function getMaxValue(...c){
//     return Math.max(...c);
// }
// console.log(getMaxValue(10,20, 30));
// console.log(getMaxValue(70,60, 50));

/**
 * get the max value of three values
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c last value
 * @returns {number} return max value
 */
function getMaxValue(a, b, c) {
    return Math.max(a, b, c);
}
console.log(getMaxValue(10, 20, 30));
console.log(getMaxValue(70, 60, 50));

/* ------------------------------------------------------*/

console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

/**
 * calculate the array sum 
 * @param {array} arr array of numbers ex. [2, 4 ,10,..]
 * @returns {number} the sum of the given array.
 */
function calculateArraySum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item
    }
    return sum
}

function calculateArraySum2(arr) {
    return arr.reduce((a, b) => a + b, 0);
    // return arr.reduce(function(a, b) {
    //     return a + b;
    // }, 0);
}

console.log(calculateArraySum([2, 5, 5]));
console.log(calculateArraySum2([-2, 50, 5, 0]));


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");

/**
 * return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}

console.log(getRandomValue(10));
console.log(getRandomValue(100));


/* ------------------------------------------------------*/

console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

/**
 * Calculate the average of your array.
 * @param {array} array Needs to be numbers only !
 * @returns {number} average <3
 */
function calcAverageArray(array) {
    return calculateArraySum(array) / array.length;
}

/**
 * Same thing than above but longer
 * @param {array} arr Needs to be numbers only !
 * @returns average.
 */
function calcAverageArray2(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item
    }
    return sum / arr.length;
}

console.log(calcAverageArray2([2, 16, 27, 7772]));
console.log(calcAverageArray2([5, 28, 12.325]));


/* ------------------------------------------------------*/

console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

/**
 * Get a duration in hours/minutes from minutes.
 * @param {number} minutes - duration in minutes.
 * @returns {string} - duration in hours/minutes.
 */
function getHoursMinutes(minutes) {

    const hours = Math.floor(minutes / 60);
    minutes %= 60;

    return `Cela donne ${hours} heures et ${minutes} minutes.`;
}


/**
 * Get a duration in hours/minutes from minutes.
 * @param {number} minutes - duration in minutes.
 * @returns {object} - duration in hours/minutes.
 */
function getHoursMinutesObject(minutes) {
    return {
        hours: Math.floor(minutes / 60),
        minutes: minutes % 60
    };
}

console.log(getHoursMinutes(185));
console.log(getHoursMinutes(666));
const d = getHoursMinutesObject(666);
// console.log(Object.keys(d).map((k, i, a) => d[k] + ' ' + k).join(' '));


/* ------------------------------------------------------*/

console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");

const numtable = [25, 15, 61, 464, 5451, 2];
const numtable2 = [25, 1, 61, 464, 5451, -2];

/**
 * get the smallest number from an array.
 * @param {array} array array that only contains numbers.
 * @returns {number} the smallest number from the array.
 */
function getMinValueArray(array) {
    return Math.min(...array);
}


console.log(getMinValueArray(numtable));
console.log(getMinValueArray(numtable2));



function getMinValueArray2(array) {
    return array.reduce((a, b) => a < b ? a : b);
}

console.log(getMinValueArray2(numtable));
console.log(getMinValueArray2(numtable2));



/* ------------------------------------------------------*/

console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

/**
 * Get object key with highest value
 * @param {object} object 
 * @returns {string} key with highest value
 */
function getMaxKey(object) {
    const max = Math.max(...Object.values(object));
    for (const key in object) {
        if (max === object[key]) {
            return key;
        }
    }
}

function getMaxKey2(object) {
    let maxKey;
    for (const key in object) {
        if (maxKey === undefined || object[key] > object[maxKey]) {
            maxKey = key;
        }
    }
    return maxKey;
}


function getMaxKey3(object) {
    return Object.keys(object).filter(v => object[v] === Math.max(...Object.values(object)));
}

const objectValues = { pierre: 23, esmée: 63, jean: 56, sophie: 63 };
console.log(getMaxKey(objectValues));
console.log(getMaxKey2(objectValues));
console.log(getMaxKey3(objectValues));


/* ------------------------------------------------------*/

console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire d'un tableau.");

const arrayTab = [12, 32, 65, 34];

/**
 * Gets a random value from an array
 * @param {array} array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];
    // return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomArrayValue(arrayTab));
console.log();


/* ------------------------------------------------------*/

console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");
/**
 * Count words
 * @param {string} text - enter a paragraph
 * @returns {number} - return the number of words
 */

function countWords(text) {
    return text.split(' ').length;
    // return text.split(/[\s\'\-]/g).length;
}
console.log(countWords("Les chaussettes de l'archiduchesse sont sèches"));
console.log();
