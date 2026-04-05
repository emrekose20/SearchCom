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

1. İşletme Yönetimi 
   
* POST /api/establishments
* GET /api/establishments
* PUT /api/establishments/{id}
* DELETE /api/establishments/{id}
2. Kullanıcı Yönetimi 

* POST /api/users/register
* GET /api/users/{id}
* PUT /api/users/{id}
* DELETE /api/users/{id}
  
## Postman Collection
DOLDURULACAK

## Video Linki
DOLDURULACAK

## Açıklama
Backend kısmında yorum, puan, favori ve kalan ortak olan işlemlere ait REST API metotları tarafımdan geliştirilmiştir.  
Tüm endpointler önce local ortamda test edilmiş, ardından canlı domain üzerinden Postman ile tekrar doğrulanmıştır.
