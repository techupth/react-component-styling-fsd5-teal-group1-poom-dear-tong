/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import Image1 from "../assets/frown.svg";
// import Image2 from "../assets/alert-triangle.svg";
// import Image3 from "../assets/alert-circle.svg";
// import Image4 from "../assets/check-circle.svg";
export function Alert({alertColor,alertImage,textAlert}) {
  // let alertColor = GetColor(props.textAlert);
  // let alertImage = GetImage(props.textAlert);
  return (
    <div
      css={css`
        display: flex;
        justify-content: left;
        align-items: center;
        width: 650px;
        height: 76px;
        flex-shrink: 0;
        border-radius: 10px;
        padding-left: 20px;
        margin-top: 10px;
        background: ${alertColor};
      `}
    >
      <img src={alertImage} />
      <p
        css={css`
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          padding-left: 20px;
        `}
      >
        {textAlert}
      </p>
    </div>
  );
}

// function GetColor(textAlert) {
//   if (textAlert == "This is error alert box") {
//     return "#F9C8C8";
//   } else if (textAlert == "This is warning alert box") {
//     return "#F9D9C8";
//   } else if (textAlert == "This is info alert box") {
//     return "#F9EBC8";
//   } else {
//     return "#CEF7CD";
//   }
// }
// function GetImage(textAlert) {
//   if (textAlert == "This is error alert box") {
//     return Image1;
//   } else if (textAlert == "This is warning alert box") {
//     return Image2;
//   } else if (textAlert == "This is info alert box") {
//     return Image3;
//   } else {
//     return Image4;
//   }
// }
