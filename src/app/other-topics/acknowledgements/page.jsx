import React from "react";

import {
  Container,
  Typography,
} from "@mui/material";

const Acknowledgements = () => {
  return (
    <Container style={{ margin: "50px" }}>
      <Typography
        component="h1"
        variant="h1"
        margin={5}
        sx={{ fontSize: "2.5rem", textAlign: "center", color: "#cc1e1e;" }}
      >
        Acknowledgements
      </Typography>

      <Typography>
        Photo by Brett Jordan:
        https://www.pexels.com/photo/close-up-shot-of-scrabble-tiles-on-white-background-10394994/
        {/* make stuff happen */}
      </Typography>
      <Typography>
        Photo by Tristan Le:
        https://www.pexels.com/photo/smiling-man-and-woman-wearing-jackets-1642883/
        {/* old couple love */}
      </Typography>
      <Typography>
        Photo by Andrea Piacquadio:
        https://www.pexels.com/photo/pensive-ethnic-man-listening-to-answer-in-paper-cup-phone-3760607/
        {/* man listening to cup */}
      </Typography>
      <Typography>
        Photo by Bess Hamiti:
        https://www.pexels.com/photo/toddle-wearing-gray-button-collared-shirt-with-curly-hair-35537/
        {/* little boy */}
      </Typography>
      <Typography>
        Photo by Maahid Photos:
        https://www.pexels.com/photo/taj-mahal-under-blue-sky-3881104/
        {/* taj mahal */}
      </Typography>
      <Typography>
        Photo by Bagus Hernawan on Unsplash
        https://unsplash.com/photos/A6JxK37IlPo
      </Typography>
      {/* nouns done */}
      <Typography>
        Photo by Eye for Ebony on Unsplash
        https://unsplash.com/photos/OWi1sIWiCAI
      </Typography>
      <Typography>
        Photo by Herbert Goetsch on Unsplash
        https://unsplash.com/photos/AXwQKtPS-s4
      </Typography>
      <Typography>
        Photo by John Arano on Unsplash https://unsplash.com/photos/h4i9G-de7Po
      </Typography>
      {/* expressions */}
      <Typography>
        https://www.flickr.com/photos/30478819@N08/51346196055 Time is Money
      </Typography>
      {/* versus */}
      <Typography>
        https://www.youtube.com/watch?app=desktop&v=0_qGkFhqeps Remember versus
        remind
      </Typography>
      <Typography>
        Photo by Christina Morillo:
        https://www.pexels.com/photo/two-woman-in-black-sits-on-chair-near-table-1181605/
      </Typography>
      <Typography>
        https://commons.wikimedia.org/wiki/File:Kiss_of_love.jpg
      </Typography>
      <Typography>
        Photo by{" "}
        <a href="https://unsplash.com/@wocintechchat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Christina @ wocintechchat.com
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/LQ1t-8Ms5PY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Typography>
    </Container>
  );
};

export default Acknowledgements;
