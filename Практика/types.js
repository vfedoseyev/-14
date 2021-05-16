/**
 * Вычислите следующие примеры при помощи консоли браузера:
 * деление (99 / 3) (2 / 4) (144 / 0) ('4' / 2) ('1 2' / 5) (23 / Infinity)
 * умножение ('22' * 2) ('one' * 2) (0.5 * 2) (.2 * 2)
 * сложение ('3' + 2) (2 + +'3') (12n + 2)
 * вычитание ('23' - '3') ('23' - 3)
 * 
 * Обратите внимание на получамый результат.
 * Обсудите с консультантом почему получается именно такой рзультат в каждом из примеров.
 * Поразмышляйте как добиться более предсказуемого результата.
 */
console.log(99 / 3)
console.log(2 / 4)
console.log(144 / 0)
console.log('4' / 2)
console.log('1 2' / 5)
console.log(23 / Infinity)
console.log('22' * 2)
console.log('one' * 2)
console.log(0.5 * 2)
console.log(.2 * 2)
console.log('3' + 2)
console.log(2 + +'3')

console.log('23' - '3')
console.log('23' - 3)

let year = 2021;
let age = 34;
let yearsOld = year - age
// Выведите в консоль фразу "Я родился в 1987 году" используя переменные year, age и шаблонную строку.
console.log(`Я родился в ` + (year - age) + ` году`);
console.log(`Я родился в ` + yearsOld + ` году`);


let one = ' 1';
let otherOne = 1;
console.log(one == otherOne);
console.log(one === otherOne);
// Выведите в консоль строгое (==) и не строгое (===) сравнение этих двух значений.
// Обсудите с консультантом полученный результат. В каких случаях следует применять
// строгое, а в каких не строгое равенство.

// Попробуйте привести к boolean типу значения с помощью конструкции
// Boolean()
// (144) (0) (true) (false) ({}) ({ name: 'Вася' }) ([]) ([1, 2, 3])
let two = Boolean(144)
console.log(two)
let tr = Boolean(0)
console.log(tr)
let te = Boolean(false)
console.log(te)
let ty = Boolean({})
console.log(ty);
let tu = Boolean({
    name: 'Вася'
})
console.log(tu)
let ttqu = Boolean([])
console.log(ttqu)
let ti = Boolean([1, 2, 3])
console.log(ti)