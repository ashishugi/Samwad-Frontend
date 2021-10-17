import styled from 'styled-components';

const Wrapper =styled.div`
.main{
    height:100vh;
    width:100vw;
    ${'' /* background:#eeeee4; */}
    background:#d6d6cd;
    display:grid;
    grid-template-columns:.7fr 3fr;
    .left{
        background:white;
        box-shadow:0 0 10px 0 rgba(0,0,0,0.5);
        .following{
            margin:3rem 0;
            text-align:center;
            ${'' /* color:rgba(164,144,144); */}
            color:rgba(108,89,89);
            
        }
    }
    .right{
        ${'' /* position:relative; */}
        ${'' /* background:blue; */}
        ${'' /* padding:1rem 1rem; */}
            .background_profile{
                width:100%;
                height:12rem;
                margin:1rem 0;
                ${'' /* box-shadow:0 0 2px 0 rgba(0,0,0,0.5) */}
                position:relative;
                img{
                    padding:1rem 1rem;
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    object-position:center;
                   
                }
                a{
                    top:-6rem;
                    left:15rem;
                }
                .front_profile{
                   .front{
                    position:absolute;
                    height:10rem;
                    width:10rem;
                    ${'' /* border:2px solid black; */}
                    border-radius:50%;
                    top:8rem;
                    left:5rem;
                   }
                   .about{
                       position:relative;
                       right:-16rem;
                       max-width:5rem;
                       
                   }
                }
            }
            
        
    }
}
`;
export default Wrapper;
