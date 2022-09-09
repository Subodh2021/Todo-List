import * as React from 'react'; 

let Name = "Subodh";
const Datee = () => {
    if (true)
    {
        Name="Patil";
    }
    else{
       
    }
    // if else chala mgr return k bahar
    return(
        <div>
        <p>hello</p>
        <p>Random number is Max is 100 and Min is 15 =====   <b>{Math.floor(Math.random() * (100 - 15 + 1)) + 15} </b></p>
        <p>current Date is {new Date().toLocaleDateString()}</p>
        <p>current time is {new Date().toLocaleTimeString()}</p>  
        <p contentEditable="true"> my Name is {Name} </p>  
        <img src='https://picsum.photos/seed/picsum/400/300' alt='errro h image show krne me '/>
        <br/>
    {/* alt isliye dete h kyuki agr image show nhi hua to kya dikhega  nhi diya to warning aayegi  */}
    <p>Niche wali pic pe click karoge to naye tumko google.com pe le jayega </p>
    <a href='https://google.com' target="_b">
    <img src='https://picsum.photos/400/300' alt='image nhi dikha'/>
    </a>
    </div>
)
}
export default Datee;