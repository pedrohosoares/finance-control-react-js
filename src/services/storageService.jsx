const dataName = 'fi_soares_'

function findKeyById(id) {
    if (!id) return null;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(dataName)) continue;
      try {
        const obj = JSON.parse(localStorage.getItem(key));
        if (obj && obj.id === id) return key;
      } catch {
      }
    }
    return null;
  }

export function storageDate(data){

    const id = data?.id || crypto.randomUUID();
    const value = (data.value.includes(',')) ? data.value+"" : data.value+",00";
    const payload = {
        ...data,
        id,
        value:value
    };
    const newKey = 'fi_soares_'+payload.date+'_'+payload.id;
    const oldKey = findKeyById(id);
    if(oldKey != null){
        localStorage.removeItem(oldKey);
    }
    localStorage.setItem(newKey,JSON.stringify(data));
    return {
        'message':'Sucesso ao salvar!',
        'code':200,
        'data':data
    };
}

export function excludeData(idName){
    localStorage.removeItem(idName);
    return {
        'message':'Sucesso ao Excluir!',
        'code':200
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
                registers.push({...data,key})
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
