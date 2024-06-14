"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface CommunityCardProps {
  data: {
    title: string;
    description: string;
    date: string;
    img: string;
  };
}

const EventCard = ({ data }: CommunityCardProps) => {
  return (
    <Card className="pt-10 w-96 shadow-blue-gray-800 shadow-lg">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={data.img} alt="card-image" className="w-fit h-fit" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <Typography>{data.description}</Typography>
        <Typography>{data.date}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
