import React from "react";
const footers = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="widget col-lg-3 col-md-3 col-sm-12">
          <h4 className="title">Tentang Kami</h4>
          <p>
            Terwujudnya Perpustakaan yang Respresentatif sebagai penyedia
            informasi ilmu pengetahuan, teknologi, seni dan agama
          </p>
          <a className="button small" href="/">
            read more
          </a>
        </div>
        <div className="widget col-lg-3 col-md-3 col-sm-12">
          <h4 className="title">Koleksi Buku Baru</h4>
          <ul className="recent_posts">
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_10.jpg")} alt="" />
                Our New Dashboard Is Here
              </a>
              <a className="readmore" href="/">
                read more
              </a>
            </li>
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_05.jpg")} alt="" />
                Design Is In The Air
              </a>
              <a className="readmore" href="/">
                read more
              </a>
            </li>
          </ul>
        </div>
        <div className="widget col-lg-3 col-md-3 col-sm-12">
          <h4 className="title">Prestasi</h4>
          <ul className="recent_posts">
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_08.jpg")} alt="" />
                Our New Dashboard Is Here
              </a>
              <a className="readmore" href="/">
                read more
              </a>
            </li>
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_09.jpg")} alt="" />
                Design Is In The Air
              </a>
              <a className="readmore" href="/">
                read more
              </a>
            </li>
          </ul>
        </div>
        <div className="widget col-lg-3 col-md-3 col-sm-12">
          <h4 className="title">Hubungi Kami</h4>
          <ul className="contact_details">
            <li>
              <i className="fa fa-envelope-o"></i> info@perpustakaansman70.com
            </li>
            <li>
              <i className="fa fa-phone-square"></i> +21 1234 5678
            </li>
            <li>
              <i className="fa fa-home"></i> Jl. Bulungan Blk. C No.1,
              RT.11/RW.7, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12130
            </li>
            <li>
              <a href="/">
                <i className="fa fa-map-marker"></i> View large map
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyrights">
        <div className="container">
          <div className="col-lg-6 col-md-6 col-sm-12 columns footer-left">
            <p>Copyright © 2021 - All rights reserved.</p>
            <div className="credits"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footers;
