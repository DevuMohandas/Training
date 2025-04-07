import type React from 'react';
import TextBoxWithLabel from './TextBoxWithLabel';

type ProfileFieldSectionProps = {
  title: string;
  description?: string;
  inputs: {
    label: string;
    variant: 'text' | 'email' | 'password';
    type: 'filled' | 'outlined';
    setValue?: (value: string) => void;
    error?: string;
    value?: string;
  }[];
};

const ProfileFieldSection = ({ title, description, inputs }: ProfileFieldSectionProps) => {
  return (
    <div className="flex flex-col w-full gap-space-06">
      <div className="text-primary text-[1.25rem] leading-[1.275rem] font-system-bold">{title}</div>
      {description && <div className="text-secondary text-md font-system-bold">{description}</div>}
      <div className="new-md:flex gap-space-02 new-md:gap-space-08">
        {inputs.map((input, index) => (
          <TextBoxWithLabel
            type={input.type}
            key={index}
            variant={input.variant}
            label={input.label}
            setValue={input.setValue}
            error={input.error}
            value={input.value}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileFieldSection;
