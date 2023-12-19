// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button(props) {
  const primary = "#074EE8";
  const secondary = "#07A4E8";
  return (
    <button
      css={css`
        background: ${props.color == "primary" ? primary : secondary};
        display: flex;
        width: 171.19px;
        height: 50px;
        padding: 0px 16px;
        justify-content: center;
        align-items: center;
        margin: 8px;
        flex-shrink: 0;
        border-radius: 4px;
      `}
    ></button>
  );
}
export default Button;
