interface details {
    id:number,
    name:string,
    mobile:string,
    email:string,
}

const DisplayComp = ({ id,name,mobile,email } : details) => {
    return (
        <div>
            <div>
                Id : 
                <strong> {id}</strong>
            </div>
            <div>
                User Name : 
                <strong> {name}</strong>
            </div>
            <div>
                Email :
                <strong> {email}</strong>
            </div>
            <div>
                Mobile Number :
                <strong> {mobile}</strong>
            </div>
        </div>
    )

}

export default DisplayComp;