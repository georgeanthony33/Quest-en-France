import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { Link, withRouter } from 'react-router-dom'

const Home = () => {
  const [ site, setSite ] = useState('')
  const [ checkin, setCheckin ] = useState(0)
  const [ checkout, setCheckout ] = useState(0)

  useEffect(() => {
    prefillDates()
  }, [])
  
  const prefillDates = () => {
    const today = new Date()
    const tomorrow = today.setDate(today.getDate() + 1)
    const weekToday = today.setDate(today.getDate() + 6)
    setCheckin(tomorrow)
    setCheckout(weekToday)
  }

  return (
    <body className="has-navbar-fixed-top">
      
      <div className="homepage-top-outer-container">
        <div className="color-overlay"></div>
        <div className="homepage-top-inner-container columns">
          <div className="column is-1"></div>
          <div className="column is-4">

            <form className="homepage-search">

              <h2>Book your dream holiday in France or Portugal with Quest en France</h2>
              <br />

              <div className="field">
                <label class="label">Where</label>
                <div className="control">
                  <input className="input" type="text" name="site"
                  value={site}
                  // onChange={this.handleChange}
                  placeholder="Choose site" />
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label class="label">Check In</label>
                  <div className="control">
                    <DatePicker
                      className="input"
                      selected={checkin}
                      // onChange={this.handleDate}
                      dateFormat="d MMMM yyyy"
                      name="date"
                      required={true}
                    />
                  </div>
                </div>

                <div className="field column is-half">
                  <label class="label">Check Out</label>
                  <div className="control">
                    <DatePicker
                      className="input"
                      selected={checkout}
                      // onChange={this.handleDate}
                      dateFormat="d MMMM yyyy"
                      name="date"
                      required={true}
                    />
                  </div>
                </div>
              </div>

            </form>

          </div>
          <div className="column is-7"></div>
        </div>
      </div>
    </body>
  )
}
  

// class Home extends React.Component {
//   state = {
//     site: '',
//     checkin: '',
//     checkout: '',
//   }

//   componentDidMount() {
//     const today = new Date()
//     const tomorrow = today.setDate(today.getDate() + 1)
//     const weekToday = today.setDate(today.getDate() + 6)
//     this.setState({
//       checkin: tomorrow,
//       checkout: weekToday
//     })
//   }

//   componentDidUpdate() {
//     console.log(this.state.checkin, this.state.checkout)
//   }

//   render() {
//     return (
//       <body className="has-navbar-fixed-top">
        
//         <div className="homepage-top-outer-container">
//           <div className="color-overlay"></div>
//           <div className="homepage-top-inner-container columns">
//             <div className="column is-1"></div>
//             <div className="column is-4">

//               <form className="homepage-search">

//                 <h2>Book your dream holiday in France or Portugal with Quest en France</h2>
//                 <br />

//                 <div className="field">
//                   <label class="label">Where</label>
//                   <div className="control">
//                     <input className="input" type="text" name="site"
//                     value={this.state.site}
//                     onChange={this.handleChange} placeholder="Choose site" />
//                   </div>
//                 </div>

//                 <div className="columns">
//                   <div className="field column is-half">
//                     <label class="label">Check In</label>
//                     <div className="control">
//                       <DatePicker
//                         className="input"
//                         selected={this.state.checkin}
//                         onChange={this.handleDate}
//                         dateFormat="d MMMM yyyy"
//                         name="date"
//                         required={true}
//                       />
//                     </div>
//                   </div>

//                   <div className="field column is-half">
//                     <label class="label">Check Out</label>
//                     <div className="control">
//                       <DatePicker
//                         className="input"
//                         selected={this.state.checkout}
//                         onChange={this.handleDate}
//                         dateFormat="d MMMM yyyy"
//                         name="date"
//                         required={true}
//                       />
//                     </div>
//                   </div>
//                 </div>  

//               </form>

//             </div>
//             <div className="column is-7"></div>
//           </div>
//         </div>
//       </body>
//     )
//   }
// }

export default Home