import styled from 'styled-components';

export const TabBarWrapper = styled.div`
width:100%;
height:0.8rem;
position:fixed;
left:0;
bottom:0;
border-top:1px solid #ccc;
background:#fff;
ul{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    li{
        width:100%;
        height:100%;
    }
    a{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    i{
        font-size:.35rem;
        padding:.05rem;
        border-radius: 50%;
    }
    span{
        font-size:.23rem;
    }
    .active{
        color:#c33;
        i{
            color:#fff;
            background:red;
        }
        
    }
}
`