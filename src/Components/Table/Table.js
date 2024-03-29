
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';
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

function BasicTable() {
    const [tags, setTags] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortField, setSortField] = useState('name');

    useEffect(() => {
        axios.get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
            .then((response) => {
                setTags(response.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSort = (field) => {
        setSortField(field);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        setTags(sortTags(tags, field, sortDirection));
    }
    return (
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
                    {tags.map((row) => (
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
    );
}

export default BasicTable;