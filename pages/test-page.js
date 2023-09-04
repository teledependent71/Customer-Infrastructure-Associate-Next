import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Customer Infrastructure Associate</title>
          <meta
            property="og:title"
            content="test-page - Customer Infrastructure Associate"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_ieu935) => (
            <>
              <h1>{context_ieu935?.name}</h1>
            </>
          )}
          initialData={props.contextIeu935Prop}
          persistDataDuringLoading={true}
          key={props?.contextIeu935Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextIeu935Prop = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextIeu935Prop: contextIeu935Prop?.data?.[0],
    },
  }
}
