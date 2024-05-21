import React, { Component } from "react";
import "./inventory.css";

export default class Inventory extends Component {
    render() {
        return (
            <div className="inventory-container">
                <h1>Inventory</h1>
                <div className="inventory-list">
                    {this.props.inventory.map((item) => (
                        <div className="inventory_item" key={item.id}>
                            <p className="inventory_name">{item.content}</p>
                            <button
                                className="decrease_amount_btn inventory_btns"
                                onClick={() =>
                                    this.props.handleInventoryAmount(
                                        item.id,
                                        -1
                                    )
                                }
                            >
                                {" "}
                                -{" "}
                            </button>
                            <p> {item.amount} </p>
                            <button
                                className="increse_amount_btn inventory_btns"
                                onClick={() =>
                                    this.props.handleInventoryAmount(item.id, 1)
                                }
                            >
                                {" "}
                                +{" "}
                            </button>

                            <button
                                className="add_to_cart_btn inventory_btns"
                                onClick={() =>
                                    this.props.handleAddToCart(item.id)
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
