"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Card = {
  title: string;
  image: string;
  description: string;
  destination: string;
};

type MediaCardProps = {
  card: Card;
};

export default function MediaCard({ card }: MediaCardProps) {
  return (
    <>
      <a href={card.destination}>
        <div className="flex flex-wrap hover:animate-jump motion-reduce:animate-none font-latin h-full">
          <Card sx={{ maxWidth: 345 }} key={card.title}>
            <CardMedia
              sx={{ height: 140 }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      </a>
    </>
  );
}
