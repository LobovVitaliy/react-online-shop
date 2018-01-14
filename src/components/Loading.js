import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
    <MuiThemeProvider>
        <CircularProgress style={{
            width: '100%', textAlign: 'center', marginTop: 30
        }} />
    </MuiThemeProvider>
);

export default Loading;