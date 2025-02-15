import Button from '@mui/material/Button';
import Image from 'next/image';
import React from 'react';

type CustomButtonProps = {
  text?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode | string;
  // onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, variant, icon }) => {
  return (
    <Button
      variant="contained"
      startIcon={
        icon
        && (typeof icon === 'string'
          ? (
              <Image src={icon} alt="icon" height={16} width={19} />
            )
          : (
              icon
            ))
      }
      sx={{
        backgroundImage:
        variant === 'primary' ? 'linear-gradient(to right, #61A6F2, #C9649A, #FF5A5E, #F28E4C)' : 'none',
        backgroundColor: variant === 'secondary' ? '#1C212A' : 'transparent',
        color: '#ffffff',
        fontFamily: 'satoshi, sans-serif',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '6px',
        padding: '0.625rem 1.625rem',
        height: '2.5rem',
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
