const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAGS: (_id: string) => `/tags/${_id}`,
  ASK_QUESTION: "/ask-question",
  QUESTION: (_id: string) => `/questions/${_id}`,
  COLLECTION: "/collection",
  COMMUNITY: "/community",
  JOBS: "/jobs",
};

export default ROUTES;
