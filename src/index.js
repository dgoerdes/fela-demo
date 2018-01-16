import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Container } from '@cerebral/react';
import { Provider as Fela } from 'react-fela';
import { createRenderer } from 'fela';
import embedded from 'fela-plugin-embedded'
import App from './containers/App/App';
import controller from './controller';
import registerServiceWorker from './registerServiceWorker';

const felaRenderer = createRenderer({
    plugins: [
        embedded(),
    ]
});

ReactDOM.render(
    <Container controller={controller} >
        <Fela renderer={felaRenderer}>
            <App />
        </Fela>
    </Container>,
    document.getElementById('root')
);

registerServiceWorker();
