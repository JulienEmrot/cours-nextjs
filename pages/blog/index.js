import React from 'react';
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

function Index({articles}) {
    console.log(articles)
    return (
        <div className={'container mx-auto'}>
            <h1 className={'mb-4'}>Bienvenue sur le blog</h1>
            <div className={'grid grid-cols-12 gap-4'}>
                {articles.map(article => (
                    <div key={article.id} className={'col-span-12 sm:col-span-6 rounded-lg bg-gray-50 p-4'}>
                        <p>{article.title}</p>
                        <p>
                            {article.body.slice(0,20) + '...'}
                        </p>
                        <Link href={`/blog/${article.id}`} className={'text-blue-700'}>Lire cet article</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;

export async function getStaticProps() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts")

    const articles = await data.json();

    return {
        props: {
            articles
        }
    }

}