# SzegedKerítés

## DatoCMS

- url: [https://szegedkerites.admin.datocms.com](https://szegedkerites.admin.datocms.com/)
- username: szegedkerites@fork.hu
- password: !!Szegedkerites@2025!!
- project owner: admin@fork.hu

## Contact Form Service

Repo: [https://github.com/tetragon-hu/contact-form](https://github.com/tetragon-hu/contact-form)
Cloud Build: [https://console.cloud.google.com/cloud-build/builds;region=global?query=trigger_id%3D%22faaca716-72d3-493b-a2eb-cf17860b732a%22&invt=AbuZ3Q&project=tetragon-hu](https://console.cloud.google.com/cloud-build/builds;region=global?query=trigger_id%3D%22faaca716-72d3-493b-a2eb-cf17860b732a%22&invt=AbuZ3Q&project=tetragon-hu)
Cloud Run: [https://console.cloud.google.com/run/detail/europe-west4/contact-form/triggers?invt=AbuZ2Q&project=tetragon-hu](https://console.cloud.google.com/run/detail/europe-west4/contact-form/triggers?invt=AbuZ2Q&project=tetragon-hu)

## Email (Forpsi)

### Postmaster

Az SMTP, POP3, IMAP email protokollok és a WEBMAIL adatai:
Az adminisztrátor jogosultsággal rendelkező email fiókot automatikusan létrehozza rendszerünk. Ezt a fiókot az összes többi fiók kezelésére lehet használni.

Kezelés:

Az email kezelő rendszer több felületből áll.

A kezelő felületet továbbítás, automatikus válaszok
és alias címek beállítására használhatja:

Szerver (host): http://webmail.forpsi.com
Felhasználónév: postmaster@szegedkerites.hu
Domain: szegedkerites.hu
Jelszó: e4DBxaWvtbAn9a!

Hozzáférés az e-mailekhez:

1. POP3

Szerver (host): pop3.forpsi.com
Felhasználónév: postmaster@szegedkerites.hu
Jelszó: e4DBxaWvtbAn9a!

2. IMAP:

Szerver (host): imap.forpsi.com
Felhasználónév: postmaster@szegedkerites.hu
Jelszó: e4DBxaWvtbAn9a!

3. WebMail:

Szerver (host): http://webmail.forpsi.com
Felhasználónév: postmaster@szegedkerites.hu
Jelszó: dTC-wwD75D

E-mail kliens beállítások:

POP3 szerver: pop3.forpsi.com
IMAP szerver: imap.forpsi.com
SMTP szerver: smtp.forpsi.com (az e-mail kliens beállításainál ki kell választania, hogy a kiszolgáló hitelesítést igényel, és ugyanazokat a beállításokat kell használnia, mint a bejövő levelek kiszolgálójánál)

Ha a domain a mi névszervereinket használja, a levelek kézbesíthetőségének javítása érdekében egy SPF rekord kerül beállításra a domainhez.

### Other email

- info@szegedkerites.hu
- password: e4DBxaWvtbAn9a!
- Incoming mail (IMAP):

  - imap.forpsi.com
  - Username: info@szegedkerites.hu
  - Password:
  - Use SSL: Enabled
  - Server port: 993

- Outgoing mail (SMTP):
  - smtp.forpsi.com
  - Use SSL: Enabled
  - Server port: 465
