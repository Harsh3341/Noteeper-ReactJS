import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Heading() {

    return (<header>
        <nav className="flex align-item-center">
            <div className="h-1">
                <HighlightIcon />
                Noteeper
            </div>
        </nav>
    </header>
    )
}

export default Heading;