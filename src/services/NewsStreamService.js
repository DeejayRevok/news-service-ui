// @flow

import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";

export class NewsStreamService {

    static NEWS_EXCHANGE_PATH = '/exchange/news/';

    static subscribe = (brokerUrl: string, user: string, pass: string, newCallback: Function) => {
        const client = Stomp.client(brokerUrl);
        client.debug = () => {};
        const loginCredentials = {login: user, passcode: pass};
        client.connect(loginCredentials, () => {
            client.subscribe(this.NEWS_EXCHANGE_PATH, message => {
                console.log(message.body);
                const newData = JSON.parse(message.body);
                newCallback(newData);
            });
        });
    }

}