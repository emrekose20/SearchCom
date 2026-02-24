# Gereksinim Analizi

Tüm gereksinimlerinizi çıkardıktan sonra beraber tartışıyoruz ve son gereksinimlerin isimlerini hangi API metoduna karşılık geleceğini ve kısa açıklamalarını buraya numaralı bir şekilde yazıyorsunuz. Daha sonra aşağıya herkes kendi gereksinimiyle ilgili sayfayı oluşturmalı ve kendi sayfasında kendine ait gereksinimleri numaralı bir şekilde listeleyerek her bir gereksinimin açıklamalarını yazmalı. Toplamda grup üyesi sayısı kadar sayfa oluşturulmalı. Her grup üyesine eşit sayıda gereksinim atanmalı.

## Gereksinim Sayıları (En Az)

- **1 Kişi:** 10 gereksinim
- **2 Kişi:** 16 gereksinim
- **3 Kişi:** 21 gereksinim
- **4 Kişi:** 24 gereksinim
- **5 Kişi:** 30 gereksinim

## Gereksinimlerde Uyulması Gereken Kurallar

1. **İsimler anlamlı olmalı:** Gereksinim isimleri net ve anlaşılır olmalıdır.
2. **Açıklamalar net olmalı:** Her gereksinimin açıklaması açık ve anlaşılır şekilde yazılmalıdır.
3. **Açıklamalar teknik jargon ve kısaltmalar içermemeli:** Gereksinim açıklamaları herkesin anlayabileceği basit bir dille yazılmalıdır.
4. **Gereksinim isimleri çok uzun olmamalı ve bir eylem bildirmeli:** 
   - İsimler kısa ve öz olmalıdır
   - Bir eylem fiili içermelidir
   - Örnekler: "Kayıt Olma", "Giriş Yapma", "Profil Güncelleme", "Hesap Silme"

# Tüm Gereksinimler 

### Grup Üyesi 1 (Abdullah Emre Köse)
1. **İşletme Kaydı Oluşturma**
   - **API Metodu:** `POST /api/establishments`
   - **Açıklama:** Sisteme yeni bir restoran veya kafenin ismini ve adresini eklemeyi sağlar.
2. **İşletme Listesini Görüntüleme**
   - **API Metodu:** `GET /api/establishments`
   - **Açıklama:** Kayıtlı olan tüm restoranların bir liste halinde ekranda görünmesini sağlar.
3. **İşletme Bilgilerini Güncelleme**
   - **API Metodu:** `PUT /api/establishments/{id}`
   - **Açıklama:** Bir işletmenin değişen telefon numarasını veya çalışma saatlerini düzenlemeye yarar.
4. **Hatalı İşletme Kaydını Silme**
   - **API Metodu:** `DELETE /api/establishments/{id}`
   - **Açıklama:** Yanlış girilen veya kapanan bir mekanın bilgilerini sistemden tamamen kaldırır.
5. **Kullanıcı Hesabı Açma**
   - **API Metodu:** `POST /api/users/register`
   - **Açıklama:** Yeni bir kullanıcının isim ve e-posta ile sisteme üye olmasını sağlar.
6. **Kullanıcı Bilgilerini Görüntüleme**
   - **API Metodu:** `GET /api/users/{id}`
   - **Açıklama:** Üyenin kendi profil bilgilerini ve geçmiş işlemlerini ekranda listeler.
7. **Profil Bilgilerini Düzenleme**
   - **API Metodu:** `PUT /api/users/{id}`
   - **Açıklama:** Kullanıcının sistemdeki ismini veya şifresini değiştirmesine olanak tanır.
8. **Kullanıcı Hesabını Silme**
   - **API Metodu:** `DELETE /api/users/{id}`
   - **Açıklama:** Kullanıcının isteği üzerine hesabını ve tüm verilerini sistemden siler.

# Gereksinim Dağılımları

1. [Abdullah Emre Köse'nin Gereksinimleri](./Abdullah Emre Köse/Gereksinimler.md)
2. [Yunus Emre Yıldırım'nin Gereksinimleri](./Yunus Emre Yıldırım/Gereksinimler.md)