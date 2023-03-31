/*export default function Skills(){
    return(
        <>
        This is Hobbies Page of Apoorva
        </>
    )
}*/
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpMxU2-ck_VUQVkdMPo9Oy1mBkIPmLleXmA&usqp=CAU',
    title: 'Reading Books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thumbs.dreamstime.com/b/happy-cute-kid-girl-listen-to-music-happy-cute-kid-girl-listen-to-music-167739317.jpg',
    title: 'Listening to Music',
    
  },
  {
    img: 'https://i.pinimg.com/originals/39/d4/d7/39d4d7b3122b6295dd783b5b22993331.jpg',
    title: 'Dancing',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuIVcFQeNuVxRtX-3LRE1p-eDMwLhOJQTWCtCLnK-1QbNhjLsqpLvAxyXgbqtr417MSY&usqp=CAU',
    title: 'Gardening',
    
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZO1upGfdBOuxVLxqSyXBANNsp7zGpfOqwy5cYXpQKvkVG21Q5APRaiqDTFWTSzmXoIs&usqp=CAU',
    title: 'Scrolling Web',
    
    cols: 2,
  },
  
  
];