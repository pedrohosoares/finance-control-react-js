import maskMoney from "./masMoney";

export default function returnTotal(values){
    const newValues = JSON.parse(JSON.stringify(values));
    const in_ = newValues.filter((value)=>{
        return value.type == 'in';
    }).map((value)=>value.value = parseToDecimal(value.value)).reduce((a,b)=>a+b,0);
    const out_ = newValues.filter((value)=>{
        return value.type == 'out';
    }).map((value)=>value.value = parseToDecimal(value.value)).reduce((a,b)=>a+b,0);
   
    const totals = {
        'in':maskMoney(in_),
        'out':maskMoney(out_),
        'finally':maskMoney(in_ - out_)
    };
    return totals;
}

function parseToDecimal(value){
    value = value.replace(/\./g,"").replace(',','.');
    return parseFloat(value);
}