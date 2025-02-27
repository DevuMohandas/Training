import Button from '@mui/material/Button';
import Image from 'next/image';
import React from 'react';

type CustomButtonProps = {
  text?: string;
  variant?: 'primary' | 'secondary' | 'ternary';
  icon?: React.ReactNode | string;
  className?: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, variant, icon, className, onClick }) => {
  return (
    <Button
      className={className}
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
        backgroundColor: variant === 'secondary' ? '#1C212A' : '#1C212A',
        color: '#ffffff',
        fontFamily: 'satoshi, sans-serif',
        textTransform: 'none',
        fontSize: variant === 'primary' || 'secondary' ? '1rem' : '0.875rem',
        fontWeight: 700,
        borderRadius: variant === 'ternary' ? '1rem' : '0.375rem',
        padding:
        variant === 'secondary' ? '0.625rem 1.625rem' : 'none',
        height: '2.5rem',
        width:
        variant === 'primary' ? '9.874rem' : variant === 'ternary' ? '8.875rem' : 'auto',
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
