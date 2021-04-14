import React, { Component } from "react";

class ProfileContainers extends Component {
  render() {
    return (
      <div>
        <section class="post-wrapper-top">
          <div class="container">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul class="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Profil</li>
              </ul>
              <h2>PROFIL</h2>
            </div>
          </div>
        </section>

        <section class="section1">
          <div class="container clearfix">
            <div class="content col-lg-12 col-md-12 col-sm-12 clearfix">
              <div class="general-title text-center">
                <h3>VISI MISI</h3>
                <hr />
              </div>
              <div class="divider"></div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="he-wrap tpl2">
                  <img
                    src={require("../img/intro-bg2.jpg")}
                    alt=""
                    class="img-responsive"
                  />
                  <div class="he-view">
                    <div class="bg a0" data-animate="fadeIn">
                      <div class="center-bar">
                        <a
                          href="#"
                          class="twitter a0"
                          data-animate="elasticInDown"
                        ></a>
                        <a
                          href="#"
                          class="facebook a1"
                          data-animate="elasticInDown"
                        ></a>
                        <a
                          href="#"
                          class="in a2"
                          data-animate="elasticInDown"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>

                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="clearfix"></div>
        <div class="divider"></div>

        <div class="container">
          <div class="general-title text-center">
            <h3>TUJUAN</h3>
            <hr />
          </div>

          <div class="skills text-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
        <div class="divider"></div>

        <section class="section1">
          <div class="container">
            <div class="general-title text-center">
              <h3>STRUKTUR</h3>
              <hr />
            </div>

            <div class="stat f-container">
              <div class="f-element col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="clearfix"></div>
        <div class="divider"></div>

        <div class="container">
          <div class="general-title text-center">
            <h3>DENAH LOKASI</h3>
            <hr />
          </div>

          <div class="skills text-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="divider"></div>
      </div>
    );
  }
}
export default ProfileContainers;
