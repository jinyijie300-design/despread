import React, { useState } from 'react';
import { Check, Zap, PenTool, Globe, Radio, Shield, Users, PhoneCall, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'brand-basic' | 'brand-full'>('brand-basic');

  const plans = [
    {
      id: 'integrated',
      icon: Zap,
      name: '整合营销全案',
      badge: '主推 · 一站式',
      highlight: true,
      price: '¥38,000 起',
      unit: '/月度起',
      desc: '一站式整合，节省客户沟通成本，杭州团队落地执行，全程合规把控，适配中大型 Web3 项目长期发展需求。',
      features: [
        { label: '品牌全案策划（定位·故事·VI）', category: '品牌' },
        { label: '海外社媒全渠道运营（Twitter / Discord / Telegram / Instagram）', category: '推广' },
        { label: 'KOL / KOC 矩阵精准投放', category: '推广' },
        { label: '全套内容与视觉物料制作', category: '内容' },
        { label: '国内合规品牌包装与新媒体运营', category: '合规' },
        { label: '线下活动策划与执行（季度 / 年度定制）', category: '活动' },
        { label: '专属项目经理 1v1 全程陪跑', category: '服务' },
      ],
      cta: '获取定制方案',
      ctaDesc: '免费项目诊断',
    },
    {
      id: 'brand',
      icon: PenTool,
      name: '品牌全案策划',
      badge: '高利润 · 刚需',
      highlight: false,
      price: null,
      unit: null,
      desc: '贴合 Web3 项目调性，打造差异化品牌形象，为后续全球推广奠定坚实基础。',
      tabs: {
        'brand-basic': {
          label: '基础版',
          price: '¥18,000 起',
          unit: '/案',
          features: [
            '项目核心定位与差异化梳理',
            '品牌故事线与核心话术提炼',
            'Slogan 设计（3 套备选）',
            '主视觉风格定义',
            '初期宣发节奏规划',
          ],
        },
        'brand-full': {
          label: '完整版',
          price: '¥58,000 起',
          unit: '/案',
          features: [
            '包含基础版全部内容',
            'VI 视觉识别基础规范手册',
            '官网整体视觉风格设定',
            '白皮书视觉排版设计',
            '全球宣发策略与渠道规划',
            '品牌使用规范培训',
          ],
        },
      },
      cta: '获取品牌方案',
      ctaDesc: null,
    },
    {
      id: 'global',
      icon: Globe,
      name: '海外线上推广',
      badge: '核心收入',
      highlight: false,
      price: '$5,000 起',
      unit: '/月',
      desc: '熟悉海外社媒算法，精准触达全球 Web3 目标用户，提升项目海外曝光与社群活跃度。',
      features: [
        { label: 'Twitter 官方账号代运营（内容创作·互动·数据）' },
        { label: 'Discord 社区搭建与深度维护' },
        { label: 'Telegram 群组运营与社群活跃维护' },
        { label: 'Instagram 图文/短视频内容运营' },
        { label: 'KOL / KOC 精准匹配与投放代理' },
        { label: '月度数据分析报告（曝光·增长·互动）' },
      ],
      cta: '立即咨询',
      ctaDesc: null,
    },
    {
      id: 'content',
      icon: Radio,
      name: '内容与视觉物料',
      badge: '按需定制',
      highlight: false,
      price: '¥18,000 起',
      unit: '/项目',
      desc: '贴合 Web3 调性，视觉高级，适配多场景宣发，每一件物料都是品牌的名片。',
      features: [
        { label: '宣传文案撰写（中英双语·多平台适配）' },
        { label: '宣发海报 / 长图设计（Web3 高级质感）' },
        { label: '项目宣传短视频 / 动画制作' },
        { label: '白皮书专业排版设计' },
        { label: 'IP 周边设计与制作' },
        { label: 'AMA / 活动视觉全套物料' },
      ],
      cta: '获取报价',
      ctaDesc: null,
    },
    {
      id: 'compliance',
      icon: Shield,
      name: '国内合规品牌包装',
      badge: '合规护航',
      highlight: false,
      price: '¥28,000 起',
      unit: '/项目',
      desc: '严守合规边界，助力项目在国内以科技、文创、数字经济方向合法发声，规避法律风险。',
      features: [
        { label: '品牌故事合规化包装与重塑' },
        { label: '科技 / 文创 / 数字经济方向合规宣传定位' },
        { label: '公众号 / 视频号 / 小红书代运营' },
        { label: '国内媒体通稿编辑与合规投放' },
        { label: '危机公关应对与品牌声誉维护' },
        { label: '法律风险评估与合规顾问咨询' },
      ],
      cta: '合规咨询',
      ctaDesc: null,
    },
    {
      id: 'event',
      icon: Users,
      name: '线下活动执行',
      badge: '高客单',
      highlight: false,
      price: '¥28,000 起',
      unit: '/场',
      desc: '杭州本地团队，全国范围快速响应，从策划到执行一手包办，打造高规格行业活动。',
      features: [
        { label: '小型沙龙 / 路演（20–80 人）全案策划' },
        { label: '中大型发布会（100 人以上）全案执行' },
        { label: '活动场地选定、搭建与现场管理' },
        { label: '行业大咖、媒体与 KOL 邀约资源对接' },
        { label: '全程专业摄影摄像服务' },
        { label: '活动宣发预热与会后回顾报道' },
      ],
      cta: '活动咨询',
      ctaDesc: null,
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm font-semibold mb-6">
            透明报价体系
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">服务套餐与报价</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            拒绝隐形消费，六大核心服务精准适配不同阶段 Web3 项目需求
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isTabbed = !!plan.tabs;
            const currentTab = isTabbed ? plan.tabs![activeTab as keyof typeof plan.tabs] : null;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-slate-800 to-slate-800/80 border-violet-500 shadow-2xl shadow-violet-500/20'
                    : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                {/* Badge */}
                <div className={`absolute -top-3.5 left-6 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {plan.badge}
                </div>

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      plan.highlight ? 'bg-violet-600 text-white' : 'bg-slate-700/50 text-violet-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  {isTabbed ? (
                    <>
                      {/* Tab Toggle */}
                      <div className="flex rounded-lg bg-slate-900/60 p-1 mb-3 border border-slate-700/50">
                        {(['brand-basic', 'brand-full'] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all ${
                              activeTab === tab
                                ? 'bg-violet-600 text-white shadow'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {plan.tabs![tab].label}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-extrabold text-white">{plan.tabs![activeTab as keyof typeof plan.tabs].price}</span>
                        <span className="text-slate-400 text-sm">{plan.tabs![activeTab as keyof typeof plan.tabs].unit}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`font-extrabold text-white ${plan.price === '定制报价' || plan.price === '按需报价' ? 'text-2xl' : 'text-3xl'}`}>
                        {plan.price}
                      </span>
                      {plan.unit && <span className="text-slate-400 text-sm">{plan.unit}</span>}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.desc}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {(isTabbed
                      ? plan.tabs![activeTab as keyof typeof plan.tabs].features.map((f: string) => ({ label: f }))
                      : plan.features as { label: string; category?: string }[]
                    ).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-violet-400' : 'text-emerald-400'}`} />
                        <span className="text-slate-300 text-sm leading-snug">{feature.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold transition-all ${
                        plan.highlight
                          ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/25'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {plan.ctaDesc && (
                      <p className="text-center text-slate-500 text-xs">{plan.ctaDesc}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
            <Star className="w-6 h-6 text-violet-400 mb-3" />
            <h3 className="text-white font-bold mb-2">灵活组合</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              以上套餐可灵活组合，根据您的项目阶段（初创期 / 成长期 / 成熟期）与实际预算量身定制。
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
            <Shield className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-white font-bold mb-2">透明无隐费</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              所有报价明码标价，服务范围白纸黑字，全程无隐形消费，签约前提供详细方案书。
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
            <PhoneCall className="w-6 h-6 text-amber-400 mb-3" />
            <h3 className="text-white font-bold mb-2">免费项目诊断</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              不确定该选哪种服务？资深 Web3 营销顾问免费为您诊断项目现状，提供初步建议。
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-violet-900/50 to-slate-800 rounded-3xl p-8 md:p-12 text-center border border-violet-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">准备好启动您的 Web3 营销计划？</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            联系 DeSpread 团队，获取专属定制方案与免费项目诊断报告
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-violet-600 text-white px-8 py-3 rounded-full font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/25"
            >
              立即联系我们
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              查看核心服务
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
