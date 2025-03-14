import Button from '@mui/material/Button';
import Image from 'next/image';
import React from 'react';

type CustomButtonProps = {
  text?: string;
  variant?: 'primary' | 'secondary' | 'ternary' | 'upload' ;
  icon?: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
};

const CustomButton = ({ text, variant, icon, className, onClick }: CustomButtonProps) => {
  const getButtonStyles = (variant?: string) => {
    return {
      backgroundImage:
        variant === 'primary' ? 'linear-gradient(to right, #61A6F2, #C9649A, #FF5A5E, #F28E4C)' : 'none',
      backgroundColor: (variant === 'secondary' || variant === 'upload') && '#1C212A',
      color: '#ffffff',
      fontFamily: 'satoshi, sans-serif',
      textTransform: 'none',
      fontSize: variant === 'primary' || variant === 'secondary' ? '1rem' : '0.875rem',
      fontWeight: 700,
      borderRadius: variant === 'upload' || variant === 'ternary' ? '1rem' : '0.375rem',
      padding:
        variant === 'secondary' ? '0.625rem 1.625rem' : 'none',
      height: '2.5rem',

      ...(variant === 'ternary' && {
        position: 'relative',
        border: '1px solid transparent',
        borderImageSource:
          'linear-gradient(90deg, #61A6F2 0%, #C9649A 32.71%, #FF5A5E 68.67%, #F28E4C 100%)',
        borderImageSlice: 1,
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box',
        color: '#fff',
      }),
    };
  };

  const getMuiVariant = (variant?: string) => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'upload':
        return 'contained';
      case 'ternary':
        return 'outlined';
      default:
        return 'text';
    };
  };

  return (
    <Button
      className={className}
      variant={getMuiVariant(variant)}
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
      sx={getButtonStyles(variant)}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
