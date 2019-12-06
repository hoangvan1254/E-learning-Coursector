import {Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer/Footer';

const ClientLayout = (props) => {
    return (
        <Fragment> 
            {/* Giống thẻ div nhưng không render trên giao diện */}
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export const ClientTemplate = ({ Component, ...propsRoute }) => {
    return <Route {...propsRoute} render={({...propsComponent}) => {
        return <ClientLayout>
            <Component {...propsComponent}/>
        </ClientLayout>
    }}/>
}