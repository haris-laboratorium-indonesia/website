export const TurunanPenurunanRumus = [
  {
    nama: '\\sin x - cara 1',
    rumus: [
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{sin(x+\\Delta x)-\\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin x \\cos x \\Delta x + \\cos x \\sin \\Delta x - \\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\sin x\\dfrac{\\cos \\Delta x - 1}{\\Delta x} + \\lim\\limits_{\\Delta x \\to 0} \\cos x \\dfrac{\\sin\\Delta x}{\\Delta x}',
      },
      { step: '\\dfrac{d\\sin x}{dx} = \\sin x (0)  +  \\cos x(1) ' },
      { step: '\\dfrac{d\\sin x}{dx} = \\cos x' },
    ],
  },
  {
    nama: '\\sin x - cara 2',
    rumus: [
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin(x+\\Delta x)-\\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin x \\cos \\Delta x\\ +\\ \\cos x \\sin \\Delta x\\ -\\ \\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin x \\cos (0)\\ +\\ \\cos x \\sin \\Delta x\\ -\\ \\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin x \\ +\\ \\cos x \\sin \\Delta x\\ -\\ \\sin x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\cos x \\sin \\Delta x\\ }{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\cos x \\lim\\limits_{\\Delta x \\to 0} \\dfrac{ \\sin \\Delta x\\ }{\\Delta x} = \\cos x \\ (1)',
      },
      {
        step: '\\dfrac{d\\sin x}{dx} = \\cos x \\lim\\limits_{\\Delta x \\to 0} \\dfrac{ \\sin \\Delta x\\ }{\\Delta x} = \\cos x \\ (1)',
      },
      { step: '\\dfrac{d\\sin x}{dx} = \\cos x' },
    ],
  },
  {
    nama: '\\ln x',
    rumus: [
      {
        step: '\\dfrac{d\\ln x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\ln(x+\\Delta x) - \\ln x}{\\Delta x} ',
      },
      {
        step: '\\dfrac{d\\ln x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{1}{\\Delta x}\\Big[\\ln\\dfrac{x+\\Delta x}{x}\\Big]',
      },
      {
        step: '\\dfrac{d\\ln x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\Big[\\ln\\dfrac{x+\\Delta x}{x}\\Big]^{\\dfrac{1}{\\Delta x}}',
      },
      {
        step: '\\dfrac{d\\ln x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\Big[\\Big[\\ln\\dfrac{x+\\Delta x}{x}\\Big]^{\\dfrac{x}{\\Delta x}}\\Big]^{\\dfrac{1}{x}}',
      },
      {
        step: '\\dfrac{d\\ln x}{dx} = \\ln \\Big[\\Big[ \\lim\\limits_{\\Delta x \\to 0} \\frac{x+\\Delta x}{x}\\Big]^{\\dfrac{x}{\\Delta x}}\\Big]^{\\dfrac{1}{x}}',
      },
      {
        step: '\\dfrac{d\\ln x}{dx} = \\ln \\Big[e \\Big]^{\\dfrac{1}{x}} = \\dfrac{1}{x} \\ln e = \\dfrac{1}{x}\\ ^e\\log e = \\dfrac{1}{x}',
      },
    ],
  },
  {
    nama: '\\cos x',
    rumus: [
      {
        step: '\\dfrac{d\\cos x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\cos(x+\\Delta x)-\\cos x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\cos x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\cos x \\cos \\Delta x - \\sin x\\sin \\Delta x - \\cos x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\cos x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\cos x \\cos (0) - \\sin x\\sin \\Delta x - \\cos x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\cos x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\cos x  - \\sin x\\sin \\Delta x - \\cos x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\cos x}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{- \\sin x\\sin \\Delta x}{\\Delta x}',
      },
      {
        step: '\\dfrac{d\\cos x}{dx} = - \\sin x\\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\sin \\Delta x}{\\Delta x} = -\\sin x \\ (1)',
      },
      { step: '\\dfrac{d\\cos x}{dx} = - \\sin x' },
    ],
  },
  {
    nama: '\\tan x',
    rumus: [
      { step: '\\dfrac{d\\tan x}{dx} = \\dfrac{d}{dx} \\Big(\\dfrac{\\ x}{\\cos x} \\Big)' },
      { step: '\\dfrac{d\\tan x}{dx} = \\dfrac{\\cos x \\cos x - (-\\ x)\\ x}{\\cos^2x}' },
      { step: '\\dfrac{d\\tan x}{dx} = \\dfrac{\\cos^2 x +\\^2 x}{\\cos^2x}' },
      { step: '\\dfrac{d\\tan x}{dx} = \\dfrac{1}{\\cos^2x}' },
      { step: '\\dfrac{d\\tan x}{dx} = \\sec^2x' },
    ],
  },
  {
    nama: '\\sec x',
    rumus: [
      { step: '\\dfrac{d\\sec x}{dx} = \\dfrac{d}{dx} \\Big(\\dfrac{1}{cos x} \\Big)' },
      { step: '\\dfrac{d\\sec x}{dx} = \\dfrac{(0) \\cos x - (1)(-\\ x)}{\\cos^2x}' },
      { step: '\\dfrac{d\\sec x}{dx} = \\dfrac{\\ x}{\\cos^2x}' },
      { step: '\\dfrac{d\\sec x}{dx} = \\dfrac{\\ x}{\\cos x}\\dfrac{1}{\\cos x}' },
      { step: '\\dfrac{d\\sec x}{dx} = \\dfrac{\\tan x}{\\cos x}' },
      { step: '\\dfrac{d\\sec x}{dx} = \\tan x \\sec x' },
    ],
  },
  {
    nama: 'f(x)/g(x)',
    rumus: [
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{\\dfrac{f(x+\\Delta x)}{f(g+\\Delta g)} - \\dfrac{f(x)}{g(x)}}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{\\Delta x} \\Bigg[\\dfrac{f(x+\\Delta x)g(x)-f(x)g(x+\\Delta x)}{g(x+\\Delta x)g(x)}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{\\Delta x} \\Bigg[\\dfrac{f(x+\\Delta x)g(x) - f(x)g(x) + f(x)g(x) - f(x)g(x+\\Delta x)}{g(x+\\Delta x)g(x)}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{\\Delta x} \\Bigg[\\dfrac{(f(x+\\Delta x)-f(x))g(x)+f(x)(g(x+\\Delta x)-g(x))}{g(x+\\Delta x)g(x)}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{g(x+\\Delta x)g(x)} \\Bigg[\\dfrac{(f(x+\\Delta x)-f(x))g(x)+f(x)(g(x+\\Delta x)-g(x))}{\\Delta x}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{g(x+\\Delta x)g(x)} \\Bigg[\\dfrac{(f(x+\\Delta x)-f(x))g(x)}{{\\Delta x}}+\\dfrac{f(x)(g(x+\\Delta x)-g(x))}{{\\Delta x}}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{1}{g(x+\\Delta x)g(x)} \\Bigg[\\dfrac{(f(x+\\Delta x)-f(x))}{{\\Delta x}}g(x)+f(x)\\dfrac{(g(x+\\Delta x)-g(x))}{{\\Delta x}}\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\lim\\limits_{\\Delta x \\to 0} \\ \\dfrac{(f(x+\\Delta x)-f(x))}{{\\Delta x}}\\dfrac{g(x)}{g(x+\\Delta x)g(x)}+\\dfrac{f(x)}{{g(x+\\Delta x)g(x)}}\\lim\\limits_{\\Delta x \\to 0}\\dfrac{(g(x+\\Delta x)-g(x))}{{\\Delta x}}',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\dfrac{d{f(x)}}{dx}\\dfrac{g(x)}{g(x+0)g(x)}+\\dfrac{f(x)}{{g(x+0)g(x)}}\\dfrac{d{g(x)}}{dx}',
      },
      {
        step: '\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\dfrac{d{f(x)}}{dx}\\dfrac{g(x)}{g(x)g(x)}+\\dfrac{f(x)}{{g(x)g(x)}}\\dfrac{d{g(x)}}{dx}',
      },
      {
        step: "\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  = \\dfrac{f'(x)g(x)+f(x)g'(x)}{g(x)g(x)} = \\dfrac{f'(x)g(x)+f(x)g'(x)}{g^2(x)} ",
      },
      {
        step: "\\dfrac{d}{dx}\\Bigg[\\dfrac{f(x)}{g(x)}\\Bigg]  =  \\dfrac{f'(x)g(x)+f(x)g'(x)}{g^2(x)} ",
      },
    ],
  },
  {
    nama: 'f(x)g(x)',
    rumus: [
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x)g(x+\\Delta x)\\ - f(x)g(x)}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x)g(x+\\Delta x)\\ \\textcolor{orange}{-\\ f(x)g(x+\\Delta x)\\ +\\ f(x)g(x+\\Delta x)}\\ -\\ f(x)g(x)}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[f(x+\\Delta x)\\ -\\ f(x) \\big]\\ g(x+\\Delta x)\\ + \\big[g(x+\\Delta x)\\ -\\ g(x)\\big]f(x)}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\Bigg[\\dfrac{\\big[f(x+\\Delta x)\\ -\\ f(x) \\big]}{\\Delta x}g(x+\\Delta x)+\\dfrac{\\big[g(x+\\Delta x)\\ -\\ g(x)\\big]}{\\Delta x}f(x)\\Bigg]',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[f(x+\\Delta x)\\ -\\ f(x) \\big]}{\\Delta x}g(x+\\Delta x)+\\ \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[g(x+\\Delta x)\\ -\\ g(x)\\big]}{\\Delta x}f(x)',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[f(x+\\Delta x)\\ -\\ f(x) \\big]}{\\Delta x}g(x)+\\ \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[g(x+\\Delta x)\\ -\\ g(x)\\big]}{\\Delta x}f(x)',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = \\dfrac{d(f(x))}{dx}g(x)+\\dfrac{d(g(x))}{dx}f(x)',
      },
      { step: "\\dfrac{d}{dx}\\Big[f(x) \\cdot g(x)\\Big] = f'(x)\\ dx\\ g(x)+\\ g'(x)dxf(x)" },
    ],
  },

  {
    nama: 'f(x) \\pm g(x)',
    rumus: [
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[f(x+\\Delta x) \\ \\pm\\ g(x+\\Delta x) \\big] - \\big[ f(x) \\ \\pm\\ g(x) \\big]}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{\\big[f(x+\\Delta x) \\ \\pm\\ g(x+\\Delta x) \\big] - \\big[ f(x) \\ \\pm\\ g(x) \\big]}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x) \\ \\pm\\ g(x+\\Delta x) \\ -\\ f(x) \\ \\mp\\ g(x) }{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x) \\ -\\ f(x) \\ \\pm\\ g(x+\\Delta x) \\ \\mp\\ g(x)}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\Big[\\dfrac{f(x+\\Delta x) \\ -\\ f(x) \\ }{\\Delta x} \\pm\\ \\dfrac{g(x+\\Delta x) \\ - \\ g(x)}{\\Delta x} \\Big]',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x) \\ -\\ f(x) \\ }{\\Delta x} \\pm\\ \\lim\\limits_{\\Delta x \\to 0}  \\dfrac{g(x+\\Delta x) \\ - \\ g(x)}{\\Delta x}',
      },
      {
        step: "\\dfrac{d}{dx}\\Big[f(x) \\ \\pm\\ g(x)\\Big] = \\dfrac{d(f(x))}{dx} \\pm \\dfrac{d(g(x))}{dx} = f'(x) \\ \\pm\\ g'(x)",
      },
    ],
  },
  {
    nama: 'k\\cdot g(x)',
    rumus: [
      {
        step: '\\dfrac{d}{dx}\\Big[k\\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{k(g(x+\\Delta x)\\ -\\ k(g(x)))}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[k\\cdot g(x)\\Big] = \\lim\\limits_{\\Delta x \\to 0}\\ k\\ \\dfrac{g(x+\\Delta x)\\ -\\ g(x)}{\\Delta x}',
      },
      {
        step: '\\dfrac{d}{dx}\\Big[k\\cdot g(x)\\Big] = k\\ \\lim\\limits_{\\Delta x \\to 0} \\dfrac{g(x+\\Delta x)\\ -\\ g(x)}{\\Delta x}',
      },
      { step: '\\dfrac{d}{dx}\\Big[k\\cdot g(x)\\Big] = k\\ \\dfrac{d( g(x))}{dx}' },
    ],
  },
  {
    nama: 'x^n',
    rumus: [
      {
        step: '\\dfrac{dx^n}{dx} = \\lim\\limits_{\\Delta x \to 0} \\dfrac{(x + \\Delta x)^n  -  x^n }{\\Delta x}, \\textcolor{tomato}{(a+b)^n = a^n  +  na^{n-1}b  +  \\dfrac{n(n-1)}{2}a^{n-2}b^2  +  \\dots  +   b^n}',
      },
      {
        step: '\\dfrac{dx^n}{dx} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{x^n  +  nx^{n-1}\\Delta x  +  \\dfrac{n(n-1)}{2-1}x^{n-2}\\Delta x^2  +  \\dots  +  b^n  -  x^n}{\\Delta x}',
      },
      {
        step: '\\dfrac{dx^n}{dx} = \\lim\\limits_{\\Delta x \\to 0} nx^{n-1}  +  n(n-1)x^{n-2}\\Delta x  +  \\dots  +  \\Delta x^{n-1}',
      },
      { step: '\\dfrac{dx^n}{dx} = nx^{n-1}  +  n(n-1)x^{n-2}(0)  +  \\dots  +  (0)^{n-1}' },
      { step: '\\dfrac{dx^n}{dx} = nx^{n-1}' },
    ],
  },
];

export const LimitPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const TrigonometriPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const IntegralPenurunanRumus = [
  {
    nama: '\\int \\cot x  \\ dx',
    rumus: [
      { step: '\\int \\cot x \\ dx =\\int \\dfrac{\\cos x}{\\sin x} dx' },
      { step: '\\int \\cot x \\ dx = \\int (\\sin x)^{-1}\\cos x  dx' },
      { step: 'g = \\sin x' },
      { step: '\\dfrac{dg}{dx} = \\cos x' },
      { step: '\\int \\cot x \\ dx = \\int (g)^{-1} \\cos x \\dfrac{dg}{\\cos x}' },
      { step: '\\int \\cot x \\ dx = \\int (g)^{-1} dg' },
      { step: '\\int \\cot x \\ dx = \\int \\dfrac{1}{g} dg = ln|g| + c = ln|\\sin x| + c' },
      { step: '\\int \\cot x \\ dx = ln|\\sin x| + c' },
    ],
  },
  {
    nama: 'Luas Integral',
    rumus: [
      { step: 'Luas = L(x+\\Delta x) - L(x)' },
      {
        step: '\\dfrac{f(x)\\cdot \\Delta x}{\\Delta x} = \\dfrac{L(x+\\Delta x) - L(x)}{\\Delta x}',
      },
      {
        step: '\\lim\\limits_{\\Delta x \\to 0} f(x)\\dfrac{\\Delta x}{\\Delta x} = \\lim\\limits_{\\Delta x \\to 0} \\dfrac{L(x+\\Delta x) - L(x)}{\\Delta x}',
      },
      { step: 'f(x) = \\dfrac{dL(x)}{dx}' },
      { step: 'f(x)\\ dx = dL(x)' },
      { step: '\\int f(x)\\ dx = L(x)' },
      { step: '\\int f(x)\\ dx = L(b) - L(a)' },
    ],
  },
];

export const MatriksPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const LingkaranPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const Dimensi3PenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const BarisanDeretPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const LogaritmaPenurunanRumus = [
  {
    nama: '\\ ^a\\log b \\ +\\ ^a\\log c =\\ ^a\\log(b \\times c)',
    rumus: [
      { step: '^a\\log b = x \\to a^x = b' },
      { step: '^a\\log c = y \\to a^y = c' },
      { step: 'b \\times c = a^xa^y = a^{x+y}' },
      { step: 'x+y = \\ ^a\\log(b \\times c)' },
      { step: '\\ ^a\\log b \\ +\\ ^a\\log c =\\ ^a\\log(b \\times c)' },
    ],
  },
  {
    nama: '^a\\log b \\ - \\ ^a\\log c =\\ ^a\\log(\\frac{b}{c})',
    rumus: [
      { step: '^a\\log b = x \\to\\ a^x = b' },
      { step: '^a\\log c = y \\to\\ a^y = c' },
      { step: '\\dfrac{b}{c} = \\dfrac{a^x}{a^y} = a^{x-y}' },
      { step: 'x-y =\\ ^a\\log(\\frac{b}{c})' },
      { step: '^a\\log b \\ - \\ ^a\\log c =\\ ^a\\log(\\frac{b}{c})' },
    ],
  },
  {
    nama: '^a\\log{b^m} = m\\ ^a\\log b',
    rumus: [
      {
        step: '^a\\log{b^m} =\\ ^a\\log(\\underbrace{b\\times b \\times b \\times \\dots}_{m}) = \\underbrace{^a\\log b \\ \\times\\ ^a\\log b \\ \\times\\ ^a\\log b \\times \\dots }_{sebanyak\\ m} = m\\ ^a\\log b',
      },
      { step: '^a\\log{b^m} = m\\ ^a\\log b' },
    ],
  },
  {
    nama: '^a\\log b = \\dfrac{^p\\log b}{^p\\log a}',
    rumus: [
      { step: '^a\\log b = x \\to a^x = b' },
      { step: '^p\\log a^x =\\ ^p\\log b' },
      { step: 'x\\ ^p\\log a =\\ ^p\\log b' },
      { step: 'x = \\dfrac{^p\\log b}{^p\\log a}' },
      { step: '^a\\log b = \\dfrac{^p\\log b}{^p\\log a}' },
    ],
  },
  {
    nama: '^a\\log b \\times\\ ^b \\log c =\\ ^a \\log c',
    rumus: [
      { step: 'misal:' },
      { step: '^a\\log b = \\dfrac{^n \\log a}{^n \\log b}' },
      { step: '^a\\log c = \\dfrac{^n \\log a}{^n \\log c}' },
      { step: 'maka:' },
      {
        step: '^a\\log b \\times\\ ^b \\log c = \\dfrac{^n \\log a}{^n \\log b} \\times \\dfrac{^n \\log b}{^n \\log c} = \\dfrac{^n \\log a}{^n \\log c} =\\ ^a \\log c',
      },
      { step: '^a\\log b \\times\\ ^b \\log c =\\ ^a \\log c' },
    ],
  },
  {
    nama: '^a\\log b = \\dfrac{1}{^b\\log a}',
    rumus: [
      { step: '^a\\log b = \\dfrac{^b\\log b}{^b\\log a} = \\dfrac{1}{^b\\log a}' },
      { step: '^a\\log b = \\dfrac{1}{^b\\log a}' },
    ],
  },
  {
    nama: 'a^{^a\\log b} = b',
    rumus: [
      { step: '^a\\log b = c \\to a^c=b' },
      { step: 'a^{^a\\log b} = a^c = b' },
      { step: 'a^{^a\\log b} = b' },
    ],
  },
  {
    nama: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] = -\\ ^a\\log \\Big[\\ \\dfrac{c}{b}\\ \\Big] ',
    rumus: [
      { step: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] =\\ ^a\\log b -\\ ^a\\log c' },
      { step: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] =\\ -( \\ ^a\\log c - \\ ^a\\log b \\ )' },
      {
        step: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] =\\ -( \\ ^a\\log \\Big[ \\ \\dfrac{c}{b} \\ \\Big]\\ )',
      },
      {
        step: '^a\\log \\Big[\\ \\dfrac{b}{c}\\ \\Big] = -\\ ^a\\log \\Big[\\ \\dfrac{c}{b}\\ \\Big] ',
      },
    ],
  },
  {
    nama: '^{a^n}\\log b^m = \\dfrac{m}{n} \\ ^a\\log b',
    rumus: [
      { step: 'a^n\\log b^m = c \\to (a^n)^c = b^m' },
      { step: 'b = \\sqrt[m]{a^{nc}}' },
      { step: 'b = \\sqrt{a^{nc/m}}' },
      { step: 'b = \\sqrt{a^{nc/m}}' },
      { step: '^a\\log b = \\dfrac{nc}{m}' },
      { step: '\\dfrac{m}{n}\\ ^a\\log b = c' },
      { step: '^{a^n}\\log b^m = \\dfrac{m}{n} \\ ^a\\log b' },
    ],
  },
];

export const EksponenPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const StatistikaPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const GeometriPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const LinearPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const KuadratPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const SukuBanyakPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const TransformasiGeometriPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const VektorPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];

export const PeluangPenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];
export const PenurunanRumus = [
  {
    nama: 'nama',
    rumus: [
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
      { step: '' },
    ],
  },
];
