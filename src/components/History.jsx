import RenderTable from "./renderTable";

export default function History({data,setEditValue,excludeItem}){
    return <div className="row">
        <div className="col-md-12 table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Value</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <RenderTable data={data} setEditValue={setEditValue} excludeItem={excludeItem}></RenderTable>
            </table>
        </div>
    </div>
}