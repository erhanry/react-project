import { memo } from 'react';

import style from './Footer.module.css';

import { Year } from '../../utils/GetDateTime';

const Footer = () => {
  return (
    <>
      <footer id={style['footer']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Pages</h4>
              <ul className="list-unstyled">
                <li><a href="text.html">About us</a></li>
                <li><a href="text.html">Terms and conditions</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
              <hr />
              <h4 className="mb-3">User section</h4>
              <ul className="list-unstyled">
                <li><a href="/" data-toggle="modal" data-target="#login-modal">Login</a></li>
                <li><a href="register.html">Regiter</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Top categories</h4>
              <h5>Men</h5>
              <ul className="list-unstyled">
                <li><a href="category.html">T-shirts</a></li>
                <li><a href="category.html">Shirts</a></li>
                <li><a href="category.html">Accessories</a></li>
              </ul>
              <h5>Ladies</h5>
              <ul className="list-unstyled">
                <li><a href="category.html">T-shirts</a></li>
                <li><a href="category.html">Skirts</a></li>
                <li><a href="category.html">Pants</a></li>
                <li><a href="category.html">Accessories</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Where to find us</h4>
              <p><strong>Obaju Ltd.</strong><br />13/25 New Avenue<br />New Heaven<br />45Y 73J<br />England<br /><strong>Great Britain</strong></p><a href="contact.html">Go to contact page</a>
              <hr className="d-block d-md-none" />
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Get the news</h4>
              <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" /><span className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary">Subscribe!</button></span>
                </div>
              </form>
              <hr />
              <h4 className="mb-3">Stay in touch</h4>
              <p className={style.social}>
                <a href="/" className={style.facebook}><i className="fa fa-facebook"></i></a>
                <a href="/" className={style.twitter}><i className="fa fa-twitter"></i></a>
                <a href="/" className={style.instagram}><i className="fa fa-instagram"></i></a>
                <a href="/" className={style.gplus}><i className="fa fa-google-plus"></i></a>
                <a href="/" className={style.email}><i className="fa fa-envelope"></i></a></p>
            </div>
          </div>
        </div>
      </footer>
      <div id={style.copyright}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <p className="text-center text-lg-left">©{ Year } Your name goes here.</p>
            </div>
            <div className="col-lg-6" >
              <p className="text-center text-lg-right">Template design by <a href="https://bootstrapious.com/">Bootstrapious</a>
                <span dangerouslySetInnerHTML={{ __html: `<!-- If you want to remove this backlink, pls purchase an Attribution-free License @ https://bootstrapious.com/p/obaju-e-commerce-template. Big thanks!-->` }} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
