## Backend Domain Adresi
https://searchcom.onrender.com
---
### Endpoint: `POST /comments`

**Description:**  
Kullanıcı yorum ekler.

### Request Body

```json
{
  "userId": "69d105c4933e1304e87e4b91",
  "establishmentId": "69d10604933e1304e87e4b92",
  "content": "Ortalama mekan"
}
```
### 201 Created
```json
{
    "userId": "69d105c4933e1304e87e4b91",
    "establishmentId": "69d10604933e1304e87e4b92",
    "content": "Ortalama mekan",
    "_id": "69d10677933e1304e87e4b93",
    "createdAt": "2026-04-04T12:39:19.069Z",
    "updatedAt": "2026-04-04T12:39:19.069Z",
    "__v": 0
}
```



## Sorumlu Olduğum Gereksinimler
1. **İşletme Kaydı Oluşturma**
2. **İşletme Listesini Görüntüleme**
3. **İşletme Bilgilerini Güncelleme**
4. **Hatalı İşletme Kaydını Silme**
5. **Kullanıcı Hesabı Açma**
6. **Kullanıcı Bilgilerini Görüntüleme**
7. **Profil Bilgilerini Düzenleme**
8. **Kullanıcı Hesabını Silme**
   
## Tamamladığım Gereksinim Sayısı
8 gereksinimin 8'i tamamlandı.

## Kullandığım Endpointler

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

## Postman Collection
DOLDURULACAK

## Video Linki
DOLDURULACAK

## Açıklama
Backend kısmında yorum, puan, favori ve kalan ortak olan işlemlere ait REST API metotları tarafımdan geliştirilmiştir.  
Tüm endpointler önce local ortamda test edilmiş, ardından canlı domain üzerinden Postman ile tekrar doğrulanmıştır.
