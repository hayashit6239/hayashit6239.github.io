'use client';
import { Container, Title, Text, Paper } from '@mantine/core';
import { motion } from 'framer-motion';

const BentoItem = ({
  className = '',
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="h-full"
  >
    <Paper
      shadow="md"
      radius="lg"
      p="xl"
      className={`flex flex-col justify-between h-full bg-white border border-gray-200 transition-all duration-300 hover:bg-gray-50 ${className}`}
    >
      <Title order={3} className="text-2xl font-semibold mb-4 text-gray-800">
        {title}
      </Title>
      <div className="text-gray-600">{children}</div>
    </Paper>
  </motion.div>
);

export function FeatureGrid() {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="lg" className="px-4">
        <Title
          order={2}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Concept
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <BentoItem title="🚀 超技術特化" className="md:col-span-2">
            <Text size="lg">
              ガチガチのGoogle Cloud / GWSの触っているユーザーならではのテクニカルなセッションがきける
            </Text>
          </BentoItem>
          <BentoItem title="🤝 コミュニティの出会い" className="md:col-span-2">
            <Text size="lg">
              Google Cloudのユーザーコミュニティとのハブになることで、参加者がGoogle
              Cloudの色々なコミュニティに出会える
            </Text>
          </BentoItem>
        </div>
      </Container>
    </motion.section>
  );
}
