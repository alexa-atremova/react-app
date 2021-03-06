export const requiredField = value =>{
    if(value){
        return undefined;
    }
    return "undefined"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}

