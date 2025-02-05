import { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    wallet_address: '',
    referral_code: '',
  });
  const [session] = useState(localStorage.getItem('authToken'));

  // Fetch user profile data
  const fetchUserProfile = async () => {
    try {
      const response = await fetch('https://apigame.meccain.com/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setProfile({
          name: data.name || '',
          wallet_address: data.wallet_address || '',
          referral_code: data.referral_code || '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Update user profile
  const updateUserProfile = async (updatedData) => {
    try {
      const response = await fetch('https://apigame.meccain.com/user/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session,
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();
      if (response.ok) {
        setProfile(data); // Update context state with the new data
        return { success: true, message: 'Profile updated successfully!' };
      } else {
        return { success: false, message: data.message || 'Profile update failed.' };
      }
    } catch (error) {
      return { success: false, message: 'Error updating profile.' };
    }
  };

  useEffect(() => {
    fetchUserProfile(); // Fetch profile when the app starts
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, fetchUserProfile, updateUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
