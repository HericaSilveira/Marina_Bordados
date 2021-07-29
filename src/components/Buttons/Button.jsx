import Button from "react-bootstrap/Button";
import { TextOnlyXs } from "../TextOnlyXs/TextOnlyXs";

export const ButtonComponent = ({
  className,
  text,
  id,
  variant,
  icon,
  onClick,
  disabled,
  block,
  style,
  textOnlyXs = false,
}) => {
  let _text = text && icon ? `${text}  ` : text;
  return (
    <>
      <Button
        type="button"
        className={className}
        id={id}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        block={block}
        style={style}
      >
        {textOnlyXs ? <TextOnlyXs text={_text} /> : _text}
        {icon}
      </Button>
    </>
  );
};
