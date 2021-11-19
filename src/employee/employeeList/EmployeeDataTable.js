import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';

function createData(firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode) {
    return {
        firstName,
        lastName,
        startDate,
        department,
        dateOfBirth,
        street,
        city,
        state,
        zipCode
    };
}

const rows = [
    createData('Bob', 'Ly', '21/07/2020', 'Sales', '21/07/1968', 'Main street', 'Dothan', 'AL', 35005),
    createData('Patrick', 'Smith', '21/07/2011', 'Engineering', '01/01/1976', 'Forest street', 'Los Angeles', 'CA', 90011),
    createData('Lisa', 'Stark', '21/07/2000', 'Legal', '19/12/1973', 'Summer street', 'Jacksonville', 'FL', 32004),
    createData('Jean', 'Dupont', '21/07/2005', 'Marketing', '07/09/1982', 'Madison avenue', 'Indianapolis', 'IN', 47906),
    createData('Pierre', 'Dallas', '21/07/2012', 'Human Resources', '11/02/1967', 'Red street', 'Cambridge', 'MA', 2139),
    createData('Luc', 'Diaz', '21/07/2018', 'Sales', '28/10/1991', 'Main street', 'Foley', 'AL', 36695),
    createData('Pascal', 'Bush', '21/07/2007', 'Engineering', '17/05/1966', 'Apache street', 'San Diego', 'CA', 90011),
    createData('Brigitte', 'Amazon', '21/07/2019', 'Legal', '10/11/1985', 'Trinity street', 'Miami', 'FL', 32007),
    createData('George', 'Tiger', '21/07/2004', 'Marketing', '04/01/1990', 'Tower street', 'Evansville', 'IN', 46307),
    createData('Jeanne', 'Wood', '21/07/2020', 'Human Resources', '13/08/1978', 'Ridge street', 'Boston', 'MA', 2127)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'firstName',
        numeric: false,
        disablePadding: true,
        label: 'First Name',
    },
    {
        id: 'lastName',
        numeric: true,
        disablePadding: false,
        label: 'Last Name',
    },
    {
        id: 'startDate',
        numeric: true,
        disablePadding: false,
        label: 'Start Date',
    },
    {
        id: 'department',
        numeric: true,
        disablePadding: false,
        label: 'Department',
    },
    {
        id: 'dateOfBirth',
        numeric: true,
        disablePadding: false,
        label: 'Date Of Birth',
    },
    {
        id: 'street',
        numeric: true,
        disablePadding: false,
        label: 'Street',
    },
    {
        id: 'city',
        numeric: true,
        disablePadding: false,
        label: 'City',
    },{
        id: 'state',
        numeric: true,
        disablePadding: false,
        label: 'State',
    },{
        id: 'zipCode',
        numeric: true,
        disablePadding: false,
        label: 'Zip Code',
    },
];

function EmployeeDataTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding="normal"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span">
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EmployeeDataTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EmployeeDataTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('lastName');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: '90%' }}>
            <Paper sx={{ width: '100%', mb: 2, mt: 2}}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EmployeeDataTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow>
                                            <TableCell align="left">{row.firstName}</TableCell>
                                            <TableCell align="left">{row.lastName}</TableCell>
                                            <TableCell align="left">{row.startDate}</TableCell>
                                            <TableCell align="left">{row.department}</TableCell>
                                            <TableCell align="left">{row.dateOfBirth}</TableCell>
                                            <TableCell align="left">{row.street}</TableCell>
                                            <TableCell align="left">{row.city}</TableCell>
                                            <TableCell align="left">{row.state}</TableCell>
                                            <TableCell align="left">{row.zipCode}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default EmployeeDataTable;