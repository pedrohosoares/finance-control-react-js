export function RenderCategories({categories})
{
    return <datalist id="categories">
        {categories.map((value,index)=>(
            <option key={index} value={value}>{value}</option>
        ))}
        </datalist>
}