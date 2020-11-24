import React, {Component} from 'react';
import {PutiConsumer} from "./Mycontext";

class Poti extends Component {
    render() {
        return (
            <div>
                <p>I aM from Poti</p>
                {/*<h1>{this.props.name}</h1>*/}
                <h2>
                    <PutiConsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }
                    </PutiConsumer>
                </h2>
            </div>
        );
    }
}

export default Poti;