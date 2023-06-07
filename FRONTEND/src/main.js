import { useEffect, useContext } from 'react'
import TickerContext from "./Context/context"
import Table from './Table';



const Main = () => {

  const context = useContext(TickerContext);
  const { getTickers, ticker } = context;
  // eslint-disable-next-line
  let index = 1;

  useEffect(() => {
    getTickers();
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      <div className='Nav m-auto' style={{ padding: "30px", display: "flex" }}>
        <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="" style={{width:"22%",height:"9%",zIndex:"999"}}/>
        <div className="d-flex justify-content-center gap-3 mt-5 m-auto" style={{paddingRight: "19%"}}>
        <div className="btn-group">
          <button
            className="btn btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{borderRadius:"10px",width:"75px",height:"40px",backgroundColor:"#545B62",color:"white"}}
          >
            INR
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">INR</li>
          </ul>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{borderRadius:"10px",width:"75px",height:"40px",backgroundColor:"#545B62",color:"white"}}
          >
            BTC
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">{ticker.map((tickerItem) => (
    <div className='text-uppercase' key={tickerItem._id}>{tickerItem.base_unit}</div>
  ))}</li>
          </ul>
        </div>
        <div>
          <button
            className="btn-sm "
            type="button"
            style={{borderRadius:"10px",width:"77px",height:"40px",backgroundColor:"#545B62",color:"white"}}
          >
            BUY BTC
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Hello</li>
          </ul>
        </div>
        </div>
      </div>
      <div className='position-absolute start-50 translate-middle mt-3'><h3 style={{color:"grey",fontWeight:"normal"}}>Best Price to Trade</h3></div>
      <div className='d-flex justify-content-around mt-5' style={{color:"white"}}>
        <div>
        <h2 style={{ color: "#5DC7C2",fontWeight:"normal"}}>0.93 %</h2>
        <h5 style={{color:"grey"}}>5 Mins</h5>
        </div>
        <div>
        <h2 style={{ color: "#5DC7C2",fontWeight:"normal"}}>1.43 %</h2>
        <h5 style={{color:"grey"}}>1 HOUR</h5>
        </div>
        <div>
        <h1 style={{ color: "white",fontWeight:"normal"}}>₹ 87,39,558</h1>
        <h5 style={{color:"grey"}} className='fw-normal'>Average BTC/INR net price including commission</h5>
        </div>
        <div>
        <h2 style={{ color: "#5DC7C2",fontWeight:"normal"}}>5.93 %</h2>
        <h5 style={{color:"grey"}}>1 DAY</h5>
        </div>
        <div>
        <h2 style={{ color: "#5DC7C2",fontWeight:"normal"}}>65.93 %</h2>
        <h5 style={{color:"grey"}}>7 DAYS</h5>
        </div>
      </div>
      <table style={{ color: "white", backgroundColor: "#191D28", width: "97%" }} className='table mt-5 ms-3 me-3'>

<tbody>
  <tr style={{ color: "grey",textDecoration:"none" }} className='fs-4  d-flex justify-content-between ps-2 pe-3'>
    <th>#</th>
    <th>Platform</th>
    <th>Last Traded Price</th>
    <th>Buy / Sell Price</th>
    <th>Difference</th>
    <th>Savings</th>
  </tr>
</tbody>
</table>

      {ticker.map((tickerItem,index) => {
                return <Table ticker={tickerItem} index={index} key={tickerItem}/>
            })}
      
    </div>
  )
}

export default Main;