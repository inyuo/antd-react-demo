import React from 'react';
import {Row, Col, Card, Icon} from 'antd';

import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
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
      </div>
    );
  }
}

export default Welcome;
