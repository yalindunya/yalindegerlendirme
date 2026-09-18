# Yalın Değerlendirme

Orijinal `Yalın Değerlendirme` Excel dosyasındaki 21 konu başlığı ve 145 soruyu temel alan, kullanıcı dostu bir web uygulaması. Tarayıcıda çalışır, ek bir sunucu veya kurulum gerektirmez.

## Özellikler

- **Özet ekranı:** Fabrika puanı, tamamlanma oranı, en büyük açık ve açık aksiyon sayısı; 21 konu başlığını karşılaştıran radar grafiği ve özet tablo.
- **Değerlendirme ekranı:** Her konu başlığı için sorular, 0-4 arası puanlama butonları, düzenlenebilir hedef değerler ve gerçek zamanlı fark (gap) göstergesi.
- **Aksiyon Planı:** Konu başlığına bağlı aksiyon, sorumlu, hedef/gerçekleşen tarih ve otomatik durum (Açık / Gecikti / Tamamlandı) takibi.
- **Birden çok değerlendirme:** Tarayıcıda (localStorage) birden fazla değerlendirme kaydedilebilir, çoğaltılabilir, silinebilir; üst menüden değiştirilebilir.
- **Örnek veri:** Orijinal Excel dosyasındaki gerçek puanlarla dolu bir örnek değerlendirme otomatik olarak yüklenir.
- **Dışa aktarma:** Sonuçları `.xlsx` (Excel) veya `.json` (yedek) olarak indirebilir, `.json` yedeğini geri yükleyebilirsiniz.
- **Yazdırma / PDF:** Tarayıcının yazdırma özelliğiyle temiz bir rapor çıktısı alınabilir.
- Açık/koyu tema desteği ve mobil uyumlu tasarım.
- **PWA (yüklenebilir uygulama):** Telefon veya bilgisayara "Ana ekrana ekle" ile yüklenebilir, temel dosyalar önbelleğe alındığı için tekrar açılışlarda internet gerekmez (veriler zaten localStorage'da yerel tutuluyor).

## Yayınlama (GitHub Pages)

Bu depo `main` dalına her `app/` değişikliğinde otomatik olarak GitHub Pages'e yayın yapan bir GitHub Actions iş akışı (`.github/workflows/deploy-pages.yml`) içerir. Yayının aktifleşmesi için depo sahibinin **bir kerelik** şu adımı yapması gerekir:

1. GitHub'da depo → **Settings → Pages**
2. **Build and deployment → Source** kısmından **GitHub Actions** seçin
3. Kaydedin; bir sonraki push'ta (veya Actions sekmesinden elle tetiklemede) site şu adreste yayınlanır: `https://yalindunya.github.io/yalindegerlendirme/`

## Çalıştırma

Uygulama tamamen istemci taraflı (statik) olduğu için basit bir HTTP sunucusu yeterlidir:

```bash
cd app
python3 -m http.server 8080
```

Ardından tarayıcıda `http://localhost:8080` adresini açın. (Dosyayı doğrudan `file://` ile açmak da çoğunlukla çalışır, ancak bazı tarayıcılarda yerel script kısıtlamaları nedeniyle bir HTTP sunucusu önerilir.)

## Klasör yapısı

```
app/
  index.html            Uygulama kabuğu
  manifest.webmanifest  PWA manifesti (ad, ikon, tema rengi)
  service-worker.js     Çevrimdışı önbellekleme
  icons/                PWA / mağaza ikonları
  css/styles.css        Tüm stiller
  js/data.js            21 konu başlığı ve 145 sorunun verisi (orijinal Excel'den çıkarıldı)
  js/app.js             Uygulama mantığı (durum yönetimi, hesaplamalar, render, dışa aktarma)
.github/workflows/deploy-pages.yml   app/ klasörünü GitHub Pages'e otomatik yayınlar
```

Veriler tarayıcının `localStorage`'ında saklanır; sunucu tarafında herhangi bir veritabanı yoktur. Excel dışa aktarma özelliği, CDN üzerinden yüklenen [SheetJS](https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js) kütüphanesini kullanır; bu nedenle dışa aktarma için internet bağlantısı gerekir.
