export const IntegralRumus = [
  {
    nama: 'Integral Pecahan',
    rumus: [
      { rumus: 'ax+b \\to \\frac{A}{ax+B}' },
      { rumus: '(ax+b)^2 \\to \\frac{A}{ax+b} + \\frac{A}{(ax+b)^2}' },
      { rumus: '(ax+b)^2 \\to \\frac{A}{ax+b} + \\frac{B}{(ax+b)^2} + \\frac{C}{(ax+b)^3}' },
      { rumus: 'ax^2+bx+c \\to \\frac{Ax+B}{ax^2+bx+c}' },
    ],
  },
  {
    nama: 'Integral Tak Tentu',
    rumus: [
      { rumus: '\\int \\square^2 \\ d\\square = \\frac{\\square^{n+1}}{n+1}+c , n\\not= -1 ' },
      { rumus: '\\int\\sin\\square \\ d\\square = -\\cos\\square+c' },
      { rumus: '\\int\\cos\\square \\ d\\square = \\sin\\square+c' },
      { rumus: '\\int\\frac{1}{\\square} \\ d\\square = |ln|\\square|+c' },
      { rumus: '\\int k\\square \\ d\\square = k \\int \\square \\ d\\square' },
    ],
  },
  {
    nama: 'Integral Tentu',
    rumus: [
      { rumus: '\\int_{a}^{b} f(x) dx = F(b)-F(a)' },
      {
        rumus:
          '\\int_{a}^{b} \\square+\\triangle dx = \\int_{a}^{b} \\square dx+ \\int_{a}^{b} \\triangle dx',
      },
      { rumus: '\\int_{a}^{b} \\square+\\int_{b}^{c} \\square = F(b)-F(a) + F(c)-F(b)' },
      { rumus: '\\int_a^c = F(c)-F(a)' },
      { rumus: '\\int_a^b\\square dx = F(b)-F(a) = -(F(a)-F(b)) = -\\int_b^a\\square dx' },
      { rumus: '\\int_a^b\\square dx = -\\int_b^a\\square dx' },
    ],
  },
  {
    nama: 'Integral Substitusi',
    rumus: [
      { rumus: "\\frac{d(f(g(x)))}{dx} = f'(g(x))g'(x)" },
      { rumus: "d(f(g(x)))=f'(g(x))g'(x)\\ dx" },
      { rumus: "f(g(x))=\\int f'(g(x))g'(x)\\ dx" },
      { rumus: 'f(g(x))=\\int \\frac{df}{dg}\\frac{dg}{dx}\\ dx' },
    ],
  },
  {
    nama: 'Random',
    rumus: [
      { rumus: '\\int a(px+q)^n dx = \\frac{a}{(n+1)p}(px+q)^{n+1}+c' },
      { rumus: '\\int \\cos a \\times\\sin^nax \\ dx = \\frac{1}{a}\\frac{1}{{n+1}} \\sin^{n+1}ax+c' },
      { rumus: '\\int \\sin a \\times\\cos^nax \\ dx = \\frac{1}{a}\\frac{1}{{n+1}} \\cos^{n+1}ax+c' },
    ],
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
