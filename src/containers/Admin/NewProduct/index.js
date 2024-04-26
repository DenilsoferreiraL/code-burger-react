import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import ReactSelect from 'react-select';
import { useForm, Controller } from "react-hook-form"

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {
    Container, Label, Input, ButtonStyles, LabelUpload
} from './styles'
import { colors } from '@mui/material';

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { register, handleSubmit, control } = useForm()

    const onSubmit = data => console.log(data)

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
                <Input type='text'  {...register("name")} />

                <Label>Preço</Label>
                <Input type='number' {...register("price")} />

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

                <Controller
                    name="category_id"
                    control={control}
                    render={({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder="Categorias"
                            />
                        )
                    }}
                >
                </Controller>
                <ButtonStyles>Adicionar produtos</ButtonStyles>
            </form>
        </Container >
    )
}

export default NewProduct
