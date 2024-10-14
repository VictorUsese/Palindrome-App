const input = document.getElementById('input');
const btn = document.querySelector('.btn');

const palindromeCheck = (str) => {
  return str.split('').reverse().join('')
}


btn.addEventListener('click', () => {
  const value = input.value;
  const palindromeValue = palindromeCheck(value);
  if (value === palindromeValue) {
    alert('P A L I N D R O M E')
  } else {
    alert('Oh Sorry... Not Today!!!')
  }
})