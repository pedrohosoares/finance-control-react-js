import RenderTable from "./renderTable";

export default function History({data}){
    return <div className="row">
        <div className="col-md-12">
            <table className="table table-responsive table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <RenderTable data={data}></RenderTable>
            </table>
        </div>
    </div>
}