import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
function FetchNews() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          {
             <Card sx={{ maxWidth: 240 ,maxHeight:240}}>
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="90"
                 image="/static/images/cards/contemplative-reptile.jpg"
                 alt="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Lizard
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   Lizards are a widespread group of squamate reptiles, with
                   over 6,000 species, ranging across all continents except
                   Antarctica
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <Button size="small" color="primary">
                 Share
               </Button>
             </CardActions>
           </Card>
            // news.map((value) => {
            //   return (
            //     <div className="col-4">
            //       <div className="card" style={{ width: "18rem" }}>
            //         <img src={value.urlToImage} className="card-img-top" alt="..." />
            //         <div className="card-body">
            //           <h5 className="card-title">{value.title}</h5>
            //           <p className="card-text">{value.description}</p>
            //           <a href="#" className="btn btn-primary">Main</a>
            //         </div>
            //       </div>
            //     </div>
            //   );
            // })
          }
        </div>
      </div>
    </>
  )
}

export default FetchNews