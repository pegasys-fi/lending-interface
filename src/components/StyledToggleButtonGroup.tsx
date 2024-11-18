import { styled, ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material';

const CustomToggleGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>({
  backgroundColor: '#0000003D',
  borderRadius: '9999px',
}) as typeof ToggleButtonGroup;

const CustomTxModalToggleGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.header,
  borderRadius: '9999px',
  padding: '2px',
  height: '36px',
  width: '100%',
})) as typeof ToggleButtonGroup;

export function StyledTxModalToggleGroup(props: ToggleButtonGroupProps) {
  return <CustomTxModalToggleGroup {...props} />;
}

export default function StyledToggleGroup(props: ToggleButtonGroupProps) {
  return <CustomToggleGroup {...props} />;
}
