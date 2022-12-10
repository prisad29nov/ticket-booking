import Seat from '../Seat/Seat';
import UserDetails from '../UserDetails/UserDetails';
import styles from './booking.module.css';
import { useState } from 'react';
import axios from 'axios';

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];
const Booking = () => {
  const [seat, setSeat] = useState([]);
  const [bookedTicket, setBookedTicket] = useState([]);

  const getSeats = async () => {
    const res = await axios.get('http://localhost:8080/getticket');
    const res1 = res.data.data[0];
    return res1;
  };

  const unBookedLogic = (unbooked) => {
    const seats = seat;
    const notBooked = [];
    for (let i = 0; i < unbooked.length; i++) {
      if (!seats.includes(+unbooked[i])) {
        notBooked.push(unbooked[i]);
      }
    }
    return notBooked;
  };

  const bookedLogic = (bookedArr) => {
    function toNumber(value) {
      return Number(value);
    }
    const booked = bookedArr.map(toNumber);
    const seats = seat;
    const newBooked = [];
    for (let i = 0; i < seats.length; i++) {
      if (!booked.includes(seats[i])) {
        newBooked.push(seats[i]);
      }
    }
    return [...booked, ...newBooked];
  };

  const updateSeats = async () => {
    const seatData = await getSeats();
    let preUnbooked = seatData.unbooked;
    const prevBooked = seatData.booked;
    const seats = [...seat];
    const unbooked = unBookedLogic(preUnbooked);
    const booked = bookedLogic(prevBooked);
    const available = unbooked.length;
    const data = { total: 40, available, booked, unbooked };
    const res = await axios.patch('http://localhost:8080/updateticket', data);
    const updatedSeats = res.data.data;
    return updatedSeats;
  };

  const statusHandler1 = (e) => {
    const seats = seat;
    seats.push(JSON.parse(e.target.value));
    setSeat(seats);
  };

  const seats = arr.map((el, i) => {
    return i % 4 === 0 ? (
      <Seat
        booked={updateSeats()}
        statusHandler1={statusHandler1}
        num={el}
        i={el}
      />
    ) : (
      ''
    );
  });

  return (
    <>
      <div className={styles.rowC}>
        <div className={styles.seat}>{seats}</div>
        <div className={styles.userdetail}>
          <UserDetails updateSeats={updateSeats} />
        </div>
      </div>
    </>
  );
};

export default Booking;
