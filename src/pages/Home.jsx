import imgHomePage from '../images/imgHomePage.jpg';

const Home = () => {
  return (
    <div className="py-4 flex flex-col-reverse items-center mt-6 md:mt-0 md:flex-row">
      <div className="md:relative md:flex md:flex-col md:w-2/4 md:text-left  md:items-start ">
        <h1 className="mb-4 text-2xl xl:text-3xl font-black fontFamily-serif text-center">
          Welcome to the{' '}
          <span className="uppercase text-purple">tweets list!</span>{' '}
        </h1>
        <span className="text-lg text-justify ">
          Allows you with the help of a convenient list of tweet cards to
          subscribe to the authors you are interested in following. Also thanks
          to the convenient card filter, you will be able to get a list of cards
          to which you have subscribed and not subscribed, so that you do not
          forget about anyone! :) To start working with the{' '}
          <span className="uppercase text-purple">tweets list</span>, you need
          to{' '}
          <a
            className="text-lg text-purple underline italic hover:text-orange"
            href="/cards-tweets/tweets"
          >
            Tweets
          </a>
        </span>
      </div>
      <div className="flex w-2/4">
        <img src={imgHomePage} alt="" className="object-cover" />
      </div>
    </div>
  );
};
export default Home;
