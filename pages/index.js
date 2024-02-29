import Head from 'next/head';
import React, { useState } from 'react';

import { Button, BuyMeCoffee, Cover, Post, PostGrid, Section, SocialNetworks, Title } from '@/components';
import { loadPosts } from '@/pages/api/posts';

const LOAD_MORE_STEP = 4;

const Home = (props) => {
  const { initialPosts, total } = props;
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`).then(
        (response) => response.json(),
      );

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>NEXT blog</title>
      </Head>
      <Section>
        <Cover title="Sasha <br /> Shlyapik"></Cover>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>Actual posts</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts ...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { loadedPosts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: loadedPosts,
      total,
    },
  };
};

export default Home;
