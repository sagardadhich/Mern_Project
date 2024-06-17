import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { userContext } from '../userContext';

export default function Cardss({productData,unique}) {

 const {cart,setCart}= React.useContext(userContext)
 
   
  
  
      function handleCart(product){
       
        const _cart= {...cart}  

   if(!_cart.item){
    _cart.item={}
   }

   if(!_cart.item[product._id]){
    _cart.item[product._id]=1
   }else{
    _cart.item[product._id] += 1
   }

   if(!_cart.totalItem){
    _cart.totalItem=1
   }else{
    _cart.totalItem += 1
   }

    setCart(_cart)
   

      }

  return (
    <Card sx={{ maxWidth: 345,   }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/uploads/${productData.productImage}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productData.ProductName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {productData.ProductDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='success' onClick={()=>{handleCart(productData)}}>Add To Cart</Button>
        <Button size="small" variant='contained' >Learn More</Button>
      </CardActions>
    </Card>
  );
}
