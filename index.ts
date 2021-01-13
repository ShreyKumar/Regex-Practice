// const txt = "Programming always starts with a hello world."

// const regex1 = /\s/
// const regex2 = /world/

// console.log(regex1.exec(txt))
// console.log(regex2.exec(txt))
// console.log(txt.split(regex1))

// console.log(txt.search(regex1))
// console.log(txt.match(regex1))

// const regex3 = /s\s/gi;
// console.log(regex3.exec(txt))
// console.log(regex3.exec(txt))
// console.log(regex3.exec(txt))
// console.log(regex3.exec(txt)) // gets to null

// const txt2 = "how is it so hot? h@t h t hoot h\nt h\tt"
// const regex4 = /h.t/g // single character
// console.log(txt2.match(regex4))

// const txt3 = "This is the final word."
// const regex5 = /d\./g

// console.log(txt3.match(regex5))

// const re = /gr[ae]y/
// const grey = 'grey'
// const gray = 'gray'
// const griy = 'griy'

// console.log(re.test(grey), re.test(gray), re.test(griy))

// const charSet = /[rh][abcde][ i]/g
// console.log(charSet.test('Make the outline for the square gray and fill the circle grey.'))

// const regex6 = /[1-4][1-6]/
// const txt4 = "`1234"
// const regex7 = /[1\-4]/
// const txt5 = "1-4"
// console.log(txt5.match(regex7))

// const regex8 = /[10-20]/g
// const txt6 = "9"

// console.log(txt6.match(regex8))

// const regex9 = /[\^a-z]/
// const txt7 = "abcdef^"
// console.log(regex9.exec(txt7))

// // \s matches \r \t \n and ' '
// const regex10 = /\w\w\w/

// const newPhoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"]

// const validPhones = (phoneNums) => {
//   const phonePattern = /801-[0-9]{3}-[0-9]{4}/
//   return phoneNums.filter((num) => phonePattern.test(num))
// }


// console.log(validPhones(newPhoneNums))

// const regex11 = /[A-Z]*/
// const str = 'She sells Seashells on a seashore'

// const regex12 = /s[a-z]?/

// console.log(str.match(regex11))
// console.log(str.match(regex12))


// const regex13 = /warning!*/
// const warning = 'warninffg!'
// console.log(warning.match(regex13))

// const someHTML = '<p>This is the first paragraph.</p><p>This is the first paragraph.</p>'
// const regex14 = /<p>.*?<\/p>/
// console.log(someHTML.match(regex14))

// const regex15 = /\w{3,5}/g
// const num = 'My telephone number is as follows: 801-555-6789'

// const regex16 = /\d{3}-\d{2}-\d{3}/g

// const validPhone = /\(?[0-9]{3}\)?[-.]?[0-9]{3}[-.]?[0-9]{4}/

// const phones = [
//   '(123)-123-1234',
//   '123.123.1234',
//   '123-123-1234',
//   '1231231234',
//   '(123)123-1234',
//   '123--123-1234' // should fail
// ]

// console.log(phones.map((p) => p.match(validPhone)))

// const regex17 = /The\.$/

// const txt = "The The The."

// console.log(txt.match(regex17))

// const regex18 = /^first.$/
// const txt2 = "first. asd asdasdas sad "

// console.log(txt2.match(regex18))

// const regex19 = /^The/igm
// const txt3 = `
//   The\n
//   The\n
//   The\n
//   The\n
//   Hello
// `

// console.log(txt3.match(regex19))

// const txt4 = 'plant plan plant plant plan'

// const regex20 = /\bplan\b/
// const regex21 = /\Ban\B/g

// console.log(txt4.match(regex20))
// console.log(txt4.match(regex21))


// const text1 = 'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';

// const regex = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi
// const newText = text1.replace(regex, "Monday")

// console.log({ newText })

// const pipRegex = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi

// const pipRegex2 = /\b[a-z]{3}day\b|\b[a-z]{4}day\b|\b[a-z]{6}day\b/ig
// const grouping = /\b(monday|tuesday|wednesday)\b/g

// const ascii = 'a3w3b5n4 213123 asdsada j3j4b7y6 b5b2b4b3asdwe23 b1s2i4y77d7'
// const asciiRegex = /([a-d][1-5]){5}/g

// const date = '2018/03/09'
// const dateRegex = /^([0-9]{4})[-./](\d{1,2})[-./](\d{1,2})$/g
// const matches = dateRegex.exec(date)

// console.log(matches)

// let year, month, day
// console.log(dateRegex.test(date))
// if (dateRegex.test(date)) {
//   year = matches[1]
//   month = matches[2]
//   day = matches[3]
// } else {
//   console.log('wrong format')
// }

// const capturingGroup = /^(\d{4})([-./])(\d{1,2})\2(\d{1,2})/g
// const colonParentheses = /^(?:\d{4})([-./])(\d{1,2})\1(\d{1,2})$/g

// console.log(year, month, day)
// console.log(capturingGroup.exec(date))
// console.log(date.match(colonParentheses))

// const htmlTags = /<(\w*)>\w*<\/\1>/gi


// const google = 'https://google.com'
// const urls = /^(?=https:\/\/)(www\.)?[a-z]*(?=\.com)$/gi

// console.log(google.match(urls))

// const pwds = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9)]).*$/g

// let names = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"]

// const namesRegex = /([A-Z]{1}[a-z]*), ([A-Z]{1}[a-z]*)/

// const reversedNames = names.map((name) => {
//   const matches = namesRegex.exec(name)s
//   if (matches && matches[1] && matches[2]) {
//     return `${matches[2]} ${matches[1]}`
//   }
// })

// console.log({ reversedNames })

// const unicode = /^.-clef/


const validateTwitterHandles = /^@?(\w+)$/g
const handle = '@beatsbydrshrey'
console.log(validateTwitterHandles.exec(handle))

const validateEmails = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g
const email = 'asd@gmail.com'
console.log(validateEmails.exec(email))

// 1 num, 1 special character, 1 uppercase, 1 lowercase, 8 characters
const validatePwds = /^.{8,}(?=[0-9])(?=[A-Z])(?=[a-z])(?=[^0-9a-zA-Z])$/g

const names = ["Smith, James", "Peterson, Alyssa", "Johnson, Lynette", "Lopez, Tony"]
const newNames = names.map((name) => {
  return name.replace(/(\w+), (\w+)/, "$2 $1")
})

console.log({ newNames })

const txt = "Let's put several different words more text together to see what we can match."

const matchWord = /\b(?:words\W+(?:\w+\W+){0,5}together)\b/g

console.log(matchWord.test(txt))

const date1 = '24/06/1966'
const date2 = '55/3-/0000'
const date3 = '31/02/2021'

const dateChecker = /^\d{1,2}(\/)\d{1,2}\1(\d{2}|\d{4})$/g

console.log(dateChecker.test(date1))
console.log(dateChecker.test(date2))
console.log(dateChecker.test(date3))

const dateChecker2 = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}$/g

console.log(dateChecker2.test(date1))
console.log(dateChecker2.test(date2)) // should fail
console.log(dateChecker2.test(date3))


let phrase = "First number: 32, and a second number 100. Here is the last number 15.";
const getNums = /\d+/g

const sum = phrase.match(getNums).reduce((num, total) => parseInt(total, 10) + parseInt(num, 10))
console.log({ sum })

console.log(getNums.exec(phrase))
console.log(getNums.exec(phrase))
console.log(getNums.exec(phrase))

const getNums2 = /\d+/g

let match = getNums2.exec(phrase)
let sum2 = 0
while (match) {
  console.log(match[0])
  sum2 += parseInt(match[0], 10)
  match = getNums2.exec(phrase)
}

console.log({ sum2 })

