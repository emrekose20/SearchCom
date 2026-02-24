
# Tüm Gereksinimler 

### Abdullah Emre Köse
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

1. [Abdullah Emre Köse'nin Gereksinimleri](./Abdullah-Emre-Kose/Gereksinimler.md)
2. [Yunus Emre Yıldırım'ın Gereksinimleri](./Yunus-Emre-Yildirim/Gereksinimler.md)