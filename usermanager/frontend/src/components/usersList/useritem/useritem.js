import React from "react";


class UserItem extends React.Component{
    state = {
        id: this.props.id,
        name: this.props.name,
        email: this.props.email,
        message: this.props.message,
        created_at: this.props.created_at
    }
    render(){
        const {id, name, email, message, created_at} = this.state;
        // console.log("singleUserState => ", this.state)
        //console.log(this.props)
        return(
            <tbody >
            <tr className = "priority-200" >
            <td className = "name" > {id} </td>  
            <td className = "clicks" > {name} </td>  
            <td className = "priority" >
            <i className = "fas fa-circle" ></i> {email}  
            </td> 
            <td className = "impressions" > {message} </td>  
            <td className = "delete" >
            <button className = "delete-btn" onclick={this.props.onDeleteItem}>
            <i className = "fas fa-trash-alt"
            title = "delete row" > </i>  
            </button > 
            </td>  
            </tr > 
            </tbody> 
        )
    }
}

export default UserItem;