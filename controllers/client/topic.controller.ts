import { Request, Response } from "express";
import Topic from "../../models/topics.model";

export const topics = async (req: Request, res: Response) => {
  const topics = await Topic.find({ deleted: false });
  console.log("topics:", topics);

  res.render("client/page/topics/index");
};
