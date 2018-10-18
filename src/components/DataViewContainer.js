import React from 'react';
import {ShotChart} from "./ShotChart"
import _ from 'lodash';
import {CountSlider} from "./CountSlider"
import { Radio, Switch, Row, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayToolTips: true,
    }

    onCountSliderChange = (minCount) => {
        this.setState({
            minCount
        });
    }

    onChartTypeChange = (e) => {
        console.log(e); // e.target.value
        this.setState({
            chartType: e.target.value,
        });
    }

    onTooltipChange = (displayToolTips) => {
        this.setState({
            displayToolTips
        });
    }

    render() {
        const {minCount, chartType, displayToolTips} = this.state;
        console.log(this.state);
        return (
            <div  className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayToolTips={displayToolTips}
                    chartType={chartType}
                />
                {
                    chartType === "hexbin" ?
                        <CountSlider
                            value={minCount}
                            onChange={_.debounce(this.onCountSliderChange, 500)}
                        />  : null
                }

                <Row>
                    <Col span={10} offset={6}>
                        <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                        <Radio value={"hexbin"}>Hexbin</Radio>
                        <Radio value={"scatter"}>Scatter</Radio>
                        </RadioGroup>
                    </Col>
                    <Col span={2}>
                        <Switch
                            checkedChildren="On"
                            unCheckedChildren="Off"
                            defaultChecked onChange={this.onTooltipChange}
                        />
                    </Col>
                </Row>


            </div>
        );
    }
}