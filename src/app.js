const ul= document.querySelector('#ulElem');
var termekek = ['alma', 'körte' , 'barack' , 'szilva'];

console.log ("müködik")

termekek.forEach((termekek) => {
    //console.log(termekek)
    let li = document.createElement('li')
    li.textContent = termekek
    li.classList = ' ';
    let div= document.createElement;
    
    ul.append (li)

});