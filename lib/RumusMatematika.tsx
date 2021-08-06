export const IntegralRumus = [
  {
    nama: 'Integral Pecahan',
    rumus: [
      { step: 'ax+b \\to \\dfrac{A}{ax+B}' },
      { step: '(ax+b)^2 \\to \\dfrac{A}{ax+b} + \\dfrac{A}{(ax+b)^2}' },
      { step: '(ax+b)^2 \\to \\dfrac{A}{ax+b} + \\dfrac{B}{(ax+b)^2} + \\dfrac{C}{(ax+b)^3}' },
      { step: 'ax^2+bx+c \\to \\dfrac{Ax+B}{ax^2+bx+c}' },
    ],
  },
  {
    nama: 'Integral Tak Tentu',
    rumus: [
      { step: '\\int \\square^2 \\ d\\square = \\dfrac{\\square^{n+1}}{n+1}+c , n\\not= -1 ' },
      { step: '\\int\\sin\\square \\ d\\square = -\\cos\\square+c' },
      { step: '\\int\\cos\\square \\ d\\square = \\sin\\square+c' },
      { step: '\\int\\dfrac{1}{\\square} \\ d\\square = |ln|\\square|+c' },
      { step: '\\int k\\square \\ d\\square = k \\int \\square \\ d\\square' },
    ],
  },
  {
    nama: 'Integral Tentu',
    rumus: [
      { step: '\\int_{a}^{b} f(x) dx = F(b)-F(a)' },
      {
        step: '\\int_{a}^{b} \\square+\\triangle dx = \\int_{a}^{b} \\square dx+ \\int_{a}^{b} \\triangle dx',
      },
      { step: '\\int_{a}^{b} \\square+\\int_{b}^{c} \\square = F(b)-F(a) + F(c)-F(b)' },
      { step: '\\int_a^c = F(c)-F(a)' },
      { step: '\\int_a^b\\square dx = F(b)-F(a) = -(F(a)-F(b)) = -\\int_b^a\\square dx' },
      { step: '\\int_a^b\\square dx = -\\int_b^a\\square dx' },
    ],
  },
  {
    nama: 'Integral Substitusi',
    rumus: [
      { step: "\\dfrac{d(f(g(x)))}{dx} = f'(g(x))g'(x)" },
      { step: "d(f(g(x)))=f'(g(x))g'(x)\\ dx" },
      { step: "f(g(x))=\\int f'(g(x))g'(x)\\ dx" },
      { step: 'f(g(x))=\\int \\dfrac{df}{dg}\\dfrac{dg}{dx}\\ dx' },
    ],
  },
  {
    nama: 'Random',
    rumus: [
      { step: '\\int a(px+q)^n dx = \\dfrac{a}{(n+1)p}(px+q)^{n+1}+c' },
      {
        step: '\\int \\cos a \\times\\sin^nax \\ dx = \\dfrac{1}{a}\\dfrac{1}{{n+1}} \\sin^{n+1}ax+c',
      },
      {
        step: '\\int \\sin a \\times\\cos^nax \\ dx = \\dfrac{1}{a}\\dfrac{1}{{n+1}} \\cos^{n+1}ax+c',
      },
    ],
  },
];

export const TrigonometriRumus = [
  {
    nama: 'Penjumlahan Sudut',
    rumus: [
      { step: '\\sin(A \\pm B) = \\sin A \\cos B \\pm  \\sin B \\cos A' },
      { step: '\\cos(A \\pm B) = \\cos A \\cos B  ∓  \\sin A \\sin B' },
    ],
  },
  {
    nama: 'Sudut Ganda',
    rumus: [
      { step: '\\sin 2x = 2\\sin x \\cos x' },
      { step: '\\cos 2x = \\cos^2x - \\sin^2x = 1-2\\sin^2x = 2\\cos^2x-1' },
    ],
  },
  {
    nama: 'Identitas',
    rumus: [
      { step: '1+\\tan^2\\theta = \\sec^2\\theta' },
      { step: 'cot^2\\theta+1=\\cosec^2\\theta' },
      { step: 'cos^2\\theta+\\sin^2\\theta=1' },
    ],
  },
  {
    nama: 'Setengah Sudut',
    rumus: [
      { step: '\\sin(\\frac{1}{2}x)=\\sqrt{\\dfrac{1-\\cos x}{2}}' },
      { step: '\\cos{\\frac{1}{2}}=\\sqrt{\\dfrac{1+\\cos x}{2}}' },
    ],
  },
  {
    nama: 'Aturan Sinus',
    rumus: [
      {
        step: '\\dfrac{\\alpha}{\\sin \\alpha} = \\dfrac{\\beta}{\\sin \\beta} = \\dfrac{\\gamma}{\\sin \\gamma}',
      },
    ],
  },
  {
    nama: 'Aturan Cosinus',
    rumus: [
      { step: 'a^2 = b^2 + c^2 - 2bc\\cos \\alpha' },
      { step: 'b^2 = c^2 + a^2 - 2ca\\cos \\beta' },
      { step: 'c^2 = a^2 + b^2 - 2ab\\cos \\gamma' },
    ],
  },
  {
    nama: 'Perkalian Sudut',
    rumus: [
      { step: 'sin A \\cos B = \\dfrac{1}{2}(\\sin(A+B)+\\sin(A-B))' },
      { step: '\\cos A \\sin B = \\dfrac{1}{2}(\\sin(A+B)-\\sin(A-B))' },
      { step: '\\cos A \\cos B = \\dfrac{1}{2}(\\cos(A+B)+\\cos(A-B))' },
      { step: '\\sin A \\sin B = -\\dfrac{1}{2}(\\cos(A+B)-\\cos(A-B))' },
    ],
  },
];

export const LogaritmaRumus = [
  {
    nama: '',
    rumus: [
      { step: '^{a^n}\\log b^m = \\frac{m}{n}\\ ^a\\log b' },
      {
        step: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] = -\\ ^a\\log \\Big[\\ \\dfrac{c}{b}\\ \\Big] ',
      },
      { step: 'a^{^a\\log b} = b' },
      { step: '^a\\log b = \\dfrac{1}{^b\\log a}' },
      { step: '^a\\log c =\\ ^a\\log b \\times\\  ^b\\log c' },
      { step: '\\ ^a\\log b \\ +\\ ^a\\log c =\\ ^a\\log(b \\times c)' },
      { step: '^a\\log b \\ - \\ ^a\\log c =\\ ^a\\log(\\frac{b}{c})' },
      { step: '^a\\log{b^m} = m\\ ^a\\log b' },
      { step: '^a\\log b = \\dfrac{^p\\log b}{^p\\log a} = \\dfrac{^e\\log b}{^e\\log a} ' },
      { step: 'a^b = c \\to\\ ^a\\log c = b' },
      { step: '^{a^n}\\log b = \\frac{1}{n} \\ ^a\\log b' },
    ],
  },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
];

export const Rumus = [
  { nama: '', rumus: [{ step: '' }, { step: '' }, { step: '' }] },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
  { nama: '', rumus: '' },
];
