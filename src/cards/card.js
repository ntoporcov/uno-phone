import React from "react";

class Shape extends React.Component{
    render() {
        switch (this.props.id) {
            // default is 0
            default:
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a40.12,40.12,0,0,0-40,40v40a40,40,0,0,0,80,0V140A39.86,39.86,0,0,0,100,100Zm20,80a20,20,0,0,1-40,0V140a20,20,0,0,1,40,0ZM40,30V50a10,10,0,0,1-20,0V30A9.9,9.9,0,0,1,30,20,10.16,10.16,0,0,1,40,30Zm0,230A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100C200,188.4,128,260,40,260Zm130-10a19.81,19.81,0,0,1,20,20v20a20,20,0,0,1-40,0V270A19.81,19.81,0,0,1,170,250Zm-10,40V270a10,10,0,0,1,20,0v20a10,10,0,0,1-20,0ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a40.12,40.12,0,0,1,40,40V20A20.06,20.06,0,0,0,180,0ZM50,50A19.81,19.81,0,0,1,30,70,19.81,19.81,0,0,1,10,50V30A19.81,19.81,0,0,1,30,10,19.81,19.81,0,0,1,50,30Z"
                    />
                );
            case 'card1':
                return (
                    <path style={{fill:this.props.color}}
                          d="M92,100,72,120v24l20-20v96h20V100ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130-10h10v48l10-10v12l-10,10H170ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a40.12,40.12,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM30,70H20V22L10,32V20L20,10H30Z"
                    />
                );
            case 'card2':
                return (
                    <path style={{fill:this.props.color}}
                          d="M96,100a40.12,40.12,0,0,0-40,40v4H76v-4a20,20,0,0,1,40,0c0,4.4-3.6,13.2-7.6,16.4C87.2,173.2,87.6,170.4,56,192v28h80V192H116v8H80c24.8-17.6,26.4-17.2,46-34.4,6.4-5.6,10-16.8,10-25.6A39.86,39.86,0,0,0,96,100ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm150-10v14c-15.6,10.8-15.6,9.6-26,17.6-2,1.6-4,6-4,8.4a10,10,0,0,0,20,0v-2h10v2a20,20,0,0,1-40,0c0-4.4,2-10,5.2-12.8,9.6-8.8,10.8-8.4,22.8-17.2H160v4H150V250h40ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a40.12,40.12,0,0,1,40,40V20A20.06,20.06,0,0,0,180,0ZM30,60H40V56H50V70H10V56c15.6-10.8,15.6-9.6,26-17.6,2-1.6,4-6,4-8.4a10,10,0,0,0-20,0v2H10V30A19.81,19.81,0,0,1,30,10,19.81,19.81,0,0,1,50,30c0,4.4-2,10-5.2,12.8C35.2,51.6,34,51.2,22,60Z"                    />
                );
            case 'card3':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a30.22,30.22,0,0,0-30,30H90a10,10,0,1,1,10,10H88v20h12a20,20,0,1,1-20,20H60a40,40,0,1,0,64-32,28.71,28.71,0,0,0,6-18A30,30,0,0,0,100,100ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130.4-10a19.81,19.81,0,0,1,20,20h-10a10,10,0,1,0-10,10h6v10h-6a4.86,4.86,0,0,0-4.8,4.8,5.16,5.16,0,0,0,4.8,4.8,4.86,4.86,0,0,0,4.8-4.8h10A15.19,15.19,0,0,1,170,310a14.86,14.86,0,0,1-14.8-15.2,14,14,0,0,1,3.2-8.8,20.27,20.27,0,0,1-8-16A19.81,19.81,0,0,1,170.4,250ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM29.6,70a19.81,19.81,0,0,1-20-20h10a10,10,0,1,0,10-10h-6V30h6a5.16,5.16,0,0,0,4.8-4.8,5.16,5.16,0,0,0-4.8-4.8,4.86,4.86,0,0,0-4.8,4.8h-10A15.19,15.19,0,0,1,30,10,14.61,14.61,0,0,1,44.8,25.2,14,14,0,0,1,41.6,34a20.27,20.27,0,0,1,8,16A19.81,19.81,0,0,1,29.6,70Z"
                    />
                );
            case 'card4':
                return (
                    <path style={{fill:this.props.color}}
                          d="M95.2,100,56,180v20h48v20h20V200h12V180H124V140H104v40H76.8L116,100ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm115.6-10h10v10h24v10L170,310H159.6l19.6-40H165.6v20h-10V270h-6V260h6ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM49.6,60h-6V70h-10V60H9.6V50L29.2,10H39.6L20,50H33.6V30h10V50h6Z"
                    />
                );
            case 'card5':
                return (
                    <path style={{fill:this.props.color}}
                          d="M64,100v60h40a20,20,0,1,1-20,20H64a40,40,0,1,0,40-40H84V120h56V100H64ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130-10a19.81,19.81,0,0,1,20,20H180a10,10,0,1,0-10,10h20v30H152V300h28V290H170a20,20,0,0,1,0-40ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM30,70A19.81,19.81,0,0,1,10,50H20A10,10,0,1,0,30,40H10V10H48V20H20V30H30a20,20,0,0,1,0,40Z"
                    />
                );
            case 'card6':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a40.12,40.12,0,0,0-40,40v40a40,40,0,1,0,40-40,42.51,42.51,0,0,0-20,5.2V140a19.81,19.81,0,0,1,20-20,19,19,0,0,1,17.6,11.2l18-8.8A39,39,0,0,0,100,100Zm0,60a20,20,0,1,1-20,20A19.81,19.81,0,0,1,100,160ZM40,50A10,10,0,1,1,30,40,9.9,9.9,0,0,1,40,50ZM160,270a10,10,0,0,1,20,0,10.16,10.16,0,0,1-10,10A9.9,9.9,0,0,1,160,270ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130-10a19.81,19.81,0,0,1,20,20v20a19.81,19.81,0,0,1-20,20,19.23,19.23,0,0,1-17.6-11.2l8.8-4.4A9.89,9.89,0,0,0,180,290v-2.8a17.18,17.18,0,0,1-10,2.8,20,20,0,0,1,0-40ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM30,70A19.81,19.81,0,0,1,10,50V30A19.81,19.81,0,0,1,30,10,19.43,19.43,0,0,1,47.6,21.2l-8.8,4.4A9.89,9.89,0,0,0,20,30v2.8A17.18,17.18,0,0,1,30,30a20,20,0,0,1,0,40Z"
                    />
                );
            case 'card7':
                return (
                    <path style={{fill:this.props.color}}
                          d="M66,100v40H86V120h40L86,220h20l40-100V100H66ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm140-10-20,50h20V290h10v20H150V300l20-50ZM180,0H20A20.06,20.06,0,0,0,0,20V220A160,160,0,0,1,160,60a39.61,39.61,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM50,20,30,70H20L40,20H20V30H10V10H50Z"
                    />
                );
            case 'card8':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a30.22,30.22,0,0,0-30,30,31.33,31.33,0,0,0,6,18,40,40,0,1,0,48,0,28.71,28.71,0,0,0,6-18A29.71,29.71,0,0,0,100,100Zm0,20a10,10,0,1,1-10,10A9.9,9.9,0,0,1,100,120Zm-2,40h2a20,20,0,1,1-20,20C80,169.6,88,160.8,98,160ZM25.2,24.8A4.62,4.62,0,0,1,30,20a4.8,4.8,0,0,1,0,9.6A5.16,5.16,0,0,1,25.2,24.8ZM174.8,295.2a4.8,4.8,0,1,1-9.6,0,5.16,5.16,0,0,1,4.8-4.8A4.86,4.86,0,0,1,174.8,295.2ZM180,0H20A20.06,20.06,0,0,0,0,20V220A160,160,0,0,1,160,60a39.61,39.61,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM30,70A19.81,19.81,0,0,1,10,50a20.27,20.27,0,0,1,8-16,14,14,0,0,1-3.2-8.8,15.2,15.2,0,0,1,30.4,0A14,14,0,0,1,42,34a20.27,20.27,0,0,1,8,16A19.81,19.81,0,0,1,30,70ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130-10a19.81,19.81,0,0,1,20,20,20.27,20.27,0,0,1-8,16,14,14,0,0,1,3.2,8.8,15.2,15.2,0,0,1-30.4,0A14,14,0,0,1,158,286a20.27,20.27,0,0,1-8-16A19.81,19.81,0,0,1,170,250ZM40,50a10,10,0,0,1-20,0,10,10,0,0,1,9.2-10H30A9.9,9.9,0,0,1,40,50ZM160,270a10,10,0,1,1,10,10h-.8C164,279.2,160,275.2,160,270Z"
                    />
                );
            case 'card9':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a40,40,0,0,0,0,80,42.51,42.51,0,0,0,20-5.2V180a19.81,19.81,0,0,1-20,20,19,19,0,0,1-17.6-11.2l-18,8.8a39.34,39.34,0,0,0,35.6,22,40.12,40.12,0,0,0,40-40v-40A39.78,39.78,0,0,0,100,100Zm0,20a20,20,0,1,1-20,20A20.06,20.06,0,0,1,100,120ZM40,30A10,10,0,1,1,30,20,9.9,9.9,0,0,1,40,30ZM160,290a10,10,0,1,1,10,10A9.9,9.9,0,0,1,160,290ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm130-10c8,0,14.8,4.4,17.6,11.2l-8.8,4.4A9.89,9.89,0,0,0,160,270v2.8a17.18,17.18,0,0,1,10-2.8,20,20,0,1,1-20,20V270A19.81,19.81,0,0,1,170,250ZM180,0H20A20.06,20.06,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM50,50A19.81,19.81,0,0,1,30,70,20.14,20.14,0,0,1,12.4,58.8l8.8-4.4A9.89,9.89,0,0,0,40,50V47.2A17.18,17.18,0,0,1,30,50,19.81,19.81,0,0,1,10,30,19.81,19.81,0,0,1,30,10,19.81,19.81,0,0,1,50,30Z"
                    />
                );
            case 'cardBlock':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,100a58.68,58.68,0,0,0-42.4,17.6c-23.6,23.6-23.6,61.6,0,84.8,23.6,23.6,61.6,23.6,84.8,0s23.6-61.6,0-84.8c-11.6-12-26.8-17.6-42.4-17.6Zm0,20a42.35,42.35,0,0,1,20.4,5.6L65.6,180.4c-9.2-15.2-6.8-35.6,6.4-48.8C79.6,123.6,89.6,120,100,120Zm34.4,19.6c9.2,15.2,6.8,35.6-6.4,48.8a40,40,0,0,1-48.8,6ZM50,22.8,22.8,50A20.11,20.11,0,0,1,26,25.6c3.6-4,8.8-5.6,14-5.6A17.18,17.18,0,0,1,50,22.8ZM142.8,290a20.11,20.11,0,0,1,3.2-24.4c3.6-4,8.8-5.6,14-5.6a17.18,17.18,0,0,1,10,2.8ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm141.2-1.2a30,30,0,1,1-42.4,0,29.94,29.94,0,0,1,42.4,0ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM61.2,61.2A30,30,0,0,1,18.8,18.8a29.94,29.94,0,0,1,42.4,0A30.18,30.18,0,0,1,61.2,61.2Zm-4-31.6A20.11,20.11,0,0,1,54,54c-6.8,6.4-16.8,7.6-24.4,2.8Zm92.4,267.2,27.6-27.2A20.11,20.11,0,0,1,174,294C167.2,300.4,157.2,301.6,149.6,296.8Z"
                    />
                );
            case 'cardReverse':
                return (
                    <path style={{fill:this.props.color}}
                          d="M100,94.8l10,10-40,40c-10,10-10,30,0,40l20-20,40-40,10,10v-40Zm0,130-10-10,40-40c10-10,10-30,0-40l-20,20-40,40-10-10v40ZM40,260A40.12,40.12,0,0,1,0,220v80a19.81,19.81,0,0,0,20,20H180a19.81,19.81,0,0,0,20-20V100A160,160,0,0,1,40,260Zm145.2,25.2-20,20L170,310v.4H150.4v-20l4.8,4.8,20-20,10-10C190,270,190,280.4,185.2,285.2ZM170,244.8v-.4h19.6v20l-4.8-4.8-20,20-10,10c-4.8-4.8-4.8-15.2,0-20l20-20ZM180,0H20A19.81,19.81,0,0,0,0,20V220A160,160,0,0,1,160,60a39.86,39.86,0,0,1,40,40V20A19.81,19.81,0,0,0,180,0ZM45.2,50l-20,20L30,74.8v.4H10.4v-20L15.2,60l20-20,10-10C50,34.8,50,45.2,45.2,50Zm4.4-20.4-4.8-4.8-20,20-10,10c-4.8-4.8-4.8-15.2,0-20l20-20L30,10V9.6H49.6Z"
                    />
                );
            case 'cardWild2':
                return (
                    <path style={{fill:this.props.color}}
                          d="M95.87,190.4,92.8,201.2c-1.6,4.8-7.2,9.2-12.4,9.2h-20c-5.6,0-8.8-4-7.6-9.2l14.8-52C68.8,144,74.4,140,80,140H91.67L80,181.2c-1.2,5.2,2,9.2,7.6,9.2Zm11.73-71.2-14.8,52c-1.2,5.2,2,9.2,7.6,9.2h20c5.2,0,10.8-4.4,12.4-9.2l14.8-52c1.2-5.2-2-9.2-7.6-9.2H120C114.4,110,108.8,114,107.6,119.2ZM200,20v80a39.86,39.86,0,0,0-40-40A160,160,0,0,0,0,220V20A19.81,19.81,0,0,1,20,0H180A19.81,19.81,0,0,1,200,20ZM34,40H24V30H14V40H4V50H14V60H24V50H34ZM52,60c12.4-8.8,13.2-8.4,22.8-17.2C78,40,80,34.4,80,30A20.06,20.06,0,0,0,60,10,19.81,19.81,0,0,0,40,30v2H50V30a10,10,0,0,1,20,0c0,2.4-2,6.8-4,8.4C55.2,46.8,55.6,45.2,40,56V70H80V56H70v4H52Zm148,40V300a19.81,19.81,0,0,1-20,20H20A19.81,19.81,0,0,1,0,300V220a40.12,40.12,0,0,0,40,40A160,160,0,0,0,200,100ZM166,280h10v10h10V280h10V270H186V260H176v10H166Zm-6-30H120v14h10v-4h18c-12.4,8.8-13.2,8.4-22.8,17.2C122,280,120,285.6,120,290a20.06,20.06,0,0,0,20,20,19.81,19.81,0,0,0,20-20v-2H150v2a10,10,0,0,1-20,0c0-2.4,2-6.8,4-8.4,10.8-8.4,10.4-6.8,26-17.6Z"
                    />
                );
            case 'cardChangeColor':
                return (
                    <g>
                        <g id="abd3c333-5145-42fe-9740-3cfbb4ccf6a0" data-name="g9888">
                            <path id="a65913f5-4618-4c59-b7c5-76463b8fc23f" data-name="rect3757-26-33-5-9" d="M22.1,0h160a20.06,20.06,0,0,1,20,20V300a20.06,20.06,0,0,1-20,20H22.1a20.06,20.06,0,0,1-20-20V20A20.06,20.06,0,0,1,22.1,0Z"/>
                            <path id="fa041637-0114-4a7a-8373-076b8bcc38c7" data-name="path3773-0-4-8-4-60-3-86-5" d="M162.1,60A160,160,0,0,0,2.1,220a40,40,0,0,0,40,40,160,160,0,0,0,160-160A40,40,0,0,0,162.1,60Z" style={{fill:'#fff'}}/>
                            <path id="f38293eb-823a-4430-a0f9-ccfe879c51e6" data-name="path3773-0-4-8-8-7-9-0" d="M13.9,160A159.62,159.62,0,0,0,2.1,220a40,40,0,0,0,40,40l60-100Z" style={{fill:"#fa0"}}/>
                            <path id="e5546942-1c06-4f3e-949a-e4b61a374b52" data-name="path3773-0-4-8-8-5-6-5-0" d="M102.1,160l-60,100c67.1,0,124.5-41.4,148.3-100Z" style={{fill:"#0a0"}}/>
                            <path id="ab18b79f-7be0-4695-8e76-eff274d0e5a6" data-name="path3773-0-4-8-8-1-4-3" d="M162.1,60C95,60,37.6,101.4,13.8,160H102Z" style={{fill:"#f55"}}/>
                            <path id="be3fb3fe-2b3c-4b38-b927-458785d95a72" data-name="path3773-0-4-8-8-5-8-3-9" d="M162.1,60l-60,100h88.3a159.62,159.62,0,0,0,11.8-60A40.14,40.14,0,0,0,162.1,60Z" style={{fill:"#55f"}}/>
                            <path id="b9247d46-9faf-4feb-beae-f7226556747c" data-name="path3773-0-4-8-8-7-9-5-7" d="M15.1,35a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10l15-25Z" style={{fill:"#fa0"}}/>
                            <path id="fba7b8f6-f199-4c01-aa8d-01e62ed37faa" data-name="path3773-0-4-8-8-5-6-5-08-9" d="M37.1,35l-15,25A40,40,0,0,0,59.2,35Z" style={{fill:"#0a0"}}/>
                            <path id="af1cd3f8-cd84-40be-8ca5-9c21ae736727" data-name="path3773-0-4-8-8-1-4-39-9" d="M52.1,10A40,40,0,0,0,15,35H37.1Z" style={{fill:"#f55"}}/>
                            <path id="aeb11fac-823c-4b0b-96f6-69d282702afe" data-name="path3773-0-4-8-8-5-8-3-3-7" d="M52.1,10l-15,25H59.2a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,52.1,10Z" style={{fill:"#55f"}}/>
                            <path id="ac69afa4-97a5-4370-bfc1-680a16afffdc" data-name="path3773-0-4-8-8-7-9-5-3" d="M145.1,285a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10l15-25Z" style={{fill:"#fa0"}}/>
                            <path id="e7a322b5-9386-43d7-839e-2d1a5faad4bc" data-name="path3773-0-4-8-8-5-6-5-08-5" d="M167.1,285l-15,25a40,40,0,0,0,37.1-25Z" style={{fill:"#0a0"}}/>
                            <path id="a338396b-132f-43c2-b3fb-9d38010fd950" data-name="path3773-0-4-8-8-1-4-39-7" d="M182.1,260A40,40,0,0,0,145,285h22.1Z" style={{fill:"#f55"}}/>
                            <path id="b1186f84-a287-4fe8-938b-d381a66a4719" data-name="path3773-0-4-8-8-5-8-3-3-6" d="M182.1,260l-15,25h22.1a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,182.1,260Z" style={{fill:"#55f"}}/>
                            <path id="b1accbb3-a71b-4822-92e1-79140807d23d" data-name="path3773-0-4-8-8-7-9-0-03-8" d="M162.1,60C95,60,37.6,101.4,13.8,160A159.62,159.62,0,0,0,2,220a40,40,0,0,0,40,40c67.1,0,124.5-41.4,148.3-100a159.62,159.62,0,0,0,11.8-60A40,40,0,0,0,162.1,60Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                            <path id="a1631330-3ec1-46ae-b903-18570cd09a66" data-name="path3773-0-4-8-8-7-9-0-03-8-9" d="M52.1,10A40,40,0,0,0,15,35a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10A40,40,0,0,0,59.2,35a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,52.1,10Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                            <path id="b9593a3e-c727-44a3-8416-812bafcf127b" data-name="path3773-0-4-8-8-7-9-0-03-8-9-5" d="M182.1,260A40,40,0,0,0,145,285a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10,40,40,0,0,0,37.1-25,39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,182.1,260Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                        </g>
                        <g id="a763016f-a912-4ee7-8c40-685040d70852" data-name="g9888-0">
                            <path id="a94e219c-2a19-457b-bd82-e6c30b398cff" data-name="rect3757-26-33-5-9-0" d="M22.1,0h160a20.06,20.06,0,0,1,20,20V300a20.06,20.06,0,0,1-20,20H22.1a20.06,20.06,0,0,1-20-20V20A20.06,20.06,0,0,1,22.1,0Z"/>
                            <path id="b41e11de-104d-4eb3-8636-b511091d9ed9" data-name="path3773-0-4-8-4-60-3-86-5-7" d="M162.1,60A160,160,0,0,0,2.1,220a40,40,0,0,0,40,40,160,160,0,0,0,160-160A40,40,0,0,0,162.1,60Z" style={{fill:"#fff"}}/>
                            <path id="a2385536-6e00-4e7d-8b94-1815f6b73f02" data-name="path3773-0-4-8-8-7-9-0-9" d="M13.9,160A159.62,159.62,0,0,0,2.1,220a40,40,0,0,0,40,40l60-100Z" style={{fill:"#fa0"}}/>
                            <path id="bb2c3175-78bb-43d3-9978-7da9b87887d3" data-name="path3773-0-4-8-8-5-6-5-0-08" d="M102.1,160l-60,100c67.1,0,124.5-41.4,148.3-100Z" style={{fill:"#0a0"}}/>
                            <path id="a1019183-fc1f-4cd4-bcda-bbacf0a18fc9" data-name="path3773-0-4-8-8-1-4-3-1" d="M162.1,60C95,60,37.6,101.4,13.8,160H102Z" style={{fill:"#f55"}}/>
                            <path id="e533ba80-d04e-4dad-be1f-ecb667928b0c" data-name="path3773-0-4-8-8-5-8-3-9-4" d="M162.1,60l-60,100h88.3a159.62,159.62,0,0,0,11.8-60A40.14,40.14,0,0,0,162.1,60Z" style={{fill:"#55f"}}/>
                            <path id="b7d04652-666b-49ca-ae91-66b98b474abb" data-name="path3773-0-4-8-8-7-9-5-7-0" d="M15.1,35a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10l15-25Z" style={{fill:"#fa0"}}/>
                            <path id="f67b60bd-1d9b-4807-a6d1-1a268937bd41" data-name="path3773-0-4-8-8-5-6-5-08-9-79" d="M37.1,35l-15,25A40,40,0,0,0,59.2,35Z" style={{fill:"#0a0"}}/>
                            <path id="b47a99c5-8185-4edb-8f44-6a19865e9b0d" data-name="path3773-0-4-8-8-1-4-39-9-5" d="M52.1,10A40,40,0,0,0,15,35H37.1Z" style={{fill:"#f55"}}/>
                            <path id="af1ddab3-1f05-404d-8396-0aa5e612cd5c" data-name="path3773-0-4-8-8-5-8-3-3-7-38" d="M52.1,10l-15,25H59.2a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,52.1,10Z" style={{fill:"#55f"}}/>
                            <path id="b9e1f711-e8b4-4ff7-9f02-9ef4638ac8a3" data-name="path3773-0-4-8-8-7-9-5-3-2" d="M145.1,285a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10l15-25Z" style={{fill:"#fa0"}}/>
                            <path id="e8ff1e0c-9ae4-4bd0-aee1-8b1ea772fbc1" data-name="path3773-0-4-8-8-5-6-5-08-5-3" d="M167.1,285l-15,25a40,40,0,0,0,37.1-25Z" style={{fill:"#0a0"}}/>
                            <path id="a1599e7b-c275-40df-af02-80d88b26a108" data-name="path3773-0-4-8-8-1-4-39-7-2" d="M182.1,260A40,40,0,0,0,145,285h22.1Z" style={{fill:"#f55"}}/>
                            <path id="a7ca0934-3e70-42bc-badf-ce456e328014" data-name="path3773-0-4-8-8-5-8-3-3-6-1" d="M182.1,260l-15,25h22.1a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,182.1,260Z" style={{fill:"#55f"}}/>
                            <path id="bb306b72-baca-48aa-b81d-dd7d120a3cc8" data-name="path3773-0-4-8-8-7-9-0-03-8-0" d="M162.1,60C95,60,37.6,101.4,13.8,160A159.62,159.62,0,0,0,2,220a40,40,0,0,0,40,40c67.1,0,124.5-41.4,148.3-100a159.62,159.62,0,0,0,11.8-60A40,40,0,0,0,162.1,60Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                            <path id="adfd52e6-6c64-44b6-8cd8-bed93e0e7bae" data-name="path3773-0-4-8-8-7-9-0-03-8-9-4" d="M52.1,10A40,40,0,0,0,15,35a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10A40,40,0,0,0,59.2,35a39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,52.1,10Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                            <path id="ad6592c4-cdb3-4296-aeb8-2344f6423303" data-name="path3773-0-4-8-8-7-9-0-03-8-9-5-07" d="M182.1,260A40,40,0,0,0,145,285a39.3,39.3,0,0,0-2.9,15,10,10,0,0,0,10,10,40,40,0,0,0,37.1-25,39.3,39.3,0,0,0,2.9-15A10,10,0,0,0,182.1,260Z" style={{fill:"none",stroke:"#fff",strokeWidth:"4px"}}/>
                        </g>
                    </g>
            );
            case 'cardWild4':
                return(
                    <g id="bd7f52e8-1e33-4103-99ad-ee17b8754cd1" data-name="g6694">
                        <path id="aae552d1-b050-4d20-a2f9-5f113ce6a15e" data-name="rect3757-26-33-5-9-9" d="M20,0H180a19.81,19.81,0,0,1,20,20V300a19.81,19.81,0,0,1-20,20H20A19.81,19.81,0,0,1,0,300V20A20.06,20.06,0,0,1,20,0Z"/>
                        <path id="a106bc0c-01f2-444d-ab21-a821e05a1143" data-name="path3773-0-4-8-4-60-3-86-5-6" d="M160,60A160,160,0,0,0,0,220a40.12,40.12,0,0,0,40,40A160,160,0,0,0,200,100,39.86,39.86,0,0,0,160,60Z" style={{fill:"#fff"}}/>
                        <path id="e265d262-8117-4709-bbf9-6e047da3d45d" data-name="rect3980-7-6-2-9-5-60-5-3-1-5" d="M59.6,10,40,50V60H64V70H74V60h6V50H74V30H64V50H50.4L70,10Z" style={{fill:"#fff"}}/>
                        <path id="aefb329a-c7cc-49be-85fc-3f9ef5f606f0" data-name="rect5649-4" d="M14,30V40H4V50H14V60H24V50H34V40H24V30Z" style={{fill:"#fff"}}/>
                        <path id="bb91d8df-ac3c-4fd0-b7dc-f091e13bf575" data-name="rect3980-7-6-2-9-5-60-5-3-1-8-9" d="M140.4,310,160,270V260H136V250H126v10h-6v10h6v20h10V270h13.6L130,310Z" style={{fill:"#fff"}}/>
                        <path id="f45f8c51-aaa4-4994-a91b-dd222376076d" data-name="rect5649-1-1" d="M186,290V280h10V270H186V260H176v10H166v10h10v10Z" style={{fill:"#fff"}}/>
                        <g id="b0358920-2ff7-4f53-bf88-3f385301e1b4" data-name="g6111-38-2">
                            <path id="a3e0918e-dbe4-40aa-8f7b-6f31951ea73b" data-name="rect6095-2-9" d="M62.8,110h40c5.6,0,8.8,4,7.6,9.2L90,191.2c-1.6,4.8-7.2,9.2-12.4,9.2h-40c-5.6,0-8.8-4-7.6-9.2l20.4-72C51.6,114,57.6,110,62.8,110Z" style={{fill:"#fff"}}/>
                            <path id="ab5609b8-f0fe-4cf0-8e7f-353d518ee68e" data-name="rect6097-5-7" d="M70,120H90c5.6,0,8.8,4,7.6,9.2l-14.8,52c-1.6,4.8-7.2,9.2-12.4,9.2h-20c-5.6,0-8.8-4-7.6-9.2l14.8-52C58.8,124,64.4,120,70,120Z" style={{fill:"#f55"}}/>
                        </g>
                        <g id="b19a30ad-79d9-40df-bbbc-cab7d2141b0a" data-name="g6111-62-2-1">
                            <path id="accb4d21-108b-4b71-8b5a-6c4b8469b048" data-name="rect6095-14-0-3" d="M102.8,80h40c5.6,0,8.8,4,7.6,9.2l-20.4,72c-1.6,4.8-7.2,9.2-12.4,9.2h-40c-5.6,0-8.8-4-7.6-9.2l20.4-72C91.6,84,97.6,80,102.8,80Z" style={{fill:"#fff"}}/>
                            <path id="f93b9207-247e-4f4b-8bbb-bcf9ea15432e" data-name="rect6097-6-3-2" d="M110,90h20c5.6,0,8.8,4,7.6,9.2l-14.8,52c-1.6,4.8-7.2,9.2-12.4,9.2h-20c-5.6,0-8.8-4-7.6-9.2l14.8-52C98.8,94,104.4,90,110,90Z" style={{fill:"#55f"}}/>
                        </g>
                        <g id="f675eee9-213c-4264-b890-9e3cbf3fe394" data-name="g6111-3-5">
                            <path id="e7e251ad-fbf8-4299-929d-986f4ae276fa" data-name="rect6095-0-3" d="M92.8,140h40c5.6,0,8.8,4,7.6,9.2l-20.4,72c-1.6,4.8-7.2,9.2-12.4,9.2h-40c-5.6,0-8.8-4-7.6-9.2l20.4-72C81.6,144,87.6,140,92.8,140Z" style={{fill:"#fff"}}/>
                            <path id="af2a4eab-5590-4dc1-80f4-eb2ed866a328" data-name="rect6097-7-4" d="M100,150h20c5.6,0,8.8,4,7.6,9.2l-14.8,52c-1.6,4.8-7.2,9.2-12.4,9.2h-20c-5.6,0-8.8-4-7.6-9.2l14.8-52C88.8,154,94.4,150,100,150Z" style={{fill:"#fa0"}}/>
                        </g>
                        <g id="e836be77-0007-4bca-b06d-9b26e45fe975" data-name="g6111-62-7-3">
                            <path id="af85a3d2-1943-41d9-ac18-f3fb7e85185d" data-name="rect6095-14-8-2" d="M132.8,110h40c5.6,0,8.8,4,7.6,9.2l-20.4,72c-1.6,4.8-7.2,9.2-12.4,9.2h-40c-5.6,0-8.8-4-7.6-9.2l20.4-72C121.6,114,127.6,110,132.8,110Z" style={{fill:"#fff"}}/>
                            <path id="e2b69c32-af80-4815-b041-401f9c9d2911" data-name="rect6097-6-7-1" d="M140,120h20c5.6,0,8.8,4,7.6,9.2l-14.8,52c-1.6,4.8-7.2,9.2-12.4,9.2h-20c-5.6,0-8.8-4-7.6-9.2l14.8-52C128.8,124,134.4,120,140,120Z" style={{fill:"#5a5"}}/>
                        </g>
                    </g>
                )

        }
    }
}

export default class Card extends React.Component{
    render(){
        return(
            <svg id="b7d18098-20cc-4f87-bdf2-87d037126528"
                 data-name="svg2"
                 xmlns="http://www.w3.org/2000/svg"
                 width="100%"
                 height="100%"
                 viewBox="0 0 200 320"
            >
                <Shape id={this.props.id} color={this.props.color}/>
            </svg>
                )
    }
}
