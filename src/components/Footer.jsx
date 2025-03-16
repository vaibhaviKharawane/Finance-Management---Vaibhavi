
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : "rgb(232, 227, 227)", textAlign: 'center', position:'fixed', width: '100%',height : '85px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                       WELCOME TO PERSONAL FINANACE MANAGEMENT
                    </h5>
            </div> 

            <div className="text-center pt-1">
                <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                <i className="bi bi-globe mx-2" style={{fontSize : "20px"}}></i>
                <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                
            </div>
            
        </div>
       
    )
}
