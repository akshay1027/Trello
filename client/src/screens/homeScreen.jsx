import React, { lazy } from 'react';
import { Box, Typography, Container, createStyles, makeStyles, Grid, Button, List, ListItem, ListItemIcon, IconButton } from '@material-ui/core';
import tutor from '../assests/tutor.svg';
// import HomePageForm from '../components/homePageForm';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink, useHistory } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => {
    return createStyles({
        titleBackground: {
            backgroundColor: `${theme.palette.secondary.main}40`
        },
        footerBackground: {
            backgroundColor: `${theme.palette.fourth.main}`
        },
        button1: {
            backgroundColor: `${theme.palette.primary.main}`,
            marginTop: '20px',
            padding: '12px 30px',
            fontWeight: 600,
            fontSize: '20px'
        },
        svg: {
            height: '300px',
            width: 'auto'
        },
        icons: {
            color: `${theme.palette.third.main}`,
            '&:hover': {
                color: `${theme.palette.primary.main}`
            },
            fontSize: '40px',
            margin: '0px 10px'
        }
    });
}
);

const homeScreen = () => {
    const classes = useStyles();
    const history = useHistory();

    // To open link in new tab on click
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <Box width='100%'>
            <Box py={14}>
                <Grid container maxWidth='lg' style={{ justifyContent: 'center' }}>
                    <Grid item sm={12} md={5} className={classes.titleBackground} style={{ margin: '0px 10px' }}>
                        <Box py={10} px={2} display="flex" flexDirection='column' alignItems='center' justifyContent='center'>
                            <Typography className='textGradient'>TrelloX</Typography>
                            <Typography style={{ fontWeight: 800, fontSize: '40px', textAlign: 'center', color: '#2F2E41' }}>
                                {/* <Typography className={classes.textGradient}>TrelloX</Typography> */}
                                Maximizing Productivity
                            </Typography>
                            <Button className={classes.button1} size='large' variant='contained'>
                                SignUp
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <img src={tutor} className={classes.svg} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box>
                <HomePageForm />
            </Box> */}
            <Box pt={10}>
                <Grid container maxWidth='lg' style={{ display: 'inline', justifyContent: 'center' }}>
                    <Grid item sm={12} md={12} className={classes.footerBackground}>
                        <Box pt={8} px={2} display="flex" flexDirection='column' alignItems='center' justifyContent='center'>
                            <Typography style={{ fontSize: '45px', textAlign: 'center' }}>
                                🤘🏻
                            </Typography>
                        </Box>
                        <Box pt={3} px={0} display="flex" alignItems='center' justifyContent='center'>
                            <IconButton onClick={() => openInNewTab('https://github.com/akshay1027')}>
                                <GitHubIcon className={classes.icons} style={{ fontSize: '34px' }} />
                            </IconButton>
                            <IconButton onClick={() => openInNewTab('https://www.linkedin.com/in/akshayrr1027/')}>
                                <LinkedInIcon className={classes.icons} />
                            </IconButton>
                            <IconButton onClick={() => openInNewTab('https://www.instagram.com/akshay_rr10/')}>
                                <InstagramIcon className={classes.icons} />
                            </IconButton>
                        </Box>
                        <Box pt={3} px={0} display="flex" alignItems='center' justifyContent='center'>
                            <Typography style={{ fontWeight: 600, fontSize: '20px', color: '#2F2E41' }}>Made With Love By Akshay R R ❤</Typography>
                        </Box>
                        <Box pt={3} px={0} pb={10} display="flex" alignItems='center' justifyContent='center'>
                            <Typography style={{ fontWeight: 600, fontSize: '20px', color: '7014115' }}>Copyright @ AstroLearn 2021</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default homeScreen;
