import Tabs from "@/components/page-tabs";
import DailyAPOD from "@/components/daily-apod";
import HistoryAPOD from "@/components/history";
import Generator from "@/components/generator";

export default function APODPage() {

    const tabs = [
        { label: 'Daily', content: (
            <div className="daily-tab tab-page" id="daily">
                <DailyAPOD/>
            </div>
        )},

        { label: 'History', content: (
            <div className="history-tab tab-page" id="history">
                <HistoryAPOD/>
            </div>
        )},

        { label: 'Generator', content: (
            <div className="generator-tab tab-page" id="generator">
                <Generator/>
            </div>
        )},
    ];

    return(
        <main className="apod-page">
            <Tabs tabs={tabs}/>
        </main>
    );
}