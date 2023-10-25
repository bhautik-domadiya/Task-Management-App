import "../MobileView/style.css"

export default function MobileView() {
    return (
        <div className="mobile-board">
            <div className="chips-main flex">
                <button>To Do(3)</button>
                <button>In Progress(2)</button>
                <button>Done(1) </button>
            </div>
        </div>
    )
}