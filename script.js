
const elementButton = document.createElement('button');
elementButton.textContent = 'send';
elementButton.style.backgroundColor = 'yellow';
elementButton.style.color = 'green';
elementButton.style.margin = '50px 50px 50px 50px';
elementButton.style.fontSize = '50px';
elementButton.style.fontWeight = 'bold';
elementButton.style.border = '5px solid red'
elementButton.style.width = '200px';
elementButton.style.cursor = 'pointer';
document.body.appendChild(elementButton);
elementButton.classList.add('but');

const elementText = document.createElement('p');
document.body.appendChild(elementText);
elementText.id = 'p_text';
elementText.textContent = 'text...text';
elementText.classList.add('p_text1');
// elementText.classList.add('p_text2');

// Object.assign(elementText.style, {
//     fontSize: '30px',
//     color: 'red',
//     fontWeight: '600'
// })

elementButton.onclick = () => {
    // elementText.classList.toggle('p_text1');
    elementText.classList.toggle('p_text2');
}
// ------------------------------------------------------------------------



const elementButtonTwo = document.createElement('button');
elementButtonTwo.textContent = 'send too';
document.body.appendChild(elementButtonTwo);
elementButtonTwo.style.backgroundColor = 'red';
elementButtonTwo.style.color = 'yellow';
elementButtonTwo.style.margin = '50px 50px 50px 50px';
elementButtonTwo.style.fontSize = '50px';
elementButtonTwo.style.fontWeight = 'bold';
elementButtonTwo.style.border = '5px solid red'
elementButtonTwo.style.width = '200px';
elementButtonTwo.style.cursor = 'pointer';



const elementDivText = document.createElement('div');
document.body.appendChild(elementDivText);
elementDivText.textContent = 'div_text...div_text';
elementDivText.style.cssText =
    'font-size: 40px; color: violet; font-weight: 100; background-color: gray; display: inline-block ';
elementDivText.id = 'div_text';

let buttonActive = false;

elementButtonTwo.onclick = () => {

    if (buttonActive) {
        elementDivText.style.cssText =
            'font-size: 40px; color: violet; font-weight: 100; background-color: gray; display: inline-block ';
    } else {
        elementDivText.style.cssText =
            'font-size: 35px; color: yellow; font-weight: 400; background-color: blue; display: inline-block ';
    }

    buttonActive = !buttonActive;
}