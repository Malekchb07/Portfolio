import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' },
    { code: 'ar', name: 'AR' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size="sm"
        variant="ghost"
      >
        {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
      </MenuButton>
      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            fontWeight={i18n.language === lang.code ? 'bold' : 'normal'}
          >
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;