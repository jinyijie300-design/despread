import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Globe, Shield, Zap, Target, Users, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1639418510515-31148d12ed5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmx1ZSUyMHB1cnBsZXxlbnwxfHx8fDE3NzE0MTkyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Blockchain Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-violet-300 text-sm font-medium tracking-wide">Web3 品牌策划与全球推广专家</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white mb-2">连接 Web3 世界</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              重塑品牌价值
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">海外宣发 · 国内合规 · 社区增长 · 线下落地<br />为Web3.0、NFT、DApp、公链等项目提供一站式设计营销解决方案</p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-violet-600 hover:bg-violet-700 md:text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]"
            >
              立即咨询
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-semibold rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 md:text-lg backdrop-blur-sm transition-all"
            >
              查看服务
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const features = [
    {
      icon: Target,
      title: '全赛道覆盖',
      desc: '深度适配链游、NFT、公链、交易所等各类Web3项目，精准把握赛道痛点。',
    },
    {
      icon: Globe,
      title: '全球化视野',
      desc: '海外精准宣发 + 国内合规包装，打通 Twitter、Discord 等全球社媒流量。',
    },
    {
      icon: Shield,
      title: '合规保障',
      desc: '严格把控国内宣发边界，规避法律风险，为项目长远发展保驾护航。',
    },
    {
      icon: Zap,
      title: '全案执行',
      desc: '从品牌定位与设计包装到线下活动全流程落地，杭州本地团队高效执行，拒绝外包扯皮。',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">为什么选择 DeSpread</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-400">懂 Web3，更懂合规与增长</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors">
                <feature.icon className="w-6 h-6 text-violet-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[14px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      title: '整合营销全案',
      desc: '品牌全案 + 海外推广 + 线下活动，一站式增长引擎。',
      bgImage: 'https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'Web3 品牌策划',
      desc: '打造差异化品牌视觉与故事，建立用户信任资产。',
      bgImage: 'https://images.unsplash.com/photo-1764258560169-cd2a34f871ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: '海内外社媒增长',
      desc: '国内社区运营，Twitter/Discord 精细化运营，KOL 矩阵精准投放。',
      bgImage: 'https://images.unsplash.com/photo-1758691737217-77302c5f988f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心服务体系</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              针对不同阶段 Web3 项目，提供定制化营销解决方案
            </p>
          </div>
          <Link
            to="/services"
            className="hidden md:flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            查看所有服务 <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to="/services" className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-1 bg-violet-600 mb-4 rounded-full w-0 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 group-hover:text-white transition-colors">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center text-violet-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  了解详情 <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <Link
            to="/services"
            className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            查看所有服务 <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">客户信任背书</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "DeSpread 团队非常专业，帮助我们在两个月内完成了品牌重塑，不仅规避了合规风险，还在海外市场获得了极高的关注度。",
              role: "某知名 GameFi 项目负责人",
              tag: "整合营销全案"
            },
            {
              quote: "线下活动的执行力超乎预期，杭州发布会现场氛围非常好，吸引了很多行业大咖和投资机构，后续合作转化率很高。",
              role: "某公链生态合伙人",
              tag: "线下活动策划"
            },
            {
              quote: "对于 Web3 项目的痛点抓得很准，社媒运营非常精细化，不仅有专业的空中课堂和高级的宣传资料设计，更是在真正地运营社区，用户粘性提升明显。",
              role: "Web3项目平台创始人",
              tag: "国内社媒全案运营"
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                    <p className="text-white font-semibold text-sm">{item.role}</p>
                    <p className="text-slate-500 text-xs mt-1">服务内容：{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-violet-900/50"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          您的 Web3 项目，需要专业的营销伙伴
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          立即获取定制化营销方案，开启全球增长之旅
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-slate-100 transition-colors shadow-2xl"
        >
          免费获取方案
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Hero />
      <Advantages />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;