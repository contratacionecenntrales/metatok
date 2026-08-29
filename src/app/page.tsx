export default function RootRedirect() {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="refresh" content="0; url=/es/" />
        <title>MetaTok AI</title>
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/es/');" }} />
        <p>
          Redirigiendo a <a href="/es/">MetaTok AI</a>…
        </p>
      </body>
    </html>
  );
}
