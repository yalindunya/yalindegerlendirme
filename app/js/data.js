const CATEGORIES = [
  {
    "id": "yonetim",
    "no": 1,
    "title": "Yönetim",
    "altTitle": "Standardized Work",
    "people": "Müdürler - Yöneticiler",
    "questions": [
      {
        "no": "1.1",
        "text": "Üst yönetimin sürekli gelişim aktivitelerine desteği ve katılımı var (Sunuş, ödül töreni ,eğitim, iyileştirme faaliyetlerinin periyodik takibi,v.b etkinliklere katılımı oranı-haftalık zaman %si)",
        "target": 3
      },
      {
        "no": "1.2",
        "text": "Orta kademe yöneticilerin desteği ve katılımı var (eğitim,kaizen,iyileştirme vb etkinliklere katılım oranıi, gelişim çalışmalarına ayrılan zaman oranı-haftalık zaman %si)",
        "target": 3
      },
      {
        "no": "1.3",
        "text": "Şirket hedefleri tüm kademedeki çalışanlara yayılmış",
        "target": 3
      },
      {
        "no": "1.4",
        "text": "Şirket hedefleri gözden geçiriliyor ve aksiyonlar alınıyor",
        "target": 3
      },
      {
        "no": "1.5",
        "text": "Yönetimin Gözden Geçirme toplantıları yapılıyor, aksiyonlar alınıyor",
        "target": 3
      },
      {
        "no": "1.6",
        "text": "Problemlerin kademeler arası eskalasyon sistematiği belirlenmiş ve uygulanıyor",
        "target": 4
      }
    ]
  },
  {
    "id": "standart-is",
    "no": 2,
    "title": "Standart İş",
    "altTitle": "Workplace Organization (5 S’s) ",
    "people": "Mühendis - G/L - T/L",
    "questions": [
      {
        "no": "2.1",
        "text": "İş tanımları işi yapanlar tarafından geliştiriliyor",
        "target": 2
      },
      {
        "no": "2.2",
        "text": "Operasyon talimatları her operatör tarafından anlaşılabilir ve doğru uygulanıyor",
        "target": 2
      },
      {
        "no": "2.3",
        "text": "Malzeme yerleşimi, operatörün erişimini kolaylaştıracak, az alan kullanılacak ve fazla hareketi-yürümeyi engelleyecek şekilde yapılmış",
        "target": 2
      },
      {
        "no": "2.4",
        "text": "Operatör hareketleri kısıtlı değil, hareket alanında diğer operatörlerle çakışmalar yok",
        "target": 2
      },
      {
        "no": "2.5",
        "text": "Makine, araç ve ekipmanlar alan kullanımını azaltacak ve fazla hareketi engelleyecek şekilde yerleştirilmiş",
        "target": 2
      },
      {
        "no": "2.6",
        "text": "İş istasyonlarında operasyon talimatları güncel mi yeterli mi? (Operasyonların sırası operasyon talimatlarında belirtilmiş mi?)",
        "target": 2
      },
      {
        "no": "2.7",
        "text": "Operatörün çevrim zamanı, bekleme zamanını azaltacak şekilde planlanmış",
        "target": 2
      },
      {
        "no": "2.8",
        "text": "İndirekt işçilikler için standart iş tanımlaması yapılmış",
        "target": 2
      },
      {
        "no": "2.9",
        "text": "Operasyon talimatlarının güncelliğinin korunması, talimatların hazırlanması konusunda talimatları hazırlayanlar bilgi sahibi-gereken eğitimi almışlar",
        "target": 2
      }
    ]
  },
  {
    "id": "gorsel-yonetim",
    "no": 3,
    "title": "Görsel Yönetim",
    "altTitle": "Audio and Visual Controls",
    "people": "Yönetici - Mühendis - G/L - T/L",
    "questions": [
      {
        "no": "3.1",
        "text": "Üretim durumunun  eşzamanlı olarak üretim alanında izleniyor ve sapmaların takibi yapılıyor (Andon)",
        "target": 4
      },
      {
        "no": "3.2",
        "text": "Performans göstergeleri (KPI) çalışma alanında takip ediliyor. Hedefler belirlenen periyotlarda gözden geçiriliyor, performansın gelişimi takip ediliyor (PDCA)",
        "target": 4
      },
      {
        "no": "3.3",
        "text": "Atölyede 5S adımlarının uygulanması : Standartlar tanımlı ve bunlara uyum var",
        "target": 2
      },
      {
        "no": "3.4",
        "text": "Ofislerde 5S adımlarının uygulanması : Standartlar tanımlı ve bunlara uyum var",
        "target": 2
      },
      {
        "no": "3.5",
        "text": "Hem Atölye hem Ofis için 5S Geliştirme aktiviteleri tanımlı",
        "target": 2
      },
      {
        "no": "3.6",
        "text": "Tüm stoklar belirlenmiş alanlarda tutuluyor, stok miktarları için min-max seviye işaretleri belirlenmiş, uygunsuzluk durumunda yapılacaklar tanımlı",
        "target": 2
      },
      {
        "no": "3.7",
        "text": "Çalışanlarda 5S farkındalığı var, 5S eğitimi almışlar",
        "target": 2
      },
      {
        "no": "3.8",
        "text": "Firmanın tanımlanmış görsel standartları var ve herkes tarafından uygulanıyor.",
        "target": 2
      }
    ]
  },
  {
    "id": "surekli-gelisim-egitim",
    "no": 4,
    "title": "Sürekli Gelişim Eğitim",
    "altTitle": "Operation Certification",
    "people": "Org.Gelişim & Eğitim Yöneticileri & Bölüm Yöneticileri",
    "questions": [
      {
        "no": "4.1",
        "text": "Tanımlı bir oryantasyon programı var, yeni işe alımların tümünde uygulanıyor",
        "target": 2
      },
      {
        "no": "4.2",
        "text": "Çalışanlar için eğitim planlaması yapılıyor, planlanan kişi başı eğitim süresi takip ediliyor, eğitimler planlamalar dahilinde sürdürülüyor",
        "target": 2
      },
      {
        "no": "4.3",
        "text": "Multiskill çalışmaları operatörler için yapılmış, tanımlanmış, çalışma alanında görsel olarak erişmek mümkün",
        "target": 2
      },
      {
        "no": "4.4",
        "text": "Eğitim ihtiyaçları, şirket hedefleri, bölüm yöneticilerinden gelen talepler, multiskill çalışmalarının sonuçları ve performans değerlendirmeler sonucu oluşturuluyor",
        "target": 2
      },
      {
        "no": "4.5",
        "text": "Performans yönetimi tanımlanmış, belirlenen kriterler doğrultusunda performans yönetimi görüşmeleri yapılıyor, yeni yıl hedeflerinin belirlenmesi ve eğitim ihtiyaçlarının belirlenmesinde etkin olarak kullanılıyor",
        "target": 2
      },
      {
        "no": "4.6",
        "text": "Çalışan değişim oranı takip ediliyor, hedefe uygunsuzluk durumunda aksiyonlar alınıyor",
        "target": 2
      },
      {
        "no": "4.7",
        "text": "İç eğitmenler var ve performansları ve gelişimleri takip ediliyor",
        "target": 2
      }
    ]
  },
  {
    "id": "cekme-sistemi",
    "no": 5,
    "title": "Çekme Sistemi",
    "altTitle": "Internal Pull ",
    "people": "Mühendis - G/L - T/L",
    "questions": [
      {
        "no": "5.1",
        "text": "Üretim hatlarında hammadde tedariğini sağlamak için çekme sistemi-Kanban kartları/metodolojisi kullanılıyor",
        "target": 2
      },
      {
        "no": "5.2",
        "text": "Standart kanban kartları ya da metodolojisi kullanılıyor, tanımlanmış bilgileri içeriyor",
        "target": 2
      },
      {
        "no": "5.3",
        "text": "Malzemeler, parça no, parça adı, depolama alanı, teslimat yeri, miktar bilgilerini içeren etiketlerle taşınıyor.",
        "target": 2
      },
      {
        "no": "5.4",
        "text": "Operatörlere, çekme sistemi anlatılmış-eğitim verilmiş, Kanban kartlarını doğru kullanıyor (kartların ilgili yere konulması, boş kutuların yerleştirilmesi, teslimat rotaları...)",
        "target": 2
      },
      {
        "no": "5.5",
        "text": "Çekme sistemleri Hammadde/satınalma parçaları -yardımcı malzemeleri de kapsıyor, tedarikçiler çekme sinyallerine göre sevkiyat yapıyorlar",
        "target": 2
      }
    ]
  },
  {
    "id": "ds-lojistik",
    "no": 6,
    "title": "Dış Lojistik",
    "altTitle": "External Pull ",
    "people": "UPL Yönetici - Mühendisler",
    "questions": [
      {
        "no": "6.1",
        "text": "Hammaddeler gerçek tüketim miktarlarına göre sipariş ediliyor",
        "target": 3
      },
      {
        "no": "6.2",
        "text": "Malzemeler, tedarikçilerden belirlenen zamanda alınıyor",
        "target": 2
      },
      {
        "no": "6.3",
        "text": "Malzeme alım yerleri görsel olarak belirlenmiş",
        "target": 3
      },
      {
        "no": "6.4",
        "text": "Malzemelerin alım kriterleri, paketleme şekilleri tanımlanmış ve alımda bu talimatlara uygunluk sorgulanıyor",
        "target": 4
      },
      {
        "no": "6.5",
        "text": "Nakliyeler, alımları, teslimatları ve yükleri optimize edecek şekilde organize edilmiş. (Milk-run uygulaması %si)",
        "target": 3
      },
      {
        "no": "6.6",
        "text": "Acil nakliye maliyetleri onayları belirlenmiş, bu gibi durumlarda analiz yapılıyor, seçenekler çıkarılıyor",
        "target": 3
      }
    ]
  },
  {
    "id": "depo-yonetimi",
    "no": 7,
    "title": "Depo Yönetimi",
    "altTitle": "Central Material Storage",
    "people": "Lojistik Yönetici - Mühendisler",
    "questions": [
      {
        "no": "7.1",
        "text": "Depo alanı görsel olarak iyi düzenlenmiş (Yürüyüş yolları belirli, koridorlarda engeller yok, v.b.)",
        "target": 3
      },
      {
        "no": "7.2",
        "text": "Depoda stok seviyeleri ve uyarı verilmesi gereken limitler belirlenmiş.",
        "target": 3
      },
      {
        "no": "7.3",
        "text": "Malzeme yönetiminde FIFO yönteminin takibini garantileyecek yöntem mevcut.",
        "target": 4
      },
      {
        "no": "7.4",
        "text": "Boş kasa yönetimi için standart oluşturulmuş, kasaların yerleri belirlenmiş.",
        "target": 4
      },
      {
        "no": "7.5",
        "text": "Kimyasalların depolanması, siparişin verilmesi ve kullanılması ile ilgili sistem tanımlı ve uygulanıyor",
        "target": 3
      },
      {
        "no": "7.6",
        "text": "Envanter tutma verimliliği ölçülüyor, problemli olan malzemeler için aksiyon planı yapılıyor",
        "target": 3
      }
    ]
  },
  {
    "id": "tedarikci-secimi-yonetimi",
    "no": 8,
    "title": "Tedarikçi Seçimi Yönetimi",
    "altTitle": "Andon",
    "people": "Satınalma Yönetici - Mühendisler",
    "questions": [
      {
        "no": "8.1",
        "text": "Make-buy ve stratejik satınalma kararları, kesin olarak tanımlanmış kriterlere göre yapılıyor.",
        "target": 2
      },
      {
        "no": "8.2",
        "text": "Kurum genelinde, tedarikçi seçimindeki temel yetkinlikler belirlenmiş.",
        "target": 2
      },
      {
        "no": "8.3",
        "text": "Tedarikçilerle yapılan iyileştirme çalışmaları var, Yalın Üretim metodlarının uygulamaları başlatılmış",
        "target": 2
      },
      {
        "no": "8.4",
        "text": "Tedarikçiyle iletişim kanalları açık ve istenilen zamanda ulaşabilmek mümkün. Parçaların siparişten-sevkiyata kadar olan süreleri biliniyor, tedarikçilerle tanımlanmış sevkiyat zamanları var.",
        "target": 2
      },
      {
        "no": "8.5",
        "text": "Tedarikçi satınalma sözleşmeleri mevcut (İmzalanmış tedarikçi yüzdesi)",
        "target": 2
      },
      {
        "no": "8.6",
        "text": "Tedarikçi lojistik protokolleri mevcut (İmzalanmış tedarikçi yüzdesi)",
        "target": 2
      }
    ]
  },
  {
    "id": "yerinde-kalite",
    "no": 9,
    "title": "Yerinde Kalite",
    "altTitle": "In-Process Quality Audit",
    "people": "Yönetici - Mühendis - G/L - T/L",
    "questions": [
      {
        "no": "9.1",
        "text": "Yerinde Kalite Panosu var, günlük yerinde kalite iletişim toplantıları yapılıyor",
        "target": 2
      },
      {
        "no": "9.2",
        "text": "Fabrika/Hat/makine bazında hurda, rötuş, iade oranları biliniyor, hat yakınında panoda gösteriliyor, hedef dışındakiler için önlem alınıyor",
        "target": 2
      },
      {
        "no": "9.3",
        "text": "Ürün uygunluğu - Numuneye/hata kataloğuna göre kıyaslama yapılıyor",
        "target": 2
      },
      {
        "no": "9.4",
        "text": "Hatasızlaştırma - Poka-yoke sistemleri var, etkin bir şekilde kullanılıyor. Tüm çalışanlar tarafından biliniyor",
        "target": 2
      },
      {
        "no": "9.5",
        "text": "Operatörlerin hat durdurma yetkisi var- Problem olduğunda operatör çözümü  tanımlı sürede üretemezse eskalasyon prosedürü yürütülüyor.",
        "target": 2
      },
      {
        "no": "9.6",
        "text": "Operasyon talimatları operatörlerin yaptıkları kontrolleri içeriyor.",
        "target": 2
      },
      {
        "no": "9.7",
        "text": "Aylık olarak Yerinde Kalite değerlendirmesi yapılıyor, sonuçları izleniyor",
        "target": 2
      }
    ]
  },
  {
    "id": "surekli-iyilestirme",
    "no": 10,
    "title": "Sürekli İyileştirme",
    "altTitle": "Continuous Improvement ",
    "people": "Herkes",
    "questions": [
      {
        "no": "10.1",
        "text": "İş aktivitelerini değerlendirmek ve iyileştirmeleri yapmak için tanımlanmış standart bir proses var ve uygulanıyor.",
        "target": 2
      },
      {
        "no": "10.2",
        "text": "Takımlar Sürekli İyileştirme konusunda eğitim almışlar ve süreci ilerletmek için sorumluluklarını biliyorlar, uyguluyorlar",
        "target": 2
      },
      {
        "no": "10.3",
        "text": "Sürekli iyileştirme planları, hedefleri ve amaçları belirlenmiş ve gerçekleştiriliyor.",
        "target": 2
      },
      {
        "no": "10.4",
        "text": "Kaizenlere katılım - MY\n(Hedef 41%)",
        "target": 2
      },
      {
        "no": "10.5",
        "text": "BY Kaizen çalışmaları var. \n(Hedef 55%)",
        "target": 2
      }
    ]
  },
  {
    "id": "problem-cozme",
    "no": 11,
    "title": "Problem Çözme",
    "altTitle": "Problem Solving (PDCA)",
    "people": "Yalın Yönetim & Kalite Mühendisler - Tüm G/L",
    "questions": [
      {
        "no": "11.1",
        "text": "Problem Çözme yaklaşımı var ve çalışanlar sistematik olarak kullanıyorlar. Firma hedeflerine yönelik iyileştirme çalışmaları tanımlama metodolojisi var",
        "target": 3
      },
      {
        "no": "11.2",
        "text": "Firmada \"Problem Çözme Teknikleri\" eğitimleri planlanıyor, veriliyor",
        "target": 4
      },
      {
        "no": "11.3",
        "text": "Tekrar eden problemler takip ediliyor, tekrarlayanlar problem çözme yaklaşımı ile tekrar değerlendiriliyor",
        "target": 3
      },
      {
        "no": "11.4",
        "text": "Problem Çözme hedefleri ve amacı tüm organizasyon için belirlenmiş. İyileştirme proje ekipleri var",
        "target": 3
      }
    ]
  },
  {
    "id": "bakm",
    "no": 12,
    "title": "Bakım",
    "altTitle": "Total Productive Maintenance",
    "people": "Bakım Mühendisler & Yöneticiler",
    "questions": [
      {
        "no": "12.1",
        "text": "Operatörün günlük temizlik, yağlama, bakım, ekipman kontrolü standartları var (otonom bakım seviyesi )",
        "target": 2
      },
      {
        "no": "12.2",
        "text": "Günlük standart kontrollerde ortaya çıkan problemler için aksiyonlar geliştiriliyor, uygulanıyor",
        "target": 2
      },
      {
        "no": "12.3",
        "text": "Bakım aksiyonlarının/önlemlerinin etkinliği değerlendiriliyor",
        "target": 2
      },
      {
        "no": "12.4",
        "text": "Ekipman arızalarını düşürmek, performans arttırmak ve bakım maliyetlerini  düşürmek için iyileştirme çalışmaları yapılıyor",
        "target": 2
      },
      {
        "no": "12.5",
        "text": "Bakım talimatları ve kayıt sistemi güncel.",
        "target": 2
      },
      {
        "no": "12.6",
        "text": "Planlı bakımlar gerçekleştiriliyor, gerçekleşme oranı takip ediliyor",
        "target": 2
      },
      {
        "no": "12.7",
        "text": "Arıza oranı takip ediliyor, problemler gideriliyor, kayıt sistemi mevcut",
        "target": 2
      },
      {
        "no": "12.8",
        "text": "Yedek parçaların takibi için standart bir yöntem belirlenmiş, izleniyor, aksiyonlar alınıyor",
        "target": 2
      },
      {
        "no": "12.9",
        "text": "Bakım/enerji maliyetleri takip ediliyor, maliyetleri iyileştirme faaliyetleri var",
        "target": 2
      },
      {
        "no": "12.10",
        "text": "Günlük bakım-arıza toplantısı yapılıyor mu?",
        "target": 2
      },
      {
        "no": "12.11",
        "text": "Günlük bakım Hat Yönetim toplantıları var mı?",
        "target": 2
      },
      {
        "no": "12.12",
        "text": "Kritik ekipman listesi tanımlı ve buna göre malzeme tedariği yapılıyor mu?",
        "target": 2
      }
    ]
  },
  {
    "id": "organizasyon-ve-ik",
    "no": 13,
    "title": "Organizasyon ve IK",
    "altTitle": "Error Proofing",
    "people": "Org.Gelişim Yöneticisi",
    "questions": [
      {
        "no": "13.1",
        "text": "Üretimdeki Hat Yönetimi organizasyonu tanımlı, IK tarafından yönetiliyor, geliştiriliyor",
        "target": 3
      },
      {
        "no": "13.2",
        "text": "GL/TL/TU, ofis çalışanları görev tanımları var ve yeterli, IK tarafından yönetiliyor",
        "target": 2
      },
      {
        "no": "13.3",
        "text": "Çoklu beceri tabloları var. Rotasyon, terfi ve iş atamalarında kullanılıyor",
        "target": 4
      },
      {
        "no": "13.4",
        "text": "İnsan kaynakları ihtiyaçlarının planlaması yapılıyor mu? (Uzun dönem ve kısa dönem)",
        "target": 3
      },
      {
        "no": "13.5",
        "text": "Personel seçme ve yerleştirme süreci tanımlı, işe alımlarda kriterler belirlenmiş",
        "target": 2
      },
      {
        "no": "13.6",
        "text": "Rotasyon, terfi standartları tanımlı mı? Herkes tarafından biliniyor mu?",
        "target": 2
      },
      {
        "no": "13.7",
        "text": "Üretim dışı faaliyetlerde çalışanların iş analizleri, görev içerikleri ve performansları takip ediliyor mu?",
        "target": 2
      },
      {
        "no": "13.8",
        "text": "Ofis çalışanları organizasyon şeması güncel mi?",
        "target": 2
      },
      {
        "no": "13.9",
        "text": "Ofis çalışanları için yapılmış yedekleme planları var mı? Bu doğrultuda gelişim planı takibi yapılıyor mu?",
        "target": 2
      }
    ]
  },
  {
    "id": "is-guvenligi",
    "no": 14,
    "title": "İş Güvenliği",
    "altTitle": null,
    "people": "Herkes",
    "questions": [
      {
        "no": "14.1",
        "text": "Yasal olarak verilmesi zorunlu olan İş Güvenliği eğitimleri tüm çalışanlara veriliyor",
        "target": 4
      },
      {
        "no": "14.2",
        "text": "İş Kazalarının analizi etkin bir şekilde yapılıyor, belirlenen ve alınan aksiyonlar yeterli",
        "target": 4
      },
      {
        "no": "14.3",
        "text": "Tüm firmada Risk Analizleri yapılıyor, analizler sonucunda aksiyonlar tanımlanıyor, prosesler iyileştiriliyor",
        "target": 4
      },
      {
        "no": "14.4",
        "text": "Taşeron Yönetiminde, İş Güvenliği için alınması gereken önlemler, paylaşılması gereken bilgiler tanımlı ve uygulanıyor",
        "target": 4
      },
      {
        "no": "14.5",
        "text": "Makine kabullerinde, İş Güvenliği kriterleri belirlenmiş ve bunlar sorgulanıyor",
        "target": 4
      },
      {
        "no": "14.6",
        "text": "Proses Değişikliklerinde, İş Güvenliği Onayı tanımlı ve uygulanıyor",
        "target": 4
      },
      {
        "no": "14.7",
        "text": "Proje Yönetiminde, İş Güvenliği konuları için belirlenmiş kriterler var, hatların oluşturulması, prosesin tasarımı sırasında bunlar gözden geçiriliyor",
        "target": 4
      },
      {
        "no": "14.8",
        "text": "İş Güvenliği kuralları tanımlanmış ve güncel",
        "target": 4
      },
      {
        "no": "14.9",
        "text": "İş Güvenliği hedefleri tanımlanmış ve takibi yapılıyor.",
        "target": 4
      }
    ]
  },
  {
    "id": "toplant-ve-raporlama",
    "no": 15,
    "title": "Toplantı ve Raporlama",
    "altTitle": null,
    "people": "Herkes",
    "questions": [
      {
        "no": "15.1",
        "text": "Toplantı davetleri paylaşımı için standart tanımlı mı? Toplantı yeri seçimi, gündemi belirtme, v.b. Herkes toplantı davetlerini bu şekilde mi paylaşıyor?",
        "target": 4
      },
      {
        "no": "15.2",
        "text": "Toplantıya katılan kişiler konuyla ilgili olan kişiler mi?",
        "target": 4
      },
      {
        "no": "15.3",
        "text": "Firmada düzenli - rutin yapılan toplantıların listesi var mı? Herkes tarafından biliniyor mu?",
        "target": 4
      },
      {
        "no": "15.4",
        "text": "Toplantı başlangıç ve bitiş zamanlarına uyuluyor mu?",
        "target": 4
      },
      {
        "no": "15.5",
        "text": "Standart toplantı tutanağı formu var mı? Herkes tarafından bilinip kullanılıyor mu?",
        "target": 4
      }
    ]
  },
  {
    "id": "cevre-ve-enerji-yonetimi",
    "no": 16,
    "title": "Çevre ve Enerji Yönetimi",
    "altTitle": null,
    "people": "Herkes",
    "questions": [
      {
        "no": "16.1",
        "text": "Şirketin açıkça tanımlanmış bir çevre politikası var mı?\nEnerji yönetimi ve tasarrufuna yönelik özel bir politika var mı?",
        "target": 4
      },
      {
        "no": "16.2",
        "text": "Şirketin sürdürülebilirlik hedefleri neler ve bunlar genel iş stratejisine nasıl entegre ediliyor?",
        "target": 3
      },
      {
        "no": "16.3",
        "text": "Çevre ve enerji denetimlerinin yürütülmesi için hangi süreçler mevcuttur?",
        "target": 3
      },
      {
        "no": "16.4",
        "text": "Şirket doğal kaynak kullanımını (örneğin su, hammadde) etkili bir şekilde yönetmek için çalışmalar yürütüyor, takip ediyor",
        "target": 2
      },
      {
        "no": "16.5",
        "text": "Enerji tüketimi izleniyor ve yönetiliyor. Hangi enerji verimliliği projeleri hayata geçirildi?",
        "target": 3
      },
      {
        "no": "16.6",
        "text": "Atık üretimini azaltmak için ne gibi girişimler mevcut?\nŞirketin farklı atık türleri için geri dönüşüm programları var mı?",
        "target": 3
      },
      {
        "no": "16.7",
        "text": "Ürün ve hizmetlerin çevresel etkilerini değerlendirmek için yaşam döngüsü analizi yapılıyor mu? Buna bağlı olarak alınan aksiyonlar var",
        "target": 2
      }
    ]
  },
  {
    "id": "erken-ekipman-yonetimi",
    "no": 17,
    "title": "Erken Ekipman Yönetimi",
    "altTitle": null,
    "people": "Bakım Mühendisler & G/L - T/L",
    "questions": [
      {
        "no": "17.1",
        "text": "Her yeni ekipman alımı/üretimi söz konusu olduğunda FCNA (Fonksiyon/Maliyet/ihtiyaç Analizi) çalışması yapılıyor",
        "target": 2
      },
      {
        "no": "17.2",
        "text": "Analiz ve ekipman seçim aşamalarında mutlaka ilgili partilerin tümüyle (üretim, tasarım, bakım, yatırım vb.) birlikte çalışılıyor",
        "target": 2
      },
      {
        "no": "17.3",
        "text": "Şirket içi ekipman üretimi söz konusu olduğunda sadece satın alma ya da üretim maliyetleri değil, ekipmanın yaşam eğrisi boyunca oluşacak tüm maliyetleri dikkate alarak seçim yapılıyor",
        "target": 2
      },
      {
        "no": "17.4",
        "text": "Ekipman alım/üretim sırasında MP (Bakım Önleme) kavramı dikkate alınıyor",
        "target": 2
      },
      {
        "no": "17.5",
        "text": "Şirket içi üretiliyor ya da satın alınıyor olsa\nbile tasarım FMEA çalışması gerçekleştiriliyor",
        "target": 2
      }
    ]
  },
  {
    "id": "performans-yonetimi",
    "no": 18,
    "title": "Performans Yönetimi",
    "altTitle": null,
    "people": "IK & Tüm bölümler",
    "questions": [
      {
        "no": "18.1",
        "text": "Şirket yıllık hedefleri tanımlanmış, takibi yapılıyor ve gerekli aksiyonların tanımlanması-gerçekleştirilmesi ile sistem iki yönlü çalışıyor",
        "target": 4
      },
      {
        "no": "18.2",
        "text": "Şirket hedeflerinden departmanlara hedeflerin kırılımı yapılmış, tüm departmanlar hedeflerini takip edip gerekli aksiyonları alıyor",
        "target": 4
      },
      {
        "no": "18.3",
        "text": "Departmanlardan bireylere kadar hedeflerin kırılımı gerçekleştirilmiş, bireysel performans değerlendirmeleri belirlenen periyotlarda şirket içinde tüm birimlerde belirlendiği şekilde yapılıyor",
        "target": 4
      },
      {
        "no": "18.4",
        "text": "Bireysel performans değerlendirme kriterleri belirlenmiş, uygulanıyor ve çıktıları kariyer planlaması, eğitim ihtiyaçlarının tanımlanmasında kullanılıyor",
        "target": 3
      },
      {
        "no": "18.5",
        "text": "Sahada günlük yönetim mekanizması var, çalıştırılıyor. Alınan aksiyonlar var.",
        "target": 3
      }
    ]
  },
  {
    "id": "proje-ve-zaman-yonetimi",
    "no": 19,
    "title": "Proje ve Zaman Yönetimi",
    "altTitle": null,
    "people": "Endüstriyel Satışlar & İş Geliştirme",
    "questions": [
      {
        "no": "19.1",
        "text": "Proje Yönetimi için kullanılan bir araç tanımlı, adımların-aşamaların takibi için şirkette bu araç çalışanlar tarafından biliniyor ve kullanılıyor",
        "target": 4
      },
      {
        "no": "19.2",
        "text": "Proje Yönetimi için kullanılan araç proje zaman planlaması, proje içindeki kişilerin görevleri, alınacak aksiyonları kapsıyor",
        "target": 3
      },
      {
        "no": "19.3",
        "text": "Proje Yönetimi süreci için belirlenmiş göstergeler var, bu göstergelerle yürütülen projede nerede olduğu görülebiliyor",
        "target": 4
      },
      {
        "no": "19.4",
        "text": "Yapılan projelerde yaşanılan aksaklıkların, oluşan hataların tekrar olmaması için alınan aksiyonlar var. (Lessons Learned)",
        "target": 2
      },
      {
        "no": "19.5",
        "text": "Yapılan projelerde yaşanılan aksaklıkların, oluşan hataların tekrar olmaması için proje çalışmalarında yapılan Risk Analizi Çalışmaları (FMEA) bu hatalar düşünülerek revize ediliyor.",
        "target": 2
      },
      {
        "no": "19.6",
        "text": "Projeler tamamlandığında, proje süresince yaşanılan problemler, hatalar ve zorluklardan öğrendiklerimiz kayıt altına alınıyor.",
        "target": 2
      },
      {
        "no": "19.7",
        "text": "Projelerin seriye geçiş sırasında yapılacaklar için bir planlaması var ve ilgili bölümler bu planlama çerçevesinde çalışıyor",
        "target": 2
      }
    ]
  },
  {
    "id": "stratejik-planlama",
    "no": 20,
    "title": "Stratejik Planlama",
    "altTitle": null,
    "people": "Stratejik Planlama ekibi & Çalışanlardan örnekleme",
    "questions": [
      {
        "no": "20.1",
        "text": "Mevcut iç ve dış ortamların anlaşılmasının geliştirildiği analiz veya değerlendirme",
        "target": 2
      },
      {
        "no": "20.2",
        "text": "Üst düzey stratejinin geliştirildiği ve temel bir organizasyon düzeyinde stratejik planın belgelendiği strateji formülasyonu",
        "target": 2
      },
      {
        "no": "20.3",
        "text": "Üst düzey planın daha operasyonel planlama ve eylem öğelerine dönüştürüldüğü strateji yürütme",
        "target": 2
      },
      {
        "no": "20.4",
        "text": "Performans, kültür, iletişim, veri raporlama ve diğer stratejik yönetim konularının devam eden iyileştirme ve değerlendirmesinin gerçekleştiği değerlendirme veya sürdürme / yönetim aşaması.",
        "target": 2
      },
      {
        "no": "20.5",
        "text": "Bütçe ve strateji planının örtüşmesi. Stratejideki hedeflere göre ciro artışı, proje bütçesi vb.",
        "target": 3
      },
      {
        "no": "20.6",
        "text": "Departman stratejileri tanımlı ve işliyor mu",
        "target": 2
      },
      {
        "no": "20.7",
        "text": "Stratejik girişimlerin ilerleyişini izlemek için mekanizmalar mevcut",
        "target": 3
      },
      {
        "no": "20.8",
        "text": "Stratejik girişimlerden elde edilen geri bildirimler devam eden planlama çalışmalarına dahil ediliyor",
        "target": 2
      },
      {
        "no": "20.9",
        "text": "Stratejik plan kuruluş içinde ne kadar etkili bir şekilde iletiliyor?\nDış İletişim: Stratejik yön dış paydaşlara (örneğin yatırımcılar, müşteriler) nasıl iletiliyor?",
        "target": 2
      },
      {
        "no": "20.10",
        "text": "Şirket stratejik performansını endüstri standartlarıyla nasıl karşılaştırıyor?",
        "target": 2
      }
    ]
  },
  {
    "id": "urun-gelistirme",
    "no": 21,
    "title": "Ürün Geliştirme",
    "altTitle": null,
    "people": "Ar-ge & Ür-ge & İş Geliştirme",
    "questions": [
      {
        "no": "21.1",
        "text": "Şirketin inovasyon hedefleri var, ölçümü yapılıyor, aksiyon planı var",
        "target": 4
      },
      {
        "no": "21.2",
        "text": "Ürün geliştirme süreçleri ne kadar standartlaştırılmış ve belgelenmiştir?\nÜrün geliştirme için tanımlanmış aşama geçiş süreçleri var mı?",
        "target": 4
      },
      {
        "no": "21.3",
        "text": "Müşteri geri bildirimleri ürün geliştirme sürecine dahil ediliyor.\nPazar araştırması var ve ürün geliştirmeye entegre ediliyor",
        "target": 3
      },
      {
        "no": "21.4",
        "text": "Ürün geliştirme yaşam döngüsü boyunca veriler  yönetiliyor ve kullanılıyor",
        "target": 2
      },
      {
        "no": "21.5",
        "text": "Ürün geliştirme performansını ölçmek için hangi temel performans göstergeleri (KPI'ler) kullanılıyor?\nPazara Çıkış Süresi / Maliyet Yönetimi",
        "target": 2
      },
      {
        "no": "21.6",
        "text": "Geçmiş projelerden öğrenilen dersler nasıl alınıyor ve gelecekteki projelere nasıl uygulanıyor?",
        "target": 3
      },
      {
        "no": "21.7",
        "text": "Ürün geliştirme sırasında riskler nasıl belirleniyor ve yönetiliyor?",
        "target": 3
      }
    ]
  }
];

const SAMPLE_SCORES = {
  "1.1": 2,
  "1.2": 3,
  "1.3": 1,
  "1.4": 3,
  "1.5": 3,
  "1.6": 2,
  "2.1": 1,
  "2.2": 1,
  "2.3": 1,
  "2.4": 1,
  "2.5": 1,
  "2.6": 1,
  "2.7": 1,
  "2.8": 1,
  "2.9": 1,
  "3.1": 2,
  "3.2": 1,
  "3.3": 1,
  "3.4": 1,
  "3.5": 1,
  "3.6": 1,
  "3.7": 1,
  "3.8": 1,
  "4.1": 1,
  "4.2": 1,
  "4.3": 1,
  "4.4": 1,
  "4.5": 1,
  "4.6": 1,
  "4.7": 1,
  "5.1": 1,
  "5.2": 1,
  "5.3": 1,
  "5.4": 1,
  "5.5": 1,
  "6.1": 1,
  "6.2": 1,
  "6.3": 3,
  "6.4": 2,
  "6.5": 1,
  "6.6": 2,
  "7.1": 3,
  "7.2": 1,
  "7.3": 4,
  "7.4": 2,
  "7.5": 3,
  "7.6": 1,
  "8.1": 1,
  "8.2": 1,
  "8.3": 1,
  "8.4": 1,
  "8.5": 1,
  "8.6": 1,
  "9.1": 1,
  "9.2": 1,
  "9.3": 1,
  "9.4": 1,
  "9.5": 1,
  "9.6": 1,
  "9.7": 1,
  "10.1": 1,
  "10.2": 1,
  "10.3": 1,
  "10.4": 1,
  "10.5": 1,
  "11.1": 1,
  "11.2": 3,
  "11.3": 1,
  "11.4": 2,
  "12.1": 1,
  "12.2": 1,
  "12.3": 1,
  "12.4": 1,
  "12.5": 1,
  "12.6": 1,
  "12.7": 1,
  "12.8": 1,
  "12.9": 1,
  "12.10": 1,
  "12.11": 1,
  "12.12": 1,
  "13.1": 3,
  "13.2": 1,
  "13.3": 2,
  "13.4": 1,
  "13.5": 1,
  "13.6": 1,
  "13.7": 1,
  "13.8": 1,
  "13.9": 1,
  "14.1": 3,
  "14.2": 2,
  "14.3": 3,
  "14.4": 2,
  "14.5": 1,
  "14.6": 1,
  "14.7": 1,
  "14.8": 3,
  "14.9": 3,
  "15.1": 2,
  "15.2": 2,
  "15.3": 3,
  "15.4": 3,
  "15.5": 1,
  "16.1": 3,
  "16.2": 2,
  "16.3": 3,
  "16.4": 1,
  "16.5": 1,
  "16.6": 1,
  "16.7": 1,
  "17.1": 1,
  "17.2": 1,
  "17.3": 1,
  "17.4": 1,
  "17.5": 1,
  "18.1": 3,
  "18.2": 4,
  "18.3": 3,
  "18.4": 2,
  "18.5": 1,
  "19.1": 3,
  "19.2": 2,
  "19.3": 2,
  "19.4": 1,
  "19.5": 1,
  "19.6": 1,
  "19.7": 1,
  "20.1": 2,
  "20.2": 1,
  "20.3": 1,
  "20.4": 1,
  "20.5": 1,
  "20.6": 1,
  "20.7": 1,
  "20.8": 1,
  "20.9": 1,
  "20.10": 1,
  "21.1": 3,
  "21.2": 3,
  "21.3": 1,
  "21.4": 1,
  "21.5": 1,
  "21.6": 2,
  "21.7": 2
};
