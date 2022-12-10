import { useState, useEffect } from 'react';
import styles from './seat.module.css';

const Seat = ({ num, statusHandler1, booked }) => {
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const [bookedTicket, setbookedTicket] = useState([]);

  useEffect(() => {
    booked.then((res) => setbookedTicket(res.booked));
  }, []);

  console.log(bookedTicket);
  const statusHandler2 = () => {
    setStatus2(!status2);
  };

  const statusHandler3 = () => {
    setStatus3(!status3);
  };

  const statusHandler4 = () => {
    setStatus4(!status4);
  };

  const statusHandler5 = () => {
    setStatus5(!status5);
  };

  return (
    <>
      <div className={styles.seat} style={{ marginRight: '800px' }}>
        <div className='container text-center'>
          <div className='row row-cols-4'>
            <div style={{ marginTop: '20px' }} className='col'>
              {status2 && (
                <button
                  backgroundColor='red'
                  disabled={bookedTicket.includes(num + ' ')}
                  style={{ backgroundColor: 'red' }}
                  value={num}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler2();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num}
                </button>
              )}
              {!status2 && (
                <button
                  disabled={bookedTicket.includes(num + '')}
                  style={
                    bookedTicket.includes(num + '')
                      ? { backgroundColor: 'grey' }
                      : { backgroundColor: 'green' }
                  }
                  value={num}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler2();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num}
                </button>
              )}
            </div>
            <div style={{ marginTop: '20px' }} className='col'>
              {status3 && (
                <button
                  disabled={bookedTicket.includes(num + 1 + '')}
                  style={{ backgroundColor: 'red' }}
                  value={num + 1}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler3();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 1}
                </button>
              )}
              {!status3 && (
                <button
                  disabled={bookedTicket.includes(num + 1 + '')}
                  style={
                    bookedTicket.includes(num + 1 + '')
                      ? { backgroundColor: 'grey' }
                      : { backgroundColor: 'green' }
                  }
                  value={num + 1}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler3();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 1}
                </button>
              )}
            </div>
            <div style={{ marginTop: '20px' }} className='col'>
              {status4 && (
                <button
                  disabled={bookedTicket.includes(num + 2 + '')}
                  style={{ backgroundColor: 'red' }}
                  value={num + 2}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler4();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 2}
                </button>
              )}
              {!status4 && (
                <button
                  disabled={bookedTicket.includes(num + 2 + '')}
                  style={
                    bookedTicket.includes(num + 2 + '')
                      ? { backgroundColor: 'grey' }
                      : { backgroundColor: 'green' }
                  }
                  value={num + 2}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler4();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 2}
                </button>
              )}
            </div>
            <div style={{ marginTop: '20px' }} className='col'>
              {status5 && (
                <button
                  disabled={bookedTicket.includes(num + 3 + '')}
                  style={{ backgroundColor: 'red' }}
                  value={num + 3}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler5();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 3}
                </button>
              )}
              {!status5 && (
                <button
                  disabled={bookedTicket.includes(num + 3 + '')}
                  style={
                    bookedTicket.includes(num + 3 + '')
                      ? { backgroundColor: 'grey' }
                      : { backgroundColor: 'green' }
                  }
                  value={num + 3}
                  onClick={(e) => {
                    statusHandler1(e);
                    statusHandler5();
                  }}
                  type='button'
                  className='btn btn-primary'
                >
                  {num + 3}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seat;
