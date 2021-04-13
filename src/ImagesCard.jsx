import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card1 from './Card1';
import './GridMaterial.css'

export default function ImagesCard() {
    return (
        <Grid container justify="center">
            <Card1 imageSrc='https://picsum.photos/id/867/700/400' className='GridMaterial' LinkTo='https://www.youtube.com/' />
            <Card1 imageSrc='https://picsum.photos/id/866/700/400' className='GridMaterial' LinkTo='https://www.youtube.com/' />
            <Card1 imageSrc='https://picsum.photos/id/868/700/400' className='GridMaterial' LinkTo='https://www.youtube.com/' />
            <Card1 imageSrc='https://picsum.photos/id/869/700/400' className='GridMaterial' LinkTo='https://www.youtube.com/' />
        </Grid>
    )
};