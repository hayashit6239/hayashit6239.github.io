'use client';
import { Container, Title, Text, Paper } from '@mantine/core';
import { motion } from 'framer-motion';

export function Staff() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="lg" className="px-4">
        <Title order={2} className="text-4xl font-bold text-center mb-8 text-gray-800">
          スタッフ紹介
        </Title>

        <Paper
          shadow="sm"
          p="xl"
          radius="md"
          className="text-center bg-blue-50 border-2 border-blue-300"
        >
          <Text size="xl" fw={600} className="text-gray-700">
            Coming Soon
          </Text>
          <Text size="md" c="dimmed" mt="sm">
            近日公開予定
          </Text>
        </Paper>
      </Container>
    </motion.section>
  );
}
