'use client';
import { Container, Group, Button, Menu } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IconDots } from '@tabler/icons-react';

export function Header() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpened(false);
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
            GCTS 2026
          </Button>
          {
            !isMobile && (
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
            )
          }

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menu
              opened={mobileMenuOpened}
              onChange={setMobileMenuOpened}
              position="bottom-end"
              shadow="md"
            >
              <Menu.Target>
                <Button
                  variant="subtle"
                  className="text-gray-700 hover:text-blue-600"
                >
                  <IconDots size={24} />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                {navItems.map((item) => (
                  <Menu.Item
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </div>
        </Group>
      </Container>
    </motion.header>
  );
}
