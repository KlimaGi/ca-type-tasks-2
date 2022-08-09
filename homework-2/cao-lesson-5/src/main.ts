// tipu formavimas ir susaistymas

type User = {
    email: string,
    password: string,
    mobile: string,
    name: string,
    surname: string,
    gender: "male" | "female",
    age: number,
    income?: number,
    married?: boolean,
  };

  // papildomu savybiu pridejimas
  type UserRegistration = User & {
    emailConfirmation: User['email'],
    passwordConfirmation: User['password'],
  };

  // keiciamos tik tam tikros savybes
  type UserUpdate = {
    [Key in keyof Omit<User, 'password'>]?: User[Key]
  };
  // User[Key] - savybes tipas, bus toks, kaip User tipo savybe raktu Key

  // 