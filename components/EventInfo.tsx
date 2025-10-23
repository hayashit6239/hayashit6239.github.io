'use client';
import { Container, Title, Text, Paper, Group, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date('2026-02-19T00:00:00+09:00');

export function EventInfo() {
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
    <motion.section
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="lg" className="px-4">
        <Title order={2} className="text-4xl font-bold text-center mb-12 text-gray-900">
          開催情報
        </Title>

        <Stack gap="xl">
          {/* Event Details */}
          <Group justify="center" gap="xl" className="flex-wrap">
            <Paper
              shadow="md"
              radius="lg"
              p="xl"
              className="bg-white border border-gray-200 min-w-[250px]"
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
              className="bg-white border border-gray-200 min-w-[250px]"
            >
              <Text size="sm" className="text-gray-600 mb-2 font-semibold">
                📍 参加方式
              </Text>
              <Text size="xl" fw={700} className="text-gray-900">
                オンライン / オフライン
              </Text>
              <Text size="sm" className="text-gray-500 mt-1">
                詳細は近日公開
              </Text>
            </Paper>
          </Group>

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
        </Stack>
      </Container>
    </motion.section>
  );
}
