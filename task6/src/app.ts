import express, { Request, Response } from "express";

const app = express();
const port = 3000;

interface Kitap {
  id: number;
  ad: string;
  yazar: string;
  yil: number;
}

const kitaplar: Kitap[] = [
  { id: 1, ad: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", yil: 1866 },
  { id: 2, ad: "1984", yazar: "George Orwell", yil: 1949 },
  { id: 3, ad: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", yil: 1943 },
  { id: 4, ad: "Savaş ve Barış", yazar: "Lev Tolstoy", yil: 1869 },
];

app.get("/api/books", (req: Request, res: Response) => {
  res.json(kitaplar);
});

app.listen(port, () => {
  console.log(
    `Kitap Listesi API'si http://localhost:${port} adresinde çalışıyor`,
  );
});
