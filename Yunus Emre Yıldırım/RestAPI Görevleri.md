## Backend Domain Adresi
https://searchcom.onrender.com

### Endpoint: `POST /comments`

**Description:**  
Kullanıcı yorum ekler.

---

### Request Body

```json
{
  "userId": "69d105c4933e1304e87e4b91",
  "establishmentId": "69d10604933e1304e87e4b92",
  "content": "Ortalama mekan"
}
```
##201 Created
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



## Sorumlu Olduğum Gereksinimler
1. Mekana Puan Verme  
2. Mekana Verilen Puanları Listeleme  
3. Verilen Puanı Değiştirme  
4. Mekan Yorumunu Silme  
5. Mekanı Favorilere Ekleme  
6. Favori Listesini Görüntüleme   
7. Mekanı Favorilerden Çıkarma  
8. Mekana Yorum Ekleme

## Tamamladığım Gereksinim Sayısı
8 gereksinimin 8'i tamamlandı.

## Kullandığım Endpointler

### Yorum İşlemleri
- `POST /api/comments`
- `DELETE /api/comments/{id}`

### Puan İşlemleri
- `POST /api/ratings`
- `GET /api/ratings/establishment/{id}`
- `PUT /api/ratings/{id}`

### Favori İşlemleri
- `POST /api/favorites`
- `GET /api/favorites/{userId}`
- `DELETE /api/favorites/{id}`

## Postman Collection
DOLDURULACAK

## Video Linki
DOLDURULACAK

## Açıklama
Backend kısmında yorum, puan, favori ve kalan ortak olan işlemlere ait REST API metotları tarafımdan geliştirilmiştir.  
Tüm endpointler önce local ortamda test edilmiş, ardından canlı domain üzerinden Postman ile tekrar doğrulanmıştır.
