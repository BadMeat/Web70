import React from "react";
const footers = (props) => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="widget col-lg-3 col-md-3 col-sm-12">
          <h4 class="title">Tentang Kami</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry"s standard dummy text
            ever since the 1500s..
          </p>
          <a class="button small" href="/">
            read more
          </a>
        </div>
        <div class="widget col-lg-3 col-md-3 col-sm-12">
          <h4 class="title">Koleksi Buku Baru</h4>
          <ul class="recent_posts">
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_10.jpg")} alt="" />
                Our New Dashboard Is Here
              </a>
              <a class="readmore" href="/">
                read more
              </a>
            </li>
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_05.jpg")} alt="" />
                Design Is In The Air
              </a>
              <a class="readmore" href="/">
                read more
              </a>
            </li>
          </ul>
        </div>
        <div class="widget col-lg-3 col-md-3 col-sm-12">
          <h4 class="title">Prestasi</h4>
          <ul class="recent_posts">
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_08.jpg")} alt="" />
                Our New Dashboard Is Here
              </a>
              <a class="readmore" href="/">
                read more
              </a>
            </li>
            <li>
              <a href="home1.html#">
                <img src={require("../../img/portfolio_09.jpg")} alt="" />
                Design Is In The Air
              </a>
              <a class="readmore" href="/">
                read more
              </a>
            </li>
          </ul>
        </div>
        <div class="widget col-lg-3 col-md-3 col-sm-12">
          <h4 class="title">Hubungi Kami</h4>
          <ul class="contact_details">
            <li>
              <i class="fa fa-envelope-o"></i> info@perpustakaansman70.com
            </li>
            <li>
              <i class="fa fa-phone-square"></i> +21 1234 5678
            </li>
            <li>
              <i class="fa fa-home"></i> Jl. Bulungan Blk. C No.1, RT.11/RW.7,
              Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus
              Ibukota Jakarta 12130
            </li>
            <li>
              <a href="/">
                <i class="fa fa-map-marker"></i> View large map
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyrights">
        <div class="container">
          <div class="col-lg-6 col-md-6 col-sm-12 columns footer-left">
            <p>Copyright © 2021 - All rights reserved.</p>
            <div class="credits"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footers;
