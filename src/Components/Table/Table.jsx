import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableSortLabel } from '@mui/material';
import './Table.css';

function sortTags(tags, field, direction) {
    return [...tags].sort((a, b) => {
        if (a[field] < b[field]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (a[field] > b[field]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    });
}

function BasicTable({tags, page, rowsPerPage}) {
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortField, setSortField] = useState('name');
    const [sortedTags, setSortedTags] = useState(tags);

    const handleSort = (field) => {
        setSortField(field);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        setSortedTags(sortTags(tags, field, sortDirection));
    }
    return (
        <div>
            <TableContainer component={Paper} className="table-container">
                <Table sx={{ minWidth: 20 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={sortField === 'name'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('name')}
                                />
                                Name
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={sortField === 'count'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('count')}
                                />
                                Count
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedTags
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default BasicTable;