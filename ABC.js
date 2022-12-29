// import { useFormik, } from "formik";
// import { useState } from "react";
// import { NavItem } from "react-bootstrap";
// import { First } from "react-bootstrap/esm/PageItem";

// const initialValues = {
// };
// function Register() {



//   const { values, handleBlur, handleChange, handleSubmit } = useFormik({

//     initialValues: initialValues,


//     onSubmit: (values) => {
//       console.log(values)

//     }
//   })
// function loginHandle(e)
// {

// }



// return (
//   <div className='container3'>

//     <form onSubmit={handleSubmit}>
//       <div className="form-row">

//         <div className="form col-md-6">
//           <label className='input-lable'>FirstName</label>
//           <input type="text" autoComplete='off' name="FirstName" 

//             />
//         </div>
//         <div className="form col-md-6">
//           <label className='input-lable'>LastName</label>
//           <input type="text" autoComplete='off' name="lastName"

//              />
//         </div>
//       </div>
//       <div className="form">
//         <label >Email</label>
//         <input type="email" className="form-control input-lable" autoComplete='off' name="Email" 

//            />
//       </div>

//       <div className="form-row">
//         <div className="form col-md-6">
//           <label className='input-lable'>Phone</label>
//           <input type=" number " autoComplete="off" name="phone"

//              />
//         </div>

//         <div className="form col-md-6">
//           <label className='input-lable'>Website</label>
//           <input type="text" autoComplete='off' name="Website" 

//              />

//         </div></div>
//       <div className="form-row">
//         <div className="form col-md-6">
//           <label className='input-lable'>Password</label>
//           <input type="Password" autoComplete="off" name="Password" 

//             />
//         </div>

//         <div className="form col-md-6">
//           <label className='input-lable'>Confirm_Password</label>
//           <input type="Confirm_Password" autoComplete="off" name="Confirm_Password"

//             />
//         </div>
//       </div>



//       <button type="submit" className="btn " >Register</button>
//     </form>
//   </div>
// )
// }

// export default Register;


import { useState } from "react";
import ReactDOM from 'react-dom/client';

export default function MyForm() {
  const [email, setEmail] = useState("");
  const[password,setPassword]=useState('');

  const loginSubmit = (e) => {
    e.preventDefault();

    console.log([email,password])
  }

  return (
               <div className="box2">
                <form onClick={loginSubmit}>
                  <lable>Email:</lable><br></br>
                <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br></br>
                <lable>Password:</lable><br></br>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <button className="button">login</button>
                </form>
               </div>
  )
}
