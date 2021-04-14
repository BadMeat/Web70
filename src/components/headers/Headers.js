import React from "react";
const headers = (props) => {
  return (
    <div>
      <body>
        <div class="topbar clearfix">
          <div class="container">
            <div class="col-lg-12 text-right">
              <div class="social_buttons">
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i class="fa fa-twitter"></i>
                </a>
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Youtube"
                >
                  <i class="fa fa-youtube"></i>
                </a>
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="LinkedIn"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
                |
                <a
                  href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Notifikasi"
                >
                  <i class="fa fa-bell"></i>
                </a>
                <a
                  href="index.html"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Signout"
                >
                  <i class="fa fa-sign-out"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>

      <header className="header">
        <div className="container">
          <div className="site-header clearfix">
            <div className="col-lg-3 col-md-3 col-sm-12 title-area">
              <div className="site-title" id="title">
                <a href="/" title="">
                  <h4>
                    PERPUSTAKAAN <span>SMAN 70</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div id="nav" class="right">
                <div className="container clearfix">
                  <ul id="jetmenu" className="jetmenu blue">
                    <li className="active">
                      <a href="/">
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="/layanan">Layanan</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/">Layanan Sirkulasi</a>
                        </li>
                        <li>
                          <a href="/">Layanan Referensi</a>
                        </li>
                        <li>
                          <a href="/">Layanan Bimbingan</a>
                        </li>
                        <li>
                          <a href="/">Layanan Keanggotaan</a>
                        </li>
                        <li>
                          <a href="/">Layanan Peminjaman Buku</a>
                        </li>
                        <li>
                          <a href="/">Layanan Kerjasama</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/profile">Profil</a>
                      <ul class="dropdown">
                        <li>
                          <a href="profil.html">Visi Misi</a>
                        </li>
                        <li>
                          <a href="/">Tujuan</a>
                        </li>
                        <li>
                          <a href="/">Struktur Organisasi Perpustakaan</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">O P A C</a>
                      <ul class="dropdown">
                        <li>
                          <a href="/">Visitor Counter</a>
                        </li>
                        <li>
                          <a href="/">Sistem Perpustakaan</a>
                        </li>
                        <li>
                          <a href="/">e-DTS</a>
                        </li>
                        <li>
                          <a href="/">e-DDC</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/laporanBulanan">Laporan</a>
                      <ul class="dropdown">
                        <li>
                          <a href="/">Bulanan</a>
                        </li>
                        <li>
                          <a href="/">Triwulan</a>
                        </li>
                        <li>
                          <a href="/">Tahunan</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Aktivitas</a>
                      <ul class="dropdown">
                        <li>
                          <a href="/">Program Unggulan</a>
                        </li>
                        <li>
                          <a href="/">Prestasi</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default headers;
