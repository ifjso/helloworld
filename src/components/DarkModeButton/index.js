import React from 'react';
import useDarkMode from 'use-dark-mode';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import FadingButton from '../FadingButton';

const DarkModeToggle = ({ size }) => {
  const darkMode = useDarkMode(false);

  return (
    <FadingButton
      type="button"
      width={size}
      height={size}
      onClick={darkMode.toggle}
      aria-label="dark mode"
    >
      {darkMode.value ? <IoIosSunny size="100%" /> : <IoIosMoon size="100%" />}
    </FadingButton>
  );
};

export default DarkModeToggle;
