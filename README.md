# Second_term_trainee_tasks

# 🚀 25 Günlük Full-Stack Staj Programı ve Görevleri

Bu depo (repository), staj süreniz boyunca tamamlamanız gereken temel web teknolojileri görevlerini içermektedir. 

---

## ⚠️ ÖNEMLİ: Git ve Forklama Akış Kuralları

### 👥 1. Takım Liderleri İçin Adımlar:
1. Bu depoyu Takım liderleri kendi GitHub hesablarına **Fork** etmeliler.
3. Fork ettiğiniz depoyu bilgisayarınıza **Clone** edin.
4. Kendi adınızla bir çalışma branch'i açın: `git checkout -b #task-1-ad-soyad` - `git checkout -b #task-2-ad-soyad` vb şekilde.
4. **Kural:** Asla `main` branch'inde doğrudan kod geliştirmesi yapmayın. Tüm kodlarınızı kendi branch'inizde yazıp push edin.

### 🧑‍💻 2. Takım Üyeleri İçin Adımlar:
1. **DİKKAT:** Ana Görev reposunu DEĞİL, bağlı olduğunuz **Takım Liderinin GitHub hesabındaki depoyu Fork** edin.
2. Liderinizden fork ettiğiniz depoyu bilgisayarınıza **Clone** edin.
3. Kendi adınızla bir çalışma branch'i açın: `git checkout -b #task-1-ad-soyad` - `git checkout -b #task-2-ad-soyad` vb şekilde. 
4. **Kural:** Asla `main` branch'inde doğrudan kod geliştirmesi yapmayın. Tüm görevleri kendi adınıza açtığınız bu branch içinde tamamlayıp push edin.

---

## 🛠️ Görev Listesi ve Yol Haritası

### 🎨 Bölüm 1: HTML & CSS (1-3. Gün)
* **Görev:** Kendiniz için tek sayfalık bir "Linktree" klonu (Sosyal medya link ağ sayfası) yapın.
* **Beklentiler:**
  - [x] HTML5 semantik etiketlerini kullanın.
  - [x] Sayfa dikeyde ortalanmış ve esnek (`Flexbox` veya `Grid`) olmalı.
  - [x] Mobil cihazlarla tam uyumlu (Responsive) olmalı.
  - [x] Link butonlarına gelindiğinde (Hover) yumuşak bir renk veya büyüme efekti ekleyin.

### ⚡ Bölüm 2: JavaScript (4-6. Gün)
* **Görev:** İlk görevde yaptığınız Linktree sayfasına "Karanlık Mod" ve "Geri Sayım Sayacı" ekleyin.
* **Beklentiler:**
  - [x] Sayfaya bir buton ekleyin. Butona basıldığında arka plan rengi siyah, yazılar beyaz olsun (Karanlık Mod).
  - [x] Sayfanın üst kısmına "Stajın Bitmesine Kalan Süre" başlığıyla canlı akan bir geri sayım sayacı (`setInterval` kullanarak) ekleyin.

### 🐘 Bölüm 3: PHP (7-9. Gün)
* **Görev:** İletişim formu verilerini veritabanı olmadan sunucudaki bir `.txt` dosyasına kaydedin.
* **Beklentiler:**
  - [ ] Ad, Soyad ve Mesaj alanlarından oluşan basit bir HTML formu oluşturun.
  - [ ] Formun `action` parametresi bir PHP dosyasına yönlensin ve verileri `POST` metoduyla göndersin.
  - [ ] PHP tarafında bu verileri alıp, sunucu içinde `mesajlar.txt` adlı bir dosyaya her yeni mesaj alt alta gelecek şekilde yazdırın.

### 🌐 Bölüm 4: Laravel (10-12. Gün)
* **Görev:** Hazır kimlik doğrulama (Giriş Yap / Kayıt Ol) sistemini ayağa kaldırın.
* **Beklentiler:**
  - [ ] Bilgisayarınızda sıfır bir Laravel projesi oluşturun.
  - [ ] `Laravel Breeze` paketini projenize dahil edin.
  - [ ] Yerel veritabanı (MySQL/SQLite) bağlantısını yapıp `php artisan migrate` komutunu çalıştırın.
  - [ ] Kayıt olma, giriş yapma ve şifre sıfırlama ekranlarının sorunsuz çalıştığını tarayıcıda doğrulayın.

### ⚛️ Bölüm 5: React (13-15. Gün)
* **Görev:** Vite veya Create React App kullanarak dinamik bir "Yapılacaklar (Todo) Listesi" yapın.
* **Beklentiler:**
  - [ ] Projeyi bileşenlere (Component) ayırın (Örn: `TodoInput`, `TodoList`, `TodoItem`).
  - [ ] `useState` hook'u kullanarak listeye yeni eleman ekleme ve listeden eleman silme özelliklerini yapın.
  - [ ] Sayfada anlık saati gösteren küçük bir dijital saat bileşeni ekleyin.

### ⚙️ Bölüm 6: Node.js (16-18. Gün)
* **Görev:** Express.js kullanarak statik bir JSON verisi dönen "Kitap Listesi API'si" yazın.
* **Beklentiler:**
  - [ ] `npm init` ile projeyi başlatıp `express` paketini yükleyin.
  - [ ] Kodun içerisinde elle yazılmış (hardcoded) 3-4 adet kitap nesnesi barındıran bir dizi (Array) oluşturun.
  - [ ] `/api/books` rotasına (Route) `GET` isteği atıldığında bu kitap listesini JSON formatında döndürün.

### 🛠️ Bölüm 7: TypeScript (19-21. Gün)
* **Görev:** Bir önceki Node.js API görevine TypeScript entegre ederek tip güvenliği sağlayın.
* **Beklentiler:**
  - [ ] Projeye TypeScript ekleyin ve `tsconfig.json` ayarlarını yapın.
  - [ ] Kitap nesnesi için bir `interface` veya `type` tanımlayın (Örn: `id: number`, `title: string`, `author: string`).
  - [ ] Kitap dizisini ve API fonksiyon parametrelerini bu tiplerle sınırlandırın.

### 🚀 Bölüm 8: Next.js (22-25. Gün)
* **Görev:** Next.js App Router yapısını kullanarak çok sayfalı basit bir web sitesi yapın.
* **Beklentiler:**
  - [ ] Sıfırdan bir Next.js projesi kurun.
  - [ ] Klasör yapısını kullanarak `Ana Sayfa`, `Hakkımızda` ve `İletişim` sayfalarını oluşturun.
  - [ ] Next.js'in kendi `<Link>` bileşenini kullanarak sayfalar arasında sayfa yenilenmeden geçiş yapılmasını sağlayın.

---

## 📬 Teslim Süreci
* Her görevi tamamladığınızda ilgili başlığın yanındaki `[ ]` kutucuğunu `[x]` olarak güncelleyin.
* Kodlarınızı **kesinlikle kendi adınıza açtığınız branch'e** push edin.
* Takım liderleri üyelerin branch'lerini, staj sorumluları ise takım liderlerinin branch'lerini GitHub üzerinden doğrudan takip edecektir. Başarılar dileriz!

---

## 📖 Stajyerler İçin Teknik Kılavuz & İpuçları

### 💡 1. Kutucukları `[ ]` İşaretlemek
GitHub üzerinde yaptığınız görevlerin takibini kolaylaştırmak için bir checklist (yapılacaklar listesi) mekanizması bulunur. Bir görevi bitirdiğinizde projenizdeki `README.md` dosyasını kod editörünüzde açın:
* Boş kutu görünümü için: `- [ ] Görev maddesi`
* Tamamlanmış (işaretli) kutu görünümü için boşluğu silip **küçük x harfi** yazın: `- [x] Görev maddesi`

Değişiklikleri push ettiğinizde GitHub sitenizde bu maddelerin otomatik olarak tik işaretiyle kapandığını göreceksiniz.

### ⚡ 2. Next.js `<Link>` Bileşeni Kullanımı (Sayfa Yenilenmeden Geçiş)
Klasik HTML sitelerinde kullanılan standart `<a href="...">` etiketi, tıklandığında tüm web sayfasını tarayıcıda tamamen baştan yükler (sayfa beyazlar ve yenilenir). 

Next.js gibi modern kütüphanelerde ise sayfanın yenilenmesini önlemek ve kullanıcının anında diğer sayfaya geçmesini sağlamak için projenin en üstüne `next/link` kütüphanesi dahil edilir. Ekstra bir parametre vermenize gerek yoktur, sadece standard `<a>` yerine `<Link>` yazmanız yeterlidir.

**Örnek Doğru Kullanım:**
```jsx
// Projenin en üstüne bu import satırını ekleyin:
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      {/* Yanlış: <a href="/hakkimizda">Hakkımızda</a> (Sayfayı yeniler) */}
      {/* Doğru: Sayfa yenilenmeden jet hızında geçiş sağlar 👇 */}
      <Link href="/">Ana Sayfa</Link>
      <Link href="/hakkimizda">Hakkımızda</Link>
      <Link href="/iletisim">İletişim</Link>
    </nav>
  );
}
```

