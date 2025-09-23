export default function Erros({objectMessage}){
    if(objectMessage == null){
        return;
    }
    return <div className="col-12">
              <div className={`alert alert-dismissible fade show ${objectMessage?.code === 200 ? "alert-success" : "alert-danger"} `} role="alert">
                    {objectMessage.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
}