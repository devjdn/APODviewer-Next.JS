import Tabs from "@/components/page-tabs";

export default function MarsPage() {

    const tabs = [
        { label: 'Latest', content: (
            <>
            </>
        )},

        { label: 'Rover', content: (
            <>
            </>
        )},

        { label: 'Gallery', content: (
            <>
            </>
        )},
    ];

    return(
        <>
        <Tabs tabs={tabs}/>
        </>
    );
}