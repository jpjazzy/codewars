function abbrevName(name){
    let testName = name.split(' ');
    const firstInit = testName[0].charAt(0).toUpperCase();
    const secondInit = testName[1].charAt(0).toUpperCase();
    return `${firstInit}.${secondInit}`;
}
