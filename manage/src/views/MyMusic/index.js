import React,{Component,Fragment} from "react";
import Header from '../../components/MyMusic/Header'
import MyMusicMiddle from '../../components/MyMusic/MyMusicMiddle'
import '../../assets/css/all.css'
import '../../assets/css/MyMusic.css'
import { withRouter } from 'react-router-dom'

class MyMusic extends Component{

    render(){
        return(
            <Fragment>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%'}}>
                    <Header></Header>
                    <MyMusicMiddle></MyMusicMiddle>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(MyMusic)

