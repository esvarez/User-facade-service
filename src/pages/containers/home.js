import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Filter from '../../components/Filter/Filter';
import CardDetail from '../../components/CardDetail/CardDetail';
import MapMx from '../../components/Map/Map';

class Home extends Component {
    render(props){
        return (
            <HomeLayout>
                <Filter/>
                <CardDetail/>
                <MapMx/>
            </HomeLayout>
        )
    }
}
export default Home
