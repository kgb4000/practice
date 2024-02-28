export async function getProductSlug(slug) {
  const res = await fetch(
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Product($slug: String!) {
            product(where: {slug: $slug}) {
            id
            name
            metaDescription
            price
            image
            slug
          }
        }`,
        variables: {
          slug: slug,
        },
      }),
    }
  )
  const data = await res.json()
  console.log(data)
  return data.data.product
}

// import { gql } from 'graphql-request'

// const RelatedProducts = gql`
//   {
//     category(where: { slug: "raw-sea-moss" }) {
//       id
//       name
//       products {
//         id
//         name
//         price
//         image {
//           url
//           altText
//           width
//           height
//         }
//         slug
//       }
//     }
//   }
// `

// const GoldSeaMoss = gql`
//   {
//     products(where: { slug: "gold-sea-moss" }) {
//       id
//       name
//       price
//       image {
//         url
//         altText
//         width
//         height
//       }
//       pageDescription {
//         raw
//       }
//       slug
//     }
//   }
// `

// const Categories = gql`
//   {
//     categories {
//       id
//       name
//       products {
//         id
//         name
//         price
//         image {
//           url
//           altText
//           width
//           height
//         }
//         slug
//       }
//     }
//   }
// `

// export default { Categories, GoldSeaMoss, RelatedProducts }
