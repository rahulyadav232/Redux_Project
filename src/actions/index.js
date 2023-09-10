export const incNumber =(num) => {
    return {
        type: "INCREAMENT",
        payload: num
    }
}

export const decNumber =(num) => {
    return {
        type: "DECREAMENT",
        payload: num
    }
}