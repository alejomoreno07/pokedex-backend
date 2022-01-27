import * as Router from "koa-router";
import { general } from "../middlewares"
const { health } = general;

const router = new Router();

router.get('/health', health);

export const routes = router.routes();

