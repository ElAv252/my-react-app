import React from 'react';
import WithStorage from './WithStorage';
import CountButton from './CountButton';

const ComposedComponent = WithStorage(CountButton)

export default function MyContainerHOC() {
    return (
        <ComposedComponent />
    )
};