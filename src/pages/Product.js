import React from 'react'
import NavBar from '../components/NavBar';
import MediaCard from '../components/products-card'
import { Grid } from "@material-ui/core";
import useFetch from  "../hooks/useFetch"
export default function Product() {
    const { loading , error, data} =useFetch(" http://localhost:1337/products")
    if (loading) return <p>Loading ......</p>
    if (error) return <p>Error:(</p>
    console.log(data);
    console.log();
    
    return (
       <div> <div><NavBar/></div>
       <div className="product_body" >

      {/* <Link to="/add_product">
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
          <AddIcon />
        </Fab>
      </Link> */}

      <Grid
        container
        spacing={1}
        direction="row"
        style={{ justifyContent: "space-between", marginTop:65 , zIndex:-1}}
      >
        {data.map((product) => (
          <Grid item>
            {/* <Grid item xs={2} sm={4} md={6} > */}
            <div key={product.id} className="product" style={{zIndex:-1}}>
              <MediaCard obj={product} xs={2} sm={4} md={6} />
              
              {/* <ImgMediaCard obj={product} /> */}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
</div>
  );
        }
