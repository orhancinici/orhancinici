# CSS Flexbox Kullanımı

*Tarih: 22-03-2023*

Flexbox, modern web tasarımında sayfa düzeni oluşturmak için kullanılan güçlü bir CSS özelliğidir. Karmaşık düzenleri bile kolayca oluşturmanızı sağlar.

## Flexbox Temelleri

### Flex Container Oluşturma

```css
.container {
  display: flex;
}
Bu, içindeki tüm öğeleri esnek hale getirir.

Ana Eksen (Main Axis)
Varsayılan olarak yataydır. flex-direction ile değiştirilebilir:

css

Copy
.container {
  display: flex;
  flex-direction: row; /* Varsayılan: yatay */
  /* Alternatifleri: column, row-reverse, column-reverse */
}
Öğeleri Hizalama
Yatay hizalama (ana eksen):

css

Copy
.container {
  justify-content: space-between;
  /* Diğer değerler: flex-start, flex-end, center, space-around, space-evenly */
}
Dikey hizalama (çapraz eksen):

css

Copy
.container {
  align-items: center;
  /* Diğer değerler: flex-start, flex-end, stretch, baseline */
}
Esnek Öğeler
css

Copy
.item {
  flex-grow: 1; /* Boş alanı doldurma oranı */
  flex-shrink: 1; /* Daraldığında küçülme oranı */
  flex-basis: auto; /* Başlangıç boyutu */
  
  /* Kısaltma */
  flex: 1 1 auto;
}
Örnek Uygulama
Navigation bar oluşturma:

css

Copy
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo { flex: 0 0 auto; }
.menu { flex: 1 0 auto; }
Bu sadece başlangıç! Flexbox ile çok daha karmaşık düzenler oluşturabilirsiniz.



