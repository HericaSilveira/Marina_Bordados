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
  textOnlyXs = false,
}) => {
  let _text = text.length > 0 && icon != null ? `${text}  ` : text;
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
      >
        {textOnlyXs ? <TextOnlyXs text={_text} /> : _text}
        {icon}
      </Button>
    </>
  );
};
