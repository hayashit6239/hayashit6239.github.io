'use client';

import { motion } from 'framer-motion';
import { IconRocket, IconUsersGroup } from '@tabler/icons-react';

const themes = [
  {
    icon: IconRocket,
    title: '超技術特化',
    description:
      'ガチガチのGoogle Cloud / GWSの触っているユーザーならではのテクニカルなセッションがきける',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: IconUsersGroup,
    title: 'コミュニティの出会い',
    description:
      'Google Cloudのユーザーコミュニティとのハブになることで、参加者がGoogle Cloudの色々なコミュニティに出会える',
    gradient: 'from-yellow-400 to-green-500',
  },
];

export function Themes() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="themes" className="relative pt-0 pb-24 sm:pb-32 bg-slate-900 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <motion.div
          initial={{ x: '-50%', y: '-50%', scale: 1 }}
          animate={{
            x: ['-50%', '-40%', '-60%', '-50%'],
            y: ['-50%', '-60%', '-40%', '-50%'],
            scale: [1, 1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl"
          style={{ top: '30%', left: '20%' }}
        />
        <motion.div
          initial={{ x: '-50%', y: '-50%', scale: 1.2 }}
          animate={{
            x: ['-50%', '-60%', '-40%', '-50%'],
            y: ['-50%', '-40%', '-60%', '-50%'],
            scale: [1.2, 1, 1.2, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-yellow-400 to-green-500 rounded-full filter blur-3xl"
          style={{ top: '70%', left: '80%' }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
          style={{
            fontFamily: 'var(--font-patua-one), sans-serif',
            background: 'linear-gradient(135deg, #F9A8D4 0%, #60A5FA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Concept
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {themes.map((theme, i) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 shadow-2xl overflow-hidden transition-colors duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with hover effect */}
                  <div className="inline-block p-4 bg-white/10 rounded-full mb-6 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon className="h-12 w-12 text-white" stroke={1.5} />
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                    style={{
                      fontFamily: 'var(--font-patua-one), sans-serif',
                    }}
                  >
                    {theme.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
