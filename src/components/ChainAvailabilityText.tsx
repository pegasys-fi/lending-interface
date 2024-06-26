import { Trans } from '@lingui/macro';
import { Box, BoxProps, Typography } from '@mui/material';
import { ChainId } from '@pollum-io/contract-helpers';
import { BaseNetworkConfig, networkConfigs } from 'src/ui-config/networksConfig';

type ChainAvailabilityTextProps = {
  chainId: ChainId;
  wrapperSx: BoxProps['sx'];
};

const networkToTextMapper = (chainId: ChainId, networkConfig: BaseNetworkConfig) => {
  switch (chainId) {
    case ChainId.mainnet:
      return 'Ethereum Mainnet';
    default:
      return networkConfig.name;
  }
};

export const ChainAvailabilityText: React.FC<ChainAvailabilityTextProps> = ({
  chainId,
  wrapperSx,
}) => {
  const network = networkConfigs[chainId];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...wrapperSx }}>
      <Typography variant="subheader2" sx={{ mr: 2, color: 'text.secondary' }}>
        <Trans>Available on</Trans>
      </Typography>
      <Box
        sx={{
          height: 16,
          width: 16,
        }}
      >
        <img src={network.networkLogoPath} height="100%" width="100%" alt="Ethereum Mainnet" />
      </Box>
      <Typography variant="subheader2" sx={{ ml: 1, color: 'text.secondary' }}>
        {networkToTextMapper(chainId, network)}
      </Typography>
    </Box>
  );
};
