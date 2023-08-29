import { useState } from "react";
import { IToggleButtonGroupProps } from "./IToggleButtonGroupProps";

export const ToggleButtonGroup: React.FC<IToggleButtonGroupProps> = (props) => {
  const [selected, setSelected] = useState(0);

  const items = props.children.map((item, index) => {
    return (
      <button
        key={index}
        onClick={() => {
          setSelected(index);
          item.props.onClick?.();
        }}
        disabled={selected === index}
      >
        {item.props.caption}
      </button>
    );
  });

  return <>{items}</>;
};
