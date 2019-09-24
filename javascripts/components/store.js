
const printToDom = (divId, toPrint) => {
    const selevtedDiv = document.getElementById(divId);
    selevtedDiv.innerHTML = toPrint;
}

const makeStore = () => {
    const domString = 'hi new store';
    printToDom('store-container', domString);
}; 

//export default { makeStore: makeStore };
export default { makeStore };