import React from 'react';
import { Shield, Globe, Award, Briefcase } from 'lucide-react';
import { LazyVideo } from '../components/LazyVideo';

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm font-semibold mb-6">
              关于 DeSpread
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              深耕 Web3 赛道<br />
              <span className="text-slate-400">做最懂合规的全球化推手</span>
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">DeSpread 是一家专注于 Web3 领域的品牌策划与全球推广服务商，总部位于中国杭州。我们致力于为Web3.0、链游、NFT、DApp、公链、金融等项目提供从品牌搭建到落地执行的一站式营销解决方案。</p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">区别于传统营销公司，我们深谙 Web3 行业痛点与海内外社区运营逻辑，同时拥有丰富的国内合规宣发经验。我们坚持“全案+细分”的双轨服务模式，既能提供品牌包装设计，也能落地网站、应用类技术板块，既能提供宏大的品牌战略，也能落地到每个海报设计的精细化运营。</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-violet-400 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">全球视野</h3>
                  <p className="text-slate-400 text-sm">链接全球 Web3 资源</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">合规经营</h3>
                  <p className="text-slate-400 text-sm">严格把控法律边界</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <LazyVideo
              src="https://i.imgur.com/DdjQHe6.mp4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-xl">杭州总部团队</p>
              <p className="text-slate-300 text-sm">高效执行 · 快速响应</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-slate-800/30 rounded-3xl p-8 md:p-16 text-center border border-slate-700/50 mb-24">
          <h2 className="text-3xl font-bold text-white mb-12">我们的核心理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: '专业', desc: '深耕赛道，懂行懂用户' },
              { title: '合规', desc: '敬畏法律，行稳致远' },
              { title: '高效', desc: '快速响应，结果导向' },
              { title: '共赢', desc: '不仅是服务商，更是合伙人' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/30">
                <div className="text-violet-400 font-bold text-2xl mb-2">{item.title}</div>
                <div className="text-slate-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">核心团队成员</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Kim', 
                role: '创始人 & CEO', 
                exp: '7年 区块链行业经验，前头部交易所运营总监',
                avatar: 'https://i.imgur.com/GdAO4jE.jpeg'
              },
              { 
                name: '链航', 
                role: '市场部总监', 
                exp: '曾操盘多个海内外项目，尤其擅长社群裂变、市场拓展',
                avatar: 'https://i.imgur.com/wjRlEW0.png'
              },
              { 
                name: 'David Li', 
                role: '合规顾问', 
                exp: '资深律师，专注于 Web3 与数字经济法律合规研究',
                avatar: 'https://i.imgur.com/Nh8VcnA.png'
              },
              { 
                    name: 'Leo Qiu', 
                role: '创意设计总监', 
                exp: '211院校设计专业，擅长新媒体时代传播设计、审美力和洞察力突出',
                avatar: 'https://i.imgur.com/fHkeUac.png'
              },
              { 
                name: 'Jason Zhang', 
                role: '技术总监', 
                exp: '10年全栈开发经验，精通智能合约审计与 DApp 架构设计',
                avatar: 'https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200'
              },
              { 
                name: '石头', 
                role: 'PR 商务总监', 
                exp: '拥有丰富的商务资源，擅长危机公关与品牌声誉管理',
                avatar: 'https://i.imgur.com/SCN6aAl.png'
              }
            ].map((member, i) => (
              <div key={i} className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/40 transition-colors">
                <div className="w-20 h-20 rounded-full mb-6 mx-auto overflow-hidden ring-2 ring-slate-700/50">
                  <img src={member.avatar} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <p className="text-violet-400 text-sm font-medium text-center mb-4">{member.role}</p>
                <p className="text-slate-400 text-center text-sm leading-relaxed">
                  {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;