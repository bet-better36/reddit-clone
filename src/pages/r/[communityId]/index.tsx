import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Community } from '../../../atoms/communitesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import Header from 'src/components/Community/Header';
import NotFound from 'src/components/Community/NotFound';
import PageContent from 'src/components/Layout/PageContent';

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log('here is data', communityData);

  if (!communityData) {
    return <NotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <div>lhs</div>
          <div>lhs con n</div>
          <div>lhs con n</div>
          <div>lhs con n</div>
        </>
        <>
          <div>rhs</div>
          <div>lhs con n</div>
          <div>lhs con n</div>
          <div>lhs con n</div>
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //get community data and pass it to client
  try {
    const communityDocRef = doc(
      firestore,
      'communities',
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : '',
      },
    };
  } catch (error) {
    // could add error page here
    console.log('getServerSideProps error', error);
  }
}
export default CommunityPage;
