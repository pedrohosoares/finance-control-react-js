const dataName = 'fi_soares_'

export function storageDate(data){
    data.id = crypto.randomUUID();
    data.value = (data.value.includes(',')) ? data.value+"" : data.value+",00"; 
    localStorage.setItem('fi_soares_'+data.date+'_'+data.id,JSON.stringify(data));
    return {
        'message':'Sucesso ao salvar!',
        'code':200,
        'data':data
    };
}

export function listData(search,dateStart,dateEnd,selectedCategory)
{
    let registers = [];
    dateStart = new Date(dateStart).getTime();
    dateEnd = new Date(dateEnd).getTime();
    
    for (const key in localStorage) {
        if(key.includes(dataName)){
            const data = JSON.parse(localStorage.getItem(key));
            const dateCurrent = new Date(data.date).getTime();
            if(dateCurrent >= dateStart && dateCurrent <= dateEnd){
                registers.push(data)
            }
        }
    }
    registers = registers.filter((object)=>{
        if(
            object.description.toLowerCase().includes(search) &&
            object.category.toLowerCase().includes(selectedCategory)){
            return object;
        }
    })
    return registers;
}
