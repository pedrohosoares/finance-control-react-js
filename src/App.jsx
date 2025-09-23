import { useEffect, useState } from "react";
import Header from "./components/Header"
import Forms from "./components/Forms";
import History from "./components/History";
import { listData } from "./services/storageService";
import { listCategories } from "./services/storageCategory";
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalValues from "./components/TotalValues";

export default function App()
{
    const [todayDate,setTodayDate] = useState(new Date().toJSON().split('T')[0]);
    const [futureDate,setFutureDate] = useState(new Date().toJSON().split('T')[0]);
    const [search,setSearch] = useState('');
    
    const [values,setValues] = useState([]);

    const [categories,setCategories] = useState(listCategories());
    const [selectedCategory,setSelectedCategory] = useState('');

    useEffect(()=>{
        const dataSaved = listData(search,todayDate,futureDate,selectedCategory);
        setValues(dataSaved);
    },[todayDate,futureDate,search,selectedCategory]);


    function updateDateSearch(date_start,date_end){
        setTodayDate(date_start);
        setFutureDate(date_end);
    }
    function updateCategorySearch(category)
    {
        setSelectedCategory(category);
    }
    
    return <div className="row justify-content-md-center">
        <div className="col-md-10 p-4">
            <Header></Header>
            <Forms todayDate={todayDate} categories={categories} history={values} updateHistory={setValues}></Forms>
            <hr />
            <TotalValues totalValues={values}></TotalValues>
            <Search 
                categories={categories} 
                setNewDate={updateDateSearch} 
                search={search} 
                setSearch={setSearch} 
                date_start={todayDate} 
                date_end={futureDate}
                setSelectedCategory={updateCategorySearch}
                selectedCategory={selectedCategory}>
            </Search>
            <History data={values}></History>
        </div>
    </div>;    
}