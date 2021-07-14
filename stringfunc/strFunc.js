let lylic = `ASAP, 내 반쪽, 아니, 완전 copy 
나와 똑같아, 내 맘 잘 알아줄`;

//substr()
let substr1 = lylic.substr(0, 4); 
let substr2 = lylic.substr(6, 4); 
let substr3 = lylic.substr(32, lylic.length-1); 

console.log(`첫번째 문자열: ${substr1}`); // ASAP
console.log(`두번째 문자열: ${substr2}`); // 내 반쪽
console.log(`마지막 문자열: ${substr3}`); // 내 맘 잘 알아줄

//substring()
let substringStr1 = lylic.substring(0, 4);
let substringStr2 = lylic.substring(6, 10);
let substringStr3 = lylic.substring(32, lylic.length);

console.log(`첫번째 문자열: ${substringStr1}`); // ASAP
console.log(`두번째 문자열: ${substringStr2}`); // 내 반쪽
console.log(`마지막 문자열: ${substringStr3}`); // 내 맘 잘 알아줄

//slice()
let sliceStr1 = lylic.slice(0, 4);
let sliceStr2 = lylic.slice(6, 10);
let sliceStr3 = lylic.slice(32, lylic.length);

console.log(`첫번째 문자열: ${sliceStr1}`); // ASAP
console.log(`두번째 문자열: ${sliceStr2}`); // 내 반쪽
console.log(`마지막 문자열: ${sliceStr3}`); // 내 맘 잘 알아줄

//substring()와 slice의 다른점
// start > end
let slice_str = lylic.slice(4, 0);
let substring_str = lylic.substring(4, 0);

console.log(`slice(4,0): ${slice_str}`); // ''
console.log(`substring(4,0): ${substring_str}`); // ASAP
// slice() 빈 문자열 출력, substring() (end, start)으로 바뀌어서 출력.

// start나 end가 음수인 경우
let slice_str1 = lylic.slice(-2,lylic.length);  
let slice_str2 = lylic.slice(0,-2); 
let substring_str1 = lylic.substring(-2,lylic.length); // ASAP, 내 반쪽, 아니, 완전 copy 나와 똑같아, 내 맘 잘 알아줄
let substring_str2 = lylic.substring(0,-2); // ''

console.log(`slice(-2, lylic.length): ${slice_str1}`); // 아줄
console.log(`slice(0, -2): ${slice_str2}`); // ASAP, 내 반쪽, 아니, 완전 copy 나와 똑같아, 내 맘 잘 알
console.log(`substring(-2, lylic.length): ${substring_str1}`); 
// ASAP, 내 반쪽, 아니, 완전 copy 나와 똑같아, 내 맘 잘 알아줄
console.log(`substring(0, -2): ${substring_str2}`); // ''
//substring의 경우 음수값이면 0으로 처리, slice() 시작값이 음수면 뒤에서 2글자만 출력,
//마지막값이 음수면 뒤에서 글자를 뺀 문자열만 출력

// slice() start나 end의 값이 음수이고 그 값의 길이가 문자열보다 큰 경우
let slice1 = lylic.slice(-50,lylic.length); 
let slice2 = lylic.slice(0,-50); 

console.log(`slice(-50, lylic.length): ${slice_str1}`); 
//  ASAP, 내 반쪽, 아니, 완전 copy 나와 똑같아, 내 맘 잘 알아줄
console.log(`slice(0, -50): ${slice_str2}`); // ''
// 음수의 값이 문자열의 길이보다 크다면 0으로 처리

