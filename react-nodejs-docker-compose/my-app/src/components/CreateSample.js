
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CreateSample = ({onChangeForm, createSample }) => {
    const [value, onChange] = useState(new Date());

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Sample</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Plant Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="plantname" id="plantname" aria-describedby="emailHelp" placeholder="Plant Name" />
                        </div>
                        {/*<div className="form-group col-md-6">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Date</label>*/}
                        {/*    <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="date" id="date" aria-describedby="emailHelp" placeholder="Date" />*/}
                        {/*</div>*/}
                        <div>
                            <Calendar onChangeForm={onChange} value={value} name="date" id="date" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Set Number</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="setnumber" id="setnumber" aria-describedby="emailHelp" placeholder="Set Number" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Plant Photo</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="plantphoto" id="plantphoto" aria-describedby="emailHelp" placeholder="Plant Photo" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Air Temperator</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="airtemperator" id="airtemperator" aria-describedby="emailHelp" placeholder="Air Temperator" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Google Map Photo</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="googlemapphoto" id="googlemapphoto" aria-describedby="emailHelp" placeholder="Google Map Photo" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Longitude</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="longitude" id="longitude" aria-describedby="emailHelp" placeholder="Longitude" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Latitude</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="latitude" id="latitude" aria-describedby="emailHelp" placeholder="Latitude" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">User Information</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="userinfo" id="userinfo" aria-describedby="emailHelp" placeholder="..." />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createSample()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateSample