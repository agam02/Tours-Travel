// import React, { useState ,useContext} from "react";
// import "./booking.css";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

// import { useNavigate } from "react-router-dom";

// import { AuthContext } from "./../../context/AuthContext";
// import { BASE_URL } from "./../../utils/config";
// const Booking = ({ tour, avgRating }) => {
//   const { price, reviews,title } = tour;
// const navigate = useNavigate();

// const {user} = useContext(AuthContext)

//   const [booking, setBooking] = useState({
//     userId: user && user._id,
//     userEmail: user && user.email,
//     fullName: "",
//     tourName:title,
//     phone: "",
//     guestSize: 1,
//     bookAt: "",
//   });

//   const handleChange = (e) => {
//     setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const serviceFee = 10;
//   const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

//   //Send data to to server

//   const handlerClick = async (e) => {
//     e.preventDefault();
//     console.log(booking);
  
//     try {
//       if (!user || user === undefined || user === null) {
//         return alert('Please sign in');
//       }
  
//       const res = await fetch(`${BASE_URL}/booking`, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json', // Fix here
//         },
//         credentials: 'include',
//         body: JSON.stringify(booking),
//       });
  
//       const result = await res.json();
  
//       if (!res.ok) {
//         return alert(result.message);
//       }
  
//       navigate('/thank-you');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="booking">
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>
//         ₹{price} <span>/Per person</span>
//         </h3>
//         <span className="tour__rating d-flex align-items-center">
//           <i class="ri-star-fill"></i>
//           {avgRating === 0 ? null : avgRating} ({reviews?.length})
//         </span>
//       </div>

//       {/* ============ booking form start================= */}

//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className="booking__info-form" onSubmit={handlerClick}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullName"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest"
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//       </div>

//       {/* ============ booking form end================= */}

//       {/* =========booking_bottom start========== */}

//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className="border-0 px-0">
//             <h5 className="d-flex align-items-center gap-1">
//               ₹{price} <i class="ri-close-line"></i>1 person
//             </h5>
//             <span>₹{price}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0">
//             <h5>Service Charge</h5>
//             <span>₹{serviceFee}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0 total">
//             <h5>Total</h5>
//             <span>₹{totalAmount}</span>
//           </ListGroupItem>
//         </ListGroup>
//         <Button className="btn primary__btn w-100 mt-4" onClick={handlerClick}>Book Now</Button>
//       </div>

//       {/* =========booking_bottom end========== */}
//     </div>
//   );
// };

// export default Booking;







import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "./../../context/AuthContext";
import { BASE_URL } from "./../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName: "",
    tourName: title,
    phone: "",
    guestSize: 1,
    bookAt: "",

  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handlerClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please sign in');
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      // Assuming the server responds with the booking ID
      const { bookingId } = result;

      // Trigger the download of the ticket
      const downloadResponse = await fetch(`${BASE_URL}/ticket/${bookingId}`);
      const blob = await downloadResponse.blob();

      // Create a temporary link element to trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ticket_${bookingId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Navigate to the thank you page
      navigate('/thank-you');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ₹{price} <span>/Per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handlerClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Booking Date"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guests"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ₹{price} <i className="ri-close-line"></i>1 person
            </h5>
            <span>₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>₹{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>₹{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handlerClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
