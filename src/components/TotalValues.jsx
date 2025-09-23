import returnTotal from "../helpers/SumTotalValues";

export default function TotalValues({totalValues}){
    const total = returnTotal(totalValues);
    return <div>
        <div>
            <label className="small col-md-4 col-12">
                <strong>Total In: </strong><span>R${total.in}</span>
            </label>
            <label className="small col-md-4 col-12">
                <strong>Total Out: </strong><span>R${total.out}</span>
            </label>
            <label className="small col-md-4 col-12">
                <strong>Finally: </strong><span>R${total.finally}</span>
            </label>
        </div>
        <hr />
    </div>
}