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

export type CardProps = {
   id: number;
  name: string;
  username: string;
  email: string;

  address: string[];
  website: string;
  company: string[];
};
export type monsterApi = CardProps[];
