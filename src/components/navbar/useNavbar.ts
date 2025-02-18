
import { useState } from "react";

export const useNavbar = () => {
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCommunitiesOpen) setIsCommunitiesOpen(false);
    if (isExtensionsOpen) setIsExtensionsOpen(false);
    if (isArticlesOpen) setIsArticlesOpen(false);
  };

  return {
    isCommunitiesOpen,
    isExtensionsOpen,
    isArticlesOpen,
    isMobileMenuOpen,
    setIsCommunitiesOpen,
    setIsExtensionsOpen,
    setIsArticlesOpen,
    toggleMobileMenu,
  };
};
