## Frontend Domain Adresi
https://search-com.vercel.app/

### Sorumlu Olduğum Frontend Gereksinimleri
1. Yorum İşlemleri Sayfası  
2. Puan İşlemleri Sayfası  
3. Favori İşlemleri Sayfası  

### Tamamladığım Gereksinim Sayısı
3 frontend gereksiniminin 3'ünü tamamladım.

## 1. Yorum İşlemleri Sayfası

**API Endpoint:** POST /comments, GET /comments/user/:userId, DELETE /comments/:id

**Görev:** Kullanıcının giriş yaptıktan sonra mekan adıyla yorum ekleyebildiği, kendi yorumlarını listeleyebildiği ve yorum ID’si ile silebildiği web sayfasının tasarımı ve implementasyonu.

**UI Bileşenleri:**
  -Responsive yorum işlemleri sayfası (desktop ve mobile uyumlu)
  -“Mekân Adı” input alanı
  -“Yorum” textarea alanı
  -“Yorumu Gönder” butonu (primary button style)
  -“Yorum Sil” bölümü
  -“Yorum ID” input alanı
  -“Yorumu Sil” butonu (danger button style)
  -“Kendi Yorumlarım” listeleme alanı
**Her yorum için kart yapısı:**

Mekân adı
Yapılan yorum
Yorum ID bilgisi
Loading spinner (yorum ekleme, silme ve listeleme sırasında)
Status / notification alanı
Sayfa üst kısmında başlık ve geri dönüş butonu
Form container (card layout)

**Form Validasyonu:**
-HTML5 form validation (required alanlar)
-JavaScript real-time validation
-Mekân adı boş olamaz kontrolü
-Yorum alanı boş olamaz kontrolü
-Silme işlemi için yorum ID boş olamaz kontrolü
-Geçersiz veya bulunamayan mekân adı kontrolü
-Client-side ve server-side validation
-API hata durumlarında doğrulama (ör. mekan bulunamadı, yorum bulunamadı)

**Kullanıcı Deneyimi:**
-Form hatalarının kullanıcıya anlaşılır şekilde gösterilmesi
-Başarılı yorum ekleme sonrası success notification
-Başarılı yorum silme sonrası başarı mesajı ve yorum listesinin otomatik yenilenmesi
-Hata durumlarında kullanıcı dostu mesajlar
-Kullanıcının yalnızca kendi yorumlarını görebilmesi
-Form submission prevention (double-click koruması)
-Accessible form labels ve ARIA attributes
-Keyboard navigation desteği (Tab, Enter)

**Teknik Detaylar:**
-Framework: React / Vue / Angular veya Vanilla JS
-Fetch API veya Axios ile backend iletişimi
-State management (yorum listesi, loading state, error state)
-Giriş yapan kullanıcı bilgisinin localStorage / sessionStorage üzerinden alınması
-Dinamik liste render işlemleri
-Responsive tasarım desteği
-Accessibility (WCAG 2.1 AA compliance)

## 2. Puan İşlemleri Sayfası

API Endpoint: POST /ratings, GET /ratings/user/:userId, PUT /ratings/:id
Görev: Kullanıcının giriş yaptıktan sonra mekan adıyla puan verebildiği, kendi verdiği puanları listeleyebildiği ve puan ID’si ile puanını güncelleyebildiği web sayfasının tasarımı ve implementasyonu.

UI Bileşenleri:
Responsive puan işlemleri sayfası (desktop ve mobile uyumlu)
“Mekân Adı” input alanı
“Puan” input alanı veya yıldız seçim bileşeni
“Puan Gönder” butonu
“Puan Güncelle” bölümü
“Puan ID” input alanı
“Yeni Puan” input alanı veya yıldız seçim bileşeni
“Puanı Güncelle” butonu
“Kendi Puanlarım” listeleme alanı
Her puan için kart yapısı:

Mekân adı
Verilen puan
Puan ID bilgisi
Loading spinner
Status / notification alanı
Card / section layout

Form Validasyonu:
HTML5 form validation
JavaScript real-time validation
Mekân adı boş olamaz kontrolü
Puan alanı boş olamaz kontrolü
Puan sadece 1 ile 5 arasında olabilir kontrolü
Güncelleme işlemi için puan ID boş olamaz kontrolü
Yeni puan 1-5 aralığında olmalı kontrolü
Client-side ve server-side validation
API hata durumlarının kontrolü (mekan bulunamadı, puan bulunamadı vb.)

Kullanıcı Deneyimi:
Başarılı puan verme sonrası success notification
Başarılı puan güncelleme sonrası başarı mesajı
Puan listesi güncelleme sonrası otomatik yenilenme
Kendi puanlarının anlaşılır şekilde listelenmesi
Hata mesajlarının kullanıcı dostu olması
Double-click koruması
Accessible form labels ve ARIA attributes
Keyboard navigation desteği

Teknik Detaylar:
Framework: React / Vue / Angular veya Vanilla JS
Fetch API veya Axios ile veri alışverişi
State management (puan listesi, loading, error, success state)
Giriş yapan kullanıcı bilgisinin localStorage / sessionStorage üzerinden kullanılması
Dinamik puan listeleme işlemleri
Responsive tasarım
Accessibility (WCAG 2.1 AA compliance)

## Oluşturduğum Sayfalar
- `comments.html`
- `ratings.html`
- `favorites.html`
- `index.html`
- `panel.html`

## Kullandığım JavaScript Dosyaları
- `comments.js`
- `ratings.js`
- `favorites.js`

## Video Linki
DOLDURULACAK

## Açıklama
Frontend kısmında yorum, puan ve favori işlemleri için kullanıcı arayüzleri hazırlanmıştır.  
