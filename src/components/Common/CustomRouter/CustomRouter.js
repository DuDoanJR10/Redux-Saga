import { useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const CustomRouter = ({ basename, children, history }: any) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <BrowserRouter
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};
