import { Container, Title, Text, Card, SimpleGrid } from '@mantine/core';

export function Overview() {
  return (
    <section className="py-20 bg-white">
      <Container size="lg" className="px-4">
        <Title order={2} className="text-4xl font-bold text-center mb-12 text-gray-800">
          概要
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} className="text-xl font-semibold mb-3 text-blue-600">
              👥 対象者
            </Title>
            <Text size="md" c="dimmed">
              クラウドエンジニア、SRE、インフラエンジニア、アプリケーション開発者および開発生産性向上に関心のあるCTO、CIOなど
            </Text>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} className="text-xl font-semibold mb-3 text-blue-600">
              📍 参加方式
            </Title>
            <Text size="md" c="dimmed">
              準備中
            </Text>
          </Card>
        </SimpleGrid>
      </Container>
    </section>
  );
}
