// next build (with output: "export") turns the root `/` page into a
// client-hydration-only redirect, which does nothing for users or
// crawlers without JS. Static hosts like Hostalia have no server to
// issue a real 302, so we overwrite the exported root page with a
// plain HTML redirect that works with or without JavaScript.
import { writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const outDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)), "out");
const target = "/es/";

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="0; url=${target}">
<link rel="canonical" href="https://www.metatok.ai${target}">
<title>MetaTok AI</title>
<script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
<p>Redirigiendo a <a href="${target}">metatok.ai${target}</a>…</p>
</body>
</html>
`;

writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

const staleTxt = path.join(outDir, "index.txt");
if (existsSync(staleTxt)) rmSync(staleTxt);

console.log("✓ out/index.html replaced with a static redirect to " + target);
