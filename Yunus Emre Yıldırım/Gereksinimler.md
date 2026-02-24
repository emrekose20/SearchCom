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