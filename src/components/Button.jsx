/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({color="#074EE8"}) {
  const buttonColorPrimary = "#074EE8";
  const buttonColorSecondary = "#07A4E8";
  return (
    <button
      css={css`
        display: flex;
        height: 50px;
        width: 170px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-shrink: 0;
        border-radius: 4px;
        font-size: 16px;
        font-style: normal;
        color: #fff;
        margin: 10px;
        background: ${color};
      `}
    >
      Button
    </button>
  );
}
