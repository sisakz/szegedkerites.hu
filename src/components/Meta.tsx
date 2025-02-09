import { Helmet } from "react-helmet-async";

const title = "2D és 3D kerítések Szegeden | Szegedkerites.hu";
const description =
  "2D és 3D kerítések árusítása és telepítése Szegeden. Minőségi anyagok, gyors kivitelezés és kedvező árak. Kérjen ajánlatot most!";
const url = "https://szegedkerites.hu";
const image = `${url}/assets/hero-image-BW_BM3oX.webp`;
const keywords =
  "kerítés Szeged, 2D kerítés, 3D kerítés, kerítéstelepítés Szeged, kerítés belátásgátló, szeged kapu";

const Meta = () => {
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Meta;
