
# Tüm Gereksinimler 

### Abdullah Emre KÖSE
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

### Yunus Emre YILDIRIM
9. **Mekana Puan Verme**
   - **API Metodu:** `POST /api/ratings`
   - **Açıklama:** Kullanıcının ziyaret ettiği bir işletmeye 1 ile 5 arasında bir puan vererek memnuniyetini belirtmesini sağlar.

10. **Mekan Puanlarını Listeleme**
    - **API Metodu:** `GET /api/ratings/establishment/{id}`
    - **Açıklama:** Belirli bir işletmeye diğer kullanıcılar tarafından verilmiş olan tüm puanları ve genel ortalamayı ekranda gösterir.

11. **Verilen Puanı Değiştirme**
    - **API Metodu:** `PUT /api/ratings/{id}`
    - **Açıklama:** Kullanıcının daha önce bir mekan için verdiği puanı güncellemesine veya fikrini değiştirmesine olanak tanır.

12. **Mekan Yorumunu Silme**
    - **API Metodu:** `DELETE /api/comments/{id}`
    - **Açıklama:** Kullanıcının bir işletme hakkında yazdığı yorumu veya yaptığı değerlendirmeyi sistemden tamamen kaldırmasını sağlar.

13. **Mekanı Favorilere Ekleme**
    - **API Metodu:** `POST /api/favorites`
    - **Açıklama:** Beğenilen bir işletmenin, daha sonra hızlıca ulaşılabilmesi için kullanıcının kişisel favori listesine kaydedilmesini sağlar.

14. **Favori Listesini Görüntüleme**
    - **API Metodu:** `GET /api/favorites/{userId}`
    - **Açıklama:** Kullanıcının kendi profilinde, daha önceden favorilerine eklediği tüm işletmeleri toplu bir liste halinde görmesini sağlar.

15. **Favori Listesi Başlığını Güncelleme**
    - **API Metodu:** `PUT /api/favorites/folders/{id}`
    - **Açıklama:** Kullanıcının oluşturduğu favori koleksiyonlarının ismini (Örn: "Hafta sonu gidilecek yerler") düzenlemesine yardımcı olur.

16. **Mekanı Favorilerden Çıkarma**
    - **API Metodu:** `DELETE /api/favorites/{id}`
    - **Açıklama:** Artık tercih edilmeyen veya listeden çıkarılmak istenen bir işletmenin favori listesinden silinmesini sağlar.
# Gereksinim Dağılımları

1. [Abdullah Emre Köse'nin Gereksinimleri](./Abdullah%20Emre%20K%C3%B6se/Gereksinimler.md)
2. [Yunus Emre Yıldırım'ın Gereksinimleri](./Yunus%20Emre%20Y%C4%B1ld%C4%B1r%C4%B1m/Gereksinimler.md)