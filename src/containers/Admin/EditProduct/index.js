import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import ReactSelect from 'react-select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useForm, Controller } from "react-hook-form"

import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import {
    Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput
} from './styles'
import { ErrorMessage } from '../../../components';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


function EdiProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push, location: { state: { product } } } = useHistory()


    const schema = Yup.object().shape({
        name: Yup.string().required("Digite o nome do produto"),
        price: Yup.string().required("Digite o preço do produto"),
        category: Yup.object().required("Escolha uma categoria"),
        offer: Yup.bool()
    })

    const { register, handleSubmit, control, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productFormData), {
            pending: 'Editando novo produto...',
            sucess: 'Editado com sucesso',
            error: 'Falha ao editar o produto'
        })

        setTimeout(() => {
            push('/listar-produtos')
        }, 2000)

    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');
            setCategories(data);
        }
        loadCategories()
    }, []);


    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <Input type='text'  {...register("name")} defaultValue={product.name} />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>

                <Label>Preço</Label>
                <Input type='number' {...register("price")} defaultValue={product.price} />
                <ErrorMessage>{errors.price?.message}</ErrorMessage>

                <LabelUpload>

                    {fileName ||
                        <>
                            <CloudUploadIcon />
                            Carregue a imagem do produto
                        </>
                    }

                    <input
                        type='file'
                        accept='image/png, image/jpeg'
                        {...register('file')}
                        onChange={value => {
                            setFileName(value.target.files[0]?.name)
                        }} />
                </LabelUpload>
                <ErrorMessage>{errors.file?.message}</ErrorMessage>

                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder="Categorias"
                                defaultValue={product.category}
                            />
                        )
                    }}
                >
                </Controller>
                <ErrorMessage>{errors.category?.message}</ErrorMessage>

                <ContainerInput>
                    <input type="checkbox"   {...register('offer')} defaultChecked={product.offer} />

                    <Label>Produto em oferta?</Label>
                </ContainerInput>

                <ButtonStyles>Editar Produto</ButtonStyles>

            </form>
        </Container >
    )
}

export default EdiProduct
