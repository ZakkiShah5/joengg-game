import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { PublicKey } from '@solana/web3.js';
import { PiWarningCircle, PiCheckCircle } from 'react-icons/pi';
import { SolanaPopup } from '../../../components';

const Form = () => {
  const [name, setName] = useState('');
  const [solanaAddress, setSolanaAddress] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [session, setSession] = useState(localStorage.getItem('authToken'))


  const validateSolanaAddress = (address) => {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  };

  const handleBlur = () => {
    if (solanaAddress.trim() !== '') {
      const valid = validateSolanaAddress(solanaAddress);
      setIsValid(valid);
      setShowPopup(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!isValid) {
      setMessage('Invalid Solana address.');
      setLoading(false);
      return;
    }

    const requestBody = {
      name,
      wallet_address: solanaAddress,
      referral_code: referralCode
    };

    try {
      const response = await fetch('https://apigame.meccain.com/user/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session 
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage(data.message || 'Profile update failed.');
      }
    } catch (error) {
      setMessage('Error updating profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       {showPopup && (
        <>
          {isValid ? (
            <SolanaPopup
              setShowPopup={setShowPopup}
              icon={<PiCheckCircle className='text-7xl text-green-600' />}
              title={'Registered Successfully!'}
              message={'Please make sure your address is correct.'}
            />
          ) : (
            <SolanaPopup
              setShowPopup={setShowPopup}
              icon={<PiWarningCircle className='text-7xl' />}
              title={''}
              message={'This is not a normal Solana address.'}
            />
          )}
          <div className='overlay bg-transparent-400 z-30 fixed top-0 left-0 min-h-screen w-full'></div>
        </>
      )}

      <form onSubmit={handleSubmit} className="text-white text-lg flex flex-col gap-3">
        <div>
          <label htmlFor="name">Mecca Crew Name</label>
          <div className="flex items-center text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none w-full"
              placeholder="John Smith"
            />
            <FaEdit />
          </div>
        </div>

        <div>
          <label htmlFor="sol">Solana Address</label>
          <div className="flex items-center text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input
              type="text"
              id="sol"
              value={solanaAddress}
              onChange={(e) => setSolanaAddress(e.target.value)}
              onBlur={handleBlur}
              className="outline-none w-full"
              placeholder="Your Solana Address"
            />
            <FaEdit />
          </div>
        </div>

        <div>
          <label htmlFor="referral">Referral Code</label>
          <div className="flex items-center text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input
              type="text"
              id="referral"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="outline-none w-full"
              placeholder="0x00000000"
            />
            <IoCopy />
          </div>
        </div>

        <button type="submit" className="bg-mypurple-600 text-white px-4 py-2 rounded-md mt-4">
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </form>
    </>
  );
};

export default Form;
