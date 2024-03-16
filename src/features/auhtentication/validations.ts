interface Validations {
  userName: (userName: string) => boolean;
  password: (password: string) => boolean;
}

const validations: Validations = {
  userName: (userName) => {
    if (
      typeof userName !== "string" ||
      userName.length < 2 ||
      userName.length > 15
    ) {
      return false;
    }
    return true;
  },
  password: (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!])[0-9a-zA-Z?!]{8,}$/;
    if (!passwordRegex.test(password)) {
      return false;
    }
    return true;
  },
};

export { validations };
