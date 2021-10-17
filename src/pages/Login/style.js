import styled from "styled-components";
const Wrapper = styled.div`
 

.main{
height:100vh;
width:100vw;
background:#ABB8C5;  
display:flex;
justify-content:center;
align-items:center;

}
.center{
    overflow:hidden;
    height:100vh;
    width:100vw;
    background:#fff;
    box-shadow:0 0 20px rgba(0,0,0.8);
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr))
}
.left{
    height:100%;
    background:#fff;
    display:flex;
    justify-content:center;
    .left-item{
       height:100%;
       flex:1 1 100;
       padding:2rem 2rem 0 2rem;
       color:rgba(164,144,144);
       ${'' /* font-weight:200; */}
       font-family:nexa;

    .top p{
        margin-top:2rem;
        font-size:1rem;
        font-weight:700;
        font-family:nexa;
    }
    .middle{
        
        margin-top:1rem;
        width:100%;
        .heading{
            color:rgba(108,89,89);
           padding: 20px 5px 0px 0px;
            p{
                font-size:1rem;
                padding-top:.9rem;
            }
             }
             .input-frm{
                 margin-top:20px;
             }
       .horizontal-line{
           display:flex;
           flex-direction:row;
           width:100%;
           margin:4rem 0;
           color:gray;
           .first-line{
               width:40%
           }
           .or{
               
               margin:-.4rem 0 .9rem 0rem;
               align-self:flex-start;
               font-size:.8rem;
               min-width:8rem;
               padding-left:.5rem;
           }
           .last-line{
               width:40%;
           }
       }

        }
      .bottom{
         margin-top:-1.2rem;
         display:flex;
         justify-content:space-between; 
         flex-wrap:wrap;
      }
}
   
}
    

.right{
    width:100%;
    height:100%;
    background-color:#d7daeb;
    img{
        margin-top:0;
        width:100%;
       ${'' /* height:100%; */}
    }
}
@media only screen and (min-device-width:481px) and (max-device-width:1024px){
.center{
    grid-template-columns:100%;
}
.right, .right img{
    display:none;
}

}
@media only screen and (max-device-width:480px){
    .center{
        grid-template-columns:100%;
        }
        .left{
            width:100%;
        }
     
     .right,.right img {
         display:none;
     }
}
@media only screen and (max-device-width:340px){
    .bottom{
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .textfield{
        margin-top:.2rem;
    }
}
}
`;
export default Wrapper;