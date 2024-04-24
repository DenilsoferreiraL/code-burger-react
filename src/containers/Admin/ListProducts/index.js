import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
    Container, Img, EditIconStyle
} from './styles'

function ListProducts() {
    const [products, setProducts] = useState([])

    function isOffer(offerStatus) {

        if (offerStatus) {
            return <CheckBoxIcon style={{ color: '#00bc01' }} />
        }
        return <CancelIcon style={{ color: '#CC1717' }} />
    }

    useEffect(() => {
        async function loadOrders() {

            const { data } = await api.get('products');

            setProducts(data);
        }
        loadOrders();

    }, []);

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Nome</TableCell>
                            <TableCell align='center'>Preço</TableCell>
                            <TableCell align='center'>Produto em Oferta</TableCell>
                            <TableCell align='center'>Imagem do Produto</TableCell>
                            <TableCell style={{ padding: 20 }}>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center' component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align='center'>{formatCurrency(product.price)}</TableCell>
                                <TableCell align='center' >
                                    {isOffer(product.offer)}
                                </TableCell>
                                <TableCell align='center'>
                                    <Img src={product.url} alt='Imagem-produto' />
                                </TableCell>
                                <TableCell align='center' >
                                    <EditIconStyle />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    )
}

export default ListProducts
