import React from 'react';
import CustomButton from '../atoms/CustomButton';
import GradientBorderButton from '../atoms/GradientBorderButton';

type ConfirmationPopupProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ title, subtitle, buttonText, onConfirm, onCancel }) => {
  return (
    <div className="flex justify-center items-center border card-border shadow-[0px_0px_10.3px_0px_#211A30] rounded-[19px] bg-special py-[3.5rem] px-[3.5rem]">
      <div className="flex flex-col gap-5">
        <div className="text-center text-primary font-bold text-[20px]">{title}</div>
        <div className="text-center text-secondary text-[20px] font-normal">{subtitle}</div>
        <div className="flex gap-4 justify-center">
          <CustomButton variant="primary" text={buttonText} onClick={onConfirm} className="w-[100%]" />
          <GradientBorderButton text="Cancel" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
