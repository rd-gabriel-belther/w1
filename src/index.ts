import { Hono } from "hono";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", async (c) => {
	const w2 = c.env.BINDING_W2;
	const url = `${c.req.url}w2`;
	const response = await w2.fetch(url);
	const data = await response.json();
	return c.json(data);
});

export default app;
