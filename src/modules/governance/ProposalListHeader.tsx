import { Trans } from '@lingui/macro';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ProposalState } from '@pollum-io/contract-helpers';
import { useRootStore } from 'src/store/root';
import { GOVERNANCE_PAGE } from 'src/utils/mixPanelEvents';

import { SearchInput } from '../../components/SearchInput';
import { TitleWithSearchBar } from '../../components/TitleWithSearchBar';

type ProposalListHeaderProps = {
  proposalFilter: string;
  handleProposalFilterChange: (value: string) => void;
  handleSearchQueryChange: (value: string) => void;
};

type ProposalListHeaderElementProps = {
  proposalFilter: string;
  handleSearchQueryChange: (value: string) => void;
  handleChange: (event: SelectChangeEvent) => void;
};

export const ProposalListHeaderDesktop: React.FC<ProposalListHeaderElementProps> = ({
  proposalFilter,
  handleSearchQueryChange,
  handleChange,
}) => {
  return (
    <>
      <Typography variant="h3" sx={{ flexGrow: 1 }}>
        <Trans>Proposals</Trans>
      </Typography>
      <Typography>
        <Trans>Filter</Trans>
      </Typography>
      <Select
        id="filter"
        value={proposalFilter}
        onChange={handleChange}
        sx={{
          minWidth: 140,
          '&.MuiInputBase-root': {
            border: 0,
            '.MuiSelect-select': {
              display: 'flex',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        <MenuItem value="all">
          <Trans>All proposals</Trans>
        </MenuItem>
        {Object.keys(ProposalState).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
      <SearchInput
        wrapperSx={{
          width: '280px',
        }}
        placeholder="Search proposals"
        onSearchTermChange={handleSearchQueryChange}
      />
    </>
  );
};

export const ProposalListHeaderMobile: React.FC<ProposalListHeaderElementProps> = ({
  proposalFilter,
  handleChange,
  handleSearchQueryChange,
}) => {
  return (
    <>
      <TitleWithSearchBar
        title={<Trans>Proposals</Trans>}
        titleProps={{ variant: 'h3' }}
        onSearchTermChange={handleSearchQueryChange}
        searchPlaceholder="Search proposals"
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Typography>
          <Trans>Filter</Trans>
        </Typography>
        <Select id="filter" value={proposalFilter} sx={{ minWidth: 140 }} onChange={handleChange}>
          <MenuItem value="all">
            <Trans>All proposals</Trans>
          </MenuItem>
          {Object.keys(ProposalState).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export const ProposalListHeader: React.FC<ProposalListHeaderProps> = ({
  proposalFilter,
  handleProposalFilterChange,
  handleSearchQueryChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    trackEvent(GOVERNANCE_PAGE.FILTER, { filter: event.target.value });
    handleProposalFilterChange(event.target.value as string);
  };
  const { breakpoints } = useTheme();

  const md = useMediaQuery(breakpoints.up('md'));
  const trackEvent = useRootStore((store) => store.trackEvent);

  return (
    <Box
      sx={{
        px: 6,
        py: 4,
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: {
          xs: 'flex-start',
          md: 'center',
        },
        gap: 3,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {!md ? (
        <ProposalListHeaderMobile
          proposalFilter={proposalFilter}
          handleChange={handleChange}
          handleSearchQueryChange={handleSearchQueryChange}
        />
      ) : (
        <ProposalListHeaderDesktop
          proposalFilter={proposalFilter}
          handleChange={handleChange}
          handleSearchQueryChange={handleSearchQueryChange}
        />
      )}
    </Box>
  );
};
