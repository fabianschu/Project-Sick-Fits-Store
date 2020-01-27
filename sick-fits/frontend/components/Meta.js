import Head from 'next/head';   //next makes sure that data is updated

const Meta = () => (
    <Head>
        {/* allow responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        {/* progress bar: */}
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Sick Fits!</title>
    </Head>
);

export default Meta;
