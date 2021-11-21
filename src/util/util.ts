export function calcCelsisus(temp:number){
        const celsius = (temp - 273.15).toFixed(2);
        return  celsius
    }

export function getCurrentDate(separator='' , index : number){

let newDate = new Date()
let date = newDate.getDate() + index;
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}