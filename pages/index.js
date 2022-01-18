import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      
      </Head>
      <div className="container mt-2">

        <div className="post-card  d-flex p-3">
          <div className="card-img-text  ">
            <Image src="https://picsum.photos/id/237/290/100"
              width={300}
              height={170}

              className="card-img" alt="" />
            <div className="text-on-img">
              <p className={styles.color ," text-on-img"}>LEGEND GORUNS</p>
            </div>
          </div>
          <div className="post-card-details">
            <h1>MUN, JAN 2, 14:00 AM</h1>
            <h1>PST</h1>
            <div className="avatar-row mt-2 ml-3"><Image
              src="https://picsum.photos/id/237/50/50"
              alt="" className="avatar-circle" width={50}
              height={50}/>
             </div>
            <h2 className="sub-text">2.3 spots left</h2>
          </div>

        </div>

      </div>
    </div>
  )
}
