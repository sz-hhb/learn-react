import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";

export class HomeRanking extends PureComponent {
  constructor() {
    super();
    this.state = {
      songMenus: [
        { id: 111, name: "流行音乐" },
        { id: 222, name: "摇滚" },
        { id: 333, name: "民谣" },
      ],
    };
  }

  NavigateToDetail(id) {
    const { navigate } = this.props.router;
    navigate(`/detail/${id}`);
  }

  render() {
    const { songMenus } = this.state;

    return (
      <div>
        <h2>Ranking Nav</h2>
        <h2>榜单数据</h2>
        <ul>
          {songMenus.map((item) => {
            return (
              <li key={item.id} onClick={(e) => this.NavigateToDetail(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeRanking);
