import Link from 'next/link';

const MDXcomponentsConfig = {
  h1: (props) => (
    <>
      <h1
        className="font-bold text-4xl dark:text-money-textLight py-4"
        {...props}
      />
    </>
  ),
  h2: (props) => <h2 className="font-bold text-2xl py-2 " {...props} />,
  h3: (props) => <h3 className="font-bold text-lg py-2 " {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
  inlineCode: (props) => (
    <div className="text-md rounded-3xl max-w-5xl p-4 text-accent2 text-money-textLight dark:text-money-textLight bg-black border-2 dark:border-money-lAccent2 dark:border-opacity-50 m-2">
      <span>{' ' + '> $\r\n'}</span>
      <code className="tracking-widest" {...props} />
    </div>
  ),
  br: (props) => <br {...props} />,
  hr: (props) => <hr className="m-4" {...props} />,
  p: (props) => <p className="" {...props} />,
  ul: (props) => (
    <ul
      className="list-inside pl-8 list-disc text-money-dAccent2 dark:text-money-textLight"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-inside pl-8 list-decimal text-money-dAccent2 dark:text-money-textLight"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="py-1 text-money-dAccent2 dark:text-money-textLight"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="font-bold text-money-dAccent2 dark:text-money-textLight"
      {...props}
    />
  ),
  table: (props) => (
    <table
      className="w-full max-w-xl text-center m-auto dark:text-money-dAccent1"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="bg-white border-2 border-black border-opacity-30 text-lg py-2 tracking-wide"
      {...props}
    />
  ),
  tbody: (props) => (
    <tbody className="border-2 border-black border-opacity-30" {...props} />
  ),
  tr: (props) => <tr className="bg-blue-200" {...props} />,
  td: (props) => (
    <td
      className="border-2 border-black border-opacity-30 bg-blue-200"
      {...props}
    />
  ),
  code: (props) => (
    <div className="text-md rounded-3xl max-w-5xl p-4 text-accent2 text-money-textLight dark:text-money-textLight bg-black border-2 dark:border-money-lAccent2 dark:border-opacity-50 m-2">
      <span>> $</span>
      <br />
      <code className="tracking-widest rounded-3xl " {...props} />
    </div>
  ),
  img: (props) => (
    <img className="text-money-dAccent2 dark:text-money-textLight" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="sm:w-1/2 mx-2 my-4 xs:mx-6 border-2 border-black dark:border-white border-opacity-30 dark:border-opacity-30 bg-black dark:border-2 dark:bg-money-dAccent2 p-4 rounded shadow-lg text-lg italic bg-opacity-10"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-blue-700 underline dark:text-blue-300 text-lg"
      {...props}
    />
  ),
  dt: (props) => <dt className="font-bold tracking-wide" {...props} />,
  dd: (props) => <dd className="" {...props} />,
  //   tbody: (props) => <tbody className="" {...props} />,
  //   tbody: (props) => <tbody className="" {...props} />,
};

export default MDXcomponentsConfig;
