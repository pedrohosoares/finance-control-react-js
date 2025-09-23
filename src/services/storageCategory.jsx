const dataName = 'fi_soares_category';

export function listCategories(){
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

export function saveCategory(newCategory){
    const categoriesDB = listCategories();
    if(!categoriesDB.includes(newCategory)){
        categoriesDB.push(newCategory);
        localStorage.setItem(dataName,JSON.stringify(categoriesDB));
    }
}