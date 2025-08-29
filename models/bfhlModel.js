const FULL_NAME = 'Shashwat';
const DOB = '17091999';
const EMAIL = 'iamsoranic@gmail.com';
const ROLL_NUMBER = '22BCE8168';

function isNumber(str){
  return /^\d+$/.test(str);
}

function isAlpha(str){
  return /^[a-zA-Z]+$/.test(str);
}

function isEven(numStr){
  return parseInt(numStr) % 2 === 0;
}

function isOdd(numStr){
  return parseInt(numStr) % 2 === 1;
}

function alternatingCaps(str){
  let res = '';
  let upper = true;
  for(let c of str){
    if(/[a-zA-Z]/.test(c)){
      res += upper ? c.toUpperCase() : c.toLowerCase();
      upper = !upper;
    }
  }
  return res;
}

function processData(data){
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let alpha_concat = '';

  for(let item of data){
    if(isNumber(item)) {
      if (isEven(item)) even_numbers.push(item.toString());
      else odd_numbers.push(item.toString());
      sum += parseInt(item);
    } else if(isAlpha(item)){
      alphabets.push(item.toUpperCase());
      alpha_concat += item;
    } else{
      if(item.length===1 && !isAlpha(item) && !isNumber(item)){
        special_characters.push(item);
      } else{
        let onlyAlpha = item.replace(/[^a-zA-Z]/g, '');
        let onlySpecial = item.replace(/[a-zA-Z0-9]/g, '');
        if(onlyAlpha){
          alphabets.push(onlyAlpha.toUpperCase());
          alpha_concat += onlyAlpha;
        }
        if(onlySpecial){
          for (let c of onlySpecial) special_characters.push(c);
        }
      }
    }
  }

  let concat_string = alternatingCaps(alpha_concat.split('').reverse().join(''));

  return{
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
}

module.exports = { processData };
