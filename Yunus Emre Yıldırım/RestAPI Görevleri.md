## Backend Domain Adresi
https://searchcom.onrender.com
---
### Endpoint: `POST /api/comments`

**Açıklama:**  
Kullanıcının bir işletme hakkında yeni bir yorum eklemesini sağlar.

### Request Body

```json
{
  "userId": "69d1520e995343c229d6d819",
  "establishmentName": "Kafe İstanbul",
  "content": "Mekan çok güzeldi, kahvelerini beğendim."
}
```
### 201 Created
```json
{
    "message": "Yorum oluşturuldu.",
    "comment": {
        "userId": "69d1520e995343c229d6d819",
        "establishmentId": "69d10604933e1304e87e4b92",
        "content": "Mekan çok güzeldi, kahvelerini beğendim.",
        "_id": "69d22d7de8d2b49b71c54d73",
        "createdAt": "2026-04-05T09:38:05.761Z",
        "updatedAt": "2026-04-05T09:38:05.761Z",
        "__v": 0
    }
}
```
### Endpoint: `DELETE /api/comments/{id}`

**Açıklama:**  
Kullanıcının bir işletme hakkında yazdığı yorumu sistemden tamamen kaldırmasını sağlar.

### 200 OK
```json
{
    "message": "Yorum silindi."
}
```
### Endpoint: `POST /api/ratings`

**Açıklama:** 
Kullanıcının ziyaret ettiği bir işletmeye 1 ile 5 arasında bir puan vererek memnuniyetini belirtmesini sağlar.

### Request Body

```json
{
  "userId": "69d1520e995343c229d6d819",
  "establishmentName": "Kafe İstanbul",
  "score": 2
}
```
### 201 Created
```json
{
    "message": "Puan oluşturuldu.",
    "rating": {
        "userId": "69d1520e995343c229d6d819",
        "establishmentId": "69d10604933e1304e87e4b92",
        "score": 2,
        "_id": "69d22eebe8d2b49b71c54d75",
        "createdAt": "2026-04-05T09:44:11.116Z",
        "updatedAt": "2026-04-05T09:44:11.116Z",
        "__v": 0
    }
}
```
### Endpoint: `GET /api/ratings/user/{id}`

**Açıklama:**
Kullanıcının işletmelere verdiği tüm puanları gösterir.

### 200 OK
```json
[
    {
        "_id": "69d22eebe8d2b49b71c54d75",
        "score": 2,
        "establishmentName": "Kafe İstanbul"
    }
]
```

### Endpoint: `PUT /api/ratings/{id}`

**Açıklama:**
Kullanıcının daha önce bir mekan için verdiği puanı güncellemesine veya fikrini değiştirmesine olanak tanır.

### Request Body
```json
{
  "score": 5
}
```
### 200 OK
```json
{
    "message": "Puan güncellendi.",
    "rating": {
        "_id": "69d22eebe8d2b49b71c54d75",
        "userId": "69d1520e995343c229d6d819",
        "establishmentId": "69d10604933e1304e87e4b92",
        "score": 5,
        "createdAt": "2026-04-05T09:44:11.116Z",
        "updatedAt": "2026-04-05T09:55:28.603Z",
        "__v": 0
    }
}
```








API Metodu: POST /api/favorites
Açıklama: Beğenilen bir işletmenin, daha sonra hızlıca ulaşılabilmesi için kullanıcının kişisel favori listesine kaydedilmesini sağlar.
Favori Listesini Görüntüleme

API Metodu: GET /api/favorites/{userId}
Açıklama: Kullanıcının kendi profilinde, daha önceden favorilerine eklediği tüm işletmeleri toplu bir liste halinde görmesini sağlar.
Mekanı Favorilerden Çıkarma

API Metodu: DELETE /api/favorites/{id}
Açıklama: Artık tercih edilmeyen veya listeden çıkarılmak istenen bir işletmenin favori listesinden silinmesini sağlar.
Mekana Yorum Ekleme




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
