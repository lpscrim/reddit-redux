import './header.css';
import React, { useState, useEffect } from 'react';
import { UseSelector, useDispatch } from 'react-redux';
import store from '../../store/store';

export const Header = () => {
    const [searchTermLocal, setSeachTermLocal] = useState('');
    const dispatch = useDispatch();
    const searchItem = useSelector((state) => (state.posts.searchTerm))
    
    return (

    )
}