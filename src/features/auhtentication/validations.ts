interface Validations {
  userName: (userName: string) => string;
  password: (password: string) => string;
}

const validations: Validations = {
  userName: (userName) => {
    if (
      typeof userName !== "string" ||
      userName.length < 2 ||
      userName.length > 15
    ) {
      return "The user name is required and must contain at least 2 and max. 15 characters.";
    }
    return "valid";
  },
  password: (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!])[0-9a-zA-Z?!]{8,}$/;
    if (!passwordRegex.test(password)) {
      return "The password must contain at least 1 number, 1 lowercase and uppercase character, one special character and be at least 8 characters long.";
    }
    return "valid";
  },
};

export { validations };
