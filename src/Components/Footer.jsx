import React from 'react';
import './styles/footer.scss';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>TD wallet</h2>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>产品</h3>
            <ul>
              <li>全球收款账户</li>
              <li>全球付款</li>
              <li>全球付单</li>
              <li>TD星球</li>
              <li>连连卡</li>
              <li>全球领跑</li>
              <li>退税管家</li>
              <li>融易服务平台</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>解决方案</h3>
            <ul>
              <li>跨境电商</li>
              <li>外贸 B2B</li>
              <li>留学教育</li>
              <li>跨境物流</li>
              <li>国际物流</li>
              <li>数据出海</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>发现</h3>
            <ul>
              <li>数码出海</li>
              <li>福利权益</li>
              <li>帮助中心</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>企业</h3>
            <ul>
              <li>关于我们</li>
              <li>合规资质</li>
              <li>合作伙伴</li>
              <li>加入我们</li>
            </ul>
          </div>
          <div className="footer-column contact">
            <h3>联系我们</h3>
            <p>电话: +79920746361</p>
            <p>邮箱: elladaandy@gmail.com</p>
            <div className="social-icons">
              <a href="https://chat.whatsapp.com/LaF9vnvW8BmFSYOLKkaMCbL" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="YOUR_WEIBO_URL" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
              <a href="YOUR_DOUYIN_URL" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>  {/* Exemple pour Douyin */}
              <a href="YOUR_BILIBILI_URL" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>   {/* Exemple pour Bilibili */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© TD wallet 版权所有</p>
        <p>工信部备案号：浙B2-20080148-2 浙公网安备 33010802004661号</p>
        <p>服务协议 | 隐私政策</p>
      </div>
    </footer>
  );
};

export default Footer;
