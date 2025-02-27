import { Tooltip } from '@mui/material';
import React from 'react';

type TooltipProps = {
  heading: string;
  description?: string;
  icon?: React.ReactNode;
};

const RandomPromptWithTooltip: React.FC<TooltipProps> = ({ heading, description, icon }) => {
  return (
    <Tooltip
      title={(
        <div className="flex flex-col gap-1">
          <div className="text-center Font-bold text-[0.875rem]">{heading}</div>
          <div className="text-center font-normal text-[0.625rem]">{description}</div>
        </div>
      )}
      placement="top"
      arrow
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: '#1C212A',
            color: '#A6A6A6',
            width: '211px',
            height: '4.625rem',
            border: '1px solid #404246',
          },
        },
      }}
    >
      <div className="cursor-pointer">
        {icon}
      </div>
    </Tooltip>
  );
};

export default RandomPromptWithTooltip;
