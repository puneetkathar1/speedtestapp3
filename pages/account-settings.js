import React from 'react';
import Head from 'next/head';
import { AgentAccountSettingsPage } from 'container/Agent/';
import GetAPIData, { ProcessAPIData } from 'library/helpers/get_api_data';

export default function accountSettingsPage(props) {
  return (
    <>
      <Head>
        <title>Account Settings | TripFinder.</title>
      </Head>
      <AgentAccountSettingsPage processedData={props.processedData} />
    </>
  );
}

export async function getStaticProps() {
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'agentProfile',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  return {
    props: { processedData: processedData },
  };
}
