import { Container, Title, Text, Card, Stack } from '@mantine/core';

export function Themes() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <Container size="lg" className="px-4">
        <Title order={2} className="text-4xl font-bold text-center mb-12 text-gray-800">
          カンファレンステーマ
        </Title>

        <Stack gap="lg">
          <Card
            shadow="md"
            padding="xl"
            radius="md"
            className="border-l-8 border-blue-500"
          >
            <Title order={3} className="text-2xl font-semibold mb-4 text-blue-700">
              🚀 超技術特化
            </Title>
            <Text size="lg" className="text-gray-700">
              ガチガチのGoogle Cloud / GWSの触っているユーザーならではのテクニカルなセッションがきける
            </Text>
          </Card>

          <Card
            shadow="md"
            padding="xl"
            radius="md"
            className="border-l-8 border-green-500"
          >
            <Title order={3} className="text-2xl font-semibold mb-4 text-green-700">
              🤝 コミュニティの出会い
            </Title>
            <Text size="lg" className="text-gray-700">
              Google Cloudのユーザーコミュニティとのハブになることで、参加者がGoogle Cloudの色々なコミュニティに出会える
            </Text>
          </Card>
        </Stack>
      </Container>
    </section>
  );
}
