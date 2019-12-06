import {Route} from 'react-router-dom';
import React, {Fragment} from 'react';

const AdminLayout = (props) => {
    return (
        <Fragment> 
            {/* Giống thẻ div nhưng không render trên giao diện */}
            {props.children}
        </Fragment>
    )
}

export const AdminTemplate = ({ Component, ...propsRoute }) => {
    return <Route {...propsRoute} render={({...propsComponent}) => {
        return <AdminLayout>
            <Component {...propsComponent}/>
        </AdminLayout>
    }}/>
}