/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../component/Spinner';

const UserDetail = () => {
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState([]);
    const {id} = useParams();
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users/'+ id)
        .then((res) => {
            setUser(res.data);
            setLoad(false);
        })
    },[]);

    const UserInfo = () => {
        'use strict'
         // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
            }, false)
        })
        console.log('userinfo::::', user);
        return (
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" defaultValue={user.name} required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" defaultValue={user.address.city} required/>
                    <div className="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                    <option value="">Choose...</option>
                    <option>집</option>
                    <option>회사</option>
                    <option>헬스장</option>
ㄴ                     </select>
                    <div className="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>  
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required/>
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
                </form>
        )
    }
    
    return(
        <>
            {load ? <Spinner/> : <div>{UserInfo()}</div>}
        </>   
    )
}
export default UserDetail;