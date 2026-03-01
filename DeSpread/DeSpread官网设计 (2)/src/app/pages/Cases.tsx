import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart2,
  Globe,
  Users,
} from "lucide-react";
import { LazyVideo } from "../components/LazyVideo";

const Cases = () => {
  const cases = [
    {
      title: "某知名链游全球宣发",
      category: "整合营销全案",
      bg: "https://i.imgur.com/QQc5ALE.mp4",
      type: "video",
      stats: [
        { label: "Twitter 粉丝增长", value: "+120%" },
        { label: "Discord 活跃度", value: "Top 5" },
        { label: "社区转化率", value: "8.5%" },
      ],
      description:
        "为该 GameFi 项目制定了全周期的品牌宣发策略，结合 KOL 矩阵投放与社群活动，成功引爆首发热度。",
    },
    {
      title: "Web3项目全球巡演",
      category: "线下活动策划",
      bg: "https://i.imgur.com/5UgMs2c.mp4",
      type: "video",
      stats: [
        { label: "现场参与人数", value: "100w+" },
        { label: "媒体曝光量", value: "100W+" },
        { label: "意向投资对接", value: "10w+" },
      ],
      description:
        "在全球举办的大型 Web3 行业路演，汇聚众多投资机构与优质项目，全程执行零失误，获得客户高度评价。",
    },
    {
      title: "Web3项目品牌重塑",
      category: "品牌全案策划",
      bg: "https://i.imgur.com/104DUTf.mp4",
      type: "video",
      stats: [
        { label: "品牌溢价提升", value: "30%" },
        { label: "官网留存率", value: "+45%" },
        { label: "白皮书阅读量", value: "5W+" },
      ],
      description:
        "针对原品牌形象模糊的问题，重新梳理品牌故事与 VI 视觉，打造符合 Web3 审美的国际化品牌形象。",
    },
    {
      title: "AMA巅峰圆桌会",
      category: "线上社区课堂运营",
      bg: "https://i.imgur.com/iaLgxAN.jpeg",
      type: "image",
      stats: [
        { label: "覆盖社区", value: "20+" },
        { label: "投资者入驻", value: "+500人/月" },
        { label: "月均曝光量", value: "50W+" },
      ],
      description:
        "通过海内外社区定期空中课堂开展增加客户粘性和信心，助力该项目拓展海内外市场和生态发展。",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            成功案例展示
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            以结果为导向，用数据说话。我们为众多 Web3
            项目创造了真实的增长价值。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-violet-500/30 transition-all group h-72"
            >
              <div className="md:w-2/5 h-64 md:h-full relative overflow-hidden">
                {item.type === "video" ? (
                  <LazyVideo
                    src={item.bg}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.bg}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs font-bold rounded-full uppercase tracking-wider border border-violet-600/20">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-6 border-t border-slate-700/50 pt-8">
                  {item.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;