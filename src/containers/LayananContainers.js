import React, { Component } from "react";
class LayananContainers extends Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
    this.sirkulasi = React.createRef();
    this.referensi = React.createRef();
    this.bimbingan = React.createRef();
    this.keanggotaan = React.createRef();
    this.kerjasama = React.createRef();
  }

  scrollToBottom = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  scrollToSirkulasi = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.sirkulasi.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  scrollToReferensi = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.referensi.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  scrollToBimbingan = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.bimbingan.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  scrollToKeanggotaan = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.keanggotaan.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  scrollToKerjasama = () => {
    // const { index, selected } = this.props;
    // if (index === selected) {
    //   setTimeout(() => {
    //     this.kerjasama.scrollIntoView({ behavior: "smooth" });
    //   }, 0);
    // }
  };

  componentDidMount() {
    // if (this.props.layanan === "sirkulasi") {
    //   this.scrollToSirkulasi();
    // } else if (this.props.layanan === "referensi") {
    //   this.scrollToReferensi();
    // } else if (this.props.layanan === "bimbingan") {
    //   this.scrollToBimbingan();
    // } else if (this.props.layanan === "keanggotaan") {
    //   this.scrollToKeanggotaan();
    // } else if (this.props.layanan === "kerjasama") {
    //   this.scrollToKerjasama();
    // } else {
    //   this.scrollToBottom();
    // }
  }

  componentDidUpdate() {
    // if (this.props.layanan === "sirkulasi") {
    //   this.scrollToSirkulasi();
    // } else if (this.props.layanan === "referensi") {
    //   this.scrollToReferensi();
    // } else if (this.props.layanan === "bimbingan") {
    //   this.scrollToBimbingan();
    // } else if (this.props.layanan === "keanggotaan") {
    //   this.scrollToKeanggotaan();
    // } else if (this.props.layanan === "kerjasama") {
    //   this.scrollToKerjasama();
    // } else {
    //   this.scrollToBottom();
    // }
  }

  render() {
    return (
      <div>
        <section className="post-wrapper-top">
          <div className="container">
            <div>
              <ul className="breadcrumb">
                <li>
                  <a href="\#">Home</a>
                </li>
                <li>Layanan</li>
              </ul>
              <h2>LAYANAN</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container ">
            <div className="col-lg-12 col-md-12 col-sm-12 clearfix">
              <div className="clearfix">&nbsp;</div>
              <div
                id="anak"
                ref={(el) => {
                  this.messagesEnd = el;
                }}
              ></div>
              <h4 className="title" style={{ color: "#3498db" }}>
                <i className="fa fa-user"></i> Layanan Anak
              </h4>
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    {" "}
                    Kebiasaan membaca harus dilatih sejak usia dini, yaitu
                    dengan memberikan bahan bacaan kepada anak semenjak dini,
                    menyediakan ruangan membaca khusus untuk anak. Seperti
                    sebuah ruangan bacaan yang terdapat pada perpustakaan umum
                    Kota Pekanbaru, yang menyediakan ruangan khusus tempat
                    membaca anak dan juga memiliki koleksi khusus untuk
                    anak-anak, koleksi anak yang ada yaitu : buku dongeng, buku
                    belajar Al-Qur’an, majalah anak, buku doa, buku bergambar,
                    buku cerita rakyat dan lain-lain.
                  </p>

                  <p>
                    Layanan seperti ini biasanya diselenggarakan oleh
                    perpustakaan. sesuai dengan tugas dan fungsi perpustakaan
                    umum yaitu memberikan pelayanan kepada masyarakat melalui
                    pendayagunaan koleksi bahan pustaka untuk keperluan
                    pendidikan, penelitian, ilmu pengetahuan, dan rekreasi, maka
                    salah satu layanan yang diselenggarakan oleh perpustakaan
                    umum adalah layanan anak atau juga dikenal dengan seksi
                    anak-anak. Berbagai kegiatan disiapkan untuk kebutuhan
                    anak-anak dari pemilihan bahan pustaka sampai kepada
                    pelayannya disesuaikan untuk anak menurut usia dan selera
                    anak-anak. Bahan bacaan anak usia balita lebih ditekankan
                    pada gambar (picture books) tanpa teks. Anak balita banyak
                    tertarik pada gambar dan warna-warna yang menyolok. Setelah
                    usia sekolah dasar anak diperkenalkan dengan huruf dan
                    angka. Oleh karena itu koleksi untuk anak usia ini adalah
                    buku-buku yang banyak gambar dan berwarna-warni, namun sudah
                    mulai ada sedikit teks.
                  </p>
                  <p>
                    Perpustakaan SMA Negeri 70 Jakarta berkolaborasi dengan
                    Pokja Perpustakaan beserta RW sekitar sekolah memberikan
                    fasilitas layanan anak untuk meningkatkan liteasi anak sejak
                    dini.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-responsive"
                    src={require("../img/img-layananak.png")}
                    alt=""
                  />
                </div>
              </div>

              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
              <div
                id="sirkulasi"
                ref={(el) => {
                  this.sirkulasi = el;
                }}
              ></div>

              <h4 className="title" style={{ color: "#F1C40F" }}>
                <i className="fa fa-random"></i> Layanan Sirkulasi
              </h4>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    {" "}
                    Layanan sirkulasi bertujuan untuk membantu pemustaka dalam
                    proses peminjaman, pengembalian, dan perpanjangan bahan
                    pustaka. Prosedur layanan peminjaman dalam sirkulasi ini
                    meliputi aktivitas pemilihan buku sampai buku bisa dipinjam
                    oleh pemustaka dengan melalui proses peminjaman di bagian
                    layanan sirkulasi. Sedangkan prosedur layanan pengembalian
                    dan perpanjangan bahan pustaka ini meliputi aktivitas
                    penyerahan pustaka yang dipinjam sampai dengan petugas
                    memproses pengembalian ataupun perpanjangan pustaka di
                    bagian layanan sirkulasi.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    className="img-responsive"
                    src={require("../img/img-sirkulasi.jpg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
              <div
                id="referensi"
                ref={(el) => {
                  this.referensi = el;
                }}
              ></div>
              <h4 className="title" style={{ color: "#26A69A" }}>
                <i className="fa fa-book"></i> Layanan Referensi
              </h4>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    {" "}
                    Layanan Referensi adalah merupakan layanan pokok di
                    perpustakaan yang secara spesifik melayankan koleksi
                    referensi kepada para pemustaka.
                  </p>
                  <p>
                    Jasa layanan referensi merupakan salah satu kegiatan yang
                    ada untuk pemustaka dalam mencari informasi yang
                    dibutuhkannya. Layanan referensi juga suatu kegiatan
                    pelayanan untuk membantu pemustaka menemukan informasi
                    dengan cara menerima pertanyaan-pertanyaan dari para
                    pemustaka dan menjawab dengan menggunakan koleksi referensi
                    yang ada; Membimbing pemustaka untuk menemukan koleksi
                    referensi dan mencari informasi yang dibutuhkan dan
                    penggunaan bahan pustaka koleksi referensi; Memberikan
                    pengarahan dan bantuan pada pengguna mengenai cara
                    menggunakan perpustakaan maupun koleksi referensi;
                    Memberikan petunjuk tentang bagaimana cara memilih dan
                    memilah bahan pustaka dalam kelompok koleksi referensi yang
                    bermutu dan berbobot ilmiah agar diperoleh sumber referensi
                    yang berdaya guna maksimal.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  Sedangkan tujuan layanan referensi adalah sebagai berikut:
                  <ul>
                    <li>
                      Memungkinkan pengguna menemukan informasi secara cepat dan
                      tepat
                    </li>
                    <li>
                      Memungkinkan pengguna menelusur informasi dengan pilihan
                      yang lebih luas
                    </li>
                    <li>
                      Memungkinkan pengguna menggunakan koleksi referensi dengan
                      lebih tepat guna
                    </li>
                  </ul>
                  <p>
                    Adapun Jenis Referensi yang terdapat di Perpustakaan SMA
                    Negeri 70 Jakarta, diantaranya:
                  </p>
                  <ol>
                    <li>Ensiklopedia</li>
                    <li>Peta</li>
                    <li>
                      Kamus
                      <ul type="circle">
                        <li>Kamus Bahasa Indonesia</li>
                        <li>Kamus Bahasa Inggris</li>
                        <li>Kamus Bahasa Jerman</li>
                        <li>Kamus Bahasa Perancis</li>
                      </ul>
                    </li>
                    <li>Bibliografi</li>
                    <li>Atlas</li>
                    <li>Globe</li>
                    <li>Katalog</li>
                    <li>Indeks</li>
                    <li>Karya Ilmiah</li>
                  </ol>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    <img src={require("../img/img-referensi.jpg")} alt="" />
                  </p>
                </div>
              </div>
              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
              <div
                id="bimbingan"
                ref={(el) => {
                  this.bimbingan = el;
                }}
              ></div>

              <h4 className="title" style={{ color: "#EC407A" }}>
                <i className="fa fa-bullhorn"></i> Layanan Bimbingan Pemustaka
              </h4>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    {" "}
                    Layanan sirkulasi bertujuan untuk membantu pemustaka dalam
                    proses peminjaman, pengembalian, dan perpanjangan bahan
                    pustaka. Prosedur layanan peminjaman dalam sirkulasi ini
                    meliputi aktivitas pemilihan buku sampai buku bisa dipinjam
                    oleh pemustaka dengan melalui proses peminjaman di bagian
                    layanan sirkulasi. Sedangkan prosedur layanan pengembalian
                    dan perpanjangan bahan pustaka ini meliputi aktivitas
                    penyerahan pustaka yang dipinjam sampai dengan petugas
                    memproses pengembalian ataupun perpanjangan pustaka di
                    bagian layanan sirkulasi.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    className="img-responsive"
                    src={require("../img/img-bimbingan.jpg")}
                    alt=""
                  />
                </div>
              </div>

              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
              <div
                id="anggota"
                ref={(el) => {
                  this.keanggotaan = el;
                }}
              ></div>

              <h4 className="title" style={{ color: "grey" }}>
                <i className="fa fa-bullhorn"></i> Layanan Keanggotaan
              </h4>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    {" "}
                    Merupakan layanan mengadministrasikan data anggota untuk
                    memudahkan proses layanan pengguna perpustakaan.
                  </p>
                  <p>Prosedur layanan ini meliputi:</p>
                  <p>
                    <img
                      className="img-responsive"
                      src={require("../img/img-anggota.JPG")}
                      alt=""
                    />
                  </p>
                </div>
              </div>

              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
              <div
                id="kerjasama"
                ref={(el) => {
                  this.kerjasama = el;
                }}
              ></div>

              <h4 className="title" style={{ color: "#ff6161" }}>
                <i className="fa fa-bullhorn"></i> Layanan Kerjasama
              </h4>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    {" "}
                    Layanan Kerjasama merupakan program perpustakaan untuk
                    meningkatkan eksistensi perpustakaan SMAN 70 Jakarta ke
                    masyarakat luas. Sampai saat ini perpustakaan SMA Negeri 70
                    Jakarta telah bekerjasama dengan 11 Organisasi maupun
                    sekolah disekitaran SMAN 70 Jakarta, diantaranya:
                    <ol>
                      <li>Komite Sekolah</li>
                      <li>Guru</li>
                      <li>Lingkungan RW</li>
                      <li>Majalah Parahyangan</li>
                      <li>SMA Negeri 46 Jakarta</li>
                      <li>Dinas Sosial </li>
                      <li>BI Corner</li>
                      <li>Gramedia</li>
                      <li>SMA Negeri 6 Jakarta</li>
                      <li>Aksamaraya</li>
                      <li>RedHat Indonesia</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LayananContainers;
