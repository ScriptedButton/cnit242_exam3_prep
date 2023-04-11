import React from 'react';
import './App.css';
import {Button, Group, Image, Stack} from "@mantine/core";
import Draggable from 'react-draggable';


function App() {
    const [showKey, setShowKey] = React.useState(false);

    const images = {
        components: [
            "./images/APPLICATION.png",
            "./images/CLIENT_SPOOLER.png",
            "./images/GDI.png",
            "./images/GDI_SMALL.png",
            "./images/PRINT_DRIVER.png",
            "./images/PRINT_DRIVER_SMALL.png",
            "./images/PRINT_MONITOR.png",
            "./images/PRINT_ROUTER.png",
            "./images/PRINT_SPOOLER.png"
        ]
    };


    return (
        <div className="App">
            <Stack align={"center"} m={10}>
                <Image sx={{pointerEvents: "none"}} src={"./images/DIAGRAM_BLANK.png"} fit="contain" alt={"diagram_blank"}
                       height={671} width={1038}/>
                <Image sx={{pointerEvents: "none", position: "absolute", display: (showKey ? undefined : "none")}} src={"./images/ANSWER_KEY.png"} fit="contain" alt={"diagram_key"} height={671} width={1038}/>
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
