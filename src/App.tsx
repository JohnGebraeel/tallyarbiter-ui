import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "antd/dist/antd.css";
import "./App.scss";

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

function App() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient("http://127.0.0.1:4455");
        console.log("IK KOM HIER");
        socket.on("initialdata", function (
            sourceTypes: any,
            sourceTypesDataFields: any,
            outputTypes: any,
            outputTypesDataFields: any,
            busOptions: any,
            sourcesData: any,
            devicesData: any,
            deviceSources: any,
            deviceActions: any,
            deviceStates: any,
            tslClients: any,
            cloudDestinations: any,
            cloudKeys: any,
            cloudClients: any
        ) {
            console.log(sourceTypes);
            console.log(sourceTypesDataFields);
            console.log(outputTypes);
            console.log(outputTypesDataFields);
            console.log(busOptions);
            console.log(sourcesData);
            console.log(devicesData);
            console.log(deviceSources);
            console.log(deviceActions);
            console.log(deviceStates);
            console.log(tslClients);
            console.log(cloudDestinations);
            console.log(cloudKeys);
            console.log(cloudClients);
        });
        socket.emit("sources");
        socket.on("sources", (data: any) => console.log(data));
    }, []);

    return (
        <div className="App">
            <Layout>
                <Header>
                    <img src="/logo_white.png" height={50} />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default App;
