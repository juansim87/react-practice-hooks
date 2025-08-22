// import { useState } from 'react';
import { useDevice } from '../hooks/useDevice';

export const ShowDevice = () => {

  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <div>
      <h2>Show Device</h2>
      <p>You are navigating in: 
      {isMobile && "Mobile device"}
      {isTablet && "Tablet device"}
      {isDesktop && "Desktop device"}
      </p>
    </div>
  );
};