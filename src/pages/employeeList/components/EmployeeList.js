import * as React from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import styled from "@emotion/styled";
import Header from "../../Header";

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
    (theme) =>
        createStyles({
            root: {
                padding: theme.spacing(0.5, 0.5, 0),
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            textField: {
                [theme.breakpoints.down('xs')]: {
                    width: '100%',
                },
                margin: theme.spacing(1, 0.5, 1.5),
                '& .MuiSvgIcon-root': {
                    marginRight: theme.spacing(0.5),
                },
                '& .MuiInput-underline:before': {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                },
            },
        }),
    { defaultTheme },
);

function QuickSearchToolbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search…"
                className={classes.textField}
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}

function EmployeeList() {
    const employeeList = useSelector((state) => state.employee.list);
    const columns = useSelector((state) => state.employee.columnsList);
    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState(employeeList);
    const [pageSize, setPageSize] = React.useState(5);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = employeeList.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    React.useEffect(() => {
        setRows(employeeList);
    }, [employeeList]);

    return (
        <div>
            <Header/>

            <Container>
                <Table>
                    <Subtitle>Current Employees</Subtitle>

                    <div>
                        <DataGrid
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 15]}
                            pagination
                            autoHeight
                            components={{ Toolbar: QuickSearchToolbar }}
                            rows={rows}
                            columns={columns}
                            componentsProps={{
                                toolbar: {
                                    value: searchText,
                                    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                                        requestSearch(event.target.value),
                                    clearSearch: () => requestSearch(''),
                                },
                            }}
                        />
                    </div>
                </Table>
            </Container>
        </div>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Subtitle = styled.h2`
  text-align: center;
  margin: 16px 0;
`

const Table = styled.div`
  box-shadow: 5px 10px 18px #888888;
  background-color: white;
  padding: 8px 16px 24px;
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 90%;
  max-width: 1280px;
`

export default EmployeeList;