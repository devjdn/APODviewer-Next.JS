import Tabs from "@/components/page-tabs";
import DailyAPOD from "@/components/daily-apod";

export default function ViewPage() {

    const tabs = [
        { label: 'Daily', content: (
            <div className="daily-tab">
                <DailyAPOD/>
            </div>
        )},

        { label: 'History', content: (
            <div className="history-tab">
                
            </div>
        )},

        { label: 'Generator', content: (
            <div className="generator-tab">
                
            </div>
        )},
    ];

    return(
        <main className="view-page">
            <Tabs tabs={tabs}/>
        </main>
    );
}