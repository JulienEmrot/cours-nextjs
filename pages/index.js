import Link from "next/link";

export default function Home() {
    return (
            <div className={'container px-4 pt-5'}>
                <h1>Bienvenu sur Code.io</h1>
                <div className={'grid grid-cols-12 sm:grid-cols-6'}>
                    <div>
                        <div>
                            <h5>Lisez les articles</h5>
                            <h6>Maximisez votre culture web</h6>
                        </div>
                        <div>
                            <p>Ceci est le texte</p>
                        </div>
                        <Link href={'/blog'}>
                            Visitez le blog
                        </Link>
                    </div>
                </div>
            </div>
    )
}
