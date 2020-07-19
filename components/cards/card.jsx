import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './card.module.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return 'loading...'
    }
    
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item content={Card} xs={12} md={3} className={styles.card, styles.infected}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">Real Data</Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <CountUp 
                       start={0}
                       end={confirmed.value}
                       duration={2.5}
                       seperator=','/>
                       <Typography variant="body2">Number of active cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item content={Card} xs={12} md={3} className={styles.card, styles.recovered}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                       <Typography variant="h5">Real Data</Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <CountUp 
                       start={0}
                       end={recovered.value}
                       duration={2.5}
                       seperator=','/>
                       <Typography variant="body2">Number of recovered cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item content={Card} xs={12} md={3} className={styles.card, styles.deaths}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant="h5">Real Data</Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <CountUp 
                       start={0}
                       end={deaths.value}
                       duration={2.5}
                       seperator=','/>
                       <Typography variant="body2">Number of deaths</Typography>
                   </CardContent>
               </Grid>
           </Grid>
       </div>
    )
}

export default Cards;