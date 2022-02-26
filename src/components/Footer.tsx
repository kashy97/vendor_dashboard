import { Link, Typography } from '@mui/material';
import React from 'react';

const Footer =(props:any) => {
    return(
        <div className="footer">
            <Typography variant="body2" color='text.secondary' align="center" {...props}>
                {'Copyright ©'}
                <Link color="inherit" href="/">
                    Vendor DashBoard
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}

export default Footer