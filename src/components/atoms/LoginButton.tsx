'use client';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#F78A79',
  color: '#FFFFFFE5',
  width: '23.56rem',
  height: '2.56rem',
  fontWeight: 700,
  fontSize: '0.813rem',
  borderRadius: '6px',
});

const LoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <CustomButton variant="contained" onClick={onClick}>Login</CustomButton>
    </div>
  );
};

export default LoginButton;
