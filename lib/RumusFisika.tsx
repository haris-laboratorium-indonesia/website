export const RelativitasKhususRumus = [
  { nama: 'Bilangan Lorentz', rumus: '\\gamma = \\sqrt{\\dfrac{1}{1-\\dfrac{v^2}{c^2}}}' },
  {
    nama: 'Dilatasi Waktu',
    rumus: '\\Delta t = \\dfrac{\\Delta t_o}{\\gamma} = \\Delta t_0 \\sqrt{1- \\dfrac{v^2}{c^2}}',
  },
  {
    nama: 'Kontraksi Panjang',
    rumus: '\\Delta L = \\dfrac{\\Delta L_o}{\\gamma} = \\Delta L_0 \\sqrt{1- \\dfrac{v^2}{c^2}}',
  },
  {
    nama: 'Massa Relativistik',
    rumus: 'm = m_0\\gamma = \\dfrac{m_0}{ \\sqrt{1-\\dfrac{v^2}{c^2}}}',
  },
  {
    nama: 'Momentum Relatitivistik',
    rumus: 'p = m_0v = \\dfrac{m_0v}{s\\sqrt{1-\\dfrac{v^2}{c^2}}}',
  },
  {
    nama: 'Energi Relatitivistik',
    rumus: 'E = m_0c^2\\gamma = \\dfrac{m_0c^2}{\\sqrt{1-\\dfrac{v^2}{c^2}}}',
  },
];
export const RadiasiBendaHitamRumus = [
  { nama: 'Panjang Gelombang de Broglie', rumus: '\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}' },
  {
    nama: 'Effect Compton',
    rumus: " \\Delta \\lambda = \\lambda' - \\lambda = \\dfrac{h}{m_0(1-cos\\theta)}",
  },
  { nama: 'Daya Radiasi', rumus: 'P = \\dfrac{E}{t}' },
  { nama: 'Intensitas Radiasi', rumus: 'I = \\dfrac{P}{A} = \\sigma T^4' },
  { nama: 'Energi Foton', rumus: 'E_f = h\\cdot f' },
];

export const TermodinamikaRumus = [
  { nama: 'Gas Ideal', rumus: [{ rumus: 'PV = nRT' }, { rumus: 'PV = nKT' }] },
  { nama: 'Efisiensi', rumus: '\\dfrac{Q_h}{Q_c} = \\dfrac{T_h}{T_c}' },
  { nama: 'Efisiensi', rumus: '\\eta = \\dfrac{W}{Q_h}' },
  { nama: 'Energi Kinetik', rumus: '\\dfrac{1}{2}mv^2 = \\dfrac{3}{2}KT' },
  {
    nama: 'Isobaris',
    rumus: [
      { rumus: '\\textcolor{orangered}{W} = \\int P dV = P\\int dV = P\\Delta V' },
      { rumus: '\\textcolor{orangered}{Q} = \\Delta U + W = \\Delta U + P\\Delta V' },
      { rumus: 'mC_p\\Delta T = mC_v\\Delta T + W' },
      { rumus: 'W = mC_p\\Delta T - mC_v\\Delta T' },
      { rumus: 'W = m(C_p - C_v)\\Delta T' },
    ],
  },
  {
    nama: 'Isokhoris',
    rumus: [
      { rumus: '\\textcolor{orangered}{W} = \\int P dV   , dV = 0   , W = 0' },
      { rumus: '\\textcolor{orangered}{Q} = \\Delta U + W,  Q = \\Delta U' },
      {
        rumus: '\\textcolor{orangered}{\\Delta U} = mc_v\\Delta T = nMc_v\\Delta T = nC_v\\Delta T',
      },
      { rumus: 'm = nM,  Mc_v = C_v' },
    ],
  },
  {
    nama: 'Isotermis',
    rumus: [
      { rumus: '\\textcolor{orangered}{\\Delta U} = mC_v\\Delta V = 0' },
      { rumus: '\\textcolor{orangered}{Q} = \\Delta U + W = 0 + W ' },
      {
        rumus: '\\textcolor{#FFF}{Q} = \\int P dV = \\int \\dfrac{nRT}{V} dV',
      },
      { rumus: '\\textcolor{#FFF}{Q} = nRT \\int \\dfrac{1}{V} dV' },
      { rumus: '\\textcolor{#FFF}{Q} = nRT(\\ln V_2 - ln V_1)' },
      { rumus: '\\textcolor{orangered}{Q} = nRT\\ln\\dfrac{V_2}{V_1}' },
    ],
  },
  {
    nama: 'Adiabatis',
    rumus: [
      { rumus: '\\textcolor{orangered}{Q} = \\Delta U + W' },
      { rumus: '0 = \\Delta U + W' },
      { rumus: '\\Delta U = -W' },
      { rumus: 'W = -\\Delta U' },
      { rumus: 'PV^{\\gamma} = konstan' },
    ],
  },
];

// Tekanan tetap selama proses <TeX>(\Delta P = 0)</TeX>
// Volume tetap selama proses <TeX>(\Delta V = 0)</TeX>
// Suhu tetap selama proses <TeX>(\Delta T = 0)</TeX>
//Tidak ada perpindahan kalor antara sistem dan lingkungan <TeX>(\Delta Q = 0)</TeX>
//   <Legenda rumus='c_v' name='kalor jenis Isokhoris' />
//   <Legenda rumus='C_v' name='kalor jenis molar Isokhoris' />

export const OptikRumus = [
  { nama: 'Rumus Umum', rumus: "\\dfrac{1}{s} + \\dfrac{1}{s'} = \\dfrac{1}{f}" },
  { nama: 'Kekuatan / Daya Lensa', rumus: 'P = \\dfrac{1}{f}' },
];

export const MagnetRumus = [
  {
    nama: 'Medan Magnet - pada Loop',
    rumus: [
      { rumus: 'B = \\dfrac{\\mu_0 i}{2 \\pi r}' },
      { rumus: 'B = \\dfrac{\\mu_0 i}{2 \\pi r}\\times N' },
    ],
  },
  {
    nama: 'Medan Magnet - pada Solenoida',
    rumus: [
      { rumus: 'B_0 = \\dfrac{\\mu_0 i}{l} \\times N' },
      { rumus: 'B_0 = \\dfrac{1}{2} \\dfrac{\\mu_0 i}{l} \\times N' },
    ],
  },
  {
    nama: 'Medan Magnet - pada Toroida',
    rumus: [
      { rumus: 'B = \\dfrac{\\mu_0 i}{2 \\pi r} \\times N' },
      { rumus: 'r = \\dfrac{r_1 + r_2}{2}' },
    ],
  },
  {
    nama: 'Gaya Magnet - pada Medan Magnet',
    rumus: 'F = qV\\times B = qVB\\sin \\theta = \\dfrac{mv^2}{r}',
  },
  {
    nama: 'Gaya Magnet - pada batang di Medan Magnet ',
    rumus: 'F = i\\ell \\times B = i\\ell B\\sin \\theta',
  },
  {
    nama: 'Gaya Magnet - pada dua kawat',
    rumus: '\\dfrac{F_{12}}{\\ell_1} = \\dfrac{F_{21}}{\\ell_2}',
  },
  { nama: 'Momen Kopel', rumus: '\\Sigma \\tau = NA_iB\\sin \\alpha' },
  { nama: 'Fluks Magnet', rumus: ' \\Phi = B\\cdot A = BA\\sin \\theta' },
];

export const ListrikStatisRumus = [
  { nama: 'Gaya Listrik (Gaya Coulomb)', rumus: 'F = k\\dfrac{q_1\\cdot q_2}{r^2}' },
  { nama: 'Medan Listrik', rumus: 'F = k\\dfrac{q}{r^2}' },
  { nama: 'Potensial Listrik', rumus: 'F = k\\dfrac{q}{r}' },
  { nama: 'Energi Potensial Listrik', rumus: 'F = k\\dfrac{q_1\\cdot q_2}{r}' },
];

export const ListrikDinamisRumus = [
  {
    nama: 'Resistansi',
    rumus: [
      { rumus: 'R = \\dfrac{\\rho\\ell}{A} = \\dfrac{V}{I} ' },
      { rumus: ' \\rho_t = \\rho_o(1+\\alpha\\Delta T)' },
      { rumus: 'R_t = R_o(1+\\alpha\\Delta T)' },
    ],
  },
  {
    nama: 'Beda Potensial (Volt)',
    rumus: [{ rumus: 'v = E\\cdot d' }, { rumus: 'v = \\dfrac{E_p}{q}' }],
  },
  {
    nama: 'Usaha Listrik (Work)',
    rumus: [
      { rumus: 'W = \\dfrac{1}{2}\\dfrac{Q^2}{C} = \\dfrac{Q}{V}' },
      { rumus: 'W = \\dfrac{1}{2}LI^2' },
      { rumus: 'W = QV' },
      { rumus: 'W_{listrik} = \\Delta E_k = -\\Delta E_p = -q(v_2 - v_1) ' },
    ],
  },
  {
    nama: 'Transformator',
    rumus: [
      { rumus: '\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s} = \\dfrac{I_p}{I_s}' },
      { rumus: '\\eta = \\dfrac{P_s}{P_p}' },
    ],
  },
  {
    nama: ' Daya (Power)',
    rumus: [
      { rumus: ' P_p = P_s + P_{Loss}' },
      { rumus: 'P = \\dfrac{W}{t} = \\dfrac{QV}{t} = VI' },
    ],
  },
  {
    nama: 'Gaya Gerak Listrik (GGL)',
    rumus: '\\varepsilon_i = -N\\dfrac{\\Delta\\phi}{\\Delta T}',
  },
  { nama: 'Fluks Listrik', rumus: 'Phi_L = E\\cdot A = EAcos \\theta' },
  { nama: 'Muatan', rumus: 'Q = c \\cdot v' },
  { nama: 'Energi Potensial Listrik', rumus: 'E_p =  qv = q\\Delta v = q(v_t - v_0)' },
];

export const KinematikaRumus = [
  {
    nama: 'Jarak/Perpindahan',
    rumus: [{ rumus: 's_t = v_0t + s_0' }, { rumus: 's = vt' }],
  },
  {
    nama: 'Kecepatan',
    rumus: [{ rumus: 'v = \\dfrac{s}{t}' }, { rumus: ' v_t = a_0t+v_0' }],
  },
  { nama: 'Percepatan', rumus: 'a = \\dfrac{v}{t}' },
];

export const GelombangMekanikRumus = [
  {
    nama: 'Gelombang Stasioner - Ujung Bebas',
    rumus: [
      { rumus: 'y = 2A\\cos (kx)\\sin(\\omega t)' },
      { rumus: 'A_p = 2A\\cos (kx)' },
      { rumus: 'simpul \\to \\dfrac{(2n+1)\\lambda_n}{4},  n = 0,1,2,3,...' },
      { rumus: 'perut \\to \\dfrac{\\lambda_n}{4}, n = 0,1,2,3,... ' },
    ],
  },
  {
    nama: 'Gelombang Stasioner - Ujung Terikat',
    rumus: [
      { rumus: 'y = 2A\\sin(kx)\\cos(\\omega t)' },
      { rumus: 'A_p = 2A\\sin(kx)' },
      { rumus: 'simpul \\to \\dfrac{\\lambda_n}{4}' },
      { rumus: 'perut \\to \\dfrac{(2n+1)\\lambda_n}{4}' },
    ],
  },
  { nama: 'Frekuensi Sudut', rumus: '\\omega = 2\\pi f ' },
  { nama: 'Sudut Fase', rumus: '\\theta = \\omega t - kx' },
  { nama: 'Perbedaan Sudut Fase', rumus: '\\psi = \\dfrac{\\theta}{2\\pi}' },
  { nama: 'Persamaan Gelombang', rumus: 'y = A\\sin(\\omega t - kx)' },
];

export const GelombangBunyiRumus = [
  {
    nama: 'Cepat rambat bunyi - Dawai',
    rumus: 'v = \\sqrt{\\dfrac{F}{\\mu}} \\to \\mu = \\dfrac{m}{\\ell}',
  },
  {
    nama: 'Cepat rambat bunyi - Zat Padat',
    rumus:
      'v = \\sqrt{\\dfrac{\\varUpsilon}{\\rho}} \\to \\varUpsilon = \\dfrac{\\sigma}{\\varepsilon} = Modulus \\ Young',
  },
  {
    nama: 'Cepat rambat bunyi - Zat Cair',
    rumus: 'v = \\sqrt{\\dfrac{k}{\\rho}} \\to k = -V \\dfrac{dP}{dV} = Modulus \\ Bulk',
  },
  {
    nama: ' Cepat rambat bunyi - Gas',
    rumus:
      'v = \\sqrt{\\dfrac{\\gamma P}{\\rho}} = \\sqrt{\\dfrac{\\gamma RT}{M}} \\to \\gamma = Konstanta \\ Laplace,  M = Massa \\ molar',
  },
];

export const FluidaStatisRumus = [
  {
    nama: 'Hukum Pascal',
    rumus: [{ rumus: 'P_1 = P_2' }, { rumus: '\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}' }],
  },
  { nama: 'Tekanan Hidrostatis', rumus: 'P_h = \\rho g h' },
  { nama: 'Hukum Archimedes', rumus: 'F_A  = \\rho g V' },
  {
    nama: 'Hukum Archimedes - Mengapung',
    rumus: [
      { rumus: 'F_A  > W' },
      { rumus: 'm_{fluida}g > m_{benda}g' },
      { rumus: '\\rho_{fluida}V > \\rho_{benda}V_{benda(tercelup)}' },
    ],
  },
  {
    nama: 'Hukum Archimedes - Melayang',
    rumus: [
      { rumus: 'F_A  = W' },
      { rumus: 'm_{fluida}g = m_{benda}g' },
      { rumus: '\\rho_{fluida}V = \\rho_{benda}V_{benda(tercelup)}' },
    ],
  },
  {
    nama: 'Hukum Archimedes - Mengapung',
    rumus: [
      { rumus: 'F_A  < W' },
      { rumus: 'm_{fluida}g < m_{benda}g' },
      { rumus: '\\rho_{fluida}V < \\rho_{benda}V_{benda(tercelup)}' },
    ],
  },
];

export const DinamikaRumus = [
  {
    nama: 'Usaha',
    rumus: [
      { rumus: 'W = F\\cdot s = Fscos \\theta' },
      { rumus: 'W + E_{K_0} = E_{K_t} \\to W = E_{K_t} - E_{K_0} = \\Delta E_K' },
    ],
  },
  { nama: 'Gaya Gravitasi Newton', rumus: 'F = G\\dfrac{M\\cdot m}{r^2}' },
  { nama: 'Gaya Setripetal', rumus: 'F = \\dfrac{mv^2}{r^2}' },
  { nama: 'Hukum Kekekalan Momentum', rumus: "m_1v_1 + m_2v_2 = m_1v_1'+m_2v_2' " },
  { nama: 'Momentum', rumus: 'p = mv' },
  { nama: 'Hukum Newton Ke-1', rumus: '\\Sigma F = 0' },
  { nama: 'Hukum Newton Ke-2', rumus: '\\Sigma F = m\\cdot a' },
  { nama: 'Hukum Newton Ke-3', rumus: 'F_{ab} = -F_{ba}' },
  { nama: 'Gaya Berat', rumus: ' W = m\\cdot g' },
];

export const FluidaDinamisRumus = [
  {
    nama: 'Persamaan Bernoulli',
    rumus:
      'P_1 + \\dfrac{1}{2}\\rho V_1^2 + \\rho_1 g h_1 = P_2 + \\dfrac{1}{2}\\rho V_2^2 + \\rho_2 g h_2 ',
  },
  { nama: 'Persamaan Kontinuitas', rumus: 'v_1A_1 = v_2A_2' },
  { nama: 'Debit', rumus: 'Q = \\dfrac{V}{t}' },
  { nama: 'Toricelli (Tong Bocor)', rumus: 'v = \\sqrt{2gh}' },
];

export const KesetimbanganRumus = [
  { nama: 'Torsi', rumus: '\\tau = Fr' },
  { nama: ' Kesetimbangan', rumus: '\\Sigma\\tau = 0' },
  {
    nama: 'Kesetimbangan pada 3 tali',
    rumus: '\\dfrac{T_1}{\\sin\\alpha} = \\dfrac{T_2}{\\sin\\beta} = \\dfrac{T_3}{\\sin\\gamma} ',
  },
];

export const Rumus = [
  { nama: '', rumus: [{ rumus: '' }, { rumus: '' }, { rumus: '' }] },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
];
