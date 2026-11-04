export const WHATSAPP_NUMBER = "5547999461931";
export const WHATSAPP_DISPLAY = "(47) 99946-1931";

export const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MSG = {
  geral: "Olá! Gostaria de solicitar um orçamento.",
  instalacao: "Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.",
  manutencao: "Olá! Preciso de manutenção no meu ar-condicionado.",
  higienizacao: "Olá! Gostaria de solicitar uma higienização de ar-condicionado.",
  conserto: "Olá! Meu ar-condicionado está com problema e gostaria de um orçamento para conserto.",
  gas: "Olá! Gostaria de uma avaliação para carga de gás do meu ar-condicionado.",
  mudanca: "Olá! Preciso mudar meu ar-condicionado de lugar. Podem fazer um orçamento?",
  geladeira: "Olá! Preciso de assistência técnica para uma geladeira.",
  freezer: "Olá! Preciso de assistência técnica para um freezer.",
  lavar: "Olá! Gostaria de solicitar um orçamento para conserto de máquina de lavar.",
  expositor: "Olá! Preciso de manutenção em um expositor refrigerado.",
  linhaBranca: "Olá! Gostaria de um orçamento de assistência técnica para um equipamento de refrigeração/linha branca.",
} as const;
