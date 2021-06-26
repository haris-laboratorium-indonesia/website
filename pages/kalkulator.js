import Title from '../components/TItle'
import Layout from '../components/Layout'

const kalkulator = () => {
  return (
    <Layout title="Kalkulator" description="Kalkulator Matematika dan Fisika terbaik yang pernah dibuat.">
      <Title name="Kalkulator" />
      <div className="calculator-grid bg-gradient-to-r from-green-500 to-cyan-500">
        <div className="output">
          <div data-previous-operand className="previous-operand"></div>
          <div data-current-operand className="current-operand"></div>
        </div>
        <button data-all-clear className="span-two">
          AC
        </button>
        <button data-delete>DEL</button>
        <button data-operation>∻</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-operation>*</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-operation>+</button>
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-operation>-</button>
        <button data-number>.</button>
        <button data-number>0</button>
        <button className="span-two">=</button>
      </div>
    </Layout>
  )
}

export default kalkulator
