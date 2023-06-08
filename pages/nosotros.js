import Image from 'next/image'
import Layout from '@/components/layout'
import styles  from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLA, tienda música'}
        >
          <main className='contenedor'>
            <h1 className='heading'>Nosotros</h1>

            <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

              <div>
                <p>
                  In quis euismod nibh, a ultrices arcu. Vestibulum ut placerat quam. Aenean euismod dapibus commodo. 
                  Praesent vehicula lacinia ullamcorper. Pellentesque eu suscipit sem. Nulla a accumsan libero.
                  Sed bibendum iaculis elit vitae pulvinar. Phasellus non aliquet enim, ac tincidunt libero. Nunc tristique, 
                  lorem vel molestie convallis, ante libero congue ipsum, vel dictum turpis odio non metus. 
                </p>

                <p>
                  Nam tincidunt dolor id est faucibus, non ultrices sem maximus. Donec lobortis sollicitudin placerat. Maecenas nec ligula 
                  gravida massa cursus convallis. Aenean vel felis eu tortor euismod mollis. Proin mattis ultrices lobortis. Etiam eget maximus 
                  lectus, ut maximus ante. Aliquam volutpat cursus ultrices. Sed fermentum congue purus scelerisque congue. Vivamus sed leo id 
                  urna placerat accumsan. Nam elit neque, sagittis nec dapibus quis, convallis a diam. 
                </p>
              </div>
            </div>
          </main>
        </Layout>
  )
}

