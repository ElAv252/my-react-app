import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import './Grid.css'

function TableViewer() {
    return (
        <div className='Grid'>
            <Grid
                rows={[
                    { id: 0, name: 'Avraham', city: 'Aram Naharaim' },
                    { id: 1, name: 'Itzhak', city: 'Desert' },
                    { id: 2, name: 'Yaakov', city: 'Tent' },
                    { id: 3, name: 'Esav', city: 'Field' },
                    { id: 4, name: 'Moshe', city: 'Cairo' },
                ]}
                columns={[
                    { name: 'id', title: 'ID' },
                    { name: 'name', title: 'Name' },
                    { name: 'city', title: 'City' },
                ]} >
                <Table />
                <TableHeaderRow />
            </Grid>
        </div>
    )
}

export default TableViewer;