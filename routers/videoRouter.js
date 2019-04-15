import express from "express";
import routes from "../routes";
import {
  videoDetail,
  editVideo,
  deleteVideo,
  postUpload,
  getUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;
