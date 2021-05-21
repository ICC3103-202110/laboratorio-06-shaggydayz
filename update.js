function update(yN, number, t1, t2, model){
    if (t1 === 'Celsius' && t2 === 'Fahrenheit')
        CF = number*1.8 + 32
    else if (t1 === 'Celsius' && t2 === 'Kelvin')
        CF = Number(number) + 273.15
    else if (t1 === 'Fahrenheit' && t2 === 'Celsius')
        CF = (number - 32)/1.8
    else if (t1 === 'Fahrenheit' && t2 === 'Kelvin')
        CF = (number + 459.67)*(5/9)
    else if (t1 === 'Kelvin' && t2 === 'Celsius')
        CF = Number(number) - 273.15
    else if (t1 === 'Kelvin' && t2 === 'Fahrenheit')
        CF = number*(9/5) - 459.67
    else CF = number
    if (yN === 'Y')
        return{
            ...model,
            leftValue: number,
            leftUnite: t1,
            rightValue: CF,
            rightUnite: t2
        }
    else
    return{
        ...model,
        leftValue: CF,
        leftUnite: t2,
        rightValue: number,
        rightUnite: t1
    }
            

}
    

module.exports = {
    update
}