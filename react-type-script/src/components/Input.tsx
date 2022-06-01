interface IsearchInputProps {
  onChangeHandler: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function Input({
  className,
  placeholder,
  onChangeHandler,
}: IsearchInputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}
