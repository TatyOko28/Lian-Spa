// src/Components/Stats.js
import React from 'react';
import './styles/Stats.scss';

const Stats = () => {
  return (
    <div className="stats-container">
      <h1>数字资产管理领域的领导者，提供集成支付和交易解决方案</h1>
      <div className="stats">
        <div className="stat-item">
          <h2>全球化的服务网点</h2>
          <p>泰国、柬埔寨、缅甸、新加坡、马来、菲律宾、迪拜……</p>
        </div>
        <div className="stat-item">
          <h2>久经考验的专业知识</h2>
          <p>专业的资金操盘团队十余年的资金实操经验，渠道广、效率高、更安全</p>
        </div>
        <div className="stat-item">
          <h2>顶尖的产品团队</h2>
          <p>核心成员均来自于国内一线大 厂，近20年互联网从业经验 </p>
        </div>
        <div className="stat-item">
          <h2>财务安全 </h2>
          <p>坚实的信誉保障背靠东南亚TOP集团信誉担保 </p>
        </div>
      </div>      
    </div>
  );
};

export default Stats;
