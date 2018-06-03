window.onload = function(){
    let allButtons = document.querySelectorAll(".calcNum");
    let allSym = document.querySelectorAll(".calcSym")
    let calcInput;
    let operator;
    let newNum;
    let mathSym;
    console.log(calcInput)
    allButtons.forEach(function(button){
        button.addEventListener('click', function(e){
            calcInput = document.getElementById("calcInput")
            calcInput.value = calcInput.value + parseInt(e.target.innerHTML);
        });
    });
    allSym.forEach(function(sym){
        sym.addEventListener('click', function(e){            
            operator = this.getAttribute('data-ops')
            switch(operator){
                case 'plus':
                    newNum = calcInput.value
                    calcInput.value = ''
                    mathSym = '+'
                    break;
                case 'minus':
                    newNum = calcInput.value
                    calcInput.value = ''
                    mathSym = '-'
                    break;
                case 'times':
                    newNum = calcInput.value
                    calcInput.value = ''
                    mathSym = '*'
                    break;
                case 'divide':
                    newNum = calcInput.value
                    calcInput.value = ''
                    mathSym = '/'
                    break;
                case 'equals':
                    completeEquation(newNum, mathSym);
                    break
                case 'clear':
                    newNum = '';
                    calcInput.value = '';
                    break
                default:
                    break
            } 
        });
    });
    function completeEquation(newNum, mathSym){
        switch(mathSym){
            case '+':
                calcInput.value = parseFloat(newNum) + parseFloat(calcInput.value);
                break;
            case '-':
                calcInput.value = parseFloat(newNum) - parseFloat(calcInput.value);
                break;
            case '*':
                calcInput.value = parseFloat(newNum) * parseFloat(calcInput.value);
                break;
            case '/':
                if(calcInput.value == 0){
                    alert("You can't divide by ZERO!!")
                    location.reload()
                }
                else{
                    calcInput.value =  parseFloat(newNum) / parseFloat(calcInput.value);
                }
                break;
            default:
                break
        }
    }
}