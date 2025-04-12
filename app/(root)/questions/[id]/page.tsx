import React from "react";

import { RouteParams } from "@/types/global";

const QuestionDetials = async ({ params }: RouteParams) => {
  const { id } = await params;
  return <div>Question Page: {id}</div>;
};

export default QuestionDetials;
