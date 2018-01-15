import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import { Provider as Fela } from 'react-fela';
import { createRenderer } from 'fela';
import App from './containers/App/App';
import controller from './controller';
import registerServiceWorker from './registerServiceWorker';

const felaRenderer = createRenderer();

ReactDOM.render(
    <Container controller={controller} >
        <Fela renderer={felaRenderer}>
            <App />
        </Fela>
    </Container>,
    document.getElementById('root')
);

registerServiceWorker();
