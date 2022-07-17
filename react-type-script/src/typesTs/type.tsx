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

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
  company: string[];
};
export type monsterApi = CardProps[];
