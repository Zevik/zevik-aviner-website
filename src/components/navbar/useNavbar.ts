
import { useState } from "react";

export const useNavbar = () => {
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isIndependentOpen, setIsIndependentOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCommunitiesOpen) setIsCommunitiesOpen(false);
    if (isExtensionsOpen) setIsExtensionsOpen(false);
    if (isArticlesOpen) setIsArticlesOpen(false);
    if (isIndependentOpen) setIsIndependentOpen(false);
  };

  return {
    isCommunitiesOpen,
    isExtensionsOpen,
    isArticlesOpen,
    isIndependentOpen,
    isMobileMenuOpen,
    setIsCommunitiesOpen,
    setIsExtensionsOpen,
    setIsArticlesOpen,
    setIsIndependentOpen,
    toggleMobileMenu,
  };
};
