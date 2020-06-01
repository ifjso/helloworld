import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import FadingButton from '../FadingButton';

const DarkModeToggle = ({ size }) => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <FadingButton
        type="button"
        width={size}
        height={size}
        onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="dark mode"
      >
        {theme === 'dark' ? (
          <IoIosSunny size="100%" />
        ) : (
          <IoIosMoon size="100%" />
        )}
      </FadingButton>
    )}
  </ThemeToggler>
);

export default DarkModeToggle;
