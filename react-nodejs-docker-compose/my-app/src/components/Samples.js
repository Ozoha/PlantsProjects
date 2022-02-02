import React from 'react'

export const Samples = ({samples}) => {

    console.log('sample length:::', samples.length)
    if (samples.length === 0) return null

    const SampleRow = (sample,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{sample.firstName}</td>
                  <td>{sample.lastName}</td>
                  <td>{sample.email}</td>
                  <td>{sample.plantName}</td>
                  <td>{sample.date}</td>
                  <td>{sample.setNumber}</td>
                  <td>{sample.plantPhoto}</td>
                  <td>{sample.airTemperator}</td>
                  <td>{sample.googleMapPhoto}</td>
                  <td>{sample.longitude}</td>
                  <td>{sample.latitude}</td>
                  <td>{sample.userInfo}</td>
              </tr>
          )
    }

    const sampleTable = samples.map((sample,index) => SampleRow(sample,index))

    return(
        <div className="container">
            <h2>Samples</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Plant Name</th>
                    <th>Date</th>
                    <th>Set Number</th>
                    <th>Plant Photo</th>
                    <th>Air Temperator</th>
                    <th>Google Map Photo</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                    <th>User Info</th>
                </tr>
                </thead>
                <tbody>
                    {sampleTable}
                </tbody>
            </table>
        </div>
    )
}