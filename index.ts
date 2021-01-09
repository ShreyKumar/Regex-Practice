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

