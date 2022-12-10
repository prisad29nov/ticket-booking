import { useNavigate } from 'react-router-dom';

const UserDetails = ({ updateSeats }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className='row mb-4'>
          <div className='col'>
            <div className='form-outline'>
              <input
                style={{ border: '1px solid grey' }}
                type='text'
                id='form6Example1'
                className='form-control'
              />
              <label className='form-label' htmlFor='form6Example1'>
                First name
              </label>
            </div>
          </div>
          <div className='col'>
            <div className='form-outline'>
              <input
                style={{ border: '1px solid grey' }}
                type='text'
                id='form6Example2'
                className='form-control'
              />
              <label className='form-label' htmlFor='form6Example2'>
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className='form-outline mb-4'>
          <input
            style={{ border: '1px solid grey' }}
            type='text'
            id='form6Example4'
            className='form-control'
          />
          <label className='form-label' htmlFor='form6Example4'>
            Address
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input
            style={{ border: '1px solid grey' }}
            type='email'
            id='form6Example5'
            className='form-control'
          />
          <label className='form-label' htmlFor='form6Example5'>
            Email
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input
            style={{ border: '1px solid grey' }}
            type='number'
            id='form6Example6'
            className='form-control'
          />
          <label className='form-label' htmlFor='form6Example6'>
            Phone
          </label>
        </div>

        <div>
          <input
            className='form-check-input'
            type='radio'
            name='radioNoLabel'
            id='radioNoLabel1'
            value=''
            aria-label='...'
          />
          {'  '}Male
        </div>

        <div>
          <input
            className='form-check-input'
            type='radio'
            name='radioNoLabel'
            id='radioNoLabel2'
            value=''
            aria-label='...'
          />{' '}
          Female
        </div>

        <div className='form-check d-flex justify-content-center mb-4'></div>

        <button
          onClick={() => {
            updateSeats();
            navigate('/successful');
          }}
          className='btn btn-primary btn-block mb-4'
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
};

export default UserDetails;
