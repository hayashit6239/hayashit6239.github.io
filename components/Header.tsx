'use client';
import { Container, Group, Button } from '@mantine/core';
import { motion } from 'framer-motion';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '概要', id: 'overview' },
    { label: 'テーマ', id: 'theme' },
    { label: 'CfP', id: 'cfp' },
    { label: '行動規範', id: 'conduct' },
    { label: 'スタッフ', id: 'staff' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <Container size="xl">
        <Group justify="space-between" className="py-4">
          <Button
            variant="subtle"
            size="lg"
            className="text-xl font-bold text-blue-600 hover:bg-transparent"
            onClick={() => scrollToSection('hero')}
          >
            GCTS 2025
          </Button>

          <Group gap="xs" className="hidden md:flex">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="subtle"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Group>

          {/* Mobile Menu Button (future enhancement) */}
          <div className="md:hidden">
            <Button variant="subtle" className="text-gray-700">
              ☰
            </Button>
          </div>
        </Group>
      </Container>
    </motion.header>
  );
}
