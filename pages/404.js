import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>oops, Something went wrong !!</h1>
        <p>Try Going <Link href="/"><a>Back</a></Link>.</p>
       
    </div>
);

export default errorPage;