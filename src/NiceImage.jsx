import React from 'react';
import { useParams } from 'react-router-dom';

export default function NiceImage() {
    let { id } = useParams()
    const imgSrc = `https://picsum.photos/id/${id}/200/300`;
    return (
        <img src={imgSrc} alt="dog" />
    )
}