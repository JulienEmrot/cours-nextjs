import React from 'react';

function

Article({article}) {
    return (
        <div>
            <h1>{article.title}</h1>
        </div>
    );
}

export default Article;

export async function getStaticProps(context) {

    const id = context.params.article;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const article = await data.json();

    return {
        props: {
            article
        }
    }
}

export async function getStaticPaths() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts")

    const articles = await data.json();

    const paths = articles.map(item => ({
        params: {article: item.id.toString()}
    }))

    return {
            paths,
            fallback: false
    }

}