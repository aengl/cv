import React from "react";
import DarkTheme from "theme://dark";

export default props => (
  <>
    <DarkTheme
      {...props}
      fonts={{
        body: {
          family: "Dosis",
          weight: 300,
          weightBold: 700
        },
        header: {
          family: "Indie Flower",
          weight: 400
        }
      }}
      sections={{
        profile: ({ data }) => (
          <>
            <h1>{data.name}</h1>
            <p>Look at my custom profile!</p>
          </>
        )
      }}
    />
    <style jsx global>{`
      :root {
        --text-color: hotpink;
      }
    `}</style>
  </>
);
