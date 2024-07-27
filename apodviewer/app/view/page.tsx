import Tabs from "@/components/page-tabs";
import DailyAPOD from "@/components/daily-apod";
import HistoryAPOD from "@/components/history";

export default function ViewPage() {

    const tabs = [
        { label: 'Daily', content: (
            <div className="daily-tab tab-page">
                <DailyAPOD/>
            </div>
        )},

        { label: 'History', content: (
            <div className="history-tab tab-page">
                <HistoryAPOD/>
            </div>
        )},

        { label: 'Generator', content: (
            <div className="generator-tab tab-page">
                
            </div>
        )},
    ];

    return(
        <main className="view-page">
            <Tabs tabs={tabs}/>
        </main>
    );
}