
import { useState } from "react";

export const useNavbar = () => {
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isIndependentOpen, setIsIndependentOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCommunitiesOpen) setIsCommunitiesOpen(false);
    if (isExtensionsOpen) setIsExtensionsOpen(false);
    if (isArticlesOpen) setIsArticlesOpen(false);
    if (isIndependentOpen) setIsIndependentOpen(false);
    if (isAIOpen) setIsAIOpen(false);
    if (isNotesOpen) setIsNotesOpen(false);
  };

  return {
    isCommunitiesOpen,
    isExtensionsOpen,
    isArticlesOpen,
    isIndependentOpen,
    isAIOpen,
    isNotesOpen,
    isMobileMenuOpen,
    setIsCommunitiesOpen,
    setIsExtensionsOpen,
    setIsArticlesOpen,
    setIsIndependentOpen,
    setIsAIOpen,
    setIsNotesOpen,
    toggleMobileMenu,
  };
};
