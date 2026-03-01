import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">联系我们</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            期待与您深入沟通，共同探索 Web3 增长之道
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">公司地址</h3>
                    <p className="text-slate-400 leading-relaxed">浙江省杭州市滨江区互联网小镇<br /></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">商务合作</h3>
                    <p className="text-slate-400">+86 13484349952 (金经理)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">电子邮箱</h3>
                    <p className="text-slate-400">1005685376@qq.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">工作时间</h3>
                    <p className="text-slate-400">
                      周一至周五 9:30 - 18:30 (GMT+8)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">合规提示</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                我们仅为合规的 Web3 项目提供品牌策划与营销推广服务，不涉及任何代币发行、非法集资或虚拟货币交易业务。请确保您的项目符合所在国家/地区的法律法规。
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/40 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">提交成功！</h3>
                <p className="text-slate-400 max-w-sm">
                  感谢您的咨询，我们的商务顾问将在 24 小时内与您联系，请留意您的邮箱或电话。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-violet-400 hover:text-violet-300 font-medium"
                >
                  发送新的咨询
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    姓名 / 称呼
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-2">
                    项目类型
                  </label>
                  <select
                    id="project"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  >
                    <option>GameFi / 链游</option>
                    <option>NFT / 数字藏品</option>
                    <option>DeFi / DApp</option>
                    <option>Public Chain / 公链</option>
                    <option>Exchange / 交易所</option>
                    <option>其他 Web3 项目</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-2">
                    联系方式 (微信/Telegram/邮箱)
                  </label>
                  <input
                    type="text"
                    id="contact"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    placeholder="便于我们回复您"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    需求描述
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                    placeholder="请简要描述您的项目需求与预算范围..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-600/50 text-white font-bold py-4 rounded-lg shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      提交中...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      立即提交咨询 <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
