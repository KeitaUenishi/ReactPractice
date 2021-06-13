import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // プロパティ名と当てはめる値が同じ名前の時は、：以降の記述を省略できる
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
