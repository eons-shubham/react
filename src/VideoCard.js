import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function VideoCard(props) {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={props.previewImage}
          alt="Thumbnail"
        />

        <CardContent>
          <Typography gutterBottom color="text.secondary">
            {props.genre}
          </Typography>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography gutterBottom color="text.secondary">
            {props.releaseDate}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
