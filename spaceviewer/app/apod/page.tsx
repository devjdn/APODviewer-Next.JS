import Tabs from "@/components/page-tabs";
import DailyAPOD from "@/components/apod-daily";
import HistoryAPOD from "@/components/apod-history";
import Generator from "@/components/apod-generator";

export default function APODPage() {

    const tabs = [
        { label: 'Daily', content: (
            <>
                <DailyAPOD/>
            </>
        )},

        { label: 'History', content: (
            <>
                <HistoryAPOD/>
            </>
        )},

        { label: 'Generator', content: (
            <>
                <Generator/>
            </>
        )},
    ];

    return(
        <>
            <Tabs tabs={tabs}/>
        </>
    );
}