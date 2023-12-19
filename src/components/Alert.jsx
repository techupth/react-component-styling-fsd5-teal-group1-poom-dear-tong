// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorIcon from "../assets/frown.png";
import warningIcon from "../assets/alert-triangle.png";
import infoIcon from "../assets/alert-circle.png";
import successIcon from "../assets/check-circle.png";
function Alert(props) {
  let message;
  let icon;
  let style;

  const type = (type) => {
    if (props.type == "error") {
      style = "background: #F9C8C8;";
      message = "This is error alert box";
      icon = errorIcon;
    } else if (props.type == "warning") {
      style = "background: #F9D9C8;";
      message = "This is warning alert box";
      icon = warningIcon;
    } else if (props.type == "info") {
      style = "background: #F9EBC8;";
      message = "This is info alert box";
      icon = infoIcon;
    } else if (props.type == "success") {
      style = "background: #CEF7CD;";
      message = "This is success alert box";
      icon = successIcon;
    }
  };
  type(props.type);
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        padding: 10px;
        justify-content: start;
        align-items: center;
        gap: 10px;
        width: 650px;
        height: 76px;
        flex-shrink: 0;
        border-radius: 10px;
        ${style}
      `}
    >
      <img
        src={icon}
        alt="icon"
        css={css`
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        `}
      />
      <p
        css={css`
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        `}
      >
        {message}
      </p>
    </div>
  );
}
export default Alert;
