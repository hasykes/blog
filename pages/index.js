import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, content } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {content.map((c, k) => (
              <li key={k}>
                <h2>{c.name}</h2>
                <p>{c.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}