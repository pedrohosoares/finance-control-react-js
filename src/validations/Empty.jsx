export function Empty(value){
    return (value.length == 0 || value == "")
}

export function VerifyIfEmpty(object,objectValue){
    for (const key in object) {
        const value = objectValue[key];
        if(Empty(value)){
            return {
                'message':`O campo ${key} esta em branco`,
                'code': 500
                    };
        }
    }
}