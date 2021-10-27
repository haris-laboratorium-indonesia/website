import Layout from '@/components/LayoutMateri';
import ListDocsLayout from '@/components/ListDocsLayout';
import { NavList } from '@/components/ListDocsLayout';
import { Title } from '@/components/DesignSystem';

export default function DocsLayout() {
  return (
    <Layout browserTitle='DocsLayout' description='DocsLayout'>
      <Title name='Tutoring Layout' />
      <section className='grid grid-cols-1 gap-5 md:grid-cols-4'>
        {/* <section className='p-5 bg-white rounded-md shadow-md md:col-span-1 h-72'>
          Side Layout
        </section> */}
        <ListDocsLayout branch='physics' to='docs-layout' title='Docs Layout'>
          <NavList title='Pengenalan' href='Pengenalan' />
          <NavList title='Konstanta' href='Konstanta' />
          <NavList title='Variabel' href='Variabel' />
          <NavList title='Rumus' href='Rumus' />
          <NavList title='Penurunan Rumus' href='PenurunanRumus' />
          <NavList title='Pembahasan' href='Pembahasan' />
          <NavList title='Contoh Soal' href='ContohSoal' />
        </ListDocsLayout>
        <section className='h-auto p-5 bg-white rounded-md shadow-md md:col-span-3'>
          <div className='text-4xl font-bold'>Title</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem. Iure
            animi atque hic, corporis officia saepe quibusdam optio aliquam nisi quod sit suscipit
            ut? Minus unde corporis perspiciatis iste! Dolor obcaecati accusantium, explicabo ea
            enim omnis iusto ad molestiae ut quidem, consequatur consequuntur deserunt alias commodi
            necessitatibus harum possimus provident. Amet, laboriosam a. Consequuntur, nam neque?
            Esse quasi dolor ea aliquid beatae aut, consequatur praesentium quia? Maiores qui
            doloribus optio at vero sapiente accusantium! Culpa perferendis, tempora doloribus
            aliquam itaque pariatur porro totam cum mollitia odio ea autem facere dolores ipsa
            tenetur laborum dolore unde minus qui at? Non ad qui quia, repellat molestias
            consequuntur et nisi! Repellat nam accusamus doloribus fuga aliquam ab consequatur
            debitis exercitationem! Ex laborum, similique minima aperiam laudantium corporis.
            Pariatur saepe commodi aut necessitatibus, incidunt aspernatur sunt, modi dolores nobis
            veniam eaque harum voluptatem tenetur placeat repellat beatae, aliquam quia nisi
            accusantium sequi voluptatum dolorem deserunt? Error beatae obcaecati unde eum,
            consectetur earum numquam voluptatum iure? Quas aliquam soluta quidem, corporis impedit
            architecto! Fuga nemo ab totam expedita, corrupti quaerat tempora soluta mollitia
            asperiores quis beatae vero illo, commodi laborum sapiente inventore, veritatis nihil
            tempore. Quam facilis repudiandae corrupti cupiditate iusto veritatis dolor.
          </p>
        </section>
      </section>
    </Layout>
  );
}
