// -------------STRING--------

const country = 'Bangladesh'
const division = "Asia"
const distric = `Noakhali`
const thana = new String ('Senbag')

// console.log(thana, country)

// STRING is immutable ---> not changable
// ARRAY is mutale ---> you cange

const capital = 'Dhaka'
// console.log(capital)
// console.log(capital.length)
// console.log(capital[3])
// capital[30] = 'b'
// console.log(capital)


// ---------------CASE----------------
const subject = "Jalaline";
const kitab = 'jalaline';

// if(subject.toLowerCase() === kitab.toLowerCase()){
//     console.log('pore fel')
// }
// else(
//     console.log('poric na')
// )

const madrasha = 'Jamiya Mohammadiya madrasha';

// console.log(madrasha)
// console.log(madrasha.toLowerCase())
// console.log(madrasha.toUpperCase())

const pani = 'pani';
const water = '  pani  '


// ------------TRIM--------------
// if(pani.trim === water.trim){
//     console.log('tui pani kha')
// }
// else{
//     console.log('tui khaic na')
// }



// ------------------SLICE------------
const shahi = 'Noakhali'
const shah = shahi.slice(3,7)

// console.log(shah)

// const sen = 'I am a very good boy, you no a good girl'

// console.log(sen)
// console.log(sen.split(' '))

const sen = 'I am a very good bay, you no a good girl'

// console.log(sen)
// console.log(sen.split('a'))

// ~~~~~JOIN~~~~~
const name = ['rahim', 'kahim', 'sahim', 'naim', 'mahim']

// console.log(name)
// console.log(name.join())
// console.log(name.join('|'))


// -------------CONCATE-------------
// const nai = 'Abid';
// const ina = 'Nabid';
// // const fullname = 'abid'+'Nabid';
// const fullname = nai+ ' ' +ina;
// console.log(fullname)

// const nai = 'Abid';
// const ina = 'Nabid';
// const fullname = nai+ ' ' +ina;
// const fullname2 = nai.concat(' ').concat(ina);
// console.log(fullname)

// ~~~~INCLUDES~~~~
const ju = 'naim'
const ji = 'saim'

// console.log(ji.includes('m'))
// console.log(ji.includes('v'))

// --------------REVERSE------------
const sentence = 'I am learnig web dev'
let reverse = ''

// for(const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse)

let rev = ''
// for(let aat = 0; aat <sentence.length; aat++ ){
//     // console.log(aat);
//     // console.log(sentence[aat]);
//     const letter = sentence[aat]
//     rev = letter + rev
// }
// console.log()

// const reversed = sentence;
// console.log(reversed)



// --------------------OBJECT-----------------
// ~~~meanig~~~
const age = 20;
const madrasa = 'jamiya mohammadiya';
const isMumtaj = true;
const sub = ['hedaya', 'jalaline', 'fauj']

// ~~~~shortcut~~~~
const bottle ={
    color: 'white',
    drink: 'water',
    price: 10,
}


const exam ={
    nam: 'jalaine',
    num: 20,
    date: '10 feb',
    pass: true,
    'fav class': 'jakir',
    others:{
        hedaya: "eto eot",
        numbe: 70,
        bab: ['toharot', 'salat', 'soum']
    }
}
// console.log(exam)
// console.log(exam.num);

// --dot notation--
// const income = exam.others;
// console.log(income)

// --bracket notation--
// console.log(exam['nam'])

// --third bracket access--
// const janina = exam['pass']
// console.log(janina)

// console.log(exam['fav class'])
const kam = 'nam'
// console.log(exam[kam])


// -------value change----
const mixa ={
    nam: 'jalaine',
    num: 20,
    date: '10 feb',
    pass: true,
    'fav class': 'jakir',
    others:{
        hedaya: "eto eot",
        numbe: 70,
        bab: ['toharot', 'salat', 'soum']
    }
}

mixa.num = 80;
mixa['date'] = '18 jan';
mixa['fav class']= ['meshkat', 'bayjabi'];

const kochu = 'pass'
mixa[kochu] = 'false';
// console.log(mixa);



// --------------KEYS-----------
const naim = {
    nam: 'abu naim',
    class: "hedaya",
    rNumber: 2,
    email: "farhan",
    passed: true,
}

// const adi = Object.keys(naim);
// console.log(adi)


// ----------- OBEJT > VALUES------------
const farabi = {
    asliNam: 'abu naim',
    bari: "mestry bari",
    gram: "khajuriya",
    holdin: 1,
    first: true,
}

const kala = Object.values(farabi);
// console.log(kala)


// -------------OBJECT > NESTED------------
const amiHobo = {
    nam: ["madinar", 'pagol'],
    work: ['ami hobo', 'madinar','jarudar'],
    vara: 700000,
    biman: true,
    kaba: {
        color: 'black',
        madina: {
            color: "green",
            icchuk: true,
        }
    }
}

// console.log(amiHobo.kaba.color)
amiHobo.kaba.madina.color = 'sobuj'
// console.log(amiHobo.kaba.madina.color)
amiHobo.work[2] = 'pagol'
// console.log(amiHobo.work[2])
delete amiHobo.biman
// console.log(amiHobo)



// --------------OBJECT LOOP-----------
const mobaile = {
    bran: 'apple',
    name: "iphone xr",
    price: 98990,
    isNew: false,
    color: 'white',
    cemera: '12mp'
}

for(prop in mobaile){
    // console.log(prop)
    // console.log(mobaile[prop])

}

const keys = Object.keys(mobaile);
// console.log(keys)

// for(const key of keys){
//     console.log(key, ':', mobaile)
// }

//---------OBJECT DECLERE---------
// const pen = {brand: 'econo', price: 10, color: 'black'}
const pencil = new Object()
// console.log(pencil)
// const rubber = Object.create({brand: 'new', price: 20,})
// console.log(rubber)



// ----------------------LOOPING------------------
const fd = ['main', 'said', 'naim', 'sakhaowat']

for(frind of fd){
    // console.log(frind)
}

for(let tum = 0; tum < fd.length; tum++){
    // console.log(tum);
    // console.log(fd[tum])
}


const sal = [52, 62, 63, 28, 88, 30, 855, 9224, 3325, 652,665,]

for(let item = 0; item < sal.length; item++){
    // console.log(sal[item])
}

let i = 0;

while(i < fd.length){
    // console.log(fd[i])
    i++
}

let y = 0;

while(y < sal.length){
    // console.log(sal[y])
    y++
}



// -------------------OBJECT REVERS------------
const dk = [1, 2, 3, 4, 5, 6, 7,]

// console.log(dk)

// dk.reverse()
//console.log(dk)
// const revers = dk.reverse()
// console.log(revers)

const rev_dk = []

for(const nm of dk){
    rev_dk.unshift(nm)
}
// console.log(rev_dk)

const ck = [1, 2, 3, 4, 5, 6, 7,]

const reversd_ck = []

for(let i = 0; i < ck.length; i++){
    let num = ck[i]
    reversd_ck.unshift;
    // console.log(reversd_ck)
}



//revers loop
const rev_rev_ck = [];
for(let i = ck.length -1; i >= 0; i--){
    const num = ck[i];
    // console.log(num);
    rev_rev_ck.push(num)
}
// console.log(rev_rev_ck)


// -------------SORT-----------------
const per = ['takib', 'dakib', 'nokib', 'sakib', 'akib'];
const sortPer = per.sort();

// console.log(sortPer)

// ~~~~ASCENDING~~~~
const number = [2, 8, 7, 6, 9, 4, 1];
const number_asc = number.sort()
// console.log(number_asc)