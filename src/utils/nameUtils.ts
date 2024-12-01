export const getIslandNameById = (id: string): string => {
  const islandMap: { [key: string]: string } = {
    'amorgos': 'Amorgos',
    'anafi': 'Anafi',
    'andros': 'Andros',
    'antiparos': 'Antiparos',
    'delos': 'Delos',
    'donousa': 'Donousa',
    'folegandros': 'Folegandros',
    'ios': 'Ios',
    'kea': 'Kea (Tzia)',
    'kimolos': 'Kimolos',
    'koufonisia': 'Koufonisia',
    'kythnos': 'Kythnos',
    'milos': 'Milos',
    'mykonos': 'Mykonos',
    'naxos': 'Naxos',
    'paros': 'Paros',
    'santorini': 'Santorini',
    'serifos': 'Serifos',
    'sifnos': 'Sifnos',
    'sikinos': 'Sikinos',
    'syros': 'Syros',
    'tinos': 'Tinos'
  };
  
  return islandMap[id] || id.charAt(0).toUpperCase() + id.slice(1);
};