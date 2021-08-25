import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';



export default function MediaCard(props) {
  console.log(props);

  const user =JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
      <div> 
         <div><NavBar/></div>
         <Grid
        container
        spacing={1}
        direction="row"
        style={{ justifyContent: "space-between", marginTop:65 , zIndex:-1}}
      >
            
            <img  style={{height:150,width:150  }}src = {user.PIC.name}/>
          <Grid item>
         
        <h2>  NAME: {user.username}</h2>
        
        <h2>EMAIL-ID:{user.email}</h2>
        <h2></h2>
          </Grid>
    
      </Grid>
      </div>
      
  );

}


    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image={props.obj.pic?(props.obj.pic.name):("https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80")}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {props.obj.title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {/* {props.obj.description  } */}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="" color="#A02020">
    //       <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
    //     </Button>
    //     <Button size="small" color="#A02020">
    //       <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    //     </Button>
    //             <Button size="small" color="#A02020">
    //       <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
    //       </Button>
    //   </CardActions>
    // </Card>