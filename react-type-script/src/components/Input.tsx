import { ChangeEventHandler } from "react";
interface IsearchInputProps {
  onChangeHandler: ChangeEventHandler;
  className?: string;
  placeholder?: string;
}
type searchInputProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (value: string) => void;
};

export default function Input({
  className,
  placeholder,
  onChangeHandler,
}: searchInputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}
