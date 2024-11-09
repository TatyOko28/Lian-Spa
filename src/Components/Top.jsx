import React, { useEffect, useState } from 'react';
import buildingImage from './assets/3.png';
import './Top.scss';

const Top = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`background ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`overlay ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header">
          <h1>身边的私人银行</h1>
          <p>
          <span className='sp'>TD钱包</span>是一款旨在提供全面数字资产管理解决方案的创新平台。通过集成第四方支付技术和OTC成对交易功能，TD钱包为全球用户提供了一个安全、
          高效且用户友好的金融服务平台，能够灵活适应多样化的需求。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top;
