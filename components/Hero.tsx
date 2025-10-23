'use client';
import { Container, Title, Text, Stack, Paper, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-900 pt-20">
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
        className="relative text-center text-white p-4 z-10"
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
          </div>
        </motion.div>

      </Container>
      <Container size="lg" className="">
        <Title order={2} className="text-4xl font-bold text-center mb-12 text-gray-900">
          開催情報
        </Title>

        <Stack gap="xl">
          {/* Event Details */}
          <Group justify="center" gap="xl" className="">
            <Paper
              shadow="md"
              radius="lg"
              p="xl"
              className="bg-white border border-gray-200 min-w-[200px]"
            >
              <Text size="sm" className="text-gray-600 mb-2 font-semibold">
                📅 開催日時
              </Text>
              <Text size="xl" fw={700} className="text-gray-900">
                2026年2月19日
              </Text>
            </Paper>

            <Paper
              shadow="md"
              radius="lg"
              p="xl"
              className="bg-white border border-gray-200 min-w-[200px]"
            >
              <Text size="sm" className="text-gray-600 mb-2 font-semibold">
                📍 参加方式
              </Text>
              <Text size="xl" fw={700} className="text-gray-900">
                オンライン
              </Text>
            </Paper>

            {/* Countdown */}
            <Paper
              shadow="lg"
              radius="xl"
              p="lg"
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
    </section>
  );
}
