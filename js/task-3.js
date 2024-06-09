function getElementWidth(content, padding, border) {
    const one = Number.parseFloat(content);
    const two = Number.parseFloat(padding);
    const three = Number.parseFloat(border);
    const tWidth = one + (two * 2) + (three * 2);
    return tWidth
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200