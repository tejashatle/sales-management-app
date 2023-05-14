import { Component } from "react";
import '../dashboard.css';
import { Icon } from "@iconify/react";
// import { useTable } from "react-table";
import Table from 'react-bootstrap/Table';
import ProgressBarComponent from "../functions/progressbar";


class Dashboard extends Component{


    render(){

        const tableData = [{  
            id: 1,
            name: 'Ayaan',  
            age: 26  
            },{  
             id: 2,
             name: 'Ahana',  
             age: 22  
             },{ 
                id: 3, 
             name: 'Peter',  
             age: 40      
             },{  
                id: 4,
             name: 'Virat',  
             age: 30  
             }]  

        const columns = [{  
            Header: 'Name',  
            accessor: 'name'  
           },{  
           Header: 'Age',  
           accessor: 'age'  
           }]  
        return(
            <div className="dashboard" style={{ fontFamily: "Montserrat, sans-serif"}}>
                <div className="sales-report" style={{display: "flex", flexDirection: "column", width: "500px", 
                        height: "250px", backgroundColor: "#ffffff", padding: "5px 20px", borderRadius: "10px", margin: "35px 25px"}}>
                        <div style={{ display: "flex", flexDirection: "row", color: "#545454", justifyContent: "space-between"}}>
                            <div className="sale-header" style={{ marginRight: "225px", marginBottom: "30px"}}>
                                <p style={{ fontSize: "17px", fontWeight: "500"}}>Today's Sale</p>
                                <p style={{ marginTop: "-20px", fontSize: "12px", color: "#686868"}}>Sales summary</p>
                            </div>
                            <div className="export-btn" style={{marginTop: "15px" }}>
                                <Icon icon="clarity:export-line" style={{ position: "absolute", fontSize: "24px", padding: "5px 20px"}}/><button type="submit" style={{ height: "35px", width: "120px", border: "1px solid #545454", color: "#545454", background: "white",
                                borderRadius: "10px", paddingLeft: "20px", fontFamily: "inherit"}}>Export</button>
                            </div>
                        </div>
                    <div className="cards" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

                        {/* Total Sales */}
                        <div style={{ height: "135px", width: "120px", backgroundColor: "rgb(255, 167, 141, 67%)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#F24E1E"}}><Icon icon="uil:chart-growth" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}><Icon icon="clarity:rupee-line" style={{ fontSize: "25px"}}/> 1K</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>Total Sales</div>
                                <div style={{ fontSize: "11px", color: "#4D82E9"}}>8% more yesterday</div>
                            </div>
                        </div>

                        {/* Total Orders */}
                        <div style={{ height: "135px", width: "120px", backgroundColor: "rgb(255, 35, 193, 28%)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#FF23C1"}}><Icon icon="ph:shopping-cart" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}>300</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>Total Orders</div>
                                <div style={{ fontSize: "11px", color: "#4D82E9"}}>5% more yesterday</div>
                            </div>
                        </div>

                        {/* New Customers */}
                        <div style={{ height: "135px", width: "120px", backgroundColor: "rgb(151, 71, 255, 42%)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "inherit"}}>
                            <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#9747FF"}}><Icon icon="mdi:user-circle-outline" style={{ padding: "10px", fontSize: "20px", color: "white"}}/></div>
                            <div style={{ fontWeight: "600", alignItems: "center", display: "flex", fontSize: "20px"}}>10</div>
                            <div style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px"}}>
                                <div style={{ fontSize: "14px", fontWeight: "600"}}>New Customers</div>
                                <div style={{ fontSize: "11px", color: "#4D82E9"}}>5% more yesterday</div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="total-stock" style={{display: "flex", flexDirection: "column", width: "500px", 
                        height: "250px", backgroundColor: "#ffffff", padding: "5px 20px", borderRadius: "10px", margin: "0px 0px 0px 25px"}}>
                    <div className="header" style={{ marginRight: "225px", marginBottom: "30px", color: "#545454"}}>
                        <p style={{ fontSize: "17px", fontWeight: "500"}}>Total Stock</p>
                        <p style={{ marginTop: "-20px", fontSize: "12px", color: "#686868"}}>Total stock left in your bucket</p>
                    </div>
                    <div className="stock-left-table">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name/Stock Left</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(data =>
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td style={{ width: "100%"}}><ProgressBarComponent stockleft={data.age}/></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard