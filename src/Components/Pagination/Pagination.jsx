import * as React from 'react';
import { useTheme } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function Pagination({page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, numOfTags}) {

  return (
    <React.Fragment>
      <div className="TablePaginationIntroductionDemo">
        <table aria-label="custom pagination table">
          <tfoot>
            <tr>
              <TablePagination
                className="CustomTablePagination"
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={numOfTags}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    'aria-label': 'Rows per page',
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                    slots: {
                      firstPageIcon: FirstPageRoundedIcon,
                      lastPageIcon: LastPageRoundedIcon,
                      nextPageIcon: ChevronRightRoundedIcon,
                      backPageIcon: ChevronLeftRoundedIcon,
                    },
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </div>
      <Styles />
    </React.Fragment>
  );
}

export default Pagination;

const cyan = {
  50: '#E9F8FC',
  100: '#BDEBF4',
  200: '#99D8E5',
  300: '#66BACC',
  400: '#1F94AD',
  500: '#0D5463',
  600: '#094855',
  700: '#063C47',
  800: '#043039',
  900: '#022127',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

function Styles() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();

  return (
    <style>
      {`
      .TablePaginationIntroductionDemo {
        width: 500px;
        max-width: 40vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 36px;
        margin-top: 50px;
      }

      th {
        background-color: ${isDarkMode ? grey[900] : '#fff'};
      }

      .TablePaginationIntroductionDemo table {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        width: 100%;
        box-shadow: 0px 4px 16px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : grey[200]};
        background-color: ${isDarkMode ? grey[900] : '#fff'};
        // border: 1px solid ${isDarkMode ? grey[800] : grey[200]};
        border-radius: 5px;
        overflow: hidden;
      }

      .TablePaginationIntroductionDemo td,
      .TablePaginationIntroductionDemo th {
        padding: 16px;
      }

      .TablePaginationIntroductionDemo th {
        background-color: ${isDarkMode ? grey[900] : '#fff'};
      }

      .CustomTablePagination .${classes.spacer} {
        display: none;
      }

      .CustomTablePagination .${classes.toolbar}  {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: center;
        }
      }

      .CustomTablePagination .${classes.selectLabel} {
        margin: 0;
      }

      .CustomTablePagination .${classes.select} {
        font-family: 'IBM Plex Sans', sans-serif;
        padding: 2px 0 2px 4px;
        border: 1px solid ${isDarkMode ? grey[800] : grey[200]};
        border-radius: 6px;
        background-color: transparent;
        color: ${isDarkMode ? grey[300] : grey[900]};
        transition: all 100ms ease;
      }

      .CustomTablePagination .${classes.select}:hover {
        background-color: ${isDarkMode ? grey[800] : grey[50]};
        border-color: ${isDarkMode ? grey[600] : grey[300]};
      }

      .CustomTablePagination .${classes.select}:focus {
        outline: 3px solid ${isDarkMode ? cyan[400] : cyan[200]};
        border-color: ${cyan[500]};
      }

      .CustomTablePagination .${classes.displayedRows} {
        margin: 0;

        @media (min-width: 768px) {
          margin-left: auto;
        }
      }

      .CustomTablePagination .${classes.actions} {
        display: flex;
        gap: 6px;
        border: transparent;
        text-align: center;
      }

      .CustomTablePagination .${classes.actions} > button {
        display: flex;
        align-items: center;
        padding: 0;
        border: transparent;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid ${isDarkMode ? grey[800] : grey[200]};
        color: ${isDarkMode ? grey[300] : grey[900]};
        transition: all 120ms ease;

        > svg {
          font-size: 22px;
        }
      }

      .CustomTablePagination .${classes.actions} > button:hover {
        background-color: ${isDarkMode ? grey[800] : grey[50]};
        border-color: ${isDarkMode ? grey[600] : grey[300]};
      }

      .CustomTablePagination .${classes.actions} > button:focus {
        outline: 3px solid ${isDarkMode ? cyan[400] : cyan[200]};
        border-color: ${cyan[500]};
      }

      .CustomTablePagination .${classes.actions} > button:disabled {
        opacity: 0.3;
      }

      .CustomTablePagination .${classes.actions} > button:disabled:hover {
        border: 1px solid ${isDarkMode ? grey[800] : grey[200]};
        background-color: transparent;
      }
      `}
    </style>
  );
}