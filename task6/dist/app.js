"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const kitaplar = [
    { id: 1, ad: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", yil: 1866 },
    { id: 2, ad: "1984", yazar: "George Orwell", yil: 1949 },
    { id: 3, ad: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", yil: 1943 },
    { id: 4, ad: "Savaş ve Barış", yazar: "Lev Tolstoy", yil: 1869 },
];
app.get("/api/books", (req, res) => {
    res.json(kitaplar);
});
app.listen(port, () => {
    console.log(`Kitap Listesi API'si http://localhost:${port} adresinde çalışıyor`);
});
