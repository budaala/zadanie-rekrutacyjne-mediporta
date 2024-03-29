import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import BasicTable from '../Table/Table';
import axios from 'axios';


function TableWithPagination() {
    const [tags, setTags] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        axios.get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
            .then((response) => {
                setTags(response.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const numOfTags = tags.length;

    return (
        <div>
            <Pagination 
                page={page} 
                rowsPerPage={rowsPerPage} 
                handleChangePage={handleChangePage} 
                handleChangeRowsPerPage={handleChangeRowsPerPage} 
                numOfTags={numOfTags}
            />
            <BasicTable tags={tags} page={page} rowsPerPage={rowsPerPage} />
        </div>
    );
}

export default TableWithPagination;
