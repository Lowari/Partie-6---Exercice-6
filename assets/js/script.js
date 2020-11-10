const listResult = document.createElement('ul');

listResult.setAttribute('class', 'text-center container list-group col-3 mt-5');
document.body.appendChild(listResult);

let firstNumber = 10;
let secondNumber = 2;

while ((firstNumber/secondNumber) > 1) {
    let result = firstNumber / secondNumber;
    firstNumber = result;
    let finalResult = document.createElement("li");
    finalResult.setAttribute('class', 'list-group-item font-weight-bold');
    finalResult.textContent = result;
    listResult.appendChild(finalResult);
};