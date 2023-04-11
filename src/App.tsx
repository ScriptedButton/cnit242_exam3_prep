import React from 'react';
import './App.css';
import {Button, Group, Image, Stack} from "@mantine/core";
import Draggable from 'react-draggable';


function App() {
    const [showKey, setShowKey] = React.useState(false);

    const images = {
        components: [
            "images/application.png",
            "images/client_spooler.png",
            "images/gdi.png",
            "images/gdi_small.png",
            "images/print_driver.png",
            "images/print_driver_small.png",
            "images/print_monitor.png",
            "images/print_router.png",
            "images/print_spooler.png"
        ]
    };


    return (
        <div className="App">
            <Stack align={"center"} m={10}>
                <Image sx={{pointerEvents: "none"}} src={"images/diagram_blank.png"} fit="contain" alt={"diagram_blank"}
                       height={671} width={1038}/>
                <Image sx={{pointerEvents: "none", position: "absolute", display: (showKey ? undefined : "none")}} src={"images/answer_key.png"} fit="contain" alt={"diagram_key"} height={671} width={1038}/>
                <Group>
                    {images.components.map((image, index) => {
                        return <Draggable>
                        <span>
                                                    <Image sx={{pointerEvents: "none", display: (!showKey ? undefined : "none")}} fit="contain" src={image}
                                                           alt={`component-${index}`} height={60} width={200}/>
                        </span>
                        </Draggable>
                    })}
                </Group>
                <Button onClick={() => setShowKey(!showKey)}>
                    Reveal Key
                </Button>
            </Stack>
        </div>
    );
}

export default App;
