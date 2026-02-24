1. **İşletme Kaydı Oluşturma**
   - **API Metodu:** `POST /api/establishments`
   - **Açıklama:** Sisteme henüz dahil edilmemiş yeni bir restoran, kafe veya işletmenin temel bilgilerini veritabanına kaydeder. Bu işlem yönetici veya işletme sahibi yetkisiyle gerçekleştirilir.

2. **İşletme Listesini Görüntüleme**
   - **API Metodu:** `GET /api/establishments`
   - **Açıklama:** Kayıtlı olan tüm işletmelerin bir liste halinde kullanıcıya sunulmasını sağlar. Kullanıcılar bu sayede sistemdeki tüm mekanları tek bir ekranda görebilir.

3. **İşletme Bilgilerini Güncelleme**
   - **API Metodu:** `PUT /api/establishments/{id}`
   - **Açıklama:** Mevcut bir işletmenin telefon numarası, çalışma saatleri veya adres bilgilerinde bir değişiklik olduğunda bu verilerin güncellenmesini sağlar.

4. **Hatalı İşletme Kaydını Silme**
   - **API Metodu:** `DELETE /api/establishments/{id}`
   - **Açıklama:** Kapanan işletmelerin veya yanlışlıkla girilmiş hatalı mekan kayıtlarının sistemden tamamen kaldırılması işlemini yürütür.

5. **Kullanıcı Hesabı Açma**
   - **API Metodu:** `POST /api/users/register`
   - **Açıklama:** Yeni ziyaretçilerin platformu tam yetkiyle kullanabilmesi için isim, e-posta ve şifre bilgileriyle yeni bir kullanıcı profili oluşturmasını sağlar.

6. **Kullanıcı Bilgilerini Görüntüleme**
   - **API Metodu:** `GET /api/users/{id}`
   - **Açıklama:** Giriş yapmış olan kullanıcının kendi profil verilerini, üyelik tarihini ve uygulama içindeki geçmiş aktivitelerini görmesini sağlayan sorgu mekanizmasıdır.

7. **Profil Bilgilerini Düzenleme**
   - **API Metodu:** `PUT /api/users/{id}`
   - **Açıklama:** Kullanıcının sistemdeki ismini, şifresini veya e-posta adresini güncellemesine olanak tanır. Profilin güncel tutulması için kullanılır.

8. **Kullanıcı Hesabını Silme**
   - **API Metodu:** `DELETE /api/users/{id}`
   - **Açıklama:** Kullanıcının kendi isteği doğrultusunda hesabını pasif hale getirmesi veya tüm verileriyle birlikte sistemden kalıcı olarak silinmesi sürecini yönetir.

9. **Yapay Zeka Destekli Akıllı Mekan Önerisi (Bonus)**
   - **API Metodu:** `POST /api/ai/recommend`
   - **Açıklama:** Kullanıcının geçmiş tercihlerini analiz ederek yapay zeka yardımıyla kişiselleştirilmiş mekan önerileri sunar.