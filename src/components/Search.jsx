import { RenderCategories } from "./RenderCategories";

export default function Search({
    date_start,
    date_end,
    search,
    setSearch,
    setNewDate,
    categories,
    setSelectedCategory,
    selectedCategory
}){
    return <div className="row">
        <label className="col-md-3">
            <span>Search by term:</span><br />
            <input className="form-control" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="search" placeholder="Search..." />
        </label>
        <label className="col-md-3">
            <span>Category:</span><br />
            <input list="categories" className="form-control" type="text" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)} name="search" placeholder="Search..." />
            <RenderCategories categories={categories}></RenderCategories>
        </label>
        <label className="col-md-3">
            <span>Date Start</span><br />
            <input className="form-control" type="date" value={date_start} onChange={(e) => setNewDate(e.target.value, date_end)} name="date_start" id="" />
        </label>
        <label className="col-md-3">
            <span>Date End</span><br />
            <input className="form-control" type="date" value={date_end} onChange={(e) => setNewDate(date_start, e.target.value)} name="date_end" id="" />
        </label>
    </div>
}