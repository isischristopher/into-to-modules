const printToDom = (divId, toPrint) => {
    const selevtedDiv = document.getElementById(divId);
    selevtedDiv.innerHTML = toPrint;
};
export default { printToDom };