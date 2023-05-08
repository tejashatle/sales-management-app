import { Component } from "react";
import '../dashboard.css';
import { Icon } from "@iconify/react";


class Dashboard extends Component{


    render(){

        const style ={
           
        }
        return(
            <div className="dashboard" style={{ fontFamily: "Montserrat, sans-serif"}}>
                <div className="sales-report" style={{display: "flex", flexDirection: "column", width: "500px", 
                        height: "250px", backgroundColor: "#ffffff", padding: "5px 20px", borderRadius: "10px", margin: "35px 25px"}}>
                        <div style={{ display: "flex", flexDirection: "row", color: "#545454"}}>
                            <div className="sale-header" style={{ marginRight: "225px"}}>
                                <p style={{ fontSize: "25px", fontWeight: "500"}}>Today's Sale</p>
                                <p style={{ marginTop: "-25px", fontSize: "15px", color: "#686868"}}>Sales summary</p>
                            </div>
                            <div className="export-btn" style={{marginTop: "30px" }}>
                                <Icon icon="clarity:export-line" style={{ position: "absolute", fontSize: "24px", padding: "5px 20px"}}/><button type="submit" style={{ height: "35px", width: "120px", border: "1px solid #545454", color: "#545454", background: "white",
                                borderRadius: "10px", paddingLeft: "20px", fontFamily: "inherit"}}>Export</button>
                            </div>
                        </div>
                    <div className="cards" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

                        {/* Total Sales */}
                        <div style={{ height: "135px", width: "130px", backgroundColor: "#FFA78D", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#F24E1E"}}><Icon icon="uil:chart-growth" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}><Icon icon="clarity:rupee-line" style={{ fontSize: "25px"}}/> 1K</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>Total Sales</div>
                                <div style={{ fontSize: "12px", color: "#4D82E9"}}>8% more yesterday</div>
                            </div>
                        </div>

                        {/* Total Orders */}
                        <div style={{ height: "135px", width: "130px", backgroundColor: "#FFA78D", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#F24E1E"}}><Icon icon="uil:chart-growth" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}><Icon icon="clarity:rupee-line" style={{ fontSize: "25px"}}/> 1K</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>Total Orders</div>
                                <div style={{ fontSize: "12px", color: "#4D82E9"}}>5% more yesterday</div>
                            </div>
                        </div>

                        {/* New Customers */}
                        <div style={{ height: "135px", width: "130px", backgroundColor: "#FFA78D", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#F24E1E"}}><Icon icon="uil:chart-growth" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}><Icon icon="clarity:rupee-line" style={{ fontSize: "25px"}}/> 1K</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>New Customers</div>
                                <div style={{ fontSize: "12px", color: "#4D82E9"}}>5% more yesterday</div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Dashboard