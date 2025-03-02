const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAGS: (_id: string) => `/tags/${_id}`,
  ASK_QUESTION: "/ask-question"
};

export default ROUTES;
