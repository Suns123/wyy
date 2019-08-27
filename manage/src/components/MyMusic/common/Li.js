import React,{Component} from 'react'

export default class Li extends Component{
    render() {
        let message=this.props.message||{}
        return(
            <li className={" Ul-Li"} style={{paddingTop:"0.2rem"}}>
                <span className={message.className} 
                style={{
                    background:message.background,
                    display:"inline-block",
                    color:message.color,
                    width:'0.5rem',
                    lineHeight:'0.5rem',
                    textAlign:"center",
                    fontSize:'0.25rem',
                    borderRadius:'50%'
                }}></span>
                <span style={{
                    fontSize:"0.2rem",
                    boxSizing:"border-box",
                    paddingTop:"0.2rem",
                    display:"block"
                }}>
                {message.name}
                </span>
            </li>
        )
    }
}