import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const y = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <Layout title="404" description="Kayanya kamu nyasar deh ^_^">
      <div className="flex items-center justify-center text-3xl">Kayanya kamu nyasar deh ^_^</div>
    </Layout>
  )
}

export default y
