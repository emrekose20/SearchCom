# SearchCom🔎💬



---

## Proje Hakkında

![Ürün Tanıtım Görseli](https://github.com/emrekose20/SearchCom/blob/c3f5d53ae68bb6f4a4254b85ae83cfb6e5ad69c0/SearchCom%20%C3%9Cr%C3%BCn%20Tan%C4%B1t%C4%B1m%20G%C3%B6rseli.png)

**Proje Tanımı:** 
> SearchCom, kullanıcıların ziyaret ettikleri mekânları kolayca keşfetmelerini, puanlamalarını ve deneyimlerini paylaşmalarını sağlamak amacıyla geliştirilmiş modern bir yorum ve değerlendirme uygulamasıdır. Kullanıcı dostu arayüzü sayesinde SearchCom, mekân arama, puanlama ve yorum yapma süreçlerini hızlı ve zahmetsiz hale getirir. SearchCom da restoranlar, kafeler, eğlence mekânları ve daha birçok farklı kategori yer almakta olup, kullanıcılar gerçek deneyimlere dayalı yorumlar sayesinde gitmeyi planladıkları mekânlar hakkında güvenilir bilgilere ulaşabilirler. SearchCom, kullanıcıların hem kendi deneyimlerini paylaşmalarına olanak tanırken hem de diğer kullanıcıların yorum ve puanlarını inceleyerek daha bilinçli tercihler yapmalarını sağlar. SearchCom mekân keşif ve değerlendirme servisi sitemize hoş geldiniz, size hizmet vermek için sabırsızlanıyoruz.
>
> 
**Proje Kategorisi:** 
> Konum Tabanlı Sosyal Uygulama

**Referans Uygulama:** 
> [Örnek Referans Uygulama](https://foursquare.com/)

---

## Proje Linkleri

- **REST API Adresi:** DOLDURULACAK.
- **Web Frontend Adresi:** DOLDURULACAK.

---

## Proje Ekibi

**Grup Adı:** 
> Belirlediğiniz grup adı buraya yazılacaktır.

**Ekip Üyeleri:** 
- Ali Tutar
- Veli Yılmaz
- Selami Demir
- Ayşe Kaya
- Fatma Öztürk
- Hayriye Şahin

---

## Dokümantasyon

Proje dokümantasyonuna aşağıdaki linklerden erişebilirsiniz:

1. [Gereksinim Analizi](Gereksinim-Analizi.md)
2. [REST API Tasarımı](API-Tasarimi.md)
3. [REST API](Rest-API.md)
4. [Web Front-End](WebFrontEnd.md)
5. [Mobil Front-End](MobilFrontEnd.md)
6. [Mobil Backend](MobilBackEnd.md)
7. [Video Sunum](Sunum.md)

---

## Projeyi Klonlama ve Düzenleme

**ÖNEMLİ:** Aşağıdaki işlemleri sadece grup lideri veya grup tarafından seçilen bir üye yapmalıdır.

### Kendi Reponuzu Oluşturma ve Şablonu Ekleme (Grup Lideri veya Seçilen Üye)

**Adım 1: Bu Şablon Repoyu Klonlama**
1. Bu (YazMuh şablon) repoyu yerel bilgisayarınıza klonlayın:

```bash
git clone https://github.com/yazmuh/YazMuh.git
```

**Adım 2: Kendi Reponuza Ekleme**
1. Kendi reponuzu da git clone ile çekerek Yazmuh şablonunu içine ekleyin.
2. Böylece şablon projenin tüm içeriği kendi reponuza kopyalanmış olur.
3. Grup lideri ya da seçilen üye şablon eklenmiş repoyu push etmeli ve diğer grup üyelerinin erişimine açmalı.

**Adım 3: Diğer Grup Üyelerini Collaborator Olarak Ekleme**
1. Kendi repo sayfanızda **Settings** sekmesine gidin
2. Sol menüden **Collaborators** seçeneğine tıklayın
3. **Add people** butonuna tıklayın
4. Diğer grup üyelerinin GitHub kullanıcı adlarını veya email adreslerini girin
5. Her bir grup üyesini **collaborator** olarak ekleyin
6. Eklenen üyelere GitHub üzerinden davet gönderilecektir
7. Her grup üyesi email'deki daveti kabul etmelidir

**Adım 4: Diğer Grup Üyelerinin Projeyi Klonlaması**
Repo sahibi ve collaborator olarak eklenen tüm grup üyeleri:

```bash
git clone https://github.com/repo-sahibinin-kullanici-adi/proje-adi.git
```

### Projeyi Düzenleme

Kendi reponuza ekledikten sonra projeyi kendi bilgilerinizle güncellemeniz gerekmektedir:

1. **Proje Bilgilerini Güncelleme:**
   - `Readme.md` dosyasındaki proje adı, grup adı, ekip üyeleri
   - Proje tanımı ve kategorisi
   - Referans uygulama bilgisi

2. **Gereksinimleri Ekleme:**
   - `Gereksinim-Analizi.md` dosyasına kendi gereksinimlerinizi ekleyin
   - Her ekip üyesi için bir klasör oluşturun (örn: `Ali-Tutar/`)
   - Her ekip üyesinin klasörüne gereksinim dosyası ekleyin (örn: `Ali-Tutar/Ali-Tutar-Gereksinimler.md`)
   - Gereksinim sayılarına dikkat edin (Gereksinim-Analizi.md dosyasındaki kurallara göre)

3. **Dokümantasyonu Güncelleme:**
   - Tüm dokümantasyon dosyalarını kendi projenize göre düzenleyin
   - Her ekip üyesinin klasörüne görev dosyalarını ekleyin:
     - `[İsim-Soyisim]/[İsim-Soyisim]-Rest-API-Gorevleri.md`
     - `[İsim-Soyisim]/[İsim-Soyisim]-Web-Frontend-Gorevleri.md`
     - `[İsim-Soyisim]/[İsim-Soyisim]-Mobil-Frontend-Gorevleri.md`
     - `[İsim-Soyisim]/[İsim-Soyisim]-Mobil-Backend-Gorevleri.md`
   - Ekip üyelerinin görevlerini güncelleyin
   - API endpoint'lerini ve açıklamalarını kontrol edin

4. **Değişiklikleri Kaydetme:**
   ```bash
   git add .
   git commit -m "Proje bilgileri güncellendi"
   git push origin main
   ```

### Notlar

- **Repo oluşturma:** Sadece grup lideri veya seçilen bir üye yeni repo oluşturup şablonu eklemelidir.
- **Collaborator ekleme:** Repo sahibi, diğer tüm grup üyelerini collaborator olarak eklemelidir.
- **Repo adı:** GitHub'da yeni repo oluştururken repo adını proje adınız ile belirleyin.
- **Klasör yapısı:** Her grup üyesi kendi klasörünü oluşturmalıdır. Klasör adı formatı: `[İsim-Soyisim]` (örn: `Ali-Tutar/`, `Veli-Yılmaz/`). Her grup üyesinin tüm dosyaları (gereksinimler, REST API görevleri, frontend görevleri vb.) kendi klasöründe bulunmalıdır.
- **Tüm placeholder'ları değiştirin:** (örn: [Grup Üyesi 2], [Soyisim], PROJE ADI vb.) kendi bilgilerinizle değiştirin
- **Dokümantasyon:** Tüm dokümantasyon dosyalarını eksiksiz doldurun
- **Görev dağılımı:** Her ekip üyesi kendi görevlerini tamamlamalıdır
- **İşbirliği:** Collaborator olarak eklenen üyeler, projeye doğrudan commit ve push yapabilirler
