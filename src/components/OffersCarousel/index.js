import React, { useEffect, useState } from 'react'

import Offers from '../../assets/name-offer.svg'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'


import {
    Container,
    CategoryImg,
    ContainerItens,
    Image,
    Button

} from './styles'


function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')
            const onlyOffers = data.filter(product => product.offer)

            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]

    return (
        <Container>
            <CategoryImg src={Offers} alt='Logo oferta' />
            <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
                {
                    offers && offers.map(product => (
                        <ContainerItens div key={product.id} >
                            <Image src={product.url} alt='Imagem da oferta' />
                            <p>{product.name}</p>
                            <p>R$ {product.price}</p>
                            <Button>Peça agora</Button>
                        </ContainerItens>
                    ))}
            </Carousel>
        </Container >
    )
}

export default OffersCarousel