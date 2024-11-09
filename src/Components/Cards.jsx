import React, { useState, useEffect } from 'react';
import './styles/cards.scss';

const Cards = () => {
  const [images, setImages] = useState({});
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const importImages = async () => {
      const customer = await import('./assets/ff.png');
      const innovation = await import('./assets/7g.png');
      const simplicity = await import('./assets/m1.png');
      const integrity = await import('./assets/hb.png');

      setImages({
        customer: customer.default,
        innovation: innovation.default,
        simplicity: simplicity.default,
        integrity: integrity.default,
      });
    };

    importImages();
  }, []);

  const cards = [
    {
      title: "第四方支付平台",
      image: images.customer,
      description: "第三方支付平台提供融合多种金融方式和服务的统一接口，支持加密货币、法币等多种资金流向，支付流程更加便捷高效。",
      extraDetails: [
        "整合多种支付方式和金融服务，提供一个统一的支付接口。",
        "支持包括加密货币和法币在内的多种资金流，使得支付过程更加便捷 和高效"
      ]
    },
    {
      title: "OTC成对交易",
      image: images.innovation,
      description: "OTC配对交易允许用户之间直接进行点对点交易，提供更灵活、更快捷的流程，无需经过传统的加密货币交易所。",
      extraDetails: [
        "允许用户直接与其他用户进行点对点的交易。",
        "无需通过传统的加密货币交易所，交易过程更加灵活和快速。"
      ]
    },
    {
      title: "基本钱包功能",
      image: images.simplicity,
      description: "该钱包提供存储、发送和接收各种加密货币的基本功能，同时提供实时市场数据和资产管理工具，以实现更好的数字资产管理。",
      extraDetails: [
        "存储、发送和接收多种主流和小众加密货币。",
        " 提供实时的市场数据和资产管理工具，帮助用户更好地管理其数字 资。"
      ]
    },
    {
      title: "金融理财服务",
      image: images.integrity,
      description: "理财服务提供生息活期存款、通过各类数字金融产品实现财富增值的资产增值计划、数字资产典当贷款以及针对用户具体需求量身定制的一系列灵活的金融产品。",
      extraDetails: [
        "T提供类似于银行的活期存款服务，用户可以通过活期存款获取稳定的利息收益。",
        "资产增值计划，通过多种数字货币理财产品，帮助用户实现财富增值。",
        "提供贷款服务，用户可以抵押其数字资产获取贷款，满足资金周转需求。",
        "灵活的理财产品，支持多种期限和收益类型，用户可以根据自身需求选择适合的产品。"
      ]
    }
  ];

  return (
    <div className="cards-container">
      <h1>TD钱包结合现代支付系统的灵活性和扩展性</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} 
               className="card"
               onMouseEnter={() => setHovered(index)}
               onMouseLeave={() => setHovered(null)}>
            <div className="card-image" style={{ opacity: hovered === index ? 0 : 1 }}>
              {card.image && <img src={card.image} alt={card.title} />}
            </div>
            <div className="card-content" style={{ transform: hovered === index ? 'translateY(-100%)' : 'translateY(0)' }}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className="divider"></div> {/* Adding the divider */}
              <div className="extra-details" style={{ display: hovered === index ? 'block' : 'none' }}>
                <ul className='ul'>
                  {card.extraDetails.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
