import express from "express";
import { ControllerToRoute } from "./Order.Controller";
const route=express.Router()

route.get('/',ControllerToRoute.CreateOrder)
export const OrderRoute= route