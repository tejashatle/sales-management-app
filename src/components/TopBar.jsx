import { Component } from "react";
import { Icon } from "@iconify/react";
import logo from '../logo.svg';

class TopBar extends Component{

    constructor(props){
        super(props)

        let tit = props.title
        // tit.replace(/[^\w\s]/gi, "");

        this.state = {
            Title: this.props.title,
        }
        console.log("Title",this.props.title)
    }

    render(){
        return (
            <div className="top-bar">
                <div className="navbar-title">
                    {this.state.Title}
                </div>
                <div className="search-box">
                    {/* <Icon icon="bi:search"/>*/} <input type="text" placeholder="Search here..."></input> 
                </div>
                <div className="notifications">
                    <Icon icon="clarity:bell-outline-badged" color="#F24E1E"/>
                </div>
                <div className="admin">
                    <div className="profile-pic">
                        <img src={logo} style={{ height: "25%", width: "25%"}}></img>
                    </div>
                    <div className="name-role">
                        <span>Tejas</span>
                        <span>Admin</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar