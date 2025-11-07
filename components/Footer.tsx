'use client';
import { Container, Text, Group, Stack, Anchor } from '@mantine/core';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-800 text-white border-t border-gray-700">
      <Container size="lg" className="px-4">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <div>
              <Text size="lg" fw={600} className="mb-2">
                Google Cloud Technical Summit 2026
              </Text>
              <Text size="sm" c="dimmed">
                powered by Jagu&apos;é&apos;r
              </Text>
            </div>
            <Group gap="md">
              <Anchor
                href="https://x.com/gctsjp"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <IconBrandX size={24} />
              </Anchor>
            </Group>
          </Group>
          <Group justify="space-between" className="border-t border-gray-700 pt-4">
            <Text size="xs" c="dimmed">
              © 2025 Jagu&apos;é&apos;r. All rights reserved
            </Text>
            {/* <Group gap="md">
              <Anchor
                href="#"
                size="xs"
                className="text-gray-400 hover:text-white"
              >
                プライバシーポリシー
              </Anchor>
              <Anchor
                href="#"
                size="xs"
                className="text-gray-400 hover:text-white"
              >
                お問い合わせ
              </Anchor>
            </Group> */}
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
