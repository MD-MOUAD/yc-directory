import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams?: Promise<{
    query: string;
  }>;
}) => {
  const query = (await searchParams)?.query;
  const posts = [
    {
      _id: "1",
      createdAt: new Date().toISOString(),
      views: 55,
      author: {
        name: "John Doe",
        _id: "1",
        image: "https://avatars.githubusercontent.com/u/125469605?v=4",
      },
      title: "we Robots",
      category: "Robots",
      image: "https://www.allthingsdistributed.com/images/roboaccel1.png",
      description:
        "Now, the reality is that this isn’t so much of a prediction as it as an observation of what’s already happening all around us.",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitched, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All startups`}
        </p>
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts?.map((post: any) => (
              <li key={post?._id}>
                <StartupCard post={post} />
              </li>
            ))
          ) : (
            <p className="">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};
export default Home;
