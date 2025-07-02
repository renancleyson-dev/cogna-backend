import type { Request, Response } from "express";

export function getIndex(_: Request, res: Response) {
	res.status(200).json({
		message: "Welcome to the Cogna Test Backend API",
		status: "success",
	});
}
