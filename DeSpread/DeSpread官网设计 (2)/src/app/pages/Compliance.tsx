import React from 'react';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-6">
            <ShieldAlert className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">合规经营声明</h1>
          <p className="text-slate-400 text-[16px]">DeSpread 始终坚持在法律法规允许的框架内开展业务，致力于为Web3行业提供合规、透明的营销服务。</p>
        </div>

        <div className="space-y-12">
          {/* Commitment */}
          <section className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
              合规经营承诺
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              作为一家注册于中国杭州的营销策划公司，我们严格遵守《中华人民共和国网络安全法》、《关于进一步防范和处置虚拟货币交易炒作风险的通知》等相关法律法规。
            </p>
            <p className="text-slate-300 leading-relaxed">
              我们坚决不涉及任何形式的代币发行融资（ICO/IEO等）、虚拟货币交易平台搭建、非法集资或传销活动。我们的业务核心聚焦于品牌策划、创意设计、技术推广与海外市场营销。
            </p>
          </section>

          {/* Service Scope */}
          <section className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 text-violet-400 mr-3" />
              合规服务范围
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">品牌策划与咨询</h3>
                  <p className="text-slate-400 text-sm">提供符合国内数字经济发展方向的品牌定位、视觉设计与营销策略咨询。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">海内外市场推广</h3>
                  <p className="text-slate-400 text-sm">针对海外用户群体的社媒运营与广告投放，严格遵守投放地法律法规。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">技术支持服务</h3>
                  <p className="text-slate-400 text-sm">区块链底层技术、元宇宙场景应用的技术宣发与科普教育。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">线下活动执行</h3>
                  <p className="text-slate-400 text-sm">举办行业交流沙龙、技术研讨会，不涉及任何现场虚拟货币推介与交易。</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Risk Warning */}
          <section className="bg-red-900/10 p-8 rounded-2xl border border-red-900/30">
            <h2 className="text-xl font-bold text-red-400 mb-4">风险提示</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Web3 行业存在较高的市场波动与监管不确定性。我们建议所有合作伙伴与客户在开展业务前，充分评估所在国家/地区的法律风险。
              DeSpread 仅提供营销服务，不对项目的投资价值做任何背书或承诺。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
