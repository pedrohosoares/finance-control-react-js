export function Empty(value){
    return (value.length == 0 || value == "")
}

export function VerifyIfEmpty(object,objectValue){
    for (const key in object) {
        const value = objectValue[key];
        if(key !== 'id' && Empty(value)){
            return {
                'message':`The field ${key} is empty`,
                'code': 500
                    };
        }
    }
}