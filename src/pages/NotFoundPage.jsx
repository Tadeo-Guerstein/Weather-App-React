import React from 'react';
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
import { WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import Link from '@material-ui/core/List'
import {Link as RouterLink} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Grid 
                container 
                direction="column" 
                justifyContent="center" 
                className="full" 
            >
                <div className="highlight">
                    <Grid 
                        item 
                        container 
                        xs={12} 
                        justifyContent="center" 
                        alignItems="center"
                    >
                        <Grid item>
                            <IconContext.Provider value={{size:"5em"}}>
                                <WiRain/>
                            </IconContext.Provider>
                        </Grid>

                        <Grid 
                            item 
                            container 
                            direction="column" 
                            justifyContent="center" 
                            alignItems="center"
                        >
                            <Typography variant="h3" color="inherit">
                                404 | Page doesn't exist
                            </Typography>

                            <Link 
                                color="inherit" 
                                aria-label="menu" 
                                component={RouterLink} 
                                to="/main"
                            >
                                Return to Main Page
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
    )
};

export default NotFoundPage;
