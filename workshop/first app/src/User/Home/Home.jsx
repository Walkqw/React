// import axios from 'axios';
// import React from 'react'
// import { baseUrl } from '../../Globals/config';

// const Home = () => {
//   const [blogs,setBlogs]= React.useState([]);

//   const getBlogs = async() =>{
//     let res = await axios.get(`${baseUrl}blog`);
//     console.log(res.data);
//   }
//   React.useEffect(() => {
//     getBlogs();
//   }, []);

//   return (
//     <>
//       <div>Home</div>
//     </>

//   )
// };


// export default Home
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { baseUrl } from '../../Globals/config';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); 
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading]= React.useState(true);
  const getBlogs = async () => {
    let res = await axios.get(`${baseUrl}blog`);
    setBlogs(res.data);
    setLoading(false);
  };
  React.useEffect(() => {
    getBlogs();
  }, []);


  return (


    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Blogs
      </Typography>
      { loading ? (
        <Box
        sx={{
          width:"100%",
          height:"60vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",

        }}
        >
          <CircularProgress />
          </Box>
      ) : (

      <Box sx={{ display: 'flex',flexWrap:"wrap",gap:3}}>
        {blogs.map((blog)=> {
           return (
             <Card key={blog.id} sx={{ maxWidth: 345 }}>

              <CardMedia
                sx={{ height: 140 }}
                image={blog.image}
                title="why are you here"
              />
              <CardContent>
                 <Typography gutterBottom sx={{color: "darkgreen",fontSize:"15px"}}>
                  {blog.author}
                 </Typography>
                {/* <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                  {blog.description.slice(0,100)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  size='small'
                  >
                {/* <Button size="small">Share</Button> */}
                Learn More
                </Button>
              </CardActions>
            </Card>
          );
         }
         )}
          </Box>
      )
        }
    </Box>
      
  );

}