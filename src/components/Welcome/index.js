import React from 'react';
import {Row, Col, Card, Icon} from 'antd';
import G2 from '@antv/g2';


import './index.less';





/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    const chart = new G2.constructor({
      container: 'c1',
      width: 1000,
      height: 500,
      source:data,
      scale:{
        tickInterval: 20
      },
      padding: [ 20, 20, 95, 80 ], // 上，右，下，左
    });
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card title={"总销售额"} extra={<Icon type="info-circle"></Icon>}>
              <div className={"charTop"}>
                <span className={"total"}>¥ 126,560</span>
              </div>
              <div className={"content"}>
                <div className={"trendItem"}>
                  <span>日环比<span className={"trendText"}>12%</span></span>
                  <span className={"trendIcon"}><Icon type="caret-up" style={{color: 'red'}}/></span>
                </div>
                <div className={"trendItem"}>
                  <span>周同比<span className={"trendText"}>11%</span></span>
                  <span className={"trendIcon"}><Icon type="caret-down" style={{color: 'green'}}/></span>
                </div>
              </div>
              <div className={"footer"}>
                <div className={"daySell"}>
                  <span>日均销售额 ￥</span>
                  <span>12,423</span>
                </div>

              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card title={"访问量"} extra={<Icon type="info-circle"></Icon>}>
              <div className={"charTop"}>
                <span className={"total"}>8,848</span>
              </div>
              <div className={"footer"}>
                <div className={"daySell"}>
                  <span>日访问量</span>
                  <span>12,423</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card title={"支付笔数"} extra={<Icon type="info-circle"></Icon>}>
              <div className={"charTop"}>
                <span className={"total"}>6,560</span>
              </div>
              <div className={"footer"}>
                <div className={"daySell"}>
                  <span>日访问量</span>
                  <span>12,423</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card title={"运营活动效果"} extra={<Icon type="info-circle"></Icon>}>
              <div className={"charTop"}>
                <span className={"total"}>78%</span>
              </div>
              <div className={"footer"}>
                <div className={"daySell"}>
                  <span>日访问量</span>
                  <span>12,423</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={20}>
            <div id="c1">
              <chart/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;
