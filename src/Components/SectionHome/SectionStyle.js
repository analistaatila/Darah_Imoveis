import styled from 'styled-components'



export const HeroContainer =styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
/*     padding: 0 30px; */
    height: 80vh;
    position: relative;
    z-index: 1;
    :before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180degm rgba(0,0,0,0.2) 0% transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232834;   
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    /* padding: 8px 24px; */
    display: flex;
     flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1px; 
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 17px;
        width:220px;
    }
    
`



export const InputVideo1 = styled.input`
    /* box-shadow: -4px 0 4px 0.25rem  rgba(255, 255, 255, 0.5);   */
    
    box-shadow: 4px 8px 40px rgba(255, 255, 255, 0.5); 
    border: 1px solid #fff;
    border-radius: 20px 0 0 20px;
    text-align: center;
    height: 50px;
    z-index: 10;
    color: #000;
    transition: 1s;

    /* background-image: url('https://img.freepik.com/vetores-gratis/localizacao_53876-25530.jpg?size=338&ext=jpg'); */
    /* background-repeat: no-repeat;
    background-size: 23px 23px;
    background-position: left center; */

    &:focus{
        box-shadow: 0 0 4px 0.25rem  rgba(255, 255, 255, 0.5);   
        border: 1;
        outline: none;
    }
`
export const InputVideo2 = styled.input`
    /* box-shadow: 4px 0 4px 0.25rem rgba(255, 255, 255, 0.5); */
    box-shadow: 4px 8px 40px rgba(255, 255, 255, 0.5); 
    border: 1px solid #fff;
    border-radius: 0;
    text-align: center;
    height: 50px;
    z-index: 10;
    color: #000;
    transition: 1s;

    /* background-image: url('https://img.freepik.com/vetores-gratis/localizacao_53876-25530.jpg?size=338&ext=jpg'); */
    /* background-repeat: no-repeat;
    background-size: 23px 23px;
    background-position: left center; */

    &:focus{
        box-shadow: 0 0 4px 0.25rem  rgba(255, 255, 255, 0.5);   
        border: 1;
        outline: none;
    }
`
export const InputContainer = styled.div`
    
    position: relative;
    width: 50vw;
    display:flex;
    flex-wrap: wrap;
   justify-content: space-around;
   align-items:center;

   
`


export const InputDiv = styled.div`
   
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items:center;
    

    
`

export const Button = styled.button`
    border-radius: 20px;
    background: #01BF71 ;
    white-space: nowrap;
    height: 50px;
    width: 40px;
    padding-right: 15px;
    border-radius: 0px 20px 20px 0;
    /* box-shadow: 4px 0 4px 0.25rem rgba(56, 242, 190, 0.5); */
    color: #fff;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    
    &:hover{
        transition: all 0.5s ease-in-out;
        background:  #70DBB8;
        box-shadow: 4px 0 4px 0.25rem rgba(56, 242, 190, 0.5);
    }
    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
    }
`