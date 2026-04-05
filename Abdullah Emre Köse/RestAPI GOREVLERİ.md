* **API Test Videosu:**[Video linki](https://www.youtube.com/watch?v=yOiXiDTk8RI)
## Rest API Görev Dağılımı
---
* **Rest API Domain Adresi:** https://searchcom.onrender.com
* **API JSON Formatında** [Abdullah Emre Köse Postman Collection](https://github.com/emrekose20/SearchCom/blob/8fade5c7677bb12818b2afcad49f72fbabe15d29/Abdullah-Emre-K%C3%B6se.postman_collection.json)
Açıklama:  
Yeni kullanıcı hesabı oluşturur.

Request Body:
```json
{
  "name": "Emre Köseeeee",
  "email": "EmreKose@test.com",
  "password": "1234"
}
```

201 Created:
```json
{
  "message": "Kayıt başarılı.",
  "user": {
    "_id": "USER_ID",
    "name": "Emre Köseeeee",
    "email": "EmreKose@test.com"
  }
}
```

---

### Endpoint: GET /api/users/{id}

Açıklama:  
Kullanıcı bilgilerini görüntüler.

200 OK:
```json
{
  "_id": "USER_ID",
  "name": "Emre Köseeeee",
  "email": "EmreKose@test.com"
}
```

---

### Endpoint: PUT /api/users/{id}

Açıklama:  
Kullanıcının profil bilgilerini günceller.

Request Body:
```json
{
  "name": "Emre Köse",
  "password": "1234Tayfun35"
}
```

200 OK:
```json
{
  "message": "Profil güncellendi.",
  "user": {
    "_id": "USER_ID",
    "name": "Emre Köse",
    "email": "EmreKose@test.com",
    "createdAt": "2026-04-05T09:39:36.121Z",
    "updatedAt": "2026-04-05T09:40:55.710Z"
  }
}
```

---

### Endpoint: DELETE /api/users/{id}

Açıklama:  
Belirtilen kullanıcı hesabını siler.

Request Body: Yok

200 OK:
```json
{
  "message": "Kullanıcı hesabı silindi."
}
```

---

### Endpoint: POST /api/establishments

Açıklama:  
Yeni bir işletme kaydı oluşturur.

Request Body:
```json
{
  "name": "Kafe İstanbul",
  "address": "İstanbul Kadıköy",
  "category": "Kafe"
}
```

201 Created:
```json
{
  "message": "İşletme oluşturuldu."
}
```

---

### Endpoint: GET /api/establishments

Açıklama:  
Tüm işletmeleri listeler.

200 OK:
```json
[
  {
    "_id": "ID",
    "name": "Kafe İstanbul",
    "address": "İstanbul Kadıköy",
    "category": "Kafe"
  }
]
```

---

### Endpoint: PUT /api/establishments/{id}

Açıklama:  
İşletme bilgilerini günceller.

Request Body:
```json
{
  "name": "Kafe İstanbul Güncel",
  "address": "İstanbul Moda",
  "category": "Kafe"
}
```

200 OK:
```json
{
  "message": "İşletme güncellendi."
}
```

---

### Endpoint: DELETE /api/establishments/{id}

Açıklama:  
Belirtilen işletme kaydını siler.

200 OK:
```json
{
  "message": "İşletme silindi."
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
  
## Açıklama
Backend kısmında yorum, puan, favori ve kalan ortak olan işlemlere ait REST API metotları tarafımdan geliştirilmiştir.  
Tüm endpointler önce local ortamda test edilmiş, ardından canlı domain üzerinden Postman ile tekrar doğrulanmıştır.
