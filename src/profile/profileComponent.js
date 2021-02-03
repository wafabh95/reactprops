import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const styleObject={color : "red",textAlign : 'center' , fontFamily:'TimesNewRoman',  textTransform: 'capitalize'}
  const styleText={border: '1px solid'}
  const { age = "25" } = props;
 return (
   
   <>
<div class="container">
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm back">
    <h3 style={styleObject}>- {props.name} -</h3> 
    <h3>{props.prof}</h3> 
    <h1>{props.children}</h1>
     <h4 style={styleText} className="rounded">{props.bioDescription}</h4>
    
     
     <button type="button" className="btn btn-secondary" onClick={() => props.alertMyInput(`My name is ${props.name}`)}>Profile Name</button>
     <h1>My age is : {age} </h1>
    </div>
    <div class="col-sm"></div>
  </div>
</div>


   
   </>
 );

 };
 Profile.propTypes = {
  name: PropTypes.string,
  bioDescription: PropTypes.string,
  prof: PropTypes.string,
  
 };
export default Profile;