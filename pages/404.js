  import Image from "next/image"
  import Link from "next/link"
  // pages/404.js
  export default function Custom404() {
    return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>404 - Page Not Found</h1>
            <div>
                <Link href="/">
                    <Image
                        priority
                        src="/images/pandaSleeping.jpeg"
                        height={200}
                        width={200}
                    />
                </Link>
            </div>
    </div>);
  }