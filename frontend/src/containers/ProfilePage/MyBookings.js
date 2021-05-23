import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "../../components/SearchCard/SearchCard";

const MyBookings = (props) => {
  const { userData } = props;
  const { bookings } = userData;

  return (
    <div id="MyBookings">
      <h3 className="title is-3">My Bookings</h3>
      {bookings.length === 0 && <p>You currently have no bookings</p>}
      {bookings.length !== 0 &&
        bookings.map((booking, index) => {
          const { id: bookingId, end_date, home, price, start_date } = booking;
          return (
            <SearchCard
              booking={booking}
              key={index}
              home={home}
              checkin={start_date}
              checkout={end_date}
              totalPrice={price}
              bookingId={bookingId}
              currentPage="MyBookings"
            />
            // <Link
            //   key={index}
            //   to={{
            //     pathname: "/",
            //     state: { booking_date, end_date, home, price, start_date },
            //   }}
            // >
            //   <div className="outer-container">
            //     <h4 className="title is-4">
            //       {home.home_type}, {home.site.name}, {home.site.country}
            //     </h4>
            //     <p>
            //       {start_date} to {end_date}
            //     </p>
            //     <p>£{price}</p>
            //   </div>
            // </Link>
          );
        })}
    </div>
  );
};

export default MyBookings;
