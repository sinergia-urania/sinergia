# Sinergia Urania – Tarot aplikacija

Ovo je React aplikacija sa duhovnim modulima (Tarot, Jyotish, Numerologija, Sinergija) koja se automatski deployuje na Netlify svaki put kada se napravi izmena i "push" na GitHub.

---

## 🚀 Kako da ažuriram sajt kada napravim izmene?

1. Otvori terminal u root folderu projekta
2. Unesi sledeće komande:

```bash
git add .
git commit -m "Opis promene koju si uradio"
git push
```

3. Netlify će automatski deployovati novu verziju
4. Otvori aplikaciju ovde:  
👉 https://sinergia-urania.netlify.app

---

## 🧩 Lokacija `_redirects` fajla (za SPA routing)

Ovaj fajl se nalazi u:  
`public/_redirects`

Njegov sadržaj mora biti:
```
/*    /index.html   200
```

---

## 🛠 Komande koje se najčešće koriste

| Komanda                      | Objašnjenje                                      |
|-----------------------------|--------------------------------------------------|
| `npm install`               | Instalira sve potrebne biblioteke (samo prvi put) |
| `npm start`                 | Pokreće aplikaciju lokalno na `localhost:3000`    |
| `npm run build`             | Pravi optimizovanu verziju aplikacije             |
| `git add .`                 | Dodaje sve izmene u staging                      |
| `git commit -m "..."`       | Kreira zapis sa opisom promena                   |
| `git push`                  | Šalje promene na GitHub i aktivira deploy        |

---

## 📱 Mobilni prikaz

Centar rotacije je spušten ispod ekrana kako bi se gornji deo kruga video.  
Testiraj i lokalno i na telefonu. Za pregled u Chrome Dev Tools koristi fallback dimenzije.

---

## ✨ Napomena

Ako želiš da dodaš novu komponentu:
- Kreiraj fajl u `src/components/`
- Uvezi je tamo gde ti treba
- Ne zaboravi `git add .`, `commit`, `push`

---

📘 Autor: Marko Korać  
🔗 Live: https://sinergia-urania.netlify.app