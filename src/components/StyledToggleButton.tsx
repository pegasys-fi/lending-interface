import { styled, ToggleButton, ToggleButtonProps } from '@mui/material';
import React from 'react';

const CustomToggleButton = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
  border: '0px',
  flex: 1,
  borderRadius: '9999px',

  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: '#0B172C',
    borderRadius: '9999px !important',
    color: '#FFFFFF',
  },

  '&.Mui-disabled:hover': {
    borderRadius: '9999px !important',
    backgroundColor: '#0B172C',
  },

  '&.Mui-selected, &.Mui-disabled': {
    zIndex: 100,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',

    '.MuiTypography-subheader1': {
      borderRadius: '9999px !important',
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    '.MuiTypography-secondary14': {
      background: theme.palette.gradients.aaveGradient,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
  },
})) as typeof ToggleButton;

const CustomTxModalToggleButton = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
  border: '0px',
  flex: 1,
  color: theme.palette.text.muted,
  borderRadius: '9999px',

  '&.Mui-selected, &.Mui-selected:hover': {
    border: `1px solid ${theme.palette.other.standardInputLine}`,
    backgroundColor: '#FFFFFF',
    borderRadius: '9999px !important',
  },

  '&.Mui-selected, &.Mui-disabled': {
    zIndex: 100,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.muted,
  },
})) as typeof ToggleButton;

export function StyledTxModalToggleButton(props: ToggleButtonProps) {
  return <CustomTxModalToggleButton {...props} />;
}

export default function StyledToggleButton(props: ToggleButtonProps) {
  return <CustomToggleButton {...props} />;
}
