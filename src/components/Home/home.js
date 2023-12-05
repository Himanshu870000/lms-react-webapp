import React from "react";
import { Link } from "react-router-dom";
const {
  BACK_IMAGE,
  LOGO,
  CROSS_ICON,
  HOME_BACK,
} = require("../../utils/imagepath");

export default function Home() {
   
  return (
    <div className="flex flex-row h-screen bg-white-500">
      <div className="flex-1">
        <img
          style={{ height: "100%", width: "100%" }}
          src={BACK_IMAGE}
          alt=""
        />
      </div>
            <div className="flex-1">
            <Link to='/'>
               <img
               src={CROSS_ICON}
               style={{ marginLeft: 'auto', marginRight: '5%', marginTop: '5%' }}
               alt="Cross Icon"
               />
           </Link>
        <div style={{flexDirection: "row",justifyContent: "center",marginLeft: "50%",alignItems: "center",}}>
          <img src={LOGO} style={{ marginRight: "auto" }} />
        </div>
        <div style={{ marginLeft: "40%", marginTop: "5%" }}>
          <img src={HOME_BACK} />
        </div>
        <div style={{marginLeft:'48%', marginTop:'5%'}}>
          <p style={{color:'#000', fontSize:18, fontWeight:'bold'}}>Plastic is not Waste</p>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
               <p style={{ color: '#000', fontSize: 18, fontWeight: 'bold', marginRight: 5 }}>It's an</p>
               <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>Opportunity</p>
          </div>
     </div>
     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5%' }}>
      <Link to='/login' style={{   display: 'flex',justifyContent:'center', alignItems:'center', marginRight: 10, backgroundColor: '#feed42', color: '#000', fontWeight:'bold', marginLeft:'18%' , borderRadius:10 , width:'23%', height:40}}>Login</Link>
      <Link to='/signup' style={{   display: 'flex',justifyContent:'center', alignItems:'center', backgroundColor: '#00a990', color: 'black', width:'23%', borderRadius:10, color:'#fff', fontWeight:'bold', marginLeft:'5%' }}>Register with us</Link>
    </div>
      </div>
    </div>
  );
}
