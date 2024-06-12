import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import bonofide from "../assets/bonofide.jpg";
import buspass from "../assets/buspass.jpg";
import feedue from "../assets/Feedue.jpg";
import Bonfide from "../forms/Bonfide";
import certi from "../assets/certi.jpg";

const Request = () => {
  const [request, setRequest] = useState("");
  return (
    <div className="w-full h-128 flex flex-wrap overflow-y-auto">
      {request === "bono" && (
        <div
          style={{
            width: "100%",
          }}
        >
          <Bonfide
            apply="Bonofide"
            bus={false}
            disabled={true}
            setRequest={setRequest}
          />
        </div>
      )}
      {request === "bus" && (
        <Bonfide
          apply="Bus Pass"
          bus={true}
          disabled={true}
          setRequest={setRequest}
        />
      )}
      {request === "certificate" && (
        <Bonfide
          apply="Certificate"
          bus={false}
          disabled={false}
          setRequest={setRequest}
        />
      )}
      {request === "fee" && (
        <Bonfide
          apply="Collage Fee"
          bus={false}
          disabled={true}
          setRequest={setRequest}
        />
      )}
      <Card sx={{ width: 200, margin: 3, height: 400 }}>
        <CardActionArea onClick={() => setRequest("bono")}>
          <CardMedia
            component="img"
            height="140"
            image={bonofide}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Apply Bonofide
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              Apply for new collage bonofide.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: 200, margin: 3, height: 400 }}>
        <CardActionArea onClick={() => setRequest("bus")}>
          <CardMedia
            component="img"
            height="140"
            image={buspass}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bus Pass Forward
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              Bus pass forward using RMMno.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: 200, margin: 3, height: 400 }}>
        <CardActionArea onClick={() => setRequest("certificate")}>
          <CardMedia
            component="img"
            height="140"
            image={certi}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Certificate
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              Apply to get certificates.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: 200, margin: 3, height: 400 }}>
        <CardActionArea onClick={() => setRequest("fee")}>
          <CardMedia
            component="img"
            height="140"
            image={feedue}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              College Fee Due
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              Access thr college fee due
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Request;
