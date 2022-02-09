import React from 'react';
import AppFrame from './AppFrame';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi molestiae vel architecto cupiditate pariatur dolor accusantium voluptas non dolorem, vero sunt hic illo quo excepturi quam et eos beatae autem.
        </AppFrame>
    </Router>
) 