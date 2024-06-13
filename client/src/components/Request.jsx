import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Bonfide from "../forms/Bonfide";

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
            image="https://res.cloudinary.com/dojwaepbj/image/upload/v1718258221/Mini/vqid9tftaozb76vm85n2.jpg"
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
            image="https://res.cloudinary.com/dojwaepbj/image/upload/v1718258294/Mini/onfbrgtleugneaiwnydh.jpg"
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
            image="https://res.cloudinary.com/dojwaepbj/image/upload/v1718258379/Mini/bcb6gfddjxrtz1uugt2t.jpg"
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
            image="https://res.cloudinary.com/dojwaepbj/image/upload/v1718258447/Mini/s9ym7rywes07ie0yiwzd.jpg"
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
