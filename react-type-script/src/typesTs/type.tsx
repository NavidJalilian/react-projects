export type InputProps = {
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;

  setValue: (value: string) => void;
};
export type ButtonProps = {
  onClickHandler: () => void;
  type: "submit" | "reset" | "button";
  children?: React.ReactNode;
};
