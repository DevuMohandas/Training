import { Tooltip } from '@mui/material';
import React from 'react';

type TooltipProps = {
  heading: string;
  description?: string;
  icon?: React.ReactNode;
};

const RandomPromptWithTooltip = ({ heading, description, icon }: TooltipProps) => {
  return (
    <Tooltip
      title={(
        <div className="flex flex-col gap-space-01">
          <div className="text-center font-system-bold text-base">{heading}</div>
          <div className="text-center font-system-regular text-xs">{description}</div>
        </div>
      )}
      placement="top"
      arrow
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: '#1C212A',
            color: '#A6A6A6',
            // maxWidth: '211px',
            // height: '4.625rem',
            maxWidth: '13.18rem',
            paddingY: '0.5rem',
            paddingX: '1.5rem',
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
