import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";

function DemandStep1({ id, name, store, cart, setCart }) {
  const card = {
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "15px",
    padding: "45px 40px 10px 40px",
    color: "#002B5B",
    height: "480px",
  };
  const contentStyle = {
    marginTop: "15px",
    marginBottom: "5px",
    textAlign: "center",
  };
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
    marginLeft: "15%",
    marginRight: "75%",
  };

  const [buttonStyle, setButtonStyle] = useState({
    border: "none",
    borderRadius: "10px",
    width: "400px",
    margin: "15px",
  });
  const [state, setState] = useState(false);

  // 測試點選返回按鈕後留著上一次的點選紀錄（先別刪）
  // useEffect(() => {
  //   if (list.includes(id)) {
  //     setButtonStyle({...buttonStyle, backgroundColor: "lightgreen"});
  //     setState(true);
  //   }
  // }, []);

  function handleSelect() {
    if (!state) {
      setButtonStyle({
        ...buttonStyle,
        backgroundColor: "lightgreen",
        borderRadius: "10px",
        width: "400px",
        margin: "15px",
      });
      cart.push({ id, name, store });
      localStorage.setItem("cart", JSON.stringify(cart));
      setState(true);
    } else {
      setButtonStyle({
        border: "none",
        borderRadius: "10px",
        width: "400px",
        margin: "15px",
      });
      setState(false);
      let newCart = cart.filter((e) => {
        return e.id !== id;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button style={buttonStyle} onClick={handleSelect}>
        <Card style={card}>
          <Card.Img
            style={goodsImgStyle}
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
          />
          <Card.Body style={contentStyle}>
            <Card.Title>
              物資名稱：<b>{name}</b>
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              物資提供商家：
              <a style={demandHrefStyle} href="#">
                {store}
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </button>
    </div>
  );
}

export default DemandStep1;
