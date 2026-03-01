import { Link } from 'react-router';
import { Check, ArrowRight, Zap, Globe, Shield, PenTool, Radio, Users } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      id: 'integrated',
      title: '整合营销全案',
      icon: Zap,
      description: '主推服务，为您提供从0到1的一站式营销解决方案。',
      features: [
        '品牌全案策划',
        '海内外社媒运营代管',
        'KOL/KOC 精准投放',
        '全套内容物料制作',
        '国内合规品牌包装',
        '季度/年度定制服务'
      ],
      highlight: true
    },
    {
      id: 'brand',
      title: '品牌全案策划',
      icon: PenTool,
      description: '打造差异化品牌形象，为项目长远发展奠定基础。',
      features: [
        '项目定位与故事线梳理',
        'Slogan与核心话术提炼',
        'VI视觉识别系统设计',
        '官网风格与白皮书视觉',
        '全球宣发节奏规划'
      ],
      highlight: false
    },
    {
      id: 'global',
      title: '海内外线上推广',
      icon: Globe,
      description: '精准触达全球Web3用户，提升社区活跃度与品牌声量。',
      features: [
        '海内外社区代运营',
        '海内外社群维护',
        'KOL/KOC 矩阵投放',
        'AMA 活动策划与执行',
        '媒体通稿编辑投放'
      ],
      highlight: false
    },
    {
      id: 'event',
      title: 'Web3 线下活动',
      icon: Users,
      description: '杭州本地团队执行，全国范围内打造高规格发布会与沙龙。',
      features: [
        '发布会/沙龙全案策划',
        '场地搭建与流程执行',
        '行业大咖与媒体邀约',
        '全程摄影摄像服务',
        '活动宣发与回顾报道'
      ],
      highlight: false
    },
    {
      id: 'compliance',
      title: '国内合规包装',
      icon: Shield,
      description: '严格把控宣传边界，助力项目在国内合法合规发声。',
      features: [
        '品牌故事合规化包装',
        '科技/文创方向定位',
        '国内新媒体代运营',
        '公关危机的合规处理',
        '法律风险评估咨询'
      ],
      highlight: false
    },
    {
      id: 'content',
      title: '内容与视觉物料',
      icon: Radio,
      description: '高质量内容产出，传递项目价值，提升品牌质感。',
      features: [
        '专业白皮书排版设计',
        '宣发海报与长图设计',
        '项目宣传视频/动画',
        '多语言文案撰写',
        'IP周边设计与制作'
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">核心服务体系</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            聚焦 Web3 项目全生命周期，提供专业、合规、高效的营销服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div 
              key={service.id} 
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-slate-800/80 border-violet-500 shadow-lg shadow-violet-500/20' 
                  : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 hover:bg-slate-800/60'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  主推全案
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.highlight ? 'bg-violet-600 text-white' : 'bg-slate-700/50 text-violet-400'
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 h-12">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <Check className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors ${
                  service.highlight 
                    ? 'bg-violet-600 hover:bg-violet-700 text-white' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                咨询详情 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-violet-900/50 to-slate-800 rounded-3xl p-8 md:p-12 text-center border border-violet-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">不确定哪种服务适合您？</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            联系我们的 Web3 营销专家，获取免费的项目诊断与定制化建议
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link
              to="/contact"
              className="bg-white text-violet-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              获取定制方案
            </Link>
             <Link
              to="/pricing"
              className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              查看套餐报价
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;