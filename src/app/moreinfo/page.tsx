"use client";

import { useSearchParams } from "next/navigation";


const Page = ()=>{

    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    return(
        <>{id}</>
    )
}

export default Page;