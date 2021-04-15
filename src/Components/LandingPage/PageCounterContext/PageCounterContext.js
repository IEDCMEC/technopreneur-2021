import React, { useState } from 'react';

export const PageCounterContext = React.createContext(0);

const PageCounterProvider = (props) => {
    const [page, setPage] = useState(0);

    return (
        <PageCounterContext.Provider value={{ 
            page: page,
            setPage: setPage
        }}>
        	{props.children}
        </PageCounterContext.Provider>
    );
}


export default PageCounterProvider;