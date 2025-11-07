'use client';
import { Container, Title, Text, Stack, Paper, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconRocket, IconUsersGroup } from '@tabler/icons-react';


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const themes = [
  {
    icon: IconRocket,
    title: 'Deep Dive into Google Cloud',
    description:
      <p className="text-xs sm:text-base font-bold  text-slate-200 leading-relaxed">
        <strong className='text-blue-300 text-xl'>Google Cloud に関心の高い上記の対象の方</strong>に加えて、これから <strong className='text-blue-300 text-xl'>Google Cloud の技術力を高めていきたい方</strong>にも興味を持っていただける場とします。
        <br />
        <br />
        半日をかけて Google Cloud に没頭して、<strong className='text-blue-300 text-xl'>ここでしか得られない知見</strong>を持ち帰っていただければと思います。
      </p>,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: IconUsersGroup,
    title: 'Wide Connect with Community',
    description:
      <p className="text-xs sm:text-base font-bold  text-slate-200 leading-relaxed">
        本カンファレンスを主催している Jagu’e’r（ジャガー）を含めて Google Cloud ユーザーコミュニティはいくつか存在しており、参加される方が<strong className='text-green-300 text-xl'>様々な Google Cloud ユーザーコミュニティを知る</strong>ことのできる場とします。
        <br />
        <br />
        セッションを通して様々なユーザーコミュニティに知り、<strong className='text-green-300 text-xl'>今日で終わらず Google Cloud の学びや新たな仲間との出会いのきっかけ</strong>としていただければと思います。
      </p>,
    gradient: 'from-yellow-400 to-green-500',
  },
];


const EVENT_DATE = new Date('2026-02-19T00:00:00+09:00');

export function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const difference = EVENT_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-slate-900 py-20">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <motion.div
          initial={{ x: '-50%', y: '-50%', scale: 1, rotate: 0 }}
          animate={{
            x: ['-50%', '-40%', '-60%', '-50%'],
            y: ['-50%', '-60%', '-40%', '-50%'],
            scale: [1, 1.1, 1, 1.1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full filter blur-3xl"
          style={{ top: '30%', left: '20%' }}
        />
        <motion.div
          initial={{ x: '-50%', y: '-50%', scale: 1.2, rotate: 45 }}
          animate={{
            x: ['-50%', '-60%', '-40%', '-50%'],
            y: ['-50%', '-40%', '-60%', '-50%'],
            scale: [1.2, 1, 1.2, 1.1],
            rotate: [45, 60, 30, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-yellow-400 to-green-500 rounded-full filter blur-3xl"
          style={{ top: '70%', left: '80%' }}
        />
      </div>

      {/* Glassmorphism Content */}
      <Container
        size="xl"
        className="relative text-center text-white pt-10 z-10"
      >
        <motion.div
          className="relative bg-white/10 backdrop-blur-md py-12 md:py-18 px-24 md:px-48 rounded-2xl border border-white/20 shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <Title
              order={1}
              className="text-[80rem] md:text-[180rem] font-bold mb-48"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                textShadow: '0 7px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                fontFamily: 'var(--font-patua-one), sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Google Cloud
              <br />
              Technical Summit
              <br />
              2026
            </Title>

            <Text
              size="xl"
              className="text-[12rem] md:text-[16rem] font-semibold"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 4rem)',
                background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #2563EB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-patua-one), sans-serif'
              }}
            >
              powered by Jagu&apos;e&apos;r
            </Text>
            <Text
              size="xl"
              className="text-[12rem] md:text-[16rem] font-semibold mt-4"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 4rem)',
                background: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 50%, #DB2777 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-patua-one), sans-serif'
              }}
            >
              2026.02.19(Thu) @Online
            </Text>
          </div>
        </motion.div>

      </Container>
      <Container size="lg" className="relative z-10 mt-10 mb-0">
        <Stack gap="xl">
          {/* Event Details */}
          <Group justify="center" gap="xl" className="">
            {/* Countdown */}
            <Paper
              shadow="lg"
              radius="xl"
              p="xl"
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
            >
              <Text size="lg" className="text-center mb-6 font-semibold opacity-90">
                開催まで
              </Text>
              <Group justify="center" gap="lg" className="flex-wrap">
                <div className="text-center">
                  <motion.div
                    key={timeLeft.days}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    {timeLeft.days}
                  </motion.div>
                  <Text size="sm" className="opacity-80">
                    日
                  </Text>
                </div>

                <div className="text-4xl md:text-5xl font-bold opacity-50">:</div>

                <div className="text-center">
                  <motion.div
                    key={timeLeft.hours}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    {String(timeLeft.hours).padStart(2, '0')}
                  </motion.div>
                  <Text size="sm" className="opacity-80">
                    時間
                  </Text>
                </div>

                <div className="text-4xl md:text-5xl font-bold opacity-50">:</div>

                <div className="text-center">
                  <motion.div
                    key={timeLeft.minutes}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </motion.div>
                  <Text size="sm" className="opacity-80">
                    分
                  </Text>
                </div>

                <div className="text-4xl md:text-5xl font-bold opacity-50">:</div>
                <div className="text-center">
                  <motion.div
                    key={timeLeft.seconds}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </motion.div>
                  <Text size="sm" className="opacity-80">
                    秒
                  </Text>
                </div>
              </Group>
            </Paper>
          </Group>
        </Stack>
      </Container>
      <Container size="xl">
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
            className="text-5xl md:text-6xl font-bold text-center mb-4 text-white"
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
          <motion.h3
            className="text-md text-center mb-8 text-white max-w-4xl mx-auto"
          >
            Google Cloud Technical Summit 2026 は「Deep Dive into Google Cloud」「Wide Connect With Community」をテーマに初めて開催する Google Cloud 特化のオンラインカンファレンスです。
            <br />
            <br />
            以下二つのテーマは、幅広いロールの IT エンジニアや CTO / EM / Tech Lead など Google Cloud の技術に関心のあるすべての方を対象にとしています。
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {themes.map((theme, i) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={theme.title}
                  className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 shadow-2xl overflow-hidden transition-colors duration-300"
                  // variants={cardVariants}
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
                    {/* Icon and Title in a row */}
                    <div className="flex items-center gap-4 max-w-sm mx-auto">
                      <div className="p-4 bg-white/10 rounded-full transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:rotate-6">
                        <Icon className="h-12 w-12 text-white" stroke={1.5} />
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                        style={{
                          fontFamily: 'var(--font-patua-one), sans-serif',
                        }}
                      >
                        {theme.title}
                      </h3>
                    </div>

                    {/* <p className="text-xs sm:text-base text-slate-200 leading-relaxed"> */}
                    {theme.description}
                    {/* </p> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
