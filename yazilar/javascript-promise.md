# JavaScript'te Promise Yapısı

*Tarih: 14-06-2024*

Promise yapısı, JavaScript'te asenkron işlemleri yönetmek için kullanılan güçlü bir özelliktir. Bu yazıda Promise'lerin nasıl çalıştığını ve neden önemli olduğunu inceleyeceğiz.

## Promise Nedir?

Promise, asenkron bir işlemin nihai tamamlanmasını (veya başarısızlığını) temsil eden bir nesnedir. Üç durumdan birinde olabilir:
- **Pending**: İlk durum, ne yerine getirilmiş ne de reddedilmiş
- **Fulfilled**: İşlem başarıyla tamamlandı
- **Rejected**: İşlem başarısız oldu

## Promise Oluşturma

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asenkron işlem
  const success = true;
  
  if (success) {
    resolve("İşlem başarılı!"); // Fulfilled
  } else {
    reject("Bir hata oluştu!"); // Rejected
  }
});
Promise Kullanımı
javascript

Copy
myPromise
  .then((result) => {
    console.log(result); // "İşlem başarılı!"
  })
  .catch((error) => {
    console.error(error); // "Bir hata oluştu!"
  })
  .finally(() => {
    console.log("İşlem tamamlandı"); // Her durumda çalışır
  });
Pratik Örnek: API İsteği
javascript

Copy
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Kullanıcı verileri alınamadı');
      }
      return response.json();
    });
}

fetchUserData(123)
  .then(user => console.log(user))
  .catch(error => console.error(error));
Promise.all ve Promise.race
Birden fazla Promise'i birlikte yönetmek için:

javascript

Copy
Promise.all([fetchUserData(1), fetchUserData(2), fetchUserData(3)])
  .then(users => console.log('Tüm kullanıcılar:', users))
  .catch(error => console.error('Bir hata oluştu:', error));

Promise.race([fetchUserData(1), fetchUserData(2)])
  .then(firstUser => console.log('İlk tamamlanan:', firstUser))
  .catch(error => console.error('İlk hata:', error));
Promise yapısı, callback hell'den kurtulmanın ve kod okunabilirliğini artırmanın harika bir yoludur. Modern JavaScript geliştirmede vazgeçilmez bir özellik haline gelmiştir.

pf

Copy

6. **react-hooks-nedir.md**:
```markdown
# React Hooks Nedir?

*Tarih: 28-09-2023*

React Hooks, fonksiyon bileşenlerinde durum (state) ve diğer React özelliklerini kullanmanızı sağlayan bir özelliktir. React 16.8 ile tanıtılan bu özellik, sınıf bileşenlerine olan ihtiyacı azaltmıştır.

## Temel Hook'lar

### useState

Fonksiyon bileşenlerinde durum (state) yönetimini sağlar:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}
useEffect
Yaşam döngüsü metotlarının yerini alır, yan etkileri yönetmek için kullanılır:

jsx

Copy
import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Bileşen ekrana render edildikten sonra çalışır
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
      
    // Temizleme fonksiyonu (componentWillUnmount gibi)
    return () => {
      console.log('Bileşen kaldırıldı');
    };
  }, []); // Boş dizi: sadece ilk render'da çalışır
  
  return <div>{data ? JSON.stringify(data) : 'Yükleniyor...'}</div>;
}
useContext
Context API'yi daha kolay kullanmayı sağlar:

jsx

Copy
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>Stillendirilmiş Buton</button>;
}
Diğer Önemli Hook'lar
useReducer: Karmaşık state mantığı için useState'in alternatifi
useCallback: Performans optimizasyonu için fonksiyonları hafızada tutar
useMemo: Hesaplama sonuçlarını önbelleğe alır
useRef: DOM öğelerine doğrudan erişim sağlar
Özel Hook'lar Oluşturma
Hook'ların en güçlü yanlarından biri, kendi özel hook'larınızı oluşturabilmenizdir:

jsx

Copy
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Kullanım
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  return <div>Pencere boyutu: {width} x {height}</div>;
}
React Hooks, kod tekrarını azaltır, bileşen mantığını daha kolay paylaşmanızı sağlar ve fonksiyonel programlama paradigmasına daha uygun bir yaklaşım sunar.

mipsasm

Copy

7. **wordpress-tema-gelistirme.md**:
```markdown
# WordPress Tema Geliştirme

*Tarih: 03-05-2024*

WordPress, dünya çapında en popüler içerik yönetim sistemlerinden biridir. Kendi temanızı geliştirmek, benzersiz web siteleri oluşturmanın harika bir yoludur. Bu yazıda, WordPress tema geliştirmenin temel adımlarını inceleyeceğiz.

## Tema Yapısı

Bir WordPress teması, en azından aşağıdaki dosyalara sahip olmalıdır:

- **style.css**: Tema bilgilerini ve genel stilleri içerir
- **index.php**: Ana şablon dosyası
- **functions.php**: Tema için PHP fonksiyonları ve kancaları
- **screenshot.png**: WordPress admin panelinde görünecek tema önizleme görseli

## Başlangıç: style.css

Her tema, başında tema bilgilerini içeren bir style.css dosyası ile başlar:

```css
/*
Theme Name: Benim Temam
Theme URI: https://example.com/benim-temam
Author: Ad Soyad
Author URI: https://example.com
Description: Özel WordPress tema açıklaması
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: benim-temam
Tags: responsive, custom-colors, custom-menu
*/
Tema Şablonları
WordPress, farklı içerik türleri için farklı şablonlar kullanır:

header.php: Sitenin başlık bölümü
footer.php: Sitenin alt bölümü
sidebar.php: Kenar çubuğu
single.php: Tekli gönderi sayfası
page.php: Sayfa şablonu
archive.php: Arşiv sayfaları
404.php: Bulunamayan sayfalar
search.php: Arama sonuçları
WordPress Döngüsü (The Loop)
WordPress içerik gösterme mantığı:

php

Copy
<?php
if ( have_posts() ) :
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            </header>
            <div class="entry-content">
                <?php the_excerpt(); ?>
            </div>
        </article>
        <?php
    endwhile;
else :
    echo '<p>İçerik bulunamadı.</p>';
endif;
?>
functions.php
Temanızın özelliklerini tanımlamak için:

php

Copy
<?php
// Tema desteklerini aktifleştirme
function my_theme_setup() {
    // Başlık etiketi desteği
    add_theme_support( 'title-tag' );
    
    // Öne çıkan görsel desteği
    add_theme_support( 'post-thumbnails' );
    
    // Menü konumları
    register_nav_menus( array(
        'primary' => __( 'Ana Menü', 'benim-temam' ),
        'footer'  => __( 'Alt Menü', 'benim-temam' ),
    ) );
}
add_action( 'after_setup_theme', 'my_theme_setup' );

// Stil ve script dosyaları
function my_theme_scripts() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri() );
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );

// Sidebar kaydı
function my_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Ana Kenar Çubuğu', 'benim-temam' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Ana kenar çubuğuna widget ekleyin.', 'benim-temam' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'my_widgets_init' );
?>
İleri Seviye Özellikler
Custom Post Types: Özel içerik türleri oluşturma
Taxonomies: Özel sınıflandırma sistemleri
Meta Boxes: Özel meta alanları ekleme
Theme Customizer: Kullanıcı dostu tema özelleştirme seçenekleri
Block Editor (Gutenberg) Desteği: Modern WordPress editörü ile uyumluluk
WordPress tema geliştirme, hem front-end hem de back-end becerilerinizi geliştirmenin harika bir yoludur. İyi planlanmış bir tema, müşterilerinizin veya kullanıcılarınızın içeriklerini etkili bir şekilde yönetmelerine yardımcı olur.