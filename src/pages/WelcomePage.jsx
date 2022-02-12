import React, { useMemo } from 'react';
import Welcome from '../components/Welcome';
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
import { WiDaySunny } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import Link from '@material-ui/core/List'
import {Link as RouterLink} from 'react-router-dom'

const WelcomePage = () => {
    const iconContextSize = useMemo(() => ({size: "5em"}), [])
    return (
        <Welcome>
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
                            <IconContext.Provider value={iconContextSize}>
                                <WiDaySunny/>
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
                                Weather App
                            </Typography>

                            <Link 
                                color="inherit" 
                                aria-label="menu" 
                                component={RouterLink} 
                                to="/main"
                            >
                                Enter
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Welcome>
    )
};

WelcomePage.propTypes = {};

export default WelcomePage;