## Web FrontEnd Görev Dağılımı
---

**Web-Frontend Adresi:** [frontend.SearchCom.com](https://search-com.vercel.app/)

## Grup Üyelerinin Web FrontEnd Görevleri
* 1.[Yunus Emre Yıldırım'ın FrontEnd Görevleri](https://github.com/emrekose20/SearchCom/blob/7947a767d082ccb75a3d3d71e623bade6fa62740/Yunus%20Emre%20Y%C4%B1ld%C4%B1r%C4%B1m/WebFrontend.md)
* 2.[Abdullah Emre Köse'nin FrontEnd Görevleri](https://github.com/emrekose20/SearchCom/blob/1f1a47a0250e934935b3279fbb6eff99e4ced0dd/Abdullah%20Emre%20K%C3%B6se/WebFrontend.md)
---
## Genel Web FrontEnd Prensipleri
## 1. Responsive Tasarım

- **Mobile-First Approach:** Önce mobil tasarım, sonra desktop
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Flexible Layouts:** CSS Grid ve Flexbox kullanımı
- **Responsive Images:** `srcset` ve `sizes` attributes
- **Touch-Friendly:** Minimum 44x44px touch targets

---

## 2. Tasarım Sistemi

- **CSS Framework:** Bootstrap, Tailwind CSS, Material-UI veya custom
- **Renk Paleti:** Tutarlı renk kullanımı (CSS variables)
- **Tipografi:** Web-safe fonts veya web fonts (Google Fonts)
- **Spacing:** Tutarlı padding ve margin değerleri (8px grid sistemi)
- **Iconography:** Icon library (Font Awesome, Material Icons, Heroicons)
- **Component Library:** Reusable UI components

---

## 3. Kod Yapısı ve Organizasyon

- **Separation of Concerns:** HTML, CSS ve JS ayrımı
- **Modüler JS:** Her sayfa için ayrı JS dosyası
- **Dosya Yapısı:**
  - pages/
  - css/
  - js/
- **Reusable Functions:** Ortak fonksiyonların tekrar kullanımı

---

## 4. API Entegrasyonu

- **Base URL Kullanımı:**

## 5. State Yönetimi

- **localStorage Kullanımı:**

- **localStorage.setItem("searchcomUser", JSON.stringify(user));**
- **Session Kontrolü**
- **Sayfa Koruma (Auth Check)**

---

## 6. Kullanıcı Deneyimi (UX)
- **Anlık geri bildirim (success / error mesajları)**
- **Loading durumları**
- **Basit ve anlaşılır UI**
- **Hata mesajlarının kullanıcı dostu olması**

---

## 7. Güvenlik
- **Kullanıcı doğrulama kontrolü**
- **Input validation (trim, boş kontrol)**
- **Yetkisiz erişim engelleme**
- **API hata yönetimi**

---

## 8. Performans
- **Async / Await kullanımı**
- **Minimum DOM manipülasyonu**
- **Gereksiz render önleme**
- **Hafif frontend yapısı**

---

## 9. Responsive ve Uyumluluk
- **Mobile uyumlu tasarım**
- **Cross-browser support**
- **Media queries kullanımı**
- **Esnek grid sistemleri**

---

## 10. Genel Prensipler
- **KISS (Keep It Simple)**
- **DRY (Don't Repeat Yourself)**
- **Modülerlik**
- **Okunabilir kod**
- **Maintainability (bakımı kolay kod)**

---
