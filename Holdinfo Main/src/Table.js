import React from 'react'

const Table = (props) => {

  return (
    <div>
      <table style={{ color: "white", backgroundColor: "#191D28", width: "97%" }} className='table mt-auto ms-1 me-1'>
      <tbody>
          <tr style={{ color: "white", backgroundColor: "#33383E", border: "2px solid #191D28",borderRadius:"30px"}} className='fs-4 fw-bold d-flex justify-content-between ps-2 pe-3' key={props.ticker._id}>
            <td>{props.index+1}</td>
            <td> {props.ticker.name}</td>
            <td>{props.ticker.last}</td>
            <td>{props.ticker.buy}/ {props.ticker.sell}</td>
            <td>{props.index%2===0 ? "-3.32 %" : "15.66 %"}</td>
            <td>{props.index%2===0 ? "▼ ₹ 81,760" : "▲ ₹ 3,73,480"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table