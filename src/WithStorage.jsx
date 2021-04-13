import React from 'react';

const WithStorage = (WrappedComponent) => {

    function HOC(props) {
        function save(key, value) {
            localStorage.setItem(key, value)
        }
        function load(key) {
            return localStorage.getItem(key)
        }
        function clear() {
            localStorage.clear()
        }
        return <WrappedComponent {...props} save={save} load={load} clear={clear} />
    }
    return HOC;
};

export default WithStorage;