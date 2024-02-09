// QuranSurahs.tsx

import React from 'react';

export interface Surah {
  id: number;
  name: string;
  arabic: string;
  ayahs: number;
}

const surahs: Surah[] = [
  { id: 1, name: 'Al-Fatiha', arabic: 'الفاتحة', ayahs: 7 },
  { id: 2, name: 'Al-Baqarah', arabic: 'البقرة', ayahs: 286 },
  { id: 3, name: 'Aal-E-Imran', arabic: 'آل عمران', ayahs: 200 },
  { id: 4, name: 'An-Nisa', arabic: 'النساء', ayahs: 176 },
  { id: 5, name: 'Al-Ma\'idah', arabic: 'المائدة', ayahs: 120 },
  { id: 6, name: 'Al-An\'am', arabic: 'الأنعام', ayahs: 165 },
  { id: 7, name: 'Al-A\'raf', arabic: 'الأعراف', ayahs: 206 },
  { id: 8, name: 'Al-Anfal', arabic: 'الأنفال', ayahs: 75 },
  { id: 9, name: 'At-Tawbah', arabic: 'التوبة', ayahs: 129 },
  { id: 10, name: 'Yunus', arabic: 'يونس', ayahs: 109 },
  { id: 11, name: 'Hud', arabic: 'هود', ayahs: 123 },
  { id: 12, name: 'Yusuf', arabic: 'يوسف', ayahs: 111 },
  { id: 13, name: 'Ar-Ra\'d', arabic: 'الرعد', ayahs: 43 },
  { id: 14, name: 'Ibrahim', arabic: 'إبراهيم', ayahs: 52 },
  { id: 15, name: 'Al-Hijr', arabic: 'الحجر', ayahs: 99 },
  { id: 16, name: 'An-Nahl', arabic: 'النحل', ayahs: 128 },
  { id: 17, name: 'Al-Isra', arabic: 'الإسراء', ayahs: 111 },
  { id: 18, name: 'Al-Kahf', arabic: 'الكهف', ayahs: 110 },
  { id: 19, name: 'Maryam', arabic: 'مريم', ayahs: 98 },
  { id: 20, name: 'Taha', arabic: 'طه', ayahs: 135 },
  { id: 21, name: 'Al-Anbya', arabic: 'الأنبياء', ayahs: 112 },
  { id: 22, name: 'Al-Hajj', arabic: 'الحج', ayahs: 78 },
  { id: 23, name: 'Al-Mu\'minun', arabic: 'المؤمنون', ayahs: 118 },
  { id: 24, name: 'An-Nur', arabic: 'النور', ayahs: 64 },
  { id: 25, name: 'Al-Furqan', arabic: 'الفرقان', ayahs: 77 },
  { id: 26, name: 'Ash-Shu\'ara', arabic: 'الشعراء', ayahs: 227 },
  { id: 27, name: 'An-Naml', arabic: 'النمل', ayahs: 93 },
  { id: 28, name: 'Al-Qasas', arabic: 'القصص', ayahs: 88 },
  { id: 29, name: 'Al-\'Ankabut', arabic: 'العنكبوت', ayahs: 69 },
  { id: 30, name: 'Ar-Rum', arabic: 'الروم', ayahs: 60 },
  { id: 31, name: 'Luqman', arabic: 'لقمان', ayahs: 34 },
  { id: 32, name: 'As-Sajdah', arabic: 'السجدة', ayahs: 30 },
  { id: 33, name: 'Al-Ahzab', arabic: 'الأحزاب', ayahs: 73 },
  { id: 34, name: 'Saba', arabic: 'سبأ', ayahs: 54 },
  { id: 35, name: 'Fatir', arabic: 'فاطر', ayahs: 45 },
  { id: 36, name: 'Ya-Sin', arabic: 'يس', ayahs: 83 },
  { id: 37, name: 'As-Saffat', arabic: 'الصافات', ayahs: 182 },
];

export default surahs;





